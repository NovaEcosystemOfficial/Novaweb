import type { Lang } from "./i18n";

export type StudioCopy = {
  hero: {
    badge: string;
    tagline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: { id: string; title: string; description: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    viewLabs: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { id: string; title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    githubLabel: string;
  };
  nav: {
    links: { label: string; href: string }[];
    projects: string;
  };
  footer: {
    brand: string;
    slogan: string;
    description: string;
    builtWith: string;
    rights: string;
    columns: {
      title: string;
      links: { label: string; href: string; external?: boolean }[];
    }[];
  };
};

const it: StudioCopy = {
  hero: {
    badge: "DIGITAL STUDIO · SOFTWARE · INNOVATION",
    tagline: "Software, applicazioni e soluzioni digitali.",
    description:
      "GLITCH è uno studio digitale che progetta e sviluppa software, applicazioni e strumenti digitali con attenzione al dettaglio, alla solidità tecnica e a un’identità visiva chiara.",
    primaryCta: "Scopri i progetti",
    secondaryCta: "Contatta lo studio",
  },
  about: {
    eyebrow: "Studio",
    title: "Chi è GLITCH",
    description:
      "Uno studio indipendente dedicato a prodotto software, applicazioni e innovazione digitale.",
    paragraphs: [
      "Lavoriamo su applicazioni desktop, esperienze mobile e componenti cloud, mantenendo un linguaggio di prodotto coerente e un’esecuzione controllata.",
      "I progetti pubblicati — tra cui NovaDocs, NovaMobile e le sperimentazioni in Labs — riflettono un approccio concreto: costruire, iterare e rilasciare software utilizzabile.",
    ],
  },
  services: {
    eyebrow: "Competenze",
    title: "Cosa sviluppiamo",
    description:
      "Aree di lavoro già presenti nei prodotti e nei repository dello studio.",
    items: [
      {
        id: "desktop",
        title: "Software desktop",
        description:
          "Applicazioni Windows orientate alla produttività, come NovaDocs, con distribuzione store e installer.",
      },
      {
        id: "mobile",
        title: "Applicazioni mobile",
        description:
          "Client Android e iOS in sviluppo attivo, inclusi NovaMobile, NovaTK e NovaBeauty.",
      },
      {
        id: "cloud",
        title: "Piattaforme cloud",
        description:
          "Componenti cloud e sincronizzazione (NovaCloud) a supporto dei prodotti dello studio.",
      },
      {
        id: "labs",
        title: "Sperimentazione in Labs",
        description:
          "Prototipi e prodotti early-stage — da NovaPromo a Echo-0 e Ryuk AI — per esplorare nuove direzioni.",
      },
    ],
  },
  projects: {
    eyebrow: "Progetti",
    title: "Software realizzato",
    description:
      "Una selezione di prodotti e sperimentazioni sviluppati dallo studio. I nomi prodotto restano quelli ufficiali di ciascun software.",
    viewLabs: "Apri Labs",
  },
  process: {
    eyebrow: "Approccio",
    title: "Come lavoriamo",
    description:
      "Un processo lineare, pensato per portare idee a software rilasciabile senza retorica.",
    steps: [
      {
        id: "define",
        title: "Definire",
        description:
          "Chiarire obiettivo, piattaforma e vincoli tecnici prima di scrivere codice.",
      },
      {
        id: "build",
        title: "Costruire",
        description:
          "Implementare interfacce sobrie e architetture sostenibili, con focus su usabilità reale.",
      },
      {
        id: "release",
        title: "Rilasciare",
        description:
          "Pubblicare versioni utilizzabili — store, installer o alpha — e raccogliere feedback.",
      },
      {
        id: "iterate",
        title: "Iterare",
        description:
          "Migliorare stabilità, documentazione e distribuzione a ogni ciclo di rilascio.",
      },
    ],
  },
  contact: {
    eyebrow: "Contatti",
    title: "Parliamo del prossimo progetto",
    description:
      "Per collaborazioni, richieste commerciali o informazioni sui prodotti dello studio, scrivi direttamente via email.",
    githubLabel: "GitHub",
  },
  nav: {
    links: [
      { label: "Studio", href: "/#about" },
      { label: "Progetti", href: "/#projects" },
      { label: "Labs", href: "/labs" },
      { label: "Download", href: "/downloads" },
      { label: "Contatti", href: "/#contact" },
    ],
    projects: "Progetti",
  },
  footer: {
    brand: "GLITCH",
    slogan: "DIGITAL STUDIO · SOFTWARE · INNOVATION",
    description:
      "Studio digitale che progetta e sviluppa software, applicazioni e soluzioni digitali.",
    builtWith: "Realizzato con Next.js, TypeScript e Tailwind CSS.",
    rights: "Tutti i diritti riservati.",
    columns: [
      {
        title: "Studio",
        links: [
          { label: "Home", href: "/#home" },
          { label: "Chi siamo", href: "/#about" },
          { label: "Progetti", href: "/#projects" },
          { label: "Approccio", href: "/#process" },
          { label: "Contatti", href: "/#contact" },
        ],
      },
      {
        title: "Prodotti",
        links: [
          { label: "NovaDocs", href: "/products/novadocs" },
          { label: "NovaPromo", href: "/products/novapromo" },
          { label: "NovaMobile", href: "/products/novamobile" },
          { label: "NovaCloud", href: "/products/novacloud" },
          { label: "NovaTK", href: "/products/novatk" },
          { label: "NovaBeauty", href: "/products/novabeauty" },
        ],
      },
      {
        title: "Risorse",
        links: [
          { label: "Labs", href: "/labs" },
          { label: "Download", href: "/downloads" },
          { label: "Discord", href: "https://discord.gg/pGegFWK2", external: true },
          { label: "GitHub", href: "https://github.com/NovaEcosystemOfficial", external: true },
        ],
      },
      {
        title: "Legale",
        links: [
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Termini di Servizio", href: "/terms-of-service" },
          { label: "Eliminazione dati", href: "/delete-data" },
        ],
      },
    ],
  },
};

const en: StudioCopy = {
  hero: {
    badge: "DIGITAL STUDIO · SOFTWARE · INNOVATION",
    tagline: "Software, applications and digital solutions.",
    description:
      "GLITCH is a digital studio that designs and builds software, applications and digital tools with attention to detail, technical solidity and a clear visual identity.",
    primaryCta: "Explore projects",
    secondaryCta: "Contact the studio",
  },
  about: {
    eyebrow: "Studio",
    title: "About GLITCH",
    description:
      "An independent studio focused on software products, applications and digital innovation.",
    paragraphs: [
      "We work on desktop applications, mobile experiences and cloud components, keeping a coherent product language and a controlled execution.",
      "Published projects — including NovaDocs, NovaMobile and Labs experiments — reflect a practical approach: build, iterate and ship usable software.",
    ],
  },
  services: {
    eyebrow: "Capabilities",
    title: "What we build",
    description:
      "Work areas already present in the studio’s products and repositories.",
    items: [
      {
        id: "desktop",
        title: "Desktop software",
        description:
          "Windows productivity applications such as NovaDocs, with store and installer distribution.",
      },
      {
        id: "mobile",
        title: "Mobile applications",
        description:
          "Active Android and iOS clients, including NovaMobile, NovaTK and NovaBeauty.",
      },
      {
        id: "cloud",
        title: "Cloud platforms",
        description:
          "Cloud and sync components (NovaCloud) supporting the studio’s products.",
      },
      {
        id: "labs",
        title: "Labs experimentation",
        description:
          "Early-stage prototypes and products — from NovaPromo to Echo-0 and Ryuk AI — exploring new directions.",
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Software we ship",
    description:
      "A selection of products and experiments developed by the studio. Product names remain the official names of each software.",
    viewLabs: "Open Labs",
  },
  process: {
    eyebrow: "Approach",
    title: "How we work",
    description:
      "A linear process designed to move ideas into releasable software without noise.",
    steps: [
      {
        id: "define",
        title: "Define",
        description:
          "Clarify goal, platform and technical constraints before writing code.",
      },
      {
        id: "build",
        title: "Build",
        description:
          "Implement sober interfaces and sustainable architectures focused on real usability.",
      },
      {
        id: "release",
        title: "Release",
        description:
          "Publish usable versions — store, installer or alpha — and collect feedback.",
      },
      {
        id: "iterate",
        title: "Iterate",
        description:
          "Improve stability, documentation and distribution with every release cycle.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk about the next project",
    description:
      "For collaborations, commercial requests or product information, write directly by email.",
    githubLabel: "GitHub",
  },
  nav: {
    links: [
      { label: "Studio", href: "/#about" },
      { label: "Projects", href: "/#projects" },
      { label: "Labs", href: "/labs" },
      { label: "Downloads", href: "/downloads" },
      { label: "Contact", href: "/#contact" },
    ],
    projects: "Projects",
  },
  footer: {
    brand: "GLITCH",
    slogan: "DIGITAL STUDIO · SOFTWARE · INNOVATION",
    description:
      "Digital studio designing and building software, applications and digital solutions.",
    builtWith: "Built with Next.js, TypeScript and Tailwind CSS.",
    rights: "All rights reserved.",
    columns: [
      {
        title: "Studio",
        links: [
          { label: "Home", href: "/#home" },
          { label: "About", href: "/#about" },
          { label: "Projects", href: "/#projects" },
          { label: "Approach", href: "/#process" },
          { label: "Contact", href: "/#contact" },
        ],
      },
      {
        title: "Products",
        links: [
          { label: "NovaDocs", href: "/products/novadocs" },
          { label: "NovaPromo", href: "/products/novapromo" },
          { label: "NovaMobile", href: "/products/novamobile" },
          { label: "NovaCloud", href: "/products/novacloud" },
          { label: "NovaTK", href: "/products/novatk" },
          { label: "NovaBeauty", href: "/products/novabeauty" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Labs", href: "/labs" },
          { label: "Downloads", href: "/downloads" },
          { label: "Discord", href: "https://discord.gg/pGegFWK2", external: true },
          { label: "GitHub", href: "https://github.com/NovaEcosystemOfficial", external: true },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms of Service", href: "/terms-of-service" },
          { label: "Delete data", href: "/delete-data" },
        ],
      },
    ],
  },
};

export function getStudioCopy(lang: Lang): StudioCopy {
  return lang === "it" ? it : en;
}
