# Contenido del sitio Rodent Eye

Qué dice el sitio, a quién le habla y qué exige cada tienda. Léelo antes de cambiar textos.

## Para qué existe el sitio

Ante todo, para alojar las páginas que **exigen Apple y Google** (privacidad, soporte, eliminación de cuenta y términos). La portada es una base sencilla: explica el producto a quien llega desde la tienda o desde un buscador. No es todavía un sitio de venta: no se sabe dónde, cuándo ni a qué precio se venderá la cámara (2026-11-11).

## A quién le habla

**Cliente ideal: dueño de casa en EE. UU.** que no sabe nada de roedores. Vio un ratón, encontró excrementos o escucha ruidos, y tiene la sospecha. Compra una cámara/trampa/cebo, la instala con la app y, cuando la cámara detecta actividad real, llama a una empresa de control de plagas.

Consecuencias para el texto:
- Lenguaje simple, sin jerga técnica (nada de "ESP32", "mesh", "firmware").
- Inglés estadounidense como idioma fuente: fechas, ortografía (*color*, *organize*) y referencias.
- El producto no reemplaza a un profesional: ayuda a **confirmar** si hay actividad y **cuándo** llamar a uno.
- Tono calmado: el usuario está preocupado; no asustar ni exagerar.

## Reglas de marca

- Lo visible se llama **Rodent Eye**. No usar "RodeCam", "DoItYourself" ni "DIY".
- **No mencionar TN, Truly Nolen ni tnipest**, salvo una excepción: **Truly Nolen International** figura como entidad responsable en los textos legales (privacidad, términos, eliminación de cuenta), porque hoy no hay otra empresa. El nombre sale de `SITE.company` en `src/config.ts`; nunca escribirlo a mano en los textos.
- Correo de contacto: `support@rodent-eye.com` (`SITE.supportEmail`).
- No inventar funciones. Todo lo que se diga de la app o de la cámara tiene que estar confirmado en el código, en la base o en `Docs/` del proyecto RodeCam. Si no se sabe (por ejemplo, la duración de la batería o la visión nocturna), no se dice.

## Idiomas

Inglés es la fuente (`src/i18n/locales/en.ts`). Los demás son traducciones de ese archivo, con la misma estructura (TypeScript avisa si falta una clave).

| Código | Idioma | Notas |
|---|---|---|
| `en` | English | Fuente. Va en la raíz `/` |
| `es` | Español | Cubre también Español (Chile) de la app |
| `pt` | Português | Brasil; cubre también Português (Portugal) |
| `fr` `it` `pl` `tr` `sq` `mk` `uk` `ru` `ka` | | |
| `ar` | العربية | Derecha a izquierda; cubre también العربية (الأردن) |

Son los 16 idiomas de la tabla `Idiomas` de la base, agrupados en uno por idioma.

**Textos legales traducidos:** llevan un aviso de que, si hay diferencias, vale la versión en inglés. Las traducciones las hizo Claude; conviene que las revise un hablante nativo antes de darlas por finales, sobre todo las legales.

**Flujo al cambiar un texto:** cambiar `en.ts` → cambiar `es.ts` → actualizar el resto (se puede pedir a Claude "traduce los cambios de en.ts a los demás idiomas").

## Marcadores en los textos

Los textos pueden tener HTML simple (`<strong>`, `<a>`) y estos marcadores, que se reemplazan al compilar:

| Marcador | Se convierte en |
|---|---|
| `{email}` | Enlace a `support@rodent-eye.com` |
| `{company}` | Truly Nolen International |
| `{app}` | Rodent Eye |
| `{supportUrl}` `{privacyUrl}` `{deleteUrl}` `{termsUrl}` | Ruta de esa página en el idioma actual |

## Qué exige cada tienda (verificado el 2026-11-11)

### Apple — App Store Review Guidelines

| Requisito | Dónde se cumple |
|---|---|
| **5.1.1(i)** Enlace a la política de privacidad en App Store Connect **y dentro de la app**. La política debe: decir qué datos se recogen, cómo y para qué; confirmar que los terceros que reciben datos los protegen igual; explicar retención y borrado, y cómo revocar el consentimiento o pedir el borrado. | `/privacy`. El enlace dentro de la app es tarea de la app, no del sitio. |
| **5.1.1(v)** Si la app permite crear cuenta, debe permitir **borrarla dentro de la app**. | Ya está en la app (Perfil → Eliminar cuenta). `/delete-account` lo explica. |
| **1.5** La app y su **Support URL** deben tener una forma fácil de contactar. | `/support` con el correo de soporte. |
| EULA | Opcional. Si no se publica uno propio, Apple aplica su EULA estándar. `/terms` queda como borrador para el abogado. |

Fuente: https://developer.apple.com/app-store/review/guidelines/

### Google Play

| Requisito | Dónde se cumple |
|---|---|
| Política de privacidad en una **URL pública, activa, no bloqueada por país, que no sea PDF**, rotulada como política de privacidad. Debe incluir: datos del desarrollador y un contacto de privacidad; tipos de datos que se acceden, recogen, usan y comparten; con quién se comparten; manejo seguro; política de retención y borrado. | `/privacy` |
| **Página web de eliminación de cuenta**: debe nombrar la app o al desarrollador tal como aparece en Play, tener el camino para pedir el borrado **destacado y fácil de encontrar**, permitir pedirlo **sin volver a la app** e informar qué datos se conservan y por qué. | `/delete-account` |

Fuentes: https://support.google.com/googleplay/android-developer/answer/10144311 · https://support.google.com/googleplay/android-developer/answer/13327111

### Leyes de EE. UU. que se tuvieron en cuenta (no es asesoría legal)

- **CalOPPA (California):** la política debe estar publicada, decir qué categorías de datos se recogen y con quién se comparten, cómo revisar o corregir los datos, cómo se avisan los cambios, la fecha de vigencia y cómo se responde a "Do Not Track".
- **CCPA/CPRA (California) y leyes similares de otros estados:** derechos a saber, borrar y corregir, y a no ser discriminado; declarar si se "venden" o "comparten" datos (Rodent Eye no lo hace).
- **COPPA:** el servicio no está dirigido a menores de 13 años.

Esto lo tiene que validar el abogado. El sitio muestra el aviso de borrador (`SITE.legalDraft`) hasta que Juan lo apruebe.

## Hechos de la app en que se basan los textos legales (revisados el 2026-11-11)

Revisados en el código de la app, de las dos APIs y en la base `DoItYourself`.

- **Datos de la cuenta:** nombre, apellido, usuario, contraseña, correo, teléfono e idioma. El selector de código de país del registro no se envía al servidor.
- **Direcciones:** las coordenadas salen de la búsqueda de Google Places, no del GPS. La app **no lee la ubicación del teléfono**: el permiso de ubicación sirve solo para leer el nombre de la red WiFi al configurar la cámara.
- **Contraseña del WiFi:** va directo del teléfono a la cámara. En el teléfono se guarda en el Keychain (iOS) o en EncryptedSharedPreferences (Android) solo si la cámara se conectó. La app manda vacíos los campos `WifiName`/`WifiPassword` al servidor (queda 1 dirección antigua de 2022 con contraseña guardada).
- **Terceros:**
  - OneSignal: notificaciones, con external_id = IdUsuario y foto y textos de la alerta, a través de `notifications.trulynoleninternational.com`.
  - Google Maps Platform: Places, Maps y Time Zone.
  - Mandrill: correos de recuperar contraseña.
  - No hay analítica, Crashlytics ni publicidad.
- **Eliminar cuenta** (`Usp_API_DIY_APP_Del_Usuario`): borra FotosCamara, Notifications, ClickEmpresa, Camaras, Direcciones y Usuarios, y libera el número de serie. En el teléfono cierra la sesión de OneSignal y borra los WiFi guardados y el localStorage.
- **Retención:** no hay ningún proceso que borre eventos viejos. La app solo muestra los últimos 30 días.
- **Empresas en tu zona:** se usa solo el código postal. Los clics se guardan en `ClickEmpresa` y no se envían a las empresas.

## ⚠️ Antes de quitar el aviso de borrador: lo que hay que corregir en la API

Los textos dicen cómo **debe** funcionar el servicio. Hoy hay diferencias que hay que corregir (Diego/Elena) antes de publicar, o cambiar los textos:

1. **Al eliminar la cuenta no se borran los archivos.** Las fotos, GIF, videos y JSON de las cámaras quedan en el disco del servidor (`Archivos_DIY/Cameras/<SN>/...`), y tampoco se borra `FotosCamaraTemp`. La página de eliminación promete borrar "photos and videos".
2. **El endpoint `Usuario/EliminarCuenta` no verifica quién lo pide.** Solo valida el token fijo, que es el mismo para todos y viene dentro de la app, y borra el `IdUsuario` que llegue en la petición. Cualquiera que lo conozca puede borrar cualquier cuenta. Es un riesgo de seguridad, no solo de texto.
3. **Las contraseñas se guardan en texto plano** en `Usuarios.Clave` y en el localStorage del teléfono (`Usuario_Clave`). Por eso la política no dice nada de "contraseñas cifradas". Si hay una filtración, la ley de varios estados obliga a avisar.
4. **Las fotos se publican en `/Files/Cameras/...`**, que según la revisión no piden autenticación. Falta confirmarlo. Por eso la política no dice "acceso restringido".
5. **No hay plazo de conservación.** La política dice "mientras tu cuenta esté activa". Si se define un plazo (por ejemplo, borrar eventos de más de N días), hay que actualizar privacidad.
6. **"30 days" para borrar sin la app** es una propuesta (Google pide "un plazo razonable"). Confirmar que soporte puede cumplirlo.
7. **Dentro de la app debe haber un enlace a la política de privacidad** (Apple 5.1.1(i)). Es tarea de la app, cuando la URL esté publicada.
8. **Términos:** falta definir el estado cuyas leyes aplican (`[to be confirmed]`) y que el abogado revise la edad mínima (18) y el límite de responsabilidad.
