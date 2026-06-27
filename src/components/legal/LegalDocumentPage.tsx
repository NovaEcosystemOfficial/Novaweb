"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Mail, Sparkles } from "lucide-react";
import {
  getLegalDocument,
  type LegalDocumentId,
} from "@/lib/legal";
import { LanguageProvider, useLanguage } from "@/context/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function LegalHeader() {
  const { lang } = useLanguage();
  const backHome = getLegalDocument(lang, "privacy").backHome;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-nova-bg/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container-nova flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-nova-gradient shadow-glow">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              NOVA
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-white/20 hover:text-white sm:inline-flex"
            >
              <ArrowLeft className="h-4 w-4" />
              {backHome}
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function LegalContent({ document }: { document: LegalDocumentId }) {
  const { lang } = useLanguage();
  const copy = getLegalDocument(lang, document);

  return (
    <main className="relative min-h-screen overflow-hidden bg-nova-bg">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-nova-radial" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-nova-indigo/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-nova-purple/15 blur-[120px]" />
      </div>

      <LegalHeader />

      <div className="container-nova pb-24 pt-32 sm:pt-40">
        <Reveal>
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white sm:hidden"
          >
            <ArrowLeft className="h-4 w-4" />
            {copy.backHome}
          </Link>

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              {copy.eyebrow}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-3 text-sm text-slate-500">{copy.updated}</p>
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              {copy.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-6">
          {copy.sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.05}>
              <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-slate-400 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed text-slate-300 sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-gradient" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-nova-gradient shadow-glow">
                  <Mail className="h-5 w-5 text-white" />
                </span>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {copy.contactLabel}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {copy.contactHelp}
                  </p>
                  <a
                    href={`mailto:${copy.contactEmail}`}
                    className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-gradient transition-opacity hover:opacity-80"
                  >
                    {copy.contactEmail}
                  </a>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {copy.relatedLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {copy.relatedTitle}
                </p>
              </div>
              <Link
                href={copy.relatedHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/[0.08]"
              >
                {copy.relatedTitle}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export function LegalDocumentPage({ document }: { document: LegalDocumentId }) {
  return (
    <LanguageProvider>
      <LegalContent document={document} />
    </LanguageProvider>
  );
}
