import type { CaseData } from './types';

// ATENCAO: confira o nome exato do primeiro arquivo com `ls src/assets/pd/apisul-portal`
import imgHome from '@assets/pd/apisul-portal/img-home-seguros-portaldocliente.png';
import imgOportunidade from '@assets/pd/apisul-portal/img-oportunidade.png';
import imgSuporte from '@assets/pd/apisul-portal/img-suporte.png';

export const apisulPortal: CaseData = {
  meta: {
    segment: { pt: 'Transporte e Logística', en: 'Transport and Logistics' },
    client: 'Grupo Apisul',
    year: '2024-2025',
    role: { pt: 'Coordenação e Product Design', en: 'Coordination and Product Design' },
    title: 'Portal do Cliente',
    subtitle: {
      pt: 'Autonomia para o cliente acessar a ',
      en: 'A portal giving customers direct ',
    },
    subtitleNoWrap: {
      pt: 'própria operação através de um portal.',
      en: 'access to their own operation.',
    },
  },

  blocks: [
    {
      type: 'text',
      heading: { pt: 'O desafio', en: 'The challenge' },
      paragraphs: {
        pt: [
          'O Portal do Cliente nasceu de um achado do projeto do ecossistema Apisul. Nas entrevistas em profundidade com cerca de doze transportadoras, de pequeno, médio e grande porte e de diferentes regiões do país, um mesmo problema apareceu independentemente do porte ou de quantas soluções o cliente tinha contratado: não havia onde consultar de forma centralizada as informações da própria operação.',
          'Para acessar boletos, apólices ou dados de risco, o cliente dependia do corretor ou do gerente da conta. Cada consulta era uma solicitação, e cada solicitação dependia da disponibilidade de outra pessoa.',
          'O dado existia. Havia fluxo de informação em abundância dentro da Apisul. O que não existia era organização.',
        ],
        en: [
          'The Customer Portal came out of a finding from the Apisul ecosystem project. Across in depth interviews with around twelve carriers, small to large and spread across different regions of the country, the same problem surfaced regardless of company size or how many services they had contracted: there was nowhere to see all the information about their own operation in one place.',
          'To reach an invoice, a policy or risk data, customers depended on their broker or account manager. Every query was a request, and every request depended on someone else being available.',
          'The data was there. Information moved through Apisul in volume. What was missing was any structure to it.',
        ],
      },
    },

    {
      type: 'text',
      heading: { pt: 'Processo', en: 'Process' },
      paragraphs: {
        pt: [
          'A pergunta mais difícil do projeto era quais dados de cada solução importam para o cliente. Seguros, logística, risco e sinistros geram informação em volumes e naturezas diferentes, e a resposta estava com os gerentes de cada área.',
          'Só que ela não veio. Não por falta de disposição, mas porque eles próprios não tinham clareza sobre o que era relevante para quem estava do outro lado. A cultura da empresa era de resolver o problema quando ele chegava, e mapear necessidade de forma antecipada não fazia parte do repertório.',
          'Como esperar não era opção, fui atrás da informação onde ela existia. Vasculhei a documentação dos sistemas de cada solução e montei uma base provisória do que poderia ser exibido, para que houvesse algo concreto sobre o que discutir. Era um rascunho, e foi assumido como tal. O refinamento ficou em aberto, dependendo de um envolvimento das áreas que o projeto não conseguiu destravar.',
          'O mesmo padrão apareceu na central de ajuda. A necessidade era evidente desde a pesquisa, com dúvidas recorrentes sobre apólices e boletos, mas não havia registro estruturado dessas demandas para partir de algum lugar.',
        ],
        en: [
          'The hardest question in the project was which data from each service actually matters to the customer. Insurance, logistics, risk and claims generate information in different volumes and of different kinds, and the answer sat with the managers of each area.',
          'It never came. Not for lack of willingness, but because they had no clear view themselves of what mattered to the person on the other side. The company culture was built around solving problems as they arrived, and mapping needs ahead of time was not part of how it operated.',
          'Since waiting was not an option, I went after the information where it did exist. I worked through the system documentation for each service and put together a provisional set of what could be displayed, so there would be something concrete to discuss. It was a draft, and it was treated as one. Refining it stayed open, dependent on an involvement from those areas that the project never managed to unlock.',
          'The same pattern showed up in the help centre. The need was clear from the research, with recurring questions about policies and invoices, but there was no structured record of those requests to start from.',
        ],
      },
    },

    {
      type: 'text',
      heading: { pt: 'Escolhas do projeto', en: 'Project decisions' },
      paragraphs: {
        pt: [
          'A biblioteca de componentes não foi construída do zero. Junto ao PM, definimos uma biblioteca de mercado e adaptei a identidade da Apisul sobre ela, o que reduziu o tempo de desenvolvimento com um time pequeno. Trabalhei seis meses no projeto, com um desenvolvedor e um PO, e foi ao longo desse período que o escopo mostrou o que faltava.',
          'A área administrativa não estava prevista. Ela apareceu durante o desenvolvimento, quando ficou claro que o Portal precisava de alguém do outro lado gerenciando o que aparece: quais notificações são enviadas, quais perguntas entram no FAQ, quais oportunidades são exibidas e qual a situação de cada cliente.',
          'As oportunidades responderam a um objetivo de negócio explícito. A Apisul queria ampliar cross-sell e upsell, e o Portal permitia apresentar uma solução no contexto dos dados da operação do próprio cliente. Alguém que contrata seguros e não contrata logística vê a proposta enquanto olha os próprios números, não em uma ligação comercial.',
          'Também investiguei a frente de atendimento automatizado. Como o WhatsApp era o principal canal entre a Apisul e os clientes, buscamos uma empresa de chatbots para entender o que seria possível. Desenhei o fluxo e levantei referências de mercado para embasar a conversa.',
        ],
        en: [
          'The component library was not built from scratch. Together with the PM we chose an existing one and I adapted Apisul branding onto it, which cut development time for a small team. I spent six months on the project with one developer and a PO, and it was over that time that the scope revealed what was missing.',
          'The admin area was never in the plan. It appeared during development, once it became clear the Portal needed someone on the other side managing what shows up: which notifications go out, which questions make it into the FAQ, which offers are displayed and where each customer stands.',
          'The offers answered an explicit business goal. Apisul wanted to grow cross sell and upsell, and the Portal made it possible to present a service in the context of the customer own operational data. Someone who buys insurance but not logistics sees the offer while looking at their own numbers, rather than on a sales call.',
          'I also explored automated support. WhatsApp was the main channel between Apisul and its customers, so we approached a chatbot company to understand what was feasible. I designed the flow and gathered market references to ground the conversation.',
        ],
      },
    },

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
            en: 'Offer banner presenting an Apisul service within the customer own operational data.',
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

    {
      type: 'text',
      heading: { pt: 'Resultados e aprendizados', en: 'Results and learnings' },
      paragraphs: {
        pt: [
          'Saí da Apisul antes do lançamento, então não acompanhei a adoção. A entrega foi o desenho do produto, a definição de quais dados deveriam ser buscados em cada solução, a área administrativa e a base para o atendimento automatizado.',
          'Três indicadores responderiam se o Portal funcionou. O volume de solicitações de boleto e apólice recebidas por gerentes de conta, comparado ao período anterior. O número de contatos por WhatsApp com dúvidas básicas sobre apólice e boleto, que a Apisul já registrava e poderia comparar antes e depois. E, nas oportunidades, a taxa de clique e a conversão em contratação por tipo de solução, que era a hipótese de cross-sell.',
        ],
        en: [
          'I left Apisul before launch, so I never saw the Portal in use. What I delivered was the product design, a definition of which data should be pulled from each service, the admin area and the groundwork for automated support.',
          'Three measures would answer whether it worked. The volume of invoice and policy requests reaching account managers, compared against the period before launch. The number of WhatsApp messages asking basic questions about policies and invoices, which Apisul already logged and could compare before and after. And for the offers, click through and conversion into a signed service, which was the cross sell hypothesis.',
        ],
      },
    },
  ],
};