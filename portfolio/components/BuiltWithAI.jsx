"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { builtWithAI } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1];

export default function BuiltWithAI() {
  const { headline, sub, tools, workflow, proof } = builtWithAI;

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="rounded-[36px] border border-ink/10 bg-cream p-8 shadow-card md:p-14">
        <span className="kicker">
          <Sparkles className="h-3.5 w-3.5" /> Built with AI
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="display mt-5 max-w-3xl text-4xl md:text-6xl"
        >
          {headline}
        </motion.h2>
        <p className="mt-5 max-w-xl text-lg text-ink/55">{sub}</p>

        {/* Proof metrics */}
        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-ink/10 py-10 md:grid-cols-4">
          {proof.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease }}
            >
              <div className="display text-4xl text-emerald md:text-5xl">
                {p.metric}
              </div>
              <div className="mt-2 text-sm leading-snug text-ink/55">
                {p.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Workflow */}
          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.15em] text-ink/40">
              How I ship
            </h3>
            <ol className="space-y-5">
              {workflow.map((w, i) => (
                <motion.li
                  key={w.step}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease }}
                  className="flex gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald text-sm font-semibold text-cream">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-serif text-lg font-semibold">
                      {w.step}
                    </div>
                    <p className="text-sm text-ink/55">{w.text}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Tools */}
          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.15em] text-ink/40">
              My AI stack
            </h3>
            <div className="space-y-3">
              {tools.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease }}
                  className="flex items-center justify-between rounded-2xl border border-ink/10 bg-paper px-5 py-4"
                >
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-sm text-ink/50">{t.use}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
