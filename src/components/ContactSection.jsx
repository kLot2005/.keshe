import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ka15err");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full border-t border-slate-200/80">
      <div className="light-card p-8 sm:p-12 rounded-3xl text-center space-y-8 bg-gradient-to-b from-white to-slate-50/50">
        
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Let&apos;s Build Something Extraordinary Together</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Interested in Collaborating?
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Whether you have a contract project, full-time engineering opportunity, or just want to connect — my inbox and Telegram are always open.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://t.me/ka15err"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-8 py-4 rounded-full transition-all shadow-lg shadow-slate-900/20 hover:scale-105 cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span>Message on Telegram (@ka15err)</span>
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-medium text-sm px-6 py-4 rounded-full transition-all shadow-xs hover:border-slate-400 cursor-pointer"
          >
            <svg className="w-4 h-4 fill-slate-700" viewBox="0 0 24 24">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            <span>{copied ? "Handle Copied!" : "Copy Handle: ka15err"}</span>
          </button>
        </div>

        {/* Location & Status Note */}
        <div className="text-xs text-slate-500 font-mono">
          LOCATION: ASTANA, KAZAKHSTAN (UTC+5) // QUICK RESPONSE TIME
        </div>

      </div>
    </section>
  );
}
