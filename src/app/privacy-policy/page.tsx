import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Nova Ecosystem Privacy Policy — how we collect, use, and protect your data across Nova services.",
  openGraph: {
    type: "website",
    title: "Privacy Policy · Nova Ecosystem",
    description:
      "Learn how Nova Ecosystem handles your data, authentication, and content ownership.",
    siteName: "Nova Ecosystem",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy · Nova Ecosystem",
    description:
      "Learn how Nova Ecosystem handles your data, authentication, and content ownership.",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function Page() {
  return <LegalDocumentPage document="privacy" />;
}
