// @ts-check
import { defineConfig } from 'astro/config';

// Producción (IIS): https://rodent-eye.com en la raíz.
// Pruebas (GitHub Pages): el workflow define SITE_URL y BASE_PATH.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://rodent-eye.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
