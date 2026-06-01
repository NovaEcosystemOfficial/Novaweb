import type { Metadata } from "next";
import { NovaMobileAlphaPage } from "@/components/alpha/NovaMobileAlphaPage";

export const metadata: Metadata = {
  title: "Nova Mobile Alpha",
  description:
    "Download the Nova Mobile Alpha APK for Android, follow the step-by-step installation guide and help shape the future of NovaMobile.",
  keywords: [
    "Nova Mobile",
    "NovaMobile Alpha",
    "Nova Ecosystem",
    "Android APK",
    "Nova Mobile download",
    "Nova Mobile beta",
  ],
  openGraph: {
    type: "website",
    title: "Nova Mobile Alpha · Nova Ecosystem",
    description:
      "Download the Nova Mobile Alpha APK for Android and help shape the future of NovaMobile.",
    siteName: "Nova Ecosystem",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Mobile Alpha · Nova Ecosystem",
    description:
      "Download the Nova Mobile Alpha APK for Android and help shape the future of NovaMobile.",
  },
  alternates: {
    canonical: "/nova-mobile-alpha",
  },
};

export default function Page() {
  return <NovaMobileAlphaPage />;
}
