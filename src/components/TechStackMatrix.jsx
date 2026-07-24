import { useState } from "react";

const STACK_CATEGORIES = [
  { id: "all", label: "ALL TECH" },
  { id: "frontend", label: "FRONTEND" },
  { id: "backend", label: "BACKEND & AI" },
  { id: "tooling", label: "TOOLS & CRAFT" },
];

const STACK_ITEMS = [
  { name: "React 19", category: "frontend", level: "Expert", icon: "⚛️" },
  { name: "Vite", category: "frontend", level: "Core", icon: "⚡" },
  { name: "Tailwind v4", category: "frontend", level: "Expert", icon: "🎨" },
  { name: "Motion / Framer", category: "frontend", level: "Advanced", icon: "✨" },
  { name: "TypeScript", category: "frontend", level: "Core", icon: "🟦" },
  { name: "Vue 3", category: "frontend", level: "Proficient", icon: "💚" },

  { name: "Node.js", category: "backend", level: "Expert", icon: "🟢" },
  { name: "Python", category: "backend", level: "Advanced", icon: "🐍" },
  { name: "FastAPI", category: "backend", level: "Proficient", icon: "🚀" },
  { name: "LLM Agents & Vision", category: "backend", level: "Advanced", icon: "🤖" },
  { name: "WebSockets / Realtime", category: "backend", level: "Advanced", icon: "🔌" },

  { name: "Oxlint / ESLint", category: "tooling", level: "Core", icon: "🔍" },
  { name: "Git / CI/CD", category: "tooling", level: "Core", icon: "📦" },
  { name: "Docker", category: "tooling", level: "Proficient", icon: "🐳" },
  { name: "Design Tokens & HSL", category: "tooling", level: "Craft", icon: "💎" },
];

export default function TechStackMatrix() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? STACK_ITEMS
      : STACK_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-4">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
        {STACK_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                isActive
                  ? "bg-cyan-950/90 text-cyan-300 border-cyan-500/70 shadow-sm shadow-cyan-950/50"
                  : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              [{cat.label}]
            </button>
          );
        })}
      </div>

      {/* Grid of Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-800/60 transition-all group"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="text-sm">{item.icon}</span>
              <span className="text-xs font-medium text-slate-200 group-hover:text-white truncate">
                {item.name}
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800 shrink-0">
              {item.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
