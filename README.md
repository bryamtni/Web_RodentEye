# Web_RodentEye

Sitio público de **Rodent Eye** (dominio previsto: `rodent-eye.com`, aún sin confirmar). Lo exigen las tiendas: privacidad, soporte y eliminación de cuenta. Propuesta completa en `Docs/SITIO_WEB_RODENT_EYE.md` del proyecto RodeCam.

- **Astro 6** genera HTML estático en `dist/`. No hay código de servidor ni base de datos.
- Idiomas: inglés en `/`, español en `/es/`.
- Requiere Node 22.12 o superior solo para compilar (el servidor no necesita Node).

## Comandos

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

## Estructura

| Ruta | Qué hay |
|---|---|
| `src/config.ts` | Correo de soporte, razón social, enlaces a las tiendas |
| `src/i18n/ui.ts` | Textos comunes EN/ES y helpers de rutas (`url`, `asset`) |
| `src/pages/[...lang]/` | Una página por archivo; genera la versión EN y la ES |
| `src/layouts/Base.astro` | `<head>`, SEO, hreflang, encabezado y pie |
| `src/styles/global.css` | Colores de la marca (de `Docs/DESIGN_GUIDE.md`) |
| `public/web.config` | Configuración de IIS: HTTPS, 404, caché y cabeceras |

## Despliegue

**Pruebas — GitHub Pages:** cada push a `main` ejecuta `.github/workflows/pages.yml`. El workflow compila con `BASE_PATH=/Web_RodentEye/` y marca el sitio como `noindex`.

**Producción — IIS de la empresa:**
1. `npm run build` (sin variables: `site` = `https://rodent-eye.com`, base `/`). Si el dominio cambia, ajustar `site` en `astro.config.mjs`.
2. Copiar el contenido de `dist/` a la carpeta del sitio en IIS.
3. Configurar el sitio IIS: Static Content, App Pool "No Managed Code", módulo URL Rewrite, certificado HTTPS.

## Pendientes

- [ ] Dominio definitivo (confirmar si `rodent-eye.com` es de la empresa)
- [ ] Correo de soporte (`src/config.ts`; hoy dice `support@tnipest.com`)
- [ ] Razón social exacta para los textos legales
- [ ] Revisión legal de privacidad, eliminación de cuenta y términos; quitar el aviso de borrador (`LegalHeader`, `draft`)
- [ ] Enlaces de App Store y Google Play cuando estén publicadas
- [ ] Logo en vector original: hoy se usa `rodent-eye-icon.png` (512 px), y el SVG de `Assets/` es un calco con imperfecciones
- [ ] Capturas de la app para la portada
