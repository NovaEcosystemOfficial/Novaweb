"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Download,
  Github,
  Smartphone,
  Sparkles,
  Tag,
  Zap,
} from "lucide-react";
import { novaMobile, alphaCopy, type AlphaCopy } from "@/lib/alpha";
import { LanguageProvider, useLanguage } from "@/context/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { DiscordIcon } from "@/components/ui/BrandIcons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";

function useCopy(): AlphaCopy {
  const { lang } = useLanguage();
  return alphaCopy[lang];
}

const apkLinkProps = {
  href: novaMobile.apkUrl,
  target: "_blank" as const,
  rel: "noopener noreferrer",
};

const discordLinkProps = {
  href: novaMobile.discordUrl,
  target: "_blank" as const,
  rel: "noopener noreferrer",
};

function Header() {
  const c = useCopy();
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
        <nav className="container-nova flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-nova-gradient shadow-glow">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Nova Ecosystem
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white sm:inline-flex"
            >
              <ArrowLeft className="h-4 w-4" />
              {c.meta.back}
            </Link>
            <LanguageSwitcher />
            <Button {...apkLinkProps} size="sm" variant="primary">
              <Download className="h-4 w-4" />
              {c.meta.downloadApk}
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}

function Hero() {
  const c = useCopy();
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-nova-radial" />
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-nova-purple/20 blur-[120px]"
        aria-hidden
      />

      <div className="container-nova relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-nova-violet/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-nova-violet" />
              </span>
              {c.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
              className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {c.hero.titleLead}{" "}
              <span className="text-gradient">{c.hero.titleAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {c.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.19, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button {...apkLinkProps} size="lg">
                <Download className="h-5 w-5" />
                {c.hero.downloadApk}
              </Button>
              <Button {...discordLinkProps} size="lg" variant="secondary">
                <DiscordIcon className="h-5 w-5" />
                {c.hero.joinDiscord}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease: "easeOut" }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500"
            >
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-nova-purple" />
                {c.hero.versionChip}
              </span>
              <span className="inline-flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-nova-purple" />
                {c.hero.platformChip}
              </span>
              <span className="inline-flex items-center gap-2">
                <Download className="h-4 w-4 text-nova-purple" />
                {c.hero.sizeChip}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-full bg-nova-gradient opacity-20 blur-[90px]"
              aria-hidden
            />
            <div className="relative animate-float">
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-wider text-gradient">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ReleaseInfo() {
  const c = useCopy();
  const info = [
    {
      icon: Tag,
      label: c.release.versionLabel,
      value: c.release.versionValue,
    },
    {
      icon: Smartphone,
      label: c.release.platformLabel,
      value: c.release.platformValue,
    },
    {
      icon: Sparkles,
      label: c.release.statusLabel,
      value: c.release.statusValue,
    },
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-nova">
        <Reveal>
          <SectionHeading
            eyebrow={c.release.eyebrow}
            title={c.release.title}
            description={c.release.description}
          />
        </Reveal>

        {/* Info cards: Version / Platform / Status */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {info.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-nova-gradient shadow-glow">
                  <item.icon className="h-5 w-5 text-white" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-bold text-white">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Download + warning + quick guide */}
        <div className="mx-auto mt-8 max-w-4xl space-y-5">
          <Reveal>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button {...apkLinkProps} size="lg" className="w-full sm:w-auto">
                <Download className="h-5 w-5" />
                {c.hero.downloadApk}
              </Button>
              <Button
                {...discordLinkProps}
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                <DiscordIcon className="h-5 w-5" />
                {c.hero.joinDiscord}
              </Button>
            </div>
          </Reveal>

          {/* Installation notice */}
          <Reveal>
            <div className="flex items-start gap-3 rounded-2xl border border-amber-400/25 bg-amber-400/[0.06] p-5 backdrop-blur-xl">
              <p className="text-sm leading-relaxed text-amber-100/90">
                {c.release.notice}
              </p>
            </div>
          </Reveal>

          {/* Quick install guide (expandable) */}
          <Reveal>
            <details className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-colors hover:border-white/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-nova-gradient shadow-glow">
                    <Download className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-left">
                    <span className="block text-base font-semibold text-white">
                      {c.release.quickGuideTitle}
                    </span>
                    <span className="block text-xs text-slate-500">
                      {c.release.quickGuideHint}
                    </span>
                  </span>
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <ol className="space-y-3 px-6 pb-6">
                {c.release.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-nova-gradient text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-slate-300">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </details>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CurrentFeatures() {
  const c = useCopy();
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-nova">
        <Reveal>
          <SectionHeading
            eyebrow={c.features.eyebrow}
            title={c.features.title}
            description={c.features.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <Zap className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {c.features.workingTitle}
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {c.features.working.map((label) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-slate-300">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-nova-purple/15 text-nova-purple">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {c.features.comingTitle}
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {c.features.coming.map((label) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-nova-purple/15 text-nova-purple">
                      <Clock className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-slate-400">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Feedback() {
  const c = useCopy();
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-nova">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl sm:p-14">
            <div
              className="pointer-events-none absolute inset-0 bg-nova-radial opacity-70"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-48 w-[28rem] -translate-x-1/2 rounded-full bg-nova-gradient opacity-20 blur-[100px]"
              aria-hidden
            />
            <div className="relative">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-nova-gradient shadow-glow">
                <DiscordIcon className="h-7 w-7 text-white" />
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {c.feedback.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
                {c.feedback.text}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button {...discordLinkProps} size="lg">
                  <DiscordIcon className="h-5 w-5" />
                  {c.feedback.discord}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  href={novaMobile.issuesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="secondary"
                >
                  <Github className="h-5 w-5" />
                  {c.feedback.githubIssues}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Changelog() {
  const c = useCopy();
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-nova">
        <Reveal>
          <SectionHeading
            eyebrow={c.changelog.eyebrow}
            title={c.changelog.title}
            description={c.changelog.description}
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl space-y-6">
          {c.changelog.releases.map((release, i) => (
            <Reveal key={release.version} delay={i * 0.06}>
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-white">
                    {release.label}
                  </h3>
                  {release.current ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {c.changelog.latest}
                    </span>
                  ) : null}
                  <span className="ml-auto text-sm text-slate-500">
                    {release.date}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {release.changes.map((change) => (
                    <li key={change} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-nova-gradient" />
                      <span className="text-sm leading-relaxed text-slate-300">
                        {change}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const c = useCopy();
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-nova flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-nova-gradient shadow-glow">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="text-base font-bold tracking-tight text-white">
            Nova Ecosystem
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="/" className="transition-colors hover:text-white">
            {c.footer.home}
          </Link>
          <a
            {...discordLinkProps}
            className="transition-colors hover:text-white"
          >
            {c.footer.discord}
          </a>
          <a {...apkLinkProps} className="transition-colors hover:text-white">
            {c.footer.download}
          </a>
        </div>
      </div>
    </footer>
  );
}

function AlphaContent() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-nova-bg">
      <Header />
      <Hero />
      <ReleaseInfo />
      <CurrentFeatures />
      <Feedback />
      <Changelog />
      <Footer />
    </main>
  );
}

export function NovaMobileAlphaPage() {
  return (
    <LanguageProvider>
      <AlphaContent />
    </LanguageProvider>
  );
}
