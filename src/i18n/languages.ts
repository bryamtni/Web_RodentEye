// Idiomas de la app (tabla Idiomas de DoItYourself, 16 registros) reducidos a uno por idioma:
// Español (Chile) → es, Português (Portugal) → pt (Brasil), العربية (الأردن) → ar.
export const languages = {
  en: { name: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr' },
  es: { name: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr' },
  pt: { name: 'Português', hreflang: 'pt-BR', ogLocale: 'pt_BR', dir: 'ltr' },
  fr: { name: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr' },
  it: { name: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr' },
  pl: { name: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr' },
  tr: { name: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr' },
  sq: { name: 'Shqip', hreflang: 'sq', ogLocale: 'sq_AL', dir: 'ltr' },
  mk: { name: 'Македонски', hreflang: 'mk', ogLocale: 'mk_MK', dir: 'ltr' },
  uk: { name: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr' },
  ru: { name: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr' },
  ka: { name: 'ქართული', hreflang: 'ka', ogLocale: 'ka_GE', dir: 'ltr' },
  ar: { name: 'العربية', hreflang: 'ar', ogLocale: 'ar_AR', dir: 'rtl' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langCodes = Object.keys(languages) as Lang[];
