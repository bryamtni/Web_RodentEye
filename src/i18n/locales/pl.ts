import type { Dict } from '../types';

const pl: Dict = {
  nav: {
    home: 'Strona główna',
    support: 'Pomoc',
    privacy: 'Prywatność',
    terms: 'Regulamin',
    deleteAccount: 'Usuń konto',
    language: 'Język',
    theme: 'Przełącz tryb jasny/ciemny',
  },
  common: {
    tagline: 'Monitorowanie szkodników',
    draft: 'Wersja robocza — oczekuje na weryfikację prawną. To nie jest tekst ostateczny.',
    updated: 'Ostatnia aktualizacja',
    rights: 'Wszelkie prawa zastrzeżone.',
    translationNote:
      'To tłumaczenie udostępniono dla wygody. W razie jakichkolwiek różnic w stosunku do wersji angielskiej rozstrzygająca jest wersja angielska.',
    soon: 'Wkrótce',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    skip: 'Przejdź do treści',
    arrow: '→',
  },
  notFound: {
    title: 'Nie znaleziono strony',
    body: 'Strona, której szukasz, nie istnieje.',
    back: 'Wróć na stronę główną',
  },
  home: {
    title: 'Rodent Eye — Sprawdź, czy w domu są gryzonie',
    description:
      'Inteligentna kamera, która wypatruje gryzoni w Twoim domu i wysyła zdjęcia oraz alerty na telefon, dzięki czemu wiesz, kiedy wezwać fachowca.',
    eyebrow: 'Monitorowanie gryzoni w Twoim domu',
    h1: 'Podejrzewasz, że masz gryzonie?',
    h1Accent: 'Sprawdź to na pewno.',
    lead:
      'Odchody w spiżarni, drapanie w ścianach, szybki cień w garażu. Ustaw kamerę Rodent Eye tam, gdzie zauważono ślady, a gdy coś się poruszy, wyśle zdjęcia i alert na Twój telefon.',
    ctaPrimary: 'Pobierz aplikację',
    ctaSecondary: 'Jak to działa',
    howTitle: 'Jak to działa',
    steps: [
      {
        title: 'Ustaw kamerę',
        body: 'Postaw ją tam, gdzie zauważono ślady aktywności, i połącz z domowym Wi-Fi, korzystając z konfiguracji krok po kroku w aplikacji.',
      },
      {
        title: 'Pilnuje za Ciebie',
        body: 'Gdy kamera wykryje ruch, robi zdjęcia i nagrywa krótki film, a następnie bezpiecznie je przesyła.',
      },
      {
        title: 'Dostajesz alert',
        body: 'Na telefon przychodzi powiadomienie. Otwórz je, aby zobaczyć, co i kiedy zarejestrowała kamera.',
      },
      {
        title: 'Wezwij fachowca, jeśli to prawda',
        body: 'Jeśli kamera potwierdzi aktywność, aplikacja pokaże firmy zwalczające szkodniki w pobliżu Twojego adresu.',
      },
    ],
    featuresTitle: 'Wszystko w jednej aplikacji',
    features: [
      { title: 'Natychmiastowe alerty', body: 'Powiadomienie push za każdym razem, gdy kamera wykryje ruch.' },
      { title: 'Zdjęcia i filmy', body: 'Zobacz dokładnie, co zarejestrowała każda kamera, zdarzenie po zdarzeniu.' },
      { title: 'Więcej niż jedno miejsce', body: 'Porządkuj kamery według adresu: Twój dom, mieszkanie na wynajem, domek letniskowy.' },
      { title: 'Konfiguracja z przewodnikiem', body: 'Połącz kamerę z Wi-Fi z poziomu telefonu. Bez wzywania technika.' },
      { title: 'Historia zdarzeń', body: 'Przejrzyj ostatnią aktywność, aby zobaczyć, kiedy i gdzie występuje.' },
      { title: 'Lokalni fachowcy', body: 'Znajdź firmy zwalczające szkodniki w pobliżu, gdy potrzebujesz pomocy.' },
    ],
    downloadTitle: 'Pobierz aplikację Rodent Eye',
    downloadLead: 'Na iPhone’a i Androida.',
    supportLink: 'Masz pytania? Odwiedź pomoc',
  },
  support: {
    title: 'Pomoc',
    description: 'Pomoc dotycząca aplikacji i kamery Rodent Eye: konfiguracja, powiadomienia i konto.',
    lead: 'Poniżej znajdziesz szybkie odpowiedzi. Jeśli nadal potrzebujesz pomocy, napisz do nas, a odpowiemy.',
    contactTitle: 'Kontakt',
    contactBody: 'Podaj swoją nazwę użytkownika, a jeśli pytanie dotyczy kamery, także jej numer seryjny.',
    faqTitle: 'Najczęstsze pytania',
    faq: [
      {
        q: 'Jak połączyć kamerę z moim Wi-Fi?',
        a: 'W aplikacji dotknij przycisku „+” w dolnym menu i wykonaj kolejne kroki. Telefon łączy się z kamerą i przesyła jej nazwę oraz hasło Twojej sieci Wi-Fi. Kamera działa z sieciami Wi-Fi <strong>2,4 GHz</strong>.',
      },
      {
        q: 'Dlaczego aplikacja prosi o dostęp do lokalizacji?',
        a: 'Telefon pozwala aplikacjom odczytać nazwę sieci Wi-Fi, z którą jesteś połączony, tylko wtedy, gdy mają uprawnienie do lokalizacji. Rodent Eye korzysta z niego podczas konfiguracji kamery, aby znaleźć jej sieć. Aplikacja nie śledzi ani nie zapisuje lokalizacji Twojego telefonu.',
      },
      {
        q: 'Nie dostaję powiadomień',
        a: 'Sprawdź, czy powiadomienia Rodent Eye są włączone w ustawieniach telefonu i czy jesteś zalogowany. Jeśli ponownie zainstalowałeś aplikację, zaloguj się jeszcze raz, aby telefon został zarejestrowany do otrzymywania alertów.',
      },
      {
        q: 'Moja kamera jest offline',
        a: 'Upewnij się, że kamera ma zasilanie, a Twoje Wi-Fi działa. Jeśli zmieniłeś router lub hasło do Wi-Fi, skonfiguruj kamerę ponownie w aplikacji.',
      },
      {
        q: 'Nie pamiętam hasła',
        a: 'Na ekranie logowania dotknij „Nie pamiętasz hasła?” i wpisz swoją nazwę użytkownika oraz adres e-mail. Wyślemy Ci e-mailem 6-cyfrowy kod do utworzenia nowego hasła. Kod wygasa po 15 minutach.',
      },
      {
        q: 'Kamera wykryła gryzonia. Co teraz?',
        a: 'Obejrzyj zdjęcia i film, aby to potwierdzić. Jeśli jest aktywność, aplikacja pokaże firmy zwalczające szkodniki w pobliżu Twojego adresu, do których możesz zadzwonić lub napisać e-mail bezpośrednio z telefonu.',
      },
      {
        q: 'Jak usunąć konto?',
        a: 'Możesz to zrobić w aplikacji albo poprosić nas o to e-mailem. Instrukcję znajdziesz na <a href="{deleteUrl}">stronie usuwania konta</a>.',
      },
    ],
  },
  privacy: {
    title: 'Polityka prywatności',
    description: 'Jakie dane zbiera Rodent Eye, jak są wykorzystywane i udostępniane, jak długo są przechowywane i jak je usunąć.',
    intro: [
      'Niniejsza polityka prywatności wyjaśnia, w jaki sposób {company} („my”) zbiera, wykorzystuje i udostępnia informacje, gdy korzystasz z aplikacji mobilnej {app}, kamery {app} i tej strony internetowej (łącznie „Usługa”).',
      'Pytania dotyczące tej polityki lub Twoich danych: {email}.',
    ],
    sections: [
      {
        heading: 'Jakie informacje zbieramy',
        blocks: [
          '<strong>Informacje, które nam przekazujesz</strong>',
          [
            '<strong>Konto:</strong> imię i nazwisko, nazwa użytkownika, adres e-mail, numer telefonu, hasło i preferowany język.',
            '<strong>Adresy:</strong> nazwa i adres każdego monitorowanego miejsca, w tym kod pocztowy, współrzędne na mapie i strefa czasowa. Gdy wpisujesz adres, aplikacja wyszukuje go za pomocą wyszukiwarki adresów Google.',
            '<strong>Kamery:</strong> nazwa i lokalizacja nadana każdej kamerze (np. „Garaż”) oraz jej numer seryjny.',
            '<strong>Wiadomości do pomocy technicznej:</strong> wszystko, co wysyłasz nam e-mailem.',
          ],
          '<strong>Informacje z kamery</strong>',
          [
            '<strong>Zdarzenia:</strong> gdy kamera wykryje ruch, wysyła nam zdjęcia i krótkie filmy z obszaru, na który jest skierowana, wraz z datą i godziną.',
            '<strong>Stan urządzenia:</strong> poziom baterii, siła sygnału Wi-Fi, temperatura, odczyty czujników i wersja oprogramowania.',
          ],
          '<strong>Informacje z telefonu</strong>',
          [
            '<strong>Powiadomienia:</strong> aby wysyłać Ci alerty, nasz dostawca powiadomień rejestruje Twój telefon i łączy go z Twoim kontem.',
            '<strong>Uprawnienie do lokalizacji:</strong> używane wyłącznie podczas konfiguracji kamery, aby odczytać nazwę Twojej sieci Wi-Fi. Nie zbieramy ani nie przechowujemy lokalizacji Twojego telefonu.',
            '<strong>Hasło do Wi-Fi:</strong> podczas konfiguracji jest przesyłane bezpośrednio z telefonu do kamery. Nie trafia na nasze serwery. Jeśli konfiguracja się powiedzie, aplikacja zapisuje je w bezpiecznym magazynie telefonu, aby nie trzeba było wpisywać go ponownie.',
            '<strong>Aparat telefonu:</strong> na iPhonie możesz zeskanować kod kreskowy z etykiety kamery. Obraz jest przetwarzany w telefonie i nie jest do nas wysyłany.',
          ],
          '<strong>Rejestry użytkowania:</strong> daty logowania, informacja o tym, kiedy dotykasz opcji kontaktu z firmą zwalczającą szkodniki w aplikacji, rejestry wysyłanych do Ciebie e-maili (np. kodów resetowania hasła) oraz dzienniki techniczne naszych serwerów.',
          'Nie używamy narzędzi reklamowych ani analitycznych i nie śledzimy Cię w innych aplikacjach ani na innych stronach internetowych.',
        ],
      },
      {
        heading: 'Jak wykorzystujemy informacje',
        blocks: [
          [
            'Aby świadczyć Usługę: pokazywać zdarzenia z Twoich kamer i wysyłać Ci alerty, gdy do nich dochodzi.',
            'Aby konfigurować i utrzymywać Twoje kamery, w tym aktualizować ich oprogramowanie.',
            'Aby pokazywać firmy zwalczające szkodniki w pobliżu Twojego adresu (korzystamy tylko z kodu pocztowego).',
            'Aby zarządzać Twoim kontem, pomagać w resetowaniu hasła i odpowiadać na Twoje prośby o pomoc.',
            'Aby zapewniać bezpieczeństwo Usługi, zapobiegać nadużyciom i rozwiązywać problemy.',
            'Aby wypełniać obowiązki prawne.',
          ],
        ],
      },
      {
        heading: 'Jak udostępniamy informacje',
        blocks: [
          'Nie sprzedajemy Twoich danych osobowych i nie udostępniamy ich w celach reklamy ukierunkowanej. Udostępniamy je wyłącznie dostawcom usług, którzy pomagają nam prowadzić Usługę, i tylko w zakresie, w jakim ich potrzebują:',
          [
            '<strong>OneSignal</strong> wysyła powiadomienia push. Otrzymuje identyfikator Twojego konta i telefonu oraz treść każdego alertu (nazwę kamery, lokalizację i zdjęcie zdarzenia). Dostarcza powiadomienia za pośrednictwem Apple i Google.',
            '<strong>Google Maps Platform</strong> zapewnia wyszukiwanie adresów i strefy czasowe. Otrzymuje tekst wpisany w wyszukiwarkę adresów oraz współrzędne adresu.',
            '<strong>Mailchimp Transactional (Mandrill)</strong> wysyła nasze e-maile, np. kody resetowania hasła. Otrzymuje Twoje imię i nazwisko oraz adres e-mail.',
          ],
          'Ci dostawcy mogą wykorzystywać informacje wyłącznie do świadczenia nam swoich usług i muszą je chronić zgodnie z niniejszą polityką i przepisami prawa.',
          'Firmy zwalczające szkodniki widoczne w aplikacji to niezależne przedsiębiorstwa. Nie przekazujemy im Twoich informacji: jeśli zdecydujesz się zadzwonić do którejś z nich lub napisać e-mail, kontaktujesz się z nią bezpośrednio ze swojego telefonu.',
          'Możemy również ujawnić informacje, jeśli wymaga tego prawo, w celu ochrony praw i bezpieczeństwa naszych użytkowników lub innych osób albo w ramach połączenia, przejęcia lub sprzedaży aktywów; w takim przypadku niniejsza polityka będzie nadal obowiązywać.',
        ],
      },
      {
        heading: 'Jak długo przechowujemy informacje',
        blocks: [
          'Przechowujemy informacje o Twoim koncie, adresy, kamery oraz zdjęcia i filmy ze zdarzeń, dopóki Twoje konto jest aktywne.',
          'Gdy usuniesz konto, usuwamy te informacje w sposób opisany na <a href="{deleteUrl}">stronie usuwania konta</a>. Możemy przechowywać ograniczone rejestry dłużej, jeśli jest to potrzebne ze względów bezpieczeństwa, w celu zapobiegania oszustwom lub przestrzegania prawa, np. dzienniki serwerów i rejestry wysłanych do Ciebie e-maili.',
        ],
      },
      {
        heading: 'Twoje wybory i prawa',
        blocks: [
          [
            '<strong>Dostęp i poprawianie:</strong> możesz przeglądać i edytować swoje informacje w aplikacji, w sekcji Profil.',
            '<strong>Usunięcie:</strong> możesz usunąć konto w aplikacji lub poprosić nas o to. Zobacz <a href="{deleteUrl}">Usuń konto</a>.',
            '<strong>Wycofanie zgody:</strong> w każdej chwili możesz wyłączyć powiadomienia lub uprawnienie do lokalizacji w ustawieniach telefonu. Niektóre funkcje, takie jak alerty czy konfiguracja kamery, nie będą bez nich działać.',
          ],
          'W zależności od miejsca zamieszkania, w tym w Kalifornii i innych stanach USA, możesz mieć prawo do uzyskania informacji, jakie Twoje dane osobowe posiadamy, do otrzymania ich kopii, do ich poprawienia lub usunięcia, a także prawo do tego, by nie być traktowanym inaczej z powodu korzystania z tych praw. Aby złożyć wniosek, napisz na adres {email}. Będziemy musieli zweryfikować Twoją tożsamość i odpowiemy w terminie wymaganym przez prawo. Możesz też poprosić upoważnionego pełnomocnika o złożenie wniosku w Twoim imieniu.',
        ],
      },
      {
        heading: 'Bezpieczeństwo',
        blocks: [
          'Informacje przesyłane między aplikacją, kamerą i naszymi serwerami są szyfrowane (HTTPS), a my stosujemy rozsądne środki, aby je chronić. Żaden system nie jest całkowicie bezpieczny, dlatego nie możemy zagwarantować absolutnego bezpieczeństwa; jeśli dowiemy się o naruszeniu, które Cię dotyczy, powiadomimy Cię zgodnie z wymogami prawa.',
        ],
      },
      {
        heading: 'Dzieci',
        blocks: [
          'Usługa nie jest skierowana do dzieci poniżej 13 roku życia i nie zbieramy świadomie ich danych osobowych. Jeśli uważasz, że dziecko przekazało nam informacje, skontaktuj się z nami, a je usuniemy.',
        ],
      },
      {
        heading: 'Do Not Track',
        blocks: [
          'Nie śledzimy użytkowników na stronach internetowych ani w aplikacjach podmiotów trzecich, dlatego nie reagujemy w inny sposób na sygnały „Do Not Track” wysyłane przez przeglądarkę.',
        ],
      },
      {
        heading: 'Gdzie przechowywane są informacje',
        blocks: [
          'Twoje informacje są przechowywane na serwerach obsługiwanych przez nas lub naszych dostawców usług, które mogą znajdować się w innym kraju niż Twój. Korzystając z Usługi, przyjmujesz do wiadomości, że Twoje informacje mogą być przekazywane do tych krajów i tam przetwarzane.',
        ],
      },
      {
        heading: 'Zmiany w tej polityce',
        blocks: [
          'Wszelkie zmiany opublikujemy na tej stronie i zaktualizujemy datę u góry. Jeśli zmiany będą istotne, poinformujemy Cię o tym również w aplikacji lub e-mailem.',
        ],
      },
      {
        heading: 'Kontakt',
        blocks: ['{company} — {email}'],
      },
    ],
  },
  deleteAccount: {
    title: 'Usuń konto Rodent Eye',
    description: 'Jak usunąć konto i dane Rodent Eye — w aplikacji lub bez niej.',
    emailSubject: 'Delete my Rodent Eye account',
    button: 'Poproś o usunięcie e-mailem',
    intro: [
      'Możesz w każdej chwili usunąć swoje konto {app} (aplikacja firmy {company}) — w aplikacji lub bez niej. Usunięcie konta jest trwałe i nie można go cofnąć.',
    ],
    sections: [
      {
        heading: 'Bez aplikacji',
        blocks: [
          'Wyślij e-mail na adres {email} <strong>z adresu e-mail przypisanego do Twojego konta</strong>, z tematem „Delete my Rodent Eye account” i swoją nazwą użytkownika. Możesz użyć przycisku powyżej.',
          'Ze względów bezpieczeństwa możemy poprosić Cię o potwierdzenie wniosku. Usuniemy Twoje konto w ciągu 30 dni i poinformujemy Cię e-mailem, gdy to nastąpi.',
        ],
      },
      {
        heading: 'W aplikacji',
        blocks: [
          [
            'Otwórz Rodent Eye i zaloguj się.',
            'Przejdź do sekcji <strong>Profil</strong>.',
            'Dotknij <strong>Usuń konto (trwale)</strong> i potwierdź.',
          ],
          'Twoje konto zostanie od razu usunięte, a Ty zostaniesz wylogowany na tym telefonie.',
        ],
      },
      {
        heading: 'Co usuwamy',
        blocks: [
          [
            'Informacje o koncie: imię i nazwisko, nazwę użytkownika, adres e-mail, numer telefonu i hasło.',
            'Twoje adresy i kamery.',
            'Wszystkie zdarzenia z kamer. Znikają z Twojego konta od razu; pliki zdjęć i filmów przechowywane na naszych serwerach są usuwane później, w osobnym procesie.',
            'Twoje powiadomienia i powiązanie Twojego telefonu z kontem.',
            'Na telefonie, z którego usuwasz konto, hasła do Wi-Fi zapisane przez aplikację.',
          ],
          'Twoje kamery zostają zwolnione, dzięki czemu można je ponownie skonfigurować na nowym koncie.',
        ],
      },
      {
        heading: 'Co zachowujemy',
        blocks: [
          'Ze względów bezpieczeństwa, zapobiegania oszustwom i z przyczyn prawnych możemy przez ograniczony czas przechowywać dzienniki serwerów oraz rejestry wysłanych do Ciebie e-maili (adres e-mail, temat i datę). Rejestry te nie są wykorzystywane w żadnym innym celu.',
          'Więcej szczegółów w naszej <a href="{privacyUrl}">polityce prywatności</a>.',
        ],
      },
    ],
  },
  terms: {
    title: 'Regulamin',
    description: 'Warunki obowiązujące podczas korzystania z aplikacji, kamery i strony internetowej Rodent Eye.',
    intro: [
      'Niniejszy regulamin stanowi umowę między Tobą a {company} („my”) dotyczącą korzystania z aplikacji mobilnej {app}, kamery {app} i tej strony internetowej („Usługa”). Zakładając konto lub korzystając z Usługi, akceptujesz niniejszy regulamin. Jeśli się z nim nie zgadzasz, nie korzystaj z Usługi.',
    ],
    sections: [
      {
        heading: 'Usługa',
        blocks: [
          '{app} pomaga sprawdzić, czy w wybranych przez Ciebie miejscach występuje aktywność gryzoni. Kamera wykrywa ruch i wysyła zdjęcia, filmy i alerty do aplikacji.',
          '<strong>{app} to narzędzie do monitorowania, a nie usługa zwalczania szkodników.</strong> Nie usuwa szkodników ani im nie zapobiega i może nie wykryć każdego zwierzęcia ani każdego ruchu. Na wykrywanie mogą wpływać miejsce ustawienia kamery, jej bateria i połączenie Wi-Fi. Nie polegaj na {app} jako jedynym sposobie ochrony domu, rodziny, zwierząt domowych czy żywności.',
        ],
      },
      {
        heading: 'Twoje konto',
        blocks: [
          [
            'Aby założyć konto, musisz mieć ukończone 18 lat lub osiągnąć pełnoletność zgodnie z prawem miejsca zamieszkania.',
            'Podawaj prawdziwe informacje i nie ujawniaj swojego hasła. Odpowiadasz za to, co dzieje się na Twoim koncie.',
            'Jeśli podejrzewasz, że ktoś inny korzysta z Twojego konta, niezwłocznie poinformuj nas pod adresem {email}.',
          ],
        ],
      },
      {
        heading: 'Odpowiedzialne korzystanie z kamery',
        blocks: [
          [
            'Instaluj kamery tylko w miejscach, które należą do Ciebie lub które masz prawo monitorować.',
            'Nie kieruj kamer na miejsca, w których ludzie oczekują prywatności, i przestrzegaj przepisów dotyczących nagrywania wideo obowiązujących w miejscu zamieszkania.',
            'Nie używaj Usługi do celów niezgodnych z prawem, do szkodzenia innym ani do prób jej złamania, skopiowania lub poddania inżynierii wstecznej.',
          ],
        ],
      },
      {
        heading: 'Firmy zwalczające szkodniki',
        blocks: [
          'Firmy widoczne w aplikacji to niezależne przedsiębiorstwa. Nie zatrudniamy ich, nie polecamy żadnej konkretnej firmy i nie gwarantujemy jakości ich pracy. Wszelkie umowy, które z nimi zawrzesz, dotyczą wyłącznie Ciebie i danej firmy.',
        ],
      },
      {
        heading: 'Dostępność i zmiany',
        blocks: [
          'Staramy się zapewnić działanie Usługi, ale czasami może być ona niedostępna, np. podczas prac konserwacyjnych lub z powodu problemów z internetem, Wi-Fi albo naszymi dostawcami. Możemy zmieniać, dodawać lub usuwać funkcje. Możemy aktualizować oprogramowanie kamery, aby usuwać problemy lub je ulepszać.',
        ],
      },
      {
        heading: 'Własność',
        blocks: [
          'Aplikacja, oprogramowanie kamery oraz nazwa i logo {app} należą do {company}. Udzielamy Ci osobistej, niezbywalnej licencji na korzystanie z aplikacji przez czas posiadania konta. Zdjęcia i filmy z Twoich kamer należą do Ciebie; zezwalasz nam na ich przechowywanie i przetwarzanie wyłącznie w celu świadczenia Ci Usługi.',
        ],
      },
      {
        heading: 'Zakończenie korzystania',
        blocks: [
          'W każdej chwili możesz przestać korzystać z Usługi i usunąć konto (zobacz <a href="{deleteUrl}">Usuń konto</a>). Możemy zawiesić lub zamknąć konta naruszające niniejszy regulamin.',
        ],
      },
      {
        heading: 'Wyłączenia gwarancji i ograniczenie odpowiedzialności',
        blocks: [
          'Usługa jest świadczona w stanie „takim, jaki jest” i „w miarę dostępności”. W zakresie dozwolonym przez prawo nie udzielamy żadnych gwarancji, w tym gwarancji, że Usługa wykryje całą aktywność szkodników lub będzie działać bez przerw.',
          'W zakresie dozwolonym przez prawo nie ponosimy odpowiedzialności za szkody pośrednie lub wtórne ani za szkody spowodowane przez szkodniki, a nasza łączna odpowiedzialność z tytułu jakiegokolwiek roszczenia związanego z Usługą jest ograniczona do kwoty, którą zapłaciłeś nam za nią w ciągu 12 miesięcy przed zgłoszeniem roszczenia. W niektórych miejscach takie ograniczenia są niedozwolone, więc mogą Cię nie dotyczyć.',
        ],
      },
      {
        heading: 'Apple i Google',
        blocks: [
          'Jeśli pobrałeś aplikację z App Store lub Google Play, obowiązują również ich warunki. Apple i Google nie odpowiadają za aplikację ani za jej wsparcie. Jeśli aplikacja pochodzi z App Store, Apple i jej spółki zależne są osobami trzecimi uprawnionymi z tytułu niniejszego regulaminu.',
        ],
      },
      {
        heading: 'Prawo właściwe',
        blocks: [
          'Niniejszy regulamin podlega prawu stanu Floryda, USA, z wyłączeniem jego norm kolizyjnych.',
        ],
      },
      {
        heading: 'Zmiany regulaminu',
        blocks: [
          'Zmiany opublikujemy na tej stronie i zaktualizujemy datę u góry. Jeśli zmiany będą istotne, poinformujemy Cię o tym w aplikacji lub e-mailem. Dalsze korzystanie z Usługi po wprowadzeniu zmiany oznacza akceptację nowego regulaminu.',
        ],
      },
      {
        heading: 'Kontakt',
        blocks: ['{company} — {email}'],
      },
    ],
  },
};

export default pl;
