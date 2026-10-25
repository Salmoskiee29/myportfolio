"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Case Study", href: "#case-study" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fade-up-1 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-[#121318]/85 backdrop-blur-md border-b border-[var(--line)]" : "bg-transparent border-b border-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-mono font-bold text-white">
          <span className="w-2 h-2 rounded-full bg-[var(--ok)] pulse" aria-hidden="true" />
          psalm<span className="text-[var(--muted)]">.workflow</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="link-underline text-[var(--muted)] hover:text-white text-sm font-semibold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="shine hidden md:block text-sm font-extrabold px-5 py-2 rounded-full bg-[var(--glow)] text-[#121318] hover:brightness-110 transition">
          Hire Me
        </a>

        <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="md:hidden text-white w-11 h-11 flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--line)] px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-[var(--muted)] hover:text-white text-sm font-semibold">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-sm font-extrabold px-5 py-2.5 rounded-full bg-[var(--glow)] text-[#121318] text-center">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
