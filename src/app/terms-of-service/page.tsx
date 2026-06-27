import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Nova Ecosystem Terms of Service — rules and responsibilities for using Nova websites and applications.",
  openGraph: {
    type: "website",
    title: "Terms of Service · Nova Ecosystem",
    description:
      "Read the terms governing your use of Nova Ecosystem products and services.",
    siteName: "Nova Ecosystem",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service · Nova Ecosystem",
    description:
      "Read the terms governing your use of Nova Ecosystem products and services.",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function Page() {
  return <LegalDocumentPage document="terms" />;
}
