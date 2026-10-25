import Magnetic from "./Magnetic";

const steps = [
  { n: "1", meta: "Trigger", title: "New business problem", tone: "bg-[#123524] text-[#4ade80]", delay: 0 },
  { n: "2", meta: "PostgreSQL · Supabase", title: "Design the data model", tone: "bg-[#23214a] text-[#a5a0ff]", delay: 0.4 },
  { n: "3", meta: "Next.js · n8n · OpenAI", title: "Build the app + automations", tone: "bg-[#3b2312] text-[#fdba74]", delay: 0.9 },
];

const outputs = [
  { title: "ADZflow", note: "live · 3 branches", href: "#case-study" },
  { title: "CFS Jewelry", note: "live selling", href: "#projects" },
  { title: "Meralco MGEN", note: "room booking", href: "#projects" },
];

function Check({ delay }: { delay: number }) {
  return (
    <span aria-hidden="true" className="badge absolute right-4 w-5 h-5 rounded-full bg-[#16a34a] text-white text-xs font-extrabold flex items-center justify-center" style={{ animationDelay: `${delay}s` }}>
      ✓
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-14 items-center">

        {/* Left — text */}
        <div className="flex flex-col gap-5">
          <p className="fade-up-1 font-mono text-[13px] text-[var(--muted)]">
            scenario · psalm-de-dios · <span className="pulse text-[var(--ok)]">● ON</span>
          </p>

          <h1 className="text-[64px] sm:text-[84px] font-extrabold text-white leading-[0.95] tracking-[-0.04em]" aria-label="Psalm De Dios">
            <span aria-hidden="true">
              {"Psalm".split("").map((ch, i) => (
                <span key={i} className="letter" style={{ animationDelay: `${0.15 + i * 0.06}s` }}>{ch}</span>
              ))}
              <br />
              {"De Dios".split("").map((ch, i) => (
                <span key={i} className="letter" style={{ animationDelay: `${0.45 + i * 0.05}s` }}>{ch === " " ? " " : ch}</span>
              ))}
            </span>
          </h1>

          <p className="fade-up-3 text-xl sm:text-2xl font-bold text-[var(--glow)]">
            Software Engineer · full-stack · automation
          </p>

          <p className="fade-up-4 text-[var(--muted)] text-base leading-relaxed max-w-md">
            I connect the pieces of a business — counter, warehouse, chat, sheets — into one system that runs on its own.
            My latest, <strong className="text-white">ADZflow</strong>, runs daily across ADZ Garage&apos;s three branches.
          </p>

          <div className="fade-up-5 flex flex-wrap gap-3 mt-2">
            <Magnetic>
              <a href="mailto:salmoskiee@gmail.com" className="shine block px-6 py-3.5 rounded-full bg-[var(--glow)] text-[#121318] text-sm font-extrabold hover:brightness-110 transition">
                Run once: email me
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#case-study" className="block px-6 py-3.5 rounded-full bg-[var(--panel)] border border-[var(--wire)] text-white text-sm font-bold hover:border-[var(--glow)] transition-colors">
                See ADZflow ↗
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Right — the workflow */}
        <div className="fade-up-3 flex flex-col items-center" aria-label="How I work, as a workflow">
          {steps.map((s, i) => (
            <div key={s.n} className="w-full flex flex-col items-center">
              <div className="node run relative w-full max-w-[380px] px-5 py-4 flex items-center gap-4" style={{ animationDelay: `${s.delay}s` }}>
                <span aria-hidden="true" className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center font-extrabold ${s.tone}`}>{s.n}</span>
                <div>
                  <p className="text-xs text-[var(--muted)]">{s.meta}</p>
                  <p className="font-bold text-white">{s.title}</p>
                </div>
                <Check delay={s.delay} />
              </div>
              <div aria-hidden="true" className="wire w-0.5 h-11">
                <span className="dot v" style={{ animationDelay: `${[0, 0.5, 1][i]}s` }} />
              </div>
            </div>
          ))}

          <p className="node run px-4 py-1.5 rounded-full font-mono text-xs text-[var(--muted)]" style={{ animationDelay: "1.4s", borderRadius: 999 }}>
            Router · shipped to
          </p>

          {/* Router branch */}
          <div aria-hidden="true" className="relative w-full h-11">
            <div className="wire absolute top-0 w-0.5 h-4" style={{ left: "calc(50% - 1px)" }}><span className="dot v" style={{ animationDelay: "1.5s" }} /></div>
            <div className="wire absolute top-4 h-0.5" style={{ left: "16.6%", right: "16.6%" }} />
            <div className="absolute top-4 left-0 right-0 h-0.5">
              <span className="dot l" style={{ animationDelay: "1.9s" }} />
              <span className="dot r" style={{ animationDelay: "1.9s" }} />
            </div>
            {["16.6%", "50%", "83.3%"].map((left) => (
              <div key={left} className="wire absolute top-4 w-0.5 h-7" style={{ left: `calc(${left} - 1px)` }}>
                <span className="dot v" style={{ animationDelay: "2.3s" }} />
              </div>
            ))}
          </div>

          <div className="w-full grid grid-cols-3 gap-2.5">
            {outputs.map((o) => (
              <a key={o.title} href={o.href} className="node run node-hover px-3.5 py-3 rounded-[14px]" style={{ animationDelay: "2.7s" }}>
                <p className="font-extrabold text-white text-sm sm:text-base">{o.title}</p>
                <p className="text-xs sm:text-[13px] text-[var(--muted)] mt-0.5">{o.note}</p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
