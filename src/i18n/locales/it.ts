import type { Dict } from '../types';

const it: Dict = {
  nav: {
    home: 'Home',
    support: 'Assistenza',
    privacy: 'Privacy',
    terms: 'Termini',
    deleteAccount: 'Elimina account',
    language: 'Lingua',
  },
  common: {
    tagline: 'Monitoraggio dei roditori',
    draft: 'Bozza — in attesa di revisione legale. Questo non è il testo definitivo.',
    updated: 'Ultimo aggiornamento',
    rights: 'Tutti i diritti riservati.',
    translationNote:
      'Questa è una traduzione fornita per comodità. In caso di differenze rispetto alla versione inglese, prevale la versione inglese.',
    soon: 'Prossimamente',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    skip: 'Vai al contenuto',
    arrow: '→',
  },
  notFound: {
    title: 'Pagina non trovata',
    body: 'La pagina che stai cercando non esiste.',
    back: 'Torna alla home',
  },
  home: {
    title: 'Rodent Eye — Scopri se hai roditori in casa',
    description:
      'Una telecamera intelligente che controlla se ci sono roditori in casa tua e invia foto e avvisi al tuo telefono, così sai quando è il momento di chiamare un professionista.',
    eyebrow: 'Monitoraggio dei roditori per la tua casa',
    h1: 'Pensi di avere roditori?',
    h1Accent: 'Scoprilo con certezza.',
    lead:
      'Escrementi in dispensa, graffi nei muri, un’ombra veloce in garage. Metti una telecamera Rodent Eye dove hai notato i segnali: quando qualcosa si muove, ti invierà foto e un avviso sul telefono.',
    ctaPrimary: 'Scarica l’app',
    ctaSecondary: 'Come funziona',
    howTitle: 'Come funziona',
    steps: [
      {
        title: 'Posiziona la telecamera',
        body: 'Mettila dove hai notato segni di attività e collegala al Wi-Fi di casa seguendo la configurazione guidata dell’app.',
      },
      {
        title: 'Controlla al posto tuo',
        body: 'Quando la telecamera rileva un movimento, scatta foto e registra un breve video, poi li carica in modo sicuro.',
      },
      {
        title: 'Ricevi un avviso',
        body: 'Ti arriva una notifica sul telefono. Aprila per vedere cosa ha visto la telecamera e quando.',
      },
      {
        title: 'Chiama un professionista se è vero',
        body: 'Se la telecamera conferma l’attività, l’app ti mostra le aziende di disinfestazione vicine al tuo indirizzo.',
      },
    ],
    featuresTitle: 'Tutto in un’unica app',
    features: [
      { title: 'Avvisi immediati', body: 'Una notifica push ogni volta che la telecamera rileva un movimento.' },
      { title: 'Foto e video', body: 'Guarda esattamente cosa ha ripreso ogni telecamera, evento per evento.' },
      { title: 'Più di un luogo', body: 'Organizza le telecamere per indirizzo: casa tua, un immobile in affitto, una baita.' },
      { title: 'Configurazione guidata', body: 'Collega la telecamera al Wi-Fi dal tuo telefono. Non serve un tecnico.' },
      { title: 'Cronologia degli eventi', body: 'Rivedi l’attività recente per capire quando e dove si verifica.' },
      { title: 'Professionisti della zona', body: 'Trova aziende di disinfestazione vicino a te quando ti serve aiuto.' },
    ],
    downloadTitle: 'Scarica l’app Rodent Eye',
    downloadLead: 'Per iPhone e Android.',
    supportLink: 'Domande? Visita l’assistenza',
  },
  support: {
    title: 'Assistenza',
    description: 'Aiuto con l’app e la telecamera Rodent Eye: configurazione, notifiche e account.',
    lead: 'Qui sotto trovi risposte rapide. Se hai ancora bisogno di aiuto, scrivici via email e ti risponderemo.',
    contactTitle: 'Contattaci',
    contactBody: 'Indica il tuo nome utente e, se la domanda riguarda una telecamera, il suo numero di serie.',
    faqTitle: 'Domande frequenti',
    faq: [
      {
        q: 'Come collego una telecamera al mio Wi-Fi?',
        a: 'Nell’app, tocca il pulsante «+» nel menu in basso e segui i passaggi. Il telefono si collega alla telecamera e le invia il nome e la password del tuo Wi-Fi. La telecamera funziona con reti Wi-Fi a <strong>2,4 GHz</strong>.',
      },
      {
        q: 'Perché l’app mi chiede la posizione?',
        a: 'Il telefono permette alle app di leggere il nome della rete Wi-Fi a cui sei connesso solo se hanno l’autorizzazione alla posizione. Rodent Eye la usa durante la configurazione della telecamera per trovarne la rete. L’app non traccia né memorizza la posizione del tuo telefono.',
      },
      {
        q: 'Non ricevo le notifiche',
        a: 'Controlla che le notifiche di Rodent Eye siano attive nelle impostazioni del telefono e di aver effettuato l’accesso. Se hai reinstallato l’app, accedi di nuovo per registrare il telefono e ricevere gli avvisi.',
      },
      {
        q: 'La mia telecamera risulta offline',
        a: 'Verifica che la telecamera sia alimentata e che il Wi-Fi funzioni. Se hai cambiato router o password del Wi-Fi, configura di nuovo la telecamera dall’app.',
      },
      {
        q: 'Ho dimenticato la password',
        a: 'Nella schermata di accesso, tocca «Password dimenticata?» e inserisci il tuo nome utente e la tua email. Ti invieremo via email un codice di 6 cifre per creare una nuova password. Il codice scade dopo 15 minuti.',
      },
      {
        q: 'La telecamera ha rilevato un roditore. E adesso?',
        a: 'Guarda le foto e il video per averne conferma. Se c’è attività, l’app ti mostra le aziende di disinfestazione vicine al tuo indirizzo, che puoi chiamare o contattare via email direttamente dal telefono.',
      },
      {
        q: 'Come elimino il mio account?',
        a: 'Puoi farlo dall’app oppure chiedercelo via email. Trovi i passaggi nella <a href="{deleteUrl}">pagina di eliminazione dell’account</a>.',
      },
    ],
  },
  privacy: {
    title: 'Informativa sulla privacy',
    description: 'Quali dati raccoglie Rodent Eye, come li usa e li condivide, per quanto tempo li conserva e come eliminarli.',
    intro: [
      'Questa informativa sulla privacy spiega come {company} («noi») raccoglie, usa e condivide le informazioni quando utilizzi l’app mobile {app}, la telecamera {app} e questo sito web (insieme, il «Servizio»).',
      'Domande su questa informativa o sui tuoi dati: {email}.',
    ],
    sections: [
      {
        heading: 'Informazioni che raccogliamo',
        blocks: [
          '<strong>Informazioni che ci fornisci</strong>',
          [
            '<strong>Account:</strong> nome e cognome, nome utente, indirizzo email, numero di telefono, password e lingua preferita.',
            '<strong>Indirizzi:</strong> il nome e l’indirizzo di ogni luogo che monitori, inclusi codice postale, coordinate sulla mappa e fuso orario. Quando digiti un indirizzo, l’app usa la ricerca indirizzi di Google per trovarlo.',
            '<strong>Telecamere:</strong> il nome e la posizione che assegni a ogni telecamera (ad esempio «Garage») e il suo numero di serie.',
            '<strong>Messaggi all’assistenza:</strong> tutto ciò che ci invii via email.',
          ],
          '<strong>Informazioni dalla telecamera</strong>',
          [
            '<strong>Eventi:</strong> quando la telecamera rileva un movimento, ci invia foto e brevi video dell’area inquadrata, con data e ora.',
            '<strong>Stato del dispositivo:</strong> livello della batteria, intensità del segnale Wi-Fi, temperatura, letture dei sensori e versione del software.',
          ],
          '<strong>Informazioni dal telefono</strong>',
          [
            '<strong>Notifiche:</strong> per inviarti gli avvisi, il nostro fornitore di notifiche registra il tuo telefono e lo collega al tuo account.',
            '<strong>Autorizzazione alla posizione:</strong> usata solo durante la configurazione della telecamera per leggere il nome della tua rete Wi-Fi. Non raccogliamo né memorizziamo la posizione del tuo telefono.',
            '<strong>Password del Wi-Fi:</strong> viene inviata direttamente dal telefono alla telecamera durante la configurazione. Non viene inviata ai nostri server. Se la configurazione riesce, l’app la salva nell’archivio sicuro del telefono, così non devi digitarla di nuovo.',
            '<strong>Fotocamera del telefono:</strong> su iPhone puoi scansionare il codice a barre sull’etichetta della telecamera. L’immagine viene elaborata sul telefono e non ci viene inviata.',
          ],
          '<strong>Registri di utilizzo:</strong> date di accesso, quando tocchi per contattare un’azienda di disinfestazione dall’app, registri delle email che ti inviamo (come i codici per reimpostare la password) e log tecnici dei nostri server.',
          'Non usiamo strumenti pubblicitari o di analisi e non ti tracciamo su altre app o siti web.',
        ],
      },
      {
        heading: 'Come usiamo le informazioni',
        blocks: [
          [
            'Per fornire il Servizio: mostrarti gli eventi delle tue telecamere e inviarti avvisi quando si verificano.',
            'Per configurare e mantenere le tue telecamere, compresi gli aggiornamenti del software.',
            'Per mostrarti le aziende di disinfestazione vicine al tuo indirizzo (usiamo solo il codice postale).',
            'Per gestire il tuo account, aiutarti a reimpostare la password e rispondere alle tue richieste di assistenza.',
            'Per mantenere sicuro il Servizio, prevenire abusi e risolvere problemi.',
            'Per adempiere agli obblighi di legge.',
          ],
        ],
      },
      {
        heading: 'Come condividiamo le informazioni',
        blocks: [
          'Non vendiamo le tue informazioni personali e non le condividiamo per pubblicità mirata. Le condividiamo solo con fornitori di servizi che ci aiutano a gestire il Servizio, e solo quelle di cui hanno bisogno:',
          [
            '<strong>OneSignal</strong> invia le notifiche push. Riceve un identificativo del tuo account e del tuo telefono e il contenuto di ogni avviso (nome della telecamera, posizione e una foto dell’evento). Recapita le notifiche tramite Apple e Google.',
            '<strong>Google Maps Platform</strong> fornisce la ricerca degli indirizzi e i fusi orari. Riceve il testo che digiti nella ricerca degli indirizzi e le coordinate dell’indirizzo.',
            '<strong>Mailchimp Transactional (Mandrill)</strong> invia le nostre email, come i codici per reimpostare la password. Riceve il tuo nome e il tuo indirizzo email.',
          ],
          'Questi fornitori possono usare le informazioni solo per fornirci i loro servizi e devono proteggerle in conformità con questa informativa e con la legge.',
          'Le aziende di disinfestazione mostrate nell’app sono imprese indipendenti. Non inviamo loro le tue informazioni: se scegli di chiamarne o scriverne una via email, la contatti direttamente dal tuo telefono.',
          'Possiamo inoltre divulgare informazioni se richiesto dalla legge, per proteggere i diritti e la sicurezza dei nostri utenti o di altri, oppure nell’ambito di una fusione, acquisizione o vendita di beni; in tal caso questa informativa continuerà ad applicarsi.',
        ],
      },
      {
        heading: 'Per quanto tempo conserviamo le informazioni',
        blocks: [
          'Conserviamo le informazioni del tuo account, gli indirizzi, le telecamere e le foto e i video degli eventi finché il tuo account è attivo.',
          'Quando elimini il tuo account, eliminiamo tali informazioni come descritto nella <a href="{deleteUrl}">pagina di eliminazione dell’account</a>. Possiamo conservare registri limitati per un periodo più lungo quando necessario per la sicurezza, per prevenire frodi o per rispettare la legge, come i log dei server e i registri delle email che ti abbiamo inviato.',
        ],
      },
      {
        heading: 'Le tue scelte e i tuoi diritti',
        blocks: [
          [
            '<strong>Accesso e rettifica:</strong> puoi vedere e modificare le tue informazioni nell’app, in Profilo.',
            '<strong>Eliminazione:</strong> puoi eliminare il tuo account nell’app o chiederci di farlo. Vedi <a href="{deleteUrl}">Elimina account</a>.',
            '<strong>Revoca del consenso:</strong> puoi disattivare in qualsiasi momento le notifiche o l’autorizzazione alla posizione nelle impostazioni del telefono. Alcune funzioni, come gli avvisi o la configurazione della telecamera, non funzioneranno senza di esse.',
          ],
          'A seconda di dove vivi, inclusi la California e altri stati degli Stati Uniti, potresti avere il diritto di sapere quali informazioni personali abbiamo su di te, di ottenerne una copia, di correggerle o di eliminarle, e il diritto di non essere trattato diversamente per aver esercitato questi diritti. Per fare una richiesta, scrivi a {email}. Dovremo verificare la tua identità e risponderemo entro i tempi previsti dalla legge. Puoi anche chiedere a un agente autorizzato di fare una richiesta per tuo conto.',
        ],
      },
      {
        heading: 'Sicurezza',
        blocks: [
          'Le informazioni tra l’app, la telecamera e i nostri server viaggiano cifrate (HTTPS) e adottiamo misure ragionevoli per proteggerle. Nessun sistema è completamente sicuro, quindi non possiamo garantire una sicurezza assoluta; se veniamo a conoscenza di una violazione che ti riguarda, te lo comunicheremo come richiesto dalla legge.',
        ],
      },
      {
        heading: 'Minori',
        blocks: [
          'Il Servizio non è rivolto ai minori di 13 anni e non raccogliamo consapevolmente informazioni personali da loro. Se ritieni che un minore ci abbia fornito informazioni, contattaci e le elimineremo.',
        ],
      },
      {
        heading: 'Do Not Track',
        blocks: [
          'Non tracciamo gli utenti su siti web o app di terze parti, quindi non rispondiamo in modo diverso ai segnali «Do Not Track» del browser.',
        ],
      },
      {
        heading: 'Dove sono conservate le informazioni',
        blocks: [
          'Le tue informazioni sono conservate su server gestiti da noi o dai nostri fornitori di servizi, che possono trovarsi in un paese diverso dal tuo. Utilizzando il Servizio, sei consapevole che le tue informazioni possono essere trasferite e trattate in tali paesi.',
        ],
      },
      {
        heading: 'Modifiche a questa informativa',
        blocks: [
          'Pubblicheremo eventuali modifiche in questa pagina e aggiorneremo la data in alto. Se le modifiche sono significative, te lo comunicheremo anche nell’app o via email.',
        ],
      },
      {
        heading: 'Contatti',
        blocks: ['{company} — {email}'],
      },
    ],
  },
  deleteAccount: {
    title: 'Elimina il tuo account Rodent Eye',
    description: 'Come eliminare il tuo account e i tuoi dati Rodent Eye, con o senza l’app.',
    emailSubject: 'Delete my Rodent Eye account',
    button: 'Richiedi l’eliminazione via email',
    intro: [
      'Puoi eliminare il tuo account {app} (app di {company}) in qualsiasi momento, dall’app o senza. L’eliminazione dell’account è definitiva e non può essere annullata.',
    ],
    sections: [
      {
        heading: 'Senza l’app',
        blocks: [
          'Invia un’email a {email} <strong>dall’indirizzo email del tuo account</strong>, con l’oggetto «Delete my Rodent Eye account» e il tuo nome utente. Puoi usare il pulsante qui sopra.',
          'Per la tua sicurezza, potremmo chiederti di confermare la richiesta. Elimineremo il tuo account entro 30 giorni e ti avviseremo via email quando sarà fatto.',
        ],
      },
      {
        heading: 'Nell’app',
        blocks: [
          [
            'Apri Rodent Eye e accedi.',
            'Vai su <strong>Profilo</strong>.',
            'Tocca <strong>Elimina account (in modo permanente)</strong> e conferma.',
          ],
          'Il tuo account viene eliminato subito e viene effettuata la disconnessione su quel telefono.',
        ],
      },
      {
        heading: 'Cosa eliminiamo',
        blocks: [
          [
            'Le informazioni del tuo account: nome, nome utente, email, numero di telefono e password.',
            'I tuoi indirizzi e le tue telecamere.',
            'Tutti gli eventi delle telecamere. Scompaiono subito dal tuo account; i file di foto e video conservati sui nostri server vengono eliminati in seguito, con un processo separato.',
            'Le tue notifiche e il collegamento tra il tuo telefono e il tuo account.',
            'Sul telefono che usi per eliminarlo, le password del Wi-Fi salvate dall’app.',
          ],
          'Le tue telecamere vengono svincolate, così possono essere configurate di nuovo su un nuovo account.',
        ],
      },
      {
        heading: 'Cosa conserviamo',
        blocks: [
          'Per motivi di sicurezza, prevenzione delle frodi e legali, possiamo conservare per un periodo limitato i log dei server e i registri delle email che ti abbiamo inviato (indirizzo email, oggetto e data). Questi registri non vengono usati per nessun altro scopo.',
          'Maggiori dettagli nella nostra <a href="{privacyUrl}">informativa sulla privacy</a>.',
        ],
      },
    ],
  },
  terms: {
    title: 'Termini di utilizzo',
    description: 'I termini che si applicano quando usi l’app, la telecamera e il sito web di Rodent Eye.',
    intro: [
      'Questi termini sono un accordo tra te e {company} («noi») sull’uso dell’app mobile {app}, della telecamera {app} e di questo sito web (il «Servizio»). Creando un account o usando il Servizio, accetti questi termini. Se non sei d’accordo, non usare il Servizio.',
    ],
    sections: [
      {
        heading: 'Il Servizio',
        blocks: [
          '{app} ti aiuta a scoprire se c’è attività di roditori nei luoghi che scegli. La telecamera rileva il movimento e invia foto, video e avvisi all’app.',
          '<strong>{app} è uno strumento di monitoraggio, non un servizio di disinfestazione.</strong> Non elimina né previene gli infestanti e potrebbe non rilevare ogni animale o ogni movimento. I rilevamenti possono dipendere dalla posizione della telecamera, dalla sua batteria e dalla connessione Wi-Fi. Non affidarti a {app} come unico mezzo per proteggere la tua casa, la tua famiglia, i tuoi animali domestici o il tuo cibo.',
        ],
      },
      {
        heading: 'Il tuo account',
        blocks: [
          [
            'Per creare un account devi avere almeno 18 anni o aver raggiunto la maggiore età prevista dove vivi.',
            'Fornisci informazioni accurate e mantieni riservata la tua password. Sei responsabile di ciò che accade nel tuo account.',
            'Avvisaci subito a {email} se pensi che qualcun altro stia usando il tuo account.',
          ],
        ],
      },
      {
        heading: 'Usare la telecamera in modo responsabile',
        blocks: [
          [
            'Installa le telecamere solo in luoghi di tua proprietà o che hai il permesso di monitorare.',
            'Non puntare le telecamere verso aree in cui le persone si aspettano privacy e rispetta le leggi del luogo in cui vivi sulla registrazione video.',
            'Non usare il Servizio per scopi illegali, per danneggiare altri o per tentare di violarlo, copiarlo o decodificarlo (reverse engineering).',
          ],
        ],
      },
      {
        heading: 'Aziende di disinfestazione',
        blocks: [
          'Le aziende mostrate nell’app sono imprese indipendenti. Non sono nostre dipendenti, non ne raccomandiamo una in particolare e non garantiamo il loro lavoro. Qualsiasi accordo che stipuli con loro riguarda solo te e l’azienda.',
        ],
      },
      {
        heading: 'Disponibilità e modifiche',
        blocks: [
          'Ci impegniamo a mantenere il Servizio attivo, ma a volte potrebbe non essere disponibile, ad esempio durante la manutenzione o per problemi di internet, del Wi-Fi o dei nostri fornitori. Possiamo modificare, aggiungere o rimuovere funzioni. Possiamo aggiornare il software della telecamera per risolvere problemi o migliorarlo.',
        ],
      },
      {
        heading: 'Proprietà',
        blocks: [
          'L’app, il software della telecamera, il nome e il logo {app} appartengono a {company}. Ti concediamo una licenza personale e non trasferibile per usare l’app finché hai un account. Le foto e i video delle tue telecamere sono tuoi; ci consenti di conservarli e trattarli solo per fornirti il Servizio.',
        ],
      },
      {
        heading: 'Cessazione dell’utilizzo',
        blocks: [
          'Puoi smettere di usare il Servizio ed eliminare il tuo account in qualsiasi momento (vedi <a href="{deleteUrl}">Elimina account</a>). Possiamo sospendere o chiudere gli account che violano questi termini.',
        ],
      },
      {
        heading: 'Esclusioni di garanzia e limitazione di responsabilità',
        blocks: [
          'Il Servizio è fornito «così com’è» e «come disponibile». Nei limiti consentiti dalla legge, non forniamo garanzie di alcun tipo, incluso che il Servizio rilevi tutta l’attività degli infestanti o funzioni senza interruzioni.',
          'Nei limiti consentiti dalla legge, non siamo responsabili per danni indiretti o consequenziali, né per danni causati da infestanti, e la nostra responsabilità complessiva per qualsiasi reclamo relativo al Servizio è limitata all’importo che ci hai pagato per esso nei 12 mesi precedenti il reclamo. Alcuni ordinamenti non consentono queste limitazioni, quindi potrebbero non applicarsi a te.',
        ],
      },
      {
        heading: 'Apple e Google',
        blocks: [
          'Se hai scaricato l’app dall’App Store o da Google Play, si applicano anche i loro termini. Apple e Google non sono responsabili dell’app né della relativa assistenza. Se hai ottenuto l’app dall’App Store, Apple e le sue controllate sono terzi beneficiari di questi termini.',
        ],
      },
      {
        heading: 'Legge applicabile',
        blocks: [
          'Questi termini sono regolati dalle leggi dello Stato della Florida, USA, senza riguardo alle sue norme sui conflitti di leggi.',
        ],
      },
      {
        heading: 'Modifiche a questi termini',
        blocks: [
          'Pubblicheremo le modifiche in questa pagina e aggiorneremo la data in alto. Se le modifiche sono significative, te lo comunicheremo nell’app o via email. Se continui a usare il Servizio dopo una modifica, accetti i nuovi termini.',
        ],
      },
      {
        heading: 'Contatti',
        blocks: ['{company} — {email}'],
      },
    ],
  },
};

export default it;
