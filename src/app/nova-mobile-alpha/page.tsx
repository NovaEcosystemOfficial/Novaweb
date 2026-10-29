import type { Metadata } from "next";
import { NovaMobileAlphaPage } from "@/components/alpha/NovaMobileAlphaPage";

export const metadata: Metadata = {
  title: "GTC Mobile Alpha",
  description:
    "Download the GTC Mobile Alpha APK for Android, follow the step-by-step installation guide and help shape the future of GTC Mobile.",
  keywords: [
    "GTC Mobile",
    "GTC Mobile Alpha",
    "GLITCH",
    "Android APK",
    "GTC Mobile download",
    "GTC Mobile beta",
  ],
  openGraph: {
    type: "website",
    title: "GTC Mobile Alpha · GLITCH",
    description:
      "Download the GTC Mobile Alpha APK for Android and help shape the future of GTC Mobile.",
    siteName: "GLITCH",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTC Mobile Alpha · GLITCH",
    description:
      "Download the GTC Mobile Alpha APK for Android and help shape the future of GTC Mobile.",
  },
  alternates: {
    canonical: "/nova-mobile-alpha",
  },
};

export default function Page() {
  return <NovaMobileAlphaPage />;
}
