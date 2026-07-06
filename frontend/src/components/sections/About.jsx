"use client";

import { m } from "framer-motion";
import { ArrowUpRight, Crosshair, Gem, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";

const fadeUp = {
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

export function AboutLampSection() {
  return (
    <section className="relative border-t border-white/[0.06]">
      <LampContainer className="min-h-[42rem] rounded-none">
        <m.div
          initial={{ opacity: 0.45, y: 72 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeInOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            About ThreeDevs
          </p>
          <h2 className="bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Akar Lokal. Standar Global.
          </h2>
        </m.div>
      </LampContainer>
    </section>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative border-t border-white/[0.06] px-6 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mb-14 max-w-5xl"
        >
          <m.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80"
          >
            <Gem className="h-3.5 w-3.5" />
            Our Story
          </m.p>
          <m.h2
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-balance text-3xl font-semibold leading-tight tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl"
          >
            Akar Lokal. Standar Global. Membangun Ekosistem Digital Banyuwangi.
          </m.h2>
          <m.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-6 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg"
          >
            ThreeDevs lahir dari sebuah keyakinan sederhana: Bahwa bisnis lokal
            dan UMKM berhak mendapatkan infrastruktur teknologi kelas enterprise
            tanpa kompromi.
          </m.p>
        </m.div>

        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
              Visi ThreeDevs
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-100">
              Kami membangun fondasi digital untuk bisnis yang ingin bertahan lama.
            </h3>
            <a
              href="/about"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 px-4 text-sm font-semibold text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              Baca versi lengkap
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.08, duration: 0.55, ease: "easeOut" }}
            className="rounded-lg border border-white/[0.08] bg-white/[0.035] p-7 sm:p-8"
          >
            <p className="text-base leading-8 text-zinc-300">
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

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-6 grid gap-4 md:grid-cols-3"
        >
          {philosophy.map((item) => {
            const Icon = item.icon;

            return (
              <m.article
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.045]"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-zinc-950 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>
              </m.article>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
