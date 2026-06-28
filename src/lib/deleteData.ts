import type { Lang } from "./i18n";

export const DELETE_DATA_EMAIL = "fabiodigitalstudio.dev@gmail.com";

export type DeleteDataCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  emailLabel: string;
  includeLabel: string;
  requirements: string[];
  processingNote: string;
  backHome: string;
  privacyLink: string;
};

const it: DeleteDataCopy = {
  eyebrow: "Legale",
  title: "Richiesta eliminazione dati",
  intro:
    "Se desideri eliminare i dati associati a NovaPromo o Nova Ecosystem, puoi inviare una richiesta a:",
  emailLabel: "Indirizzo e-mail",
  includeLabel: "Inserisci nell'e-mail:",
  requirements: [
    "nome account Instagram/Facebook",
    "motivo della richiesta",
    "riferimento a NovaPromo",
  ],
  processingNote: "Elaboreremo la richiesta entro 30 giorni.",
  backHome: "Torna alla home",
  privacyLink: "Informativa sulla Privacy",
};

const en: DeleteDataCopy = {
  eyebrow: "Legal",
  title: "Data Deletion Request",
  intro:
    "If you want to delete data associated with NovaPromo or Nova Ecosystem, send a request to:",
  emailLabel: "Email address",
  includeLabel: "Please include:",
  requirements: [
    "Instagram/Facebook account name",
    "reason for the request",
    "reference to NovaPromo",
  ],
  processingNote: "We will process the request within 30 days.",
  backHome: "Back to home",
  privacyLink: "Privacy Policy",
};

export const deleteDataCopy: Record<Lang, DeleteDataCopy> = { it, en };

export function getDeleteDataCopy(lang: Lang): DeleteDataCopy {
  return deleteDataCopy[lang];
}
