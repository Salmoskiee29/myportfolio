"use client";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "./SectionHeader";

const info = [
  { label: "Email", value: "salmoskiee@gmail.com", href: "mailto:salmoskiee@gmail.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Phone", value: "+63 9929598173", href: "tel:+639929598173", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" },
  { label: "Location", value: "Palayan City, Nueva Ecija", icon: "M17.66 16.66L13.41 20.9a2 2 0 01-2.83 0l-4.24-4.24a8 8 0 1111.32 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Status", value: "Available for projects", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          n="06" label="output" inView={inView} delay={0.9}
          title={<>Let&apos;s build something<br /><span className="text-[var(--glow)]">that runs on its own</span></>}
        />

        <div className={`reveal delay-1 ${inView ? "visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8`}>
          {info.map((item) => {
            const Tag: React.ElementType = item.href ? "a" : "div";
            return (
              <Tag key={item.label} {...(item.href ? { href: item.href } : {})} className="node node-hover p-5 flex items-start gap-3">
                <span aria-hidden="true" className="w-10 h-10 shrink-0 rounded-xl bg-[var(--panel-2)] border border-[var(--line)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--glow)]" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d={item.icon} /></svg>
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] text-[var(--dim)]">{item.label}</span>
                  <span className="block text-sm text-white font-semibold break-words">{item.value}</span>
                </span>
              </Tag>
            );
          })}
        </div>

        <div className={`reveal delay-2 ${inView ? "visible" : ""} node run p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between`}>
          <p className="text-[var(--muted)] text-base leading-relaxed max-w-lg">
            Still running part of your business on paper, Excel or chat? Tell me how it works today and I&apos;ll reply with a phased plan, timeline and estimate.
          </p>
          <a href="mailto:salmoskiee@gmail.com" className="shine group shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--glow)] text-[#121318] text-sm font-extrabold hover:brightness-110 transition">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4l14 8-14 8z" /></svg>
            Execute: send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
