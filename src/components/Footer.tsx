export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--dim)]">
        <span>© {new Date().getFullYear()} Psalm David De Dios. All rights reserved.</span>
        <span className="font-mono text-xs flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[var(--ok)] pulse" aria-hidden="true" />workflow active</span>
      </div>
    </footer>
  );
}
