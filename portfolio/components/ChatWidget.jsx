"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUp, Sparkles } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const suggestions = [
  "What is MediCopilot?",
  "How does Sachin ship so fast?",
  "Show me his AI stack",
  "How do I reach him?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [nudge, setNudge] = useState(false); // auto tooltip
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hey! I'm Sachin's AI. Ask me anything about his work, projects, or how he builds with AI.",
    },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  // Auto-show a nudge tooltip a few seconds after load, hide after a while.
  useEffect(() => {
    if (open) return;
    const show = setTimeout(() => setNudge(true), 2800);
    const hide = setTimeout(() => setNudge(false), 11000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [open]);

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: q }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        { role: "bot", text: data.answer || "Hmm, try asking that another way." },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Connection hiccup — try again in a sec." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Launcher + attention nudges */}
      <div className="fixed bottom-5 right-5 z-[90] flex items-center gap-3">
        {/* Nudge tooltip */}
        <AnimatePresence>
          {nudge && !open && (
            <motion.button
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ duration: 0.35, ease }}
              onClick={() => {
                setNudge(false);
                setOpen(true);
              }}
              className="group relative flex items-center gap-2 rounded-2xl border border-emerald/25 bg-cream px-4 py-3 text-left shadow-float"
            >
              <span className="text-lg">👋</span>
              <span className="text-sm font-medium text-ink">
                Ask my AI anything
                <span className="block text-xs font-normal text-ink/50">
                  Try &quot;What is MediCopilot?&quot;
                </span>
              </span>
              {/* little pointer */}
              <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-b border-r border-emerald/25 bg-cream" />
            </motion.button>
          )}
        </AnimatePresence>

        <div className="relative">
          {/* Pulsing rings (only when closed) */}
          {!open && (
            <>
              <motion.span
                className="absolute inset-0 rounded-full bg-emerald"
                animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="absolute inset-0 rounded-full bg-emerald"
                animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1,
                }}
              />
            </>
          )}

          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 14 }}
            onClick={() => {
              setNudge(false);
              setOpen((v) => !v);
            }}
            whileHover={{ scale: 1.06 }}
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald text-cream shadow-float"
            aria-label="Chat with Sachin's AI"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Sparkles className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>

            {/* "AI" badge */}
            {!open && (
              <span className="absolute -right-1 -top-1 flex items-center gap-1 rounded-full bg-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cream shadow">
                AI
              </span>
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease }}
            className="fixed bottom-24 right-5 z-[90] flex h-[70vh] max-h-[560px] w-[92vw] max-w-[400px] flex-col overflow-hidden rounded-[28px] border border-ink/10 bg-cream shadow-float"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-ink/10 bg-emerald px-5 py-4 text-cream">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/20">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="font-serif text-lg font-semibold leading-none">
                  Ask my AI
                </div>
                <div className="mt-1 text-[11px] text-cream/70">
                  Trained on Sachin&apos;s portfolio
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-ink text-cream"
                        : "bg-paper text-ink"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl bg-paper px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-2 w-2 rounded-full bg-emerald"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {messages.length <= 1 && !loading && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-emerald/30 bg-emerald-soft px-3 py-1.5 text-xs font-medium text-emerald-deep transition-colors hover:bg-emerald hover:text-cream"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-ink/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about a project…"
                className="flex-1 rounded-full border border-ink/15 bg-paper px-4 py-2.5 text-sm outline-none transition-colors focus:border-emerald"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald text-cream transition-transform hover:scale-105 disabled:opacity-40"
                aria-label="Send"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
