"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS, fadeUp, stagger } from "@/lib/constants";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <section id="faq" className="border-t border-white/[0.06] px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Pertanyaan yang sering ditanyakan.
          </h2>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {FAQS.map((item, i) => (
            <m.div
              key={i}
              variants={fadeUp}
              className="border-b border-white/[0.08]"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="pr-8 text-sm font-semibold text-zinc-200">
                  {item.q}
                </span>
                <m.span
                  animate={{ rotate: openFaq === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="h-4 w-4 text-zinc-500" />
                </m.span>
              </button>

              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-zinc-500">
                      {item.a}
                    </p>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
