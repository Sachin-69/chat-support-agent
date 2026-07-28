"""FastAPI application exposing the docs-grounded chat support agent."""

from __future__ import annotations

import os
from contextlib import asynccontextmanager
from typing import List

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from .chat_engine import ChatEngine
from .config import get_settings
from .llm import get_provider
from .vectorstore import Retriever

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATIC_DIR = os.path.join(BASE_DIR, "static")

# Application state populated at startup.
state: dict = {}


def _build_engine() -> ChatEngine:
    settings = get_settings()
    docs_dir = os.path.join(BASE_DIR, settings.docs_dir)
    retriever = Retriever()
    retriever.build(docs_dir, settings.chunk_size, settings.chunk_overlap)
    provider = get_provider(settings)
    return ChatEngine(settings, retriever, provider), retriever


@asynccontextmanager
async def lifespan(app: FastAPI):
    engine, retriever = _build_engine()
    state["engine"] = engine
    state["retriever"] = retriever
    yield
    state.clear()


app = FastAPI(
    title="Chat Support Agent",
    description="A support chatbot that answers ONLY from the provided support docs.",
    version="1.0.0",
    lifespan=lifespan,
)


# ----- Schemas -----
class ChatRequest(BaseModel):
    message: str = Field(..., description="The user's question.")


class SourceOut(BaseModel):
    doc: str
    title: str
    score: float
    snippet: str


class ChatResponse(BaseModel):
    answer: str
    grounded: bool
    sources: List[SourceOut]


# ----- Endpoints -----
@app.get("/api/health")
def health():
    retriever: Retriever = state["retriever"]
    settings = get_settings()
    return {
        "status": "ok",
        "provider": settings.llm_provider,
        "docs_indexed": retriever.num_docs,
        "chunks_indexed": retriever.num_chunks,
    }


@app.post("/api/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    engine: ChatEngine = state["engine"]
    retriever: Retriever = state["retriever"]
    if retriever.num_chunks == 0:
        raise HTTPException(
            status_code=503,
            detail="No support documents indexed. Add files to the docs/ folder and restart.",
        )
    result = engine.ask(req.message)
    return ChatResponse(
        answer=result.answer,
        grounded=result.grounded,
        sources=[SourceOut(**s.__dict__) for s in result.sources],
    )


@app.post("/api/reindex")
def reindex():
    """Rebuild the index after docs change (no server restart needed)."""
    engine, retriever = _build_engine()
    state["engine"] = engine
    state["retriever"] = retriever
    return {"status": "reindexed", "chunks_indexed": retriever.num_chunks}


@app.get("/")
def index():
    return FileResponse(os.path.join(STATIC_DIR, "index.html"))


# Serve static assets (the web UI).
if os.path.isdir(STATIC_DIR):
    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
