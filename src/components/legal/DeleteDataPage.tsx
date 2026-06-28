"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { DELETE_DATA_EMAIL, getDeleteDataCopy } from "@/lib/deleteData";
import { LanguageProvider, useLanguage } from "@/context/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function DeleteDataHeader({ backHome }: { backHome: string }) {
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

function DeleteDataContent() {
  const { lang } = useLanguage();
  const copy = getDeleteDataCopy(lang);

  return (
    <main className="relative min-h-screen overflow-hidden bg-nova-bg">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-nova-radial" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-nova-indigo/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-nova-purple/15 blur-[120px]" />
      </div>

      <DeleteDataHeader backHome={copy.backHome} />

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
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              {copy.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-6">
          <Reveal delay={0.05}>
            <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-nova-gradient shadow-glow">
                  <Mail className="h-5 w-5 text-white" />
                </span>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {copy.emailLabel}
                  </h2>
                  <a
                    href={`mailto:${DELETE_DATA_EMAIL}`}
                    className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-gradient transition-opacity hover:opacity-80 sm:text-lg"
                  >
                    {DELETE_DATA_EMAIL}
                  </a>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
              <h2 className="text-xl font-bold text-white">
                {copy.includeLabel}
              </h2>
              <ul className="mt-5 space-y-3">
                {copy.requirements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate-300 sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-gradient" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 sm:text-base">
                {copy.processingNote}
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="text-lg font-semibold text-white">
                {copy.privacyLink}
              </p>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/[0.08]"
              >
                {copy.privacyLink}
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

export function DeleteDataPage() {
  return (
    <LanguageProvider>
      <DeleteDataContent />
    </LanguageProvider>
  );
}
