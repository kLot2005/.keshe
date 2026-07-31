import { GitHubCalendar } from "react-github-calendar";
import { motion } from "motion/react";
import { GITHUB_CONFIG } from "../config/github";

const THEME_PALETTE = {
  light: ["#f1f5f9", "#bbf7d0", "#4ade80", "#22c55e", "#15803d"],
  dark: ["#1e293b", "#064e3b", "#047857", "#10b981", "#34d399"],
};

export default function GitHubContributions({ username = GITHUB_CONFIG.username }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="light-card p-6 rounded-3xl space-y-4 w-full overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 pb-3">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">GitHub Activity</h3>
        </div>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 px-3 py-1 rounded-full transition-colors"
        >
          @{username} ↗
        </a>
      </div>

      {/* Calendar Grid Container with Responsive Overflow */}
      <div className="w-full overflow-x-auto flex justify-center py-1">
        <div className="min-w-[720px]">
          <GitHubCalendar
            username={username}
            colorScheme="light"
            theme={THEME_PALETTE}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            labels={{ totalCount: "{{count}} contributions in the last year" }}
            throwOnError={false}
          />
        </div>
      </div>
    </motion.div>
  );
}
