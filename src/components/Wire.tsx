// A vertical wire with a light that travels down it — joins sections like nodes in a workflow.
export default function Wire({ height = 56, delay = 0, className = "" }: { height?: number; delay?: number; className?: string }) {
  return (
    <div aria-hidden="true" className={`wire w-0.5 ${className}`} style={{ height }}>
      <span className="dot v slow" style={{ animationDelay: `${delay}s` }} />
    </div>
  );
}
