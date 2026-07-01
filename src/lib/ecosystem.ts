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
} from "lucide-react";
import type { StatusKey } from "./data";

export type ProductSlug =
  | "novadocs"
  | "novapromo"
  | "echo-0"
  | "ryuk-ai"
  | "novacloud"
  | "novamobile"
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

export const PRODUCT_SLUGS: ProductSlug[] = [
  "novadocs",
  "novapromo",
  "echo-0",
  "ryuk-ai",
  "novacloud",
  "novamobile",
  "novatk",
  "novabeauty",
];

export const productMeta: Record<ProductSlug, ProductMeta> = {
  novadocs: {
    id: "novadocs",
    slug: "novadocs",
    icon: FileText,
    accent: "from-violet-600 to-purple-500",
    glowColor: "bg-nova-purple/25",
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
    accent: "from-orange-500 to-amber-400",
    glowColor: "bg-nova-orange/20",
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
    accent: "from-indigo-500 to-violet-500",
    glowColor: "bg-indigo-500/20",
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
    accent: "from-purple-600 to-pink-500",
    glowColor: "bg-nova-pink/20",
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
    accent: "from-blue-500 to-indigo-500",
    glowColor: "bg-indigo-500/20",
    statusKey: "developing",
    version: "Development",
    platform: "Cloud",
    href: "/products/novacloud",
  },
  novamobile: {
    id: "novamobile",
    slug: "novamobile",
    icon: Smartphone,
    accent: "from-violet-500 to-purple-600",
    glowColor: "bg-nova-violet/20",
    statusKey: "beta",
    version: "v0.1 Alpha",
    platform: "Android",
    inLabs: true,
    downloadId: "novamobile",
    href: "/products/novamobile",
  },
  novatk: {
    id: "novatk",
    slug: "novatk",
    icon: Dumbbell,
    accent: "from-rose-500 to-orange-500",
    glowColor: "bg-nova-orange/15",
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
    accent: "from-pink-500 to-fuchsia-500",
    glowColor: "bg-nova-pink/20",
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

export function getLabProducts(): ProductMeta[] {
  return PRODUCT_SLUGS.map((s) => productMeta[s]).filter((p) => p.inLabs);
}
