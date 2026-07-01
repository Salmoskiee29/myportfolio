"use client";
import { useEffect, useState } from "react";

const links = ["About", "Tools", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-[#111]">Psalm</span>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-[#555] hover:text-[#111] text-sm font-medium transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact"
          className="hidden md:block text-sm font-medium px-5 py-2 rounded-full bg-[#111] text-white hover:bg-[#333] transition-colors">
          Hire Me
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-[#111]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-black/10 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-[#555] hover:text-[#111] text-sm font-medium">
              {l}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-[#111] text-white text-center">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
