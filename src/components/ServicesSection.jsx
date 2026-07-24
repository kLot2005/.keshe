import { motion } from "motion/react";

const SERVICES = [
  {
    svg: (
      <svg className="w-6 h-6 fill-slate-900" viewBox="0 0 24 24">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    ),
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built with modern frameworks (React 19, Next.js, Vue 3, Vite, Tailwind CSS v4) with responsive performance and scalable structure.",
  },
  {
    svg: (
      <svg className="w-6 h-6 fill-slate-900" viewBox="0 0 24 24">
        <path d="M21 10.12h-2.16A7.002 7.002 0 0 0 13 4.16V2h-2v2.16C7.68 4.7 5.16 7.18 4.16 10.12H2v2h2.16c.5 2.94 3.02 5.42 5.96 5.96V22h2v-1.92c2.94-.54 5.46-3.02 5.96-5.96H21v-2zm-9 6c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
      </svg>
    ),
    title: "AI Integration & LLM Agents",
    description:
      "Intelligent features powered by LLMs, RAG agents, computer vision, and custom Python/FastAPI backend pipelines.",
  },
  {
    svg: (
      <svg className="w-6 h-6 fill-slate-900" viewBox="0 0 24 24">
        <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
      </svg>
    ),
    title: "Creative Frontend Craft",
    description:
      "Interactive digital experiences, smooth micro-animations, custom canvas shaders, and tailored design systems that set products apart.",
  },
  {
    svg: (
      <svg className="w-6 h-6 fill-slate-900" viewBox="0 0 24 24">
        <path d="M7 2v11h3v9l7-12h-4l4-8z" />
      </svg>
    ),
    title: "API & Backend Systems",
    description:
      "Robust REST APIs, WebSockets for real-time applications, database schemas (PostgreSQL, Vector DB), and efficient server architecture.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full border-t border-slate-200/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
            // WHAT I DO
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Services & Capabilities
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="light-card p-6 sm:p-8 rounded-3xl space-y-4 hover:border-slate-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-center">
                {service.svg}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
