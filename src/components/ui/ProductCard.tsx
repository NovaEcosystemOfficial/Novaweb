"use client";

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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group nova-card-hover p-6"
    >
      <div className="relative flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-zinc-200">
          <Icon className="h-5 w-5" />
        </span>
        <StatusBadge status={meta.statusKey} label={copy.statusLabel} />
      </div>

      <div className="relative mt-5">
        <h3 className="text-lg font-semibold text-white">{copy.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {copy.description}
        </p>
      </div>

      <div className="relative mt-6">
        <Button
          href={meta.href}
          size="sm"
          variant="secondary"
          className="w-full sm:w-auto"
        >
          {copy.buttonLabel}
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
