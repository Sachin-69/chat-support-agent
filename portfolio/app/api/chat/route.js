import { NextResponse } from "next/server";
import { buildKnowledge, answerQuery } from "@/lib/chat-brain";

// Pre-build the knowledge base once per server instance.
const knowledge = buildKnowledge();

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Missing message" }, { status: 400 });
    }

    // ---- No-key smart retrieval (default) ----
    // To upgrade to a real LLM later: check for an env key here
    // (e.g. process.env.ANTHROPIC_API_KEY), call the provider with the
    // retrieved context as grounding, and return its text instead.
    const answer = answerQuery(message, knowledge);

    // Tiny delay so it feels like it's "thinking"
    await new Promise((r) => setTimeout(r, 250));

    return NextResponse.json({ answer });
  } catch (e) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
