"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1];

export default function Contact() {
  const contacts = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      Icon: Phone,
    },
    { label: "GitHub", value: "Sachin-69", href: profile.github, Icon: Github },
    { label: "LinkedIn", value: "ksachinhebbar", href: profile.linkedin, Icon: Linkedin },
  ];

  return (
    <section id="contact" className="px-4 pb-8 pt-8 md:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-emerald px-6 py-24 text-cream md:px-16">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative text-center">
          {profile.photo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mx-auto mb-10 w-fit"
            >
              <div className="rounded-full bg-cream/20 p-1.5 backdrop-blur">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  width={112}
                  height={112}
                  className="h-28 w-28 rounded-full object-cover ring-4 ring-cream/40"
                />
              </div>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-cream/70"
          >
            Builders only
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="display mx-auto mt-4 max-w-3xl text-5xl md:text-7xl"
          >
            Let&apos;s build
            <br />
            something real.
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href={`mailto:${profile.email}`}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 text-lg font-semibold text-emerald-deep transition-transform hover:scale-[1.03]"
          >
            {profile.email}
            <ArrowUpRight className="h-5 w-5" />
          </motion.a>

          <div className="mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-cream/20 bg-cream/5 p-4 text-left transition-colors hover:bg-cream/15"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream/15">
                  <c.Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-cream/60">
                    {c.label}
                  </div>
                  <div className="truncate text-sm font-medium">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-3 px-2 py-6 text-center text-sm text-ink/40 md:flex-row md:text-left">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">Built with AI · Next.js · Vercel</p>
      </footer>
    </section>
  );
}
