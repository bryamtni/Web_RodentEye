import { type Lang, defaultLang, langCodes } from './languages';
import type { Dict } from './types';
import { SITE } from '../config';

const modules = import.meta.glob<{ default: Dict }>('./locales/*.ts', { eager: true });
const dicts = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.match(/([\w-]+)\.ts$/)![1], mod.default]),
) as Record<Lang, Dict>;

const missing = langCodes.filter((l) => !dicts[l]);
if (missing.length) throw new Error(`Faltan diccionarios en src/i18n/locales: ${missing.join(', ')}`);

export { languages, defaultLang, langCodes, type Lang } from './languages';
export type { Dict, Block, LegalDoc } from './types';

export function getDict(lang: Lang): Dict {
  return dicts[lang];
}

/** Ruta con el prefijo de idioma y el base de Astro: url('es', 'privacy') → /es/privacy/ */
export function url(lang: Lang, path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const clean = path.replace(/^\/|\/$/g, '');
  return `${base}${prefix}/${clean ? clean + '/' : ''}`;
}

export function asset(path: string) {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}

/** Reemplaza los marcadores de los textos: {email}, {company}, {app}, {supportUrl}, {privacyUrl}, {deleteUrl}, {termsUrl}. */
export function fill(text: string, lang: Lang) {
  const values: Record<string, string> = {
    email: `<a href="mailto:${SITE.supportEmail}">${SITE.supportEmail}</a>`,
    // <bdi> aísla el texto latino para que no se desordene en árabe
    company: `<bdi>${SITE.company}</bdi>`,
    app: `<bdi>${SITE.name}</bdi>`,
    supportUrl: url(lang, 'support'),
    privacyUrl: url(lang, 'privacy'),
    deleteUrl: url(lang, 'delete-account'),
    termsUrl: url(lang, 'terms'),
  };
  return text.replace(/\{(\w+)\}/g, (m, key) => values[key] ?? m);
}

/** Para getStaticPaths en src/pages/[...lang]/: inglés en la raíz, el resto en /<código>/ */
export const langPaths = () =>
  langCodes.map((lang) => ({ params: { lang: lang === defaultLang ? undefined : lang }, props: { lang } }));
