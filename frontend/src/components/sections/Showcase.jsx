"use client";

import dynamic from "next/dynamic";
import { m } from "framer-motion";
import { fadeUp } from "@/lib/constants";

// Lazy load MacbookScroll - heavy animation component
const MacbookScroll = dynamic(() => import("../ui/macbook-scroll").then(mod => mod.MacbookScroll), {
  ssr: false,
  loading: () => <div className="h-[50vh] flex items-center justify-center text-zinc-500">Loading Showcase...</div>,
});

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-8 text-center">
        <m.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-2xl font-semibold tracking-tight text-zinc-200 sm:text-3xl"
        >
          Dibangun dengan Teknologi Modern.
          <br />
          <span className="text-zinc-500">Performa Tanpa Batas.</span>
        </m.h2>
      </div>

      <MacbookScroll
        title=""
        src="/threedevs.png"
        showGradient
        badge={
          <div className="flex items-center gap-2 rounded-md bg-zinc-800/80 px-3 py-1.5 backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs text-zinc-400">ThreeDevs — Live</span>
          </div>
        }
      />
    </section>
  );
}
