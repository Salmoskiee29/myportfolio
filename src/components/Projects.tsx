"use client";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { projects } from "@/data/projects";


export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader n="*" label="projects" inView={inView} delay={1.2} title="All projects" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const featured = Boolean(p.href);
            const Card: React.ElementType = featured ? Link : "div";
            return (
              <div key={p.title} className={`reveal delay-${Math.min((i % 3) + 1, 6)} ${inView ? "visible" : ""} group`}>
                <Card
                  {...(featured ? { href: p.href } : {})}
                  className="node tilt h-full p-6 flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="chip">{p.category}</span>
                    <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-[var(--wire)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white mb-2 flex items-center justify-between gap-2">
                      {p.title}
                      {featured && <span className="text-[var(--dim)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">{p.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.features.map((f) => (
                      <span key={f} className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-[var(--bg)] border border-[var(--line)] text-[var(--muted)]">{f}</span>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
