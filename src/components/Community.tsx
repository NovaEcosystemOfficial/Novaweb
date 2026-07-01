"use client";

import { motion } from "framer-motion";
import { Users, Youtube, Linkedin, Mail } from "lucide-react";
import { contactLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import {
  brandIcons,
  FacebookIcon,
  type BrandIconId,
} from "./ui/BrandIcons";

const cardStyles: Record<string, string> = {
  instagram: "hover:border-pink-400/40 hover:shadow-glow hover:bg-pink-500/5",
  tiktok: "hover:border-cyan-400/40 hover:shadow-glow hover:bg-cyan-500/5",
  discord: "hover:border-indigo-400/40 hover:shadow-glow hover:bg-indigo-500/5",
  github: "hover:border-white/30 hover:shadow-glow hover:bg-white/[0.06]",
  facebook: "hover:border-blue-400/40 hover:shadow-glow hover:bg-blue-500/5",
};

const comingSoonCards = [
  { id: "youtube", icon: Youtube, label: "YouTube" },
  { id: "linkedin", icon: Linkedin, label: "LinkedIn" },
  { id: "newsletter", icon: Mail, label: "Newsletter" },
];

export function Community() {
  const { t } = useLanguage();

  return (
    <section id="community" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nova-purple/12 blur-[140px]" />
      </div>

      <div className="container-nova">
        <div className="flex flex-col items-center text-center">
          <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-nova-gradient shadow-glow">
            <Users className="h-6 w-6 text-white" />
          </span>
          <SectionHeading
            eyebrow={t.community.eyebrow}
            title={t.community.title}
            description={t.community.description}
          />
        </div>

        <Reveal className="mt-12" delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.community.socials.map((social, i) => {
              const Icon =
                social.id === "facebook"
                  ? FacebookIcon
                  : brandIcons[social.id as BrandIconId];
              return (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className={`nova-card group flex flex-col gap-3 p-6 transition-all duration-500 ${cardStyles[social.id] ?? ""}`}
                >
                  {Icon && (
                    <Icon className="h-7 w-7 text-slate-300 transition-colors group-hover:text-white" />
                  )}
                  <div className="text-left">
                    <p className="font-bold text-white">{social.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{social.handle}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-6" delay={0.2}>
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            {t.community.comingSoonLabel}
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {comingSoonCards.map(({ id, icon: Icon, label }) => (
              <div
                key={id}
                className="nova-card flex items-center gap-3 border-dashed border-white/10 p-5 opacity-60"
              >
                <Icon className="h-5 w-5 text-slate-500" />
                <span className="text-sm font-medium text-slate-500">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
