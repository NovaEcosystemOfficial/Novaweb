"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { getStudioCopy } from "@/lib/studio-i18n";
import { Button } from "./ui/Button";
import { GlitchLogo } from "./ui/GlitchLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { lang } = useLanguage();
  const copy = getStudioCopy(lang);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "transition-colors duration-300",
          scrolled
            ? "border-b border-white/10 bg-nova-bg/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="container-nova flex h-16 items-center justify-between sm:h-18">
          <Link href="/" className="group" aria-label="GLITCH home">
            <GlitchLogo size="sm" />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {copy.nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <Button href="#projects" size="sm" variant="secondary">
              {copy.nav.projects}
            </Button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-white/10 bg-nova-bg md:hidden"
          >
            <ul className="container-nova flex flex-col gap-1 py-4">
              {copy.nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-4 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-white/[0.04] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-1 pt-3">
                <LanguageSwitcher className="w-full justify-center" />
              </li>
              <li className="px-1 pt-2">
                <Button
                  href="#projects"
                  className="w-full"
                  variant="secondary"
                  onClick={() => setOpen(false)}
                >
                  {copy.nav.projects}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
