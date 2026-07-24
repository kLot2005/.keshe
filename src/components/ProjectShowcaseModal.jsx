import { useState, useEffect } from "react";

const PROJECTS_DATA = [
  {
    id: "stroycheck",
    title: "StroyCheck.KZ",
    category: "Commercial Platform",
    subtitle: "AI Construction Compliance & Inspection Automation Platform",
    description:
      "Full-stack web application designed for construction companies in Kazakhstan to automate compliance checks, safety inspections, site reports, and defect management using AI vision models and structured reporting.",
    tags: ["React 19", "Node.js", "AI Vision", "Tailwind CSS", "PostgreSQL"],
    metrics: [
      { label: "Compliance Speed", value: "3x Faster" },
      { label: "Inspection Accuracy", value: "98.4%" },
    ],
    features: [
      "Automated site defect detection using computer vision AI models",
      "Real-time inspection report generation according to KZ construction norms",
      "Multi-role user management (Inspectors, Contractors, Supervisors)",
      "Offline sync mode for remote site operations",
    ],
    liveUrl: "https://stroycheck.kz",
    githubUrl: "https://github.com/kLot2005",
    accentColor: "from-cyan-500 to-blue-600",
    badgeColor: "bg-cyan-950 text-cyan-400 border-cyan-800",
  },
  {
    id: "ai-quiz",
    title: "Mediana AI Quiz",
    category: "EdTech & AI System",
    subtitle: "Adaptive Testing Engine & Live AI Question Generator",
    description:
      "Interactive testing platform that generates real-time customized quizzes across various engineering subjects, evaluates user answers with LLMs, and provides detailed learning analytics.",
    tags: ["Vue 3", "Vite", "Node.js", "WebSockets", "LLM APIs", "Tailwind CSS"],
    metrics: [
      { label: "Question Generation", value: "< 2.5s" },
      { label: "User Engagement", value: "+45%" },
    ],
    features: [
      "Dynamic difficulty adaptation based on live candidate performance",
      "Instant AI code explanation and diagnostic feedback",
      "Real-time battle mode with WebSocket candidate synchronization",
      "Rich analytical dashboard for performance breakdown",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/kLot2005",
    accentColor: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-950 text-emerald-400 border-emerald-800",
  },
  {
    id: "mangystau-ai",
    title: "Mangystau Hub AI Agent",
    category: "Regional Ecosystem Portal",
    subtitle: "Intelligent Assistant & Regional Innovation Portal",
    description:
      "AI-driven portal developed for Astana Hub's Mangystau regional division, providing automated guidance for startup founders, grant eligibility checking, and event registrations.",
    tags: ["React", "FastAPI", "Python", "LLM Agents", "Vector DB"],
    metrics: [
      { label: "Inquiries Handled", value: "85% Auto" },
      { label: "Response Time", value: "< 1.2s" },
    ],
    features: [
      "RAG-enabled AI agent with access to Astana Hub program documentation",
      "Automated eligibility matrix calculation for tax benefits and grants",
      "Bilingual Kazakh & Russian voice and text interaction support",
      "Seamless integration with regional startup database",
    ],
    liveUrl: "https://astanahub.com",
    githubUrl: "https://github.com/kLot2005",
    accentColor: "from-purple-500 to-indigo-600",
    badgeColor: "bg-purple-950 text-purple-400 border-purple-800",
  },
  {
    id: "keshe-dev",
    title: "Keshe.dev Interactive Studio",
    category: "Creative Engineering",
    subtitle: "Futuristic Cyberpunk Developer Command Center",
    description:
      "Out-of-distribution personal digital headquarters featuring canvas matrix animation, interactive bento spotlight cards, live timezone synchronization, and high-performance micro-interactions.",
    tags: ["React 19", "Vite", "Motion", "Tailwind CSS v4", "Canvas API"],
    metrics: [
      { label: "FPS", value: "60+ FPS" },
      { label: "Aesthetics", value: "Peak Craft" },
    ],
    features: [
      "Canvas-based matrix decryption preloader engine",
      "Bento Grid spotlight hover glow tracking",
      "Live Astana Asia/Almaty timezone clock integration",
      "Ultra-responsive WCAG compliant cyberpunk styling",
    ],
    liveUrl: "https://keshe.dev",
    githubUrl: "https://github.com/kLot2005",
    accentColor: "from-cyan-400 to-emerald-400",
    badgeColor: "bg-slate-900 text-cyan-400 border-cyan-700",
  },
];

export default function ProjectShowcaseModal({ isOpen, onClose }) {
  const [activeProject, setActiveProject] = useState(PROJECTS_DATA[0]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Container Card */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900/95 border border-slate-700/80 rounded-3xl overflow-hidden flex flex-col shadow-2xl shadow-cyan-950/40">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-cyan-400 font-semibold tracking-wider">
              [COMMERCIAL_PROJECTS_ROSTER]
            </span>
            <span className="hidden sm:inline text-slate-500">// SELECT NODE TO INSPECT</span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-3 py-1.5 rounded-xl border border-slate-700 transition-all cursor-pointer"
          >
            <span>[ESC]</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Selector Sidebar (4 Cols) */}
          <div className="lg:col-span-4 p-4 border-r border-slate-800/80 space-y-3 bg-slate-950/40">
            <div className="text-xs font-mono text-slate-500 uppercase px-2 mb-2">
              Available Deliverables ({PROJECTS_DATA.length})
            </div>

            {PROJECTS_DATA.map((proj) => {
              const isSelected = activeProject.id === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProject(proj)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? "bg-slate-800/90 border-cyan-500/80 shadow-md shadow-cyan-950/30"
                      : "bg-slate-900/50 border-slate-800/60 hover:bg-slate-800/50 hover:border-slate-700"
                  }`}
                >
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {proj.title}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${proj.badgeColor}`}
                    >
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2">{proj.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Inspector Panel (8 Cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Header Info */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full border ${activeProject.badgeColor}`}
                  >
                    {activeProject.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">ID: {activeProject.id}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeProject.title}
                </h2>
                <p className="text-cyan-400 font-medium text-sm mt-1">{activeProject.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
                {activeProject.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {activeProject.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 flex flex-col justify-center"
                  >
                    <span className="text-xs font-mono text-slate-500 uppercase">{m.label}</span>
                    <span className="text-xl font-bold text-cyan-300 font-mono mt-1">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Key Deliverable Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Key Deliverable Architecture
                </h4>
                <ul className="space-y-2">
                  {activeProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-cyan-400 font-mono font-bold">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Tech Stack Componentry
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-800/80 text-slate-200 text-xs px-3 py-1 rounded-xl border border-slate-700/60 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-500">
                STATUS: <span className="text-emerald-400">PRODUCTION DEPLOYED</span>
              </div>

              <div className="flex items-center gap-3">
                {activeProject.liveUrl && activeProject.liveUrl !== "#" && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                  >
                    <span>LAUNCH DEMO</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}

                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs px-4 py-2.5 rounded-xl border border-slate-700 transition-all cursor-pointer"
                >
                  <span>GITHUB CODE</span>
                  <svg className="w-4 h-4 fill-slate-300" viewBox="0 0 24 24">
                    <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
