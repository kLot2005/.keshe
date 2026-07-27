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
      <svg
        className="w-6 h-6 fill-slate-900"
        viewBox="0 0 512 512"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>ai</title>{" "}
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            {" "}
            <g
              id="icon"
              fill="#000000"
              transform="translate(64.000000, 64.000000)"
            >
              {" "}
              <path
                d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z"
                id="Combined-Shape"
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
    title: "AI Integration & LLM Agents",
    description:
      "Intelligent features powered by LLMs, RAG agents, computer vision, and custom Python/FastAPI backend pipelines.",
  },
  {
    svg: (
      <svg
        className="w-6 h-6 fill-slate-900"
        viewBox="0 0 32 32"
        enable-background="new 0 0 32 32"
        id="Stock_cut"
        version="1.1"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <desc></desc>{" "}
          <g>
            {" "}
            <path
              d="M17,31h-2 c-1.105,0-2-0.895-2-2v-2h6v2C19,30.105,18.105,31,17,31z"
              fill="none"
              stroke="#000000"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            ></path>{" "}
            <path
              d="M23,16L23,16 c0,2.518-1.186,4.889-3.2,6.4L19,23v4h-6v-4l-0.8-0.6C10.186,20.889,9,18.518,9,16v0c0-3.866,3.134-7,7-7h0 C19.866,9,23,12.134,23,16z"
              fill="none"
              stroke="#000000"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            ></path>{" "}
            <line
              fill="none"
              stroke="#000000"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              x1="16"
              x2="16"
              y1="6"
              y2="2"
            ></line>{" "}
            <line
              fill="none"
              stroke="#000000"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              x1="8.93"
              x2="6.101"
              y1="8.929"
              y2="6.1"
            ></line>{" "}
            <line
              fill="none"
              stroke="#000000"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              x1="23.07"
              x2="25.899"
              y1="8.929"
              y2="6.1"
            ></line>{" "}
            <line
              fill="none"
              stroke="#000000"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              x1="6"
              x2="2"
              y1="16"
              y2="16"
            ></line>{" "}
            <line
              fill="none"
              stroke="#000000"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              x1="26"
              x2="30"
              y1="16"
              y2="16"
            ></line>{" "}
          </g>{" "}
        </g>
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
    <section
      id="services"
      className="py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full border-t border-slate-200/80"
    >
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
