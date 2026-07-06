"use client";

import { m } from "framer-motion";
import { Check } from "lucide-react";
import { PLANS, fadeUp, stagger } from "@/lib/constants";

export default function PricingSection() {
  return (
    <section id="pricing" className="border-t border-white/[0.06] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              Pricing
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
              Paket transparan untuk kebutuhan yang berbeda.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-500">
            Semua paket sudah termasuk konsultasi kebutuhan, desain responsif,
            dan handover teknis setelah website live.
          </p>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <m.div
              key={plan.name}
              variants={fadeUp}
              className={`relative rounded-lg border p-7 transition-all duration-200 hover:-translate-y-1 ${
                plan.highlighted
                  ? "border-cyan-300/30 bg-white/[0.06] shadow-2xl shadow-cyan-950/20"
                  : "border-white/[0.08] bg-white/[0.025] hover:border-white/[0.14]"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-cyan-200 px-3 py-0.5 text-[11px] font-semibold text-zinc-950">
                  Paling Populer
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-zinc-200">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-zinc-100">
                    Rp {plan.price}
                  </span>
                  <span className="text-sm text-zinc-600">{plan.unit}</span>
                </div>
                <p className="mt-3 text-sm text-zinc-500">{plan.desc}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-zinc-400"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/80" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/order"
                className={`block min-h-11 w-full rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-zinc-100 text-zinc-950 hover:bg-white"
                    : "border border-white/10 text-zinc-300 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                Pilih Paket
              </a>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
