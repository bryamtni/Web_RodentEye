# Diseño del sitio Rodent Eye

Base: la guía de la app (`Docs/DESIGN_GUIDE.md` del proyecto RodeCam) y el logo oficial (`public/img/rodent-eye-mark.png`, que es el ícono de la app). Este archivo dice qué se tomó de la app, qué se ajustó para la web y por qué. Si cambias un token en `src/styles/global.css`, actualiza aquí.

## Principios

1. **Se tiene que sentir como la app.** Verde lima para la acción y el negro de la marca en modo oscuro.
2. **El texto se lee primero.** La mayoría de las visitas llegarán desde las tiendas a privacidad, soporte o eliminar cuenta: son páginas de lectura larga, así que se cuida el contraste, el ancho de línea (~70 caracteres) y el interlineado.
3. **Sobrio.** Sin fotos de stock ni ilustraciones genéricas. Mientras no haya fotos reales de la cámara, la portada usa solo el logo.
4. **Funciona en 13 idiomas, incluido el árabe** (derecha a izquierda). Ningún diseño depende de que el texto tenga cierto largo.

## Color

**Dos temas.** Bryam eligió el 2026-11-11 la opción B, porque con fondo negro costaba leer de día:
- **Claro (por defecto):** fondo casi blanco con un toque verde, tarjetas blancas, botones lima con texto negro y enlaces en verde oscuro.
- **Oscuro:** el negro de la marca. Se activa solo cuando el teléfono o el computador están en modo oscuro (`prefers-color-scheme: dark`).
- **Botón luna/sol en el encabezado:** permite elegir el tema a mano. Pone `data-theme="light|dark"` en `<html>` y lo guarda en `localStorage` (clave `theme`). Un script corto en el `<head>` lo aplica antes de pintar, para que no parpadee. Sin elección guardada, se sigue al dispositivo.

Técnica: cada token usa `light-dark(claro, oscuro)` y `color-scheme` decide cuál se aplica (`light dark` por defecto; `light` o `dark` con `data-theme`). Los navegadores sin `light-dark()` (Safari < 17.5) ven solo el tema claro (bloque `@supports not` en `global.css`).

Se descartaron:
- **A:** el fondo `#EDFFC4` del modo claro de la app. Cansaba en textos largos y el botón lima no se distinguía del fondo.
- **C:** gris oscuro. De día seguía siendo oscuro.

Los colores se usan por **función**, no por nombre. Para cambiar un color se toca el token en `src/styles/global.css`; los componentes no tienen colores fijos.

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--bg` | `#F7F9F3` | `#0D0D0D` | Fondo de página |
| `--surface` | `#FFFFFF` | `#1C1C1C` | Tarjetas, pie |
| `--surface-2` | `#FFFFFF` | `#262626` | Menú de idiomas |
| `--line` | `#E1E6D8` | `#333333` | Bordes y divisores |
| `--text` | `#2E3529` | `#C4C4C4` | Texto de cuerpo |
| `--heading` | `#0D0D0D` | `#FFFFFF` | Títulos, negritas |
| `--muted` | `#5F6758` | `#9A9A9A` | Fechas, notas |
| `--link` | `#3D6B0C` | `#AAED26` | Enlaces y textos verdes (etiquetas, "EYE" del logo) |
| `--accent` | `#AAED26` | `#AAED26` | Fondo del botón principal |
| `--on-accent` | `#0D0D0D` | `#0D0D0D` | Texto sobre el botón lima |
| `--rule` | `#AAED26` | `#AAED26` | Raya decorativa de las funciones |

**Contraste (WCAG AA, mínimo 4.5:1, medido):**

| Combinación | Claro | Oscuro |
|---|---|---|
| Texto sobre fondo | 12.0:1 | 11.1:1 |
| Gris (`--muted`) sobre fondo | 5.6:1 | 6.9:1 |
| Enlace sobre fondo | 6.0:1 | 13.7:1 |
| Negro sobre el botón lima | 13.7:1 | 13.7:1 |

**El verde lima nunca va como color de texto en el tema claro.** Sobre fondo claro tiene contraste 1.3:1 y no se lee. Ahí el verde de texto es `#3D6B0C` (el `--green-700` de la app, un poco más oscuro).

**Qué no se usa en la web:** el rojo de alerta, el teal, el azul y los acentos de gráficas de la app. Son colores de estado dentro de la app y en un sitio informativo solo agregarían ruido.

**Reglas que se mantienen de la app:**
- El lima solo en lo que se puede tocar o en acentos pequeños. Nunca como fondo de una sección entera.
- En botones lima el texto va negro.

## Tipografía

| Rol | Fuente | Por qué |
|---|---|---|
| Títulos y texto | **Inter** (variable, servida desde el propio sitio vía `@fontsource-variable/inter`) | Es la fuente de interfaz que recomienda la guía de la app. Cubre latín, cirílico y griego. |
| Marca y etiquetas (wordmark "RODENT EYE", textos pequeños en mayúsculas) | **IBM Plex Mono** 400/500 | Es la más parecida a las letras cuadradas del logo y tiene cirílico. La guía de la app sugiere Rajdhani u Orbitron, pero esas no tienen cirílico, árabe ni georgiano. |
| Árabe y georgiano | Fuente del sistema (`system-ui`) | Inter no tiene esos alfabetos; el sistema operativo trae fuentes buenas para ambos. |

No se usan fuentes de Google Fonts por enlace externo: todo se sirve desde el propio dominio (privacidad y velocidad).

Escala: el `h1` de la portada usa `clamp(2rem, 5vw, 3.25rem)`, los de páginas internas `clamp(1.8rem, 4vw, 2.5rem)` y el cuerpo 16px con interlineado 1.65.

## Logo

`public/img/rodent-eye-mark.png` (160 px), `favicon.png` y `apple-touch-icon.png` salen de `docs/logo/rodent-eye-mark-512.png`, una versión limpia del ícono de la app (`Assets/rodent-eye-icon.png`). Para crearla (2026-11-11):
- Se recortó el círculo un poco hacia adentro (radio 244 de 256), con borde suave, para quitar la orilla oscura e irregular que traía el original en el lado verde.
- Se dibujó encima una línea lima `#C0FF72` pareja de ~5 px en todo el borde. En el lado verde no se nota y en el lado oscuro queda como la línea fina del logo grande.

Para otros tamaños, partir de esa versión de 512 px, no del original.

## Componentes

| Componente | Dónde | Notas |
|---|---|---|
| Encabezado fijo | Todas | Logo + Soporte + Privacidad + botón de tema + selector de idioma. En celular se ocultan el texto "RODENT EYE" y el enlace Privacidad (sigue en el pie), porque en idiomas como el georgiano no cabe. |
| Selector de idioma | Encabezado | Menú desplegable (`<details>`) con el nombre de cada idioma escrito en su propio idioma. Funciona sin JavaScript. |
| Botón principal | Verde, texto negro, forma de píldora | Uno por sección como máximo. |
| Botón secundario | Borde gris, texto blanco; en hover, borde y texto verdes | |
| Tarjeta | `--charcoal`, borde `--line`, radio 14px | Pasos de "Cómo funciona", contacto. |
| Aviso de borrador | Borde verde punteado | Se quita cuando los textos legales estén aprobados (`SITE.legalDraft` en `src/config.ts`). |
| Aviso de traducción | Gris, pequeño | En las páginas legales que no están en inglés: indica que la versión en inglés es la que vale. |

Radios: 14px en tarjetas, 10px en avisos y 999px en botones (como `--radius-full` de la app).

## Derecha a izquierda (árabe)

- `<html dir="rtl">` en las páginas en árabe.
- El CSS usa propiedades lógicas (`margin-inline-start`, `border-inline-start`, `padding-inline`, `text-align: start`) en lugar de left/right, para que todo se invierta solo.
- Las flechas "→" del texto se escriben en los diccionarios, así que el árabe usa "←".

## Movimiento

Solo el pulso suave del anillo alrededor del logo en la portada, y se desactiva con `prefers-reduced-motion`.

## Pendientes de diseño

- Fotos reales de la cámara y la trampa (las consigue Bryam), para la portada.
- Capturas de la app para la sección "Cómo funciona".
- Logo en vector: el original disponible es el ícono PNG de 512 px (limpiado, ver "Logo"). El SVG de `Assets/` es un calco con defectos y no se usa.
