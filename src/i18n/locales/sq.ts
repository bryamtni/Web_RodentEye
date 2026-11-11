import type { Dict } from '../types';

const sq: Dict = {
  nav: {
    home: 'Kreu',
    support: 'Mbështetja',
    privacy: 'Privatësia',
    terms: 'Kushtet',
    deleteAccount: 'Fshi llogarinë',
    language: 'Gjuha',
    theme: 'Ndrysho modalitetin e çelët/të errët',
  },
  common: {
    tagline: 'Monitorimi i dëmtuesve',
    draft: 'Draft — në pritje të rishikimit ligjor. Ky nuk është teksti përfundimtar.',
    updated: 'Përditësuar më',
    rights: 'Të gjitha të drejtat të rezervuara.',
    translationNote:
      'Ky është një përkthim i ofruar për lehtësi. Nëse ka ndonjë ndryshim nga versioni në anglisht, mbizotëron versioni në anglisht.',
    soon: 'Së shpejti',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    skip: 'Kalo te përmbajtja',
    arrow: '→',
  },
  notFound: {
    title: 'Faqja nuk u gjet',
    body: 'Faqja që po kërkoni nuk ekziston.',
    back: 'Kthehu në faqen kryesore',
  },
  home: {
    title: 'Rodent Eye — Mësoni nëse keni brejtës në shtëpi',
    description:
      'Një kamerë inteligjente që vëzhgon aktivitetin e brejtësve në shtëpinë tuaj dhe ju dërgon foto dhe njoftime në telefon, që të dini kur është koha të thërrisni një profesionist.',
    eyebrow: 'Monitorimi i brejtësve për shtëpinë tuaj',
    h1: 'Mendoni se keni brejtës?',
    h1Accent: 'Merreni vesh me siguri.',
    lead:
      'Jashtëqitje në qilar, gërvishtje në mure, një hije e shpejtë në garazh. Vendosni një kamerë Rodent Eye aty ku i vutë re shenjat dhe ajo do t’ju dërgojë foto dhe një njoftim në telefon kur diçka lëviz.',
    ctaPrimary: 'Shkarkoni aplikacionin',
    ctaSecondary: 'Si funksionon',
    howTitle: 'Si funksionon',
    steps: [
      {
        title: 'Vendosni kamerën',
        body: 'Vendoseni aty ku vutë re shenja aktiviteti dhe lidheni me Wi-Fi-në e shtëpisë me konfigurimin hap pas hapi të aplikacionit.',
      },
      {
        title: 'Ajo vëzhgon për ju',
        body: 'Kur kamera dallon lëvizje, bën foto dhe një video të shkurtër dhe i ngarkon në mënyrë të sigurt.',
      },
      {
        title: 'Merrni një njoftim',
        body: 'Në telefon ju vjen një njoftim. Hapeni për të parë çfarë pa kamera dhe kur.',
      },
      {
        title: 'Thirrni një profesionist nëse është e vërtetë',
        body: 'Nëse kamera konfirmon aktivitet, aplikacioni ju tregon kompani të kontrollit të dëmtuesve pranë adresës suaj.',
      },
    ],
    featuresTitle: 'Gjithçka në një aplikacion',
    features: [
      { title: 'Njoftime të menjëhershme', body: 'Një njoftim push sa herë që kamera dallon lëvizje.' },
      { title: 'Foto dhe video', body: 'Shihni saktësisht çfarë kapi secila kamerë, ngjarje pas ngjarjeje.' },
      { title: 'Më shumë se një vend', body: 'Organizoni kamerat sipas adresës: shtëpia juaj, një banesë me qira, një shtëpi pushimi.' },
      { title: 'Konfigurim i udhëzuar', body: 'Lidheni kamerën me Wi-Fi-në tuaj nga telefoni. Nuk nevojitet teknik.' },
      { title: 'Historiku i ngjarjeve', body: 'Shihni aktivitetin e fundit për të kuptuar kur dhe ku ndodh.' },
      { title: 'Profesionistë vendas', body: 'Gjeni kompani të kontrollit të dëmtuesve pranë jush kur keni nevojë për ndihmë.' },
    ],
    downloadTitle: 'Shkarkoni aplikacionin Rodent Eye',
    downloadLead: 'Për iPhone dhe Android.',
    supportLink: 'Keni pyetje? Vizitoni mbështetjen',
  },
  support: {
    title: 'Mbështetja',
    description: 'Ndihmë për aplikacionin dhe kamerën Rodent Eye: konfigurimi, njoftimet dhe llogaria juaj.',
    lead: 'Më poshtë gjeni përgjigje të shpejta. Nëse ende keni nevojë për ndihmë, na shkruani me email dhe do t’ju përgjigjemi.',
    contactTitle: 'Na kontaktoni',
    contactBody: 'Ju lutemi shkruani emrin e përdoruesit dhe, nëse pyetja ka të bëjë me një kamerë, numrin serik të saj.',
    faqTitle: 'Pyetjet më të shpeshta',
    faq: [
      {
        q: 'Si ta lidh një kamerë me Wi-Fi-në time?',
        a: 'Në aplikacion, prekni butonin „+“ në menunë e poshtme dhe ndiqni hapat. Telefoni juaj lidhet me kamerën dhe i dërgon emrin dhe fjalëkalimin e Wi-Fi-së suaj. Kamera funksionon me rrjete Wi-Fi <strong>2,4 GHz</strong>.',
      },
      {
        q: 'Pse aplikacioni më kërkon vendndodhjen?',
        a: 'Telefoni juaj i lejon aplikacionet të lexojnë emrin e rrjetit Wi-Fi me të cilin jeni lidhur vetëm nëse kanë leje për vendndodhjen. Rodent Eye e përdor këtë gjatë konfigurimit të kamerës për të gjetur rrjetin e kamerës. Aplikacioni nuk e ndjek dhe nuk e ruan vendndodhjen e telefonit tuaj.',
      },
      {
        q: 'Nuk po marr njoftime',
        a: 'Kontrolloni që njoftimet për Rodent Eye të jenë të aktivizuara te cilësimet e telefonit dhe që të jeni të identifikuar. Nëse e keni instaluar sërish aplikacionin, hyni përsëri që telefoni juaj të regjistrohet për njoftime.',
      },
      {
        q: 'Kamera ime duket jashtë linje',
        a: 'Sigurohuni që kamera të ketë energji dhe që Wi-Fi-ja juaj të funksionojë. Nëse keni ndërruar ruterin ose fjalëkalimin e Wi-Fi-së, konfigurojeni kamerën sërish nga aplikacioni.',
      },
      {
        q: 'Harrova fjalëkalimin',
        a: 'Në ekranin e hyrjes, prekni „Harruat fjalëkalimin?“ dhe shkruani emrin e përdoruesit dhe emailin. Do t’ju dërgojmë me email një kod me 6 shifra për të krijuar një fjalëkalim të ri. Kodi skadon pas 15 minutash.',
      },
      {
        q: 'Kamera dalloi një brejtës. Po tani?',
        a: 'Shikoni fotot dhe videon për ta konfirmuar. Nëse ka aktivitet, aplikacioni ju tregon kompani të kontrollit të dëmtuesve pranë adresës suaj, të cilat mund t’i telefononi ose t’u shkruani me email drejtpërdrejt nga telefoni.',
      },
      {
        q: 'Si ta fshij llogarinë time?',
        a: 'Mund ta bëni në aplikacion ose të na e kërkoni me email. Shihni hapat në <a href="{deleteUrl}">faqen e fshirjes së llogarisë</a>.',
      },
    ],
  },
  privacy: {
    title: 'Politika e privatësisë',
    description: 'Çfarë të dhënash mbledh Rodent Eye, si përdoren dhe ndahen, sa kohë ruhen dhe si fshihen.',
    intro: [
      'Kjo politikë privatësie shpjegon si {company} („ne“) mbledh, përdor dhe ndan informacionin kur përdorni aplikacionin celular {app}, kamerën {app} dhe këtë faqe interneti (së bashku, „Shërbimi“).',
      'Pyetje për këtë politikë ose për të dhënat tuaja: {email}.',
    ],
    sections: [
      {
        heading: 'Informacioni që mbledhim',
        blocks: [
          '<strong>Informacioni që na jepni ju</strong>',
          [
            '<strong>Llogaria:</strong> emri dhe mbiemri, emri i përdoruesit, adresa e emailit, numri i telefonit, fjalëkalimi dhe gjuha e preferuar.',
            '<strong>Adresat:</strong> emri dhe adresa e çdo vendi që monitoroni, përfshirë kodin postar, koordinatat në hartë dhe zonën kohore. Kur shkruani një adresë, aplikacioni përdor kërkimin e adresave të Google për ta gjetur.',
            '<strong>Kamerat:</strong> emri dhe vendndodhja që i jepni secilës kamerë (për shembull „Garazhi“) dhe numri i saj serik.',
            '<strong>Mesazhet e mbështetjes:</strong> çdo gjë që na dërgoni me email.',
          ],
          '<strong>Informacioni nga kamera juaj</strong>',
          [
            '<strong>Ngjarjet:</strong> kur kamera dallon lëvizje, na dërgon foto dhe video të shkurtra të zonës drejt së cilës është drejtuar, me datën dhe orën.',
            '<strong>Gjendja e pajisjes:</strong> niveli i baterisë, fuqia e sinjalit Wi-Fi, temperatura, leximet e sensorëve dhe versioni i softuerit.',
          ],
          '<strong>Informacioni nga telefoni juaj</strong>',
          [
            '<strong>Njoftimet:</strong> për t’ju dërguar njoftime, ofruesi ynë i njoftimeve e regjistron telefonin tuaj dhe e lidh me llogarinë tuaj.',
            '<strong>Leja e vendndodhjes:</strong> përdoret vetëm gjatë konfigurimit të kamerës për të lexuar emrin e rrjetit tuaj Wi-Fi. Ne nuk e mbledhim dhe nuk e ruajmë vendndodhjen e telefonit tuaj.',
            '<strong>Fjalëkalimi i Wi-Fi-së:</strong> dërgohet drejtpërdrejt nga telefoni juaj te kamera gjatë konfigurimit. Nuk dërgohet në serverët tanë. Nëse konfigurimi ka sukses, aplikacioni e ruan në hapësirën e sigurt të telefonit tuaj, që të mos keni nevojë ta shkruani përsëri.',
            '<strong>Kamera e telefonit:</strong> në iPhone mund të skanoni barkodin në etiketën e kamerës. Imazhi përpunohet në telefonin tuaj dhe nuk na dërgohet neve.',
          ],
          '<strong>Të dhënat e përdorimit:</strong> datat e hyrjes, kur prekni për të kontaktuar një kompani të kontrollit të dëmtuesve nga aplikacioni, të dhënat e emaileve që ju dërgojmë (si kodet për rivendosjen e fjalëkalimit) dhe regjistrat teknikë të serverëve tanë.',
          'Ne nuk përdorim mjete reklamimi ose analitike dhe nuk ju ndjekim nëpër aplikacione ose faqe të tjera interneti.',
        ],
      },
      {
        heading: 'Si e përdorim informacionin',
        blocks: [
          [
            'Për të ofruar Shërbimin: për t’ju treguar ngjarjet e kamerave tuaja dhe për t’ju dërguar njoftime kur ndodhin.',
            'Për të konfiguruar dhe mirëmbajtur kamerat tuaja, përfshirë përditësimet e softuerit.',
            'Për t’ju treguar kompani të kontrollit të dëmtuesve pranë adresës suaj (përdorim vetëm kodin postar).',
            'Për të menaxhuar llogarinë tuaj, për t’ju ndihmuar të rivendosni fjalëkalimin dhe për t’iu përgjigjur kërkesave tuaja për mbështetje.',
            'Për ta mbajtur Shërbimin të sigurt, për të parandaluar keqpërdorimin dhe për të rregulluar problemet.',
            'Për të përmbushur detyrimet ligjore.',
          ],
        ],
      },
      {
        heading: 'Si e ndajmë informacionin',
        blocks: [
          'Ne nuk i shesim të dhënat tuaja personale dhe nuk i ndajmë për reklamim të synuar. I ndajmë vetëm me ofrues shërbimesh që na ndihmojnë të funksionojë Shërbimi, dhe vetëm atë që u nevojitet:',
          [
            '<strong>OneSignal</strong> dërgon njoftimet push. Merr një identifikues për llogarinë dhe telefonin tuaj, si dhe përmbajtjen e çdo njoftimi (emrin e kamerës, vendndodhjen dhe një foto të ngjarjes). Njoftimet i dorëzon përmes Apple dhe Google.',
            '<strong>Google Maps Platform</strong> ofron kërkimin e adresave dhe zonat kohore. Merr tekstin që shkruani në kërkimin e adresës dhe koordinatat e adresës.',
            '<strong>Mailchimp Transactional (Mandrill)</strong> dërgon emailet tona, si kodet për rivendosjen e fjalëkalimit. Merr emrin dhe adresën tuaj të emailit.',
          ],
          'Këta ofrues mund ta përdorin informacionin vetëm për të na ofruar shërbimet e tyre dhe duhet ta mbrojnë në përputhje me këtë politikë dhe me ligjin.',
          'Kompanitë e kontrollit të dëmtuesve që shfaqen në aplikacion janë biznese të pavarura. Ne nuk u dërgojmë informacionin tuaj: nëse vendosni t’i telefononi ose t’i shkruani me email njërës prej tyre, e kontaktoni drejtpërdrejt nga telefoni juaj.',
          'Mund ta zbulojmë informacionin edhe nëse e kërkon ligji, për të mbrojtur të drejtat dhe sigurinë e përdoruesve tanë ose të të tjerëve, ose si pjesë e një bashkimi, blerjeje ose shitjeje asetesh, në të cilin rast kjo politikë do të vazhdojë të zbatohet.',
        ],
      },
      {
        heading: 'Sa kohë e ruajmë informacionin',
        blocks: [
          'Ne i ruajmë informacionin e llogarisë suaj, adresat, kamerat dhe fotot e videot e ngjarjeve për sa kohë që llogaria juaj është aktive.',
          'Kur e fshini llogarinë, e fshijmë këtë informacion siç përshkruhet në <a href="{deleteUrl}">faqen e fshirjes së llogarisë</a>. Mund të ruajmë të dhëna të kufizuara për një kohë më të gjatë kur është e nevojshme për sigurinë, për të parandaluar mashtrimin ose për të përmbushur ligjin, si regjistrat e serverëve dhe të dhënat e emaileve që ju kemi dërguar.',
        ],
      },
      {
        heading: 'Zgjedhjet dhe të drejtat tuaja',
        blocks: [
          [
            '<strong>Qasja dhe korrigjimi:</strong> mund ta shihni dhe ta ndryshoni informacionin tuaj në aplikacion, te Profil.',
            '<strong>Fshirja:</strong> mund ta fshini llogarinë në aplikacion ose të na kërkoni ta bëjmë ne. Shihni <a href="{deleteUrl}">Fshi llogarinë</a>.',
            '<strong>Tërheqja e pëlqimit:</strong> mund t’i çaktivizoni njoftimet ose lejen e vendndodhjes në çdo kohë te cilësimet e telefonit. Disa funksione, si njoftimet ose konfigurimi i kamerës, nuk do të funksionojnë pa to.',
          ],
          'Në varësi të vendit ku jetoni, përfshirë Kalifornian dhe shtete të tjera të SHBA-së, mund të keni të drejtën të dini çfarë të dhënash personale kemi për ju, të merrni një kopje, t’i korrigjoni ose t’i fshini, si dhe të drejtën të mos trajtoheni ndryshe për shkak se i ushtroni këto të drejta. Për të bërë një kërkesë, shkruani në {email}. Do të duhet të verifikojmë identitetin tuaj dhe do të përgjigjemi brenda afatit që kërkon ligji. Mund t’i kërkoni gjithashtu një përfaqësuesi të autorizuar të bëjë kërkesën në emrin tuaj.',
        ],
      },
      {
        heading: 'Siguria',
        blocks: [
          'Informacioni midis aplikacionit, kamerës dhe serverëve tanë udhëton i enkriptuar (HTTPS) dhe ne marrim masa të arsyeshme për ta mbrojtur. Asnjë sistem nuk është plotësisht i sigurt, prandaj nuk mund të garantojmë siguri absolute; nëse mësojmë për një shkelje që ju prek, do t’ju njoftojmë siç e kërkon ligji.',
        ],
      },
      {
        heading: 'Fëmijët',
        blocks: [
          'Shërbimi nuk u drejtohet fëmijëve nën 13 vjeç dhe ne nuk mbledhim me dijeni të dhëna personale prej tyre. Nëse mendoni se një fëmijë na ka dhënë informacion, na kontaktoni dhe do ta fshijmë.',
        ],
      },
      {
        heading: 'Do Not Track',
        blocks: [
          'Ne nuk i ndjekim përdoruesit nëpër faqe interneti ose aplikacione të palëve të treta, prandaj nuk reagojmë ndryshe ndaj sinjaleve „Do Not Track“ të shfletuesit.',
        ],
      },
      {
        heading: 'Ku ruhet informacioni',
        blocks: [
          'Informacioni juaj ruhet në serverë që operohen nga ne ose nga ofruesit tanë të shërbimeve, të cilët mund të ndodhen në një vend tjetër nga i juaji. Duke përdorur Shërbimin, ju kuptoni që informacioni juaj mund të transferohet dhe të përpunohet në ato vende.',
        ],
      },
      {
        heading: 'Ndryshimet në këtë politikë',
        blocks: [
          'Çdo ndryshim do ta publikojmë në këtë faqe dhe do të përditësojmë datën në krye. Nëse ndryshimet janë të rëndësishme, do t’jua bëjmë të ditur edhe në aplikacion ose me email.',
        ],
      },
      {
        heading: 'Kontakti',
        blocks: ['{company} — {email}'],
      },
    ],
  },
  deleteAccount: {
    title: 'Fshini llogarinë tuaj Rodent Eye',
    description: 'Si ta fshini llogarinë dhe të dhënat tuaja Rodent Eye, me ose pa aplikacionin.',
    emailSubject: 'Delete my Rodent Eye account',
    button: 'Kërkoni fshirjen me email',
    intro: [
      'Mund ta fshini llogarinë tuaj {app} (aplikacion nga {company}) në çdo kohë, nga aplikacioni ose pa të. Fshirja e llogarisë është e përhershme dhe nuk mund të zhbëhet.',
    ],
    sections: [
      {
        heading: 'Pa aplikacionin',
        blocks: [
          'Dërgoni një email në {email} <strong>nga adresa e emailit të llogarisë suaj</strong>, me subjektin „Delete my Rodent Eye account“ dhe emrin tuaj të përdoruesit. Mund të përdorni butonin më sipër.',
          'Për sigurinë tuaj, mund t’ju kërkojmë të konfirmoni kërkesën. Do ta fshijmë llogarinë tuaj brenda 30 ditëve dhe do t’ju njoftojmë me email kur të jetë kryer.',
        ],
      },
      {
        heading: 'Në aplikacion',
        blocks: [
          [
            'Hapni Rodent Eye dhe hyni.',
            'Shkoni te <strong>Profil</strong>.',
            'Prekni <strong>Fshi llogarinë (përgjithmonë)</strong> dhe konfirmoni.',
          ],
          'Llogaria juaj fshihet menjëherë dhe dilni nga llogaria në atë telefon.',
        ],
      },
      {
        heading: 'Çfarë fshijmë',
        blocks: [
          [
            'Informacionin e llogarisë suaj: emrin, emrin e përdoruesit, emailin, numrin e telefonit dhe fjalëkalimin.',
            'Adresat dhe kamerat tuaja.',
            'Të gjitha ngjarjet e kamerave. Ato zhduken menjëherë nga llogaria juaj; skedarët e fotove dhe videove të ruajtur në serverët tanë fshihen më pas, në një proces të veçantë.',
            'Njoftimet tuaja dhe lidhjen midis telefonit dhe llogarisë suaj.',
            'Në telefonin me të cilin e fshini, fjalëkalimet e Wi-Fi-së të ruajtura nga aplikacioni.',
          ],
          'Kamerat tuaja lirohen, që të mund të konfigurohen sërish në një llogari të re.',
        ],
      },
      {
        heading: 'Çfarë ruajmë',
        blocks: [
          'Për arsye sigurie, parandalimi të mashtrimit dhe arsye ligjore, mund të ruajmë për një kohë të kufizuar regjistrat e serverëve dhe të dhënat e emaileve që ju kemi dërguar (adresën e emailit, subjektin dhe datën). Këto të dhëna nuk përdoren për asnjë qëllim tjetër.',
          'Më shumë detaje në <a href="{privacyUrl}">politikën tonë të privatësisë</a>.',
        ],
      },
    ],
  },
  terms: {
    title: 'Kushtet e përdorimit',
    description: 'Kushtet që zbatohen kur përdorni aplikacionin, kamerën dhe faqen e internetit Rodent Eye.',
    intro: [
      'Këto kushte janë një marrëveshje midis jush dhe {company} („ne“) për përdorimin tuaj të aplikacionit celular {app}, kamerës {app} dhe kësaj faqeje interneti („Shërbimi“). Duke krijuar një llogari ose duke përdorur Shërbimin, ju i pranoni këto kushte. Nëse nuk jeni dakord, mos e përdorni Shërbimin.',
    ],
    sections: [
      {
        heading: 'Shërbimi',
        blocks: [
          '{app} ju ndihmon të zbuloni nëse ka aktivitet brejtësish në vendet që zgjidhni. Kamera dallon lëvizjen dhe dërgon foto, video dhe njoftime në aplikacion.',
          '<strong>{app} është një mjet monitorimi, jo një shërbim i kontrollit të dëmtuesve.</strong> Nuk i largon ose parandalon dëmtuesit dhe mund të mos e dallojë çdo kafshë ose çdo lëvizje. Dallimi mund të ndikohet nga vendi ku është vendosur kamera, bateria e saj dhe lidhja Wi-Fi. Mos u mbështetni tek ai si mënyra juaj e vetme për të mbrojtur shtëpinë, familjen, kafshët shtëpiake ose ushqimin tuaj.',
        ],
      },
      {
        heading: 'Llogaria juaj',
        blocks: [
          [
            'Duhet të jeni të paktën 18 vjeç, ose në moshën madhore në vendin ku jetoni, për të krijuar një llogari.',
            'Jepni informacion të saktë dhe mbajeni fjalëkalimin privat. Ju jeni përgjegjës për atë që ndodh në llogarinë tuaj.',
            'Na njoftoni menjëherë në {email} nëse mendoni se dikush tjetër po përdor llogarinë tuaj.',
          ],
        ],
      },
      {
        heading: 'Përdorimi i përgjegjshëm i kamerës',
        blocks: [
          [
            'Instaloni kamera vetëm në vende që i zotëroni ose që keni leje t’i monitoroni.',
            'Mos i drejtoni kamerat drejt zonave ku njerëzit presin privatësi dhe zbatoni ligjet e vendit ku jetoni për regjistrimin e videove.',
            'Mos e përdorni Shërbimin për asgjë të paligjshme, për t’u bërë dëm të tjerëve ose për të provuar ta prishni, ta kopjoni ose ta zbërtheni me inxhinieri të kundërt.',
          ],
        ],
      },
      {
        heading: 'Kompanitë e kontrollit të dëmtuesve',
        blocks: [
          'Kompanitë që shfaqen në aplikacion janë biznese të pavarura. Ne nuk i punësojmë, nuk rekomandojmë ndonjë prej tyre në veçanti dhe nuk garantojmë punën e tyre. Çdo marrëveshje që bëni me to është midis jush dhe kompanisë.',
        ],
      },
      {
        heading: 'Disponueshmëria dhe ndryshimet',
        blocks: [
          'Ne punojmë që Shërbimi të funksionojë, por ndonjëherë mund të mos jetë i disponueshëm, për shembull gjatë mirëmbajtjes ose për shkak të problemeve me internetin, Wi-Fi-në ose ofruesit tanë. Mund të ndryshojmë, shtojmë ose heqim funksione. Mund ta përditësojmë softuerin e kamerës për të rregulluar probleme ose për ta përmirësuar.',
        ],
      },
      {
        heading: 'Pronësia',
        blocks: [
          'Aplikacioni, softueri i kamerës, emri dhe logoja {app} i përkasin {company}. Ne ju japim një licencë personale dhe të patransferueshme për të përdorur aplikacionin për sa kohë që keni një llogari. Fotot dhe videot nga kamerat tuaja janë tuajat; ju na lejoni t’i ruajmë dhe t’i përpunojmë vetëm për t’ju ofruar Shërbimin.',
        ],
      },
      {
        heading: 'Ndërprerja e përdorimit',
        blocks: [
          'Mund të ndaloni së përdoruri Shërbimin dhe ta fshini llogarinë në çdo kohë (shihni <a href="{deleteUrl}">Fshi llogarinë</a>). Ne mund të pezullojmë ose mbyllim llogaritë që shkelin këto kushte.',
        ],
      },
      {
        heading: 'Mohimi i garancive dhe kufizimi i përgjegjësisë',
        blocks: [
          'Shërbimi ofrohet „siç është“ dhe „siç është i disponueshëm“. Në masën e lejuar nga ligji, ne nuk japim garanci të asnjë lloji, përfshirë që Shërbimi do të dallojë çdo aktivitet dëmtuesish ose do të funksionojë pa ndërprerje.',
          'Në masën e lejuar nga ligji, ne nuk mbajmë përgjegjësi për dëme indirekte ose pasuese, ose për dëme të shkaktuara nga dëmtuesit, dhe përgjegjësia jonë totale për çdo pretendim në lidhje me Shërbimin kufizohet në shumën që na keni paguar për të në 12 muajt para pretendimit. Disa vende nuk i lejojnë këto kufizime, prandaj ato mund të mos zbatohen për ju.',
        ],
      },
      {
        heading: 'Apple dhe Google',
        blocks: [
          'Nëse e keni shkarkuar aplikacionin nga App Store ose Google Play, zbatohen edhe kushtet e tyre. Apple dhe Google nuk janë përgjegjës për aplikacionin ose për mbështetjen e tij. Nëse e keni marrë aplikacionin nga App Store, Apple dhe filialet e saj janë përfitues të palës së tretë të këtyre kushteve.',
        ],
      },
      {
        heading: 'Ligji në fuqi',
        blocks: ['Këto kushte rregullohen nga ligjet e Shtetit të Floridës, SHBA, pa marrë parasysh rregullat e tij për konfliktin e ligjeve.'],
      },
      {
        heading: 'Ndryshimet në këto kushte',
        blocks: [
          'Ndryshimet do t’i publikojmë në këtë faqe dhe do të përditësojmë datën në krye. Nëse ndryshimet janë të rëndësishme, do t’jua bëjmë të ditur në aplikacion ose me email. Nëse vazhdoni ta përdorni Shërbimin pas një ndryshimi, ju i pranoni kushtet e reja.',
        ],
      },
      {
        heading: 'Kontakti',
        blocks: ['{company} — {email}'],
      },
    ],
  },
};

export default sq;
