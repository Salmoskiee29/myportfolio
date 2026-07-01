"use client";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24 bg-[#EFEFEF]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className={`reveal ${inView ? "visible" : ""} mb-12`}>
          <p className="text-sm text-[#888] font-medium mb-2">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111]">
            Let&apos;s Build Something<br />
            <span className="italic">Amazing Together</span>
          </h2>
        </div>

        <div className={`reveal delay-2 ${inView ? "visible" : ""} grid md:grid-cols-2 gap-8`}>
          <div>
            <p className="text-[#555] text-base leading-relaxed mb-8">
              Have a project in mind? Let&apos;s turn your ideas into powerful digital solutions. I&apos;m always open to new opportunities — freelance, full-time, or collaboration.
            </p>
            <a href="mailto:salmoskiee@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111] text-white text-sm font-semibold hover:bg-[#333] transition-colors">
              Send Me an Email <span>→</span>
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-black/8 divide-y divide-black/8 shadow-sm">
            {[
              { label: "Email",    value: "salmoskiee@gmail.com", icon: "📧" },
              { label: "Location", value: "Philippines",           icon: "📍" },
              { label: "Status",   value: "Available for work",    icon: "💼" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 px-6 py-4">
                <span className="text-lg">{item.icon}</span>
                <div>
                  <p className="text-xs text-[#888] font-medium">{item.label}</p>
                  <p className="text-sm text-[#111] font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
