import { useState, useEffect } from "react";

export default function HeaderTerminalBar({ onOpenProjects, onOpenContact }) {
  const [ping, setPing] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(20 + Math.random() * 12));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2 z-20 relative">
      <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono shadow-lg shadow-cyan-950/20">
        
        {/* Left: Status & Identity */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700/60">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-semibold tracking-wider">SYS.ONLINE</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-slate-400">
            <span className="text-cyan-400">NODE:</span>
            <span className="text-slate-200">ASTANA-01</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-slate-400">
            <span className="text-cyan-400">PING:</span>
            <span className="text-slate-300">{ping}ms</span>
          </div>
        </div>

        {/* Center: Command Title */}
        <div className="hidden sm:flex items-center gap-2 bg-slate-950/60 px-4 py-1.5 rounded-xl border border-slate-800/80 text-slate-300">
          <span className="text-cyan-400 font-bold">KESHE.DEV</span>
          <span className="text-slate-600">//</span>
          <span className="text-slate-400">BISHIMBAY BEKARYS</span>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenProjects}
            className="flex items-center gap-1.5 bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 px-3 py-1.5 rounded-xl border border-cyan-800/50 hover:border-cyan-500/60 transition-all cursor-pointer group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-cyan-400 group-hover:scale-110 transition-transform"
              viewBox="0 -960 960 960"
            >
              <path d="M160-240v-480 510-30Zm12.31 60Q142-180 121-201q-21-21-21-51.31v-455.38Q100-738 121-759q21-21 51.31-21H362q14.46 0 27.81 5.62 13.34 5.61 23.19 15.46L471.92-700h315.77Q818-700 839-679q21 21 21 51.31v160.38q0 12.77-8.62 21.39-8.61 8.61-21.38 8.61t-21.38-8.61q-8.62-8.62-8.62-21.39v-160.38q0-5.39-3.46-8.85t-8.85-3.46H447.38l-80-80H172.31q-5.39 0-8.85 3.46t-3.46 8.85v455.38q0 5.39 3.46 8.85t8.85 3.46h179.23q12.77 0 21.38 8.62 8.62 8.61 8.62 21.38t-8.62 21.38q-8.61 8.62-21.38 8.62H172.31Z"></path>
            </svg>
            <span>[PROJECTS]</span>
          </button>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 px-3 py-1.5 rounded-xl border border-emerald-800/50 hover:border-emerald-500/60 transition-all cursor-pointer group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-emerald-400 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.38-.27-2.05-.49-.83-.27-1.49-.42-1.43-.89.03-.25.38-.51 1.07-.78 4.2-1.83 7.01-3.04 8.43-3.63 4.01-1.67 4.84-1.96 5.39-1.97.12 0 .39.03.57.18.15.12.19.29.21.46-.01.06.01.24 0 .42z"/>
            </svg>
            <span className="hidden sm:inline">[CONNECT]</span>
          </button>
        </div>
      </div>
    </header>
  );
}
