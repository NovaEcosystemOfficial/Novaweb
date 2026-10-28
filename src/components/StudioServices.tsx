"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Cloud, FlaskConical } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { getStudioCopy } from "@/lib/studio-i18n";
import { SectionHeading } from "./ui/SectionHeading";

const icons = {
  desktop: Monitor,
  mobile: Smartphone,
  cloud: Cloud,
  labs: FlaskConical,
} as const;

export function StudioServices() {
  const { lang } = useLanguage();
  const copy = getStudioCopy(lang).services;

  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-nova">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {copy.items.map((service, i) => {
            const Icon = icons[service.id as keyof typeof icons] ?? Monitor;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-nova-surface p-7 transition-colors hover:border-white/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-zinc-300">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
