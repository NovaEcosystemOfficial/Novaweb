"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageProvider";
import { getStudioCopy } from "@/lib/studio-i18n";
import { SectionHeading } from "./ui/SectionHeading";

export function StudioProcess() {
  const { lang } = useLanguage();
  const copy = getStudioCopy(lang).process;

  return (
    <section id="process" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-nova">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.steps.map((step, i) => (
            <motion.li
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-nova-surface p-6"
            >
              <span className="text-xs font-medium tracking-[0.2em] text-zinc-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
