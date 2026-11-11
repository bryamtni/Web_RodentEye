import type { Dict } from '../types';

const fr: Dict = {
  nav: {
    home: 'Accueil',
    support: 'Assistance',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    deleteAccount: 'Supprimer le compte',
    language: 'Langue',
  },
  common: {
    tagline: 'Surveillance des nuisibles',
    draft: 'Brouillon en attente de révision juridique. Ce n’est pas le texte définitif.',
    updated: 'Dernière mise à jour',
    rights: 'Tous droits réservés.',
    translationNote:
      'Cette traduction est fournie pour votre commodité. En cas de divergence avec la version anglaise, la version anglaise prévaut.',
    soon: 'Bientôt disponible',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    skip: 'Aller au contenu',
    arrow: '→',
  },
  notFound: {
    title: 'Page introuvable',
    body: 'La page que vous recherchez n’existe pas.',
    back: 'Retour à l’accueil',
  },
  home: {
    title: 'Rodent Eye — Sachez si vous avez des rongeurs chez vous',
    description:
      'Une caméra intelligente qui surveille l’activité des rongeurs dans votre maison et envoie des photos et des alertes sur votre téléphone, pour que vous sachiez quand faire appel à un professionnel.',
    eyebrow: 'Surveillance des rongeurs pour votre maison',
    h1: 'Vous pensez avoir des rongeurs ?',
    h1Accent: 'Ayez-en le cœur net.',
    lead:
      'Des crottes dans le garde-manger, des grattements dans les murs, une ombre furtive dans le garage. Placez une caméra Rodent Eye là où vous avez vu ces signes : elle vous enverra des photos et une alerte sur votre téléphone dès que quelque chose bouge.',
    ctaPrimary: 'Télécharger l’app',
    ctaSecondary: 'Comment ça marche',
    howTitle: 'Comment ça marche',
    steps: [
      {
        title: 'Placez la caméra',
        body: 'Installez-la là où vous avez remarqué des signes d’activité et connectez-la au Wi-Fi de votre maison grâce à la configuration pas à pas de l’app.',
      },
      {
        title: 'Elle surveille pour vous',
        body: 'Quand la caméra détecte un mouvement, elle prend des photos et une courte vidéo et les envoie de façon sécurisée.',
      },
      {
        title: 'Vous recevez une alerte',
        body: 'Une notification arrive sur votre téléphone. Ouvrez-la pour voir ce que la caméra a vu, et quand.',
      },
      {
        title: 'Si c’est confirmé, appelez un pro',
        body: 'Si la caméra confirme une activité, l’app vous montre des entreprises de lutte antiparasitaire près de votre adresse.',
      },
    ],
    featuresTitle: 'Tout dans une seule app',
    features: [
      { title: 'Alertes instantanées', body: 'Une notification push chaque fois que la caméra détecte un mouvement.' },
      { title: 'Photos et vidéo', body: 'Voyez exactement ce que chaque caméra a capturé, événement par événement.' },
      { title: 'Plusieurs lieux', body: 'Organisez vos caméras par adresse : votre maison, un logement en location, un chalet.' },
      { title: 'Configuration guidée', body: 'Connectez la caméra à votre Wi-Fi depuis votre téléphone. Aucun technicien nécessaire.' },
      { title: 'Historique des événements', body: 'Consultez l’activité récente pour voir quand et où elle se produit.' },
      { title: 'Professionnels près de chez vous', body: 'Trouvez des entreprises de lutte antiparasitaire près de chez vous quand vous avez besoin d’aide.' },
    ],
    downloadTitle: 'Téléchargez l’app Rodent Eye',
    downloadLead: 'Pour iPhone et Android.',
    supportLink: 'Des questions ? Consultez l’assistance',
  },
  support: {
    title: 'Assistance',
    description: 'Aide pour l’app et la caméra Rodent Eye : configuration, notifications et votre compte.',
    lead: 'Vous trouverez ci-dessous des réponses rapides. Si vous avez encore besoin d’aide, écrivez-nous et nous vous répondrons.',
    contactTitle: 'Nous contacter',
    contactBody: 'Merci d’indiquer votre nom d’utilisateur et, si votre question concerne une caméra, son numéro de série.',
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'Comment connecter une caméra à mon Wi-Fi ?',
        a: 'Dans l’app, touchez le bouton « + » du menu du bas et suivez les étapes. Votre téléphone se connecte à la caméra et lui envoie le nom et le mot de passe de votre Wi-Fi. La caméra fonctionne avec les réseaux Wi-Fi <strong>2.4 GHz</strong>.',
      },
      {
        q: 'Pourquoi l’app me demande-t-elle ma position ?',
        a: 'Votre téléphone ne permet aux apps de lire le nom du réseau Wi-Fi auquel vous êtes connecté que si elles ont l’autorisation de localisation. Rodent Eye l’utilise pendant la configuration de la caméra pour trouver le réseau de la caméra. L’app ne suit pas et n’enregistre pas la position de votre téléphone.',
      },
      {
        q: 'Je ne reçois pas de notifications',
        a: 'Vérifiez que les notifications de Rodent Eye sont activées dans les réglages de votre téléphone et que vous êtes connecté à votre compte. Si vous avez réinstallé l’app, connectez-vous à nouveau pour que votre téléphone soit enregistré pour recevoir les alertes.',
      },
      {
        q: 'Ma caméra apparaît hors ligne',
        a: 'Vérifiez que la caméra est alimentée et que votre Wi-Fi fonctionne. Si vous avez changé de routeur ou de mot de passe Wi-Fi, configurez à nouveau la caméra depuis l’app.',
      },
      {
        q: 'J’ai oublié mon mot de passe',
        a: 'Sur l’écran de connexion, touchez « Mot de passe oublié ? » et saisissez votre nom d’utilisateur et votre adresse e-mail. Nous vous enverrons par e-mail un code à 6 chiffres pour créer un nouveau mot de passe. Le code expire au bout de 15 minutes.',
      },
      {
        q: 'La caméra a détecté un rongeur. Que faire ?',
        a: 'Regardez les photos et la vidéo pour le confirmer. S’il y a de l’activité, l’app vous montre des entreprises de lutte antiparasitaire près de votre adresse, que vous pouvez appeler ou contacter par e-mail directement depuis votre téléphone.',
      },
      {
        q: 'Comment supprimer mon compte ?',
        a: 'Vous pouvez le faire dans l’app ou nous le demander par e-mail. Consultez les étapes sur la <a href="{deleteUrl}">page de suppression de compte</a>.',
      },
    ],
  },
  privacy: {
    title: 'Politique de confidentialité',
    description: 'Quelles données Rodent Eye collecte, comment elles sont utilisées et partagées, combien de temps elles sont conservées et comment les supprimer.',
    intro: [
      'Cette politique de confidentialité explique comment {company} (« nous ») collecte, utilise et partage des informations lorsque vous utilisez l’application mobile {app}, la caméra {app} et ce site web (ensemble, le « Service »).',
      'Questions sur cette politique ou sur vos données : {email}.',
    ],
    sections: [
      {
        heading: 'Informations que nous collectons',
        blocks: [
          '<strong>Informations que vous nous fournissez</strong>',
          [
            '<strong>Compte :</strong> prénom et nom, nom d’utilisateur, adresse e-mail, numéro de téléphone, mot de passe et langue préférée.',
            '<strong>Adresses :</strong> le nom et l’adresse postale de chaque lieu que vous surveillez, y compris le code postal, les coordonnées sur la carte et le fuseau horaire. Lorsque vous saisissez une adresse, l’app utilise la recherche d’adresses de Google pour la trouver.',
            '<strong>Caméras :</strong> le nom et l’emplacement que vous donnez à chaque caméra (par exemple « Garage ») et son numéro de série.',
            '<strong>Messages à l’assistance :</strong> tout ce que vous nous envoyez par e-mail.',
          ],
          '<strong>Informations provenant de votre caméra</strong>',
          [
            '<strong>Événements :</strong> lorsque la caméra détecte un mouvement, elle nous envoie des photos et de courtes vidéos de la zone vers laquelle elle est orientée, avec la date et l’heure.',
            '<strong>État de l’appareil :</strong> niveau de batterie, puissance du signal Wi-Fi, température, relevés des capteurs et version du logiciel.',
          ],
          '<strong>Informations provenant de votre téléphone</strong>',
          [
            '<strong>Notifications :</strong> pour vous envoyer des alertes, notre fournisseur de notifications enregistre votre téléphone et l’associe à votre compte.',
            '<strong>Autorisation de localisation :</strong> utilisée uniquement pendant la configuration de la caméra pour lire le nom de votre réseau Wi-Fi. Nous ne collectons ni n’enregistrons la position de votre téléphone.',
            '<strong>Mot de passe Wi-Fi :</strong> envoyé directement de votre téléphone à la caméra pendant la configuration. Il n’est pas envoyé à nos serveurs. Si la configuration réussit, l’app l’enregistre dans le stockage sécurisé de votre téléphone pour que vous n’ayez pas à le saisir de nouveau.',
            '<strong>Appareil photo du téléphone :</strong> sur iPhone, vous pouvez scanner le code-barres de l’étiquette de la caméra. L’image est traitée sur votre téléphone et ne nous est pas envoyée.',
          ],
          '<strong>Données d’utilisation :</strong> dates de connexion, moments où vous touchez pour contacter une entreprise de lutte antiparasitaire depuis l’app, traces des e-mails que nous vous envoyons (comme les codes de réinitialisation du mot de passe) et journaux techniques de nos serveurs.',
          'Nous n’utilisons aucun outil de publicité ni d’analyse, et nous ne vous suivons pas sur d’autres apps ou sites web.',
        ],
      },
      {
        heading: 'Comment nous utilisons les informations',
        blocks: [
          [
            'Pour fournir le Service : afficher les événements de vos caméras et vous envoyer des alertes lorsqu’ils se produisent.',
            'Pour configurer et entretenir vos caméras, y compris les mises à jour logicielles.',
            'Pour vous montrer des entreprises de lutte antiparasitaire près de votre adresse (nous utilisons uniquement le code postal).',
            'Pour gérer votre compte, vous aider à réinitialiser votre mot de passe et répondre à vos demandes d’assistance.',
            'Pour assurer la sécurité du Service, empêcher les abus et corriger les problèmes.',
            'Pour respecter nos obligations légales.',
          ],
        ],
      },
      {
        heading: 'Comment nous partageons les informations',
        blocks: [
          'Nous ne vendons pas vos informations personnelles et nous ne les partageons pas à des fins de publicité ciblée. Nous les partageons uniquement avec des prestataires de services qui nous aident à faire fonctionner le Service, et seulement ce dont ils ont besoin :',
          [
            '<strong>OneSignal</strong> envoie les notifications push. Il reçoit un identifiant de votre compte et de votre téléphone, ainsi que le contenu de chaque alerte (nom de la caméra, emplacement et une photo de l’événement). Il transmet les notifications par l’intermédiaire d’Apple et de Google.',
            '<strong>Google Maps Platform</strong> fournit la recherche d’adresses et les fuseaux horaires. Il reçoit le texte que vous saisissez dans la recherche d’adresses et les coordonnées de l’adresse.',
            '<strong>Mailchimp Transactional (Mandrill)</strong> envoie nos e-mails, comme les codes de réinitialisation du mot de passe. Il reçoit votre nom et votre adresse e-mail.',
          ],
          'Ces prestataires ne peuvent utiliser les informations que pour nous fournir leurs services et doivent les protéger conformément à cette politique et à la loi.',
          'Les entreprises de lutte antiparasitaire affichées dans l’app sont des entreprises indépendantes. Nous ne leur envoyons pas vos informations : si vous choisissez d’appeler l’une d’elles ou de lui écrire par e-mail, vous la contactez directement depuis votre téléphone.',
          'Nous pouvons également divulguer des informations si la loi l’exige, pour protéger les droits et la sécurité de nos utilisateurs ou d’autres personnes, ou dans le cadre d’une fusion, d’une acquisition ou d’une cession d’actifs, auquel cas cette politique continuera de s’appliquer.',
        ],
      },
      {
        heading: 'Durée de conservation des informations',
        blocks: [
          'Nous conservons les informations de votre compte, vos adresses, vos caméras ainsi que les photos et vidéos des événements tant que votre compte est actif.',
          'Lorsque vous supprimez votre compte, nous supprimons ces informations comme décrit sur la <a href="{deleteUrl}">page de suppression de compte</a>. Nous pouvons conserver des données limitées plus longtemps lorsque cela est nécessaire pour des raisons de sécurité, pour prévenir la fraude ou pour respecter la loi, comme les journaux des serveurs et les traces des e-mails que nous vous avons envoyés.',
        ],
      },
      {
        heading: 'Vos choix et vos droits',
        blocks: [
          [
            '<strong>Accès et rectification :</strong> vous pouvez consulter et modifier vos informations dans l’app, dans Profil.',
            '<strong>Suppression :</strong> vous pouvez supprimer votre compte dans l’app ou nous demander de le faire. Voir <a href="{deleteUrl}">Supprimer le compte</a>.',
            '<strong>Retrait du consentement :</strong> vous pouvez désactiver les notifications ou l’autorisation de localisation à tout moment dans les réglages de votre téléphone. Certaines fonctions, comme les alertes ou la configuration de la caméra, ne fonctionneront pas sans elles.',
          ],
          'Selon l’endroit où vous vivez, notamment en Californie et dans d’autres États des États-Unis, vous pouvez avoir le droit de savoir quelles informations personnelles nous détenons à votre sujet, d’en obtenir une copie, de les faire rectifier ou supprimer, ainsi que le droit de ne pas être traité différemment pour avoir exercé ces droits. Pour faire une demande, écrivez à {email}. Nous devrons vérifier votre identité et nous répondrons dans le délai prévu par la loi. Vous pouvez également demander à un mandataire autorisé de faire la demande pour vous.',
        ],
      },
      {
        heading: 'Sécurité',
        blocks: [
          'Les informations échangées entre l’app, la caméra et nos serveurs circulent de façon chiffrée (HTTPS), et nous prenons des mesures raisonnables pour les protéger. Aucun système n’est totalement sûr, nous ne pouvons donc pas garantir une sécurité absolue ; si nous avons connaissance d’une violation qui vous concerne, nous vous en informerons conformément à la loi.',
        ],
      },
      {
        heading: 'Enfants',
        blocks: [
          'Le Service ne s’adresse pas aux enfants de moins de 13 ans, et nous ne collectons pas sciemment d’informations personnelles les concernant. Si vous pensez qu’un enfant nous a fourni des informations, contactez-nous et nous les supprimerons.',
        ],
      },
      {
        heading: 'Do Not Track (Ne pas suivre)',
        blocks: [
          'Nous ne suivons pas les utilisateurs sur les sites web ou apps de tiers ; nous ne réagissons donc pas différemment aux signaux « Do Not Track » des navigateurs.',
        ],
      },
      {
        heading: 'Lieu de stockage des informations',
        blocks: [
          'Vos informations sont stockées sur des serveurs exploités par nous ou par nos prestataires de services, qui peuvent se trouver dans un pays autre que le vôtre. En utilisant le Service, vous comprenez que vos informations peuvent être transférées et traitées dans ces pays.',
        ],
      },
      {
        heading: 'Modifications de cette politique',
        blocks: [
          'Nous publierons toute modification sur cette page et mettrons à jour la date indiquée en haut. Si les modifications sont importantes, nous vous en informerons également dans l’app ou par e-mail.',
        ],
      },
      {
        heading: 'Contact',
        blocks: ['{company} — {email}'],
      },
    ],
  },
  deleteAccount: {
    title: 'Supprimer votre compte Rodent Eye',
    description: 'Comment supprimer votre compte et vos données Rodent Eye, avec ou sans l’app.',
    emailSubject: 'Delete my Rodent Eye account',
    button: 'Demander la suppression par e-mail',
    intro: [
      'Vous pouvez supprimer votre compte {app} (app de {company}) à tout moment, depuis l’app ou sans elle. La suppression de votre compte est définitive et irréversible.',
    ],
    sections: [
      {
        heading: 'Sans l’app',
        blocks: [
          'Envoyez un e-mail à {email} <strong>depuis l’adresse e-mail de votre compte</strong>, avec l’objet « Delete my Rodent Eye account » et votre nom d’utilisateur. Vous pouvez utiliser le bouton ci-dessus.',
          'Pour votre sécurité, nous pouvons vous demander de confirmer la demande. Nous supprimerons votre compte sous 30 jours et vous enverrons un e-mail une fois la suppression effectuée.',
        ],
      },
      {
        heading: 'Dans l’app',
        blocks: [
          [
            'Ouvrez Rodent Eye et connectez-vous.',
            'Allez dans <strong>Profil</strong>.',
            'Touchez <strong>Supprimer le compte (définitivement)</strong> et confirmez.',
          ],
          'Votre compte est supprimé immédiatement et vous êtes déconnecté sur ce téléphone.',
        ],
      },
      {
        heading: 'Ce que nous supprimons',
        blocks: [
          [
            'Les informations de votre compte : nom, nom d’utilisateur, adresse e-mail, numéro de téléphone et mot de passe.',
            'Vos adresses et vos caméras.',
            'Tous les événements des caméras. Ils disparaissent immédiatement de votre compte ; les fichiers photo et vidéo stockés sur nos serveurs sont supprimés ensuite, dans un processus distinct.',
            'Vos notifications et le lien entre votre téléphone et votre compte.',
            'Sur le téléphone utilisé pour la suppression, les mots de passe Wi-Fi enregistrés par l’app.',
          ],
          'Vos caméras sont libérées et peuvent donc être configurées à nouveau sur un nouveau compte.',
        ],
      },
      {
        heading: 'Ce que nous conservons',
        blocks: [
          'Pour des raisons de sécurité, de prévention de la fraude et des raisons légales, nous pouvons conserver, pendant une durée limitée, les journaux des serveurs et les traces des e-mails que nous vous avons envoyés (adresse e-mail, objet et date). Ces données ne sont utilisées à aucune autre fin.',
          'Plus de détails dans notre <a href="{privacyUrl}">politique de confidentialité</a>.',
        ],
      },
    ],
  },
  terms: {
    title: 'Conditions d’utilisation',
    description: 'Les conditions qui s’appliquent lorsque vous utilisez l’app, la caméra et le site web Rodent Eye.',
    intro: [
      'Ces conditions constituent un accord entre vous et {company} (« nous ») concernant votre utilisation de l’application mobile {app}, de la caméra {app} et de ce site web (le « Service »). En créant un compte ou en utilisant le Service, vous acceptez ces conditions. Si vous ne les acceptez pas, n’utilisez pas le Service.',
    ],
    sections: [
      {
        heading: 'Le Service',
        blocks: [
          '{app} vous aide à savoir s’il y a une activité de rongeurs dans les lieux que vous choisissez. La caméra détecte les mouvements et envoie des photos, des vidéos et des alertes à l’app.',
          '<strong>{app} est un outil de surveillance, pas un service de lutte antiparasitaire.</strong> Il n’élimine pas les nuisibles et ne les empêche pas, et il peut ne pas détecter tous les animaux ni tous les mouvements. Les détections peuvent être affectées par l’emplacement de la caméra, sa batterie et la connexion Wi-Fi. Ne comptez pas sur lui comme seul moyen de protéger votre maison, votre famille, vos animaux de compagnie ou vos aliments.',
        ],
      },
      {
        heading: 'Votre compte',
        blocks: [
          [
            'Vous devez avoir au moins 18 ans, ou l’âge de la majorité là où vous vivez, pour créer un compte.',
            'Fournissez des informations exactes et gardez votre mot de passe confidentiel. Vous êtes responsable de ce qui se passe sur votre compte.',
            'Prévenez-nous immédiatement à {email} si vous pensez que quelqu’un d’autre utilise votre compte.',
          ],
        ],
      },
      {
        heading: 'Utiliser la caméra de façon responsable',
        blocks: [
          [
            'Installez les caméras uniquement dans des lieux qui vous appartiennent ou que vous êtes autorisé à surveiller.',
            'Ne dirigez pas les caméras vers des zones où les personnes s’attendent au respect de leur vie privée, et respectez les lois de votre lieu de résidence en matière d’enregistrement vidéo.',
            'N’utilisez pas le Service à des fins illégales, pour nuire à autrui, ni pour tenter de le pirater, de le copier ou d’en faire l’ingénierie inverse.',
          ],
        ],
      },
      {
        heading: 'Entreprises de lutte antiparasitaire',
        blocks: [
          'Les entreprises affichées dans l’app sont des entreprises indépendantes. Nous ne les employons pas, ne recommandons aucune d’entre elles en particulier et ne garantissons pas leur travail. Tout accord que vous concluez avec elles relève uniquement de vous et de l’entreprise.',
        ],
      },
      {
        heading: 'Disponibilité et modifications',
        blocks: [
          'Nous faisons en sorte que le Service fonctionne, mais il peut parfois être indisponible, par exemple pendant une maintenance ou en raison de problèmes liés à Internet, au Wi-Fi ou à nos prestataires. Nous pouvons modifier, ajouter ou supprimer des fonctions. Nous pouvons mettre à jour le logiciel de la caméra pour corriger des problèmes ou l’améliorer.',
        ],
      },
      {
        heading: 'Propriété',
        blocks: [
          'L’app, le logiciel de la caméra, ainsi que le nom et le logo {app} appartiennent à {company}. Nous vous accordons une licence personnelle et non transférable pour utiliser l’app tant que vous avez un compte. Les photos et vidéos de vos caméras vous appartiennent ; vous nous autorisez à les stocker et à les traiter uniquement pour vous fournir le Service.',
        ],
      },
      {
        heading: 'Fin de l’utilisation',
        blocks: [
          'Vous pouvez cesser d’utiliser le Service et supprimer votre compte à tout moment (voir <a href="{deleteUrl}">Supprimer le compte</a>). Nous pouvons suspendre ou fermer les comptes qui enfreignent ces conditions.',
        ],
      },
      {
        heading: 'Exclusion de garanties et limitation de responsabilité',
        blocks: [
          'Le Service est fourni « en l’état » et « selon disponibilité ». Dans la mesure permise par la loi, nous n’offrons aucune garantie d’aucune sorte, notamment que le Service détectera toute activité de nuisibles ou fonctionnera sans interruption.',
          'Dans la mesure permise par la loi, nous ne sommes pas responsables des dommages indirects ou consécutifs, ni des dommages causés par des nuisibles, et notre responsabilité totale pour toute réclamation liée au Service est limitée au montant que vous nous avez payé pour celui-ci au cours des 12 mois précédant la réclamation. Certains lieux n’autorisent pas ces limitations, qui peuvent donc ne pas s’appliquer à vous.',
        ],
      },
      {
        heading: 'Apple et Google',
        blocks: [
          'Si vous avez téléchargé l’app depuis l’App Store ou Google Play, leurs conditions s’appliquent également. Apple et Google ne sont pas responsables de l’app ni de son assistance. Si vous avez obtenu l’app depuis l’App Store, Apple et ses filiales sont des tiers bénéficiaires de ces conditions.',
        ],
      },
      {
        heading: 'Droit applicable',
        blocks: ['Ces conditions sont régies par les lois de l’État de Floride, États-Unis, sans égard à ses règles de conflit de lois.'],
      },
      {
        heading: 'Modifications de ces conditions',
        blocks: [
          'Nous publierons les modifications sur cette page et mettrons à jour la date indiquée en haut. Si les modifications sont importantes, nous vous en informerons dans l’app ou par e-mail. Si vous continuez à utiliser le Service après une modification, vous acceptez les nouvelles conditions.',
        ],
      },
      {
        heading: 'Contact',
        blocks: ['{company} — {email}'],
      },
    ],
  },
};

export default fr;
