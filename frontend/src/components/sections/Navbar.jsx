"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-zinc-950/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="group inline-flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-xs font-semibold text-cyan-200 transition-colors group-hover:border-cyan-300/30">
            TD
          </span>
          <span className="text-sm font-semibold tracking-tight text-zinc-100">
            ThreeDevs
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-[13px] text-zinc-500 transition-colors hover:bg-white/[0.05] hover:text-zinc-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/order"
          className="hidden min-h-10 items-center gap-1.5 rounded-lg bg-zinc-100 px-4 text-[13px] font-semibold text-zinc-950 transition-all hover:bg-white hover:shadow-lg hover:shadow-cyan-500/10 md:flex"
        >
          Mulai Sekarang <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/[0.08] bg-zinc-950/95 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/order"
                className="mt-2 w-full rounded-lg bg-zinc-100 py-3 text-center text-sm font-semibold text-zinc-950"
                onClick={() => setMobileOpen(false)}
              >
                Mulai Sekarang
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
