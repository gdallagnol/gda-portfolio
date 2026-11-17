import type { CaseData } from './types';

// ATENCAO: confira o nome exato do primeiro arquivo com `ls src/assets/pd/apisul-portal`
import imgHome from '@assets/pd/apisul-portal/img-home-seguros-portaldocliente.webp';
import imgOportunidade from '@assets/pd/apisul-portal/img-oportunidade.webp';
import imgSuporte from '@assets/pd/apisul-portal/img-suporte.webp';

export const apisulPortal: CaseData = {
  meta: {
    segment: { pt: 'Transporte e Logística', en: 'Transport and Logistics' },
    client: 'Grupo Apisul',
    year: '2024-2025',
    role: { pt: 'Product Designer principal', en: 'Lead Product Designer' },
    description: {
      pt: 'Desenho de um portal que dá ao cliente acesso direto aos próprios dados de logística, risco e seguros, sem depender do gerente de conta.',
      en: 'Design of a portal that gives customers direct access to their own logistics, risk and insurance data, without relying on an account manager.',
    },
    title: 'Portal do Cliente',
    subtitle: {
      pt: 'Indicadores, documentos e suporte ',
      en: 'Indicators, documents and support ',
    },
    subtitleNoWrap: {
      pt: 'em um só lugar.',
      en: 'in one place.',
    },
    tools: ['Figma', 'FigJam'],
  },

  blocks: [
    // Resumo
    {
      type: 'summary',
      heading: { pt: 'Resumo do projeto', en: 'Project summary' },
      items: [
        {
          label: { pt: 'Contexto', en: 'Context' },
          text: {
            pt: 'A pesquisa do ecossistema Apisul revelou um problema comum a transportadoras de todos os portes: não havia um lugar centralizado para consultar os indicadores e os documentos da própria operação, como boletos e apólices.',
            en: 'The Apisul ecosystem research revealed a problem shared by carriers of every size: there was no central place to see the indicators and documents of their own operation, such as invoices and policies.',
          },
        },
        {
          label: { pt: 'O que fiz', en: 'What I did' },
          text: {
            pt: 'Atuei como product designer principal: defini quais dados de cada solução o Portal deveria exibir e desenhei o produto, a área administrativa e o fluxo de atendimento automatizado.',
            en: 'As lead product designer, I defined which data from each service the Portal should display and designed the product, the admin area and the automated support flow.',
          },
        },
        {
          label: { pt: 'Resultado', en: 'Outcome' },
          text: {
            pt: 'O Portal entrou em desenvolvimento no final de 2024. Deixei a Apisul antes do lançamento, durante o desenvolvimento da área administrativa, com três indicadores definidos para acompanhar o resultado.',
            en: 'The Portal went into development in late 2024. I left Apisul before launch, while the admin area was being developed, with three measures defined to track the outcome.',
          },
        },
      ],
      facts: [
        { value: '6', label: { pt: 'meses de projeto', en: 'months on the project' } },
        { value: '3', label: { pt: 'pessoas no time principal: design, desenvolvimento e PO', en: 'people in the core team: design, development and product owner' } },
        { value: '3', label: { pt: 'indicadores definidos para acompanhamento após o lançamento', en: 'measures defined for tracking after launch' } },
      ],
    },

    // Desafio
    {
      type: 'text',
      heading: { pt: 'O desafio', en: 'The challenge' },
      paragraphs: {
        pt: [
          'O Portal do Cliente nasceu de um achado da pesquisa do ecossistema Apisul. Nas entrevistas em profundidade com cerca de doze transportadoras, de diferentes portes e regiões do país, o mesmo problema apareceu de forma consistente, independentemente do tamanho da empresa ou do número de soluções contratadas: não havia um lugar centralizado para consultar os indicadores e os documentos da própria operação.',
          'Para acessar boletos, apólices ou dados de risco, o cliente dependia do corretor ou do gerente de conta. Cada consulta virava uma solicitação, e cada solicitação dependia da disponibilidade de outra pessoa.',
        ],
        en: [
          'The Customer Portal grew out of a finding from the Apisul ecosystem research. In in depth interviews with around twelve carriers of different sizes and regions, the same problem came up consistently, regardless of company size or the number of services contracted: there was no central place to see the indicators and documents of their own operation.',
          'To access invoices, policies or risk data, customers relied on their broker or account manager. Every query became a request, and every request depended on someone else being available.',
        ],
      },
      link: {
        href: '/product-design/apisul',
        label: { pt: 'Ver a pesquisa no case Plataforma Apisul', en: 'See the research in the Apisul Platform case study' },
      },
    },
    {
      type: 'highlight',
      label: { pt: 'O problema em uma frase', en: 'The problem in one sentence' },
      text: {
        pt: 'A informação existia em abundância dentro da Apisul. O que faltava era organizá-la para o cliente.',
        en: 'Apisul had information in abundance. What was missing was a way to organise it for the customer.',
      },
    },

    // Processo
    {
      type: 'decisions',
      heading: { pt: 'Processo', en: 'Process' },
      items: [
        {
          title: { pt: 'Definição dos dados', en: 'Defining the data' },
          paragraphs: {
            pt: [
              'A questão central do projeto era definir quais dados de cada solução eram relevantes para o cliente. Seguros, logística, risco e sinistros geram informações de naturezas e volumes muito diferentes, e essa definição dependia dos gestores de cada área.',
              'Essa resposta não veio. Não por falta de disposição, mas porque as próprias áreas não tinham clareza sobre o que era relevante do ponto de vista do cliente. A cultura da empresa era reativa, voltada a resolver demandas à medida que surgiam, e o mapeamento antecipado de necessidades não fazia parte da rotina.',
            ],
            en: [
              'The central question of the project was which data from each service mattered to the customer. Insurance, logistics, risk and claims generate information of very different kinds and volumes, and that definition depended on the managers of each area.',
              "That answer never came. Not for lack of willingness, but because the areas themselves had no clear view of what mattered from the customer's perspective. The company culture was reactive, focused on solving requests as they arrived, and mapping needs in advance was not part of the routine.",
            ],
          },
        },
        {
          title: { pt: 'Uma base provisória para destravar o projeto', en: 'A provisional base to unblock the project' },
          paragraphs: {
            pt: [
              'Para não paralisar o projeto, busquei a informação onde ela já existia. Analisei a documentação dos sistemas de cada solução e estruturei uma base provisória do que poderia ser exibido, cruzando o que estava disponível nos sistemas com o que os clientes tinham relatado nas entrevistas do projeto do ecossistema. Assim, criei um ponto de partida concreto para as discussões. A base foi apresentada e assumida como rascunho, e o refinamento dependia de um envolvimento das áreas que o projeto não chegou a obter.',
            ],
            en: [
              'To keep the project moving, I looked for the information where it already existed. I reviewed the system documentation for each service and structured a provisional set of what could be displayed, cross referencing what was available in the systems with what customers had reported in the ecosystem project interviews. This created a concrete starting point for discussion. It was presented and accepted as a draft, and refining it depended on an involvement from the areas that the project never secured.',
            ],
          },
        },
        {
          title: { pt: 'Organização do atendimento', en: 'Organising support' },
          paragraphs: {
            pt: [
              'A central de ajuda seguiu o mesmo padrão. A necessidade era clara desde a pesquisa, com dúvidas recorrentes sobre apólices e boletos, mas não havia um registro estruturado dessas demandas que servisse de ponto de partida.',
            ],
            en: [
              'The help centre followed the same pattern. The need was clear from the research, with recurring questions about policies and invoices, but there was no structured record of those requests to start from.',
            ],
          },
        },
      ],
    },

    // Decisoes
    {
      type: 'decisions',
      heading: { pt: 'Decisões do projeto', en: 'Project decisions' },
      items: [
        {
          title: { pt: 'Uma biblioteca de mercado como base', en: 'An existing library as the foundation' },
          paragraphs: {
            pt: [
              'Em vez de construir a biblioteca de componentes do zero, definimos com o PM uma biblioteca de mercado, sobre a qual adaptei a identidade visual da Apisul. A escolha reduziu o tempo de desenvolvimento, um fator decisivo para um time enxuto.',
            ],
            en: [
              'Rather than building the component library from scratch, the product manager and I chose an existing one, onto which I adapted the Apisul visual identity. The choice reduced development time, a decisive factor for a lean team.',
            ],
          },
        },
        {
          title: { pt: 'Uma área administrativa fora do escopo inicial', en: 'An admin area outside the initial scope' },
          paragraphs: {
            pt: [
              'Durante o desenvolvimento, ficou claro que o Portal precisava de uma gestão do lado da Apisul: definir quais notificações seriam enviadas, quais perguntas entrariam no FAQ, quais oportunidades seriam exibidas e qual era a situação de cada cliente. A área administrativa foi incorporada ao escopo para atender a essa necessidade.',
            ],
            en: [
              'During development, it became clear that the Portal needed to be managed on the Apisul side: deciding which notifications to send, which questions to include in the FAQ, which offers to display and where each customer stood. The admin area was added to the scope to meet that need.',
            ],
          },
        },
        {
          title: { pt: 'Oportunidades no contexto dos dados', en: 'Offers in the context of the data' },
          paragraphs: {
            pt: [
              'As oportunidades atendiam a um objetivo de negócio explícito: ampliar o cross sell e o upsell. O Portal permitia apresentar uma solução no contexto dos dados da operação do próprio cliente. Assim, quem contrata seguros, mas não contrata logística, conhece a proposta enquanto acompanha os próprios números, e não em uma ligação comercial.',
            ],
            en: [
              "The offers served an explicit business goal: growing cross sell and upsell. The Portal made it possible to present a service in the context of the customer's own operational data. A customer who buys insurance but not logistics sees the offer while reviewing their own numbers, rather than on a sales call.",
            ],
          },
        },
        {
          title: { pt: 'Atendimento automatizado', en: 'Automated support' },
          paragraphs: {
            pt: [
              'Como o WhatsApp era o principal canal de contato entre a Apisul e os clientes, buscamos uma empresa especializada em chatbots para avaliar o que seria viável. Desenhei o fluxo de atendimento e reuni referências de mercado para embasar a conversa.',
            ],
            en: [
              'Since WhatsApp was the main channel between Apisul and its customers, we approached a company specialising in chatbots to assess what was feasible. I designed the support flow and gathered market references to inform the discussion.',
            ],
          },
        },
      ],
    },

    // Telas
    {
      type: 'carousel',
      images: [
        {
          src: imgHome,
          alt: {
            pt: 'Página inicial do Portal do Cliente, com a visão geral de seguros e os indicadores da operação.',
            en: 'Customer Portal home page, showing the insurance overview and operational indicators.',
          },
        },
        {
          src: imgOportunidade,
          alt: {
            pt: 'Banner de oportunidade apresentando uma solução da Apisul dentro dos dados da operação do cliente.',
            en: "Offer banner presenting an Apisul service within the customer's own operational data.",
          },
        },
        {
          src: imgSuporte,
          alt: {
            pt: 'Painel de suporte com assistente virtual e atalhos por área da operação.',
            en: 'Support panel with a virtual assistant and shortcuts by operational area.',
          },
        },
      ],
    },

    // Resultados
    {
      type: 'cards',
      heading: { pt: 'Resultados', en: 'Results' },
      intro: {
        pt: 'Deixei a Apisul antes do lançamento, quando a área administrativa estava em desenvolvimento, e por isso não acompanhei a adoção do Portal. Minhas entregas foram o desenho do produto, a definição dos dados de cada solução, a área administrativa e a base para o atendimento automatizado. Para acompanhar o resultado após o lançamento, deixei definidos três indicadores.',
        en: "I left Apisul before launch, while the admin area was being developed, so I did not follow the adoption of the Portal. My deliverables were the product design, the definition of each service's data, the admin area and the groundwork for automated support. To track the outcome after launch, I defined three measures.",
      },
      items: [
        {
          label: { pt: 'Solicitações aos gerentes de conta', en: 'Requests to account managers' },
          text: {
            pt: 'Volume de pedidos de boletos e apólices recebidos pelos gerentes de conta, comparado ao período anterior ao lançamento.',
            en: 'Volume of invoice and policy requests received by account managers, compared with the period before launch.',
          },
        },
        {
          label: { pt: 'Dúvidas por WhatsApp', en: 'Questions over WhatsApp' },
          text: {
            pt: 'Número de contatos com dúvidas básicas sobre apólices e boletos, que a Apisul já registrava e poderia comparar antes e depois.',
            en: 'Number of messages with basic questions about policies and invoices, which Apisul already logged and could compare before and after.',
          },
        },
        {
          label: { pt: 'Conversão das oportunidades', en: 'Offer conversion' },
          text: {
            pt: 'Taxa de clique e de contratação por tipo de solução, para validar a hipótese de cross sell.',
            en: 'Click through and purchase rate by type of service, to validate the cross sell hypothesis.',
          },
        },
      ],
    },
  ],
};