"use client";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "./SectionHeader";

const steps = [
  { n: "01", title: "Discovery & process mapping", text: "I sit down with owners and staff, map how stock, money and approvals actually move, and agree on a phased scope." },
  { n: "02", title: "Phased build with regular demos", text: "Core modules first, shipped in phases. You test working software on a staging site every week, not just at the end." },
  { n: "03", title: "Data migration, training & go-live", text: "I import your existing products and stock from Excel or your old system, train each role, and support the first days live." },
  { n: "04", title: "Maintenance & improvements", text: "After launch I stay on for fixes, monitoring and new features as your branches and processes grow." },
];

const support = [
  { title: "Free bug-fix warranty", text: "60 days after go-live, any defect in delivered features is fixed at no cost." },
  { title: "Monthly maintenance plan", text: "Optional retainer for monitoring, backups, security updates, minor changes and priority response." },
  { title: "Documentation & training", text: "User guides per role, recorded walkthroughs, and handover notes for your team." },
  { title: "You own everything", text: "Source code, database and accounts are in your name. No lock-in." },
];

const builds = [
  "POS & inventory systems",
  "Multi-branch & warehouse operations",
  "Purchasing, receiving & stock transfers",
  "Roles, approvals & audit trails",
  "Reports & owner dashboards",
  "E-commerce & booking websites",
  "AI chat agents & n8n automation",
];

export default function Services() {
  const { ref, inView } = useInView(0.1);
  const cycle = { "--cycle": "4s" } as React.CSSProperties;

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader n="03" label="services" inView={inView} delay={1.8} title={<>How I work with<br />businesses</>} />

        <div className={`reveal delay-1 ${inView ? "visible" : ""} flex flex-wrap gap-2 mb-12`}>
          {builds.map((b) => (
            <span key={b} className="chip text-sm py-2 px-4 text-white">{b}</span>
          ))}
        </div>

        {/* The four steps, wired together */}
        <div className="flex flex-col lg:flex-row lg:items-stretch mb-14" style={cycle}>
          {steps.map((s, i) => (
            <div key={s.n} className="flex flex-col lg:flex-row lg:flex-1 items-stretch lg:items-center">
              <div className={`reveal delay-${i + 1} ${inView ? "visible" : ""} node run flex-1 h-full p-6`} style={{ animationDelay: `${i * 0.9}s` }}>
                <p className="font-mono text-sm font-bold text-[var(--glow)] mb-3">{s.n}</p>
                <h3 className="font-bold text-white mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{s.text}</p>
              </div>
              {i < steps.length - 1 && (
                <div aria-hidden="true" className="wire self-center w-0.5 h-6 lg:w-5 lg:h-0.5 shrink-0">
                  <span className="dot v lg:hidden" style={{ animationDelay: `${i * 0.9 + 0.2}s` }} />
                  <span className="dot h hidden lg:block" style={{ animationDelay: `${i * 0.9 + 0.2}s` }} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`reveal ${inView ? "visible" : ""} node p-8 sm:p-10 border-[var(--glow)]`}>
          <p className="font-mono text-xs text-[var(--glow)] mb-2">after_sales</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">Maintenance &amp; support</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {support.map((s) => (
              <div key={s.title}>
                <p className="font-bold text-white mb-1.5 flex items-center gap-2"><span className="text-[var(--ok)]" aria-hidden="true">✓</span>{s.title}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
