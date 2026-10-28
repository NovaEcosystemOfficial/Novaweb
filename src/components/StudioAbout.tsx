"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageProvider";
import { getStudioCopy } from "@/lib/studio-i18n";
import { SectionHeading } from "./ui/SectionHeading";

export function StudioAbout() {
  const { lang } = useLanguage();
  const copy = getStudioCopy(lang).about;

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-nova">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
            align="left"
          />
          <div className="space-y-6 border-l border-white/10 pl-6 sm:pl-8">
            {copy.paragraphs.map((paragraph, i) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="text-base leading-relaxed text-zinc-400"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
