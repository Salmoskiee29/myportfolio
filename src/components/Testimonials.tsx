"use client";
import { useInView } from "@/hooks/useInView";

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
    name: "Merlco MGEN",
    role: "Operations Manager",
    quote: "The conference room booking system is exactly what we needed. Scheduling conflicts are gone and the team can now reserve rooms instantly. Great work, Psalm!",
    initials: "MM",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section id="testimonials" className="py-24 bg-[#EFEFEF]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className={`reveal ${inView ? "visible" : ""} mb-12`}>
          <p className="text-sm text-[#888] font-medium mb-2">What Clients Say</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111]">Testimonials</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${Math.min(i % 3 + 1, 6)} ${inView ? "visible" : ""} bg-white rounded-2xl border border-black/8 p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#555] text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Client */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/8">
                <div className="w-9 h-9 rounded-full bg-[#111] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111]">{t.name}</p>
                  <p className="text-xs text-[#888]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
