import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND, BRAND_LOGO } from "@/lib/data";

type GlitchLogoProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg" | "hero";
  showWordmark?: boolean;
};

const sizes = {
  sm: { box: "h-9 w-9", img: 36 },
  md: { box: "h-11 w-11", img: 44 },
  lg: { box: "h-16 w-16", img: 64 },
  hero: { box: "h-28 w-28 sm:h-36 sm:w-36", img: 144 },
} as const;

export function GlitchLogo({
  className,
  priority = false,
  size = "sm",
  showWordmark = false,
}: GlitchLogoProps) {
  const s = sizes[size];

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative overflow-hidden rounded-lg border border-white/10 bg-black",
          s.box,
        )}
      >
        <Image
          src={BRAND_LOGO}
          alt={BRAND}
          width={s.img}
          height={s.img}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </span>
      {showWordmark ? (
        <span className="text-lg font-semibold tracking-[0.18em] text-white">
          {BRAND}
        </span>
      ) : null}
    </span>
  );
}
