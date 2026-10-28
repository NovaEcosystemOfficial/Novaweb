"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "./ui/Button";
import { HeroNeonLogo } from "./ui/HeroNeonLogo";
import { useLanguage } from "@/context/LanguageProvider";
import { getStudioCopy } from "@/lib/studio-i18n";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  const { lang } = useLanguage();
  const copy = getStudioCopy(lang).hero;

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-nova-radial" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="container-nova">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Neon logo is outside Framer opacity so CSS flicker is not overridden */}
          <div className="mb-8 w-full sm:mb-10">
            <HeroNeonLogo />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.p
              variants={item}
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500"
            >
              {copy.badge}
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {copy.tagline}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
              {copy.description}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
            >
              <Button href="#projects" size="lg">
                {copy.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="#contact" size="lg" variant="secondary">
                <Mail className="h-4 w-4" />
                {copy.secondaryCta}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
