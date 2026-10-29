import type { ProductSlug } from "./ecosystem";

/**
 * Signature product accents for the public GTC catalog.
 * Used for icons, thin borders, indicators and light hover halos —
 * not full-card fills or loud gradients.
 */
export type ProductColorToken = {
  /** Primary brand hex */
  hex: string;
  /** Optional secondary hue (experimental dual-tone) */
  hexAlt?: string;
  iconBg: string;
  iconFg: string;
  iconBorder: string;
  border: string;
  borderHover: string;
  /** Soft colored halo on hover / elevated state */
  halo: string;
  focusRing: string;
  soft: string;
  /** Quiet icon fill for surfaces that still accept a gradient class */
  accentGradient: string;
};

export const productColors: Record<ProductSlug, ProductColorToken> = {
  novadocs: {
    hex: "#3B82F6",
    iconBg: "bg-blue-500/15",
    iconFg: "text-blue-300",
    iconBorder: "border-blue-400/30",
    border: "border-blue-500/20",
    borderHover: "hover:border-blue-400/45",
    halo: "hover:shadow-[0_0_0_1px_rgba(59,130,246,0.18),0_16px_40px_-24px_rgba(59,130,246,0.45)]",
    focusRing: "focus-within:ring-blue-400/40",
    soft: "bg-blue-500/20",
    accentGradient: "from-blue-600 to-blue-500",
  },
  novamobile: {
    hex: "#14B8A6",
    iconBg: "bg-teal-500/15",
    iconFg: "text-teal-300",
    iconBorder: "border-teal-400/30",
    border: "border-teal-500/20",
    borderHover: "hover:border-teal-400/45",
    halo: "hover:shadow-[0_0_0_1px_rgba(20,184,166,0.18),0_16px_40px_-24px_rgba(20,184,166,0.45)]",
    focusRing: "focus-within:ring-teal-400/40",
    soft: "bg-teal-500/20",
    accentGradient: "from-teal-600 to-teal-500",
  },
  novasmile: {
    hex: "#22C55E",
    iconBg: "bg-green-500/15",
    iconFg: "text-green-300",
    iconBorder: "border-green-400/30",
    border: "border-green-500/20",
    borderHover: "hover:border-green-400/45",
    halo: "hover:shadow-[0_0_0_1px_rgba(34,197,94,0.18),0_16px_40px_-24px_rgba(34,197,94,0.4)]",
    focusRing: "focus-within:ring-green-400/40",
    soft: "bg-green-500/20",
    accentGradient: "from-green-600 to-green-500",
  },
  novapromo: {
    hex: "#F97316",
    iconBg: "bg-orange-500/15",
    iconFg: "text-orange-300",
    iconBorder: "border-orange-400/30",
    border: "border-orange-500/20",
    borderHover: "hover:border-orange-400/45",
    halo: "hover:shadow-[0_0_0_1px_rgba(249,115,22,0.18),0_16px_40px_-24px_rgba(249,115,22,0.4)]",
    focusRing: "focus-within:ring-orange-400/40",
    soft: "bg-orange-500/20",
    accentGradient: "from-orange-600 to-orange-500",
  },
  novabeauty: {
    hex: "#8B5CF6",
    iconBg: "bg-violet-500/15",
    iconFg: "text-violet-300",
    iconBorder: "border-violet-400/30",
    border: "border-violet-500/20",
    borderHover: "hover:border-violet-400/45",
    halo: "hover:shadow-[0_0_0_1px_rgba(139,92,246,0.18),0_16px_40px_-24px_rgba(139,92,246,0.45)]",
    focusRing: "focus-within:ring-violet-400/40",
    soft: "bg-violet-500/20",
    accentGradient: "from-violet-600 to-violet-500",
  },
  novacloud: {
    hex: "#7DD3FC",
    iconBg: "bg-sky-400/15",
    iconFg: "text-sky-300",
    iconBorder: "border-sky-300/30",
    border: "border-sky-400/20",
    borderHover: "hover:border-sky-300/45",
    halo: "hover:shadow-[0_0_0_1px_rgba(125,211,252,0.2),0_16px_40px_-24px_rgba(125,211,252,0.4)]",
    focusRing: "focus-within:ring-sky-300/40",
    soft: "bg-sky-400/20",
    accentGradient: "from-sky-500 to-sky-400",
  },
  "echo-0": {
    hex: "#22D3EE",
    hexAlt: "#8B5CF6",
    iconBg: "bg-cyan-500/12",
    iconFg: "text-cyan-300",
    iconBorder: "border-violet-400/25",
    border: "border-cyan-500/15",
    borderHover: "hover:border-violet-400/40",
    halo: "hover:shadow-[0_0_0_1px_rgba(34,211,238,0.14),0_16px_40px_-24px_rgba(139,92,246,0.4)]",
    focusRing: "focus-within:ring-cyan-400/35",
    soft: "bg-cyan-500/15",
    accentGradient: "from-cyan-500 to-violet-500",
  },
  "ryuk-ai": {
    hex: "#A78BFA",
    iconBg: "bg-fuchsia-500/12",
    iconFg: "text-fuchsia-300",
    iconBorder: "border-fuchsia-400/25",
    border: "border-fuchsia-500/15",
    borderHover: "hover:border-fuchsia-400/40",
    halo: "hover:shadow-[0_0_0_1px_rgba(167,139,250,0.16),0_16px_40px_-24px_rgba(217,70,239,0.35)]",
    focusRing: "focus-within:ring-fuchsia-400/35",
    soft: "bg-fuchsia-500/15",
    accentGradient: "from-violet-600 to-fuchsia-500",
  },
  /** Kept for product pages; not shown in the public catalog. */
  novatk: {
    hex: "#FB7185",
    iconBg: "bg-rose-500/15",
    iconFg: "text-rose-300",
    iconBorder: "border-rose-400/30",
    border: "border-rose-500/20",
    borderHover: "hover:border-rose-400/45",
    halo: "hover:shadow-[0_0_0_1px_rgba(251,113,133,0.18),0_16px_40px_-24px_rgba(251,113,133,0.4)]",
    focusRing: "focus-within:ring-rose-400/40",
    soft: "bg-rose-500/20",
    accentGradient: "from-rose-600 to-orange-500",
  },
};

export function getProductColors(slug: ProductSlug): ProductColorToken {
  return productColors[slug];
}
