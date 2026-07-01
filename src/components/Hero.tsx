import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#EFEFEF] flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            {/* Badge */}
            <div className="fade-up-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/10 text-sm text-[#333] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Open to opportunities
            </div>

            <p className="fade-up-2 text-[#555] text-lg mb-1">Hello! I am</p>

            <h1 className="fade-up-3 text-[72px] sm:text-[90px] font-black text-[#111] leading-none tracking-tight mb-4">
              Psalm
            </h1>

            <p className="fade-up-4 text-lg text-[#333] font-medium mb-5 h-7">
              <Typewriter />
            </p>

            <p className="fade-up-4 text-[#555] text-base leading-relaxed mb-8 max-w-md">
              <strong className="text-[#111]">Full Stack Developer</strong> who builds web applications and{" "}
              <strong className="text-[#111]">AI-powered systems</strong> and{" "}
              <strong className="text-[#111]">automation workflows</strong>. From database architecture to
              deployment — and from AI generation pipelines to workflow automation using tools like n8n, Make, and Zapier.
            </p>

            {/* CTAs */}
            <div className="fade-up-5 flex items-center gap-3 mb-8">
              <a href="#projects"
                className="px-6 py-3 rounded-full bg-[#111] text-white text-sm font-semibold hover:bg-[#333] transition-colors flex items-center gap-2">
                View Projects <span>↗</span>
              </a>
              <a href="#contact"
                className="px-6 py-3 rounded-full border border-black/20 text-[#111] text-sm font-semibold hover:bg-white hover:border-black/40 transition-colors">
                Contact Me
              </a>
            </div>

            {/* Social icons */}
            <div className="fade-in-1 flex items-center gap-3">
              {[
                { href: "https://github.com", label: "GitHub", svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /> },
                { href: "https://linkedin.com", label: "LinkedIn", svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" /> },
                { href: "mailto:salmoskiee@gmail.com", label: "Email", svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-black/15 bg-white flex items-center justify-center hover:border-black/40 hover:shadow-sm transition-all">
                  <svg className="w-4 h-4 text-[#555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{s.svg}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right — photo placeholder */}
          <div className="fade-up-3 flex justify-center md:justify-end">
            <div className="w-[320px] h-[420px] sm:w-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-sm border border-black/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpg" alt="Psalm David De Dios" className="w-full h-full object-cover object-top" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
