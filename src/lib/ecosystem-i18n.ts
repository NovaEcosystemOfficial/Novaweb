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
    eyebrow: "Ecosistema",
    title: "NOVA ECOSYSTEM",
    description:
      "Una famiglia di software moderni per produttività, mobile, cloud e intelligenza artificiale. Ogni prodotto nasce con la stessa identità visiva e la stessa visione.",
    viewAll: "Esplora Labs",
  },
  labs: {
    eyebrow: "Nova Labs",
    title: "Esperimenti in corso",
    description:
      "Nova Labs è il laboratorio dove testiamo idee, prototipi e prodotti del futuro. Alpha, Beta, Experimental e Coming Soon convivono in un unico spazio.",
    backHome: "Torna alla home",
    filterAll: "Tutti",
    comingSoonTitle: "Prossimi esperimenti",
    comingSoonDescription:
      "Nuovi progetti Nova sono già in fase di ideazione. Segui la community per scoprirli per primi.",
  },
  downloads: {
    eyebrow: "Download Center",
    title: "Scarica Nova",
    description:
      "Un unico punto di accesso per tutte le build disponibili dell'ecosistema Nova. Versioni, piattaforme e note di rilascio sempre aggiornate.",
    backHome: "Torna alla home",
    version: "Versione",
    platform: "Piattaforma",
    status: "Stato",
    download: "Download",
    releaseNotes: "Release Notes",
    comingSoon: "Prossimamente",
  },
  productPage: {
    features: "Funzionalità",
    roadmap: "Roadmap prodotto",
    version: "Versione",
    status: "Stato",
    faq: "Domande frequenti",
    backHome: "Torna alla home",
    exploreEcosystem: "Esplora l'ecosistema",
  },
  products: {
    novadocs: {
      name: "NovaDocs",
      tagline: "Editor documenti desktop moderno.",
      description:
        "Editor di documenti veloce e potente con assistente IA locale, NovaCloud e strumenti pensati per la produttività professionale.",
      statusLabel: "Stable",
      buttonLabel: "Scopri NovaDocs",
      features: [
        "Editor moderno con tema scuro",
        "Assistente IA locale integrato",
        "NovaCloud e NovaDrop",
        "AI Resume Builder",
        "Aggiornamenti automatici",
      ],
      roadmap: [
        "Miglioramenti NovaCloud",
        "Nuove integrazioni mobile",
        "Template avanzati",
      ],
      faq: [
        {
          q: "Su quali piattaforme è disponibile?",
          a: "NovaDocs è attualmente disponibile per Windows desktop.",
        },
        {
          q: "I miei documenti sono al sicuro?",
          a: "I file restano di tua proprietà e puoi lavorare anche offline.",
        },
      ],
      ctaTitle: "Inizia con NovaDocs",
      ctaDescription: "Scarica l'ultima versione stabile e inizia a creare.",
      ctaButton: "Scarica per Windows",
      screenshotAlt: "Schermata NovaDocs",
    },
    novapromo: {
      name: "NovaPromo",
      tagline: "Promozioni e social commerce.",
      description:
        "Piattaforma per gestire promozioni, contenuti social e campagne digitali per brand e creator.",
      statusLabel: "Beta",
      buttonLabel: "Scopri NovaPromo",
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
          q: "NovaPromo è già disponibile?",
          a: "La versione Beta è in fase di test con utenti selezionati.",
        },
      ],
      ctaTitle: "Unisciti alla Beta",
      ctaDescription: "Contattaci per accedere alla beta di NovaPromo.",
      ctaButton: "Contattaci",
      screenshotAlt: "Anteprima NovaPromo",
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
      roadmap: ["Miglioramento latenza", "Integrazione ecosistema Nova"],
      faq: [
        {
          q: "Cos'è Echo-0?",
          a: "Un esperimento Alpha del laboratorio Nova, non ancora un prodotto finito.",
        },
      ],
      ctaTitle: "Segui lo sviluppo",
      ctaDescription: "Echo-0 evolve rapidamente nel laboratorio Nova.",
      ctaButton: "Visita Labs",
      screenshotAlt: "Anteprima Echo-0",
    },
    "ryuk-ai": {
      name: "Ryuk AI",
      tagline: "Intelligenza artificiale sperimentale.",
      description:
        "Motore AI sperimentale per assistenza, automazione e strumenti intelligenti nell'ecosistema Nova.",
      statusLabel: "Experimental",
      buttonLabel: "Scopri Ryuk AI",
      features: [
        "Assistente conversazionale",
        "Integrazione prodotti Nova",
        "Pipeline AI modulare",
      ],
      roadmap: ["API pubblica", "Modelli specializzati", "Integrazione NovaDocs"],
      faq: [
        {
          q: "Ryuk AI è production-ready?",
          a: "No, è in fase Experimental e in evoluzione continua.",
        },
      ],
      ctaTitle: "Resta aggiornato",
      ctaDescription: "Ryuk AI sarà integrato progressivamente nei prodotti Nova.",
      ctaButton: "Visita Labs",
      screenshotAlt: "Anteprima Ryuk AI",
    },
    novacloud: {
      name: "NovaCloud",
      tagline: "Sincronizzazione intelligente.",
      description:
        "Piattaforma cloud per sincronizzazione, dispositivi e servizi connessi all'ecosistema Nova.",
      statusLabel: "Development",
      buttonLabel: "Scopri NovaCloud",
      features: [
        "Sincronizzazione multi-dispositivo",
        "Gestione dispositivi",
        "Privacy e controllo dati",
      ],
      roadmap: [
        "Sync avanzata NovaDocs",
        "Backup automatico",
        "Dashboard cloud",
      ],
      faq: [
        {
          q: "NovaCloud è già attivo?",
          a: "È in sviluppo attivo e già parzialmente integrato in NovaDocs.",
        },
      ],
      ctaTitle: "NovaCloud in arrivo",
      ctaDescription: "La piattaforma cloud dell'ecosistema Nova sta prendendo forma.",
      ctaButton: "Scopri di più",
      screenshotAlt: "Schermata NovaCloud",
    },
    novamobile: {
      name: "NovaMobile",
      tagline: "L'ecosistema Nova in tasca.",
      description:
        "App companion mobile per accedere all'ecosistema Nova ovunque, con integrazione cloud in evoluzione.",
      statusLabel: "Beta",
      buttonLabel: "Scopri NovaMobile",
      features: [
        "UI moderna",
        "Supporto Android",
        "Esperienza veloce",
        "Integrazione cloud futura",
      ],
      roadmap: ["Sync NovaCloud", "Notifiche", "Widget"],
      faq: [
        {
          q: "Come partecipo alla beta?",
          a: "Scarica l'APK dalla pagina download o visita Nova Mobile Alpha.",
        },
      ],
      ctaTitle: "Prova NovaMobile",
      ctaDescription: "Scarica la build Alpha per Android.",
      ctaButton: "Scarica APK",
      screenshotAlt: "Anteprima NovaMobile",
    },
    novatk: {
      name: "NovaTK",
      tagline: "Fitness tracker per iPhone.",
      description:
        "Tracker fitness personale con SwiftUI e HealthKit per allenamenti, progressi e monitoraggio attività.",
      statusLabel: "Alpha",
      buttonLabel: "Scopri NovaTK",
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
          q: "NovaTK è su TestFlight?",
          a: "TestFlight arriverà presto. Il codice è disponibile su GitHub.",
        },
      ],
      ctaTitle: "Segui NovaTK",
      ctaDescription: "Fitness tracking nativo per iPhone, in sviluppo attivo.",
      ctaButton: "Repository GitHub",
      screenshotAlt: "Anteprima NovaTK",
    },
    novabeauty: {
      name: "NovaBeauty",
      tagline: "Gestionale per il settore beauty.",
      description:
        "Software professionale per centri estetici, parrucchieri e attività beauty.",
      statusLabel: "Alpha",
      buttonLabel: "Scopri NovaBeauty",
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
          q: "Per chi è pensato NovaBeauty?",
          a: "Per professionisti beauty e centri estetici che vogliono un gestionale moderno.",
        },
      ],
      ctaTitle: "NovaBeauty Alpha",
      ctaDescription: "Gestionale beauty in sviluppo per iOS.",
      ctaButton: "Repository GitHub",
      screenshotAlt: "Anteprima NovaBeauty",
    },
  },
};

const en: EcosystemI18n = {
  section: {
    eyebrow: "Ecosystem",
    title: "NOVA ECOSYSTEM",
    description:
      "A family of modern software for productivity, mobile, cloud and artificial intelligence. Every product shares the same visual identity and vision.",
    viewAll: "Explore Labs",
  },
  labs: {
    eyebrow: "Nova Labs",
    title: "Experiments in progress",
    description:
      "Nova Labs is where we test ideas, prototypes and future products. Alpha, Beta, Experimental and Coming Soon live together in one space.",
    backHome: "Back to home",
    filterAll: "All",
    comingSoonTitle: "Upcoming experiments",
    comingSoonDescription:
      "New Nova projects are already in ideation. Follow the community to discover them first.",
  },
  downloads: {
    eyebrow: "Download Center",
    title: "Download Nova",
    description:
      "A single access point for all available Nova ecosystem builds. Versions, platforms and release notes always up to date.",
    backHome: "Back to home",
    version: "Version",
    platform: "Platform",
    status: "Status",
    download: "Download",
    releaseNotes: "Release Notes",
    comingSoon: "Coming Soon",
  },
  productPage: {
    features: "Features",
    roadmap: "Product roadmap",
    version: "Version",
    status: "Status",
    faq: "FAQ",
    backHome: "Back to home",
    exploreEcosystem: "Explore ecosystem",
  },
  products: {
    novadocs: {
      name: "NovaDocs",
      tagline: "Modern desktop document editor.",
      description:
        "Fast, powerful document editor with local AI assistant, NovaCloud and tools built for professional productivity.",
      statusLabel: "Stable",
      buttonLabel: "Discover NovaDocs",
      features: [
        "Modern editor with dark theme",
        "Built-in local AI assistant",
        "NovaCloud and NovaDrop",
        "AI Resume Builder",
        "Automatic updates",
      ],
      roadmap: [
        "NovaCloud improvements",
        "New mobile integrations",
        "Advanced templates",
      ],
      faq: [
        {
          q: "Which platforms are supported?",
          a: "NovaDocs is currently available for Windows desktop.",
        },
        {
          q: "Are my documents safe?",
          a: "Your files remain yours and you can work offline.",
        },
      ],
      ctaTitle: "Get started with NovaDocs",
      ctaDescription: "Download the latest stable version and start creating.",
      ctaButton: "Download for Windows",
      screenshotAlt: "NovaDocs screenshot",
    },
    novapromo: {
      name: "NovaPromo",
      tagline: "Promotions and social commerce.",
      description:
        "Platform to manage promotions, social content and digital campaigns for brands and creators.",
      statusLabel: "Beta",
      buttonLabel: "Discover NovaPromo",
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
          q: "Is NovaPromo available yet?",
          a: "The Beta version is being tested with selected users.",
        },
      ],
      ctaTitle: "Join the Beta",
      ctaDescription: "Contact us to access the NovaPromo beta.",
      ctaButton: "Contact us",
      screenshotAlt: "NovaPromo preview",
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
      roadmap: ["Latency improvements", "Nova ecosystem integration"],
      faq: [
        {
          q: "What is Echo-0?",
          a: "An Alpha experiment from Nova Labs, not yet a finished product.",
        },
      ],
      ctaTitle: "Follow development",
      ctaDescription: "Echo-0 evolves rapidly in Nova Labs.",
      ctaButton: "Visit Labs",
      screenshotAlt: "Echo-0 preview",
    },
    "ryuk-ai": {
      name: "Ryuk AI",
      tagline: "Experimental artificial intelligence.",
      description:
        "Experimental AI engine for assistance, automation and intelligent tools across the Nova ecosystem.",
      statusLabel: "Experimental",
      buttonLabel: "Discover Ryuk AI",
      features: [
        "Conversational assistant",
        "Nova product integration",
        "Modular AI pipeline",
      ],
      roadmap: ["Public API", "Specialized models", "NovaDocs integration"],
      faq: [
        {
          q: "Is Ryuk AI production-ready?",
          a: "No, it is in Experimental phase and evolving continuously.",
        },
      ],
      ctaTitle: "Stay updated",
      ctaDescription: "Ryuk AI will be progressively integrated into Nova products.",
      ctaButton: "Visit Labs",
      screenshotAlt: "Ryuk AI preview",
    },
    novacloud: {
      name: "NovaCloud",
      tagline: "Smart synchronization.",
      description:
        "Cloud platform for synchronization, devices and connected services across the Nova ecosystem.",
      statusLabel: "Development",
      buttonLabel: "Discover NovaCloud",
      features: [
        "Multi-device sync",
        "Device management",
        "Privacy and data control",
      ],
      roadmap: ["Advanced NovaDocs sync", "Automatic backup", "Cloud dashboard"],
      faq: [
        {
          q: "Is NovaCloud already active?",
          a: "It is in active development and partially integrated in NovaDocs.",
        },
      ],
      ctaTitle: "NovaCloud coming soon",
      ctaDescription: "The Nova ecosystem cloud platform is taking shape.",
      ctaButton: "Learn more",
      screenshotAlt: "NovaCloud screenshot",
    },
    novamobile: {
      name: "NovaMobile",
      tagline: "The Nova ecosystem in your pocket.",
      description:
        "Mobile companion app to access the Nova ecosystem anywhere, with evolving cloud integration.",
      statusLabel: "Beta",
      buttonLabel: "Discover NovaMobile",
      features: [
        "Modern UI",
        "Android support",
        "Fast experience",
        "Future cloud integration",
      ],
      roadmap: ["NovaCloud sync", "Notifications", "Widgets"],
      faq: [
        {
          q: "How do I join the beta?",
          a: "Download the APK from the download page or visit Nova Mobile Alpha.",
        },
      ],
      ctaTitle: "Try NovaMobile",
      ctaDescription: "Download the Alpha build for Android.",
      ctaButton: "Download APK",
      screenshotAlt: "NovaMobile preview",
    },
    novatk: {
      name: "NovaTK",
      tagline: "Fitness tracker for iPhone.",
      description:
        "Personal fitness tracker with SwiftUI and HealthKit for workouts, progress and activity monitoring.",
      statusLabel: "Alpha",
      buttonLabel: "Discover NovaTK",
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
          q: "Is NovaTK on TestFlight?",
          a: "TestFlight is coming soon. Code is available on GitHub.",
        },
      ],
      ctaTitle: "Follow NovaTK",
      ctaDescription: "Native fitness tracking for iPhone, in active development.",
      ctaButton: "GitHub Repository",
      screenshotAlt: "NovaTK preview",
    },
    novabeauty: {
      name: "NovaBeauty",
      tagline: "Management for the beauty industry.",
      description:
        "Professional software for beauty centers, hair salons and wellness businesses.",
      statusLabel: "Alpha",
      buttonLabel: "Discover NovaBeauty",
      features: [
        "Client management",
        "Appointments",
        "Treatment history",
        "Activity dashboard",
      ],
      roadmap: ["Advanced calendar", "Cloud backup", "Statistics"],
      faq: [
        {
          q: "Who is NovaBeauty for?",
          a: "Beauty professionals and salons who want a modern management app.",
        },
      ],
      ctaTitle: "NovaBeauty Alpha",
      ctaDescription: "Beauty management app in development for iOS.",
      ctaButton: "GitHub Repository",
      screenshotAlt: "NovaBeauty preview",
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
