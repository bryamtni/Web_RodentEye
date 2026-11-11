// Fuente de todos los textos del sitio. Los demás idiomas traducen este archivo.
// Antes de cambiar algo, lee docs/CONTENT.md (público, marca, requisitos de las tiendas).
import type { Dict } from '../types';

const en: Dict = {
  nav: {
    home: 'Home',
    support: 'Support',
    privacy: 'Privacy',
    terms: 'Terms',
    deleteAccount: 'Delete account',
    language: 'Language',
  },
  common: {
    tagline: 'Pest monitoring',
    draft: 'Draft — pending legal review. This is not the final text.',
    updated: 'Last updated',
    rights: 'All rights reserved.',
    translationNote: '',
    soon: 'Coming soon',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    skip: 'Skip to content',
    arrow: '→',
  },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist.',
    back: 'Back to home',
  },
  home: {
    title: 'Rodent Eye — Know if you have rodents at home',
    description:
      'A smart camera that watches for rodent activity in your home and sends photos and alerts to your phone, so you know when it is time to call a professional.',
    eyebrow: 'Rodent monitoring for your home',
    h1: 'Think you have rodents?',
    h1Accent: 'Find out for sure.',
    lead:
      'Droppings in the pantry, scratching in the walls, a quick shadow in the garage. Place a Rodent Eye camera where you saw the signs and it will send photos and an alert to your phone when something moves.',
    ctaPrimary: 'Get the app',
    ctaSecondary: 'How it works',
    howTitle: 'How it works',
    steps: [
      {
        title: 'Place the camera',
        body: 'Put it where you noticed signs of activity and connect it to your home WiFi with the app’s step-by-step setup.',
      },
      {
        title: 'It watches for you',
        body: 'When the camera detects movement, it takes photos and a short video and uploads them securely.',
      },
      {
        title: 'You get an alert',
        body: 'A notification arrives on your phone. Open it to see what the camera saw and when.',
      },
      {
        title: 'Call a pro if it’s real',
        body: 'If the camera confirms activity, the app shows pest control companies near your address.',
      },
    ],
    featuresTitle: 'Everything in one app',
    features: [
      { title: 'Instant alerts', body: 'A push notification every time the camera detects movement.' },
      { title: 'Photos and video', body: 'See exactly what each camera captured, event by event.' },
      { title: 'More than one place', body: 'Organize your cameras by address: your home, a rental, a cabin.' },
      { title: 'Guided setup', body: 'Connect the camera to your WiFi from your phone. No technician needed.' },
      { title: 'Event history', body: 'Look back at recent activity to see when and where it happens.' },
      { title: 'Local professionals', body: 'Find pest control companies near you when you need help.' },
    ],
    downloadTitle: 'Get the Rodent Eye app',
    downloadLead: 'For iPhone and Android.',
    supportLink: 'Questions? Visit support',
  },
  support: {
    title: 'Support',
    description: 'Help with the Rodent Eye app and camera: setup, notifications and your account.',
    lead: 'Find quick answers below. If you still need help, email us and we will get back to you.',
    contactTitle: 'Contact us',
    contactBody: 'Please include your username and, if your question is about a camera, its serial number.',
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        q: 'How do I connect a camera to my WiFi?',
        a: 'In the app, tap the “+” button in the bottom menu and follow the steps. Your phone connects to the camera and sends it your WiFi name and password. The camera works with <strong>2.4 GHz</strong> WiFi networks.',
      },
      {
        q: 'Why does the app ask for my location?',
        a: 'Your phone only lets apps read the name of the WiFi network you are connected to if they have location permission. Rodent Eye uses it during camera setup to find the camera’s network. The app does not track or store your phone’s location.',
      },
      {
        q: 'I am not receiving notifications',
        a: 'Check that notifications for Rodent Eye are turned on in your phone’s settings and that you are signed in. If you reinstalled the app, sign in again so your phone is registered for alerts.',
      },
      {
        q: 'My camera appears offline',
        a: 'Make sure the camera has power and that your WiFi is working. If you changed your router or your WiFi password, set the camera up again from the app.',
      },
      {
        q: 'I forgot my password',
        a: 'On the sign-in screen, tap “Forgot password?” and enter your username and email. We will email you a 6-digit code to create a new password. The code expires after 15 minutes.',
      },
      {
        q: 'The camera detected a rodent. What now?',
        a: 'Review the photos and video to confirm it. If there is activity, the app shows pest control companies near your address that you can call or email directly from your phone.',
      },
      {
        q: 'How do I delete my account?',
        a: 'You can do it in the app or ask us by email. See the steps on the <a href="{deleteUrl}">account deletion page</a>.',
      },
    ],
  },
  privacy: {
    title: 'Privacy policy',
    description: 'What data Rodent Eye collects, how it is used and shared, how long it is kept and how to delete it.',
    intro: [
      'This privacy policy explains how {company} (“we”, “us”) collects, uses and shares information when you use the {app} mobile app, the {app} camera and this website (together, the “Service”).',
      'Questions about this policy or your data: {email}.',
    ],
    sections: [
      {
        heading: 'Information we collect',
        blocks: [
          '<strong>Information you give us</strong>',
          [
            '<strong>Account:</strong> first and last name, username, email address, phone number, password and preferred language.',
            '<strong>Addresses:</strong> the name and street address of each place you monitor, including ZIP code, map coordinates and time zone. When you type an address, the app uses Google’s address search to find it.',
            '<strong>Cameras:</strong> the name and location you give each camera (for example “Garage”) and its serial number.',
            '<strong>Support messages:</strong> anything you send us by email.',
          ],
          '<strong>Information from your camera</strong>',
          [
            '<strong>Events:</strong> when the camera detects movement it sends us photos and short videos of the area it is pointed at, with the date and time.',
            '<strong>Device status:</strong> battery level, WiFi signal strength, temperature, sensor readings and software version.',
          ],
          '<strong>Information from your phone</strong>',
          [
            '<strong>Notifications:</strong> to send you alerts, our notification provider registers your phone and links it to your account.',
            '<strong>Location permission:</strong> used only during camera setup to read the name of your WiFi network. We do not collect or store your phone’s location.',
            '<strong>WiFi password:</strong> sent directly from your phone to the camera during setup. It is not sent to our servers. If setup succeeds, the app saves it in your phone’s secure storage so you do not need to type it again.',
            '<strong>Phone camera:</strong> on iPhone you can scan the barcode on the camera’s label. The image is processed on your phone and is not sent to us.',
          ],
          '<strong>Usage records:</strong> sign-in dates, when you tap to contact a pest control company from the app, records of the emails we send you (such as password reset codes) and technical logs from our servers.',
          'We do not use advertising or analytics tools, and we do not track you across other apps or websites.',
        ],
      },
      {
        heading: 'How we use information',
        blocks: [
          [
            'To provide the Service: show your cameras’ events and send you alerts when they happen.',
            'To set up and maintain your cameras, including software updates.',
            'To show pest control companies near your address (we use only the ZIP code).',
            'To manage your account, help you reset your password and answer your support requests.',
            'To keep the Service secure, prevent misuse and fix problems.',
            'To comply with legal obligations.',
          ],
        ],
      },
      {
        heading: 'How we share information',
        blocks: [
          'We do not sell your personal information, and we do not share it for targeted advertising. We share it only with service providers that help us run the Service, and only what they need:',
          [
            '<strong>OneSignal</strong> sends push notifications. It receives an identifier for your account and phone, and the content of each alert (camera name, location and a photo of the event). It delivers notifications through Apple and Google.',
            '<strong>Google Maps Platform</strong> provides address search and time zones. It receives the text you type in the address search and the coordinates of the address.',
            '<strong>Mailchimp Transactional (Mandrill)</strong> sends our emails, such as password reset codes. It receives your name and email address.',
          ],
          'These providers may only use the information to provide their services to us, and must protect it in line with this policy and the law.',
          'The pest control companies shown in the app are independent businesses. We do not send them your information: if you choose to call or email one, you contact them directly from your phone.',
          'We may also disclose information if required by law, to protect the rights and safety of our users or others, or as part of a merger, acquisition or sale of assets, in which case this policy will continue to apply.',
        ],
      },
      {
        heading: 'How long we keep information',
        blocks: [
          'We keep your account information, addresses, cameras, and event photos and videos while your account is active.',
          'When you delete your account, we delete that information as described on the <a href="{deleteUrl}">account deletion page</a>. We may keep limited records for a longer time when needed for security, to prevent fraud or to comply with the law, such as server logs and records of the emails we sent you.',
        ],
      },
      {
        heading: 'Your choices and rights',
        blocks: [
          [
            '<strong>Access and correct:</strong> you can see and edit your information in the app, under Profile.',
            '<strong>Delete:</strong> you can delete your account in the app or ask us to do it. See <a href="{deleteUrl}">Delete account</a>.',
            '<strong>Withdraw consent:</strong> you can turn off notifications or location permission at any time in your phone’s settings. Some features, like alerts or camera setup, will not work without them.',
          ],
          'Depending on where you live, including California and other U.S. states, you may have the right to know what personal information we have about you, to get a copy, to correct it or to delete it, and the right not to be treated differently for using these rights. To make a request, email {email}. We will need to verify your identity, and we will answer within the time required by law. You can also ask an authorized agent to make a request for you.',
        ],
      },
      {
        heading: 'Security',
        blocks: [
          'Information between the app, the camera and our servers travels encrypted (HTTPS), and we take reasonable measures to protect it. No system is completely secure, so we cannot guarantee absolute security; if we learn of a breach that affects you, we will notify you as required by law.',
        ],
      },
      {
        heading: 'Children',
        blocks: [
          'The Service is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has given us information, contact us and we will delete it.',
        ],
      },
      {
        heading: 'Do Not Track',
        blocks: [
          'We do not track users across third-party websites or apps, so we do not respond differently to “Do Not Track” browser signals.',
        ],
      },
      {
        heading: 'Where information is stored',
        blocks: [
          'Your information is stored on servers operated by us or by our service providers, which may be in a country other than yours. By using the Service, you understand that your information may be transferred to and processed in those countries.',
        ],
      },
      {
        heading: 'Changes to this policy',
        blocks: [
          'We will post any changes on this page and update the date at the top. If the changes are significant, we will also let you know in the app or by email.',
        ],
      },
      {
        heading: 'Contact',
        blocks: ['{company} — {email}'],
      },
    ],
  },
  deleteAccount: {
    title: 'Delete your Rodent Eye account',
    description: 'How to delete your Rodent Eye account and data, with or without the app.',
    emailSubject: 'Delete my Rodent Eye account',
    button: 'Request deletion by email',
    intro: [
      'You can delete your {app} account (app by {company}) at any time, from the app or without it. Deleting your account is permanent and cannot be undone.',
    ],
    sections: [
      {
        heading: 'Without the app',
        blocks: [
          'Send an email to {email} <strong>from the email address on your account</strong>, with the subject “Delete my Rodent Eye account” and your username. You can use the button above.',
          'For your security, we may ask you to confirm the request. We will delete your account within 30 days and email you when it is done.',
        ],
      },
      {
        heading: 'In the app',
        blocks: [
          [
            'Open Rodent Eye and sign in.',
            'Go to <strong>Profile</strong>.',
            'Tap <strong>Delete Account (permanently)</strong> and confirm.',
          ],
          'Your account is deleted right away and you are signed out on that phone.',
        ],
      },
      {
        heading: 'What we delete',
        blocks: [
          [
            'Your account information: name, username, email, phone number and password.',
            'Your addresses and cameras.',
            'All camera events, including their photos and videos.',
            'Your notifications and the link between your phone and your account.',
            'On the phone you use to delete it, the WiFi passwords saved by the app.',
          ],
          'Your cameras are released, so they can be set up again on a new account.',
        ],
      },
      {
        heading: 'What we keep',
        blocks: [
          'For security, fraud prevention and legal reasons we may keep, for a limited time, server logs and records of the emails we sent you (email address, subject and date). These records are not used for any other purpose.',
          'More details in our <a href="{privacyUrl}">privacy policy</a>.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of use',
    description: 'The terms that apply when you use the Rodent Eye app, camera and website.',
    intro: [
      'These terms are an agreement between you and {company} (“we”, “us”) about your use of the {app} mobile app, the {app} camera and this website (the “Service”). By creating an account or using the Service, you accept these terms. If you do not agree, do not use the Service.',
    ],
    sections: [
      {
        heading: 'The Service',
        blocks: [
          '{app} helps you find out whether there is rodent activity in places you choose. The camera detects movement and sends photos, videos and alerts to the app.',
          '<strong>{app} is a monitoring tool, not a pest control service.</strong> It does not remove or prevent pests, and it may not detect every animal or every movement. Detections can be affected by where the camera is placed, its battery and the WiFi connection. Do not rely on it as your only way to protect your home, your family, your pets or your food.',
        ],
      },
      {
        heading: 'Your account',
        blocks: [
          [
            'You must be at least 18 years old, or the age of majority where you live, to create an account.',
            'Give accurate information and keep your password private. You are responsible for what happens in your account.',
            'Tell us right away at {email} if you think someone else is using your account.',
          ],
        ],
      },
      {
        heading: 'Using the camera responsibly',
        blocks: [
          [
            'Install cameras only in places you own or are allowed to monitor.',
            'Do not point cameras at areas where people expect privacy, and follow the laws where you live about recording video.',
            'Do not use the Service for anything illegal, to harm others, or to try to break, copy or reverse-engineer it.',
          ],
        ],
      },
      {
        heading: 'Pest control companies',
        blocks: [
          'The companies shown in the app are independent businesses. We do not employ them, recommend a particular one or guarantee their work. Any agreement you make with them is between you and the company.',
        ],
      },
      {
        heading: 'Availability and changes',
        blocks: [
          'We work to keep the Service running, but it may sometimes be unavailable, for example during maintenance or because of problems with the internet, WiFi or our providers. We may change, add or remove features. We may update the camera’s software to fix problems or improve it.',
        ],
      },
      {
        heading: 'Ownership',
        blocks: [
          'The app, the camera software, the {app} name and logo belong to {company}. We give you a personal, non-transferable license to use the app while you have an account. Photos and videos from your cameras are yours; you let us store and process them only to provide the Service to you.',
        ],
      },
      {
        heading: 'Ending your use',
        blocks: [
          'You can stop using the Service and delete your account at any time (see <a href="{deleteUrl}">Delete account</a>). We may suspend or close accounts that break these terms.',
        ],
      },
      {
        heading: 'Disclaimers and limitation of liability',
        blocks: [
          'The Service is provided “as is” and “as available”. To the extent allowed by law, we do not give warranties of any kind, including that the Service will detect all pest activity or work without interruption.',
          'To the extent allowed by law, we are not liable for indirect or consequential damages, or for damage caused by pests, and our total liability for any claim related to the Service is limited to the amount you paid us for it in the 12 months before the claim. Some places do not allow these limits, so they may not apply to you.',
        ],
      },
      {
        heading: 'Apple and Google',
        blocks: [
          'If you downloaded the app from the App Store or Google Play, their terms also apply. Apple and Google are not responsible for the app or its support. If you got the app from the App Store, Apple and its subsidiaries are third-party beneficiaries of these terms.',
        ],
      },
      {
        heading: 'Governing law',
        blocks: ['These terms are governed by the laws of the State of Florida, USA, without regard to its conflict of law rules.'],
      },
      {
        heading: 'Changes to these terms',
        blocks: [
          'We will post changes on this page and update the date at the top. If the changes are significant, we will let you know in the app or by email. If you keep using the Service after a change, you accept the new terms.',
        ],
      },
      {
        heading: 'Contact',
        blocks: ['{company} — {email}'],
      },
    ],
  },
};

export default en;
