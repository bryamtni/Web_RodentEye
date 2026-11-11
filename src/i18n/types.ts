/** Un bloque de texto legal: un string es un párrafo, un arreglo es una lista con viñetas.
 *  Se permite HTML simple (<strong>, <a>) y los marcadores de fill() en i18n/index.ts. */
export type Block = string | string[];

export interface LegalDoc {
  title: string;
  description: string;
  intro: Block[];
  sections: { heading: string; blocks: Block[] }[];
}

export interface Dict {
  nav: { home: string; support: string; privacy: string; terms: string; deleteAccount: string; language: string };
  common: {
    tagline: string;
    draft: string;
    updated: string;
    rights: string;
    /** Vacío en inglés. En los demás: aviso de que en lo legal vale la versión en inglés. */
    translationNote: string;
    soon: string;
    appStore: string;
    googlePlay: string;
    skip: string;
    arrow: string;
  };
  notFound: { title: string; body: string; back: string };
  home: {
    title: string;
    description: string;
    eyebrow: string;
    h1: string;
    h1Accent: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    howTitle: string;
    steps: { title: string; body: string }[];
    featuresTitle: string;
    features: { title: string; body: string }[];
    downloadTitle: string;
    downloadLead: string;
    supportLink: string;
  };
  support: {
    title: string;
    description: string;
    lead: string;
    contactTitle: string;
    contactBody: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
  };
  privacy: LegalDoc;
  deleteAccount: LegalDoc & { emailSubject: string; button: string };
  terms: LegalDoc;
}
