import type { CaseData } from './types';

import img1 from '@assets/pd/apisul/01.webp';
import img1_1 from '@assets/pd/apisul/01-1.webp';
import img2 from '@assets/pd/apisul/02.webp';
import img3 from '@assets/pd/apisul/03.webp';
import img5 from '@assets/pd/apisul/05.webp';
import img6 from '@assets/pd/apisul/06.webp';
import img7 from '@assets/pd/apisul/07.webp';
import img8 from '@assets/pd/apisul/08.webp';
import img9 from '@assets/pd/apisul/09.webp';
import img10 from '@assets/pd/apisul/10.webp';
import img11 from '@assets/pd/apisul/11.webp';
import img12 from '@assets/pd/apisul/12.webp';
import carrossel1 from '@assets/pd/apisul/carrossel1.webp';
import carrossel2 from '@assets/pd/apisul/carrossel2.webp';
import carrossel3 from '@assets/pd/apisul/carrossel3.webp';
import carrossel4 from '@assets/pd/apisul/carrossel4.webp';

export const apisul: CaseData = {
  meta: {
    segment: { pt: 'Transporte e Logística', en: 'Transport and Logistics' },
    client: 'Grupo Apisul',
    year: '2023',
    role: { pt: 'Liderança do projeto, pesquisa e Product Design', en: 'Project lead, research and Product Design' },
    description: {
      pt: 'Visão integrada para cinco soluções de seguros, risco e logística do Grupo Apisul, construída com pesquisa e validação com usuários e apresentada aos acionistas.',
      en: 'An integrated vision for five Grupo Apisul insurance, risk and logistics services, built on research and user validation and presented to shareholders.',
    },
    title: 'Plataforma Apisul',
    subtitle: {
      pt: 'Cinco soluções, ',
      en: 'Five services, ',
    },
    subtitleNoWrap: {
      pt: 'uma visão integrada.',
      en: 'one integrated vision.',
    },
    tools: ['Figma', 'Miro', 'Typeform', 'Google Analytics'],
  },

  blocks: [
    {
      type: 'image',
      image: {
        src: img1,
        alt: {
          pt: 'Tela de gerenciamento de logística da plataforma Apisul, com a lista de veículos em formato de tabela e o menu de ordenação de uma coluna aberto.',
          en: 'Apisul logistics management screen showing the vehicle list as a table, with a column sorting menu open.',
        },
      },
    },

    // 02. Resumo do projeto
    {
      type: 'summary',
      heading: { pt: 'Resumo do projeto', en: 'Project summary' },
      items: [
        {
          label: { pt: 'Contexto', en: 'Context' },
          text: {
            pt: 'Cinco soluções do Grupo Apisul funcionavam de forma separada, o que dificultava a contratação e a implantação e dispersava os dados dos clientes.',
            en: 'Five Grupo Apisul services ran separately, which complicated purchasing and implementation and scattered customer data.',
          },
        },
        {
          label: { pt: 'O que fiz', en: 'What I did' },
          text: {
            pt: 'Liderei o projeto do planejamento à apresentação aos acionistas: pesquisa, protótipo, validação e Style Guide. Diante de cinco soluções, priorizei o ApisulLog e o Integra, as plataformas com mais críticas de experiência. Na equipe, contei com o apoio de uma designer e de um especialista em design estratégico.',
            en: 'I led the project from planning to the shareholder presentation: research, prototype, validation and the style guide. Faced with five services, I prioritised ApisulLog and Integra, the platforms with the most criticism on experience. The team also included a designer and a strategic design specialist.',
          },
        },
        {
          label: { pt: 'Resultado', en: 'Outcome' },
          text: {
            pt: 'Um protótipo e uma visão integrada apresentados aos acionistas, dos quais saíram a modernização do ApisulLog e do Integra e o Portal do Cliente.',
            en: 'A prototype and an integrated vision presented to shareholders, which led to the modernisation of ApisulLog and Integra and to the Customer Portal.',
          },
        },
      ],
      facts: [
        { value: '+10', label: { pt: 'transportadoras entrevistadas, de pequeno a grande porte', en: 'carriers interviewed, from small to large' } },
        { value: '5', label: { pt: 'soluções mapeadas e analisadas na pesquisa', en: 'services mapped and analysed in the research' } },
        { value: '3', label: { pt: 'sessões de validação, duas com equipes internas e uma com uma transportadora cliente', en: 'validation sessions, two with internal teams and one with a customer carrier' } },
      ],
    },

    {
      type: 'text',
      heading: { pt: 'O desafio', en: 'The challenge' },
      paragraphs: {
        pt: [
          'O Grupo Apisul oferece soluções em seguros, gerenciamento de risco, logística, meios de pagamento e sinistros. Cada uma está em uma plataforma diferente, o que torna mais complexas a contratação e a implantação e dispersa os dados dos clientes.',
          'Para a empresa, essa separação tinha dois custos. Ficava difícil oferecer uma nova solução a quem já era cliente de outra, o que limitava o cross sell e o upsell. E a contratação dependia do atendimento comercial, um modelo que não alcançava pequenas transportadoras e autônomos.',
        ],
        en: [
          'Grupo Apisul offers insurance, risk management, logistics, payments and claims services. Each one runs on a separate platform, which makes purchasing and implementation more complex and scatters customer data.',
          'For the business, that separation had two costs. It was hard to offer a new service to someone already using another, which limited cross sell and upsell. And purchasing depended on the sales team, a model that could not reach small carriers and independent drivers.',
        ],
      },
    },
    {
      type: 'highlight',
      label: { pt: 'A pergunta que orientou o projeto', en: 'The question behind the project' },
      text: {
        pt: 'Como construir um ecossistema integrado que permitisse aos clientes contratar módulos de forma mais rápida e assertiva, em uma única plataforma?',
        en: 'How could we build an integrated ecosystem that lets customers purchase modules faster and more accurately, in a single platform?',
      },
    },

    // Processo
    {
      type: 'text',
      heading: { pt: 'Processo', en: 'Process' },
      paragraphs: {
        pt: [
          'Como o problema envolvia cinco produtos separados e públicos com necessidades muito diferentes, o projeto começou pelo entendimento do ecossistema, antes de qualquer proposta de solução. O diagrama abaixo mostra as cinco etapas e os métodos usados em cada uma.',
        ],
        en: [
          'With five separate products and audiences with very different needs, the project started by understanding the ecosystem before proposing any solution. The diagram below shows the five stages and the methods used in each.',
        ],
      },
    },
    {
      type: 'image',
      image: {
        src: img1_1,
        alt: {
          pt: 'Diagrama do processo em cinco etapas: empatia, definição, ideação, prototipação e teste, refino e resultado, com as ferramentas usadas em cada uma.',
          en: 'Five stage process diagram covering empathy, definition, ideation, prototyping and testing, and refinement, with the methods used at each stage.',
        },
      },
    },
    {
      type: 'steps',
      heading: { pt: 'Como a pesquisa foi feita', en: 'How the research was done' },
      intro: {
        pt: 'A pesquisa seguiu esta ordem, do contexto do negócio ao uso real das plataformas.',
        en: 'The research followed this order, from business context to how the platforms were actually used.',
      },
      layout: 'grid',
      items: [
        {
          title: { pt: 'Executivos e time comercial', en: 'Executives and sales team' },
          text: {
            pt: 'Para entender a estratégia da empresa e a relação com os clientes.',
            en: "To understand the company's strategy and its relationship with customers.",
          },
        },
        {
          title: { pt: 'Áreas de negócio e operadores', en: 'Business areas and operators' },
          text: {
            pt: 'Seguros, sinistros, logística, risco e meios de pagamento. Cada equipe apresentou sua plataforma, as dificuldades e as oportunidades, e os operadores contaram as travas do dia a dia.',
            en: 'Insurance, claims, logistics, risk and payments. Each team walked through its platform, difficulties and opportunities, and operators described their daily obstacles.',
          },
        },
        {
          tag: { pt: 'Em paralelo', en: 'In parallel' },
          title: { pt: 'Análise heurística do ApisulLog', en: 'Heuristic review of ApisulLog' },
          text: {
            pt: 'Feita no ApisulLog, a plataforma com mais críticas de experiência e usabilidade. Como ela tem muitas funcionalidades, analisamos apenas as mais usadas na operação, com um framework no Miro que cruzava cada heurística com cada tela.',
            en: 'Done on ApisulLog, the platform with the most criticism on experience and usability. Since it has a great many features, we analysed only those most used by operations, with a framework in Miro that checked every heuristic against every screen.',
          },
        },
        {
          title: { pt: 'Entrevistas com transportadoras', en: 'Interviews with carriers' },
          text: {
            pt: 'Clientes de pequeno a grande porte. Os embarcadores não puderam ser entrevistados, e para eles partimos do conhecimento de operadores e coordenadores da Apisul.',
            en: 'Customers from small to large. Shippers could not be interviewed, so for them we drew on the knowledge of Apisul operators and coordinators.',
          },
        },
        {
          title: { pt: 'Fundadores de insurtechs', en: 'Insurtech founders' },
          text: {
            pt: 'Entrevistas com fundadores de insurtechs consagradas, em busca de inspiração e referências de inovação no mercado.',
            en: 'Interviews with founders of established insurtechs, looking for inspiration and examples of innovation in the market.',
          },
        },
        {
          title: { pt: 'Shadowing', en: 'Shadowing' },
          text: {
            pt: 'Acompanhei dois operadores para ver como usavam a plataforma Integra e como interagiam com os motoristas pelo WhatsApp.',
            en: 'I shadowed two operators to see how they used the Integra platform and dealt with drivers over WhatsApp.',
          },
        },
      ],
    },
    {
      type: 'insights',
      heading: { pt: 'O que a pesquisa mostrou', en: 'What the research showed' },
      intro: {
        pt: 'Entre os achados, dois diziam respeito diretamente aos clientes e ajudaram a definir o rumo do projeto: o acesso aos próprios dados e o uso desses dados para melhorar a operação.',
        en: 'Among the findings, two concerned customers directly and helped set the direction of the project: access to their own data, and using that data to improve their operation.',
      },
      items: [
        {
          title: {
            pt: 'Os clientes não tinham acesso direto aos próprios dados',
            en: 'Customers had no direct access to their own data',
          },
          text: {
            pt: 'Para acessar os próprios dados de logística, risco e seguros, os clientes dependiam de relatórios mensais ou precisavam solicitar a informação toda vez que ela era necessária.',
            en: 'To review logistics, risk or insurance information, customers depended on monthly reports or had to request the data each time they needed it.',
          },
        },
        {
          title: {
            pt: 'Os clientes querem usar os próprios dados para reduzir custos',
            en: 'Customers want to use their own data to cut costs',
          },
          text: {
            pt: 'Mais do que consultar os próprios dados, os clientes querem cruzá-los e analisá-los para entender onde a operação pode melhorar e como reduzir custos com combustível, atrasos e tempo de veículo parado. A expectativa é que os sistemas digitais ajudem nessa leitura de forma prática.',
            en: 'Beyond viewing their own data, customers want to cross reference and analyse it to see where the operation can improve and how to cut costs related to fuel, delays and vehicle downtime. They expect digital systems to support that analysis in a practical way.',
          },
        },
      ],
    },
    {
      type: 'stats',
      heading: { pt: 'Leitura de mercado', en: 'Market view' },
      intro: {
        pt: 'Além da pesquisa com pessoas, fiz uma desk research com dados do segmento, tendências de tecnologia e benchmark dos concorrentes. Dois dados ajudaram a sustentar a proposta: o espaço para soluções baseadas em dados e a maturidade do mercado para a contratação digital.',
        en: 'Alongside the research with people, I ran desk research covering industry data, technology trends and competitor benchmarking. Two figures helped support the proposal: the room for data driven solutions and the market\'s readiness for digital purchasing.',
      },
      items: [
        {
          value: '5%',
          text: {
            pt: 'das empresas utilizam inteligência de dados nos negócios, o que abre espaço para a Apisul se destacar ao ajudar os clientes a reduzir custos e sinistros.',
            en: 'of companies apply data intelligence to their business, which creates room for Apisul to stand out by helping customers reduce costs and claims.',
          },
          source: { pt: 'TOTVS, via ABRALOG. Dado consultado em 2023.', en: 'TOTVS, via ABRALOG. Figure retrieved in 2023.' },
        },
        {
          value: { pt: '53,5%', en: '53.5%' },
          text: {
            pt: 'é o crescimento anual do mercado de insurtech, com previsão de atingir US$ 264,9 bilhões até 2032, o que mostra a maturidade do setor para soluções 100% digitais.',
            en: 'is the annual growth of the insurtech market, projected to reach USD 264.9 billion by 2032, which shows the sector is ready for fully digital solutions.',
          },
          source: { pt: 'Market Research Future. Projeção consultada em 2023.', en: 'Market Research Future. Projection retrieved in 2023.' },
        },
      ],
    },

    // Objetivos
    {
      type: 'steps',
      heading: { pt: 'Objetivos', en: 'Goals' },
      numbered: false,
      items: [
        {
          icon: 'layers',
          title: { pt: 'Promover a integração das soluções', en: 'Bring the products together' },
          text: {
            pt: 'Unificar produtos e serviços em uma plataforma com segmentação de uso conforme o comportamento do cliente, para que a contratação parta da necessidade e não da estrutura interna da empresa.',
            en: "Consolidate products and services into a single platform organised around customer behaviour, so that purchasing decisions start from a business need rather than from the company's internal structure.",
          },
        },
        {
          icon: 'layout',
          title: {
            pt: 'Modernizar a interface e padronizar os componentes',
            en: 'Modernise the interface and standardise components',
          },
          text: {
            pt: 'Padronizar componentes e interface para dar consistência e escala à solução.',
            en: 'Establish a shared component set across the products, giving the solution the consistency required to scale.',
          },
        },
        {
          icon: 'user-check',
          title: { pt: 'Ampliar a autonomia do cliente', en: 'Give customers more autonomy' },
          text: {
            pt: 'Permitir que o cliente gerisse a própria operação de forma independente, incluindo a implantação de dados e a contratação automatizada via site, o que abria caminho para atender pequenas transportadoras e autônomos sem depender de atendimento comercial.',
            en: 'Enable customers to manage their own operation independently, including uploading their own data and purchasing online. This also created a path to serve small carriers and independent drivers, a segment the traditional sales model could not reach economically.',
          },
        },
      ],
    },

    {
      type: 'decisions',
      heading: { pt: 'Escopo do protótipo', en: 'Prototype scope' },
      items: [
        {
          title: { pt: 'Um protótipo para apoiar uma decisão', en: 'A prototype to support a decision' },
          paragraphs: {
            pt: [
              'Unificar as cinco soluções em uma única plataforma era uma decisão de negócio, e cabia aos acionistas. Por isso, o protótipo não foi pensado para ser desenvolvido, e sim para mostrar a proposta de forma concreta na apresentação a eles.',
              'Isso definiu o nível de acabamento e o que precisava ser validado antes da apresentação. Preparei um relatório completo da pesquisa, uma versão executiva e o pitch deck, e apresentei o protótipo aos acionistas em reunião.',
            ],
            en: [
              'Unifying the five services into a single platform was a business decision, and it belonged to the shareholders. So the prototype was not designed to be built, but to show the proposal in concrete form when it was presented to them.',
              'That set the level of finish and what needed to be validated before the presentation. I prepared a full research report, an executive version and the pitch deck, and presented the prototype to the shareholders in a meeting.',
            ],
          },
        },
        {
          title: { pt: 'Escolher o que prototipar', en: 'Choosing what to prototype' },
          paragraphs: {
            pt: [
              'Foi a decisão mais difícil do projeto. Cada uma das cinco soluções tinha dificuldades e oportunidades próprias, levantadas nos encontros com as áreas, e não havia prazo para prototipar tudo.',
              'O primeiro filtro veio do cliente: como os seguros já eram o carro chefe da Apisul, a intenção era fortalecer o ApisulLog e o Integra como produtos com valor próprio. A pesquisa reforçou essa direção: eram as duas plataformas que mais recebiam críticas de experiência e usabilidade.',
              'Para escolher as funcionalidades, cruzei os achados com os dados de uso do Google Analytics e prototipamos as mais acessadas. Para um material que precisava convencer, profundidade em poucas telas valia mais que cobertura superficial de muitas.',
            ],
            en: [
              'This was the hardest decision in the project. Each of the five services had its own difficulties and opportunities, raised in the sessions with each area, and there was no time to prototype everything.',
              'The first filter came from the client: insurance was already the core business, so the aim was to strengthen ApisulLog and Integra as products in their own right. The research reinforced that direction: these were the two platforms drawing the most criticism on experience and usability.',
              'To choose the features, I cross referenced the findings against Google Analytics usage data and we prototyped the most accessed ones. For material intended to support a decision, depth across a few screens carried more weight than broad but shallow coverage.',
            ],
          },
        },
      ],
    },

    // 06. Solução
    {
      type: 'screens',
      heading: { pt: 'A solução', en: 'The solution' },
      intro: {
        pt: 'As telas estão organizadas pelas frentes do protótipo. Duas delas, a contratação online e a central de ajuda, não estavam previstas no início e surgiram durante a pesquisa.',
        en: 'The screens are grouped by the areas of the prototype. Two of them, online purchase and the help centre, were not planned at the start and emerged during the research.',
      },
      groups: [
        {
          label: { pt: 'Contratação online', en: 'Online purchase' },
          text: {
            pt: 'A jornada que permite a pequenas transportadoras e autônomos contratar sem passar pelo atendimento comercial. Surgiu das entrevistas com fundadores de insurtechs e dos dados de mercado, que apontavam para a contratação digital sem intermediação.',
            en: 'The journey that lets small carriers and independent drivers buy without going through the sales team. It came from the insurtech interviews and the market data, both pointing toward digital purchasing without intermediaries.',
          },
          screens: [
            {
              image: {
                src: img2,
                alt: {
                  pt: 'Formulário de cotação de seguro de veículos no site da Apisul, dividido em etapas: dados operacionais, rotas percorridas, dados da frota, condições do segurado e DDRs.',
                  en: 'Vehicle insurance quote form on the Apisul website, split into steps: operational data, routes, fleet data, insured conditions and DDRs.',
                },
              },
              title: { pt: 'Cotação em etapas', en: 'Quote in steps' },
            },
            {
              image: {
                src: img3,
                alt: {
                  pt: 'Duas telas da conclusão da cotação: a escolha da forma de pagamento com os dados do cartão e o resumo com o valor mensal e o botão para contratar.',
                  en: 'Two screens from the end of the quote: choosing the payment option with card details, and the summary with the monthly price and a button to buy.',
                },
              },
              title: { pt: 'Pagamento e resumo da cotação', en: 'Payment and quote summary' },
            },
          ],
        },
        {
          label: { pt: 'Implantação pelo próprio cliente', en: 'Self service onboarding' },
          text: {
            pt: 'Parte do objetivo de ampliar a autonomia: o cliente cadastra os próprios dados, sem depender da equipe da Apisul.',
            en: 'Part of the goal of giving customers more autonomy: they register their own data without depending on the Apisul team.',
          },
          layout: 'two',
          screens: [
            {
              image: {
                src: img5,
                alt: {
                  pt: 'Estado inicial da plataforma, com ilustração e orientação para fazer os primeiros cadastros.',
                  en: 'Initial state of the platform, with an illustration and guidance for the first records.',
                },
              },
              title: { pt: 'Primeiro acesso', en: 'First access' },
              caption: {
                pt: 'Na primeira entrada, a plataforma orienta o próprio cliente a fazer os cadastros iniciais.',
                en: 'On first access, the platform guides customers to set up their initial records themselves.',
              },
            },
            {
              image: {
                src: img6,
                alt: {
                  pt: 'Formulários de cadastro de informações de carga e de pessoas, organizados em etapas.',
                  en: 'Registration forms for cargo and people information, organised in steps.',
                },
              },
              title: { pt: 'Cadastro de cargas e pessoas', en: 'Cargo and people records' },
              caption: {
                pt: 'O cliente cadastra cargas e pessoas sozinho, sem depender da equipe da Apisul, como previa o objetivo de ampliar a autonomia.',
                en: 'Customers register cargo and people on their own, without relying on the Apisul team, as the goal of greater autonomy required.',
              },
            },
          ],
        },
        {
          label: { pt: 'Gestão da operação', en: 'Managing the operation' },
          text: {
            pt: 'O dia a dia de quem gerencia risco e logística: muita informação na tela, com filtros, mapas e acompanhamento em tempo real.',
            en: 'The daily work of risk and logistics management: dense screens with filters, maps and real time tracking.',
          },
          layout: 'two',
          screens: [
            {
              wide: true,
              image: {
                src: img8,
                alt: {
                  pt: 'Comparação entre o sistema atual e a proposta de solução na visão do operador de gerenciamento de risco.',
                  en: 'Comparison between the current system and the proposed solution from the risk management operator view.',
                },
              },
              title: { pt: 'Antes e depois na visão do operador de risco', en: 'Before and after for the risk operator' },
              caption: {
                pt: 'A interface atual, acima, e a proposta, abaixo, construída sobre o Style Guide. A análise heurística do ApisulLog expôs a falta de padronização de componentes e uma interface defasada em relação ao mercado.',
                en: 'The current interface, above, and the proposal, below, built on the style guide. The heuristic review of ApisulLog exposed a lack of shared components and an interface well behind current market standards.',
              },
            },
            {
              image: {
                src: img7,
                alt: {
                  pt: 'Tela de início rápido da plataforma, com atalhos para iniciar viagem, acessar tutoriais e acompanhar viagens.',
                  en: 'Quick start screen with shortcuts to start a trip, open tutorials and track trips.',
                },
              },
              title: { pt: 'Tela inicial com início rápido', en: 'Home screen with quick start' },
              caption: {
                pt: 'Atalhos para iniciar uma viagem, acessar os tutoriais da plataforma e acompanhar as viagens em andamento.',
                en: 'Shortcuts to start a trip, open the platform tutorials and track trips in progress.',
              },
            },
            {
              image: {
                src: img9,
                alt: {
                  pt: 'Acompanhamento de uma ocorrência com mapa da rota, cronômetro e o workflow de atendimento.',
                  en: 'Tracking an incident with a route map, a timer and the response workflow.',
                },
              },
              title: { pt: 'Gerenciamento de risco: workflow de ocorrências', en: 'Risk management: incident workflow' },
              caption: {
                pt: 'Na aba da operação, o operador acompanha cada ocorrência com o mapa da rota, um cronômetro e as etapas do workflow de atendimento.',
                en: 'In the operations tab, the operator follows each incident with the route map, a timer and the steps of the response workflow.',
              },
            },
            {
              image: {
                src: img10,
                alt: {
                  pt: 'Mapa com a posição dos veículos e a lista de veículos logo abaixo.',
                  en: 'Map with vehicle positions and the vehicle list below it.',
                },
              },
              title: { pt: 'Visão logística com mapa', en: 'Logistics view with map' },
              caption: {
                pt: 'A posição dos veículos no mapa, com a lista da frota logo abaixo, para acompanhar a operação em tempo real.',
                en: 'Vehicle positions on the map, with the fleet list right below, to follow the operation in real time.',
              },
            },
            {
              image: {
                src: img11,
                alt: {
                  pt: 'Painel de notificações aberto ao lado da lista de bases e viagens.',
                  en: 'Notifications panel open beside the list of bases and trips.',
                },
              },
              title: { pt: 'Notificações', en: 'Notifications' },
            },
          ],
        },
        {
          label: { pt: 'Central de ajuda', en: 'Help centre' },
          text: {
            pt: 'Um lugar para o cliente consultar informações sozinho. Surgiu das conversas com o time comercial, que recebia muitas dúvidas pontuais dos clientes por WhatsApp e e-mail.',
            en: 'A place for customers to find information on their own. It came from conversations with the sales team, who received many one off questions from customers over WhatsApp and email.',
          },
          screens: [
            {
              image: {
                src: img12,
                alt: {
                  pt: 'Central de ajuda aberta ao lado da tela de gerenciamento de risco, com busca e tópicos de suporte.',
                  en: 'Help centre open beside the risk management screen, with search and support topics.',
                },
              },
              title: { pt: 'Dicas e apoio dentro da plataforma', en: 'Tips and support inside the platform' },
            },
          ],
        },
      ],
    },
    {
      type: 'carousel',
      images: [
        {
          src: carrossel1,
          alt: {
            pt: 'Tela da plataforma Apisul com a visão consolidada da operação.',
            en: 'Apisul platform screen showing a consolidated view of the operation.',
          },
        },
        {
          src: carrossel2,
          alt: {
            pt: 'Detalhe da interface com os componentes padronizados do Style Guide.',
            en: 'Interface detail showing the standardised components from the style guide.',
          },
        },
        {
          src: carrossel3,
          alt: {
            pt: 'Tela do fluxo de contratação online.',
            en: 'Screen from the online purchase flow.',
          },
        },
        {
          src: carrossel4,
          alt: {
            pt: 'Detalhe da central de ajuda dentro da plataforma.',
            en: 'Detail of the help centre inside the platform.',
          },
        },
      ],
    },

    {
      type: 'cards',
      heading: { pt: 'Validação', en: 'Validation' },
      intro: {
        pt: 'Antes da apresentação aos acionistas, mostrei o protótipo em duas sessões com funcionários da Apisul e em uma validação breve com uma transportadora cliente, para confirmar que a demanda por controles centralizados e interface moderna existia de fato. O retorno foi positivo nos três momentos.',
        en: 'Before the shareholder presentation, I showed the prototype in two sessions with Apisul employees and in a short validation with a customer carrier, to confirm that the demand for centralised controls and a modern interface was real. Feedback was positive in all three.',
      },
      items: [
        {
          label: { pt: 'Operação, 3 pessoas', en: 'Operations, 3 people' },
          text: {
            pt: 'Destacou ter tudo em um único lugar, sem precisar alternar entre sistemas e abas, um problema do dia a dia.',
            en: 'Valued having everything in one place, without switching between systems and tabs, a daily problem for them.',
          },
        },
        {
          label: { pt: 'Logística, 2 coordenadores', en: 'Logistics, 2 coordinators' },
          text: {
            pt: 'Destacou a interface mais moderna e consistente.',
            en: 'Valued the more modern and consistent interface.',
          },
        },
        {
          label: { pt: 'Transportadora cliente', en: 'Customer carrier' },
          text: {
            pt: 'Valorizou a centralização dos dados.',
            en: 'Valued having its data centralised.',
          },
        },
      ],
    },

    {
      type: 'outcome',
      heading: { pt: 'Resultados', en: 'Results' },
      intro: {
        pt: 'A entrega deste projeto foi estratégica. A pesquisa, o protótipo e o Style Guide formaram uma visão consolidada da modernização dos produtos digitais da Apisul, apresentada aos acionistas. Dela saíram dois desdobramentos.',
        en: "The delivery here was strategic rather than technical. The research, the prototype and the style guide formed a consolidated view of how to modernise Apisul's digital products, presented to shareholders. Two initiatives came out of it.",
      },
      flow: [
        { pt: 'Pesquisa e protótipo', en: 'Research and prototype' },
        { pt: 'Visão apresentada aos acionistas', en: 'Vision presented to shareholders' },
        { pt: 'Dois desdobramentos', en: 'Two initiatives' },
      ],
      items: [
        {
          tag: { pt: 'Produto novo', en: 'New product' },
          title: { pt: 'Portal do Cliente', en: 'Customer Portal' },
          text: {
            pt: 'Nasceu de um achado das entrevistas que conduzi, sobre a dificuldade de acesso dos clientes aos próprios dados. Atuei como product designer principal, com um desenvolvedor de uma consultoria parceira, um PO da Apisul e orientação do PM. O produto entrou em desenvolvimento no final de 2024 e, quando saí da Apisul, antes do lançamento, deixei como entrega o desenho do produto, a definição dos dados de cada solução e a área administrativa.',
            en: "It grew out of a finding from the interviews I ran, about customers' restricted access to their own data. I was the lead product designer, working with a developer from a partner consultancy, a product owner at Apisul and guidance from the product manager. Development began in late 2024, and when I left Apisul before launch, my handover included the product design, the definition of each service's data and the admin area.",
          },
        },
        {
          tag: { pt: 'Evolução de produto', en: 'Product evolution' },
          title: { pt: 'Modernização do ApisulLog e do Integra', en: 'Modernising ApisulLog and Integra' },
          text: {
            pt: 'A modernização ficou a cargo de uma empresa de tecnologia parceira, e eu segui no projeto como product designer do lado da Apisul. Revisei as entregas de design junto com a equipe parceira e pesquisei como o mercado vinha aplicando inteligência artificial no segmento, um levantamento que serviu para mapear novas funcionalidades possíveis para o ApisulLog.',
            en: 'The modernisation was carried out by a partner technology company, and I stayed on the project as product designer on the Apisul side. I reviewed design deliverables with the partner team and researched how the market was applying artificial intelligence in the sector, a study used to map potential new features for ApisulLog.',
          },
        },
      ],
    },

    {
      type: 'simple',
      heading: { pt: 'A Equipe', en: 'The team' },
      items: [
        {
          pt: 'Aron Krause Litvin (Inovação e Design Estratégico, relacionamento com o cliente)',
          en: 'Aron Krause Litvin (Innovation and Strategic Design, client relationship)',
        },
        {
          pt: 'Gabriela Dall’Agnol (Liderança do projeto, pesquisa e Product Design)',
          en: 'Gabriela Dall’Agnol (Project lead, research and Product Design)',
        },
        {
          pt: 'Stéphanie Gonzaga (Designer)',
          en: 'Stéphanie Gonzaga (Designer)',
        },
      ],
    },
  ],
};