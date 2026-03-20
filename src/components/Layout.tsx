import React from "react";
import { legalLinks, logoSrc } from "../data/siteContent";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout({ children, title = "SoberTaper™" }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img src={logoSrc} alt="SoberTaper logo" className="h-10 w-10 rounded-xl object-contain" />
            <div>
              <div className="text-lg font-semibold tracking-wide">SoberTaper</div>
              <div className="text-xs text-slate-400">Educational Titration Simulator</div>
            </div>
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="/#features" className="hover:text-white">Features</a>
            <a href="/#screenshots" className="hover:text-white">Screenshots</a>
            <a href="/#visualize" className="hover:text-white">What it helps visualize</a>
            <a href="/download" className="hover:text-white">Download</a>
            <a href="/webapp" className="hover:text-white">Web App</a>
            <a href="/pricing" className="hover:text-white">Pricing</a>
            <a href="/disclaimer" className="hover:text-white">Disclaimer</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
          <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-cyan-300">{title}</div>
        </section>
        {children}
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-medium text-slate-200">SoberTaper™ · Patents Pending · © 2026 Stevens Borowsky. All rights reserved.</div>
            <div className="mt-1 text-sm text-slate-400">Educational simulation software.</div>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}