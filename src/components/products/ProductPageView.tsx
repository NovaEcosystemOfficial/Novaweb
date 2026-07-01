"use client";

import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import type { ProductSlug } from "@/lib/ecosystem";
import { productMeta } from "@/lib/ecosystem";
import { getEcosystemCopy, getProductCopy } from "@/lib/ecosystem-i18n";
import { images, releases, getProductRepo, contactLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";
import { PageShell } from "@/components/layout/PageShell";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LaptopMockup } from "@/components/ui/LaptopMockup";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

function ProductScreenshot({ slug, alt }: { slug: ProductSlug; alt: string }) {
  if (slug === "novadocs") {
    return (
      <div className="scale-[0.85] sm:scale-95">
        <LaptopMockup src={images.novadocsEditor} alt={alt} />
      </div>
    );
  }
  if (slug === "novacloud") {
    return (
      <div className="scale-[0.85] sm:scale-95">
        <LaptopMockup src={images.novacloudSettings} alt={alt} />
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <PhoneMockup />
    </div>
  );
}

function resolveCtaHref(slug: ProductSlug): string {
  if (slug === "novadocs") return releases.novadocs.download;
  if (slug === "novamobile") return "/nova-mobile-alpha";
  const repo = getProductRepo(slug);
  if (repo) return repo;
  if (slug === "novapromo") return `mailto:${contactLinks.email}`;
  if (slug === "echo-0" || slug === "ryuk-ai") return "/labs";
  return "/#contact";
}

function ProductPageContent({ slug }: { slug: ProductSlug }) {
  const { lang } = useLanguage();
  const meta = productMeta[slug];
  const copy = getProductCopy(lang, slug);
  const labels = getEcosystemCopy(lang).productPage;
  const Icon = meta.icon;
  const ctaHref = resolveCtaHref(slug);
  const external =
    ctaHref.startsWith("http") || ctaHref.startsWith("mailto:");

  return (
    <div className="container-nova">
      <Reveal>
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-4">
            <span
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.accent} shadow-glow`}
            >
              <Icon className="h-8 w-8 text-white" />
            </span>
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                {copy.name}
              </h1>
              <p className="mt-2 text-lg text-slate-400">{copy.tagline}</p>
            </div>
          </div>
          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            {copy.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <StatusBadge status={meta.statusKey} label={copy.statusLabel} />
            {meta.version && (
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
                {labels.version}: {meta.version}
              </span>
            )}
            {meta.platform && (
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
                {meta.platform}
              </span>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-14" delay={0.05}>
        <div className="nova-card flex items-center justify-center overflow-hidden border-white/10 bg-nova-elevated/50 p-8 sm:p-12">
          <ProductScreenshot slug={slug} alt={copy.screenshotAlt} />
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <section className="nova-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">{labels.features}</h2>
            <ul className="mt-5 space-y-3">
              {copy.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-300 sm:text-base"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-nova-gradient">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.15}>
          <section className="nova-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">{labels.roadmap}</h2>
            <ul className="mt-5 space-y-3">
              {copy.roadmap.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-slate-300 sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>

      <Reveal className="mt-6" delay={0.2}>
        <section className="nova-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">{labels.faq}</h2>
          <div className="mt-5 space-y-5">
            {copy.faq.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-white">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="mt-14" delay={0.25}>
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-nova-gradient-soft p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-nova-purple/20 blur-[100px]" />
          <div className="relative max-w-2xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {copy.ctaTitle}
            </h2>
            <p className="mt-3 text-slate-300">{copy.ctaDescription}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                href={ctaHref}
                size="lg"
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {copy.ctaButton}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button href="/#ecosystem" size="lg" variant="secondary">
                {labels.exploreEcosystem}
              </Button>
            </div>
          </div>
        </section>
      </Reveal>

      <p className="mt-8 text-center text-sm text-slate-500">
        <Link href="/" className="transition-colors hover:text-white">
          {labels.backHome}
        </Link>
      </p>
    </div>
  );
}

export function ProductPageView({ slug }: { slug: ProductSlug }) {
  return (
    <PageShell>
      <ProductPageContent slug={slug} />
    </PageShell>
  );
}
