import Typewriter from "./Typewriter";
import Magnetic from "./Magnetic";

const marqueeItems = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "OpenAI", "Claude", "n8n", "Docker", "Tailwind", "MongoDB", "Make", "Zapier"];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#EFEFEF] flex items-center pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            {/* Badge */}
            <div className="fade-up-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/10 text-sm text-[#333] mb-6 shadow-sm">
              <span className="pulse-dot w-2 h-2 rounded-full bg-green-500" />
              Available for new projects
            </div>

            <p className="fade-up-2 text-[#555] text-lg mb-1">Hello! I am</p>

            <h1 className="text-[72px] sm:text-[90px] font-black text-[#111] leading-none tracking-tight mb-4" aria-label="Psalm">
              {"Psalm".split("").map((ch, i) => (
                <span key={i} className="letter cursor-default" style={{ animationDelay: `${0.2 + i * 0.07}s` }}>{ch}</span>
              ))}
            </h1>

            <p className="fade-up-4 text-xl sm:text-2xl font-semibold text-[#111] tracking-tight mb-2">
              Software Engineer <span className="text-black/30">·</span> full-stack <span className="text-black/30">·</span> automation
            </p>

            <p className="fade-up-4 text-lg text-[#333] font-medium mb-5 h-7">
              <Typewriter />
            </p>

            <p className="fade-up-4 text-[#555] text-base leading-relaxed mb-8 max-w-md">
              I build <strong className="text-[#111]">business systems that run real operations</strong>: POS, inventory,
              purchasing, warehouse and multi-branch management. My latest, <strong className="text-[#111]">ADZflow</strong>,
              runs daily across ADZ Garage&apos;s three branches, with a full audit trail from supplier to sale.
            </p>

            {/* CTAs */}
            <div className="fade-up-5 flex items-center gap-3 mb-8">
              <Magnetic>
                <a href="#case-study"
                  className="shine group px-6 py-3 rounded-full bg-[#111] text-white text-sm font-semibold hover:bg-[#333] transition-colors flex items-center gap-2">
                  See ADZflow <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact"
                  className="block px-6 py-3 rounded-full border border-black/20 text-[#111] text-sm font-semibold hover:bg-white hover:border-black/40 transition-colors">
                  Contact Me
                </a>
              </Magnetic>
            </div>

            {/* Social icons */}
            <div className="fade-in-1 flex items-center gap-3">
              {[
                { href: "mailto:salmoskiee@gmail.com", label: "Email", svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-black/15 bg-white flex items-center justify-center hover:border-black/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-4 h-4 text-[#555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{s.svg}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right — photo placeholder */}
          <div className="fade-up-3 flex justify-center md:justify-end">
            <div className="float w-[320px] h-[420px] sm:w-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-sm border border-black/10 hover:shadow-xl transition-shadow duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpg" alt="Psalm David De Dios" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

        </div>
      </div>

      {/* Tech marquee */}
      <div className="fade-in-1 marquee absolute bottom-8 left-0 right-0">
        {[0, 1].map((dup) => (
          <div key={dup} className="marquee-track" aria-hidden={dup === 1}>
            {marqueeItems.map((t) => (
              <span key={t} className="text-xl font-bold text-black/20 whitespace-nowrap">{t}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
