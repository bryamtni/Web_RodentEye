import type { Dict } from '../types';

const pt: Dict = {
  nav: {
    home: 'Início',
    support: 'Suporte',
    privacy: 'Privacidade',
    terms: 'Termos',
    deleteAccount: 'Excluir conta',
    language: 'Idioma',
  },
  common: {
    tagline: 'Monitoramento de pragas',
    draft: 'Rascunho: aguardando revisão jurídica. Este não é o texto final.',
    updated: 'Última atualização',
    rights: 'Todos os direitos reservados.',
    translationNote:
      'Esta é uma tradução oferecida para sua conveniência. Se houver qualquer diferença em relação à versão em inglês, prevalece a versão em inglês.',
    soon: 'Em breve',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    skip: 'Pular para o conteúdo',
    arrow: '→',
  },
  notFound: {
    title: 'Página não encontrada',
    body: 'A página que você procura não existe.',
    back: 'Voltar ao início',
  },
  home: {
    title: 'Rodent Eye — Descubra se há roedores na sua casa',
    description:
      'Uma câmera inteligente que monitora a atividade de roedores na sua casa e envia fotos e alertas para o seu celular, para você saber quando é hora de chamar um profissional.',
    eyebrow: 'Monitoramento de roedores para a sua casa',
    h1: 'Acha que tem roedores em casa?',
    h1Accent: 'Tire a dúvida.',
    lead:
      'Fezes na despensa, arranhões dentro das paredes, uma sombra rápida na garagem. Coloque uma câmera Rodent Eye onde você viu os sinais e ela enviará fotos e um alerta para o seu celular quando algo se mover.',
    ctaPrimary: 'Baixe o app',
    ctaSecondary: 'Como funciona',
    howTitle: 'Como funciona',
    steps: [
      {
        title: 'Coloque a câmera',
        body: 'Instale-a onde você notou sinais de atividade e conecte-a ao WiFi da sua casa com a configuração passo a passo do app.',
      },
      {
        title: 'Ela vigia por você',
        body: 'Quando a câmera detecta movimento, ela tira fotos e grava um vídeo curto e os envia com segurança.',
      },
      {
        title: 'Você recebe um alerta',
        body: 'Uma notificação chega ao seu celular. Abra-a para ver o que a câmera viu e quando.',
      },
      {
        title: 'Se for real, chame um profissional',
        body: 'Se a câmera confirmar atividade, o app mostra empresas de controle de pragas perto do seu endereço.',
      },
    ],
    featuresTitle: 'Tudo em um só app',
    features: [
      { title: 'Alertas instantâneos', body: 'Uma notificação push sempre que a câmera detecta movimento.' },
      { title: 'Fotos e vídeo', body: 'Veja exatamente o que cada câmera registrou, evento por evento.' },
      { title: 'Mais de um lugar', body: 'Organize suas câmeras por endereço: sua casa, um imóvel alugado, uma casa de campo.' },
      { title: 'Configuração guiada', body: 'Conecte a câmera ao seu WiFi pelo celular. Sem precisar de técnico.' },
      { title: 'Histórico de eventos', body: 'Consulte a atividade recente para ver quando e onde ela acontece.' },
      { title: 'Profissionais locais', body: 'Encontre empresas de controle de pragas perto de você quando precisar de ajuda.' },
    ],
    downloadTitle: 'Baixe o app Rodent Eye',
    downloadLead: 'Para iPhone e Android.',
    supportLink: 'Dúvidas? Visite o suporte',
  },
  support: {
    title: 'Suporte',
    description: 'Ajuda com o app e a câmera Rodent Eye: configuração, notificações e sua conta.',
    lead: 'Encontre respostas rápidas abaixo. Se ainda precisar de ajuda, envie um e-mail e responderemos.',
    contactTitle: 'Fale conosco',
    contactBody: 'Informe seu nome de usuário e, se a dúvida for sobre uma câmera, o número de série dela.',
    faqTitle: 'Perguntas frequentes',
    faq: [
      {
        q: 'Como conecto uma câmera ao meu WiFi?',
        a: 'No app, toque no botão “+” do menu inferior e siga os passos. Seu celular se conecta à câmera e envia a ela o nome e a senha do seu WiFi. A câmera funciona com redes WiFi de <strong>2.4 GHz</strong>.',
      },
      {
        q: 'Por que o app pede minha localização?',
        a: 'Seu celular só permite que os apps leiam o nome da rede WiFi à qual você está conectado se tiverem permissão de localização. O Rodent Eye usa essa permissão durante a configuração da câmera para encontrar a rede da câmera. O app não rastreia nem armazena a localização do seu celular.',
      },
      {
        q: 'Não estou recebendo notificações',
        a: 'Verifique se as notificações do Rodent Eye estão ativadas nas configurações do seu celular e se você está conectado à sua conta. Se você reinstalou o app, entre novamente para que seu celular seja registrado para receber alertas.',
      },
      {
        q: 'Minha câmera aparece offline',
        a: 'Verifique se a câmera está ligada na energia e se o seu WiFi está funcionando. Se você trocou de roteador ou mudou a senha do WiFi, configure a câmera novamente pelo app.',
      },
      {
        q: 'Esqueci minha senha',
        a: 'Na tela de login, toque em “Esqueceu a senha?” e informe seu nome de usuário e seu e-mail. Enviaremos por e-mail um código de 6 dígitos para você criar uma nova senha. O código expira após 15 minutos.',
      },
      {
        q: 'A câmera detectou um roedor. E agora?',
        a: 'Veja as fotos e o vídeo para confirmar. Se houver atividade, o app mostra empresas de controle de pragas perto do seu endereço, para as quais você pode ligar ou enviar e-mail diretamente do seu celular.',
      },
      {
        q: 'Como excluo minha conta?',
        a: 'Você pode fazer isso no app ou nos pedir por e-mail. Veja os passos na <a href="{deleteUrl}">página de exclusão de conta</a>.',
      },
    ],
  },
  privacy: {
    title: 'Política de privacidade',
    description: 'Quais dados o Rodent Eye coleta, como são usados e compartilhados, por quanto tempo são mantidos e como excluí-los.',
    intro: [
      'Esta política de privacidade explica como a {company} (“nós”) coleta, usa e compartilha informações quando você usa o app móvel {app}, a câmera {app} e este site (em conjunto, o “Serviço”).',
      'Dúvidas sobre esta política ou sobre seus dados: {email}.',
    ],
    sections: [
      {
        heading: 'Informações que coletamos',
        blocks: [
          '<strong>Informações que você nos fornece</strong>',
          [
            '<strong>Conta:</strong> nome e sobrenome, nome de usuário, endereço de e-mail, número de telefone, senha e idioma preferido.',
            '<strong>Endereços:</strong> o nome e o endereço de cada local que você monitora, incluindo CEP, coordenadas no mapa e fuso horário. Quando você digita um endereço, o app usa a busca de endereços do Google para encontrá-lo.',
            '<strong>Câmeras:</strong> o nome e o local que você dá a cada câmera (por exemplo, “Garagem”) e o número de série dela.',
            '<strong>Mensagens de suporte:</strong> tudo o que você nos enviar por e-mail.',
          ],
          '<strong>Informações da sua câmera</strong>',
          [
            '<strong>Eventos:</strong> quando a câmera detecta movimento, ela nos envia fotos e vídeos curtos da área para a qual está apontada, com a data e a hora.',
            '<strong>Status do dispositivo:</strong> nível da bateria, intensidade do sinal WiFi, temperatura, leituras dos sensores e versão do software.',
          ],
          '<strong>Informações do seu celular</strong>',
          [
            '<strong>Notificações:</strong> para enviar alertas a você, nosso provedor de notificações registra seu celular e o vincula à sua conta.',
            '<strong>Permissão de localização:</strong> usada apenas durante a configuração da câmera para ler o nome da sua rede WiFi. Não coletamos nem armazenamos a localização do seu celular.',
            '<strong>Senha do WiFi:</strong> enviada diretamente do seu celular para a câmera durante a configuração. Ela não é enviada aos nossos servidores. Se a configuração der certo, o app a salva no armazenamento seguro do seu celular para que você não precise digitá-la de novo.',
            '<strong>Câmera do celular:</strong> no iPhone, você pode escanear o código de barras da etiqueta da câmera. A imagem é processada no seu celular e não é enviada para nós.',
          ],
          '<strong>Registros de uso:</strong> datas de login, quando você toca para entrar em contato com uma empresa de controle de pragas pelo app, registros dos e-mails que enviamos a você (como os códigos de redefinição de senha) e registros técnicos dos nossos servidores.',
          'Não usamos ferramentas de publicidade nem de análise, e não rastreamos você em outros apps ou sites.',
        ],
      },
      {
        heading: 'Como usamos as informações',
        blocks: [
          [
            'Para prestar o Serviço: mostrar os eventos das suas câmeras e enviar alertas a você quando eles acontecem.',
            'Para configurar e manter suas câmeras, incluindo atualizações de software.',
            'Para mostrar empresas de controle de pragas perto do seu endereço (usamos apenas o CEP).',
            'Para gerenciar sua conta, ajudar você a redefinir sua senha e responder às suas solicitações de suporte.',
            'Para manter o Serviço seguro, evitar uso indevido e corrigir problemas.',
            'Para cumprir obrigações legais.',
          ],
        ],
      },
      {
        heading: 'Como compartilhamos as informações',
        blocks: [
          'Não vendemos suas informações pessoais nem as compartilhamos para publicidade direcionada. Nós as compartilhamos apenas com provedores de serviços que nos ajudam a operar o Serviço, e somente o que eles precisam:',
          [
            '<strong>OneSignal</strong> envia as notificações push. Recebe um identificador da sua conta e do seu celular, e o conteúdo de cada alerta (nome da câmera, local e uma foto do evento). Entrega as notificações por meio da Apple e do Google.',
            '<strong>Google Maps Platform</strong> fornece a busca de endereços e os fusos horários. Recebe o texto que você digita na busca de endereços e as coordenadas do endereço.',
            '<strong>Mailchimp Transactional (Mandrill)</strong> envia nossos e-mails, como os códigos de redefinição de senha. Recebe seu nome e seu endereço de e-mail.',
          ],
          'Esses provedores só podem usar as informações para nos prestar seus serviços e devem protegê-las de acordo com esta política e com a lei.',
          'As empresas de controle de pragas exibidas no app são negócios independentes. Não enviamos suas informações a elas: se você decidir ligar ou enviar e-mail para uma delas, você entra em contato diretamente pelo seu celular.',
          'Também podemos divulgar informações se exigido por lei, para proteger os direitos e a segurança dos nossos usuários ou de terceiros, ou como parte de uma fusão, aquisição ou venda de ativos, caso em que esta política continuará a se aplicar.',
        ],
      },
      {
        heading: 'Por quanto tempo mantemos as informações',
        blocks: [
          'Mantemos as informações da sua conta, seus endereços, suas câmeras e as fotos e vídeos dos eventos enquanto sua conta estiver ativa.',
          'Quando você exclui sua conta, excluímos essas informações conforme descrito na <a href="{deleteUrl}">página de exclusão de conta</a>. Podemos manter registros limitados por mais tempo quando necessário por segurança, para prevenir fraudes ou para cumprir a lei, como registros dos servidores e registros dos e-mails que enviamos a você.',
        ],
      },
      {
        heading: 'Suas escolhas e direitos',
        blocks: [
          [
            '<strong>Acessar e corrigir:</strong> você pode ver e editar suas informações no app, em Perfil.',
            '<strong>Excluir:</strong> você pode excluir sua conta no app ou nos pedir para fazer isso. Veja <a href="{deleteUrl}">Excluir conta</a>.',
            '<strong>Retirar o consentimento:</strong> você pode desativar as notificações ou a permissão de localização a qualquer momento nas configurações do seu celular. Alguns recursos, como os alertas ou a configuração da câmera, não funcionarão sem elas.',
          ],
          'Dependendo de onde você mora, incluindo a Califórnia e outros estados dos EUA, você pode ter o direito de saber quais informações pessoais temos sobre você, de obter uma cópia, de corrigi-las ou de excluí-las, e o direito de não ser tratado de forma diferente por exercer esses direitos. Para fazer uma solicitação, envie um e-mail para {email}. Precisaremos verificar sua identidade e responderemos dentro do prazo exigido por lei. Você também pode pedir que um agente autorizado faça a solicitação em seu nome.',
        ],
      },
      {
        heading: 'Segurança',
        blocks: [
          'As informações entre o app, a câmera e nossos servidores trafegam criptografadas (HTTPS), e adotamos medidas razoáveis para protegê-las. Nenhum sistema é totalmente seguro, por isso não podemos garantir segurança absoluta; se tomarmos conhecimento de uma violação que afete você, avisaremos conforme exigido por lei.',
        ],
      },
      {
        heading: 'Crianças',
        blocks: [
          'O Serviço não se destina a menores de 13 anos, e não coletamos intencionalmente informações pessoais deles. Se você acredita que uma criança nos forneceu informações, entre em contato conosco e as excluiremos.',
        ],
      },
      {
        heading: 'Do Not Track (Não rastrear)',
        blocks: [
          'Não rastreamos usuários em sites ou apps de terceiros, por isso não respondemos de forma diferente aos sinais “Do Not Track” do navegador.',
        ],
      },
      {
        heading: 'Onde as informações são armazenadas',
        blocks: [
          'Suas informações são armazenadas em servidores operados por nós ou por nossos provedores de serviços, que podem estar em um país diferente do seu. Ao usar o Serviço, você entende que suas informações podem ser transferidas para esses países e processadas neles.',
        ],
      },
      {
        heading: 'Alterações nesta política',
        blocks: [
          'Publicaremos qualquer alteração nesta página e atualizaremos a data no topo. Se as alterações forem significativas, também avisaremos você no app ou por e-mail.',
        ],
      },
      {
        heading: 'Contato',
        blocks: ['{company} — {email}'],
      },
    ],
  },
  deleteAccount: {
    title: 'Exclua sua conta do Rodent Eye',
    description: 'Como excluir sua conta e seus dados do Rodent Eye, com ou sem o app.',
    emailSubject: 'Delete my Rodent Eye account',
    button: 'Solicitar a exclusão por e-mail',
    intro: [
      'Você pode excluir sua conta do {app} (app da {company}) a qualquer momento, pelo app ou sem ele. A exclusão da conta é permanente e não pode ser desfeita.',
    ],
    sections: [
      {
        heading: 'Sem o app',
        blocks: [
          'Envie um e-mail para {email} <strong>a partir do endereço de e-mail da sua conta</strong>, com o assunto “Delete my Rodent Eye account” e seu nome de usuário. Você pode usar o botão acima.',
          'Para sua segurança, podemos pedir que você confirme a solicitação. Excluiremos sua conta em até 30 dias e avisaremos você por e-mail quando isso for feito.',
        ],
      },
      {
        heading: 'No app',
        blocks: [
          [
            'Abra o Rodent Eye e entre na sua conta.',
            'Vá para <strong>Perfil</strong>.',
            'Toque em <strong>Excluir conta (permanentemente)</strong> e confirme.',
          ],
          'Sua conta é excluída imediatamente e você é desconectado nesse celular.',
        ],
      },
      {
        heading: 'O que excluímos',
        blocks: [
          [
            'As informações da sua conta: nome, nome de usuário, e-mail, número de telefone e senha.',
            'Seus endereços e câmeras.',
            'Todos os eventos das câmeras, incluindo suas fotos e vídeos.',
            'Suas notificações e o vínculo entre seu celular e sua conta.',
            'No celular que você usar para excluí-la, as senhas de WiFi salvas pelo app.',
          ],
          'Suas câmeras são liberadas e podem ser configuradas novamente em uma nova conta.',
        ],
      },
      {
        heading: 'O que mantemos',
        blocks: [
          'Por motivos de segurança, prevenção de fraudes e razões legais, podemos manter, por um tempo limitado, registros dos servidores e registros dos e-mails que enviamos a você (endereço de e-mail, assunto e data). Esses registros não são usados para nenhuma outra finalidade.',
          'Mais detalhes na nossa <a href="{privacyUrl}">política de privacidade</a>.',
        ],
      },
    ],
  },
  terms: {
    title: 'Termos de uso',
    description: 'Os termos que se aplicam quando você usa o app, a câmera e o site do Rodent Eye.',
    intro: [
      'Estes termos são um acordo entre você e a {company} (“nós”) sobre o seu uso do app móvel {app}, da câmera {app} e deste site (o “Serviço”). Ao criar uma conta ou usar o Serviço, você aceita estes termos. Se você não concordar, não use o Serviço.',
    ],
    sections: [
      {
        heading: 'O Serviço',
        blocks: [
          'O {app} ajuda você a descobrir se há atividade de roedores nos lugares que você escolher. A câmera detecta movimento e envia fotos, vídeos e alertas para o app.',
          '<strong>O {app} é uma ferramenta de monitoramento, não um serviço de controle de pragas.</strong> Ele não elimina nem previne pragas, e pode não detectar todos os animais nem todos os movimentos. As detecções podem ser afetadas pelo local onde a câmera é colocada, pela bateria e pela conexão WiFi. Não dependa dele como a única forma de proteger sua casa, sua família, seus animais de estimação ou seus alimentos.',
        ],
      },
      {
        heading: 'Sua conta',
        blocks: [
          [
            'Você deve ter pelo menos 18 anos, ou a maioridade legal no local onde mora, para criar uma conta.',
            'Forneça informações corretas e mantenha sua senha em sigilo. Você é responsável pelo que acontece na sua conta.',
            'Avise-nos imediatamente em {email} se achar que outra pessoa está usando sua conta.',
          ],
        ],
      },
      {
        heading: 'Uso responsável da câmera',
        blocks: [
          [
            'Instale câmeras apenas em locais que sejam seus ou que você tenha permissão para monitorar.',
            'Não aponte câmeras para áreas onde as pessoas esperam privacidade, e siga as leis do local onde você mora sobre gravação de vídeo.',
            'Não use o Serviço para nada ilegal, para prejudicar outras pessoas ou para tentar violá-lo, copiá-lo ou fazer engenharia reversa dele.',
          ],
        ],
      },
      {
        heading: 'Empresas de controle de pragas',
        blocks: [
          'As empresas exibidas no app são negócios independentes. Não as empregamos, não recomendamos nenhuma em particular nem garantimos o trabalho delas. Qualquer acordo que você fizer com elas é entre você e a empresa.',
        ],
      },
      {
        heading: 'Disponibilidade e alterações',
        blocks: [
          'Trabalhamos para manter o Serviço funcionando, mas às vezes ele pode ficar indisponível, por exemplo durante manutenções ou por problemas com a internet, o WiFi ou nossos provedores. Podemos alterar, adicionar ou remover recursos. Podemos atualizar o software da câmera para corrigir problemas ou melhorá-lo.',
        ],
      },
      {
        heading: 'Propriedade',
        blocks: [
          'O app, o software da câmera e o nome e o logotipo do {app} pertencem à {company}. Concedemos a você uma licença pessoal e intransferível para usar o app enquanto você tiver uma conta. As fotos e os vídeos das suas câmeras são seus; você nos permite armazená-los e processá-los apenas para prestar o Serviço a você.',
        ],
      },
      {
        heading: 'Encerramento do uso',
        blocks: [
          'Você pode deixar de usar o Serviço e excluir sua conta a qualquer momento (veja <a href="{deleteUrl}">Excluir conta</a>). Podemos suspender ou encerrar contas que violem estes termos.',
        ],
      },
      {
        heading: 'Isenção de garantias e limitação de responsabilidade',
        blocks: [
          'O Serviço é fornecido “no estado em que se encontra” e “conforme disponível”. Na medida permitida por lei, não oferecemos garantias de nenhum tipo, inclusive de que o Serviço detectará toda a atividade de pragas ou funcionará sem interrupções.',
          'Na medida permitida por lei, não somos responsáveis por danos indiretos ou consequenciais, nem por danos causados por pragas, e nossa responsabilidade total por qualquer reclamação relacionada ao Serviço se limita ao valor que você nos pagou por ele nos 12 meses anteriores à reclamação. Alguns lugares não permitem esses limites, portanto eles podem não se aplicar a você.',
        ],
      },
      {
        heading: 'Apple e Google',
        blocks: [
          'Se você baixou o app pela App Store ou pelo Google Play, os termos deles também se aplicam. A Apple e o Google não são responsáveis pelo app nem pelo suporte a ele. Se você obteve o app pela App Store, a Apple e suas subsidiárias são terceiras beneficiárias destes termos.',
        ],
      },
      {
        heading: 'Lei aplicável',
        blocks: ['Estes termos são regidos pelas leis do Estado da Flórida, EUA, sem considerar suas normas sobre conflito de leis.'],
      },
      {
        heading: 'Alterações nestes termos',
        blocks: [
          'Publicaremos as alterações nesta página e atualizaremos a data no topo. Se as alterações forem significativas, avisaremos você no app ou por e-mail. Se você continuar usando o Serviço após uma alteração, você aceita os novos termos.',
        ],
      },
      {
        heading: 'Contato',
        blocks: ['{company} — {email}'],
      },
    ],
  },
};

export default pt;
