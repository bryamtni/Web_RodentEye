# Diseño del sitio Rodent Eye

Base: la guía de la app (`Docs/DESIGN_GUIDE.md` del proyecto RodeCam) y el logo oficial (`public/img/rodent-eye-mark.png`, que es el ícono de la app). Este archivo dice qué se tomó de la app, qué se ajustó para la web y por qué. Si cambias un token en `src/styles/global.css`, actualiza aquí.

## Principios

1. **Se tiene que sentir como la app.** Fondo casi negro, verde lima para la acción, texto blanco.
2. **El texto se lee primero.** La mayoría de las visitas llegarán desde las tiendas a privacidad, soporte o eliminar cuenta: son páginas de lectura larga, así que se cuida el contraste, el ancho de línea (~70 caracteres) y el interlineado.
3. **Sobrio.** Sin fotos de stock ni ilustraciones genéricas. Mientras no haya fotos reales de la cámara, la portada usa solo el logo.
4. **Funciona en 13 idiomas, incluido el árabe** (derecha a izquierda). Ningún diseño depende de que el texto tenga cierto largo.

## Color

Solo tema oscuro, como la marca. La app tiene modo claro, pero en la web el oscuro es la identidad y es lo que se ve en el logo.

| Token CSS | Hex | Uso en la web | Origen |
|---|---|---|---|
| `--black` | `#0D0D0D` | Fondo de página | `--surface-0` de la app |
| `--charcoal` | `#1C1C1C` | Tarjetas, pie de página | `--surface-2` |
| `--charcoal-2` | `#262626` | Hover de tarjetas, menú desplegable | ≈ `--surface-3` |
| `--line` | `#333333` | Bordes y divisores | entre `--surface-4` y `--surface-5` |
| `--green` | `#AAED26` | Botón principal, enlaces, acentos | Verde de marca |
| `--green-hover` | `#C0F450` | Hover del verde | `--green-400` |
| `--green-dark` | `#1A3305` | Velo del degradado del hero | `--green-900` |
| `--white` | `#FFFFFF` | Títulos y texto destacado | `--text-primary` |
| `--gray` | `#C4C4C4` | Texto de cuerpo | `--text-secondary` |
| `--muted` | `#9A9A9A` | Fechas, notas, texto legal pequeño | Ajustado desde `#888` de la app (4.8:1 sobre `#1C1C1C`) a 6.1:1, para tener margen en texto pequeño |

**Contraste (WCAG AA, mínimo 4.5:1 en texto normal):**
- `#C4C4C4` sobre `#0D0D0D`: 11.1:1. `#9A9A9A` sobre `#1C1C1C`: 6.1:1.
- `#AAED26` sobre `#0D0D0D`: 13.7:1, válido para enlaces.
- En botones verdes el texto va **negro** (`#0D0D0D`), nunca blanco (regla de la app).

**Qué no se usa en la web:** el rojo de alerta, el teal, el azul y los acentos de gráficas de la app. Son colores de estado dentro de la app y en un sitio informativo solo agregarían ruido.

**Reglas que se mantienen de la app:**
- El verde lima solo en lo que se puede tocar o en acentos pequeños. Nunca como fondo de una sección entera.
- Máximo un acento (verde) por pantalla.

## Tipografía

| Rol | Fuente | Por qué |
|---|---|---|
| Títulos y texto | **Inter** (variable, servida desde el propio sitio vía `@fontsource-variable/inter`) | Es la fuente de interfaz que recomienda la guía de la app. Cubre latín, cirílico y griego. |
| Marca y etiquetas (wordmark "RODENT EYE", textos pequeños en mayúsculas) | **IBM Plex Mono** 400/500 | Es la más parecida a las letras cuadradas del logo y tiene cirílico. La guía de la app sugiere Rajdhani u Orbitron, pero esas no tienen cirílico, árabe ni georgiano. |
| Árabe y georgiano | Fuente del sistema (`system-ui`) | Inter no tiene esos alfabetos; el sistema operativo trae fuentes buenas para ambos. |

No se usan fuentes de Google Fonts por enlace externo: todo se sirve desde el propio dominio (privacidad y velocidad).

Escala: el `h1` de la portada usa `clamp(2rem, 5vw, 3.25rem)`, los de páginas internas `clamp(1.8rem, 4vw, 2.5rem)` y el cuerpo 16px con interlineado 1.65.

## Componentes

| Componente | Dónde | Notas |
|---|---|---|
| Encabezado fijo | Todas | Logo + Soporte + Privacidad + selector de idioma. En celular se oculta el texto "RODENT EYE" y queda el ícono. |
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
- Logo en vector: el original disponible es el ícono PNG de 512 px. El SVG de `Assets/` es un calco con defectos y no se usa.
