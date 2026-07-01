"use client";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`reveal ${inView ? "visible" : ""} mb-12`}>
          <p className="text-sm text-[#888] font-medium mb-2">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111] leading-tight">
            Software Engineer passionate<br />about building <span className="italic font-black">real solutions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`reveal delay-2 ${inView ? "visible" : ""} space-y-4 text-[#555] leading-relaxed`}>
            <p>I&apos;m a Full Stack Website Developer and Software Engineer with over 5 years of experience creating websites, SaaS platforms, automation systems, AI applications, inventory management systems, POS software, and custom business solutions.</p>
            <p>I enjoy transforming ideas into functional, scalable, and user-friendly applications that help businesses become more efficient and profitable.</p>
            <p>Whether it&apos;s a corporate website, an eCommerce platform, or a custom management system, my goal is always to deliver software that creates measurable business value.</p>
          </div>

          <div className={`reveal delay-3 ${inView ? "visible" : ""}`}>
            <div className="bg-[#EFEFEF] rounded-2xl p-6 border border-black/8">
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-black/10">
                <div className="w-10 h-10 rounded-xl bg-[#111] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm text-[#111]">Software Engineer / Full Stack Developer</p>
                  <p className="text-xs text-[#888] mt-0.5">2021 – Present</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {["Full Stack Web Development", "Software Architecture", "Business Automation", "AI Integration", "Database Design", "REST API Development", "Cloud Deployment", "UI/UX Design"].map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-[#444]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111] shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-4 border border-black/10 rounded-2xl bg-white p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#111] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.5c0 3.314-4.03 6-9 6s-9-2.686-9-6a12.083 12.083 0 012.84-1.922L12 14z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm text-[#111]">Nueva Ecija University of Science and Technology</p>
                <p className="text-xs text-[#888] mt-0.5">BSIT — Major in Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
