import { contactLinks } from "./data";

/**
 * Single source of truth for the Nova Mobile Alpha page.
 *
 * To ship a new APK build, update `apk.url`, `apk.fileName`, `apk.size`
 * and `version`/`versionLabel`, then prepend a new entry to `changelog`.
 * The page will pick everything up automatically.
 */

export type InstallStep = {
  title: string;
  description: string;
};

export type FeatureItem = {
  label: string;
};

export type ChangelogRelease = {
  version: string;
  label: string;
  date: string;
  current?: boolean;
  changes: string[];
};

export const novaMobileAlpha = {
  name: "Nova Mobile Alpha",
  tagline: "The Nova ecosystem, now on Android.",
  description:
    "Try the earliest build of NovaMobile and help shape what comes next. This is an early alpha — expect rough edges, frequent updates and lots of new features on the way.",
  version: "0.1",
  versionLabel: "v0.1 Alpha",

  apk: {
    /** TODO: update this URL with each new APK release. */
    url: "https://github.com/NovaEcosystemOfficial/NovaMobile/releases/latest",
    fileName: "NovaMobile-Alpha.apk",
    platform: "Android 8.0+",
    size: "~18 MB",
  },

  discordUrl: contactLinks.discord,

  installSteps: [
    {
      title: "Download the APK",
      description:
        "Tap “Download APK” and save the NovaMobile installer to your Android device.",
    },
    {
      title: "Allow unknown sources",
      description:
        "In Android settings, allow your browser or file manager to install apps from unknown sources.",
    },
    {
      title: "Open the APK file",
      description:
        "Find NovaMobile-Alpha.apk in your downloads and tap it to begin installation.",
    },
    {
      title: "Install NovaMobile",
      description:
        "Confirm the installation prompt and wait a few seconds for it to finish.",
    },
    {
      title: "Launch the app",
      description:
        "Open NovaMobile from your app drawer and complete the quick first-launch setup.",
    },
    {
      title: "Join the community",
      description:
        "Hop into our Discord to report issues, request features and follow new builds.",
    },
  ] satisfies InstallStep[],

  workingFeatures: [
    { label: "Modern Android interface" },
    { label: "Document browsing" },
    { label: "Dark theme" },
    { label: "Fast navigation" },
    { label: "Basic offline access" },
  ] satisfies FeatureItem[],

  comingSoonFeatures: [
    { label: "NovaCloud synchronization" },
    { label: "Local AI assistant" },
    { label: "Document editing" },
    { label: "Cross-device handoff" },
    { label: "Push notifications" },
  ] satisfies FeatureItem[],

  changelog: [
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
  ] satisfies ChangelogRelease[],
};
