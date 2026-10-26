"use client";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "./SectionHeader";

const experiences = [
  { title: "Technical Support Engineer", company: "Terra Solar Philippines Inc. · Under Meralco MGEN", dates: "2025 – Present" },
  { title: "IT Intern / On-the-Job Trainee", company: "Infopro Business Solutions Inc.", dates: "2024 – 2025" },
  { title: "Software Engineer / Full Stack Developer", company: "Freelance / Self-Employed", dates: "2021 – Present" },
];

const education = [
  { school: "Nueva Ecija University of Science and Technology", level: "BSIT — Major in Web Development", dates: "2021 – 2025" },
  { school: "NEUST (Gen. Tinio Campus)", level: "Senior High School", dates: "2019 – 2021" },
  { school: "NEUST (Fort Magsaysay Campus)", level: "High School", dates: "2015 – 2019" },
  { school: "Faith Walkers International Christian Academy", level: "Elementary", dates: "2009 – 2015" },
];

const details = [
  { label: "Email", value: "salmoskiee@gmail.com" },
  { label: "Phone", value: "+63 9929598173" },
  { label: "Location", value: "Palayan City, Nueva Ecija" },
  { label: "Work setup", value: "Remote / project-based" },
];

function Timeline({ items, inView, base }: { items: { a: string; b: string; c: string }[]; inView: boolean; base: number }) {
  return (
    <ol className="flex flex-col">
      {items.map((it, i) => (
        <li key={it.a} className={`reveal ${inView ? "visible" : ""} flex gap-4`} style={{ transitionDelay: `${base + i * 0.1}s` }}>
          <div className="flex flex-col items-center pt-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full border-2 border-[var(--glow)] bg-[var(--bg)]" />
            {i < items.length - 1 && <span className="wire w-0.5 flex-1 my-1"><span className="dot v slow" style={{ animationDelay: `${i * 0.7}s` }} /></span>}
          </div>
          <div className="pb-5">
            <p className="font-bold text-sm text-white leading-tight">{it.a}</p>
            <p className="text-xs text-[var(--muted)] mt-1">{it.b}</p>
            <p className="font-mono text-[11px] text-[var(--dim)] mt-1">{it.c}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          n="01" label="about" inView={inView}
          title={<>Software engineer who builds <span className="text-[var(--glow)]">real solutions</span></>}
        />

        <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 items-start">
          {/* Left — photo + bio */}
          <div className={`reveal delay-2 ${inView ? "visible" : ""} node p-6 flex flex-col gap-6`}>
            <div>
              <p className="font-extrabold text-white text-lg">Psalm David De Dios</p>
              <p className="text-sm text-[var(--muted)]">Software Engineer · full-stack · automation</p>
            </div>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed text-[15px]">
              <p>I&apos;m a Full Stack Developer from Nueva Ecija with 5+ years of freelance experience building POS software, inventory and warehouse systems, booking platforms, websites and AI automation for Philippine businesses.</p>
              <p>I also help run ADZ Garage, a multi-branch tire and 4x4 parts business. That is where ADZflow was built and is used every day, so I design systems from the point of view of the people at the counter, in the warehouse and in the owner&apos;s office.</p>
              <p>I handle the whole build myself: requirements, database design, front end, deployment, data migration, training and long-term support.</p>
            </div>
            <div className="pt-5 border-t border-[var(--line)] grid grid-cols-2 gap-y-4 gap-x-4 text-sm">
              {details.map((d) => (
                <div key={d.label}>
                  <p className="font-mono text-[11px] text-[var(--dim)]">{d.label}</p>
                  <p className="text-white font-semibold break-words">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — experience + education */}
          <div className="flex flex-col gap-6">
            <div className={`reveal delay-3 ${inView ? "visible" : ""} node p-6`}>
              <p className="font-mono text-xs text-[var(--muted)] mb-5">experience.log</p>
              <Timeline inView={inView} base={0.35} items={experiences.map((e) => ({ a: e.title, b: e.company, c: e.dates }))} />
            </div>
            <div className={`reveal delay-4 ${inView ? "visible" : ""} node p-6`}>
              <p className="font-mono text-xs text-[var(--muted)] mb-5">education.log</p>
              <Timeline inView={inView} base={0.45} items={education.map((e) => ({ a: e.school, b: e.level, c: e.dates }))} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
