"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { AnimatedBackground } from "./ui/AnimatedBackground";

const phaseMeta = {
  completed: {
    icon: CheckCircle2,
    ring: "ring-emerald-500/40",
    dot: "bg-emerald-400",
    label: "text-emerald-300",
    line: "from-emerald-500/50",
  },
  inProgress: {
    icon: Loader2,
    ring: "ring-nova-purple/40",
    dot: "bg-nova-violet",
    label: "text-violet-300",
    line: "from-violet-500/50",
  },
  planned: {
    icon: Rocket,
    ring: "ring-nova-orange/40",
    dot: "bg-nova-orange",
    label: "text-orange-300",
    line: "from-orange-500/50",
  },
} as const;

export function Roadmap() {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="relative scroll-mt-24 py-24 sm:py-32">
      <AnimatedBackground />

      <div className="container-nova relative">
        <SectionHeading
          eyebrow={t.roadmap.eyebrow}
          title={t.roadmap.title}
          description={t.roadmap.description}
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-emerald-500/40 via-violet-500/30 to-orange-500/30 sm:left-8" />

          <div className="flex flex-col gap-12">
            {t.roadmap.phases.map((phase, phaseIndex) => {
              const meta = phaseMeta[phase.statusKey];
              const PhaseIcon = meta.icon;
              const spin = phase.statusKey === "inProgress";

              return (
                <Reveal key={phase.statusKey} delay={phaseIndex * 0.08}>
                  <div className="relative pl-16 sm:pl-20">
                    <span
                      className={`absolute left-3 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-nova-surface ring-2 sm:left-5 ${meta.ring}`}
                    >
                      <PhaseIcon
                        className={`h-4 w-4 ${meta.label} ${spin ? "animate-spin" : ""}`}
                      />
                    </span>

                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.25em] ${meta.label}`}
                    >
                      {phase.statusLabel}
                    </p>

                    <div className="mt-4 space-y-4">
                      {phase.milestones.map((milestone, i) => (
                        <motion.div
                          key={milestone.id}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: i * 0.06 }}
                          whileHover={{ x: 4 }}
                          className="nova-card-hover p-5 sm:p-6"
                        >
                          <h3 className="text-lg font-bold text-white">
                            {milestone.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-400">
                            {milestone.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
