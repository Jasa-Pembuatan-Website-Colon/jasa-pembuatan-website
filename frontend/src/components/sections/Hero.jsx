"use client";

import dynamic from "next/dynamic";
import { m } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Safari } from "@/components/ui/safari";
import Image from "next/image";

const Iridescence = dynamic(() => import("@/components/Iridescence"), {
  ssr: false,
  loading: () => null,
});

const TECH_STACK = [
  {
    name: "Next.js",
    fit: "SEO-ready frontend",
    logo: "https://cdn.simpleicons.org/nextdotjs/ffffff",
  },
  {
    name: "Laravel",
    fit: "Backend bisnis stabil",
    logo: "https://cdn.simpleicons.org/laravel/FF2D20",
  },
  {
    name: "React.js",
    fit: "Interface interaktif",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Tailwind CSS",
    fit: "UI modern konsisten",
    logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* CSS gradient fallback: renders instantly for LCP while Iridescence (WebGL) loads */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(71,130,255,0.12) 0%, rgba(124,58,237,0.09) 60%, rgba(16,24,40,0.04) 100%)",
          }}
        >
          <Iridescence
            color={[0.55, 0.62, 0.95]}
            speed={0.65}
            amplitude={0.12}
            mouseReact={false}
            className="absolute inset-0"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(124,58,237,0.12),transparent_26%),linear-gradient(to_bottom,rgba(9,9,11,0.15),#09090b_92%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <m.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400"
            >
              IT Agency Banyuwangi
            </m.p>

            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-zinc-100 sm:text-5xl lg:text-7xl">
              Website profesional untuk bisnis yang siap tumbuh.
            </h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
            >
              Kami merancang landing page, company profile, web app, dan
              e-commerce dengan tampilan matang, performa cepat, serta alur
              konversi yang jelas.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="/order"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-zinc-100 px-5 text-sm font-semibold text-zinc-950 transition-all hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10"
              >
                Mulai Proyek <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#showcase"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/10 px-5 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
              >
                Lihat Showcase
              </a>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-zinc-500 sm:grid-cols-3"
            >
              {["Desain responsif", "SEO-ready", "Support handover"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </m.div>
          </div>

          <div className="relative hidden min-h-[30rem] items-center justify-center md:flex">
            <div className="absolute inset-8 rounded-lg border border-white/[0.06] bg-zinc-950/30 shadow-2xl shadow-black/30 backdrop-blur-sm" />
            <BrowserPreview />
          </div>
        </div>

        <TechStackMarquee />
      </div>
    </section>
  );
}

function TechStackMarquee() {
  const marqueeItems = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <m.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85, duration: 0.55 }}
      className="mt-14 border-y border-white/[0.07] py-5"
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
          Modern stack for business projects
        </p>
        <p className="max-w-xl text-sm leading-6 text-zinc-500">
          Next.js, Laravel, React.js, dan Tailwind CSS kami gunakan untuk
          membangun website bisnis yang cepat, rapi, scalable, dan mudah
          dikembangkan.
        </p>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="tech-stack-marquee flex w-max gap-3">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex min-w-[15rem] items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.035] px-4 py-3 backdrop-blur"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-zinc-950/80">
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                  loading="lazy"
                  unoptimized
                />
              </span>
              <span>
                <span className="block text-sm font-semibold text-zinc-100">
                  {item.name}
                </span>
                <span className="mt-0.5 block text-xs text-zinc-500">
                  {item.fit}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
}

function BrowserPreview() {
  return (
    <div className="relative w-full max-w-[34rem] px-4">
      <m.div
        initial={{ opacity: 0, y: 24, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
        className="relative z-10"
      >
        <Safari
          url="threedevs.web.id"
          imageSrc="/threedevs.png"
          priority={true}
          className="drop-shadow-[0_28px_80px_rgba(0,0,0,0.45)]"
        />
      </m.div>

      <div className="absolute -bottom-8 left-0 right-0 z-20 mx-auto grid max-w-[28rem] grid-cols-3 gap-3">
        {[
          ["35+", "Project"],
          ["1x24", "Respons"],
          ["99%", "Uptime"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-lg border border-white/10 bg-zinc-950/80 p-3 text-center shadow-xl shadow-black/20 backdrop-blur"
          >
            <p className="text-lg font-semibold text-zinc-100">{value}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-zinc-600">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
