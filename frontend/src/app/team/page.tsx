"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Lightfall from "@/components/Lightfall";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import {
  ArrowUpRight,
  Code2,
  Gem,
  Layers3,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  title: string;
  image: string;
  icon: React.ReactNode;
  className?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Arya Prana Jaya",
    role: "Backend Leader",
    title: "Backend Lead",
    image: "/arya.jpeg",
    icon: <Server className="h-4 w-4" />,
    className: "lg:row-span-2",
  },
  {
    name: "Dannys Martha Favrillia",
    role: "Frontend Developer",
    title: "The Unstoppable Frontend",
    image: "/dannys.jpeg",
    icon: <Code2 className="h-4 w-4" />,
    className: "lg:row-span-2",
  },
  {
    name: "Dina",
    role: "Frontend Developer",
    title: "The UI/UX Enthusiast",
    image:
      "/loren.jpeg",
    icon: <Layers3 className="h-4 w-4" />,
  },
  {
    name: "Okkyboy",
    role: "Frontend Developer",
    title: "The Frontend Energy",
    image:
      "/akbar.jpeg",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    name: "Idgar",
    role: "QA Engineer",
    title: "The Strongest Quality Assurance",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=85",
    icon: <ShieldCheck className="h-4 w-4" />,
    className: "lg:col-span-2",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function TeamPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100 selection:bg-cyan-400/20 selection:text-cyan-100">
      <Navbar />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-24 top-[32rem] h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -left-32 top-[68rem] h-[24rem] w-[24rem] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      </div>

      <section className="relative isolate min-h-[44rem] overflow-hidden px-6 pb-24 pt-32 lg:pt-36">
        <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 opacity-80">
          <Lightfall
            colors={["#22d3ee", "#7c3aed", "#e0e7ff"]}
            backgroundColor="#09090b"
            speed={0.28}
            streakCount={5}
            streakWidth={0.72}
            streakLength={1.35}
            glow={0.78}
            density={0.5}
            twinkle={0.82}
            zoom={2.65}
            backgroundGlow={0.18}
            opacity={0.62}
            dpr={1}
            targetFps={24}
            mouseInteraction={false}
            mouseStrength={0.28}
            mouseRadius={0.85}
            mouseDampening={0.22}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,9,11,0.18),rgba(9,9,11,0.78)_62%,#09090b_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-zinc-950" />

        <m.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <div className="mx-auto mb-7 flex h-10 w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 text-xs font-medium uppercase tracking-[0.22em] text-zinc-500 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <Gem className="h-3.5 w-3.5 text-cyan-300" />
            Team & Vision
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
            Tim teknis yang focus pada hasil bisnis, bukan sekadar tampilan.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
            Kami menggabungkan desain, engineering, dan quality assurance agar
            website Anda terlihat profesional, cepat dipakai, dan mudah
            dikembangkan.
          </p>
        </m.div>
      </section>

      <section className="relative z-10 px-6 pb-24">
        <div className="relative z-10 mx-auto max-w-6xl">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-zinc-600">
                Core Team
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
                Peran jelas untuk eksekusi yang terukur.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-zinc-500">
              Struktur tim kami dibuat ramping agar komunikasi cepat, scope
              jelas, and setiap detail project punya pemilik.
            </p>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={stagger}
            className="grid auto-rows-[24rem] gap-5 md:grid-cols-2 lg:auto-rows-[18rem] lg:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </m.div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-10 lg:p-12"
        >
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
              Siap berkolaborasi dengan tim yang tertata?
            </h2>

            <a
              href="/order"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-lg bg-zinc-100 px-6 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:bg-white hover:shadow-xl hover:shadow-cyan-500/10 active:scale-[0.98]"
            >
              Hubungi Tim Kami
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </m.div>
      </section>

      <Footer />
    </main>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <m.article
      variants={fadeUp}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.025] shadow-2xl shadow-black/25 backdrop-blur-xl ${member.className ?? ""}`}
    >
      <Image
        src={member.image}
        alt={`Foto profil ${member.name}`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/58 to-zinc-950/10" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-zinc-950/80 text-zinc-300 transition-colors duration-300 group-hover:text-cyan-200">
          {member.icon}
        </div>

        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
          {member.role}
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">
          {member.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{member.title}</p>
      </div>
    </m.article>
  );
}
