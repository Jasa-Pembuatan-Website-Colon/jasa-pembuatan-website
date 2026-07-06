"use client";

import Image from "next/image";
import { m } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  GitBranch,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { TEAM, fadeUp, stagger } from "@/lib/constants";

const TEAM_LAYOUT = [
  {
    member: TEAM[0],
    focus: "UI slicing, interaction polish, dan responsive detail.",
    className: "lg:col-span-2 lg:row-span-4",
    cardHeight: "min-h-[34rem] lg:min-h-0",
    imagePosition: "object-[50%_28%]",
    accent: "from-cyan-300/24 via-sky-400/8 to-transparent",
  },
  {
    member: TEAM[1],
    focus: "API, database, deployment flow, dan struktur backend.",
    className: "lg:col-span-4 lg:row-span-2",
    cardHeight: "min-h-[25rem] sm:min-h-[27rem] lg:min-h-0",
    imagePosition: "object-[50%_42%]",
    accent: "from-violet-300/22 via-cyan-300/8 to-transparent",
    wide: true,
  },
  {
    member: TEAM[2],
    focus: "Visual direction, layout system, dan UX yang mudah dipakai.",
    className: "lg:col-span-2 lg:row-span-4",
    cardHeight: "min-h-[34rem] lg:min-h-0",
    imagePosition: "object-[50%_26%]",
    accent: "from-fuchsia-300/20 via-cyan-300/8 to-transparent",
  },
  {
    member: TEAM[4],
    focus: "Frontend implementation, component states, dan micro detail.",
    className: "lg:col-span-2 lg:row-span-3",
    cardHeight: "min-h-[30rem] lg:min-h-0",
    imagePosition: "object-[50%_28%]",
    accent: "from-emerald-300/18 via-cyan-300/8 to-transparent",
  },
  {
    member: TEAM[3],
    focus: "Testing flow, edge case review, dan final quality gate.",
    className: "lg:col-span-2 lg:row-span-3",
    cardHeight: "min-h-[26rem] lg:min-h-0",
    imagePosition: "object-[50%_30%]",
    accent: "from-amber-200/16 via-cyan-300/8 to-transparent",
  },
];

const WORKFLOW = [
  {
    title: "Scope",
    description: "Brief dibedah jadi kebutuhan teknis yang jelas.",
    icon: GitBranch,
  },
  {
    title: "Build",
    description: "Desain, frontend, dan backend jalan paralel.",
    icon: UsersRound,
  },
  {
    title: "QA",
    description: "Setiap halaman dicek sebelum handover.",
    icon: CheckCircle2,
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative z-10 overflow-hidden border-t border-white/[0.06] px-6 py-28 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[34rem] w-[58rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.1] blur-3xl" />
        <div className="absolute bottom-10 right-[-12rem] h-[28rem] w-[28rem] rounded-full bg-violet-500/[0.09] blur-3xl" />
        <div className="absolute bottom-[-18rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-emerald-400/[0.055] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 grid gap-8 lg:grid-cols-[1fr_23rem] lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200 shadow-2xl shadow-black/20 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Core Team
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
              Eksekusi website ditangani langsung oleh tim inti.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
              Setiap peran punya tanggung jawab jelas dari desain interface,
              backend, QA, sampai handover. Komunikasi lebih pendek, keputusan
              lebih cepat, hasil lebih rapi.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Design to code", "Backend ready", "QA checked"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-medium text-zinc-400 backdrop-blur-md"
                >
                  <BadgeCheck className="h-3.5 w-3.5 text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.035] shadow-2xl shadow-black/20 backdrop-blur-md">
            <div className="border-b border-white/[0.08] p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Delivery Pulse
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-2 py-1 text-[11px] font-medium text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
                  Active
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <TeamMetric value="5" label="Specialist" />
                <TeamMetric value="3" label="Quality Gate" />
              </div>
            </div>
            <div className="space-y-3 p-4">
              {WORKFLOW.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-zinc-950/80 text-cyan-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      {index < WORKFLOW.length - 1 && (
                        <div className="my-1 h-7 w-px bg-white/[0.08]" />
                      )}
                    </div>
                    <div className="min-w-0 pb-1">
                      <p className="text-sm font-semibold text-zinc-200">
                        {step.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-zinc-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href="/team"
              className="mx-4 mb-4 inline-flex min-h-11 w-[calc(100%-2rem)] items-center justify-center gap-2 rounded-lg bg-zinc-100 px-4 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10 active:scale-[0.98]"
            >
              Detail Tim Kami
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
          className="grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[7.4rem]"
        >
          {TEAM_LAYOUT.map((item, index) => (
            <MemberCard key={item.member.name} index={index} {...item} />
          ))}
        </m.div>
      </div>
    </section>
  );
}

function TeamMetric({ value, label }) {
  return (
    <div className="rounded-lg border border-white/[0.08] bg-zinc-950/60 px-3 py-3">
      <p className="text-2xl font-semibold tracking-tight text-zinc-100">
        {value}
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
        {label}
      </p>
    </div>
  );
}

function MemberCard({
  member,
  index,
  focus,
  className = "",
  cardHeight = "min-h-[22rem] lg:min-h-0",
  imagePosition = "object-center",
  accent = "from-cyan-300/20 via-cyan-300/8 to-transparent",
  wide = false,
}) {
  const Icon = member.icon;
  return (
    <m.div
      variants={fadeUp}
      className={`group relative z-10 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] shadow-2xl shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] ${cardHeight} ${className}`}
    >
      <Image
        src={member.img}
        alt={member.name}
        fill
        sizes={
          wide
            ? "(min-width: 1024px) 45vw, 100vw"
            : "(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
        }
        className={`object-cover ${imagePosition} grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/58 to-zinc-950/5" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-30`}
      />

      <div className="relative flex h-full flex-col justify-end p-5 sm:p-6">
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-zinc-950/78 text-zinc-300 shadow-xl shadow-black/25 transition-colors duration-300 group-hover:text-cyan-200">
          <Icon className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
              {member.role}
            </p>
            <span className="text-[10px] font-semibold text-zinc-700">
              0{index + 1}
            </span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-100">
            {member.name}
          </h3>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {member.badge || focus}
          </p>
        </div>
      </div>
    </m.div>
  );
}
