import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "GLITCH Terms of Service — rules and responsibilities for using Nova websites and applications.",
  openGraph: {
    type: "website",
    title: "Terms of Service · GLITCH",
    description:
      "Read the terms governing your use of GLITCH products and services.",
    siteName: "GLITCH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service · GLITCH",
    description:
      "Read the terms governing your use of GLITCH products and services.",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function Page() {
  return <LegalDocumentPage document="terms" />;
}
