"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { contactLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";
import { getStudioCopy } from "@/lib/studio-i18n";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { brandIcons, GitHubIcon, type BrandIconId } from "./ui/BrandIcons";

const socials = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@novaecosystem",
    href: contactLinks.instagram,
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@novaecosystem.app",
    href: contactLinks.tiktok,
  },
  {
    id: "discord",
    label: "Discord",
    handle: "GLITCH Community",
    href: contactLinks.discord,
  },
  {
    id: "github",
    label: "GitHub",
    handle: "NovaEcosystemOfficial",
    href: contactLinks.github,
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "GLITCH",
    href: contactLinks.facebook,
  },
] as const;

export function Contact() {
  const { lang } = useLanguage();
  const copy = getStudioCopy(lang).contact;

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-nova">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-white/10 bg-nova-surface p-8 sm:p-12 lg:p-14"
        >
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={copy.eyebrow}
                title={copy.title}
                description={copy.description}
                align="left"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${contactLinks.email}`} size="md">
                  <Mail className="h-4 w-4" />
                  {contactLinks.email}
                </Button>
                <Button
                  href={contactLinks.github}
                  size="md"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="h-4 w-4" />
                  {copy.githubLabel}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              {socials.map((social) => {
                const Icon = brandIcons[social.id as BrandIconId];
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-5 py-4 transition-colors hover:border-white/20"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors group-hover:text-white">
                        {Icon && <Icon className="h-4.5 w-4.5" />}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {social.label}
                        </p>
                        <p className="text-xs text-zinc-500">{social.handle}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
