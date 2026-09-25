"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="display text-5xl text-emerald md:text-6xl">
              {s.value}
            </div>
            <div className="mt-2 border-t border-ink/15 pt-3 text-sm text-ink/55">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
