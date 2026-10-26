"use client";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "./SectionHeader";

const references = [
  {
    name: "Engar Del Rosario",
    company: "Infopro Business Solutions Inc.",
    email: "eadelrosario@ibs.com.ph",
    initials: "ED",
  },
  {
    name: "Mark Frederic Cabarrus",
    company: "Infopro Business Solutions Inc.",
    email: "mfcabarrus@ibs.com.ph",
    initials: "MC",
  },
];

export default function References() {
  const { ref, inView } = useInView();

  return (
    <section id="references" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader n="07" label="references" inView={inView} delay={1.5} title="Character references" />

        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
          {references.map((r, i) => (
            <div key={r.name} className={`reveal delay-${i + 1} ${inView ? "visible" : ""} node node-hover p-6 flex items-start gap-4`}>
              <span aria-hidden="true" className="w-11 h-11 rounded-full bg-[var(--panel-2)] border border-[var(--line)] flex items-center justify-center shrink-0 text-[var(--glow)] text-sm font-bold">{r.initials}</span>
              <div className="min-w-0">
                <p className="font-bold text-white text-sm">{r.name}</p>
                <p className="text-xs text-[var(--muted)] mt-0.5">{r.company}</p>
                <a href={`mailto:${r.email}`} className="link-underline text-xs text-[var(--glow)] mt-1 inline-block break-all">{r.email}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
