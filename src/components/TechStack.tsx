"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

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
    <section id="tools" className="py-24 bg-[#EFEFEF]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className={`reveal ${inView ? "visible" : ""} mb-10`}>
          <p className="text-sm text-[#888] font-medium mb-2">Skills</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111]">Tools & Tech Stack</h2>
        </div>

        {/* Filter tabs */}
        <div className={`reveal delay-1 ${inView ? "visible" : ""} flex flex-wrap gap-2 mb-10`}>
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === f.key
                  ? "bg-[#111] text-white"
                  : "bg-white text-[#555] border border-black/10 hover:border-black/30 hover:text-[#111]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Icon grid */}
        <div className={`reveal delay-2 ${inView ? "visible" : ""} grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3`}>
          {visible.map((tool) => (
            <div
              key={tool.name}
              className="bg-white rounded-2xl border border-black/8 p-4 flex flex-col items-center gap-2.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${tool.icon}`}
                alt={tool.name}
                width={32}
                height={32}
                className="opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <span className="text-[11px] text-[#666] text-center font-medium leading-tight">{tool.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
