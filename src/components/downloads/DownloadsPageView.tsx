"use client";

import { motion } from "framer-motion";
import { Download, FileText, Github, Clock, BadgeCheck } from "lucide-react";
import { PUBLIC_CATALOG_SLUGS, productMeta, type ProductSlug } from "@/lib/ecosystem";
import { getProductColors } from "@/lib/product-colors";
import { getEcosystemCopy, getProductCopy } from "@/lib/ecosystem-i18n";
import { releases, getProductRepo } from "@/lib/data";
import { handleProductDownload } from "@/lib/download";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageProvider";
import { PageShell } from "@/components/layout/PageShell";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

function getDownloadInfo(slug: ProductSlug) {
  const meta = productMeta[slug];
  if (meta.downloadId === "novadocs") {
    return {
      href: releases.novadocs.microsoftStore,
      notes: releases.novadocs.notes,
      store: true as const,
    };
  }
  if (meta.downloadId === "novamobile") {
    return {
      href: releases.novamobile.apk,
      fileName: releases.novamobile.fileName,
      notes: releases.novamobile.issues,
      track: {
        product: "NovaMobile" as const,
        version: releases.novamobile.version,
      },
    };
  }
  const repo = getProductRepo(slug);
  if (repo) return { href: repo, notes: repo, repo: true };
  return null;
}

function NovaDocsDownloadActions({
  copy,
}: {
  copy: ReturnType<typeof getEcosystemCopy>["downloads"];
}) {
  return (
    <div className="flex w-full flex-col gap-4 lg:max-w-sm lg:shrink-0">
      <Button
        href={releases.novadocs.microsoftStore}
        target="_blank"
        rel="noopener noreferrer"
        size="md"
        className="w-full"
      >
        <BadgeCheck className="h-4 w-4" />
        {copy.storeButton}
      </Button>
      <p className="text-center text-xs leading-relaxed text-slate-500">
        {copy.storeNote}
      </p>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          {copy.alternativesHeading}
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <Button
            href={releases.novadocs.microsoftStore}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="secondary"
            className="w-full justify-between"
          >
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-3.5 w-3.5 text-nova-orange" />
              {copy.storeRecommended}
            </span>
          </Button>
          <Button
            href={releases.novadocs.download}
            download={releases.novadocs.fileName}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="ghost"
            className="w-full justify-between border border-white/10"
            onClick={(event) =>
              void handleProductDownload(event, {
                product: "NovaDocs",
                version: releases.novadocs.version,
                url: releases.novadocs.download,
                fileName: releases.novadocs.fileName,
              })
            }
          >
            <span className="inline-flex items-center gap-2">
              <Download className="h-3.5 w-3.5" />
              {copy.exeInstaller}
            </span>
          </Button>
        </div>
      </div>

      <Button
        href={releases.novadocs.notes}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
        variant="secondary"
        className="w-full"
      >
        <FileText className="h-4 w-4" />
        {copy.releaseNotes}
      </Button>
    </div>
  );
}

function DownloadsContent() {
  const { lang } = useLanguage();
  const copy = getEcosystemCopy(lang).downloads;

  return (
    <div className="container-nova">
      <Reveal>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {copy.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            {copy.description}
          </p>
        </div>
      </Reveal>

      <div className="mt-14 space-y-5">
        {PUBLIC_CATALOG_SLUGS.map((slug, i) => {
          const meta = productMeta[slug];
          const product = getProductCopy(lang, slug);
          const colors = getProductColors(slug);
          const dl = getDownloadInfo(slug);
          const Icon = meta.icon;
          const isNovaDocs = slug === "novadocs";

          return (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={cn(
                "nova-card p-6 sm:p-8",
                colors.border,
                isNovaDocs && "border-blue-400/30"
              )}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border",
                      colors.iconBg,
                      colors.iconBorder,
                      colors.iconFg
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-bold text-white">
                        {product.name}
                      </h2>
                      <StatusBadge
                        status={meta.statusKey}
                        label={product.statusLabel}
                      />
                      {isNovaDocs && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                          <BadgeCheck className="h-3.5 w-3.5" />
                          Microsoft Store
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-400">
                      {product.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                      {meta.version && (
                        <span>
                          {copy.version}: {meta.version}
                        </span>
                      )}
                      {meta.platform && (
                        <span>
                          {copy.platform}: {meta.platform}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {isNovaDocs ? (
                  <NovaDocsDownloadActions copy={copy} />
                ) : (
                  <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                    {dl?.href && !dl.repo ? (
                      <>
                        <Button
                          href={dl.href}
                          download={"fileName" in dl ? dl.fileName : undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="md"
                          onClick={(event) => {
                            if ("track" in dl && dl.track && "fileName" in dl) {
                              void handleProductDownload(event, {
                                ...dl.track,
                                url: dl.href,
                                fileName: dl.fileName!,
                              });
                            }
                          }}
                        >
                          <Download className="h-4 w-4" />
                          {copy.download}
                        </Button>
                        {dl.notes && (
                          <Button
                            href={dl.notes}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="md"
                            variant="secondary"
                          >
                            <FileText className="h-4 w-4" />
                            {copy.releaseNotes}
                          </Button>
                        )}
                      </>
                    ) : dl?.repo ? (
                      <Button
                        href={dl.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="md"
                        variant="secondary"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        size="md"
                        className="cursor-not-allowed opacity-70"
                        disabled
                      >
                        <Clock className="h-4 w-4" />
                        {copy.comingSoon}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function DownloadsPageView() {
  return (
    <PageShell>
      <DownloadsContent />
    </PageShell>
  );
}
