"use client";

import { motion } from "framer-motion";
import { Clock, FlaskConical } from "lucide-react";
import { getLabProducts } from "@/lib/ecosystem";
import { getEcosystemCopy, getProductCopy } from "@/lib/ecosystem-i18n";
import { useLanguage } from "@/context/LanguageProvider";
import { PageShell } from "@/components/layout/PageShell";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

function LabsContent() {
  const { lang } = useLanguage();
  const copy = getEcosystemCopy(lang).labs;
  const labProducts = getLabProducts();

  return (
    <div className="container-nova">
      <Reveal>
        <div className="max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-slate-300">
            <FlaskConical className="h-3.5 w-3.5 text-nova-orange" />
            {copy.eyebrow}
          </span>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            {copy.description}
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {labProducts.map((meta, i) => {
          const product = getProductCopy(lang, meta.slug);
          const Icon = meta.icon;
          return (
            <motion.div
              key={meta.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="nova-card-hover p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${meta.accent} shadow-glow`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <StatusBadge
                  status={meta.statusKey}
                  label={product.statusLabel}
                />
              </div>
              <h2 className="mt-5 text-lg font-bold text-white">
                {product.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {product.description}
              </p>
              <div className="mt-5">
                <Button href={meta.href} size="sm" variant="secondary">
                  {product.buttonLabel}
                </Button>
              </div>
            </motion.div>
          );
        })}

        <Reveal delay={0.2}>
          <div className="nova-card flex flex-col justify-center border-dashed border-white/15 p-6 opacity-90">
            <Clock className="h-8 w-8 text-nova-violet" />
            <h2 className="mt-4 text-lg font-bold text-white">
              {copy.comingSoonTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {copy.comingSoonDescription}
            </p>
            <span className="mt-4 inline-flex w-fit items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
              Coming Soon
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export function LabsPageView() {
  return (
    <PageShell>
      <LabsContent />
    </PageShell>
  );
}
