import { LanguageProvider } from "@/context/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StudioAbout } from "@/components/StudioAbout";
import { StudioServices } from "@/components/StudioServices";
import { NovaEcosystem } from "@/components/NovaEcosystem";
import { StudioProcess } from "@/components/StudioProcess";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { contactLinks } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GLITCH",
  alternateName: "GLITCH Digital Studio",
  slogan: "DIGITAL STUDIO · SOFTWARE · INNOVATION",
  description:
    "GLITCH is a digital studio that designs and builds software, applications and digital solutions.",
  url: SITE_URL,
  sameAs: [
    contactLinks.github,
    contactLinks.instagram,
    contactLinks.tiktok,
    contactLinks.facebook,
    contactLinks.discord,
  ],
  makesOffer: [
    { "@type": "Offer", name: "GTC Docs" },
    { "@type": "Offer", name: "GTC Mobile" },
    { "@type": "Offer", name: "GTC Smile" },
    { "@type": "Offer", name: "GTC Promo" },
    { "@type": "Offer", name: "GTC Beauty" },
    { "@type": "Offer", name: "GTC Cloud" },
    { "@type": "Offer", name: "Echo-0" },
  ],
};

export default function Home() {
  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative">
        <Hero />
        <StudioAbout />
        <StudioServices />
        <NovaEcosystem />
        <StudioProcess />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
