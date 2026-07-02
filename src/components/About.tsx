"use client";
import { useInView } from "@/hooks/useInView";

const experiences = [
  { title: "Technical Support Engineer", company: "Terra Solar Philippines Inc. · Under Meralco MGEN", dates: "2025 – 2026" },
  { title: "IT Intern / On-the-Job Trainee", company: "Infopro Business Solutions Inc.", dates: "2024 – 2025" },
  { title: "Software Engineer / Full Stack Developer", company: "Freelance / Self-Employed", dates: "2021 – Present" },
];

const education = [
  { school: "Nueva Ecija University of Science and Technology", level: "BSIT — Major in Web Development", dates: "2021 – 2025" },
  { school: "NEUST (Gen. Tinio Campus)", level: "Senior High School", dates: "2019 – 2021" },
  { school: "NEUST (Fort Magsaysay Campus)", level: "High School", dates: "2015 – 2019" },
  { school: "Faith Walkers International Christian Academy", level: "Elementary", dates: "2009 – 2015" },
];

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
          {/* Left — bio */}
          <div className={`reveal delay-2 ${inView ? "visible" : ""} space-y-4 text-[#555] leading-relaxed`}>
            <p>I&apos;m a Full Stack Website Developer and Software Engineer with over 5 years of experience creating websites, SaaS platforms, automation systems, AI applications, inventory management systems, POS software, and custom business solutions.</p>
            <p>I enjoy transforming ideas into functional, scalable, and user-friendly applications that help businesses become more efficient and profitable.</p>
            <p>Whether it&apos;s a corporate website, an eCommerce platform, or a custom management system, my goal is always to deliver software that creates measurable business value.</p>

            {/* Personal details */}
            <div className="mt-6 pt-6 border-t border-black/8 grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
              {[
                { label: "Birthday", value: "July 29, 2003" },
                { label: "Nationality", value: "Filipino" },
                { label: "Phone", value: "+63 9929598173" },
                { label: "Location", value: "Palayan City, Nueva Ecija" },
              ].map((d) => (
                <div key={d.label}>
                  <p className="text-xs text-[#888] font-medium">{d.label}</p>
                  <p className="text-[#111] font-semibold">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — experience + education */}
          <div className={`reveal delay-3 ${inView ? "visible" : ""} space-y-4`}>

            {/* Experience cards */}
            <div className="bg-[#EFEFEF] rounded-2xl p-5 border border-black/8 space-y-4">
              <p className="text-xs font-bold text-[#888] uppercase tracking-widest">Experience</p>
              {experiences.map((e, i) => (
                <div key={i} className={`flex items-start gap-3 ${i !== 0 ? "pt-4 border-t border-black/10" : ""}`}>
                  <div className="w-9 h-9 rounded-xl bg-[#111] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-[#111] leading-tight">{e.title}</p>
                    <p className="text-xs text-[#666] mt-0.5">{e.company}</p>
                    <p className="text-xs text-[#888] mt-0.5">{e.dates}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education cards */}
            <div className="bg-white rounded-2xl p-5 border border-black/10 space-y-4">
              <p className="text-xs font-bold text-[#888] uppercase tracking-widest">Education</p>
              {education.map((e, i) => (
                <div key={i} className={`flex items-start gap-3 ${i !== 0 ? "pt-4 border-t border-black/8" : ""}`}>
                  <div className="w-9 h-9 rounded-xl bg-[#111] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422A12.083 12.083 0 0121 13.5c0 3.314-4.03 6-9 6s-9-2.686-9-6a12.083 12.083 0 012.84-1.922L12 14z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-[#111] leading-tight">{e.school}</p>
                    <p className="text-xs text-[#666] mt-0.5">{e.level}</p>
                    <p className="text-xs text-[#888] mt-0.5">{e.dates}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
