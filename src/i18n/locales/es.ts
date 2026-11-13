import type { Dict } from '../types';

const es: Dict = {
  nav: {
    home: 'Inicio',
    support: 'Soporte',
    privacy: 'Privacidad',
    terms: 'Términos',
    deleteAccount: 'Eliminar cuenta',
    language: 'Idioma',
    theme: 'Cambiar modo claro/oscuro',
  },
  common: {
    tagline: 'Monitoreo de plagas',
    draft: 'Borrador: pendiente de revisión legal. Este no es el texto final.',
    updated: 'Última actualización',
    rights: 'Todos los derechos reservados.',
    translationNote:
      'Esta es una traducción ofrecida para tu comodidad. Si hay alguna diferencia con la versión en inglés, prevalece la versión en inglés.',
    soon: 'Próximamente',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    skip: 'Saltar al contenido',
    arrow: '→',
  },
  notFound: {
    title: 'Página no encontrada',
    body: 'La página que buscas no existe.',
    back: 'Volver al inicio',
  },
  home: {
    title: 'Rodent Eye — Descubre si tienes roedores en casa',
    description:
      'Una cámara inteligente que vigila la actividad de roedores en tu casa y envía fotos y alertas a tu teléfono, para que sepas cuándo es momento de llamar a un profesional.',
    eyebrow: 'Monitoreo de roedores para tu hogar',
    h1: '¿Crees que tienes roedores?',
    h1Accent: 'Sal de dudas.',
    lead:
      'Excrementos en la despensa, rasguños dentro de las paredes, una sombra rápida en el garaje. Coloca una cámara Rodent Eye donde viste las señales y te enviará fotos y una alerta al teléfono cuando algo se mueva.',
    ctaPrimary: 'Descarga la app',
    ctaSecondary: 'Cómo funciona',
    howTitle: 'Cómo funciona',
    steps: [
      {
        title: 'Coloca la cámara',
        body: 'Ponla donde notaste señales de actividad y conéctala al WiFi de tu casa con la configuración paso a paso de la app.',
      },
      {
        title: 'Vigila por ti',
        body: 'Cuando la cámara detecta movimiento, toma fotos y un video corto y los sube de forma segura.',
      },
      {
        title: 'Recibes una alerta',
        body: 'Llega una notificación a tu teléfono. Ábrela para ver qué vio la cámara y cuándo.',
      },
      {
        title: 'Si es real, llama a un profesional',
        body: 'Si la cámara confirma actividad, la app te muestra empresas de control de plagas cerca de tu dirección.',
      },
    ],
    screensTitle: 'Así se ve en la app',
    screens: [
      { caption: 'Tus cámaras de un vistazo' },
      { caption: 'La foto de cada detección' },
      { caption: 'Cada evento, día a día' },
    ],
    featuresTitle: 'Todo en una sola app',
    features: [
      { title: 'Alertas al instante', body: 'Una notificación cada vez que la cámara detecta movimiento.' },
      { title: 'Fotos y video', body: 'Mira exactamente lo que captó cada cámara, evento por evento.' },
      { title: 'Más de un lugar', body: 'Organiza tus cámaras por dirección: tu casa, una propiedad que alquilas, una cabaña.' },
      { title: 'Configuración guiada', body: 'Conecta la cámara a tu WiFi desde tu teléfono. Sin necesidad de un técnico.' },
      { title: 'Historial de eventos', body: 'Revisa la actividad reciente para ver cuándo y dónde ocurre.' },
      { title: 'Profesionales locales', body: 'Encuentra empresas de control de plagas cerca de ti cuando necesites ayuda.' },
    ],
    downloadTitle: 'Descarga la app Rodent Eye',
    downloadLead: 'Para iPhone y Android.',
    supportLink: '¿Tienes preguntas? Visita soporte',
  },
  support: {
    title: 'Soporte',
    description: 'Ayuda con la app y la cámara Rodent Eye: configuración, notificaciones y tu cuenta.',
    lead: 'Aquí abajo encontrarás respuestas rápidas. Si aún necesitas ayuda, escríbenos y te responderemos.',
    contactTitle: 'Contáctanos',
    contactBody: 'Incluye tu nombre de usuario y, si tu pregunta es sobre una cámara, su número de serie.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Cómo conecto una cámara a mi WiFi?',
        a: 'En la app, toca el botón “+” del menú inferior y sigue los pasos. Tu teléfono se conecta a la cámara y le envía el nombre y la contraseña de tu WiFi. La cámara funciona con redes WiFi de <strong>2.4 GHz</strong>.',
      },
      {
        q: '¿Por qué la app me pide mi ubicación?',
        a: 'Tu teléfono solo permite que las apps lean el nombre de la red WiFi a la que estás conectado si tienen permiso de ubicación. Rodent Eye lo usa durante la configuración de la cámara para encontrar la red de la cámara. La app no rastrea ni guarda la ubicación de tu teléfono.',
      },
      {
        q: 'No recibo notificaciones',
        a: 'Revisa que las notificaciones de Rodent Eye estén activadas en los ajustes de tu teléfono y que hayas iniciado sesión. Si reinstalaste la app, vuelve a iniciar sesión para que tu teléfono quede registrado para recibir alertas.',
      },
      {
        q: 'Mi cámara aparece desconectada',
        a: 'Asegúrate de que la cámara tenga energía y de que tu WiFi esté funcionando. Si cambiaste de router o la contraseña de tu WiFi, vuelve a configurar la cámara desde la app.',
      },
      {
        q: 'Olvidé mi contraseña',
        a: 'En la pantalla de inicio de sesión, toca “¿Olvidaste tu contraseña?” e ingresa tu nombre de usuario y tu correo. Te enviaremos por correo un código de 6 dígitos para crear una nueva contraseña. El código vence a los 15 minutos.',
      },
      {
        q: 'La cámara detectó un roedor. ¿Y ahora qué?',
        a: 'Revisa las fotos y el video para confirmarlo. Si hay actividad, la app te muestra empresas de control de plagas cerca de tu dirección a las que puedes llamar o escribir directamente desde tu teléfono.',
      },
      {
        q: '¿Cómo elimino mi cuenta?',
        a: 'Puedes hacerlo en la app o pedírnoslo por correo. Consulta los pasos en la <a href="{deleteUrl}">página de eliminación de cuenta</a>.',
      },
    ],
  },
  privacy: {
    title: 'Política de privacidad',
    description: 'Qué datos recopila Rodent Eye, cómo se usan y se comparten, cuánto tiempo se conservan y cómo eliminarlos.',
    intro: [
      'Esta política de privacidad explica cómo {company} (“nosotros”) recopila, usa y comparte información cuando usas la app móvil {app}, la cámara {app} y este sitio web (en conjunto, el “Servicio”).',
      'Preguntas sobre esta política o sobre tus datos: {email}.',
    ],
    sections: [
      {
        heading: 'Información que recopilamos',
        blocks: [
          '<strong>Información que nos das</strong>',
          [
            '<strong>Cuenta:</strong> nombre y apellido, nombre de usuario, correo electrónico, número de teléfono, contraseña e idioma preferido.',
            '<strong>Direcciones:</strong> el nombre y la dirección de cada lugar que vigilas, incluidos el código postal, las coordenadas en el mapa y la zona horaria. Cuando escribes una dirección, la app usa el buscador de direcciones de Google para encontrarla.',
            '<strong>Cámaras:</strong> el nombre y la ubicación que le das a cada cámara (por ejemplo, “Garaje”) y su número de serie.',
            '<strong>Mensajes de soporte:</strong> todo lo que nos envíes por correo.',
          ],
          '<strong>Información de tu cámara</strong>',
          [
            '<strong>Eventos:</strong> cuando la cámara detecta movimiento, nos envía fotos y videos cortos del área a la que apunta, con la fecha y la hora.',
            '<strong>Estado del dispositivo:</strong> nivel de batería, intensidad de la señal WiFi, temperatura, lecturas de los sensores y versión del software.',
          ],
          '<strong>Información de tu teléfono</strong>',
          [
            '<strong>Notificaciones:</strong> para enviarte alertas, nuestro proveedor de notificaciones registra tu teléfono y lo vincula a tu cuenta.',
            '<strong>Permiso de ubicación:</strong> se usa solo durante la configuración de la cámara para leer el nombre de tu red WiFi. No recopilamos ni guardamos la ubicación de tu teléfono.',
            '<strong>Contraseña del WiFi:</strong> se envía directamente de tu teléfono a la cámara durante la configuración. No se envía a nuestros servidores. Si la configuración tiene éxito, la app la guarda en el almacenamiento seguro de tu teléfono para que no tengas que volver a escribirla.',
            '<strong>Cámara del teléfono:</strong> en iPhone puedes escanear el código de barras de la etiqueta de la cámara. La imagen se procesa en tu teléfono y no se nos envía.',
          ],
          '<strong>Registros de uso:</strong> fechas de inicio de sesión, cuándo tocas para contactar a una empresa de control de plagas desde la app, registros de los correos que te enviamos (como los códigos para restablecer la contraseña) y registros técnicos de nuestros servidores.',
          'No usamos herramientas de publicidad ni de analítica, y no te rastreamos en otras apps ni sitios web.',
        ],
      },
      {
        heading: 'Cómo usamos la información',
        blocks: [
          [
            'Para prestar el Servicio: mostrar los eventos de tus cámaras y enviarte alertas cuando ocurren.',
            'Para configurar y mantener tus cámaras, incluidas las actualizaciones de software.',
            'Para mostrarte empresas de control de plagas cerca de tu dirección (solo usamos el código postal).',
            'Para administrar tu cuenta, ayudarte a restablecer tu contraseña y responder tus solicitudes de soporte.',
            'Para mantener la seguridad del Servicio, evitar el mal uso y corregir problemas.',
            'Para cumplir con obligaciones legales.',
          ],
        ],
      },
      {
        heading: 'Cómo compartimos la información',
        blocks: [
          'No vendemos tu información personal ni la compartimos para publicidad dirigida. Solo la compartimos con proveedores de servicios que nos ayudan a operar el Servicio, y solo lo que necesitan:',
          [
            '<strong>OneSignal</strong> envía las notificaciones push. Recibe un identificador de tu cuenta y de tu teléfono, y el contenido de cada alerta (nombre de la cámara, ubicación y una foto del evento). Entrega las notificaciones a través de Apple y Google.',
            '<strong>Google Maps Platform</strong> ofrece la búsqueda de direcciones y las zonas horarias. Recibe el texto que escribes en el buscador de direcciones y las coordenadas de la dirección.',
            '<strong>Mailchimp Transactional (Mandrill)</strong> envía nuestros correos, como los códigos para restablecer la contraseña. Recibe tu nombre y tu correo electrónico.',
          ],
          'Estos proveedores solo pueden usar la información para prestarnos sus servicios y deben protegerla de acuerdo con esta política y con la ley.',
          'Las empresas de control de plagas que aparecen en la app son negocios independientes. No les enviamos tu información: si decides llamar o escribir a una, la contactas directamente desde tu teléfono.',
          'También podemos divulgar información si la ley lo exige, para proteger los derechos y la seguridad de nuestros usuarios o de otras personas, o como parte de una fusión, adquisición o venta de activos, en cuyo caso esta política seguirá aplicándose.',
        ],
      },
      {
        heading: 'Cuánto tiempo conservamos la información',
        blocks: [
          'Conservamos la información de tu cuenta, tus direcciones, tus cámaras y las fotos y videos de los eventos mientras tu cuenta esté activa.',
          'Cuando eliminas tu cuenta, eliminamos esa información como se describe en la <a href="{deleteUrl}">página de eliminación de cuenta</a>. Podemos conservar registros limitados por más tiempo cuando sea necesario por seguridad, para prevenir fraudes o para cumplir con la ley, como los registros de los servidores y los registros de los correos que te enviamos.',
        ],
      },
      {
        heading: 'Tus opciones y derechos',
        blocks: [
          [
            '<strong>Acceder y corregir:</strong> puedes ver y editar tu información en la app, en Perfil.',
            '<strong>Eliminar:</strong> puedes eliminar tu cuenta en la app o pedirnos que lo hagamos. Consulta <a href="{deleteUrl}">Eliminar cuenta</a>.',
            '<strong>Retirar el consentimiento:</strong> puedes desactivar las notificaciones o el permiso de ubicación en cualquier momento en los ajustes de tu teléfono. Algunas funciones, como las alertas o la configuración de la cámara, no funcionarán sin ellos.',
          ],
          'Según dónde vivas, incluidos California y otros estados de EE. UU., puedes tener derecho a saber qué información personal tenemos sobre ti, a obtener una copia, a corregirla o a eliminarla, y derecho a no recibir un trato diferente por ejercer estos derechos. Para hacer una solicitud, escribe a {email}. Tendremos que verificar tu identidad y responderemos dentro del plazo que exige la ley. También puedes pedir a un agente autorizado que haga la solicitud por ti.',
        ],
      },
      {
        heading: 'Seguridad',
        blocks: [
          'La información entre la app, la cámara y nuestros servidores viaja cifrada (HTTPS), y tomamos medidas razonables para protegerla. Ningún sistema es completamente seguro, por lo que no podemos garantizar una seguridad absoluta; si sabemos de una brecha de seguridad que te afecte, te lo notificaremos según lo exija la ley.',
        ],
      },
      {
        heading: 'Menores',
        blocks: [
          'El Servicio no está dirigido a menores de 13 años y no recopilamos a sabiendas información personal de ellos. Si crees que un menor nos ha dado información, contáctanos y la eliminaremos.',
        ],
      },
      {
        heading: 'Do Not Track (No rastrear)',
        blocks: [
          'No rastreamos a los usuarios en sitios web ni apps de terceros, por lo que no respondemos de forma distinta a las señales “Do Not Track” del navegador.',
        ],
      },
      {
        heading: 'Dónde se almacena la información',
        blocks: [
          'Tu información se almacena en servidores operados por nosotros o por nuestros proveedores de servicios, que pueden estar en un país distinto al tuyo. Al usar el Servicio, entiendes que tu información puede transferirse a esos países y procesarse en ellos.',
        ],
      },
      {
        heading: 'Cambios a esta política',
        blocks: [
          'Publicaremos cualquier cambio en esta página y actualizaremos la fecha que aparece arriba. Si los cambios son importantes, también te avisaremos en la app o por correo.',
        ],
      },
      {
        heading: 'Contacto',
        blocks: ['{company} — {email}'],
      },
    ],
  },
  deleteAccount: {
    title: 'Elimina tu cuenta de Rodent Eye',
    description: 'Cómo eliminar tu cuenta y tus datos de Rodent Eye, con o sin la app.',
    emailSubject: 'Delete my Rodent Eye account',
    button: 'Solicitar la eliminación por correo',
    intro: [
      'Puedes eliminar tu cuenta de {app} (app de {company}) en cualquier momento, desde la app o sin ella. Eliminar tu cuenta es permanente y no se puede deshacer.',
    ],
    sections: [
      {
        heading: 'Sin la app',
        blocks: [
          'Envía un correo a {email} <strong>desde el correo electrónico de tu cuenta</strong>, con el asunto “Delete my Rodent Eye account” y tu nombre de usuario. Puedes usar el botón de arriba.',
          'Por tu seguridad, podemos pedirte que confirmes la solicitud. Eliminaremos tu cuenta en un plazo de 30 días y te avisaremos por correo cuando esté hecho.',
        ],
      },
      {
        heading: 'En la app',
        blocks: [
          [
            'Abre Rodent Eye e inicia sesión.',
            'Ve a <strong>Perfil</strong>.',
            'Toca <strong>Eliminar cuenta (permanentemente)</strong> y confirma.',
          ],
          'Tu cuenta se elimina de inmediato y se cierra tu sesión en ese teléfono.',
        ],
      },
      {
        heading: 'Qué eliminamos',
        blocks: [
          [
            'La información de tu cuenta: nombre, nombre de usuario, correo electrónico, número de teléfono y contraseña.',
            'Tus direcciones y cámaras.',
            'Todos los eventos de las cámaras. Desaparecen de tu cuenta de inmediato; los archivos de fotos y videos guardados en nuestros servidores se eliminan después, en un proceso aparte.',
            'Tus notificaciones y el vínculo entre tu teléfono y tu cuenta.',
            'En el teléfono que usas para eliminarla, las contraseñas de WiFi guardadas por la app.',
          ],
          'Tus cámaras quedan liberadas, así que pueden configurarse de nuevo en otra cuenta.',
        ],
      },
      {
        heading: 'Qué conservamos',
        blocks: [
          'Por motivos de seguridad, prevención de fraudes y razones legales, podemos conservar por un tiempo limitado los registros de los servidores y los registros de los correos que te enviamos (dirección de correo, asunto y fecha). Estos registros no se usan para ningún otro fin.',
          'Más detalles en nuestra <a href="{privacyUrl}">política de privacidad</a>.',
        ],
      },
    ],
  },
  terms: {
    title: 'Términos de uso',
    description: 'Los términos que se aplican cuando usas la app, la cámara y el sitio web de Rodent Eye.',
    intro: [
      'Estos términos son un acuerdo entre tú y {company} (“nosotros”) sobre tu uso de la app móvil {app}, la cámara {app} y este sitio web (el “Servicio”). Al crear una cuenta o usar el Servicio, aceptas estos términos. Si no estás de acuerdo, no uses el Servicio.',
    ],
    sections: [
      {
        heading: 'El Servicio',
        blocks: [
          '{app} te ayuda a saber si hay actividad de roedores en los lugares que eliges. La cámara detecta movimiento y envía fotos, videos y alertas a la app.',
          '<strong>{app} es una herramienta de monitoreo, no un servicio de control de plagas.</strong> No elimina ni previene plagas, y es posible que no detecte todos los animales ni todos los movimientos. Las detecciones pueden verse afectadas por el lugar donde se coloca la cámara, su batería y la conexión WiFi. No dependas de ella como única forma de proteger tu casa, tu familia, tus mascotas o tus alimentos.',
        ],
      },
      {
        heading: 'Tu cuenta',
        blocks: [
          [
            'Debes tener al menos 18 años, o la mayoría de edad del lugar donde vives, para crear una cuenta.',
            'Proporciona información exacta y mantén tu contraseña en privado. Eres responsable de lo que ocurra en tu cuenta.',
            'Avísanos de inmediato a {email} si crees que otra persona está usando tu cuenta.',
          ],
        ],
      },
      {
        heading: 'Uso responsable de la cámara',
        blocks: [
          [
            'Instala las cámaras solo en lugares que te pertenecen o que tienes permiso para vigilar.',
            'No apuntes las cámaras a zonas donde las personas esperan privacidad, y cumple las leyes del lugar donde vives sobre la grabación de video.',
            'No uses el Servicio para nada ilegal, para dañar a otros ni para intentar vulnerarlo, copiarlo o aplicarle ingeniería inversa.',
          ],
        ],
      },
      {
        heading: 'Empresas de control de plagas',
        blocks: [
          'Las empresas que aparecen en la app son negocios independientes. No las empleamos, no recomendamos a ninguna en particular ni garantizamos su trabajo. Cualquier acuerdo que hagas con ellas es entre tú y la empresa.',
        ],
      },
      {
        heading: 'Disponibilidad y cambios',
        blocks: [
          'Trabajamos para mantener el Servicio en funcionamiento, pero a veces puede no estar disponible, por ejemplo durante el mantenimiento o por problemas con internet, el WiFi o nuestros proveedores. Podemos cambiar, agregar o quitar funciones. Podemos actualizar el software de la cámara para corregir problemas o mejorarlo.',
        ],
      },
      {
        heading: 'Propiedad',
        blocks: [
          'La app, el software de la cámara y el nombre y el logotipo de {app} pertenecen a {company}. Te otorgamos una licencia personal e intransferible para usar la app mientras tengas una cuenta. Las fotos y los videos de tus cámaras son tuyos; nos permites almacenarlos y procesarlos solo para prestarte el Servicio.',
        ],
      },
      {
        heading: 'Fin del uso',
        blocks: [
          'Puedes dejar de usar el Servicio y eliminar tu cuenta en cualquier momento (consulta <a href="{deleteUrl}">Eliminar cuenta</a>). Podemos suspender o cerrar las cuentas que incumplan estos términos.',
        ],
      },
      {
        heading: 'Exención de garantías y limitación de responsabilidad',
        blocks: [
          'El Servicio se ofrece “tal cual” y “según disponibilidad”. En la medida en que lo permita la ley, no otorgamos garantías de ningún tipo, incluida la de que el Servicio detectará toda la actividad de plagas o funcionará sin interrupciones.',
          'En la medida en que lo permita la ley, no somos responsables de daños indirectos o consecuentes, ni de los daños causados por plagas, y nuestra responsabilidad total por cualquier reclamación relacionada con el Servicio se limita al monto que nos pagaste por él en los 12 meses anteriores a la reclamación. Algunos lugares no permiten estos límites, por lo que es posible que no se apliquen en tu caso.',
        ],
      },
      {
        heading: 'Apple y Google',
        blocks: [
          'Si descargaste la app desde App Store o Google Play, también se aplican sus términos. Apple y Google no son responsables de la app ni de su soporte. Si obtuviste la app desde App Store, Apple y sus subsidiarias son terceros beneficiarios de estos términos.',
        ],
      },
      {
        heading: 'Ley aplicable',
        blocks: ['Estos términos se rigen por las leyes del Estado de Florida, EE. UU., sin tener en cuenta sus normas sobre conflictos de leyes.'],
      },
      {
        heading: 'Cambios a estos términos',
        blocks: [
          'Publicaremos los cambios en esta página y actualizaremos la fecha que aparece arriba. Si los cambios son importantes, te avisaremos en la app o por correo. Si sigues usando el Servicio después de un cambio, aceptas los nuevos términos.',
        ],
      },
      {
        heading: 'Contacto',
        blocks: ['{company} — {email}'],
      },
    ],
  },
};

export default es;
