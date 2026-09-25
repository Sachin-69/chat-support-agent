"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { publications, certifications } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1];

export default function Publications() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-5 py-28 md:px-8">
      <span className="kicker">Research &amp; Credentials</span>
      <h2 className="display mt-4 text-5xl md:text-7xl">
        Published <span className="italic text-emerald">&amp;</span> certified.
      </h2>

      {/* Publications */}
      <div className="mt-14 space-y-4">
        {publications.map((pub, i) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease }}
            className="group grid gap-6 rounded-[28px] border border-ink/10 bg-cream p-8 shadow-card md:grid-cols-[auto_1fr_auto] md:items-center"
          >
            <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-ink font-serif text-2xl text-cream md:flex">
              §
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-soft px-3 py-1 font-mono text-[11px] font-semibold text-emerald-deep">
                  {pub.publisher} · {pub.year}
                </span>
                {pub.type && (
                  <span className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[11px] text-ink/50">
                    {pub.type}
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold leading-snug md:text-2xl">
                {pub.title}
              </h3>
              <p className="mt-2 text-sm text-ink/55">{pub.authors}</p>
              <p className="mt-1 text-sm italic text-ink/45">{pub.venue}</p>
            </div>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-1.5 self-start rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.03] md:self-center"
              >
                Read paper <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease }}
            className="flex items-start gap-5 rounded-[28px] border border-ink/10 bg-cream p-7 shadow-card"
          >
            {c.image ? (
              <Image
                src={c.image}
                alt={c.title}
                width={72}
                height={72}
                className="h-[72px] w-[72px] shrink-0 object-contain"
              />
            ) : (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-soft text-emerald-deep">
                <Award className="h-5 w-5" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-lg font-semibold leading-snug">
                {c.title}
              </h3>
              <p className="mt-1 text-sm text-ink/55">{c.issuer}</p>
              {c.meta && (
                <p className="mt-1 font-mono text-xs text-ink/35">{c.meta}</p>
              )}
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald transition-colors hover:text-emerald-deep"
                >
                  View certificate <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
