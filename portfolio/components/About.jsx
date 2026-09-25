"use client";

import { motion } from "framer-motion";
import { skills, experience, education } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-28 text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <span className="kicker !text-emerald-bright">About</span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="display mt-5 max-w-4xl text-4xl md:text-6xl"
        >
          AI removed the ceiling.{" "}
          <span className="italic text-emerald-bright">I&apos;m the multiplier.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/60"
        >
          I don&apos;t just use AI — I build with it, end to end. Agents, RAG
          pipelines, guardrails, full-stack products. I review workflows, rebuild
          them better, and ship fast. People aren&apos;t the constraint anymore.
        </motion.p>

        {/* Skills */}
        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6, ease }}
            >
              <h3 className="mb-4 border-b border-cream/15 pb-2 font-mono text-xs uppercase tracking-[0.15em] text-emerald-bright">
                {s.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cream/15 px-3 py-1 text-sm text-cream/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience + Education */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.15em] text-cream/40">
              Experience
            </h3>
            {experience.map((e) => (
              <div
                key={e.role + e.org}
                className="flex items-baseline justify-between border-t border-cream/10 py-4"
              >
                <div>
                  <div className="font-serif text-xl">{e.role}</div>
                  <div className="text-sm text-cream/50">{e.org}</div>
                </div>
                <div className="font-mono text-xs text-cream/40">{e.period}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.15em] text-cream/40">
              Education
            </h3>
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="flex items-baseline justify-between border-t border-cream/10 py-4"
              >
                <div>
                  <div className="font-serif text-xl">{ed.degree}</div>
                  <div className="text-sm text-cream/50">{ed.school}</div>
                </div>
                <div className="font-mono text-xs text-cream/40">{ed.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
