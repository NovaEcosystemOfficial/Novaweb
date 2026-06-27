import type { Lang } from "./i18n";
import { contactLinks } from "./data";

export type LegalDocumentId = "privacy" | "terms";

export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalDocument = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  contactLabel: string;
  contactHelp: string;
  contactEmail: string;
  relatedLabel: string;
  relatedHref: string;
  relatedTitle: string;
  backHome: string;
};

export type LegalPageCopy = {
  privacy: LegalDocument;
  terms: LegalDocument;
};

const contactEmail = contactLinks.email;

const it: LegalPageCopy = {
  privacy: {
    eyebrow: "Legale",
    title: "Informativa sulla Privacy",
    updated: "Ultimo aggiornamento: giugno 2026",
    intro:
      "Nova Ecosystem rispetta la tua privacy. Questa informativa descrive quali dati trattiamo, come li utilizziamo e quali diritti hai in relazione ai servizi Nova.",
    sections: [
      {
        title: "Informazioni che raccogliamo",
        paragraphs: [
          "Raccogliamo solo le informazioni necessarie per fornire, mantenere e migliorare i nostri servizi. Ciò può includere dati di account, informazioni tecniche sul dispositivo e dati di utilizzo essenziali al funzionamento delle applicazioni Nova.",
        ],
      },
      {
        title: "Autenticazione",
        paragraphs: [
          "Alcuni servizi Nova possono utilizzare Firebase Authentication per gestire l'accesso sicuro agli account. Quando utilizzi queste funzionalità, le credenziali e i dati di autenticazione sono trattati secondo le pratiche di sicurezza di Firebase e le presenti condizioni.",
        ],
      },
      {
        title: "I tuoi contenuti",
        paragraphs: [
          "I file e i contenuti che carichi o crei tramite i servizi Nova restano di tua proprietà. Nova Ecosystem non rivendica la titolarità sui tuoi documenti, file o altri materiali caricati dall'utente.",
        ],
      },
      {
        title: "Condivisione dei dati",
        paragraphs: [
          "Non vendiamo i tuoi dati personali a terze parti. I dati possono essere condivisi solo con fornitori tecnologici strettamente necessari all'erogazione del servizio, nel rispetto di obblighi legali e con adeguate misure di sicurezza.",
        ],
      },
      {
        title: "Conservazione ed eliminazione",
        paragraphs: [
          "Conserviamo i dati personali solo per il tempo necessario alle finalità descritte in questa informativa. Puoi richiedere la cancellazione dei tuoi dati contattandoci all'indirizzo indicato di seguito.",
        ],
      },
    ],
    contactLabel: "Contatti privacy",
    contactHelp:
      "Per domande su questa pagina o per richiedere la cancellazione dei tuoi dati, contattaci:",
    contactEmail,
    relatedLabel: "Consulta anche",
    relatedHref: "/terms-of-service",
    relatedTitle: "Termini di Servizio",
    backHome: "Torna alla home",
  },
  terms: {
    eyebrow: "Legale",
    title: "Termini di Servizio",
    updated: "Ultimo aggiornamento: giugno 2026",
    intro:
      "Utilizzando i siti web, le applicazioni e i servizi Nova Ecosystem, accetti i presenti Termini di Servizio. Ti invitiamo a leggerli attentamente prima di utilizzare i nostri prodotti.",
    sections: [
      {
        title: "Responsabilità sui contenuti",
        paragraphs: [
          "Sei responsabile dei contenuti che carichi, crei, sincronizzi o condividi tramite i servizi Nova. Devi possedere i diritti necessari su tali contenuti e garantire che il loro utilizzo non violi diritti di terzi o norme applicabili.",
        ],
      },
      {
        title: "Fornitura del servizio",
        paragraphs: [
          "I servizi Nova sono forniti \"così come sono\" e \"come disponibili\", senza garanzie di disponibilità continua, assenza di errori o idoneità a uno scopo particolare, nei limiti consentiti dalla legge applicabile.",
        ],
      },
      {
        title: "Aggiornamenti e modifiche",
        paragraphs: [
          "Nova Ecosystem può aggiornare, modificare o interrompere funzionalità e servizi nel tempo per migliorare l'esperienza, garantire la sicurezza o adempiere a requisiti legali e tecnici.",
        ],
      },
      {
        title: "Uso vietato",
        paragraphs: [
          "È vietato utilizzare i servizi Nova in modo non autorizzato, illecito o dannoso. In particolare, non è consentito:",
        ],
        bullets: [
          "Accedere ai sistemi senza autorizzazione o tentare di comprometterne la sicurezza",
          "Caricare contenuti illegali, offensivi o che violino diritti altrui",
          "Utilizzare i servizi per attività fraudolente, abusive o contrarie alla legge",
        ],
      },
    ],
    contactLabel: "Contatti",
    contactHelp:
      "Per domande su questi termini o sui servizi Nova, contattaci:",
    contactEmail,
    relatedLabel: "Consulta anche",
    relatedHref: "/privacy-policy",
    relatedTitle: "Informativa sulla Privacy",
    backHome: "Torna alla home",
  },
};

const en: LegalPageCopy = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: June 2026",
    intro:
      "Nova Ecosystem respects your privacy. This policy explains what data we process, how we use it, and your rights in relation to Nova services.",
    sections: [
      {
        title: "Information we collect",
        paragraphs: [
          "We collect only the information required to provide, maintain, and improve our services. This may include account details, basic device information, and essential usage data needed for Nova applications to function.",
        ],
      },
      {
        title: "Authentication",
        paragraphs: [
          "Some Nova services may use Firebase Authentication to manage secure account access. When you use these features, credentials and authentication data are handled according to Firebase security practices and this policy.",
        ],
      },
      {
        title: "Your content",
        paragraphs: [
          "Files and content you upload or create through Nova services remain owned by you. Nova Ecosystem does not claim ownership over your documents, files, or other user-uploaded materials.",
        ],
      },
      {
        title: "Data sharing",
        paragraphs: [
          "We do not sell your personal data to third parties. Data may be shared only with technology providers strictly necessary to deliver the service, in compliance with legal obligations and with appropriate security measures.",
        ],
      },
      {
        title: "Retention and deletion",
        paragraphs: [
          "We retain personal data only for as long as necessary for the purposes described in this policy. You may request deletion of your data by contacting us at the address below.",
        ],
      },
    ],
    contactLabel: "Privacy contact",
    contactHelp:
      "For questions about this page or to request deletion of your data, contact us at:",
    contactEmail,
    relatedLabel: "See also",
    relatedHref: "/terms-of-service",
    relatedTitle: "Terms of Service",
    backHome: "Back to home",
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    updated: "Last updated: June 2026",
    intro:
      "By using Nova Ecosystem websites, applications, and services, you agree to these Terms of Service. Please read them carefully before using our products.",
    sections: [
      {
        title: "Content responsibility",
        paragraphs: [
          "You are responsible for the content you upload, create, sync, or share through Nova services. You must have the necessary rights to such content and ensure its use does not violate third-party rights or applicable laws.",
        ],
      },
      {
        title: "Service provision",
        paragraphs: [
          "Nova services are provided on an \"as is\" and \"as available\" basis, without warranties of uninterrupted availability, error-free operation, or fitness for a particular purpose, to the extent permitted by applicable law.",
        ],
      },
      {
        title: "Updates and changes",
        paragraphs: [
          "Nova Ecosystem may update, modify, or discontinue features and services over time to improve the experience, maintain security, or meet legal and technical requirements.",
        ],
      },
      {
        title: "Prohibited use",
        paragraphs: [
          "Unauthorized or illegal use of Nova services is prohibited. In particular, you may not:",
        ],
        bullets: [
          "Access systems without authorization or attempt to compromise their security",
          "Upload illegal, offensive, or rights-infringing content",
          "Use the services for fraudulent, abusive, or unlawful activity",
        ],
      },
    ],
    contactLabel: "Contact",
    contactHelp: "For questions about these terms or Nova services, contact us at:",
    contactEmail,
    relatedLabel: "See also",
    relatedHref: "/privacy-policy",
    relatedTitle: "Privacy Policy",
    backHome: "Back to home",
  },
};

export const legalCopy: Record<Lang, LegalPageCopy> = { it, en };

export function getLegalDocument(
  lang: Lang,
  document: LegalDocumentId
): LegalDocument {
  return legalCopy[lang][document];
}
