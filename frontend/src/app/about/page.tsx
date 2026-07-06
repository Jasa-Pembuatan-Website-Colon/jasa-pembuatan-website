"use client";

import { m, type Variants } from "framer-motion";
import { ArrowUpRight, Crosshair, Gem, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import TechStackBooster from "@/components/sections/TechStackBooster";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const philosophy = [
  {
    title: "Precision",
    label: "Presisi",
    description:
      "Membangun UI/UX yang tidak hanya memanjakan mata, tapi mengarahkan konversi nyata.",
    icon: Crosshair,
  },
  {
    title: "Robustness",
    label: "Ketangguhan",
    description:
      "Infrastruktur backend yang dirancang untuk menahan beban masa depan.",
    icon: Layers3,
  },
  {
    title: "Assurance",
    label: "Kepastian",
    description:
      "Melewati standar Quality Assurance ketat sebelum sistem menyentuh tangan pengguna.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100 selection:bg-cyan-400/20 selection:text-cyan-100">
      <Navbar />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[58rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-28 top-[34rem] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -left-24 top-[72rem] h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      </div>

      <section className="relative px-6 pb-20 pt-32 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <m.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="max-w-5xl"
          >
            <m.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400"
            >
              <Gem className="h-3.5 w-3.5 text-cyan-300" />
              About ThreeDevs
            </m.p>

            <m.h1
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-zinc-100 sm:text-5xl lg:text-7xl"
            >
              Akar Lokal. Standar Global. Membangun Ekosistem Digital Banyuwangi.
            </m.h1>

            <m.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400"
            >
              ThreeDevs lahir dari sebuah keyakinan sederhana: Bahwa bisnis lokal
              dan UMKM berhak mendapatkan infrastruktur teknologi kelas
              enterprise tanpa kompromi.
            </m.p>
          </m.div>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-6"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
              Our Story
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">
              Visi yang tumbuh dari kebutuhan nyata.
            </h2>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.08, duration: 0.55, ease: "easeOut" }}
            className="rounded-lg border border-white/[0.08] bg-white/[0.035] p-7 sm:p-8 lg:p-10"
          >
            <p className="text-lg leading-8 text-zinc-300">
              Kami bukan sekadar pengembang perangkat lunak. Kami adalah arsitek
              sistem, perancang pengalaman, dan pengawal kualitas. Bermula dari
              sebuah tim kecil yang terobsesi dengan clean code dan arsitektur
              modern, ThreeDevs kini hadir sebagai solusi jembatan digitalisasi
              untuk UMKM. Kami menolak template instan. Setiap baris kode yang
              kami tulis dirancang untuk performa, keamanan, dan skalabilitas
              bisnis Anda.
            </p>
          </m.div>
        </div>
      </section>

      <section className="relative border-t border-white/[0.06] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-12 max-w-3xl"
          >
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
              <Sparkles className="h-3.5 w-3.5" />
              The Vanguard Philosophy
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
              Tiga prinsip yang menjaga setiap project tetap tajam, kuat, dan siap digunakan.
            </h2>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid gap-4 md:grid-cols-3"
          >
            {philosophy.map((item) => {
              const Icon = item.icon;

              return (
                <m.article
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="group rounded-lg border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.045]"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-zinc-950 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </m.article>
              );
            })}
          </m.div>
        </div>
      </section>

      <TechStackBooster />

      <section className="relative px-6 pb-24">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto flex max-w-6xl flex-col gap-6 rounded-lg border border-white/[0.08] bg-white/[0.035] p-8 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
              Build With Us
            </p>
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
              Saatnya membangun sistem digital yang pantas untuk ambisi bisnis Anda.
            </h2>
          </div>
          <a
            href="/order"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-lg bg-zinc-100 px-5 text-sm font-semibold text-zinc-950 transition-all hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10"
          >
            Mulai Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </m.div>
      </section>

      <Footer />
    </main>
  );
}
