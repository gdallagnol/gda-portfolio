import type { CaseData } from './types';

import img1 from '@assets/pd/apisul/01.png';
import img1_1 from '@assets/pd/apisul/01-1.png';
import img2 from '@assets/pd/apisul/02.png';
import img3 from '@assets/pd/apisul/03.png';
import img5 from '@assets/pd/apisul/05.png';
import img6 from '@assets/pd/apisul/06.png';
import img7 from '@assets/pd/apisul/07.png';
import img8 from '@assets/pd/apisul/08.png';
import img9 from '@assets/pd/apisul/09.png';
import img10 from '@assets/pd/apisul/10.png';
import img11 from '@assets/pd/apisul/11.png';
import img12 from '@assets/pd/apisul/12.png';

export const apisul: CaseData = {
  meta: {
    segment: { pt: 'Transporte e Logística', en: 'Transport and Logistics' },
    client: 'Grupo Apisul',
    year: '2023',
    role: { pt: 'Coordenação e Product Design', en: 'Coordination and Product Design' },
    title: 'Plataforma Apisul',
    subtitle: {
      pt: 'Pesquisa e desenho de um ',
      en: 'Research and design for an ',
    },
    subtitleNoWrap: {
      pt: 'ecossistema integrado de soluções.',
      en: 'integrated ecosystem of solutions.',
    },
  },

  blocks: [
    {
      type: 'image',
      image: {
        src: img1,
        alt: {
          pt: 'Tela de gerenciamento de logística da plataforma Apisul, com uma lista de veículos em formato de tabela.',
          en: 'Apisul logistics management screen showing a vehicle list in table format.',
        },
      },
    },

    {
      type: 'text',
      heading: { pt: 'O desafio', en: 'The challenge' },
      paragraphs: {
        pt: [
          'O Grupo Apisul oferece soluções em seguros, gerenciamento de risco, logística, meios de pagamento e sinistros. Cada uma vive em uma plataforma diferente, o que complica a contratação e a implantação e dispersa os dados dos clientes.',
          'A pergunta que orientou o projeto foi como construir um ecossistema integrado que permitisse aos clientes contratar módulos de forma mais rápida e assertiva em uma única plataforma.',
        ],
        en: [
          'Grupo Apisul offers insurance, risk management, logistics, payments and claims services, each running on a separate platform. This fragmentation complicates both purchasing and implementation, and leaves customer data distributed across systems that do not communicate with each other.',
          'The project set out to determine whether these services could operate as a single integrated ecosystem, one where customers select and activate the modules they need without navigating five different products.',
        ],
      },
    },

    {
      type: 'text',
      heading: { pt: 'Processo', en: 'Process' },
      paragraphs: {
        pt: [
          'Como o problema envolvia cinco produtos separados e públicos com necessidades muito diferentes, comecei mapeando o ecossistema antes de partir para as entrevistas. Conversei com executivos para entender a estratégia, com a operação para entender as travas do dia a dia e com transportadoras de portes e localizações diferentes, porque a dor de um autônomo não é a mesma de uma frota grande. Cada etapa pedia uma pergunta diferente, e as ferramentas foram escolhidas a partir disso.',
        ],
        en: [
          'With five products and several distinct audiences involved, I mapped the ecosystem before beginning any interviews. I then spoke with executives about strategy, with the operations team about the obstacles they encounter daily, and with carriers across a range of sizes and regions. That range mattered: the constraints facing an independent driver differ substantially from those facing a company managing a large fleet. Each stage of the work raised a different question, and the methods followed from there.',
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
      type: 'list',
      heading: { pt: 'Insights das pesquisas', en: 'Research insights' },
      intro: {
        pt: 'Foram realizadas entrevistas em profundidade com executivos das áreas, colaboradores da operação e clientes externos, entre transportadoras de diversos portes e embarcadores. Para a leitura de mercado, fiz uma desk research com dados do segmento, tendências de tecnologia e benchmark dos concorrentes, somada a entrevistas com fundadores de insurtechs consagradas.',
        en: 'The research combined two approaches. In depth interviews with executives, operations staff and external customers, ranging from independent drivers to large shippers. Alongside that, a market study covering industry data, technology trends, competitor benchmarking and interviews with founders of established insurtechs.',
      },
      groups: [
        {
          subhead: { pt: 'O que ouvimos dos usuários', en: 'What we heard from users' },
          items: {
            pt: [
              'Os clientes valorizam profundamente identificar oportunidades de melhoria nas operações e esperam soluções práticas nos sistemas digitais.',
              'Para acessar os próprios dados de logística, risco e seguros, os clientes dependiam de relatórios mensais ou precisavam solicitar a informação toda vez que ela era necessária.',
            ],
            en: [
              'Customers place high value on identifying opportunities to improve their operations, and they expect the systems they use to support that directly.',
              'Access to their own data was indirect. To review logistics, risk or insurance information, customers depended on monthly reports or had to request the data each time they needed it.',
            ],
          },
        },
        {
          subhead: { pt: 'O que o mercado mostrou', en: 'What the market showed' },
          items: {
            pt: [
              'Apenas 5% das empresas utilizam inteligência de dados nos negócios, segundo a TOTVS, o que abre espaço para a Apisul se destacar ao ajudar na redução de custos e sinistros. (Fonte: ABRALOG)',
              'O mercado de Insurtech cresce 53,5% ao ano, com previsão de atingir US$ 264,9 bilhões até 2032, evidenciando a maturidade do setor em soluções 100% digitais. (Fonte: Market Research Future)',
            ],
            en: [
              'Only 5% of companies apply data intelligence to their operations, according to TOTVS, which creates room for Apisul to differentiate itself by helping customers reduce costs and claims. (Source: ABRALOG)',
              'The insurtech market is growing 53.5% annually and is projected to reach USD 264.9 billion by 2032, indicating a mature demand for fully digital solutions. (Source: Market Research Future)',
            ],
          },
        },
      ],
    },

    {
      type: 'objectives',
      heading: { pt: 'Objetivos', en: 'Goals' },
      items: [
        {
          icon: '🔗',
          title: { pt: 'Promover a integração das soluções', en: 'Bring the products together' },
          text: {
            pt: 'Unificar produtos e serviços em uma plataforma com segmentação de uso conforme o comportamento do cliente, para que a contratação parta da necessidade e não da estrutura interna da empresa.',
            en: 'Consolidate products and services into a single platform organized around customer behaviour, so that purchasing decisions start from a business need rather than from the company internal structure.',
          },
        },
        {
          icon: '🖥',
          title: {
            pt: 'Modernizar a interface e padronizar os componentes',
            en: 'Modernize the interface and standardize components',
          },
          text: {
            pt: 'Padronizar componentes e interface para dar consistência e escala à solução.',
            en: 'Establish a shared component set across the products, giving the solution the consistency required to scale.',
          },
        },
        {
          icon: '⚙️',
          title: { pt: 'Ampliar a autonomia do cliente', en: 'Give customers more autonomy' },
          text: {
            pt: 'Permitir que o cliente gerisse a própria operação de forma independente, incluindo a implantação de dados e a contratação automatizada via site, o que abria caminho para atender pequenas transportadoras e autônomos sem depender de atendimento comercial.',
            en: 'Enable customers to manage their own operation independently, including uploading their own data and purchasing online. This also created a path to serve small carriers and independent drivers, a segment the traditional sales model could not reach economically.',
          },
        },
      ],
    },

    {
      type: 'text',
      heading: { pt: 'Escolhas do projeto', en: 'Project decisions' },
      paragraphs: {
        pt: [
          'O protótipo tinha um propósito específico. A proposta de reunir todas as frentes de soluções em uma plataforma única era grande demais para ser decidida dentro do projeto, então ele não foi tratado como especificação de desenvolvimento, e sim como o material que tornaria a ideia tangível em uma conversa com os acionistas. Isso definiu o nível de acabamento e o que precisava ser testado: os dois ciclos de usabilidade serviram para confirmar com usuários reais que a demanda por controles centralizados e interface moderna existia de fato.',
          'Cada frente que entrou no protótipo tinha uma evidência por trás. A jornada de aquisição online veio das entrevistas com fundadores de insurtechs e dos dados de mercado, que apontavam para contratação digital sem intermediação, e foi desenhada para pequenas transportadoras e autônomos, que ficavam fora do modelo comercial tradicional. A central de ajuda com atendimento assíncrono veio das entrevistas com clientes, já que o suporte acontecia por WhatsApp e não havia onde consultar informações sozinho. O Style Guide veio da análise heurística, que expôs sistemas evoluídos sem padronização de componentes e com interfaces defasadas em relação ao mercado.',
          'Nem tudo cabia. O recorte partiu de um direcionamento do cliente: como os seguros já eram o carro chefe da Apisul, a intenção era fortalecer o ApisulLog e o Integra como produtos com valor próprio. Mesmo assim, mapeamos mais oportunidades do que caberia no prazo, então cruzei os achados com os dados de uso do Google Analytics e prototipamos apenas as funcionalidades mais acessadas. Para um material que precisava convencer, profundidade em poucas telas valia mais que cobertura superficial de muitas.',
        ],
        en: [
          'The prototype served a specific purpose. Consolidating every product line into one platform was a decision beyond the scope of the project, so the prototype was never treated as a development specification. Its role was to make the concept tangible in a conversation with shareholders. That determined both the level of finish required and what needed testing. The two rounds of usability sessions were not there to validate screens for implementation, but to confirm with real users that the demand for centralised controls and a modern interface was genuine rather than our own reading of the interviews.',
          'Each area included in the prototype had research behind it. The online purchase journey came from the insurtech interviews and the market data, both pointing toward digital purchasing without intermediaries, and was designed for small carriers and independent drivers who fell outside the traditional sales model. The help centre with asynchronous support came from the customer interviews, which revealed that support ran entirely through WhatsApp with no self service reference available. The style guide came from the heuristic review, which exposed five systems that had each evolved independently, with no shared components and interfaces well behind current market standards.',
          'The scope had limits. The client set the direction: insurance was already the core business, so the objective was to strengthen ApisulLog and Integra as products in their own right. Even within that scope, we identified more opportunities than the timeline allowed. I cross referenced the findings against Google Analytics usage data and we prototyped only the most accessed features. For material intended to support a decision, depth across a few screens carried more weight than broad but shallow coverage.',
        ],
      },
    },

    {
      type: 'gallery',
      images: [
        {
          src: img2,
          alt: {
            pt: 'Jornada de aquisição online no site da Apisul, com o formulário de cotação de seguro de veículos dividido em etapas.',
            en: 'Online purchase journey on the Apisul website, showing the vehicle insurance quote form split into steps.',
          },
        },
        {
          src: img3,
          alt: {
            pt: 'Etapa do formulário de cotação com os campos de dados operacionais, rotas e frota.',
            en: 'Quote form step with fields for operational data, routes and fleet information.',
          },
        },
        {
          src: img5,
          alt: {
            pt: 'Resumo da cotação com o valor calculado e o detalhamento das coberturas.',
            en: 'Quote summary showing the calculated price and a breakdown of coverage.',
          },
        },
        {
          src: img6,
          alt: {
            pt: 'Estado vazio da plataforma, com ilustração e orientação para o primeiro cadastro.',
            en: 'Empty state of the platform, with an illustration and guidance for the first record.',
          },
        },
        {
          src: img7,
          alt: {
            pt: 'Painel com gráficos de acompanhamento das operações.',
            en: 'Dashboard with charts tracking operations.',
          },
        },
        {
          src: img8,
          alt: {
            pt: 'Formulário de cadastro em modal sobre a listagem principal.',
            en: 'Record form in a modal over the main listing.',
          },
        },
        {
          src: img9,
          alt: {
            pt: 'Tabela de dados com filtros, ordenação e controle de densidade das colunas.',
            en: 'Data table with filters, sorting and column density controls.',
          },
        },
        {
          src: img10,
          alt: {
            pt: 'Tela de monitoramento com mapa e rota do veículo em trânsito.',
            en: 'Monitoring screen with a map and the route of a vehicle in transit.',
          },
        },
        {
          src: img11,
          alt: {
            pt: 'Listagem de viagens com status e ações disponíveis.',
            en: 'Trip listing with status and available actions.',
          },
        },
        {
          src: img12,
          alt: {
            pt: 'Central de ajuda aberta ao lado da tela de gerenciamento de risco, com busca e tópicos de suporte.',
            en: 'Help center open beside the risk management screen, with search and support topics.',
          },
        },
      ],
    },

    {
      type: 'text',
      heading: { pt: 'Resultados', en: 'Results' },
      paragraphs: {
        pt: [
          'A entrega deste projeto foi estratégica. A pesquisa, o protótipo e o Style Guide formaram uma visão consolidada da modernização dos produtos digitais da Apisul, apresentada aos acionistas. Foi ela que sustentou as duas frentes que vieram depois.',
          'A primeira foi a modernização do ApisulLog e do Integra, desenvolvida por outra empresa de tecnologia. Segui no projeto como product designer do lado da Apisul, revisando as entregas de design junto com a equipe parceira e pesquisando referências de mercado com uso de inteligência artificial, um levantamento que serviu para mapear novas funcionalidades possíveis para o ApisulLog.',
          'A segunda foi o Portal do Cliente, um produto novo que nasceu do achado sobre a dificuldade de acesso dos clientes aos próprios dados. A proposta era reunir em um só lugar as informações de logística, risco e seguros, somadas a uma central de ajuda e aos documentos financeiros. Entrou em desenvolvimento no final de 2024 e foi lançado em 2025. Atuei como product designer principal, acompanhando o desenvolvimento junto a um dev. Em vez de construir uma biblioteca do zero, adotamos uma biblioteca de componentes de mercado com a identidade da Apisul aplicada, o que modernizou a interface e acelerou bastante a entrega.',
        ],
        en: [
          'The delivery here was strategic rather than technical. The research, the prototype and the style guide formed a consolidated view of how to modernise Apisul digital products, and that view is what the shareholders evaluated. It supported the two initiatives that followed.',
          'The first was the modernisation of ApisulLog and Integra, developed by an external technology company. I continued on the project as product designer on the Apisul side, reviewing design deliverables alongside the partner team and researching market applications of artificial intelligence, a study that informed a list of potential new features for ApisulLog.',
          'The second was the Customer Portal, a new product that emerged directly from the finding about restricted data access. It brought logistics, risk and insurance information into a single place, together with a help centre and financial documents. Development began in late 2024 and the product launched in 2025. I led the design and worked closely with one developer throughout. Rather than building a component library from scratch, we adopted an existing one and applied Apisul branding to it, which modernised the interface and reduced the time to launch considerably.',
        ],
      },
    },

    {
      type: 'simple',
      heading: { pt: 'Ferramentas', en: 'Tools' },
      items: [
        { pt: 'Figma', en: 'Figma' },
        { pt: 'Miro', en: 'Miro' },
        { pt: 'Typeform', en: 'Typeform' },
      ],
    },

    {
      type: 'simple',
      heading: { pt: 'A Equipe', en: 'The team' },
      items: [
        {
          pt: 'Aron Krause Litvin (Inovação e Design Estratégico)',
          en: 'Aron Krause Litvin (Innovation and Strategic Design)',
        },
        {
          pt: 'Gabriela Dall’Agnol (Coordenação, pesquisa e Product Design)',
          en: 'Gabriela Dall’Agnol (Coordination, research and Product Design)',
        },
        {
          pt: 'Stéphanie Gonzaga (Design)',
          en: 'Stéphanie Gonzaga (Design)',
        },
      ],
    },
  ],
};