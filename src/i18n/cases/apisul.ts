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
          'Grupo Apisul offers insurance, risk management, logistics, payments, and claims services, each running on a separate platform. This fragmentation complicates both purchasing and implementation, while leaving customer data distributed across systems that do not communicate with one another.',
          'The project set out to determine how these services could operate as a single integrated ecosystem, allowing customers to select and activate the modules they need without navigating five different products.',
        ],
      },
    },

    {
      type: 'text',
      heading: { pt: 'Processo', en: 'Process' },
      paragraphs: {
        pt: [
          'Como o problema envolvia cinco produtos diferentes, comecei pela etapa de empatia buscando compreender o ecossistema como um todo. Primeiro, mapeei como cada solução funcionava e se relacionava com as demais, criando uma visão das conexões que formavam essa experiência. Com esse panorama, defini as diferentes perspectivas que precisavam ser investigadas e estruturei a pesquisa para aprofundar esse entendimento.',
          'O processo completo, das primeiras descobertas ao resultado final, combinou diferentes métodos e ferramentas em cada etapa.',
        ],
        en: [
          'Because the problem involved five different products, I started with the empathy stage by first understanding the ecosystem as a whole. I mapped how each solution worked and related to the others, creating a view of the connections that shaped the overall experience. With this broader perspective, I identified the different viewpoints that needed to be investigated and structured the research to deepen that understanding.',
          'The complete process, from the initial discoveries to the final outcome, combined different methods and tools at each stage.',
        ],
      },
    },

    {
      type: 'image',
      image: {
        src: img1_1,
        alt: {
          pt: 'Diagrama do processo em cinco etapas: empatia, definição, ideação, prototipação e teste, refino e resultado, com as ferramentas usadas em cada uma.',
          en: 'Five-stage process diagram covering empathy, definition, ideation, prototyping and testing, refinement, and results, with the methods used at each stage.',
        },
      },
    },

    {
      type: 'list',
      heading: { pt: 'Insights das pesquisas', en: 'Research insights' },
      intro: {
        pt: 'Foram realizadas entrevistas em profundidade com executivos das áreas, colaboradores da operação e clientes externos, entre transportadoras de diversos portes e embarcadores. Para a leitura de mercado, fiz uma desk research com dados do segmento, tendências de tecnologia e benchmark dos concorrentes, somada a entrevistas com fundadores de insurtechs consagradas.',
        en: 'The research combined two approaches. I conducted in-depth interviews with executives, operations staff, and external customers, including carriers of different sizes and shippers. Alongside this, I conducted desk research covering industry data, technology trends, competitor benchmarking, and interviews with founders of established insurtechs.',
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
              'Access to their own data was indirect. To review logistics, risk, or insurance information, customers depended on monthly reports or had to request the data each time they needed it.',
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
            en: 'Consolidate products and services into a single platform organized around customer behaviour, so that purchasing decisions start from a business need rather than from the company’s internal structure.',
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
            en: 'Enable customers to manage their own operations independently, including uploading their own data and purchasing online. This also created a path to serve small carriers and independent drivers, a segment the traditional sales model could not reach economically.',
          },
        },
      ],
    },

    {
      type: 'text',
      heading: { pt: 'Escolhas do projeto', en: 'Project decisions' },
      paragraphs: {
        pt: [
          'O protótipo foi criado para tornar concreta a proposta de integrar as cinco soluções da Apisul em uma única plataforma e levar essa visão para discussão com os acionistas. Como a definição de uma plataforma desse porte estava além do escopo do projeto, o objetivo não era entregar uma especificação de desenvolvimento, mas explorar como essa experiência poderia funcionar na prática.',
          'As possibilidades exploradas no protótipo partiram dos aprendizados da pesquisa. A jornada de aquisição online, por exemplo, surgiu das entrevistas com fundadores de insurtechs e dos dados de mercado, que apontavam para modelos de contratação digital sem intermediação. Por isso, foi direcionada a pequenas transportadoras e autônomos, públicos que ficavam fora do modelo comercial tradicional. A central de ajuda respondeu à dificuldade dos clientes em acessar informações e obter suporte sem depender do WhatsApp. Já o Style Guide surgiu da análise heurística, que revelou produtos desenvolvidos de forma independente, sem padronização de componentes e com interfaces defasadas.',
          'Não seria possível representar todo o ecossistema no nível de profundidade necessário. Por isso, além das evidências da pesquisa, considerei as prioridades do negócio e os dados de uso do Google Analytics para definir o recorte. Como os seguros já eram o carro chefe da Apisul, o direcionamento era fortalecer o ApisulLog e o Integra como produtos com valor próprio. Priorizamos, então, as funcionalidades mais acessadas e concentramos o esforço em poucas experiências, aprofundando o que seria mais relevante para a discussão com os acionistas.',
          'Por fim, realizamos dois ciclos de usabilidade para verificar se a proposta fazia sentido para os usuários. Os testes ajudaram a confirmar a percepção de valor na centralização dos controles e na modernização da experiência, dando mais segurança para a apresentação da proposta.',
        ],
        en: [
          'The prototype was created to make the proposal of integrating Apisul’s five solutions into a single platform tangible and bring that vision into discussion with the shareholders. Since defining a platform of this scale was beyond the scope of the project, the goal was not to deliver a development specification, but to explore how this experience could work in practice.',
          'The possibilities explored in the prototype were grounded in research findings. The online purchasing journey, for example, emerged from interviews with insurtech founders and market data pointing to digital purchasing models without intermediaries. It was therefore designed for small carriers and independent drivers, audiences that fell outside the traditional sales model. The help centre responded to customers’ difficulty accessing information and obtaining support without relying on WhatsApp. The Style Guide, in turn, emerged from the heuristic review, which revealed independently developed products with no shared component standards and interfaces that lagged behind current market expectations.',
          'It was not possible to represent the entire ecosystem at the level of depth required. In addition to the research evidence, I considered business priorities and Google Analytics usage data to define the scope. Since insurance was already Apisul’s core business, the direction was to strengthen ApisulLog and Integra as products with value in their own right. We therefore prioritised the most accessed features and concentrated the effort on a few experiences, going deeper where it would matter most for the shareholder discussion.',
          'Finally, we ran two rounds of usability testing to assess whether the proposal made sense to users. The sessions helped confirm the perceived value of centralising controls and modernising the experience, providing greater confidence in presenting the proposal.',
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
            en: 'Quote form step with fields for operational data, routes, and fleet information.',
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
            en: 'Data table with filters, sorting, and column density controls.',
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
            en: 'Help centre open beside the risk management screen, with search and support topics.',
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
          'The delivery here was strategic rather than technical. The research, the prototype, and the Style Guide formed a consolidated view of how to modernise Apisul’s digital products, and that view was presented to the shareholders. It supported the two initiatives that followed.',
          'The first was the modernisation of ApisulLog and Integra, developed by an external technology company. I continued on the project as the product designer on the Apisul side, reviewing design deliverables alongside the partner team and researching market applications of artificial intelligence. This study informed a list of potential new features for ApisulLog.',
          'The second was the Customer Portal, a new product that emerged directly from the finding about customers’ restricted access to their own data. It brought logistics, risk, and insurance information into a single place, together with a help centre and financial documents. Development began in late 2024, and the product launched in 2025. I led the design and worked closely with one developer throughout. Rather than building a component library from scratch, we adopted an existing one and applied Apisul’s branding to it, which modernised the interface and significantly accelerated delivery.',
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