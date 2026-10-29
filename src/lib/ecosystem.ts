import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Megaphone,
  Radio,
  Bot,
  Cloud,
  Smartphone,
  Dumbbell,
  Flower2,
  Smile,
} from "lucide-react";
import type { StatusKey } from "./data";
import { productColors } from "./product-colors";

export type ProductSlug =
  | "novadocs"
  | "novapromo"
  | "echo-0"
  | "ryuk-ai"
  | "novacloud"
  | "novamobile"
  | "novasmile"
  | "novatk"
  | "novabeauty";

export type ProductMeta = {
  id: ProductSlug;
  slug: ProductSlug;
  icon: LucideIcon;
  accent: string;
  glowColor: string;
  statusKey: StatusKey;
  version?: string;
  platform?: string;
  inLabs?: boolean;
  downloadId?: keyof typeof import("./data").releases;
  href: string;
  external?: boolean;
};

/** All known product slugs (includes non-public entries for routes/meta). */
export const PRODUCT_SLUGS: ProductSlug[] = [
  "novadocs",
  "novamobile",
  "novasmile",
  "novapromo",
  "novabeauty",
  "novatk",
  "novacloud",
  "echo-0",
  "ryuk-ai",
];

/**
 * Products shown in the public catalog and user-facing product lists.
 * GTC TK remains in productMeta / routes but is not listed publicly.
 */
export const PUBLIC_CATALOG_SLUGS: ProductSlug[] = [
  "novadocs",
  "novamobile",
  "novasmile",
  "novapromo",
  "novabeauty",
  "novacloud",
  "echo-0",
  "ryuk-ai",
];

const HIDDEN_FROM_PUBLIC = new Set<ProductSlug>(["novatk"]);

export const productMeta: Record<ProductSlug, ProductMeta> = {
  novadocs: {
    id: "novadocs",
    slug: "novadocs",
    icon: FileText,
    accent: productColors.novadocs.accentGradient,
    glowColor: productColors.novadocs.soft,
    statusKey: "available",
    version: "v1.0.8",
    platform: "Windows",
    downloadId: "novadocs",
    href: "/products/novadocs",
  },
  novapromo: {
    id: "novapromo",
    slug: "novapromo",
    icon: Megaphone,
    accent: productColors.novapromo.accentGradient,
    glowColor: productColors.novapromo.soft,
    statusKey: "beta",
    version: "Beta",
    platform: "iOS · Android",
    inLabs: true,
    href: "/products/novapromo",
  },
  "echo-0": {
    id: "echo-0",
    slug: "echo-0",
    icon: Radio,
    accent: productColors["echo-0"].accentGradient,
    glowColor: productColors["echo-0"].soft,
    statusKey: "alpha",
    version: "Alpha",
    platform: "Cross-platform",
    inLabs: true,
    href: "/products/echo-0",
  },
  "ryuk-ai": {
    id: "ryuk-ai",
    slug: "ryuk-ai",
    icon: Bot,
    accent: productColors["ryuk-ai"].accentGradient,
    glowColor: productColors["ryuk-ai"].soft,
    statusKey: "experimental",
    version: "Experimental",
    platform: "Cloud · API",
    inLabs: true,
    href: "/products/ryuk-ai",
  },
  novacloud: {
    id: "novacloud",
    slug: "novacloud",
    icon: Cloud,
    accent: productColors.novacloud.accentGradient,
    glowColor: productColors.novacloud.soft,
    statusKey: "developing",
    version: "Development",
    platform: "Cloud",
    href: "/products/novacloud",
  },
  novamobile: {
    id: "novamobile",
    slug: "novamobile",
    icon: Smartphone,
    accent: productColors.novamobile.accentGradient,
    glowColor: productColors.novamobile.soft,
    statusKey: "beta",
    version: "v0.1 Alpha",
    platform: "Android",
    inLabs: true,
    downloadId: "novamobile",
    href: "/products/novamobile",
  },
  novasmile: {
    id: "novasmile",
    slug: "novasmile",
    icon: Smile,
    accent: productColors.novasmile.accentGradient,
    glowColor: productColors.novasmile.soft,
    statusKey: "developing",
    version: "Development",
    platform: "Web · Mobile",
    inLabs: true,
    href: "/products/novasmile",
  },
  novatk: {
    id: "novatk",
    slug: "novatk",
    icon: Dumbbell,
    accent: productColors.novatk.accentGradient,
    glowColor: productColors.novatk.soft,
    statusKey: "alpha",
    version: "Alpha",
    platform: "iOS",
    inLabs: true,
    href: "/products/novatk",
  },
  novabeauty: {
    id: "novabeauty",
    slug: "novabeauty",
    icon: Flower2,
    accent: productColors.novabeauty.accentGradient,
    glowColor: productColors.novabeauty.soft,
    statusKey: "alpha",
    version: "Alpha",
    platform: "iOS",
    inLabs: true,
    href: "/products/novabeauty",
  },
};

export function isProductSlug(slug: string): slug is ProductSlug {
  return PRODUCT_SLUGS.includes(slug as ProductSlug);
}

export function isPublicCatalogSlug(slug: ProductSlug): boolean {
  return !HIDDEN_FROM_PUBLIC.has(slug);
}

export function getPublicCatalogProducts(): ProductMeta[] {
  return PUBLIC_CATALOG_SLUGS.map((s) => productMeta[s]);
}

export function getLabProducts(): ProductMeta[] {
  return PUBLIC_CATALOG_SLUGS.map((s) => productMeta[s]).filter((p) => p.inLabs);
}
