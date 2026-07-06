"use client";

import { m } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { fadeUp, stagger } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/[0.06] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Mulai proyek Anda.
          </h2>
          <p className="mt-4 text-zinc-500">
            Ceritakan ide Anda. Tim kami akan menghubungi dalam 1x24 jam.
          </p>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 gap-10 lg:grid-cols-5"
        >
          <m.form
            variants={fadeUp}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6 rounded-lg border border-white/[0.08] bg-white/[0.025] p-6 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs text-zinc-500">
                  Nama
                </label>
                <input
                  type="text"
                  placeholder="Nama lengkap"
                  className="w-full rounded-lg border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-zinc-500">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@domain.com"
                  className="w-full rounded-lg border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs text-zinc-500">
                Paket
              </label>
              <select className="w-full rounded-lg border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-400 outline-none transition-all focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/20">
                <option value="">Pilih paket</option>
                <option value="basic">Basic — 1.5 Juta</option>
                <option value="bisnis">Bisnis — 3.5 Juta</option>
                <option value="pro">Pro — 7 Juta</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs text-zinc-500">
                Pesan
              </label>
              <textarea
                rows={5}
                placeholder="Ceritakan tentang proyek Anda..."
                className="w-full resize-none rounded-lg border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/20"
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-zinc-100 px-6 text-sm font-semibold text-zinc-950 transition-all hover:bg-white hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <Send className="h-4 w-4" />
              Kirim Pesan
            </button>
          </m.form>

          <m.div variants={fadeUp} className="space-y-4 lg:col-span-2">
            <ContactItem
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value="threedevs@gmail.com"
            />
            <ContactItem
              icon={<Phone className="h-4 w-4" />}
              label="WhatsApp"
              value="+62 8953-6875-7054"
            />
            <ContactItem
              icon={<MapPin className="h-4 w-4" />}
              label="Lokasi"
              value="Banyuwangi, Indonesia"
            />
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-zinc-950 text-cyan-300">
        {icon}
      </div>
      <div>
        <p className="text-xs text-zinc-600">{label}</p>
        <p className="mt-1 text-sm font-medium text-zinc-300">{value}</p>
      </div>
    </div>
  );
}
