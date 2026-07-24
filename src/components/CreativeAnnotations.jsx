export function HumanBadge({ children, color = "cyan" }) {
  const colorMap = {
    cyan: "bg-cyan-950/80 text-cyan-300 border-cyan-700/60 shadow-cyan-950/40",
    emerald: "bg-emerald-950/80 text-emerald-300 border-emerald-700/60 shadow-emerald-950/40",
    purple: "bg-purple-950/80 text-purple-300 border-purple-700/60 shadow-purple-950/40",
    amber: "bg-amber-950/80 text-amber-300 border-amber-700/60 shadow-amber-950/40",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-mono text-[10px] font-semibold tracking-wide shadow-sm ${colorMap[color]}`}>
      <span className="text-[11px]">✦</span>
      <span>{children}</span>
    </span>
  );
}

export function CodeCalloutNote({ text }) {
  return (
    <div className="relative inline-flex items-center gap-2 bg-slate-950/90 text-cyan-300 text-[11px] font-mono px-3 py-1.5 rounded-xl border border-cyan-800/80 shadow-md shadow-cyan-950/30">
      <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
      <span>{text}</span>
    </div>
  );
}
