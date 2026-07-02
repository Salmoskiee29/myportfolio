"use client";
import { useInView } from "@/hooks/useInView";

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
    <section id="references" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className={`reveal ${inView ? "visible" : ""} mb-12`}>
          <p className="text-sm text-[#888] font-medium mb-2">Character References</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111]">References</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
          {references.map((r, i) => (
            <div
              key={r.name}
              className={`reveal delay-${i + 1} ${inView ? "visible" : ""} bg-[#EFEFEF] rounded-2xl border border-black/8 p-6 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
            >
              <div className="w-11 h-11 rounded-full bg-[#111] flex items-center justify-center shrink-0">
                <span className="text-white text-sm font-bold">{r.initials}</span>
              </div>
              <div>
                <p className="font-bold text-[#111] text-sm">{r.name}</p>
                <p className="text-xs text-[#666] mt-0.5">{r.company}</p>
                <a href={`mailto:${r.email}`} className="text-xs text-[#888] mt-1 block hover:text-[#111] transition-colors">
                  {r.email}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
