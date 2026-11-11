# Web_RodentEye

Sitio público de **Rodent Eye** en `https://rodent-eye.com` (dominio confirmado por Juan el 2026-11-11; se aloja en el IIS del servidor de TICAM). **El sitio no debe mencionar TN ni tnipest en ningún lugar.** Lo exigen las tiendas: privacidad, soporte y eliminación de cuenta. Propuesta completa en `Docs/SITIO_WEB_RODENT_EYE.md` del proyecto RodeCam.

- **Astro 6** genera HTML estático en `dist/`. No hay código de servidor ni base de datos.
- 13 idiomas: inglés en `/` y el resto en `/<código>/` (`/es/`, `/pt/`, `/ar/`…). El árabe se muestra de derecha a izquierda.
- Diseño: [docs/DESIGN.md](docs/DESIGN.md). Textos, marca y requisitos de las tiendas: [docs/CONTENT.md](docs/CONTENT.md).
- Requiere Node 22.12 o superior solo para compilar (el servidor no necesita Node).

## Comandos

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # revisa tipos (astro check) y genera dist/
npm run preview   # sirve dist/ localmente
```

## Estructura

| Ruta | Qué hay |
|---|---|
| `src/config.ts` | Correo de soporte, entidad legal, enlaces a las tiendas, aviso de borrador |
| `src/i18n/locales/*.ts` | Todos los textos, un archivo por idioma; `en.ts` es la fuente |
| `src/i18n/languages.ts` | Lista de idiomas (código, nombre, dirección) |
| `src/i18n/index.ts` | Helpers: `getDict`, `url`, `asset`, `fill` (marcadores) |
| `src/pages/[...lang]/` | Una página por archivo; genera la versión de cada idioma |
| `src/layouts/Base.astro` | `<head>`, SEO, hreflang, encabezado y pie |
| `src/styles/global.css` | Colores de la marca (de `Docs/DESIGN_GUIDE.md`) |
| `public/web.config` | Configuración de IIS: HTTPS, 404, caché y cabeceras |

## Despliegue

**Pruebas — GitHub Pages:** https://bryamtni.github.io/Web_RodentEye/ (repo público mientras dure el desarrollo; pasarlo a privado al salir a producción). Cada push a `main` ejecuta `.github/workflows/pages.yml`. El workflow compila con `BASE_PATH=/Web_RodentEye/` y marca el sitio como `noindex`.

**Producción — IIS de la empresa:**
1. `npm run build` (sin variables: `site` = `https://rodent-eye.com`, base `/`). Si el dominio cambia, ajustar `site` en `astro.config.mjs`.
2. Copiar el contenido de `dist/` a `W:\DoItYourself\Web` (servidor de TICAM, junto a `ApiApplication` y `ApiCamera`). Copiar solo el contenido de `dist/`, no la carpeta misma.
3. Sitio IIS propio: App Pool "No Managed Code", bindings con host name para `rodent-eye.com` y `www.rodent-eye.com` (80 y 443 con SNI) y certificado HTTPS. El servidor **no tiene URL Rewrite**: `web.config` no lo usa (agregar `<rewrite>` rompe el sitio con error 500.19). HTTP → HTTPS y HSTS los pone la configuración que ya usan los de servidores.

## Pendientes

- [x] Dominio: `rodent-eye.com`
- [ ] DNS, sitio IIS, certificado y buzón `support@rodent-eye.com` (solicitado a David y Sergio)
- [ ] Entidad legal responsable para los textos legales (hoy solo dice "Rodent Eye")
- [ ] Revisión legal de privacidad, eliminación de cuenta y términos; quitar el aviso de borrador (`LegalHeader`, `draft`)
- [ ] Enlaces de App Store y Google Play cuando estén publicadas
- [ ] Logo en vector original: hoy se usa `rodent-eye-icon.png` (512 px), y el SVG de `Assets/` es un calco con imperfecciones
- [ ] Capturas de la app para la portada
