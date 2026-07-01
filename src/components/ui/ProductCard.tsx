"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProductSlug } from "@/lib/ecosystem";
import { productMeta } from "@/lib/ecosystem";
import { getProductCopy } from "@/lib/ecosystem-i18n";
import { useLanguage } from "@/context/LanguageProvider";
import { StatusBadge } from "./StatusBadge";
import { Button } from "./Button";

type ProductCardProps = {
  slug: ProductSlug;
  index?: number;
};

export function ProductCard({ slug, index = 0 }: ProductCardProps) {
  const { lang } = useLanguage();
  const meta = productMeta[slug];
  const copy = getProductCopy(lang, slug);
  const Icon = meta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="group nova-card-hover p-6 sm:p-7"
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full ${meta.glowColor} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.accent} shadow-glow transition-transform duration-500 group-hover:scale-105`}
        >
          <Icon className="h-6 w-6 text-white" />
        </span>
        <StatusBadge status={meta.statusKey} label={copy.statusLabel} />
      </div>

      <div className="relative mt-6">
        <h3 className="text-xl font-bold text-white">{copy.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {copy.description}
        </p>
      </div>

      <div className="relative mt-6">
        <Button href={meta.href} size="sm" variant="secondary" className="w-full sm:w-auto">
          {copy.buttonLabel}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </div>
    </motion.div>
  );
}
