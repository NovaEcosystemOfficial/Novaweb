"use client";

import Link from "next/link";
import { contactLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";
import { getStudioCopy } from "@/lib/studio-i18n";
import { GlitchLogo } from "./ui/GlitchLogo";
import {
  InstagramIcon,
  TikTokIcon,
  DiscordIcon,
  GitHubIcon,
  FacebookIcon,
} from "./ui/BrandIcons";

const socialIcons = [
  { icon: DiscordIcon, href: contactLinks.discord, label: "Discord" },
  { icon: InstagramIcon, href: contactLinks.instagram, label: "Instagram" },
  { icon: TikTokIcon, href: contactLinks.tiktok, label: "TikTok" },
  { icon: GitHubIcon, href: contactLinks.github, label: "GitHub" },
  { icon: FacebookIcon, href: contactLinks.facebook, label: "Facebook" },
];

function FooterLinkItem({
  label,
  href,
  external,
}: {
  label: string;
  href: string;
  external?: boolean;
}) {
  const className =
    "text-sm text-zinc-400 transition-colors hover:text-white break-words";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function Footer() {
  const { lang } = useLanguage();
  const copy = getStudioCopy(lang).footer;

  return (
    <footer className="relative border-t border-white/10">
      <div className="container-nova py-14">
        <div className="max-w-md">
          <Link href="/" aria-label="GLITCH home">
            <GlitchLogo size="md" />
          </Link>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
            {copy.slogan}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            {copy.description}
          </p>
          <div className="mt-6 flex gap-2">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {copy.columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLinkItem
                      label={link.label}
                      href={link.href}
                      external={link.external}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {copy.brand}. {copy.rights}
          </p>
          <p className="text-sm text-zinc-600">{copy.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
