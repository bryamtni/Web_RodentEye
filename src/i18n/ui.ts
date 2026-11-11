export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.support': 'Support',
    'nav.privacy': 'Privacy',
    'nav.terms': 'Terms',
    'nav.delete': 'Delete account',
    'nav.switch': 'Español',
    'tagline': 'Pest monitoring',
    'draft': 'Draft — pending legal review. Not final text.',
    'updated': 'Last updated',
    'footer.rights': 'All rights reserved.',
    'download.soon': 'Coming soon',
    'download.appstore': 'App Store',
    'download.play': 'Google Play',
    'notfound.title': 'Page not found',
    'notfound.body': 'The page you are looking for does not exist.',
    'notfound.back': 'Back to home',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.support': 'Soporte',
    'nav.privacy': 'Privacidad',
    'nav.terms': 'Términos',
    'nav.delete': 'Eliminar cuenta',
    'nav.switch': 'English',
    'tagline': 'Monitoreo de plagas',
    'draft': 'Borrador — pendiente de revisión legal. No es el texto final.',
    'updated': 'Última actualización',
    'footer.rights': 'Todos los derechos reservados.',
    'download.soon': 'Próximamente',
    'download.appstore': 'App Store',
    'download.play': 'Google Play',
    'notfound.title': 'Página no encontrada',
    'notfound.body': 'La página que buscas no existe.',
    'notfound.back': 'Volver al inicio',
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['en']) {
  return ui[lang][key] ?? ui[defaultLang][key];
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

/** Para getStaticPaths en src/pages/[...lang]/: inglés en la raíz, español en /es/ */
export const langPaths = () => [
  { params: { lang: undefined }, props: { lang: 'en' as Lang } },
  { params: { lang: 'es' }, props: { lang: 'es' as Lang } },
];
