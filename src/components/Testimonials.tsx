"use client";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "ADZ Garage 4x4",
    role: "Automotive Shop Owner",
    quote: "Psalm built our entire management system from scratch — POS, inventory, customer records, everything. It completely transformed how we run our shop. Highly recommended!",
    initials: "AG",
  },
  {
    name: "CFS Jewelry Shop",
    role: "Shop Owner",
    quote: "Our live selling used to be so chaotic. Now with the automation system Psalm built, orders are captured automatically and inventory updates in real time. Sobrang ganda ng trabaho!",
    initials: "CF",
  },
  {
    name: "Richbean Jaen",
    role: "Business Owner",
    quote: "The ordering system and POS Psalm developed for us made our operations so much smoother. Fast, reliable, and easy to use for our staff. Very professional!",
    initials: "RJ",
  },
  {
    name: "Ma. Jesusa Gen. Merchandise",
    role: "Store Owner",
    quote: "Before, tracking our stocks was a nightmare. Now with the system Psalm made, we can monitor everything in real time. It saved us so much time and money.",
    initials: "MJ",
  },
  {
    name: "Meralco MGEN",
    role: "Operations Manager",
    quote: "The conference room booking system is exactly what we needed. Scheduling conflicts are gone and the team can now reserve rooms instantly. Great work, Psalm!",
    initials: "MM",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section id="testimonials" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader n="06" label="testimonials" inView={inView} delay={0.3} title="What clients say" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal delay-${Math.min((i % 3) + 1, 6)} ${inView ? "visible" : ""} node node-hover p-6 flex flex-col gap-4`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[var(--ok)]">✓ success</span>
                <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} aria-hidden="true" className={`${inView ? "pop-in" : "opacity-0"} w-3.5 h-3.5 fill-[#fbbf24]`} style={{ animationDelay: `${0.4 + i * 0.1 + s * 0.08}s` }} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
              </div>
              <blockquote className="text-[var(--muted)] text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-[var(--line)]">
                <span aria-hidden="true" className="w-9 h-9 rounded-full bg-[var(--panel-2)] border border-[var(--line)] flex items-center justify-center shrink-0 text-[var(--glow)] text-xs font-bold">{t.initials}</span>
                <span>
                  <span className="block text-sm font-bold text-white">{t.name}</span>
                  <span className="block text-xs text-[var(--dim)]">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
