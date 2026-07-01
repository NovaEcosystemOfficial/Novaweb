import { LanguageProvider } from "@/context/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { NovaEcosystem } from "@/components/NovaEcosystem";
import { Features } from "@/components/Features";
import { Roadmap } from "@/components/Roadmap";
import { Changelog } from "@/components/Changelog";
import { Community } from "@/components/Community";
import { Support } from "@/components/Support";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { contactLinks } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nova Ecosystem",
  slogan: "Build. Create. Evolve.",
  description:
    "Nova Ecosystem is a modern software house building NovaDocs, NovaPromo, NovaCloud, NovaMobile, NovaTK, NovaBeauty and experimental products from Nova Labs.",
  url: "https://nova.example.com",
  sameAs: [
    contactLinks.github,
    contactLinks.instagram,
    contactLinks.tiktok,
    contactLinks.facebook,
    contactLinks.discord,
  ],
  makesOffer: [
    { "@type": "Offer", name: "NovaDocs" },
    { "@type": "Offer", name: "NovaPromo" },
    { "@type": "Offer", name: "NovaMobile" },
    { "@type": "Offer", name: "NovaBeauty" },
    { "@type": "Offer", name: "NovaTK" },
    { "@type": "Offer", name: "NovaCloud" },
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
        <NovaEcosystem />
        <Features />
        <Roadmap />
        <Changelog />
        <Community />
        <Support />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
