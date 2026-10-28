import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GLITCH | Digital Studio · Software · Innovation",
    template: "%s · GLITCH",
  },
  description:
    "GLITCH is a digital studio that designs and builds software, applications and digital solutions — including NovaDocs, NovaMobile and Labs projects.",
  keywords: [
    "GLITCH",
    "Digital Studio",
    "Software",
    "Innovation",
    "NovaDocs",
    "NovaMobile",
    "NovaPromo",
    "NovaTK",
    "NovaCloud",
    "Document Editor",
    "Productivity Software",
    "Mobile Applications",
  ],
  authors: [{ name: "GLITCH" }],
  creator: "GLITCH",
  applicationName: "GLITCH",
  openGraph: {
    type: "website",
    url: SITE_URL,
    locale: "en_US",
    title: "GLITCH | Digital Studio · Software · Innovation",
    description:
      "GLITCH is a digital studio that designs and builds software, applications and digital solutions.",
    siteName: "GLITCH",
    images: [{ url: "/images/logo.png", alt: "GLITCH" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GLITCH | Digital Studio · Software · Innovation",
    description:
      "GLITCH is a digital studio that designs and builds software, applications and digital solutions.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${spaceGrotesk.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-nova-bg font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
