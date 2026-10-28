import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "GLITCH Privacy Policy — how we collect, use, and protect your data across Nova services.",
  openGraph: {
    type: "website",
    title: "Privacy Policy · GLITCH",
    description:
      "Learn how GLITCH handles your data, authentication, and content ownership.",
    siteName: "GLITCH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy · GLITCH",
    description:
      "Learn how GLITCH handles your data, authentication, and content ownership.",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function Page() {
  return <LegalDocumentPage document="privacy" />;
}
