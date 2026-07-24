import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full border-t border-slate-200/80">
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
            // ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Engineering with Craft & Purpose
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Story (8 cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            className="lg:col-span-8 light-card p-6 sm:p-8 rounded-3xl space-y-6 cursor-pointer"
          >
            <p className="text-slate-700 leading-relaxed text-base">
              I am a 21-year-old software developer based in Astana, Kazakhstan. My approach combines strong computer science fundamentals with modern web engineering standards, responsive aesthetics, and scalable backend services.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Whether building full-stack platforms like StroyCheck.KZ for construction compliance, Tazaayl for municipal waste management with real-time Mapbox GL & PostGIS tracking, or Knot AI systems with BullMQ job queues, I focus on delivering clean code, high performance, and meaningful user impact.
            </p>

            {/* Philosophy quote */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
              <div className="text-slate-900 font-serif italic font-medium text-lg">
                &ldquo;Doing nothing is the devil&apos;s game&rdquo;
              </div>
              <div className="text-xs font-mono text-slate-500">
                — Kama the Bullet
              </div>
            </div>
          </motion.div>

          {/* Quick Stats (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <motion.div whileHover={{ y: -3 }} className="light-card p-6 rounded-3xl space-y-2 cursor-pointer">
              <div className="text-3xl font-bold text-slate-900 font-mono">21</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Years Old</div>
              <p className="text-xs text-slate-600">Based in Astana, Kazakhstan</p>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="light-card p-6 rounded-3xl space-y-2 cursor-pointer">
              <div className="text-3xl font-bold text-slate-900 font-mono">5+</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Production Projects</div>
              <p className="text-xs text-slate-600">Web3, Real-time & AI Systems</p>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="light-card p-6 rounded-3xl space-y-2 cursor-pointer">
              <div className="text-3xl font-bold text-slate-900 font-mono">100%</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Commitment to Quality</div>
              <p className="text-xs text-slate-600">Clean code & bespoke design</p>
            </motion.div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
