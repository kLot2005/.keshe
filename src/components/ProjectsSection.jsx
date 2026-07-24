import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const PROJECTS = [
  {
    id: "stroycheck",
    title: "StroyCheck.KZ",
    category: "Commercial Platform",
    type: "commercial",
    subtitle: "AI Construction Compliance & Inspection Platform",
    description:
      "Full-stack platform for construction companies in Kazakhstan to automate compliance checks, site defect reporting, and safety inspections using computer vision AI models.",
    tags: ["React 19", "Node.js", "AI Vision", "PostgreSQL", "Tailwind CSS"],
    metrics: "3x Faster Inspections",
    liveUrl: "https://stroycheck.kz",
    githubUrl: "https://github.com/kLot2005",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "tazaayl",
    title: "Tazaayl Control Center",
    category: "Geospatial & Realtime",
    type: "commercial",
    subtitle: "Municipal Waste Management & Live GPS Tracking Platform",
    description:
      "Intelligent control center for municipal waste logistics featuring real-time Mapbox GL truck tracking, GeoJSON zoning, Socket.io streams, and PostGIS spatial analysis.",
    tags: ["Next.js 15", "NestJS 11", "Mapbox GL", "PostGIS", "Socket.io", "PostgreSQL"],
    metrics: "Real-time Live GPS Tracking",
    liveUrl: "https://github.com/kLot2005/tazaayl",
    githubUrl: "https://github.com/kLot2005/tazaayl",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "knot-ai",
    title: "Knot AI System",
    category: "AI Monorepo",
    type: "ai",
    subtitle: "Full-Stack System with Google Generative AI & BullMQ",
    description:
      "Scalable monorepo application integrating Google Generative AI models, Prisma ORM, Redis session caching, BullMQ async job processing queues, and Telegram Bot services.",
    tags: ["Next.js 16", "Express", "TypeScript", "Google Generative AI", "Prisma", "Redis"],
    metrics: "Async Queue Architecture",
    liveUrl: "https://github.com/kLot2005/Knot",
    githubUrl: "https://github.com/kLot2005/Knot",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: "blockchain-defi",
    title: "DeFi Crowdfunding Platform",
    category: "Web3 & Blockchain",
    type: "web",
    subtitle: "Web3 Crowdfunding & DAO Tokenomics Platform",
    description:
      "Modern Web3 crowdfunding application featuring smart contract interaction, ethers.js wallet integration, tokenomics distribution visualizers, and Radix UI components.",
    tags: ["Next.js 16", "React 19", "ethers.js", "Web3", "Shadcn/ui", "Radix UI"],
    metrics: "DeFi Web3 Deployed",
    liveUrl: "https://v0-blokchain-final.vercel.app",
    githubUrl: "https://github.com/kLot2005/blockchain-frontend",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    id: "whatsapp-legal",
    title: "WhatsApp Legal FSM Bot",
    category: "FSM & CRM System",
    type: "commercial",
    subtitle: "Automated Legal Consultant & Bitrix24 Integration",
    description:
      "Stateful conversational WhatsApp Cloud API bot powered by a Finite State Machine (FSM), Redis session management, IIN validation, and Bitrix24 CRM lead generation.",
    tags: ["Node.js", "Express", "Redis", "WhatsApp Cloud API", "Bitrix24 REST API"],
    metrics: "Automated Lead Sync",
    liveUrl: "https://github.com/kLot2005/whatsapp-bot",
    githubUrl: "https://github.com/kLot2005/whatsapp-bot",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full border-t border-slate-200/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
              // FEATURED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Production Deliverables ({PROJECTS.length})
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            {[
              { id: "all", label: "All Projects" },
              { id: "commercial", label: "Commercial Systems" },
              { id: "ai", label: "AI Systems" },
              { id: "web", label: "Web3 & Web" },
            ].map((tab) => {
              const isSelected = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer z-10 ${
                    isSelected ? "text-white font-semibold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeProjectFilterPill"
                      className="absolute inset-0 bg-slate-900 rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="light-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full border ${project.badgeColor}`}
                    >
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.metrics}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-700 text-[11px] font-mono px-2.5 py-1 rounded-lg border border-slate-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"/>
                    </svg>
                    <span>GitHub Code</span>
                  </a>

                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Live Demo →</span>
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-400 font-semibold">Active System</span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </section>
  );
}
