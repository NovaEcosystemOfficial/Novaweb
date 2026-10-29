"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProductSlug } from "@/lib/ecosystem";
import { productMeta } from "@/lib/ecosystem";
import { getProductColors } from "@/lib/product-colors";
import { getProductCopy } from "@/lib/ecosystem-i18n";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageProvider";
import { StatusBadge } from "./StatusBadge";
import { Button } from "./Button";

type ProductCardProps = {
  slug: ProductSlug;
  index?: number;
};

export function ProductCard({ slug, index = 0 }: ProductCardProps) {
  const { lang } = useLanguage();
  const reduceMotion = useReducedMotion();
  const meta = productMeta[slug];
  const copy = getProductCopy(lang, slug);
  const colors = getProductColors(slug);
  const Icon = meta.icon;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.04 }}
      className={cn(
        "group product-card relative overflow-hidden rounded-2xl border bg-nova-surface p-6",
        "transition-[border-color,box-shadow,transform,filter] duration-200 ease-out",
        "motion-safe:hover:-translate-y-1 motion-safe:hover:brightness-[1.04]",
        colors.border,
        colors.borderHover,
        colors.halo,
        "focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-nova-bg",
        colors.focusRing
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px opacity-80",
          colors.soft
        )}
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-lg border",
            colors.iconBg,
            colors.iconBorder,
            colors.iconFg
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
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
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
        </Button>
      </div>
    </motion.article>
  );
}
