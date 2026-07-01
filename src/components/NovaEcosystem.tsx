"use client";

import { ArrowRight } from "lucide-react";
import { PRODUCT_SLUGS } from "@/lib/ecosystem";
import { getEcosystemCopy } from "@/lib/ecosystem-i18n";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { ProductCard } from "./ui/ProductCard";
import { Button } from "./ui/Button";
import { AnimatedBackground } from "./ui/AnimatedBackground";
import { Reveal } from "./ui/Reveal";

export function NovaEcosystem() {
  const { lang } = useLanguage();
  const copy = getEcosystemCopy(lang).section;

  return (
    <section id="ecosystem" className="relative scroll-mt-24 py-24 sm:py-32">
      <AnimatedBackground />

      <div className="container-nova relative">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PRODUCT_SLUGS.map((slug, i) => (
            <ProductCard key={slug} slug={slug} index={i} />
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center" delay={0.2}>
          <Button href="/labs" variant="secondary" size="lg">
            {copy.viewAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
