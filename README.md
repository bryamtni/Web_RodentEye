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

**Producción — IIS de la empresa** (servidor TICAM, sitio `rodent-eye.com`, publicado por Sergio el 2026-11-11; DNS en Cloudflare):
1. Generar el zip:
   ```sh
   rm -rf dist && PUBLIC_NOINDEX=true npm run build
   mkdir -p deploy && (cd dist && zip -qr ../deploy/rodent-eye-web-$(date +%Y%m%d-%H%M).zip . -x '.DS_Store')
   ```
   - `PUBLIC_NOINDEX=true` evita que Google indexe el sitio mientras los textos legales sean borradores. Quitarlo cuando Juan y el abogado los aprueben.
   - `deploy/` está en `.gitignore`.
2. En el servidor, **reemplazar** el contenido de `W:\DoItYourself\Web` por el del zip: los archivos sueltos van directo en la carpeta, sin subcarpeta `dist`. Incluye `web.config` y `404.html`.
3. Si se ve la versión anterior, purgar la caché en Cloudflare (Caching → Purge Everything) o esperar unos minutos.
4. Revisar `https://rodent-eye.com/`, `/privacy/` y `/support/`. Si aparece un **error 500**, probablemente IIS rechazó una sección de `web.config`; avisar con la captura.

`web.config` no usa URL Rewrite. HTTP → HTTPS y HSTS se configuran en Cloudflare ("Always Use HTTPS").

## Pendientes

- [x] Dominio: `rodent-eye.com`
- [ ] DNS, sitio IIS, certificado y buzón `support@rodent-eye.com` (solicitado a David y Sergio)
- [ ] Entidad legal responsable para los textos legales (hoy solo dice "Rodent Eye")
- [ ] Revisión legal de privacidad, eliminación de cuenta y términos; quitar el aviso de borrador (`LegalHeader`, `draft`)
- [ ] Enlaces de App Store y Google Play cuando estén publicadas
- [ ] Logo en vector original: hoy se usa `rodent-eye-icon.png` (512 px), y el SVG de `Assets/` es un calco con imperfecciones
- [ ] Capturas de la app para la portada
