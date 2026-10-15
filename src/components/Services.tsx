"use client";
import { useInView } from "@/hooks/useInView";

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

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className={`reveal ${inView ? "visible" : ""} mb-10`}>
          <p className="text-sm text-[#888] font-medium mb-2">Services</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111] leading-tight">
            How I work with<br />businesses
          </h2>
        </div>

        <div className={`reveal delay-1 ${inView ? "visible" : ""} flex flex-wrap gap-2 mb-12`}>
          {builds.map((b) => (
            <span key={b} className="text-sm px-4 py-2 rounded-full bg-[#EFEFEF] border border-black/8 text-[#333] font-medium">{b}</span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {steps.map((s, i) => (
            <div key={s.n} className={`reveal delay-${i + 1} ${inView ? "visible" : ""} rounded-2xl bg-[#EFEFEF] border border-black/8 p-6`}>
              <p className="text-sm font-black text-[#bbb] mb-3">{s.n}</p>
              <h3 className="font-bold text-[#111] mb-2 leading-snug">{s.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className={`reveal ${inView ? "visible" : ""} rounded-3xl bg-[#111] text-white p-8 sm:p-10`}>
          <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">After-sales</p>
          <h3 className="text-2xl sm:text-3xl font-black mb-8">Maintenance &amp; support</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {support.map((s) => (
              <div key={s.title}>
                <p className="font-bold mb-1.5">{s.title}</p>
                <p className="text-sm text-white/65 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
