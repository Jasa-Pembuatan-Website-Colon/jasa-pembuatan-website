"use client";

import { m } from "framer-motion";
import {
  Code2,
  Layers3,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stack = [
  {
    name: "Next.js",
    role: "Frontend Architecture",
    description:
      "Membangun website cepat, SEO-ready, dan siap diskalakan untuk kebutuhan growth bisnis.",
    icon: Rocket,
  },
  {
    name: "Laravel",
    role: "Backend Foundation",
    description:
      "Menjadi fondasi API, dashboard, autentikasi, dan logika bisnis yang stabil.",
    icon: Server,
  },
  {
    name: "React",
    role: "Interactive Experience",
    description:
      "Menghadirkan interface interaktif yang responsif, rapi, dan nyaman digunakan setiap hari.",
    icon: Code2,
  },
  {
    name: "Tailwind CSS",
    role: "Design System",
    description:
      "Mempercepat produksi UI konsisten tanpa mengorbankan detail visual dan maintainability.",
    icon: Layers3,
  },
];

export default function TechStackBooster() {
  return (
    <section className="relative border-t border-white/[0.06] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Tech Stack Booster
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
              Teknologi yang kami pilih untuk mempercepat bisnis, bukan sekadar
              mengikuti tren.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-zinc-500">
            Kombinasi stack ini memberi fondasi yang cepat, aman, mudah dirawat,
            dan siap berkembang ketika traffic, transaksi, serta kebutuhan
            operasional bisnis ikut naik.
          </p>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {stack.map((item) => {
            const Icon = item.icon;

            return (
              <m.article
                key={item.name}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="group rounded-lg border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.045]"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-zinc-950 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
                  {item.role}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>
              </m.article>
            );
          })}
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-5 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.06] p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-100">
                  Stack yang siap masuk ke proses bisnis nyata.
                </h3>
                <p className="mt-1 text-sm leading-6 text-zinc-500">
                  Dari landing page konversi, company profile, dashboard admin,
                  sampai sistem transaksi, stack ini kami gunakan untuk menjaga
                  kecepatan delivery dan kualitas jangka panjang.
                </p>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
