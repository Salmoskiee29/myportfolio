import Wire from "./Wire";

type Props = { n: string; label: string; title: React.ReactNode; intro?: React.ReactNode; inView: boolean; delay?: number };

// Every section starts like a node in the workflow: a wire comes in, then a node pill and the heading.
export default function SectionHeader({ n, label, title, intro, inView, delay = 0 }: Props) {
  return (
    <div className={`reveal ${inView ? "visible" : ""} mb-12`}>
      <Wire height={48} delay={delay} className="ml-[22px]" />
      <span className="node-pill">
        <span className="w-2 h-2 rounded-full bg-[var(--ok)]" aria-hidden="true" />
        node {n} · {label}
      </span>
      <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.05] text-white max-w-3xl">{title}</h2>
      {intro && <p className="mt-4 text-[var(--muted)] text-base leading-relaxed max-w-2xl">{intro}</p>}
    </div>
  );
}
