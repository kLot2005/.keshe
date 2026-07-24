export default function Footer() {
  return (
    <footer className="w-full text-center text-xs font-mono text-slate-500 py-8 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          Copyright © 2025{" "}
          <a
            href="https://keshe.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 font-semibold hover:underline"
          >
            keshe.dev
          </a>
          . Bishimbay Bekarys. All rights reserved.
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <a href="#home" className="hover:text-slate-700">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
}
