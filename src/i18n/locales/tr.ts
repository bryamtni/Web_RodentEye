import type { Dict } from '../types';

const tr: Dict = {
  nav: {
    home: 'Ana sayfa',
    support: 'Destek',
    privacy: 'Gizlilik',
    terms: 'Koşullar',
    deleteAccount: 'Hesabı sil',
    language: 'Dil',
    theme: 'Açık/koyu modu değiştir',
  },
  common: {
    tagline: 'Haşere takibi',
    draft: 'Taslak — hukuki inceleme bekleniyor. Bu, nihai metin değildir.',
    updated: 'Son güncelleme',
    rights: 'Tüm hakları saklıdır.',
    translationNote:
      'Bu çeviri kolaylık sağlamak amacıyla sunulmuştur. İngilizce sürümle herhangi bir farklılık olması durumunda İngilizce sürüm geçerlidir.',
    soon: 'Çok yakında',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    skip: 'İçeriğe geç',
    arrow: '→',
  },
  notFound: {
    title: 'Sayfa bulunamadı',
    body: 'Aradığınız sayfa mevcut değil.',
    back: 'Ana sayfaya dön',
  },
  home: {
    title: 'Rodent Eye — Evinizde kemirgen olup olmadığını öğrenin',
    description:
      'Evinizdeki kemirgen hareketlerini takip eden ve telefonunuza fotoğraf ve uyarı gönderen akıllı bir kamera. Böylece bir uzmanı ne zaman aramanız gerektiğini bilirsiniz.',
    eyebrow: 'Eviniz için kemirgen takibi',
    h1: 'Evinizde kemirgen mi var?',
    h1Accent: 'Kesin olarak öğrenin.',
    lead:
      'Kilerde dışkılar, duvarların içinde tırmalama sesleri, garajda hızla geçen bir gölge. Rodent Eye kamerasını işaretleri gördüğünüz yere yerleştirin; bir şey hareket ettiğinde telefonunuza fotoğraf ve uyarı gönderir.',
    ctaPrimary: 'Uygulamayı indirin',
    ctaSecondary: 'Nasıl çalışır?',
    howTitle: 'Nasıl çalışır?',
    steps: [
      {
        title: 'Kamerayı yerleştirin',
        body: 'Hareket belirtileri gördüğünüz yere koyun ve uygulamanın adım adım kurulumuyla evinizin Wi-Fi ağına bağlayın.',
      },
      {
        title: 'Sizin yerinize gözler',
        body: 'Kamera hareket algıladığında fotoğraf ve kısa bir video çeker ve bunları güvenli bir şekilde yükler.',
      },
      {
        title: 'Uyarı alırsınız',
        body: 'Telefonunuza bir bildirim gelir. Kameranın neyi, ne zaman gördüğünü görmek için bildirimi açın.',
      },
      {
        title: 'Gerçekse bir uzman çağırın',
        body: 'Kamera hareketi doğrularsa uygulama, adresinize yakın haşere kontrol şirketlerini gösterir.',
      },
    ],
    featuresTitle: 'Her şey tek bir uygulamada',
    features: [
      { title: 'Anında uyarılar', body: 'Kamera her hareket algıladığında bir anlık bildirim.' },
      { title: 'Fotoğraf ve video', body: 'Her kameranın neyi kaydettiğini olay olay tam olarak görün.' },
      { title: 'Birden fazla yer', body: 'Kameralarınızı adrese göre düzenleyin: eviniz, kiraya verdiğiniz bir ev, bir dağ evi.' },
      { title: 'Rehberli kurulum', body: 'Kamerayı telefonunuzdan Wi-Fi ağınıza bağlayın. Teknisyene gerek yok.' },
      { title: 'Olay geçmişi', body: 'Hareketin ne zaman ve nerede olduğunu görmek için son etkinliklere göz atın.' },
      { title: 'Yerel uzmanlar', body: 'Yardıma ihtiyacınız olduğunda yakınınızdaki haşere kontrol şirketlerini bulun.' },
    ],
    downloadTitle: 'Rodent Eye uygulamasını indirin',
    downloadLead: 'iPhone ve Android için.',
    supportLink: 'Sorularınız mı var? Destek sayfasını ziyaret edin',
  },
  support: {
    title: 'Destek',
    description: 'Rodent Eye uygulaması ve kamerası için yardım: kurulum, bildirimler ve hesabınız.',
    lead: 'Hızlı yanıtları aşağıda bulabilirsiniz. Hâlâ yardıma ihtiyacınız varsa bize e-posta gönderin, size geri döneceğiz.',
    contactTitle: 'Bize ulaşın',
    contactBody: 'Lütfen kullanıcı adınızı ve sorunuz bir kamerayla ilgiliyse kameranın seri numarasını da ekleyin.',
    faqTitle: 'Sık sorulan sorular',
    faq: [
      {
        q: 'Kamerayı Wi-Fi ağıma nasıl bağlarım?',
        a: 'Uygulamada alt menüdeki “+” düğmesine dokunun ve adımları izleyin. Telefonunuz kameraya bağlanır ve Wi-Fi ağınızın adını ve şifresini kameraya gönderir. Kamera <strong>2,4 GHz</strong> Wi-Fi ağlarıyla çalışır.',
      },
      {
        q: 'Uygulama neden konumumu istiyor?',
        a: 'Telefonunuz, uygulamaların bağlı olduğunuz Wi-Fi ağının adını okumasına yalnızca konum izni varsa olanak tanır. Rodent Eye bu izni, kamera kurulumu sırasında kameranın ağını bulmak için kullanır. Uygulama telefonunuzun konumunu takip etmez veya saklamaz.',
      },
      {
        q: 'Bildirim almıyorum',
        a: 'Telefonunuzun ayarlarında Rodent Eye bildirimlerinin açık olduğundan ve oturum açmış olduğunuzdan emin olun. Uygulamayı yeniden yüklediyseniz, telefonunuzun uyarılar için kaydedilmesi amacıyla tekrar oturum açın.',
      },
      {
        q: 'Kameram çevrimdışı görünüyor',
        a: 'Kameranın elektriğinin olduğundan ve Wi-Fi ağınızın çalıştığından emin olun. Modeminizi veya Wi-Fi şifrenizi değiştirdiyseniz kamerayı uygulamadan yeniden kurun.',
      },
      {
        q: 'Şifremi unuttum',
        a: 'Giriş ekranında “Şifreni mi unuttun?” seçeneğine dokunun ve kullanıcı adınızı ve e-posta adresinizi girin. Yeni bir şifre oluşturmanız için size e-postayla 6 haneli bir kod göndereceğiz. Kodun süresi 15 dakika sonra dolar.',
      },
      {
        q: 'Kamera bir kemirgen algıladı. Şimdi ne yapmalıyım?',
        a: 'Doğrulamak için fotoğraflara ve videoya bakın. Hareket varsa uygulama, adresinize yakın ve doğrudan telefonunuzdan arayabileceğiniz veya e-posta gönderebileceğiniz haşere kontrol şirketlerini gösterir.',
      },
      {
        q: 'Hesabımı nasıl silerim?',
        a: 'Bunu uygulamadan yapabilir veya bizden e-postayla isteyebilirsiniz. Adımları <a href="{deleteUrl}">hesap silme sayfasında</a> bulabilirsiniz.',
      },
    ],
  },
  privacy: {
    title: 'Gizlilik politikası',
    description: 'Rodent Eye hangi verileri toplar, bunları nasıl kullanır ve paylaşır, ne kadar süre saklar ve bu verileri nasıl silebilirsiniz.',
    intro: [
      'Bu gizlilik politikası, {app} mobil uygulamasını, {app} kamerasını ve bu web sitesini (birlikte “Hizmet”) kullandığınızda {company} (“biz”) tarafından bilgilerin nasıl toplandığını, kullanıldığını ve paylaşıldığını açıklar.',
      'Bu politika veya verilerinizle ilgili sorularınız için: {email}.',
    ],
    sections: [
      {
        heading: 'Topladığımız bilgiler',
        blocks: [
          '<strong>Bize verdiğiniz bilgiler</strong>',
          [
            '<strong>Hesap:</strong> ad ve soyad, kullanıcı adı, e-posta adresi, telefon numarası, şifre ve tercih edilen dil.',
            '<strong>Adresler:</strong> takip ettiğiniz her yerin adı ve açık adresi; posta kodu, harita koordinatları ve saat dilimi dahil. Bir adres yazdığınızda uygulama, adresi bulmak için Google’ın adres aramasını kullanır.',
            '<strong>Kameralar:</strong> her kameraya verdiğiniz ad ve konum (örneğin “Garaj”) ile kameranın seri numarası.',
            '<strong>Destek mesajları:</strong> bize e-postayla gönderdiğiniz her şey.',
          ],
          '<strong>Kameranızdan gelen bilgiler</strong>',
          [
            '<strong>Olaylar:</strong> kamera hareket algıladığında, yöneltildiği alanın fotoğraflarını ve kısa videolarını tarih ve saatiyle birlikte bize gönderir.',
            '<strong>Cihaz durumu:</strong> pil seviyesi, Wi-Fi sinyal gücü, sıcaklık, sensör ölçümleri ve yazılım sürümü.',
          ],
          '<strong>Telefonunuzdan gelen bilgiler</strong>',
          [
            '<strong>Bildirimler:</strong> size uyarı gönderebilmek için bildirim sağlayıcımız telefonunuzu kaydeder ve hesabınızla ilişkilendirir.',
            '<strong>Konum izni:</strong> yalnızca kamera kurulumu sırasında Wi-Fi ağınızın adını okumak için kullanılır. Telefonunuzun konumunu toplamayız veya saklamayız.',
            '<strong>Wi-Fi şifresi:</strong> kurulum sırasında doğrudan telefonunuzdan kameraya gönderilir. Sunucularımıza gönderilmez. Kurulum başarılı olursa, tekrar yazmanız gerekmemesi için uygulama şifreyi telefonunuzun güvenli depolama alanına kaydeder.',
            '<strong>Telefon kamerası:</strong> iPhone’da kameranın etiketindeki barkodu tarayabilirsiniz. Görüntü telefonunuzda işlenir ve bize gönderilmez.',
          ],
          '<strong>Kullanım kayıtları:</strong> oturum açma tarihleri, uygulamadan bir haşere kontrol şirketiyle iletişime geçmek için ne zaman dokunduğunuz, size gönderdiğimiz e-postaların kayıtları (şifre sıfırlama kodları gibi) ve sunucularımızın teknik günlükleri.',
          'Reklam veya analiz araçları kullanmayız ve sizi diğer uygulamalarda ya da web sitelerinde takip etmeyiz.',
        ],
      },
      {
        heading: 'Bilgileri nasıl kullanırız',
        blocks: [
          [
            'Hizmeti sunmak için: kameralarınızın olaylarını göstermek ve olaylar gerçekleştiğinde size uyarı göndermek.',
            'Yazılım güncellemeleri dahil olmak üzere kameralarınızı kurmak ve bakımını yapmak için.',
            'Adresinize yakın haşere kontrol şirketlerini göstermek için (yalnızca posta kodunu kullanırız).',
            'Hesabınızı yönetmek, şifrenizi sıfırlamanıza yardımcı olmak ve destek taleplerinizi yanıtlamak için.',
            'Hizmeti güvende tutmak, kötüye kullanımı önlemek ve sorunları gidermek için.',
            'Yasal yükümlülüklere uymak için.',
          ],
        ],
      },
      {
        heading: 'Bilgileri nasıl paylaşırız',
        blocks: [
          'Kişisel bilgilerinizi satmayız ve hedefli reklamcılık için paylaşmayız. Bunları yalnızca Hizmeti yürütmemize yardımcı olan hizmet sağlayıcılarla ve yalnızca ihtiyaç duydukları kadarıyla paylaşırız:',
          [
            '<strong>OneSignal</strong> anlık bildirimleri gönderir. Hesabınıza ve telefonunuza ait bir tanımlayıcıyı ve her uyarının içeriğini (kamera adı, konumu ve olayın bir fotoğrafı) alır. Bildirimleri Apple ve Google üzerinden iletir.',
            '<strong>Google Maps Platform</strong> adres arama ve saat dilimi hizmetlerini sağlar. Adres aramasına yazdığınız metni ve adresin koordinatlarını alır.',
            '<strong>Mailchimp Transactional (Mandrill)</strong> şifre sıfırlama kodları gibi e-postalarımızı gönderir. Adınızı ve e-posta adresinizi alır.',
          ],
          'Bu sağlayıcılar bilgileri yalnızca bize hizmetlerini sunmak için kullanabilir ve bu politikaya ve yasalara uygun şekilde korumak zorundadır.',
          'Uygulamada gösterilen haşere kontrol şirketleri bağımsız işletmelerdir. Bilgilerinizi onlara göndermeyiz: birini aramayı veya ona e-posta göndermeyi seçerseniz, onunla doğrudan kendi telefonunuzdan iletişime geçersiniz.',
          'Ayrıca yasaların gerektirmesi durumunda, kullanıcılarımızın veya başkalarının haklarını ve güvenliğini korumak için ya da bir birleşme, devralma veya varlık satışı kapsamında bilgileri açıklayabiliriz; bu durumda bu politika uygulanmaya devam eder.',
        ],
      },
      {
        heading: 'Bilgileri ne kadar süre saklarız',
        blocks: [
          'Hesap bilgilerinizi, adreslerinizi, kameralarınızı ve olay fotoğraflarını ve videolarını hesabınız aktif olduğu sürece saklarız.',
          'Hesabınızı sildiğinizde bu bilgileri <a href="{deleteUrl}">hesap silme sayfasında</a> açıklandığı şekilde sileriz. Güvenlik, dolandırıcılığın önlenmesi veya yasalara uyum için gerektiğinde, sunucu günlükleri ve size gönderdiğimiz e-postaların kayıtları gibi sınırlı kayıtları daha uzun süre saklayabiliriz.',
        ],
      },
      {
        heading: 'Seçimleriniz ve haklarınız',
        blocks: [
          [
            '<strong>Erişim ve düzeltme:</strong> bilgilerinizi uygulamada Profil bölümünden görebilir ve düzenleyebilirsiniz.',
            '<strong>Silme:</strong> hesabınızı uygulamadan silebilir veya bunu bizden isteyebilirsiniz. Bkz. <a href="{deleteUrl}">Hesabı sil</a>.',
            '<strong>Onayı geri çekme:</strong> bildirimleri veya konum iznini istediğiniz zaman telefonunuzun ayarlarından kapatabilirsiniz. Uyarılar veya kamera kurulumu gibi bazı özellikler bunlar olmadan çalışmaz.',
          ],
          'Yaşadığınız yere bağlı olarak (Kaliforniya ve diğer ABD eyaletleri dahil), hakkınızda hangi kişisel bilgilere sahip olduğumuzu öğrenme, bunların bir kopyasını alma, bunları düzeltme veya silme hakkına ve bu hakları kullandığınız için farklı muameleye maruz kalmama hakkına sahip olabilirsiniz. Talepte bulunmak için {email} adresine e-posta gönderin. Kimliğinizi doğrulamamız gerekecek ve yasaların öngördüğü süre içinde yanıt vereceğiz. Talebi sizin adınıza yapması için yetkili bir temsilciden de yardım isteyebilirsiniz.',
        ],
      },
      {
        heading: 'Güvenlik',
        blocks: [
          'Uygulama, kamera ve sunucularımız arasındaki bilgiler şifrelenmiş olarak (HTTPS) iletilir ve bunları korumak için makul önlemler alırız. Hiçbir sistem tamamen güvenli değildir, bu nedenle mutlak güvenliği garanti edemeyiz; sizi etkileyen bir ihlalden haberdar olursak, yasaların gerektirdiği şekilde sizi bilgilendiririz.',
        ],
      },
      {
        heading: 'Çocuklar',
        blocks: [
          'Hizmet 13 yaşından küçük çocuklara yönelik değildir ve onlardan bilerek kişisel bilgi toplamayız. Bir çocuğun bize bilgi verdiğini düşünüyorsanız bizimle iletişime geçin, bu bilgileri sileriz.',
        ],
      },
      {
        heading: 'Do Not Track',
        blocks: [
          'Kullanıcıları üçüncü taraf web sitelerinde veya uygulamalarda takip etmeyiz, bu nedenle tarayıcıların “Do Not Track” (Beni İzleme) sinyallerine farklı bir şekilde yanıt vermeyiz.',
        ],
      },
      {
        heading: 'Bilgilerin saklandığı yer',
        blocks: [
          'Bilgileriniz, bizim veya hizmet sağlayıcılarımızın işlettiği ve sizin ülkenizden farklı bir ülkede bulunabilecek sunucularda saklanır. Hizmeti kullanarak bilgilerinizin bu ülkelere aktarılabileceğini ve orada işlenebileceğini anladığınızı kabul edersiniz.',
        ],
      },
      {
        heading: 'Bu politikadaki değişiklikler',
        blocks: [
          'Tüm değişiklikleri bu sayfada yayımlar ve en üstteki tarihi güncelleriz. Değişiklikler önemliyse sizi ayrıca uygulama içinden veya e-postayla bilgilendiririz.',
        ],
      },
      {
        heading: 'İletişim',
        blocks: ['{company} — {email}'],
      },
    ],
  },
  deleteAccount: {
    title: 'Rodent Eye hesabınızı silin',
    description: 'Rodent Eye hesabınızı ve verilerinizi uygulamayla veya uygulama olmadan nasıl silebileceğiniz.',
    emailSubject: 'Delete my Rodent Eye account',
    button: 'E-postayla silme talep edin',
    intro: [
      '{app} hesabınızı ({company} tarafından sunulan uygulama) istediğiniz zaman, uygulamadan veya uygulama olmadan silebilirsiniz. Hesabınızı silmek kalıcıdır ve geri alınamaz.',
    ],
    sections: [
      {
        heading: 'Uygulama olmadan',
        blocks: [
          '{email} adresine <strong>hesabınızda kayıtlı e-posta adresinden</strong>, konu satırına “Delete my Rodent Eye account” yazarak ve kullanıcı adınızı belirterek bir e-posta gönderin. Yukarıdaki düğmeyi kullanabilirsiniz.',
          'Güvenliğiniz için talebinizi onaylamanızı isteyebiliriz. Hesabınızı 30 gün içinde siler ve işlem tamamlandığında size e-posta göndeririz.',
        ],
      },
      {
        heading: 'Uygulamada',
        blocks: [
          [
            'Rodent Eye uygulamasını açın ve giriş yapın.',
            '<strong>Profil</strong> bölümüne gidin.',
            '<strong>Hesabı Sil (kalıcı olarak)</strong> seçeneğine dokunun ve onaylayın.',
          ],
          'Hesabınız hemen silinir ve o telefonda oturumunuz kapatılır.',
        ],
      },
      {
        heading: 'Neleri sileriz',
        blocks: [
          [
            'Hesap bilgileriniz: ad, kullanıcı adı, e-posta, telefon numarası ve şifre.',
            'Adresleriniz ve kameralarınız.',
            'Tüm kamera olayları. Hesabınızdan hemen kaybolur; sunucularımızda saklanan fotoğraf ve video dosyaları ise daha sonra ayrı bir işlemle silinir.',
            'Bildirimleriniz ve telefonunuz ile hesabınız arasındaki bağlantı.',
            'Silme işlemi için kullandığınız telefonda, uygulamanın kaydettiği Wi-Fi şifreleri.',
          ],
          'Kameralarınız serbest bırakılır; böylece yeni bir hesapta yeniden kurulabilirler.',
        ],
      },
      {
        heading: 'Neleri saklarız',
        blocks: [
          'Güvenlik, dolandırıcılığın önlenmesi ve yasal nedenlerle, sunucu günlüklerini ve size gönderdiğimiz e-postaların kayıtlarını (e-posta adresi, konu ve tarih) sınırlı bir süre saklayabiliriz. Bu kayıtlar başka hiçbir amaçla kullanılmaz.',
          'Daha fazla ayrıntı için <a href="{privacyUrl}">gizlilik politikamıza</a> bakın.',
        ],
      },
    ],
  },
  terms: {
    title: 'Kullanım koşulları',
    description: 'Rodent Eye uygulamasını, kamerasını ve web sitesini kullandığınızda geçerli olan koşullar.',
    intro: [
      'Bu koşullar, {app} mobil uygulamasını, {app} kamerasını ve bu web sitesini (“Hizmet”) kullanımınıza ilişkin olarak sizinle {company} (“biz”) arasında yapılan bir sözleşmedir. Bir hesap oluşturarak veya Hizmeti kullanarak bu koşulları kabul etmiş olursunuz. Kabul etmiyorsanız Hizmeti kullanmayın.',
    ],
    sections: [
      {
        heading: 'Hizmet',
        blocks: [
          '{app}, seçtiğiniz yerlerde kemirgen hareketi olup olmadığını öğrenmenize yardımcı olur. Kamera hareketi algılar ve uygulamaya fotoğraf, video ve uyarı gönderir.',
          '<strong>{app} bir izleme aracıdır, haşere kontrol hizmeti değildir.</strong> Haşereleri uzaklaştırmaz veya önlemez ve her hayvanı ya da her hareketi algılamayabilir. Algılamalar, kameranın yerleştirildiği yerden, pilinden ve Wi-Fi bağlantısından etkilenebilir. Evinizi, ailenizi, evcil hayvanlarınızı veya yiyeceklerinizi korumanın tek yolu olarak buna güvenmeyin.',
        ],
      },
      {
        heading: 'Hesabınız',
        blocks: [
          [
            'Hesap oluşturmak için en az 18 yaşında veya yaşadığınız yerdeki reşit olma yaşında olmanız gerekir.',
            'Doğru bilgi verin ve şifrenizi gizli tutun. Hesabınızda gerçekleşenlerden siz sorumlusunuz.',
            'Hesabınızı başka birinin kullandığını düşünüyorsanız hemen {email} adresinden bize bildirin.',
          ],
        ],
      },
      {
        heading: 'Kamerayı sorumlu bir şekilde kullanma',
        blocks: [
          [
            'Kameraları yalnızca size ait olan veya izleme izniniz bulunan yerlere kurun.',
            'Kameraları insanların mahremiyet beklediği alanlara yöneltmeyin ve yaşadığınız yerde video kaydına ilişkin yasalara uyun.',
            'Hizmeti yasa dışı amaçlarla, başkalarına zarar vermek için veya Hizmeti kırmaya, kopyalamaya ya da tersine mühendislik uygulamaya çalışmak için kullanmayın.',
          ],
        ],
      },
      {
        heading: 'Haşere kontrol şirketleri',
        blocks: [
          'Uygulamada gösterilen şirketler bağımsız işletmelerdir. Onları istihdam etmeyiz, belirli bir şirketi önermeyiz ve işlerini garanti etmeyiz. Onlarla yaptığınız her türlü anlaşma sizinle ilgili şirket arasındadır.',
        ],
      },
      {
        heading: 'Erişilebilirlik ve değişiklikler',
        blocks: [
          'Hizmeti çalışır durumda tutmak için çaba gösteririz, ancak Hizmet zaman zaman, örneğin bakım sırasında veya internet, Wi-Fi ya da sağlayıcılarımızla ilgili sorunlar nedeniyle kullanılamayabilir. Özellikleri değiştirebilir, ekleyebilir veya kaldırabiliriz. Sorunları gidermek veya iyileştirmek için kameranın yazılımını güncelleyebiliriz.',
        ],
      },
      {
        heading: 'Mülkiyet',
        blocks: [
          'Uygulama, kamera yazılımı ve {app} adı ile logosu {company} şirketine aittir. Hesabınız olduğu sürece uygulamayı kullanmanız için size kişisel ve devredilemez bir lisans veririz. Kameralarınızdan gelen fotoğraf ve videolar size aittir; bunları yalnızca size Hizmeti sunmak için saklamamıza ve işlememize izin verirsiniz.',
        ],
      },
      {
        heading: 'Kullanımın sona erdirilmesi',
        blocks: [
          'Hizmeti kullanmayı istediğiniz zaman bırakabilir ve hesabınızı silebilirsiniz (bkz. <a href="{deleteUrl}">Hesabı sil</a>). Bu koşulları ihlal eden hesapları askıya alabilir veya kapatabiliriz.',
        ],
      },
      {
        heading: 'Sorumluluk reddi ve sorumluluğun sınırlandırılması',
        blocks: [
          'Hizmet “olduğu gibi” ve “mevcut olduğu şekilde” sunulur. Yasaların izin verdiği ölçüde, Hizmetin tüm haşere hareketlerini algılayacağı veya kesintisiz çalışacağı da dahil olmak üzere hiçbir türde garanti vermeyiz.',
          'Yasaların izin verdiği ölçüde, dolaylı veya sonuç olarak ortaya çıkan zararlardan ya da haşerelerin neden olduğu zararlardan sorumlu değiliz ve Hizmetle ilgili herhangi bir talep için toplam sorumluluğumuz, talepten önceki 12 ay içinde Hizmet için bize ödediğiniz tutarla sınırlıdır. Bazı yerler bu sınırlamalara izin vermez, bu nedenle sizin için geçerli olmayabilirler.',
        ],
      },
      {
        heading: 'Apple ve Google',
        blocks: [
          'Uygulamayı App Store veya Google Play’den indirdiyseniz, onların koşulları da geçerlidir. Apple ve Google, uygulamadan veya uygulamanın desteğinden sorumlu değildir. Uygulamayı App Store’dan edindiyseniz, Apple ve bağlı ortaklıkları bu koşulların üçüncü taraf lehtarlarıdır.',
        ],
      },
      {
        heading: 'Geçerli hukuk',
        blocks: [
          'Bu koşullar, kanunlar ihtilafı kuralları dikkate alınmaksızın ABD’nin Florida Eyaleti yasalarına tabidir.',
        ],
      },
      {
        heading: 'Bu koşullardaki değişiklikler',
        blocks: [
          'Değişiklikleri bu sayfada yayımlar ve en üstteki tarihi güncelleriz. Değişiklikler önemliyse sizi uygulama içinden veya e-postayla bilgilendiririz. Bir değişiklikten sonra Hizmeti kullanmaya devam ederseniz yeni koşulları kabul etmiş olursunuz.',
        ],
      },
      {
        heading: 'İletişim',
        blocks: ['{company} — {email}'],
      },
    ],
  },
};

export default tr;
