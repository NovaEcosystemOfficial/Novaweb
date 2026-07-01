"use client";

import { motion } from "framer-motion";
import { Download, FileText, Github, Clock } from "lucide-react";
import { PRODUCT_SLUGS } from "@/lib/ecosystem";
import { productMeta } from "@/lib/ecosystem";
import { getEcosystemCopy, getProductCopy } from "@/lib/ecosystem-i18n";
import { releases, getProductRepo } from "@/lib/data";
import { handleProductDownload } from "@/lib/download";
import { useLanguage } from "@/context/LanguageProvider";
import { PageShell } from "@/components/layout/PageShell";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

function getDownloadInfo(slug: (typeof PRODUCT_SLUGS)[number]) {
  const meta = productMeta[slug];
  if (meta.downloadId === "novadocs") {
    return {
      href: releases.novadocs.download,
      fileName: releases.novadocs.fileName,
      notes: releases.novadocs.notes,
      track: { product: "NovaDocs" as const, version: releases.novadocs.version },
    };
  }
  if (meta.downloadId === "novamobile") {
    return {
      href: releases.novamobile.apk,
      fileName: releases.novamobile.fileName,
      notes: releases.novamobile.issues,
      track: { product: "NovaMobile" as const, version: releases.novamobile.version },
    };
  }
  const repo = getProductRepo(slug);
  if (repo) return { href: repo, notes: repo, repo: true };
  return null;
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
        {PRODUCT_SLUGS.map((slug, i) => {
          const meta = productMeta[slug];
          const product = getProductCopy(lang, slug);
          const dl = getDownloadInfo(slug);
          const Icon = meta.icon;

          return (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="nova-card p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.accent} shadow-glow`}
                  >
                    <Icon className="h-6 w-6 text-white" />
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

                <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                  {dl?.href && !dl.repo ? (
                    <>
                      <Button
                        href={dl.href}
                        download={dl.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="md"
                        onClick={(event) => {
                          if (dl.track) {
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
