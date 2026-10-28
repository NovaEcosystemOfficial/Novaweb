"use client";

import { ArrowRight } from "lucide-react";
import { PRODUCT_SLUGS } from "@/lib/ecosystem";
import { useLanguage } from "@/context/LanguageProvider";
import { getStudioCopy } from "@/lib/studio-i18n";
import { SectionHeading } from "./ui/SectionHeading";
import { ProductCard } from "./ui/ProductCard";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

export function NovaEcosystem() {
  const { lang } = useLanguage();
  const copy = getStudioCopy(lang).projects;

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-nova relative">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PRODUCT_SLUGS.map((slug, i) => (
            <ProductCard key={slug} slug={slug} index={i} />
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center" delay={0.15}>
          <Button href="/labs" variant="secondary" size="lg">
            {copy.viewLabs}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
