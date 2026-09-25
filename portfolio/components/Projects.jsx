"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  Cpu,
  Smartphone,
  Globe,
  X,
  FolderOpen,
} from "lucide-react";
import { projects } from "@/lib/data";

const kindMeta = {
  ai: { label: "AI", Icon: Cpu },
  mobile: { label: "Mobile", Icon: Smartphone },
  web: { label: "Web", Icon: Globe },
};

const ease = [0.16, 1, 0.3, 1];

// Card face colors as they fan out of the folder
const faceStyles = [
  "bg-ink text-cream",
  "bg-emerald text-cream",
  "bg-cream text-ink border border-ink/10",
  "bg-emerald-deep text-cream",
  "bg-[#e8e3d8] text-ink border border-ink/10",
  "bg-ink text-cream",
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null); // selected project for modal
  const n = projects.length;

  // Cards fan UPWARD out of the folder in a symmetric arc, centred.
  const fanFor = (i) => {
    const mid = (n - 1) / 2;
    const offset = i - mid; // -mid..+mid
    return {
      x: offset * 250,
      // rise well above the folder; middle highest, edges a touch lower
      y: -330 + Math.abs(offset) * 26,
      rotate: offset * 7,
    };
  };

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="mb-10 text-center">
        <span className="kicker justify-center">Selected Work</span>
        <h2 className="display mt-4 text-5xl md:text-7xl">
          Everything I&apos;ve
          <br />
          <span className="italic text-emerald">built.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-ink/50">
          Hover the folder to open the archive.{" "}
          <span className="md:hidden">Tap to open.</span> Click any card for
          details.
        </p>
      </div>

      {/* ============ FOLDER (desktop hover) — centred, cards fan UP, pocket dips DOWN ============ */}
      <div className="relative mx-auto hidden h-[640px] w-full max-w-6xl select-none md:block">
        {/* FOLDER_W x FOLDER_H define the pocket; cards are exactly this size so
            the front pocket fully hides them when closed. */}
        <div
          className="group absolute left-1/2 top-[60%] h-[300px] w-[440px] -translate-x-1/2 -translate-y-1/2"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {/* Cards — SAME size as the folder, centred, fully behind the front pocket when closed */}
          {projects.map((p, i) => {
            const fan = fanFor(i);
            const { Icon, label } = kindMeta[p.kind] || kindMeta.web;
            const zBase = 10 + Math.round(n - Math.abs(i - (n - 1) / 2));
            return (
              <motion.button
                key={p.title}
                type="button"
                onClick={() => setActive(p)}
                initial={false}
                animate={
                  open
                    ? { x: fan.x, y: fan.y, rotate: fan.rotate, opacity: 1 }
                    : { x: 0, y: 0, rotate: 0, opacity: 1 }
                }
                transition={{ duration: 0.55, ease, delay: open ? i * 0.05 : (n - i) * 0.03 }}
                whileHover={{ y: fan.y - 26, scale: 1.04, zIndex: 95 }}
                style={{ zIndex: zBase }}
                className={`absolute inset-0 flex h-[300px] w-[440px] flex-col justify-between rounded-[26px] p-7 text-left shadow-float ${faceStyles[i % faceStyles.length]}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-60">
                    {label}
                  </span>
                  <Icon className="h-5 w-5 opacity-60" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-semibold leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-[80%] text-sm leading-snug opacity-70 line-clamp-2">
                    {p.blurb}
                  </p>
                </div>
              </motion.button>
            );
          })}

          {/* Folder FRONT pocket (translucent green) — SAME size, fully covers cards; dips DOWN on hover */}
          <motion.div
            initial={false}
            animate={
              open
                ? { y: 150, rotateX: 16, opacity: 0.97 }
                : { y: 0, rotateX: 0, opacity: 1 }
            }
            transition={{ duration: 0.6, ease }}
            style={{
              zIndex: 60,
              transformPerspective: 1400,
              transformOrigin: "bottom center",
            }}
            className="absolute inset-0 flex h-[300px] flex-col justify-end rounded-[26px] border border-emerald/45 bg-emerald/30 p-8 backdrop-blur-md"
          >
            <div className="flex items-center gap-2 text-emerald-deep">
              <FolderOpen className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                Archive
              </span>
            </div>
            <h3 className="mt-2 font-serif text-4xl font-semibold text-emerald-deep">
              Things I&apos;ve built
            </h3>
            <p className="mt-2 text-sm text-emerald-deep/70">
              {n} projects · hover to open
            </p>
          </motion.div>
        </div>
      </div>

      {/* ============ MOBILE: simple stacked list ============ */}
      <div className="grid gap-4 md:hidden">
        {projects.map((p) => {
          const { Icon, label } = kindMeta[p.kind] || kindMeta.web;
          return (
            <button
              key={p.title}
              onClick={() => setActive(p)}
              className="flex flex-col rounded-3xl border border-ink/10 bg-cream p-6 text-left shadow-card"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-soft px-3 py-1 text-xs font-semibold text-emerald-deep">
                  <Icon className="h-3.5 w-3.5" /> {label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink/40" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/55">{p.blurb}</p>
            </button>
          );
        })}
      </div>

      {/* ============ DETAIL MODAL ============ */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[32px] border border-ink/10 bg-cream p-8 shadow-float"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:bg-ink hover:text-cream"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {(() => {
                const { Icon, label } = kindMeta[active.kind] || kindMeta.web;
                return (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-soft px-3 py-1 text-xs font-semibold text-emerald-deep">
                    <Icon className="h-3.5 w-3.5" /> {label}
                  </span>
                );
              })()}

              <h3 className="mt-4 font-serif text-3xl font-semibold tracking-tight">
                {active.title}
              </h3>

              {active.badge && (
                <span className="mt-3 inline-flex w-fit items-center rounded-full border border-emerald/30 bg-emerald-soft px-3 py-1 text-xs font-medium text-emerald-deep">
                  {active.badge}
                </span>
              )}

              <p className="mt-4 text-[15px] font-medium text-ink/70">
                {active.blurb}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/55">
                {active.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-ink/10 px-2.5 py-1 font-mono text-[11px] text-ink/55"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3 border-t border-ink/10 pt-6">
                {active.repo && (
                  <a
                    href={active.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/40"
                  >
                    <Github className="h-4 w-4" />
                    {active.repo2 ? "Frontend" : "Code"}
                  </a>
                )}
                {active.repo2 && (
                  <a
                    href={active.repo2}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/40"
                  >
                    <Github className="h-4 w-4" /> Backend
                  </a>
                )}
                {active.live && (
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald px-4 py-2 text-sm font-semibold text-cream transition-transform hover:scale-[1.03]"
                  >
                    Live <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
