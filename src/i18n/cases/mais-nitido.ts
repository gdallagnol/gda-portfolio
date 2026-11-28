import type { CaseData } from './types';

import img1 from '@assets/pd/mais-nitido/01.webp';
import img2 from '@assets/pd/mais-nitido/02.webp';
import img3 from '@assets/pd/mais-nitido/03.webp';
import img4 from '@assets/pd/mais-nitido/04.webp';
import img5 from '@assets/pd/mais-nitido/05.webp';
import img6 from '@assets/pd/mais-nitido/06.webp';
import img7 from '@assets/pd/mais-nitido/07.webp';
import img8 from '@assets/pd/mais-nitido/08.webp';
import img9 from '@assets/pd/mais-nitido/09.webp';
import img10 from '@assets/pd/mais-nitido/10.webp';
import img11 from '@assets/pd/mais-nitido/11.webp';
import img12 from '@assets/pd/mais-nitido/12.webp';
import img13 from '@assets/pd/mais-nitido/13.webp';
import img14 from '@assets/pd/mais-nitido/14.webp';
import img15 from '@assets/pd/mais-nitido/15.webp';

export const maisNitido: CaseData = {
  meta: {
    segment: { pt: 'Mentoria Executiva e Profissional', en: 'Executive and Professional Mentoring' },
    client: 'Mais Nítido',
    year: '2023-2025',
    role: { pt: 'Coordenação e Product Design', en: 'Coordination and Product Design' },
    description: {
      pt: 'Pesquisa e desenho de uma plataforma de mentoria corporativa que forma duplas por compatibilidade, hoje em uso nos setores público e privado.',
      en: 'Research and design of a corporate mentoring platform that pairs people by compatibility, now in use across public and private organisations.',
    },
    title: 'Mais Nítido',
    subtitle: {
      pt: 'Uma plataforma de mentoria que conecta ',
      en: 'A mentoring platform that pairs ',
    },
    subtitleNoWrap: {
      pt: 'pessoas por compatibilidade.',
      en: 'people by compatibility.',
    },
    tools: ['Figma', 'Miro', 'Google Forms', 'Microsoft Clarity'],
  },

  blocks: [
    {
      type: 'image',
      image: {
        src: img1,
        alt: {
          pt: 'Primeira etapa do cadastro do Mais Nítido, em que a pessoa escolhe as áreas em que tem atuado ou estudado.',
          en: 'First step of the Mais Nítido sign up, where the person chooses the areas they have been working or studying in.',
        },
      },
    },

    // Resumo
    {
      type: 'summary',
      heading: { pt: 'Resumo do projeto', en: 'Project summary' },
      items: [
        {
          label: { pt: 'Contexto', en: 'Context' },
          text: {
            pt: 'Treinamentos corporativos tendem a ser padronizados. O Mais Nítido conecta profissionais a mentores por compatibilidade, para tornar o aprendizado mais assertivo.',
            en: 'Corporate training tends to be standardised. Mais Nítido connects professionals with mentors by compatibility, to make learning more effective.',
          },
        },
        {
          label: { pt: 'O que fiz', en: 'What I did' },
          text: {
            pt: 'Coordenei o projeto e desenhei do zero todos os fluxos e telas do produto, além do Style Guide. Conduzi os protótipos navegáveis, as entrevistas, o formulário online e a validação com testes moderados e análise de uso real.',
            en: 'I led the project and designed every flow and screen of the product from scratch, as well as the style guide. I ran the navigable prototypes, the interviews, the online survey and validation through moderated sessions and real usage analysis.',
          },
        },
        {
          label: { pt: 'Resultado', en: 'Outcome' },
          text: {
            pt: 'A plataforma foi lançada e está em uso nos setores público, privado e no terceiro setor. Um dos casos é o LabCultura.RS, programa do Governo do Rio Grande do Sul que usa o Mais Nítido para conectar produtores culturais a mentores.',
            en: 'The platform launched and is in use across public, private and non profit organisations. One case is LabCultura.RS, a Rio Grande do Sul state programme that uses Mais Nítido to connect cultural producers with mentors.',
          },
        },
      ],
      facts: [
        { value: '15', label: { pt: 'entrevistas em profundidade com RH, profissionais de tecnologia e mentores', en: 'in depth interviews with HR, technology professionals and mentors' } },
        { value: '2', label: { pt: 'formatos de validação: testes moderados e análise de uso real', en: 'validation formats: moderated sessions and real usage analysis' } },
        { value: '3', label: { pt: 'setores em que a plataforma está em uso: público, privado e terceiro setor', en: 'sectors where the platform is in use: public, private and non profit' } },
      ],
    },

    // Desafio
    {
      type: 'text',
      heading: { pt: 'O desafio', en: 'The challenge' },
      paragraphs: {
        pt: [
          'O escopo era desenvolver o MVP de uma ferramenta que viabilizasse mentorias dentro das empresas, com mentores internos e externos. Diferente de um projeto que termina em recomendações, este precisava funcionar em ambiente real, com empresas e profissionais usando a plataforma.',
          'O produto já tinha passado por uma primeira prototipação, com outra designer, e por uma tentativa de desenvolvimento com o Material Design para simplificar a construção, que não avançou. Retomei o projeto e redesenhei o produto do zero no Figma.',
        ],
        en: [
          'The scope was an MVP for a tool that made mentoring possible inside companies, with mentors from within and outside the organisation. Unlike a project that ends with recommendations, this one had to work in a real environment, with companies and professionals using the platform.',
          'The product had already been through an earlier round of prototyping with another designer, and through an attempt to build it on Material Design to simplify development, which did not move forward. I took over the project and redesigned the product from scratch in Figma.',
        ],
      },
    },
    {
      type: 'highlight',
      label: { pt: 'A pergunta que orientou o projeto', en: 'The question behind the project' },
      text: {
        pt: 'Como promover a troca de conhecimento entre profissionais de forma leve e personalizada, com bom custo benefício em tempo e aplicabilidade?',
        en: 'How might we enable knowledge exchange between professionals in a way that is light, personalised and worth the time it takes?',
      },
    },

    // Processo
    {
      type: 'text',
      heading: { pt: 'Processo', en: 'Process' },
      paragraphs: {
        pt: [
          'O produto precisava atender dois públicos com interesses distintos: o RH, que contrata e precisa justificar o investimento, e o profissional, que participa da mentoria e busca algo aplicável à própria carreira.',
          'Comecei criando protótipos navegáveis dos principais fluxos no Figma. Com eles, conduzi entrevistas em profundidade com quinze pessoas, entre profissionais de RH, profissionais de tecnologia e mentores, e complementei a amostra com um formulário online. A partir dos achados, ajustei os fluxos e desenhei as telas e o Style Guide do produto.',
          'A validação combinou dois formatos com propósitos diferentes. Os testes moderados pelo Google Meet mostravam o que as pessoas pensavam enquanto usavam o produto. O Microsoft Clarity mostrava o que elas faziam no uso real, sem a presença de um moderador, e ajudou a confirmar se os fluxos se sustentavam fora do teste.',
        ],
        en: [
          'The product had to serve two audiences with different interests: HR, which signs the contract and needs to justify the investment, and the professional, who takes part in the mentoring and wants something applicable to their own career.',
          'I started by building navigable prototypes of the main flows in Figma. Using them, I ran in depth interviews with fifteen people, including HR professionals, technology professionals and mentors, and widened the sample with an online survey. Based on the findings, I adjusted the flows and designed the screens and the product style guide.',
          'Validation combined two formats with distinct purposes. Moderated sessions over Google Meet showed what people were thinking as they used the product. Microsoft Clarity showed what they did in real use, without a moderator, and helped confirm whether the flows held up outside the test.',
        ],
      },
    },

    // Achados
    {
      type: 'insights',
      heading: { pt: 'O que a pesquisa mostrou', en: 'What the research showed' },
      items: [
        {
          title: {
            pt: 'A necessidade do mentorado ficava em segundo plano',
            en: "The mentee's needs came second",
          },
          text: {
            pt: 'Quando uma empresa contrata mentoria, o gestor costuma chegar com o resultado já definido, como desempenho comercial ou engajamento. A mentoria é formatada a partir dessa expectativa, e a necessidade de quem participa perde espaço.',
            en: 'When a company brings in mentoring, the manager typically arrives with the outcome already defined, such as sales performance or engagement. The programme is shaped around that expectation, and the needs of the participant lose ground.',
          },
        },
        {
          title: {
            pt: 'RH e mentorado precisam enxergar a evolução',
            en: 'HR and mentees both need to see progress',
          },
          text: {
            pt: 'Os dois lados querem acompanhar a evolução do aprendizado ao longo do processo, cada um por motivos diferentes.',
            en: 'Both sides want to follow how learning progresses over time, each for different reasons.',
          },
        },
        {
          title: {
            pt: 'A mentoria precisa ligar a estratégia da empresa à rotina',
            en: 'Mentoring has to link company strategy to daily work',
          },
          text: {
            pt: 'A empresa espera que a mentoria contribua para os próprios objetivos, e o profissional quer algo que possa aplicar no trabalho. Essa conexão precisa existir, mas de forma prática, ligada aos desafios reais do dia a dia do mentorado.',
            en: "The company expects mentoring to support its own goals, and the professional wants something they can apply at work. That connection has to exist, but in a practical form, tied to the real challenges of the mentee's daily work.",
          },
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
          icon: 'target',
          title: { pt: 'Conectar as pessoas certas', en: 'Match the right people' },
          text: {
            pt: 'Mapear estilo, desejos e necessidades por meio de perguntas chave, para que a formação das duplas partisse de compatibilidade real, e não de alocação administrativa.',
            en: 'Map working style, goals and needs through a set of key questions, so that pairs are formed from genuine compatibility rather than administrative assignment.',
          },
        },
        {
          icon: 'trending-up',
          title: {
            pt: 'Tornar a mentoria parte da valorização de carreira',
            en: 'Make mentoring part of career growth',
          },
          text: {
            pt: 'Posicionar o aprendizado como um benefício percebido pelo profissional, e não como um treinamento imposto pela empresa.',
            en: 'Position learning as a benefit the professional values, rather than training imposed by the company.',
          },
        },
        {
          icon: 'users',
          title: { pt: 'Incentivar a dupla função', en: 'Encourage people to play both roles' },
          text: {
            pt: 'Permitir que o mesmo colaborador atuasse como mentor e como mentorado, aproveitando as competências que já existiam dentro da empresa.',
            en: 'Allow the same employee to act as both mentor and mentee, drawing on expertise the company already had.',
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
          title: { pt: 'A ciência do match', en: 'The matching science' },
          paragraphs: {
            pt: [
              'O primeiro achado da pesquisa expôs a tensão que definiu o produto: quem paga pela mentoria e quem participa dela querem coisas diferentes, e as soluções existentes atendiam apenas o lado de quem paga.',
              'A resposta foi a ciência do match: um algoritmo de compatibilidade criado por Clara Celina, pesquisadora do time, que forma as duplas a partir das perguntas respondidas pelo próprio profissional. O mentor deixa de ser uma alocação administrativa e passa a ser resultado do que o mentorado busca, sem que a empresa perca a visibilidade sobre o processo.',
            ],
            en: [
              'The first research finding exposed the tension that defined the product: those who pay for mentoring and those who take part want different things, and existing solutions served only the paying side.',
              'The answer was the matching science: a compatibility algorithm created by Clara Celina, the team\'s researcher, which forms pairs from the questions the professional answers. The mentor is no longer an administrative assignment but the result of what the mentee is looking for, without the company losing visibility over the process.',
            ],
          },
        },
        {
          title: { pt: 'Um painel para quem contrata', en: 'A dashboard for the buyer' },
          paragraphs: {
            pt: [
              'Essa visibilidade tomou forma em um painel de acompanhamento para o RH, uma proposta dos fundadores que eu desenhei, com os dados das mentorias em andamento, os participantes e os mentores mais procurados. O painel se tornou o argumento de valor para quem contrata, porque apresenta a mentoria como um investimento acompanhável, e não como uma despesa recorrente.',
            ],
            en: [
              'That visibility took the form of an HR dashboard, proposed by the founders and designed by me, showing sessions in progress, participants and the most requested mentors. It became the value argument for the buyer, because it presents mentoring as a trackable investment rather than a recurring expense.',
            ],
          },
        },
        {
          title: { pt: 'No code para chegar ao mercado', en: 'No code to reach the market' },
          paragraphs: {
            pt: [
              'Com o produto redesenhado no Figma, os fundadores decidiram construir a plataforma em no code, em parceria com a Vistapub, em vez de manter uma equipe de desenvolvimento. A decisão permitiu que um time pequeno, sem estrutura própria de engenharia, chegasse ao mercado com um produto funcional, e não apenas com um protótipo.',
              'Em contrapartida, a ferramenta impôs limites de interface, e o Style Guide que criei foi adaptado pela Vistapub para caber nas possibilidades da plataforma escolhida.',
            ],
            en: [
              'With the product redesigned in Figma, the founders decided to build the platform with no code tools in partnership with Vistapub, rather than keep a development team. The decision allowed a small team with no engineering structure of its own to reach the market with a working product, not just a prototype.',
              'In return, the tool imposed interface constraints, and Vistapub adapted the style guide I had created to fit what the chosen platform could support.',
            ],
          },
        },
        {
          title: { pt: 'Créditos: o modelo de negócio dentro da experiência', en: 'Credits: the business model inside the experience' },
          paragraphs: {
            pt: [
              'A mudança mais desafiadora veio no meio do projeto. O modelo de negócio exigia um mecanismo financeiro que não estava no escopo inicial, e um sistema de créditos entrou no roadmap. A empresa adquire créditos por plano e distribui uma cota para cada colaborador, e cada mentor tem um custo em créditos conforme o perfil.',
              'O saldo passou a influenciar a escolha do mentor. O fluxo de créditos foi desenhado pela Vistapub, e meu papel foi validar a interface e a usabilidade, para que o colaborador entendesse quanto tinha disponível e o que conseguia com isso, sem que a plataforma se transformasse em uma vitrine de preços. Foi a decisão que mais mudou o produto, porque levou o modelo de negócio para dentro da experiência.',
            ],
            en: [
              'The most demanding change came midway through the project. The business model required a payment mechanism that was not in the original scope, and a credit system entered the roadmap. Companies buy credits through a plan and allocate a quota to each employee, and each mentor has a credit cost according to their profile.',
              'The balance now influenced mentor selection. Vistapub designed the credits flow, and my role was to validate its interface and usability, so that employees understood how much they had and what it would give them, without the platform turning into a price list. It was the decision that changed the product most, because it brought the business model into the experience itself.',
            ],
          },
        },
      ],
    },

    // Solucao: mesmo padrao do case Apisul, com as imagens na ordem e no tamanho da producao
    {
      type: 'screens',
      heading: { pt: 'A solução', en: 'The solution' },
      intro: {
        pt: 'As telas estão organizadas pelos fluxos do produto, na ordem em que a pessoa os percorre.',
        en: 'The screens are grouped by product flow, in the order people move through them.',
      },
      groups: [
        {
          label: { pt: 'Acesso e cadastro', en: 'Access and sign up' },
          text: {
            pt: 'O cadastro tem quatro etapas: áreas de atuação, conhecimentos e experiências, perfil comportamental e finalização. Essas respostas alimentam a ciência do match. A plataforma também foi desenhada para a experiência mobile.',
            en: 'Sign up has four steps: areas of work, knowledge and experience, behavioural profile and completion. These answers feed the matching science. The platform was also designed for the mobile experience.',
          },
          layout: 'two',
          screens: [
            {
              wide: true,
              image: {
                src: img2,
                alt: {
                  pt: 'Etapa do cadastro em que a pessoa indica, em escalas, o quanto domina cada área escolhida.',
                  en: 'Sign up step where the person rates, on scales, how well they know each chosen area.',
                },
              },
              title: { pt: 'Nível de conhecimento por área', en: 'Knowledge level by area' },
              caption: {
                pt: 'Uma das quatro etapas do cadastro que alimentam a ciência do match.',
                en: 'One of the four sign up steps that feed the matching science.',
              },
            },
            {
              wide: true,
              image: {
                src: img6,
                alt: {
                  pt: 'Teste comportamental com a pergunta Estou alinhado ao meu propósito quando e quatro opções de resposta.',
                  en: 'Behavioural test with the prompt I feel aligned with my purpose when and four answer options.',
                },
              },
              title: { pt: 'Teste comportamental', en: 'Behavioural test' },
              caption: {
                pt: 'As respostas compõem o perfil usado para formar as duplas.',
                en: 'The answers build the profile used to form pairs.',
              },
            },
            {
              wide: true,
              image: {
                src: img5,
                alt: {
                  pt: 'Resumo do perfil ao final do cadastro, com áreas, interesses e perfil comportamental, e a opção Quero oferecer mentoria.',
                  en: 'Profile summary at the end of sign up, with areas, interests and behavioural profile, and the option I want to offer mentoring.',
                },
              },
              title: { pt: 'Resumo do perfil', en: 'Profile summary' },
              caption: {
                pt: 'Ao final do cadastro, a pessoa pode se oferecer como mentora, o que atende ao objetivo de incentivar a dupla função.',
                en: 'At the end of sign up, people can offer to mentor, which supports the goal of encouraging both roles.',
              },
            },
            {
              image: {
                src: img4,
                alt: {
                  pt: 'Tela de login no celular, com acesso pelo Google, pelo LinkedIn ou por e-mail e senha.',
                  en: 'Mobile login screen, with access through Google, LinkedIn or email and password.',
                },
              },
              title: { pt: 'Acesso, no celular', en: 'Access, on mobile' },
            },
            {
              image: {
                src: img3,
                alt: {
                  pt: 'Etapa final do cadastro no celular, em que a pessoa escolhe até três imagens que representam atividades do seu interesse.',
                  en: 'Final sign up step on mobile, where the person picks up to three images representing activities they enjoy.',
                },
              },
              title: { pt: 'Interesses, no celular', en: 'Interests, on mobile' },
            },
          ],
        },
        {
          label: { pt: 'Match e agendamento', en: 'Matching and scheduling' },
          text: {
            pt: 'Do primeiro acesso ao agendamento: a pessoa recebe os mentores compatíveis, pode buscar por área e marca a sessão na própria plataforma.',
            en: 'From first access to scheduling: the person receives compatible mentors, can search by area and books the session in the platform.',
          },
          screens: [
            {
              image: {
                src: img7,
                alt: {
                  pt: 'Página inicial com a lista de primeiros passos e a última busca por mentores.',
                  en: 'Home page with a first steps checklist and the latest mentor search.',
                },
              },
              title: { pt: 'Primeiros passos', en: 'First steps' },
            },
            {
              image: {
                src: img8,
                alt: {
                  pt: 'Tela Confira seus matches, com dois mentores compatíveis e o botão para agendar mentoria.',
                  en: 'Check your matches screen, with two compatible mentors and a button to book mentoring.',
                },
              },
              title: { pt: 'Resultado do match', en: 'Match results' },
              caption: {
                pt: 'Mentores sugeridos a partir das respostas do cadastro, e não por alocação administrativa.',
                en: 'Mentors suggested from the sign up answers, not by administrative assignment.',
              },
            },
            {
              image: {
                src: img9,
                alt: {
                  pt: 'Agendamento de mentoria com calendário e escolha de horário.',
                  en: 'Booking a mentoring session with a calendar and time selection.',
                },
              },
              title: { pt: 'Agendamento', en: 'Scheduling' },
            },
            {
              image: {
                src: img10,
                alt: {
                  pt: 'Resultado da busca por mentores na área de Criatividade.',
                  en: 'Mentor search results in the Creativity area.',
                },
              },
              title: { pt: 'Busca por área', en: 'Search by area' },
              caption: {
                pt: 'Além das sugestões do match, a pessoa pode buscar diretamente os mentores disponíveis em cada área.',
                en: 'Besides the match suggestions, people can search directly for available mentors in each area.',
              },
            },
          ],
        },
        {
          label: { pt: 'Acompanhamento', en: 'Tracking' },
          text: {
            pt: 'Os dois lados acompanham a evolução: o mentorado avalia cada sessão, e o RH vê os dados de todas as mentorias.',
            en: 'Both sides follow progress: the mentee rates each session, and HR sees data across all mentoring.',
          },
          screens: [
            {
              image: {
                src: img11,
                alt: {
                  pt: 'Lista de mentorias passadas, com avaliação por estrelas e espaço para mensagem ao mentor.',
                  en: 'List of past mentoring sessions, with a star rating and space for a message to the mentor.',
                },
              },
              title: { pt: 'Avaliação da mentoria', en: 'Session rating' },
            },
            {
              image: {
                src: img12,
                alt: {
                  pt: 'Painel de analytics do RH, com totais de mentorias e mentores e rankings de conhecimentos, mentores e participantes.',
                  en: 'HR analytics dashboard, with totals of sessions and mentors and rankings of knowledge areas, mentors and participants.',
                },
              },
              title: { pt: 'Painel do RH', en: 'HR dashboard' },
              caption: {
                pt: 'Reúne os conhecimentos mais presentes e mais demandados, os mentores que mais entregam mentorias e os mais bem avaliados. É o argumento de valor para quem contrata.',
                en: 'It brings together the most common and most requested knowledge areas, the mentors who deliver the most sessions and the best rated. It is the value argument for the buyer.',
              },
            },
          ],
        },
        {
          label: { pt: 'Perfil e configurações', en: 'Profile and settings' },
          text: {
            pt: 'A pessoa pode atualizar os dados cadastrais e contar mais sobre a própria trajetória a qualquer momento.',
            en: 'People can update their details and add more about their career path at any time.',
          },
          layout: 'two',
          screens: [
            {
              image: {
                src: img14,
                alt: {
                  pt: 'Tela de configurações com o formulário de dados cadastrais.',
                  en: 'Settings screen with the registration details form.',
                },
              },
              title: { pt: 'Configurações', en: 'Settings' },
            },
            {
              image: {
                src: img15,
                alt: {
                  pt: 'Janela em que a pessoa descreve o momento de carreira e as habilidades.',
                  en: 'Dialog where the person describes their career stage and skills.',
                },
              },
              title: { pt: 'Trajetória', en: 'Career path' },
            },
          ],
        },
        {
          label: { pt: 'Style Guide', en: 'Style guide' },
          text: {
            pt: 'A base visual do produto, criada para dar consistência às telas.',
            en: 'The visual foundation of the product, created to keep the screens consistent.',
          },
          screens: [
            {
              image: {
                src: img13,
                alt: {
                  pt: 'Style Guide com cores neutras e de destaque, escala tipográfica e níveis de sombra.',
                  en: 'Style guide with neutral and accent colours, type scale and shadow levels.',
                },
              },
              title: { pt: 'Style Guide', en: 'Style guide' },
              caption: {
                pt: 'Paleta, tipografia e elevações, adaptados pela Vistapub para a ferramenta no code.',
                en: 'Palette, typography and elevation, adapted by Vistapub for the no code tool.',
              },
            },
          ],
        },
      ],
    },

    // Resultados
    {
      type: 'text',
      heading: { pt: 'Resultados', en: 'Results' },
      paragraphs: {
        pt: [
          'O Mais Nítido foi lançado e está em uso em organizações públicas, privadas e do terceiro setor.',
          'O caso mais visível é o LabCultura.RS, programa da Secretaria de Estado da Cultura do Rio Grande do Sul em parceria com a Universidade Feevale, voltado a projetos da Lei Paulo Gustavo. Desde agosto de 2025, a plataforma conecta produtores culturais a cerca de sessenta mentores de diferentes regiões do Brasil, em quinhentas horas de orientação gratuita, e é o algoritmo de compatibilidade que forma as duplas.',
        ],
        en: [
          'Mais Nítido launched and is in use across public, private and non profit organisations.',
          'The most visible case is LabCultura.RS, a programme run by the Rio Grande do Sul State Department of Culture in partnership with Universidade Feevale, supporting projects funded by the Paulo Gustavo Act. Since August 2025, the platform has connected cultural producers with around sixty mentors from different regions of Brazil, across five hundred hours of free guidance, with the matching algorithm forming every pair.',
        ],
      },
    },
    {
      type: 'highlight',
      label: { pt: 'O que o uso real ensinou', en: 'What real use taught us' },
      text: {
        pt: 'Com o produto em uso, o maior desafio passou a ser a gestão da comunicação com mentores e mentorados: e-mails, comunicados e o acompanhamento que mantém as pessoas engajadas ao longo do programa.',
        en: 'Once the product was in use, the biggest challenge became managing communication with mentors and mentees: emails, announcements and the follow up that keeps people engaged throughout the programme.',
      },
    },

    {
      type: 'simple',
      heading: { pt: 'A Equipe', en: 'The team' },
      items: [
        {
          pt: 'Aron Krause Litvin (Inovação e Design Estratégico)',
          en: 'Aron Krause Litvin (Innovation and Strategic Design)',
        },
        { pt: 'Clara Celina (Pesquisa)', en: 'Clara Celina (Research)' },
        { pt: 'Daniel Caminha (Fundador e psicólogo)', en: 'Daniel Caminha (Founder and psychologist)' },
        {
          pt: 'Gabriela Dall’Agnol (Coordenação e Product Design)',
          en: 'Gabriela Dall’Agnol (Coordination and Product Design)',
        },
        {
          pt: 'Lucas Weinmann (Vistapub, desenvolvimento no code e design)',
          en: 'Lucas Weinmann (Vistapub, no code development and design)',
        },
      ],
    },
  ],
};