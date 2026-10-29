import type { Lang } from "./i18n";
import type { ProductSlug } from "./ecosystem";

export type ProductCopy = {
  name: string;
  tagline: string;
  description: string;
  statusLabel: string;
  buttonLabel: string;
  features: string[];
  roadmap: string[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  screenshotAlt: string;
};

export type EcosystemSectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
  viewAll: string;
};

export type LabsPageCopy = {
  eyebrow: string;
  title: string;
  description: string;
  backHome: string;
  filterAll: string;
  comingSoonTitle: string;
  comingSoonDescription: string;
};

export type DownloadsPageCopy = {
  eyebrow: string;
  title: string;
  description: string;
  backHome: string;
  version: string;
  platform: string;
  status: string;
  download: string;
  releaseNotes: string;
  comingSoon: string;
  storeButton: string;
  storeNote: string;
  alternativesHeading: string;
  storeRecommended: string;
  exeInstaller: string;
};

export type ProductPageLabels = {
  features: string;
  roadmap: string;
  version: string;
  status: string;
  faq: string;
  backHome: string;
  exploreEcosystem: string;
};

type EcosystemI18n = {
  section: EcosystemSectionCopy;
  labs: LabsPageCopy;
  downloads: DownloadsPageCopy;
  productPage: ProductPageLabels;
  products: Record<ProductSlug, ProductCopy>;
};

const it: EcosystemI18n = {
  section: {
    eyebrow: "Catalogo GTC",
    title: "Prodotti GTC",
    description:
      "La famiglia GTC riunisce software per produttività, mobile, cloud e benessere digitale — progettati da GLITCH con un’identità coerente.",
    viewAll: "Esplora Labs",
  },
  labs: {
    eyebrow: "GTC Labs",
    title: "Esperimenti in corso",
    description:
      "GTC Labs è il laboratorio dove testiamo idee, prototipi e prodotti del futuro. Alpha, Beta, Experimental e Coming Soon convivono in un unico spazio.",
    backHome: "Torna alla home",
    filterAll: "Tutti",
    comingSoonTitle: "Prossimi esperimenti",
    comingSoonDescription:
      "Nuovi progetti sono già in fase di ideazione. Segui la community per scoprirli per primi.",
  },
  downloads: {
    eyebrow: "Download Center",
    title: "Download",
    description:
      "Un unico punto di accesso per tutte le build disponibili dei prodotti dello studio. Versioni, piattaforme e note di rilascio sempre aggiornate.",
    backHome: "Torna alla home",
    version: "Versione",
    platform: "Piattaforma",
    status: "Stato",
    download: "Download",
    releaseNotes: "Release Notes",
    comingSoon: "Prossimamente",
    storeButton: "Scarica dal Microsoft Store",
    storeNote:
      "Versione consigliata • Aggiornamenti automatici • Installazione sicura",
    alternativesHeading: "Download alternativi",
    storeRecommended: "Microsoft Store (Consigliato)",
    exeInstaller: "Installer EXE",
  },
  productPage: {
    features: "Funzionalità",
    roadmap: "Roadmap prodotto",
    version: "Versione",
    status: "Stato",
    faq: "Domande frequenti",
    backHome: "Torna alla home",
    exploreEcosystem: "Esplora i progetti",
  },
  products: {
    novadocs: {
      name: "GTC Docs",
      tagline: "Editor documenti desktop moderno.",
      description:
        "Editor di documenti veloce e potente con assistente IA locale, GTC Cloud e strumenti pensati per la produttività professionale.",
      statusLabel: "Stable",
      buttonLabel: "Scopri GTC Docs",
      features: [
        "Editor moderno con tema scuro",
        "Assistente IA locale integrato",
        "GTC Cloud e GTC Drop",
        "AI Resume Builder",
        "Aggiornamenti automatici",
      ],
      roadmap: [
        "Miglioramenti GTC Cloud",
        "Nuove integrazioni mobile",
        "Template avanzati",
      ],
      faq: [
        {
          q: "Su quali piattaforme è disponibile?",
          a: "GTC Docs è attualmente disponibile per Windows desktop.",
        },
        {
          q: "I miei documenti sono al sicuro?",
          a: "I file restano di tua proprietà e puoi lavorare anche offline.",
        },
      ],
      ctaTitle: "Inizia con GTC Docs",
      ctaDescription:
        "Installa GTC Docs dal Microsoft Store: aggiornamenti automatici e installazione sicura.",
      ctaButton: "Scarica dal Microsoft Store",
      screenshotAlt: "Schermata GTC Docs",
    },
    novapromo: {
      name: "GTC Promo",
      tagline: "Promozioni e social commerce.",
      description:
        "Piattaforma per gestire promozioni, contenuti social e campagne digitali per brand e creator.",
      statusLabel: "Beta",
      buttonLabel: "Scopri GTC Promo",
      features: [
        "Gestione promozioni",
        "Integrazione social",
        "Dashboard campagne",
        "Analytics base",
      ],
      roadmap: [
        "Integrazione Meta",
        "Automazioni avanzate",
        "Reportistica estesa",
      ],
      faq: [
        {
          q: "GTC Promo è già disponibile?",
          a: "La versione Beta è in fase di test con utenti selezionati.",
        },
      ],
      ctaTitle: "Unisciti alla Beta",
      ctaDescription: "Contattaci per accedere alla beta di GTC Promo.",
      ctaButton: "Contattaci",
      screenshotAlt: "Anteprima GTC Promo",
    },
    "echo-0": {
      name: "Echo-0",
      tagline: "Esperimento audio e interazione.",
      description:
        "Prototipo sperimentale per interazioni vocali, feedback sonoro e micro-esperienze immersive.",
      statusLabel: "Alpha",
      buttonLabel: "Scopri Echo-0",
      features: [
        "Interfaccia minimale",
        "Feedback audio reattivo",
        "Prototipo cross-platform",
      ],
      roadmap: ["Miglioramento latenza", "Integrazione prodotti dello studio"],
      faq: [
        {
          q: "Cos'è Echo-0?",
          a: "Un esperimento Alpha del laboratorio GTC, non ancora un prodotto finito.",
        },
      ],
      ctaTitle: "Segui lo sviluppo",
      ctaDescription: "Echo-0 evolve rapidamente nel laboratorio GTC.",
      ctaButton: "Visita Labs",
      screenshotAlt: "Anteprima Echo-0",
    },
    "ryuk-ai": {
      name: "Ryuk AI",
      tagline: "Intelligenza artificiale sperimentale.",
      description:
        "Motore AI sperimentale per assistenza, automazione e strumenti intelligenti nei prodotti dello studio.",
      statusLabel: "Experimental",
      buttonLabel: "Scopri Ryuk AI",
      features: [
        "Assistente conversazionale",
        "Integrazione prodotti studio",
        "Pipeline AI modulare",
      ],
      roadmap: ["API pubblica", "Modelli specializzati", "Integrazione GTC Docs"],
      faq: [
        {
          q: "Ryuk AI è production-ready?",
          a: "No, è in fase Experimental e in evoluzione continua.",
        },
      ],
      ctaTitle: "Resta aggiornato",
      ctaDescription: "Ryuk AI sarà integrato progressivamente nei prodotti dello studio.",
      ctaButton: "Visita Labs",
      screenshotAlt: "Anteprima Ryuk AI",
    },
    novacloud: {
      name: "GTC Cloud",
      tagline: "Sincronizzazione intelligente.",
      description:
        "Piattaforma cloud per sincronizzazione, dispositivi e servizi connessi ai prodotti dello studio.",
      statusLabel: "Development",
      buttonLabel: "Scopri GTC Cloud",
      features: [
        "Sincronizzazione multi-dispositivo",
        "Gestione dispositivi",
        "Privacy e controllo dati",
      ],
      roadmap: [
        "Sync avanzata GTC Docs",
        "Backup automatico",
        "Dashboard cloud",
      ],
      faq: [
        {
          q: "GTC Cloud è già attivo?",
          a: "È in sviluppo attivo e già parzialmente integrato in GTC Docs.",
        },
      ],
      ctaTitle: "GTC Cloud in arrivo",
      ctaDescription: "La piattaforma cloud dei prodotti dello studio sta prendendo forma.",
      ctaButton: "Scopri di più",
      screenshotAlt: "Schermata GTC Cloud",
    },
    novamobile: {
      name: "GTC Mobile",
      tagline: "I prodotti dello studio in tasca.",
      description:
        "App companion mobile per accedere ai prodotti dello studio ovunque, con integrazione cloud in evoluzione.",
      statusLabel: "Beta",
      buttonLabel: "Scopri GTC Mobile",
      features: [
        "UI moderna",
        "Supporto Android",
        "Esperienza veloce",
        "Integrazione cloud futura",
      ],
      roadmap: ["Sync GTC Cloud", "Notifiche", "Widget"],
      faq: [
        {
          q: "Come partecipo alla beta?",
          a: "Scarica l'APK dalla pagina download o visita GTC Mobile Alpha.",
        },
      ],
      ctaTitle: "Prova GTC Mobile",
      ctaDescription: "Scarica la build Alpha per Android.",
      ctaButton: "Scarica APK",
      screenshotAlt: "Anteprima GTC Mobile",
    },
    novasmile: {
      name: "GTC Smile",
      tagline: "Routine ortodontica e benessere digitale.",
      description:
        "Applicazione per supportare la routine ortodontica attraverso obiettivi, progressi, premi e funzionalità per la famiglia.",
      statusLabel: "In sviluppo",
      buttonLabel: "Scopri GTC Smile",
      features: [
        "Obiettivi e routine quotidiane",
        "Progressi e premi",
        "Funzionalità per la famiglia",
        "Pannello genitori e esperienza mobile",
      ],
      roadmap: [
        "Completamento integrazione famiglia",
        "Esperienza Kids",
        "Rilascio pubblico controllato",
      ],
      faq: [
        {
          q: "GTC Smile è già scaricabile?",
          a: "No. Il prodotto è in sviluppo attivo; non è ancora disponibile una release pubblica.",
        },
        {
          q: "Su quali piattaforme arriverà?",
          a: "È progettato come esperienza web e mobile, con supporto alle attività familiari.",
        },
      ],
      ctaTitle: "GTC Smile in sviluppo",
      ctaDescription:
        "Segui l’evoluzione del prodotto o contatta lo studio per informazioni.",
      ctaButton: "Contatta lo studio",
      screenshotAlt: "Anteprima GTC Smile",
    },
    novatk: {
      name: "GTC TK",
      tagline: "Fitness tracker per iPhone.",
      description:
        "Tracker fitness personale con SwiftUI e HealthKit per allenamenti, progressi e monitoraggio attività.",
      statusLabel: "Alpha",
      buttonLabel: "Scopri GTC TK",
      features: [
        "Schede allenamento",
        "Monitoraggio peso",
        "HealthKit",
        "Widget iOS",
      ],
      roadmap: [
        "Workout Session",
        "Cronologia allenamenti",
        "Dashboard progressi",
      ],
      faq: [
        {
          q: "GTC TK è su TestFlight?",
          a: "TestFlight arriverà presto. Il codice è disponibile su GitHub.",
        },
      ],
      ctaTitle: "Segui GTC TK",
      ctaDescription: "Fitness tracking nativo per iPhone, in sviluppo attivo.",
      ctaButton: "Repository GitHub",
      screenshotAlt: "Anteprima GTC TK",
    },
    novabeauty: {
      name: "GTC Beauty",
      tagline: "Gestionale per il settore beauty.",
      description:
        "Software professionale per centri estetici, parrucchieri e attività beauty.",
      statusLabel: "Alpha",
      buttonLabel: "Scopri GTC Beauty",
      features: [
        "Gestione clienti",
        "Appuntamenti",
        "Storico trattamenti",
        "Dashboard attività",
      ],
      roadmap: [
        "Calendario avanzato",
        "Backup cloud",
        "Statistiche",
      ],
      faq: [
        {
          q: "Per chi è pensato GTC Beauty?",
          a: "Per professionisti beauty e centri estetici che vogliono un gestionale moderno.",
        },
      ],
      ctaTitle: "GTC Beauty Alpha",
      ctaDescription: "Gestionale beauty in sviluppo per iOS.",
      ctaButton: "Repository GitHub",
      screenshotAlt: "Anteprima GTC Beauty",
    },
  },
};

const en: EcosystemI18n = {
  section: {
    eyebrow: "GTC Catalog",
    title: "GTC Products",
    description:
      "The GTC family brings together software for productivity, mobile, cloud and digital wellbeing — designed by GLITCH with a coherent identity.",
    viewAll: "Explore Labs",
  },
  labs: {
    eyebrow: "GTC Labs",
    title: "Experiments in progress",
    description:
      "GTC Labs is where we test ideas, prototypes and future products. Alpha, Beta, Experimental and Coming Soon live together in one space.",
    backHome: "Back to home",
    filterAll: "All",
    comingSoonTitle: "Upcoming experiments",
    comingSoonDescription:
      "New projects are already in ideation. Follow the community to discover them first.",
  },
  downloads: {
    eyebrow: "Download Center",
    title: "Downloads",
    description:
      "A single access point for all available studio products builds. Versions, platforms and release notes always up to date.",
    backHome: "Back to home",
    version: "Version",
    platform: "Platform",
    status: "Status",
    download: "Download",
    releaseNotes: "Release Notes",
    comingSoon: "Coming Soon",
    storeButton: "Download from Microsoft Store",
    storeNote:
      "Recommended version • Automatic updates • Secure installation",
    alternativesHeading: "Alternative downloads",
    storeRecommended: "Microsoft Store (Recommended)",
    exeInstaller: "EXE Installer",
  },
  productPage: {
    features: "Features",
    roadmap: "Product roadmap",
    version: "Version",
    status: "Status",
    faq: "FAQ",
    backHome: "Back to home",
    exploreEcosystem: "Explore projects",
  },
  products: {
    novadocs: {
      name: "GTC Docs",
      tagline: "Modern desktop document editor.",
      description:
        "Fast, powerful document editor with local AI assistant, GTC Cloud and tools built for professional productivity.",
      statusLabel: "Stable",
      buttonLabel: "Discover GTC Docs",
      features: [
        "Modern editor with dark theme",
        "Built-in local AI assistant",
        "GTC Cloud and GTC Drop",
        "AI Resume Builder",
        "Automatic updates",
      ],
      roadmap: [
        "GTC Cloud improvements",
        "New mobile integrations",
        "Advanced templates",
      ],
      faq: [
        {
          q: "Which platforms are supported?",
          a: "GTC Docs is currently available for Windows desktop.",
        },
        {
          q: "Are my documents safe?",
          a: "Your files remain yours and you can work offline.",
        },
      ],
      ctaTitle: "Get started with GTC Docs",
      ctaDescription:
        "Install GTC Docs from the Microsoft Store: automatic updates and secure installation.",
      ctaButton: "Download from Microsoft Store",
      screenshotAlt: "GTC Docs screenshot",
    },
    novapromo: {
      name: "GTC Promo",
      tagline: "Promotions and social commerce.",
      description:
        "Platform to manage promotions, social content and digital campaigns for brands and creators.",
      statusLabel: "Beta",
      buttonLabel: "Discover GTC Promo",
      features: [
        "Promotion management",
        "Social integration",
        "Campaign dashboard",
        "Basic analytics",
      ],
      roadmap: [
        "Meta integration",
        "Advanced automations",
        "Extended reporting",
      ],
      faq: [
        {
          q: "Is GTC Promo available yet?",
          a: "The Beta version is being tested with selected users.",
        },
      ],
      ctaTitle: "Join the Beta",
      ctaDescription: "Contact us to access the GTC Promo beta.",
      ctaButton: "Contact us",
      screenshotAlt: "GTC Promo preview",
    },
    "echo-0": {
      name: "Echo-0",
      tagline: "Audio and interaction experiment.",
      description:
        "Experimental prototype for voice interactions, sound feedback and immersive micro-experiences.",
      statusLabel: "Alpha",
      buttonLabel: "Discover Echo-0",
      features: [
        "Minimal interface",
        "Reactive audio feedback",
        "Cross-platform prototype",
      ],
      roadmap: ["Latency improvements", "studio products integration"],
      faq: [
        {
          q: "What is Echo-0?",
          a: "An Alpha experiment from GTC Labs, not yet a finished product.",
        },
      ],
      ctaTitle: "Follow development",
      ctaDescription: "Echo-0 evolves rapidly in GTC Labs.",
      ctaButton: "Visit Labs",
      screenshotAlt: "Echo-0 preview",
    },
    "ryuk-ai": {
      name: "Ryuk AI",
      tagline: "Experimental artificial intelligence.",
      description:
        "Experimental AI engine for assistance, automation and intelligent tools across the studio products.",
      statusLabel: "Experimental",
      buttonLabel: "Discover Ryuk AI",
      features: [
        "Conversational assistant",
        "GTC product integration",
        "Modular AI pipeline",
      ],
      roadmap: ["Public API", "Specialized models", "GTC Docs integration"],
      faq: [
        {
          q: "Is Ryuk AI production-ready?",
          a: "No, it is in Experimental phase and evolving continuously.",
        },
      ],
      ctaTitle: "Stay updated",
      ctaDescription: "Ryuk AI will be progressively integrated into GTC products.",
      ctaButton: "Visit Labs",
      screenshotAlt: "Ryuk AI preview",
    },
    novacloud: {
      name: "GTC Cloud",
      tagline: "Smart synchronization.",
      description:
        "Cloud platform for synchronization, devices and connected services across the studio products.",
      statusLabel: "Development",
      buttonLabel: "Discover GTC Cloud",
      features: [
        "Multi-device sync",
        "Device management",
        "Privacy and data control",
      ],
      roadmap: ["Advanced GTC Docs sync", "Automatic backup", "Cloud dashboard"],
      faq: [
        {
          q: "Is GTC Cloud already active?",
          a: "It is in active development and partially integrated in GTC Docs.",
        },
      ],
      ctaTitle: "GTC Cloud coming soon",
      ctaDescription: "The studio products cloud platform is taking shape.",
      ctaButton: "Learn more",
      screenshotAlt: "GTC Cloud screenshot",
    },
    novamobile: {
      name: "GTC Mobile",
      tagline: "The studio products in your pocket.",
      description:
        "Mobile companion app to access the studio products anywhere, with evolving cloud integration.",
      statusLabel: "Beta",
      buttonLabel: "Discover GTC Mobile",
      features: [
        "Modern UI",
        "Android support",
        "Fast experience",
        "Future cloud integration",
      ],
      roadmap: ["GTC Cloud sync", "Notifications", "Widgets"],
      faq: [
        {
          q: "How do I join the beta?",
          a: "Download the APK from the download page or visit GTC Mobile Alpha.",
        },
      ],
      ctaTitle: "Try GTC Mobile",
      ctaDescription: "Download the Alpha build for Android.",
      ctaButton: "Download APK",
      screenshotAlt: "GTC Mobile preview",
    },
    novasmile: {
      name: "GTC Smile",
      tagline: "Orthodontic routine and digital wellbeing.",
      description:
        "An application that supports the orthodontic routine through goals, progress, rewards and family features.",
      statusLabel: "In development",
      buttonLabel: "Discover GTC Smile",
      features: [
        "Daily goals and routines",
        "Progress and rewards",
        "Family features",
        "Parent panel and mobile experience",
      ],
      roadmap: [
        "Complete family integration",
        "Kids experience",
        "Controlled public release",
      ],
      faq: [
        {
          q: "Is GTC Smile available to download?",
          a: "No. The product is in active development and there is no public release yet.",
        },
        {
          q: "Which platforms will it support?",
          a: "It is designed as a web and mobile experience with family activity support.",
        },
      ],
      ctaTitle: "GTC Smile in development",
      ctaDescription:
        "Follow product progress or contact the studio for information.",
      ctaButton: "Contact the studio",
      screenshotAlt: "GTC Smile preview",
    },
    novatk: {
      name: "GTC TK",
      tagline: "Fitness tracker for iPhone.",
      description:
        "Personal fitness tracker with SwiftUI and HealthKit for workouts, progress and activity monitoring.",
      statusLabel: "Alpha",
      buttonLabel: "Discover GTC TK",
      features: [
        "Workout cards",
        "Weight tracking",
        "HealthKit",
        "iOS widgets",
      ],
      roadmap: [
        "Workout Session",
        "Workout history",
        "Progress dashboard",
      ],
      faq: [
        {
          q: "Is GTC TK on TestFlight?",
          a: "TestFlight is coming soon. Code is available on GitHub.",
        },
      ],
      ctaTitle: "Follow GTC TK",
      ctaDescription: "Native fitness tracking for iPhone, in active development.",
      ctaButton: "GitHub Repository",
      screenshotAlt: "GTC TK preview",
    },
    novabeauty: {
      name: "GTC Beauty",
      tagline: "Management for the beauty industry.",
      description:
        "Professional software for beauty centers, hair salons and wellness businesses.",
      statusLabel: "Alpha",
      buttonLabel: "Discover GTC Beauty",
      features: [
        "Client management",
        "Appointments",
        "Treatment history",
        "Activity dashboard",
      ],
      roadmap: ["Advanced calendar", "Cloud backup", "Statistics"],
      faq: [
        {
          q: "Who is GTC Beauty for?",
          a: "Beauty professionals and salons who want a modern management app.",
        },
      ],
      ctaTitle: "GTC Beauty Alpha",
      ctaDescription: "Beauty management app in development for iOS.",
      ctaButton: "GitHub Repository",
      screenshotAlt: "GTC Beauty preview",
    },
  },
};

export const ecosystemI18n: Record<Lang, EcosystemI18n> = { it, en };

export function getEcosystemCopy(lang: Lang) {
  return ecosystemI18n[lang];
}

export function getProductCopy(lang: Lang, slug: ProductSlug) {
  return ecosystemI18n[lang].products[slug];
}
