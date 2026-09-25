"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile, projects } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1];

// Small floating cards in the hero — pulls the top 3 featured projects
const floatCards = projects.filter((p) => p.featured).slice(0, 3);

const cardStyles = [
  { rotate: -8, x: "-2%", y: "6%", z: 10, bg: "bg-ink text-cream" },
  { rotate: 5, x: "22%", y: "-4%", z: 30, bg: "bg-emerald text-cream" },
  { rotate: -3, x: "46%", y: "12%", z: 20, bg: "bg-cream text-ink border border-ink/10" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-36 md:px-8 md:pt-44"
    >
      <div className="pointer-events-none absolute inset-0 dotted opacity-70" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ---- Left: type ---- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            <span className="kicker">AI Builder</span>
            {profile.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs font-medium text-ink/70">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-bright opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-bright" />
                </span>
                Available — Bangalore
              </span>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.05 }}
            className="display text-[clamp(3.2rem,9vw,7.5rem)]"
          >
            I build AI
            <br />
            that{" "}
            <span className="relative whitespace-nowrap italic text-emerald">
              ships fast
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink/60 md:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald px-7 py-3.5 font-semibold text-cream transition-transform hover:scale-[1.03]"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* ---- Right: floating project cards ---- */}
        <div className="relative hidden h-[420px] lg:block">
          {floatCards.map((p, i) => {
            const s = cardStyles[i];
            return (
              <motion.a
                key={p.title}
                href="#work"
                initial={{ opacity: 0, y: 40, rotate: s.rotate - 4 }}
                animate={{ opacity: 1, y: 0, rotate: s.rotate }}
                transition={{ duration: 0.8, ease, delay: 0.35 + i * 0.12 }}
                whileHover={{ y: -12, rotate: s.rotate * 0.5, scale: 1.03 }}
                style={{ left: s.x, top: s.y, zIndex: s.z }}
                className={`absolute flex h-64 w-52 flex-col justify-between rounded-3xl p-6 shadow-float ${s.bg}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">
                    {p.kind}
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed opacity-70">
                    {p.blurb}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* mobile: horizontal scroll of the same cards */}
      <div className="mt-14 flex gap-4 overflow-x-auto pb-4 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {floatCards.map((p, i) => {
          const s = cardStyles[i];
          return (
            <a
              key={p.title}
              href="#work"
              className={`flex h-56 w-48 shrink-0 flex-col justify-between rounded-3xl p-6 shadow-card ${s.bg}`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">
                {p.kind}
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold leading-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs opacity-70">{p.blurb}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
