"use client";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "./SectionHeader";
import { projects } from "@/data/projects";

// Homepage preview: a short list of projects with a button to the full /projects page.
const selected = projects.slice(0, 4);

export default function SelectedWork() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader n="02" label="projects" inView={inView} delay={1.2} title="Selected work" />

        <ul className={`reveal delay-1 ${inView ? "visible" : ""} border-t border-[var(--line)]`}>
          {selected.map((p) => (
            <li key={p.title} className="border-b border-[var(--line)]">
              <Link
                href={p.href ?? "/projects"}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 py-6 px-1 sm:px-3 transition-colors hover:bg-[var(--panel)]"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span aria-hidden="true" className="w-2 h-2 shrink-0 rounded-full bg-[var(--wire)] group-hover:bg-[var(--glow)] group-hover:shadow-[0_0_10px_2px_var(--halo)] transition-all" />
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[var(--glow)] transition-colors">
                    {p.title}
                  </span>
                </span>
                <span className="font-mono text-xs sm:text-sm text-[var(--muted)] pl-5 sm:pl-0 sm:text-right">
                  {p.features.slice(0, 4).join(" · ")}
                  <span aria-hidden="true" className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/projects"
          className={`reveal delay-2 ${inView ? "visible" : ""} mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--glow)] font-mono text-sm font-bold text-[var(--glow)] hover:bg-[var(--glow)] hover:text-[#121318] transition-colors`}
        >
          ~$ view all projects <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
