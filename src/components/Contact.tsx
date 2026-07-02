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

        {/* Info card — top */}
        <div className={`reveal delay-1 ${inView ? "visible" : ""} bg-white rounded-2xl border border-black/8 shadow-sm mb-8`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-black/8">
            {[
              { label: "Email",       value: "salmoskiee@gmail.com",                          icon: "📧" },
              { label: "Phone",       value: "+63 9929598173",                                icon: "📱" },
              { label: "Address",     value: "Purok 10 Brgy. Militar, Palayan City, NE 3132", icon: "📍" },
              { label: "Birthday",    value: "July 29, 2003",                                 icon: "🎂" },
              { label: "Nationality", value: "Filipino",                                      icon: "🇵🇭" },
              { label: "Status",      value: "Available for work",                            icon: "💼" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-1 px-4 py-5">
                <span className="text-2xl mb-1">{item.icon}</span>
                <p className="text-xs text-[#888] font-medium">{item.label}</p>
                <p className="text-xs text-[#111] font-semibold leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`reveal delay-2 ${inView ? "visible" : ""} flex flex-col sm:flex-row items-start sm:items-center gap-6`}>
          <p className="text-[#555] text-base leading-relaxed max-w-lg">
            Have a project in mind? Let&apos;s turn your ideas into powerful digital solutions. I&apos;m always open to new opportunities — freelance, full-time, or collaboration.
          </p>
          <a href="mailto:salmoskiee@gmail.com"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111] text-white text-sm font-semibold hover:bg-[#333] transition-colors">
            Send Me an Email <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
