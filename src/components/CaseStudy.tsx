"use client";
import { useInView } from "@/hooks/useInView";

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

  return (
    <section id="case-study" className="py-24 bg-[#111] text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className={`reveal ${inView ? "visible" : ""} mb-12 max-w-3xl`}>
          <p className="text-sm text-white/50 font-medium mb-2">Case Study</p>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-5">
            ADZflow: retail, inventory &amp; operations system for a multi-branch automotive business
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            ADZ Garage sells tires, wheels, oils and 4x4 parts across three branches. Inventory lived in Excel and
            stock movements were hard to trace. I designed and built ADZflow as a single system for purchasing,
            receiving, stock, sales and staff, with every transaction traceable to the person who did it.
          </p>
        </div>

        {/* Stats */}
        <div className={`reveal delay-1 ${inView ? "visible" : ""} grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14`}>
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-3xl font-black mb-1">{s.value}</p>
              <p className="text-xs text-white/60 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Video */}
        <div className={`reveal delay-2 ${inView ? "visible" : ""} mb-16`}>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
            <video
              src="/adzflow/walkthrough.mp4"
              poster="/adzflow/poster.jpg"
              controls
              preload="none"
              playsInline
              className="w-full aspect-video"
            />
          </div>
          <p className="text-xs text-white/50 mt-3">
            3-minute walkthrough on a demo database: one purchase order followed from supplier to sale, then traced in the audit log.
          </p>
        </div>

        {/* Traceability flow */}
        <div className={`reveal ${inView ? "visible" : ""} mb-16`}>
          <h3 className="text-2xl font-black mb-2">End-to-end traceability</h3>
          <p className="text-white/60 text-sm mb-6 max-w-2xl">
            Every step below is recorded with the user, timestamp and changed values, so any item can be traced from supplier to sale.
          </p>
          <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {flow.map((f, i) => (
              <li key={f.step} className="relative rounded-xl bg-white text-[#111] p-4">
                <span className="text-[10px] font-bold text-[#999]">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-bold text-sm leading-tight mt-1">{f.step}</p>
                <p className="text-[11px] text-[#666] leading-snug mt-1">{f.note}</p>
                {i < flow.length - 1 && (
                  <span className="hidden lg:block absolute -right-[11px] top-1/2 -translate-y-1/2 z-10 text-white/60 text-sm">→</span>
                )}
              </li>
            ))}
          </ol>
          <div className="mt-2 rounded-xl border border-dashed border-white/25 px-4 py-2.5 text-xs text-white/70 text-center">
            Audit log: who · when · before → after, on every step
          </div>
        </div>

        {/* Features with screenshots */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal delay-${(i % 2) + 1} ${inView ? "visible" : ""} rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/adzflow/${f.img}.jpg`}
                alt={`ADZflow ${f.title} screen`}
                loading="lazy"
                className="w-full aspect-[800/505] object-cover object-top border-b border-white/10"
              />
              <div className="p-5">
                <h4 className="font-bold text-lg mb-1.5">{f.title}</h4>
                <p className="text-sm text-white/65 leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Role + stack */}
        <div className={`reveal ${inView ? "visible" : ""} grid md:grid-cols-2 gap-6`}>
          <div className="rounded-2xl bg-white text-[#111] p-6">
            <p className="text-xs font-bold text-[#888] uppercase tracking-widest mb-4">My role: sole developer</p>
            <ul className="space-y-2.5">
              {role.map((r) => (
                <li key={r} className="flex gap-2.5 text-sm text-[#444] leading-snug">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#111] shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Built with</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Next.js", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Row-Level Security", "TanStack Query", "Tailwind CSS", "Vercel", "Web Push"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-white/80">{t}</span>
              ))}
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              Also includes job orders and service bays, customer CRM and loyalty, employee attendance, payroll and
              leave, two-factor login, and an e-commerce storefront module.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
