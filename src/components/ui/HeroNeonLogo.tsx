import Image from "next/image";
import { BRAND, BRAND_NEON_LOGO } from "@/lib/data";

/** Approved neon GLITCH wordmark — hero only. Do not recreate as CSS/SVG text. */
export function HeroNeonLogo() {
  return (
    <div
      className="glitch-neon-sign relative mx-auto w-full max-w-[min(100%,36rem)] sm:max-w-xl md:max-w-2xl"
      aria-label={BRAND}
    >
      <Image
        src={BRAND_NEON_LOGO}
        alt={BRAND}
        width={944}
        height={210}
        priority
        sizes="(max-width: 640px) 92vw, (max-width: 768px) 36rem, 42rem"
        className="glitch-neon-sign__img h-auto w-full select-none"
      />
    </div>
  );
}
