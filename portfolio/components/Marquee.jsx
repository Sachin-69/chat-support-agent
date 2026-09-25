import { marquee } from "@/lib/data";

export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-ink py-4">
      <div className="flex w-max animate-ticker items-center gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-mono text-sm uppercase tracking-[0.15em] text-cream/70">
              {item}
            </span>
            <span className="text-emerald-bright">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
