import { contactLinks, releases } from "./data";
import type { Lang } from "./i18n";

/**
 * Single source of truth for the Nova Mobile Alpha page.
 *
 * Language-agnostic config (URLs, version) lives in `novaMobile`.
 * All translatable copy lives in `alphaCopy`, keyed by language.
 *
 * To ship a new APK build:
 *  - update `releases.novamobile` in data.ts (apk + fileName),
 *  - bump `novaMobile.version` / the version labels below,
 *  - prepend a new entry to each language's `changelog.releases`.
 */

export const novaMobile = {
  version: "0.1",
  apkUrl: releases.novamobile.apk,
  apkFileName: releases.novamobile.fileName,
  issuesUrl: releases.novamobile.issues,
  discordUrl: contactLinks.discord,
};

export type AlphaRelease = {
  version: string;
  label: string;
  date: string;
  current?: boolean;
  changes: string[];
};

export type AlphaCopy = {
  meta: { back: string; downloadApk: string };
  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    downloadApk: string;
    joinDiscord: string;
    versionChip: string;
    platformChip: string;
    sizeChip: string;
  };
  release: {
    eyebrow: string;
    title: string;
    description: string;
    versionLabel: string;
    versionValue: string;
    platformLabel: string;
    platformValue: string;
    statusLabel: string;
    statusValue: string;
    notice: string;
    quickGuideTitle: string;
    quickGuideHint: string;
    steps: string[];
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    workingTitle: string;
    comingTitle: string;
    working: string[];
    coming: string[];
  };
  feedback: {
    title: string;
    text: string;
    discord: string;
    githubIssues: string;
  };
  changelog: {
    eyebrow: string;
    title: string;
    description: string;
    latest: string;
    releases: AlphaRelease[];
  };
  footer: { home: string; discord: string; download: string };
};

export const alphaCopy: Record<Lang, AlphaCopy> = {
  it: {
    meta: { back: "Torna a Nova", downloadApk: "Scarica APK" },
    hero: {
      badge: "Alpha iniziale · Android",
      titleLead: "Nova Mobile",
      titleAccent: "Alpha",
      description:
        "L'ecosistema Nova, ora su Android. Prova la primissima build di NovaMobile e aiutaci a definire cosa verrà dopo. Questa è una alpha iniziale: aspettati qualche imperfezione, aggiornamenti frequenti e tante nuove funzionalità in arrivo.",
      downloadApk: "Scarica APK",
      joinDiscord: "Entra in Discord",
      versionChip: "v0.1 Alpha",
      platformChip: "Android 8.0+",
      sizeChip: "~18 MB",
    },
    release: {
      eyebrow: "Release",
      title: "Nova Mobile Alpha è disponibile",
      description:
        "La prima build pubblica di NovaMobile è pronta da installare sul tuo dispositivo Android.",
      versionLabel: "Versione",
      versionValue: "v0.1 Alpha",
      platformLabel: "Piattaforma",
      platformValue: "Android APK",
      statusLabel: "Stato",
      statusValue: "Alpha Pubblica",
      notice:
        "⚠️ Alcuni dispositivi Android potrebbero richiedere l'autorizzazione per installare applicazioni da origini sconosciute.",
      quickGuideTitle: "Guida rapida all'installazione",
      quickGuideHint: "5 passaggi",
      steps: [
        "Scarica il file APK",
        "Apri il file scaricato",
        "Consenti l'installazione da origini sconosciute se richiesto",
        "Installa NovaMobile",
        "Apri l'app e invia feedback",
      ],
    },
    features: {
      eyebrow: "Cosa c'è dentro",
      title: "Funzionalità attuali",
      description:
        "Una panoramica di ciò che funziona oggi e di ciò che arriverà nelle prossime build alpha.",
      workingTitle: "Già disponibili",
      comingTitle: "In arrivo",
      working: [
        "Interfaccia Android moderna",
        "Sfoglia documenti",
        "Tema scuro",
        "Navigazione veloce",
        "Accesso offline di base",
      ],
      coming: [
        "Sincronizzazione NovaCloud",
        "Assistente IA locale",
        "Modifica documenti",
        "Continuità tra dispositivi",
        "Notifiche push",
      ],
    },
    feedback: {
      title: "Aiutaci a migliorare Nova Mobile",
      text: "Aiutaci a migliorare NovaMobile. Questa è una release Alpha iniziale e il tuo feedback è estremamente prezioso.",
      discord: "Community Discord",
      githubIssues: "GitHub Issues",
    },
    changelog: {
      eyebrow: "Note di rilascio",
      title: "Changelog",
      description: "Segui ogni build di Nova Mobile Alpha man mano che esce.",
      latest: "Ultima",
      releases: [
        {
          version: "0.1",
          label: "Versione 0.1 Alpha",
          date: "Giugno 2026",
          current: true,
          changes: [
            "Prima release alpha pubblica",
            "Struttura base dell'app Android",
            "Sfoglia documenti",
            "Supporto tema scuro",
            "Lancio della community Discord",
          ],
        },
      ],
    },
    footer: { home: "Home", discord: "Discord", download: "Scarica APK" },
  },
  en: {
    meta: { back: "Back to Nova", downloadApk: "Download APK" },
    hero: {
      badge: "Early Alpha · Android",
      titleLead: "Nova Mobile",
      titleAccent: "Alpha",
      description:
        "The Nova ecosystem, now on Android. Try the earliest build of NovaMobile and help shape what comes next. This is an early alpha — expect rough edges, frequent updates and lots of new features on the way.",
      downloadApk: "Download APK",
      joinDiscord: "Join Discord",
      versionChip: "v0.1 Alpha",
      platformChip: "Android 8.0+",
      sizeChip: "~18 MB",
    },
    release: {
      eyebrow: "Release",
      title: "Nova Mobile Alpha is now available",
      description:
        "The first public build of NovaMobile is ready to install on your Android device.",
      versionLabel: "Version",
      versionValue: "v0.1 Alpha",
      platformLabel: "Platform",
      platformValue: "Android APK",
      statusLabel: "Status",
      statusValue: "Public Alpha",
      notice:
        "⚠️ Some Android devices may require permission to install applications from unknown sources.",
      quickGuideTitle: "Quick install guide",
      quickGuideHint: "5 steps",
      steps: [
        "Download the APK",
        "Open the downloaded file",
        "Allow installation from unknown sources if requested",
        "Install NovaMobile",
        "Launch the app and send feedback",
      ],
    },
    features: {
      eyebrow: "What's inside",
      title: "Current features",
      description:
        "A snapshot of what works today and what's coming in upcoming alpha builds.",
      workingTitle: "Working now",
      comingTitle: "Coming soon",
      working: [
        "Modern Android interface",
        "Document browsing",
        "Dark theme",
        "Fast navigation",
        "Basic offline access",
      ],
      coming: [
        "NovaCloud synchronization",
        "Local AI assistant",
        "Document editing",
        "Cross-device handoff",
        "Push notifications",
      ],
    },
    feedback: {
      title: "Help shape Nova Mobile",
      text: "Help us improve NovaMobile. This is an early Alpha release and feedback is extremely valuable.",
      discord: "Discord Community",
      githubIssues: "GitHub Issues",
    },
    changelog: {
      eyebrow: "Release notes",
      title: "Changelog",
      description: "Track every Nova Mobile Alpha build as it ships.",
      latest: "Latest",
      releases: [
        {
          version: "0.1",
          label: "Version 0.1 Alpha",
          date: "June 2026",
          current: true,
          changes: [
            "First public alpha release",
            "Core Android app shell",
            "Document browsing",
            "Dark theme support",
            "Discord community launch",
          ],
        },
      ],
    },
    footer: { home: "Home", discord: "Discord", download: "Download APK" },
  },
};
