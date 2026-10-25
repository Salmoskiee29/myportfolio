"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "./SectionHeader";

const allTools = [
  // Frontend
  { name: "TypeScript",     icon: "typescript",    cat: "frontend" },
  { name: "React",          icon: "react",         cat: "frontend" },
  { name: "Tailwind",       icon: "tailwindcss",   cat: "frontend" },
  { name: "TanStack",       icon: "reactquery",    cat: "frontend" },
  { name: "JavaScript",     icon: "javascript",    cat: "frontend" },
  { name: "HTML",           icon: "html5",         cat: "frontend" },
  { name: "CSS",            icon: "css3",          cat: "frontend" },
  { name: "SCSS",           icon: "sass",          cat: "frontend" },
  { name: "Prettier",       icon: "prettier",      cat: "frontend" },
  { name: "ESLint",         icon: "eslint",        cat: "frontend" },
  // Backend
  { name: "Node.js",        icon: "nodedotjs",     cat: "backend" },
  { name: "Express",        icon: "express",       cat: "backend" },
  { name: "PostgreSQL",     icon: "postgresql",    cat: "backend" },
  { name: "MongoDB",        icon: "mongodb",       cat: "backend" },
  { name: "Redis",          icon: "redis",         cat: "backend" },
  { name: "Supabase",       icon: "supabase",      cat: "backend" },
  { name: "Drizzle",        icon: "drizzle",       cat: "backend" },
  { name: "Zod",            icon: "zod",           cat: "backend" },
  { name: "BullMQ",         icon: "bull",          cat: "backend" },
  { name: "Clerk",          icon: "clerk",         cat: "backend" },
  // DevOps & Tools
  { name: "Docker",         icon: "docker",        cat: "devops" },
  { name: "Git",            icon: "git",           cat: "devops" },
  { name: "GitHub Actions", icon: "githubactions", cat: "devops" },
  { name: "Postman",        icon: "postman",       cat: "devops" },
  { name: "Cloudflare",     icon: "cloudflare",    cat: "devops" },
  { name: "Cloudinary",     icon: "cloudinary",    cat: "devops" },
  { name: "Vitest",         icon: "vitest",        cat: "devops" },
  // AI & Automation
  { name: "OpenAI",         icon: "openai",        cat: "ai" },
  { name: "Claude",         icon: "anthropic",     cat: "ai" },
  { name: "Groq",           icon: "groq",          cat: "ai" },
  { name: "ComfyUI",        icon: "comfyui",       cat: "ai" },
  { name: "n8n",            icon: "n8n",           cat: "ai" },
  { name: "Zapier",         icon: "zapier",        cat: "ai" },
  { name: "Make",           icon: "make",          cat: "ai" },
  { name: "GoHighLevel",    icon: "gohighlevel",   cat: "ai" },
  { name: "Buffer",         icon: "buffer",        cat: "ai" },
  { name: "Slack",          icon: "slack",         cat: "ai" },
  { name: "Notion",         icon: "notion",        cat: "ai" },
];

const filters = [
  { key: "all",      label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend",  label: "Backend" },
  { key: "devops",   label: "DevOps & Tools" },
  { key: "ai",       label: "AI & Automation" },
];

export default function TechStack() {
  const [active, setActive] = useState("all");
  const { ref, inView } = useInView();

  const visible = active === "all" ? allTools : allTools.filter((t) => t.cat === active);

  return (
    <section id="tools" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader n="05" label="stack" inView={inView} delay={2.4} title="Tools & tech stack" />

        {/* Filter tabs */}
        <div className={`reveal delay-1 ${inView ? "visible" : ""} flex flex-wrap gap-2 mb-10`} role="group" aria-label="Filter tools">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={active === f.key}
              onClick={() => setActive(f.key)}
              className={`min-h-11 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === f.key
                  ? "bg-[var(--glow)] text-[#121318]"
                  : "bg-[var(--panel)] text-[var(--muted)] border border-[var(--line)] hover:border-[var(--glow)] hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Icon grid */}
        <div key={active} className={`reveal delay-2 ${inView ? "visible" : ""} grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3`}>
          {visible.map((tool, i) => (
            <div
              key={tool.name}
              className={`${inView ? "pop-in" : ""} node node-hover rounded-2xl p-4 flex flex-col items-center gap-2.5 cursor-default group`}
              style={{ animationDelay: `${0.15 + i * 0.025}s` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${tool.icon}/c9ccd6`}
                alt=""
                width={30}
                height={30}
                className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <span className="text-[11px] text-[var(--muted)] group-hover:text-white text-center font-semibold leading-tight">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
