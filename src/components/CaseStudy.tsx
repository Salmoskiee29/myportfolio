"use client";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "./SectionHeader";

const stats = [
  { value: "Live", label: "in daily use at ADZ Garage" },
  { value: "3", label: "branches + central warehouse" },
  { value: "50+", label: "modules across sales, inventory, HR & finance" },
  { value: "70+", label: "database tables with row-level security" },
];

const flow = [
  { step: "Supplier", note: "Supplier records & terms" },
  { step: "Purchase Order", note: "Costs, discounts, prepared-by" },
  { step: "Delivery Receipt", note: "Supplier submits via secure link" },
  { step: "Receiving", note: "Line-by-line, partial deliveries" },
  { step: "Warehouse", note: "Stock per location, reserved qty" },
  { step: "Transfer", note: "Warehouse → branch, ship & receive" },
  { step: "Sale", note: "POS, split payments, receipts" },
];

const features = [
  {
    img: "po",
    title: "Purchasing",
    text: "Purchase orders per supplier and receiving warehouse, with unit costs, stacked line discounts, credit terms and shipping charges. The system records who prepared each PO.",
  },
  {
    img: "supplier",
    title: "Supplier delivery portal",
    text: "Each PO gets a secure link. The supplier declares exactly what was delivered, and inventory does not move until staff confirm it.",
  },
  {
    img: "partial",
    title: "Receiving & partial deliveries",
    text: "Receiving is tracked per line: ordered, received and pending. Partial deliveries keep the PO open until every item is complete.",
  },
  {
    img: "transfer",
    title: "Multi-location stock & transfers",
    text: "Stock is held per warehouse and branch, including reserved quantities. Transfers move stock between locations with ship and receive dates.",
  },
  {
    img: "pos",
    title: "Point of sale",
    text: "Fast search with live stock counts, discounts and promos, and split payments across cash, GCash, banks, cards and checks. Includes reservations with downpayments, refunds and voids.",
  },
  {
    img: "roles",
    title: "Roles & permissions",
    text: "Seven roles with view, create, edit, delete, export and approve rights per module. For example, cashiers can sell but cannot touch products or stock.",
  },
  {
    img: "audit",
    title: "Complete audit trail",
    text: "Database-level triggers log every insert, update and delete: who did it, when, and the exact before → after values. Nothing in the flow is anonymous.",
  },
  {
    img: "dashboard",
    title: "Reports & dashboards",
    text: "Live dashboard, daily sales report with payment breakdown and expenses, analytics by date range, and exports to Excel and PDF. An e-commerce module is already built in.",
  },
];

const role = [
  "Gathered requirements directly from the business owner and staff",
  "Designed the PostgreSQL schema, row-level security and audit triggers",
  "Built the full Next.js front end: POS, inventory, purchasing, HR and finance",
  "Migrated thousands of SKUs from the shop's Excel inventory",
  "Deployed on Vercel + Supabase and provide ongoing support and new features",
];

export default function CaseStudy() {
  const { ref, inView } = useInView(0.05);
  const flowCycle = { "--cycle": "5s" } as React.CSSProperties;

  return (
    <section id="case-study" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeader
          n="02" label="case-study" inView={inView} delay={0.6}
          title="ADZflow: retail, inventory & operations system for a multi-branch automotive business"
          intro={<>ADZ Garage sells tires, wheels, oils and 4x4 parts across three branches. Inventory lived in Excel and
            stock movements were hard to trace. I designed and built ADZflow as a single system for purchasing,
            receiving, stock, sales and staff, with every transaction traceable to the person who did it.</>}
        />

        {/* Stats */}
        <div className={`reveal delay-1 ${inView ? "visible" : ""} grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14`}>
          {stats.map((s) => (
            <div key={s.label} className="node node-hover p-5">
              <p className="text-3xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-xs text-[var(--muted)] leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Video */}
        <div className={`reveal delay-2 ${inView ? "visible" : ""} mb-16`}>
          <div className="node overflow-hidden p-0">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--line)] font-mono text-xs text-[var(--muted)]">
              <span className="w-2 h-2 rounded-full bg-[var(--ok)]" aria-hidden="true" /> execution · walkthrough.mp4
            </div>
            <video
              src="/adzflow/walkthrough.mp4"
              poster="/adzflow/poster.jpg"
              controls
              preload="none"
              playsInline
              className="w-full aspect-video bg-black"
            />
          </div>
          <p className="text-xs text-[var(--dim)] mt-3">
            3-minute walkthrough on a demo database: one purchase order followed from supplier to sale, then traced in the audit log.
          </p>
        </div>

        {/* Traceability flow — the light runs supplier → sale */}
        <div className={`reveal ${inView ? "visible" : ""} mb-16`} style={flowCycle}>
          <h3 className="text-2xl font-extrabold text-white mb-2">End-to-end traceability</h3>
          <p className="text-[var(--muted)] text-sm mb-6 max-w-2xl">
            Every step below is recorded with the user, timestamp and changed values, so any item can be traced from supplier to sale.
          </p>
          <ol className="flex flex-col lg:flex-row lg:items-stretch">
            {flow.map((f, i) => (
              <li key={f.step} className="flex flex-col lg:flex-row lg:flex-1 items-stretch lg:items-center">
                <div className="node run relative flex-1 p-4 rounded-[14px]" style={{ animationDelay: `${i * 0.7}s` }}>
                  <span className="font-mono text-[10px] text-[var(--dim)]">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-bold text-sm text-white leading-tight mt-1">{f.step}</p>
                  <p className="text-[11px] text-[var(--muted)] leading-snug mt-1">{f.note}</p>
                </div>
                {i < flow.length - 1 && (
                  <div aria-hidden="true" className="wire self-center w-0.5 h-6 lg:w-4 lg:h-0.5 shrink-0">
                    <span className="dot v lg:hidden" style={{ animationDelay: `${i * 0.7 + 0.15}s` }} />
                    <span className="dot h hidden lg:block" style={{ animationDelay: `${i * 0.7 + 0.15}s` }} />
                  </div>
                )}
              </li>
            ))}
          </ol>
          <div className="mt-3 rounded-xl border border-dashed border-[var(--wire)] px-4 py-2.5 font-mono text-xs text-[var(--muted)] text-center">
            audit_log: who · when · before → after, on every step
          </div>
        </div>

        {/* Features with screenshots */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal delay-${(i % 2) + 1} ${inView ? "visible" : ""} node node-hover overflow-hidden`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/adzflow/${f.img}.jpg`}
                alt={`ADZflow ${f.title} screen`}
                loading="lazy"
                className="w-full aspect-[800/505] object-cover object-top border-b border-[var(--line)]"
              />
              <div className="p-5">
                <h4 className="font-bold text-lg text-white mb-1.5">{f.title}</h4>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Role + stack */}
        <div className={`reveal ${inView ? "visible" : ""} grid md:grid-cols-2 gap-6`}>
          <div className="node p-6">
            <p className="font-mono text-xs text-[var(--glow)] mb-4">role: sole developer</p>
            <ul className="space-y-2.5">
              {role.map((r) => (
                <li key={r} className="flex gap-2.5 text-sm text-[var(--muted)] leading-snug">
                  <span className="mt-0.5 text-[var(--ok)]" aria-hidden="true">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="node p-6">
            <p className="font-mono text-xs text-[var(--glow)] mb-4">built_with</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Next.js", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Row-Level Security", "TanStack Query", "Tailwind CSS", "Vercel", "Web Push"].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Also includes job orders and service bays, customer CRM and loyalty, employee attendance, payroll and
              leave, two-factor login, and an e-commerce storefront module.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
