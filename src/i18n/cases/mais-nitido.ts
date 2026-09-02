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

/**
 * Os textos alternativos abaixo descrevem as telas de forma geral.
 * Ajuste cada um conforme o que a imagem realmente mostra.
 */
export const maisNitido: CaseData = {
  meta: {
    segment: { pt: 'Mentoria Executiva e Profissional', en: 'Executive and Professional Mentoring' },
    client: 'Mais Nítido',
    year: '2023-2024',
    role: { pt: 'Coordenação e Product Design', en: 'Coordination and Product Design' },
    description: {
      pt: 'Pesquisa e desenho de uma plataforma de mentoria corporativa que forma duplas a partir de compatibilidade real, hoje em uso no setor público e privado.',
      en: 'Research and design of a corporate mentoring platform that pairs people by real compatibility, now in use across public and private organisations.',
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
  },

  blocks: [
    {
      type: 'image',
      image: {
        src: img1,
        alt: {
          pt: 'Tela inicial da plataforma Mais Nítido, com a busca por mentores em destaque.',
          en: 'Mais Nítido home screen, with mentor search in the foreground.',
        },
      },
    },

    {
      type: 'text',
      heading: { pt: 'O desafio', en: 'The challenge' },
      paragraphs: {
        pt: [
          'As soluções de educação e treinamento disponíveis no mercado entregam conteúdo padronizado e pouco aderente à realidade de cada profissional. A pergunta que orientou o projeto foi como promover a troca de conhecimento entre profissionais de forma leve e personalizada, com bom custo benefício em tempo e aplicabilidade.',
          'O escopo era desenvolver um MVP de uma ferramenta que viabilizasse mentorias dentro das empresas, com mentores internos e externos. Diferente de um projeto que termina na recomendação, este precisava rodar em ambiente real.',
        ],
        en: [
          'Corporate training programmes deliver standardised content that rarely connects to the reality of any individual professional. The project started from a question: how do you enable knowledge exchange between professionals in a way that is light, personalised and worth the time it requires?',
          'The scope was an MVP for running mentoring inside companies, drawing on mentors from within and outside the organisation. Unlike a project that concludes with a set of recommendations, this one had to operate in a real environment.',
        ],
      },
    },

    {
      type: 'text',
      heading: { pt: 'Processo', en: 'Process' },
      paragraphs: {
        pt: [
          'O produto precisava atender dois públicos com interesses distintos. De um lado o RH, que contrata e precisa justificar o investimento. Do outro o profissional, que participa da mentoria e busca algo aplicável à própria carreira.',
          'Conduzi entrevistas em profundidade com cerca de quinze pessoas, entre profissionais de RH, de tecnologia e pessoas que já faziam mentoria por meios informais, complementadas por um formulário online para ampliar o alcance da amostra. A partir dos achados desenhei os fluxos, as telas e o Style Guide do produto.',
          'Na validação usei dois formatos com propósitos diferentes. Os testes moderados via Google Meet mostravam o que as pessoas pensavam enquanto usavam. O Microsoft Clarity mostrava o que elas faziam sem saber que estavam sendo observadas, o que ajudou a confirmar se os fluxos se sustentavam no uso real.',
        ],
        en: [
          'The product had to serve two audiences with different interests. HR signs the contract and needs to justify the investment. The professional taking part wants something applicable to their own career.',
          'I ran in depth interviews with around fifteen people, including HR and technology professionals and people already mentoring through informal channels, complemented by an online survey to widen the sample. The findings shaped the flows, the screens and the product style guide.',
          'Validation used two formats with distinct purposes. Moderated sessions over Google Meet captured what people were thinking as they worked through the product. Microsoft Clarity captured what they did unobserved, which is what confirmed whether the flows held up in real use.',
        ],
      },
    },

    {
      type: 'list',
      heading: { pt: 'Insights das pesquisas', en: 'Research insights' },
      groups: [
        {
          items: {
            pt: [
              'Quando uma empresa contrata mentoria, o gestor costuma chegar com o resultado já definido, como desempenho comercial ou engajamento. A mentoria é então formatada a partir dessa expectativa, e a necessidade do mentorado entra em segundo plano.',
              'Tanto o RH quanto o mentorado precisam enxergar a evolução do aprendizado ao longo do processo, cada um por motivos diferentes.',
              'A conexão entre o desafio do mentorado e a estratégia da empresa precisa existir, mas de forma aplicável no dia a dia.',
            ],
            en: [
              'When a company brings in mentoring, the manager typically arrives with the outcome already defined, whether that is sales performance or engagement. The programme is then shaped around that expectation, and the needs of the mentee become secondary.',
              'Both HR and the mentee need visibility into progress as it happens, each for different reasons.',
              'The connection between the mentee challenge and company strategy has to exist, but in a form that can be applied day to day.',
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
          icon: '🎯',
          title: { pt: 'Conectar as pessoas certas', en: 'Match the right people' },
          text: {
            pt: 'Mapear estilo, desejos e necessidades por meio de perguntas chave, para que a formação das duplas partisse de compatibilidade real e não de alocação administrativa.',
            en: 'Map working style, goals and needs through a set of key questions, so that pairs are formed from genuine compatibility rather than administrative assignment.',
          },
        },
        {
          icon: '👨‍💻',
          title: {
            pt: 'Tornar a mentoria parte da valorização de carreira',
            en: 'Make mentoring feel like career growth',
          },
          text: {
            pt: 'Posicionar o aprendizado como benefício percebido pelo profissional, e não como treinamento imposto pela empresa.',
            en: 'Position learning as a benefit the professional gains, rather than training imposed by the company.',
          },
        },
        {
          icon: '🤝',
          title: { pt: 'Incentivar a dupla função', en: 'Encourage people to be both' },
          text: {
            pt: 'Permitir que o mesmo colaborador atuasse como mentor e como mentorado, aproveitando as expertises que já existiam dentro da empresa.',
            en: 'Allow the same employee to act as both mentor and mentee, drawing on expertise the company already holds internally.',
          },
        },
      ],
    },

    {
      type: 'text',
      heading: { pt: 'Escolhas do projeto', en: 'Project decisions' },
      paragraphs: {
        pt: [
          'O primeiro achado da pesquisa expôs uma tensão que definiu o produto. Quem paga pela mentoria e quem participa dela querem coisas diferentes, e as soluções existentes atendiam apenas o lado de quem paga. A resposta foi a ciência do match, um algoritmo desenvolvido pela Clara Celina que forma as duplas a partir de perguntas respondidas pelo próprio profissional. O mentor deixa de ser uma alocação administrativa e passa a ser resultado do que o mentorado busca, sem que a empresa perca a visibilidade sobre o processo.',
          'Essa visibilidade tomou forma em um painel de acompanhamento para o RH, com os dados das mentorias em andamento, quem está participando e quais mentores concentram mais procura. O painel virou o argumento de valor para quem contrata, porque sustenta a mentoria como investimento acompanhável em vez de despesa recorrente.',
          'A plataforma foi construída em no code, em parceria com a Vistapub. A decisão permitiu que um time pequeno e sem estrutura própria de engenharia chegasse ao mercado com um produto funcional em vez de um protótipo. Ela também impôs limites de interface, e o Style Guide que criei foi adaptado pela Vistapub para caber nas possibilidades da ferramenta escolhida.',
          'A mudança mais desafiadora veio no meio do caminho. O modelo de negócio exigia um mecanismo financeiro que não estava previsto no escopo inicial, e um sistema de créditos entrou no roadmap de forma repentina. A empresa adquire créditos por plano e distribui uma cota para cada colaborador, e cada mentor tem um custo em créditos conforme seu perfil. Isso obrigou a reorganizar fluxos já desenhados. O saldo passou a influenciar a escolha do mentor, e o colaborador precisava entender quanto tinha disponível e o que conseguia com aquilo, sem que a plataforma virasse uma vitrine de preços. Foi a decisão que mais mexeu no produto, porque trouxe o modelo de negócio para dentro da experiência.',
        ],
        en: [
          'The first research finding exposed a tension that shaped the product. Those who pay for mentoring and those who take part in it want different things, and the existing solutions addressed only the paying side. The response was the matching science, an algorithm developed by Clara Celina that forms pairs from questions the professional answers themselves. The mentor is no longer an administrative assignment but a result of what the mentee is looking for, without the company losing visibility over the process.',
          'That visibility took the form of a dashboard for HR, covering sessions in progress, who is taking part and which mentors are most requested. It became the value argument for whoever signs the contract, because it presents mentoring as a trackable investment rather than a recurring expense.',
          'The platform was built with no code tools in partnership with Vistapub. This allowed a small team with no engineering structure of its own to reach the market with a working product rather than a prototype. It also imposed interface constraints, and Vistapub adapted the style guide I had created to fit what the chosen tool could support.',
          'The most demanding change arrived midway through. The business model required a payment mechanism that had not been anticipated in the original scope, and a credit system entered the roadmap without warning. Companies purchase credits through a plan and allocate a quota to each employee, and every mentor carries a credit cost according to their profile. This meant reworking flows that were already designed. Available balance now influenced mentor selection, and employees needed to understand how much they had and what it would give them, without the platform turning into a price list. It was the decision that changed the product most, because it brought the business model into the experience itself.',
        ],
      },
    },

    {
      type: 'gallery',
      images: [
        {
          src: img2,
          alt: {
            pt: 'Etapa do cadastro em que a pessoa avalia o próprio nível de conhecimento em cada área usando escalas.',
            en: 'Sign up step where the person rates their own level of knowledge in each area using sliders.',
          },
        },
      ],
    },
    {
      type: 'pair',
      images: [
        {
          src: img3,
          alt: {
            pt: 'Tela de perfil do mentor em formato mobile.',
            en: 'Mentor profile screen on mobile.',
          },
        },
        {
          src: img4,
          alt: {
            pt: 'Tela de busca de mentores em formato mobile.',
            en: 'Mentor search screen on mobile.',
          },
        },
      ],
    },
    {
      type: 'gallery',
      images: [
        {
          src: img5,
          alt: {
            pt: 'Fluxo de cadastro com o indicador de progresso em quatro etapas.',
            en: 'Sign up flow with a four step progress indicator.',
          },
        },
        {
          src: img6,
          alt: {
            pt: 'Página inicial da plataforma com os mentores sugeridos.',
            en: 'Platform home page showing suggested mentors.',
          },
        },
        {
          src: img7,
          alt: {
            pt: 'Resultado do match, com os mentores compatíveis listados.',
            en: 'Match results, listing the most compatible mentors.',
          },
        },
        {
          src: img8,
          alt: {
            pt: 'Tela de agendamento de uma sessão de mentoria.',
            en: 'Screen for scheduling a mentoring session.',
          },
        },
        {
          src: img9,
          alt: {
            pt: 'Painel de acompanhamento do RH, com os dados das mentorias em andamento.',
            en: 'HR dashboard showing data on mentoring sessions in progress.',
          },
        },
        {
          src: img10,
          alt: {
            pt: 'Painel do RH com o ranking dos mentores mais procurados.',
            en: 'HR dashboard showing a ranking of the most requested mentors.',
          },
        },
        {
          src: img11,
          alt: {
            pt: 'Área de créditos, com o saldo disponível do colaborador.',
            en: 'Credits area showing the balance available to the employee.',
          },
        },
        {
          src: img12,
          alt: {
            pt: 'Style Guide do produto, com paleta de cores, tipografia e componentes.',
            en: 'Product style guide with color palette, typography and components.',
          },
        },
        {
          src: img13,
          alt: {
            pt: 'Biblioteca de componentes da interface.',
            en: 'Interface component library.',
          },
        },
      ],
    },
    {
      type: 'pair',
      images: [
        {
          src: img14,
          alt: {
            pt: 'Tela de configurações da conta, com os dados cadastrais do usuário.',
            en: 'Account settings screen with the user registration details.',
          },
        },
        {
          src: img15,
          alt: {
            pt: 'Tela de perfil em que o usuário descreve seu momento de carreira e habilidades.',
            en: 'Profile screen where the user describes their career stage and skills.',
          },
        },
      ],
    },

    {
      type: 'text',
      heading: { pt: 'Resultados', en: 'Results' },
      paragraphs: {
        pt: [
          'O Mais Nítido foi lançado e está em uso em contextos públicos, privados e do terceiro setor.',
          'Colocar o produto em operação trouxe um desafio que a fase de desenho não antecipava. Depois do lançamento, a dificuldade deixou de ser a usabilidade e passou a ser manter a comunicação e o engajamento das pessoas ao longo do uso, algo que uma interface bem resolvida sozinha não garante.',
          'Hoje o caso mais visível é o LabCultura.RS, programa da Secretaria de Estado da Cultura do Rio Grande do Sul em parceria com a Universidade Feevale, voltado a projetos da Lei Paulo Gustavo. Desde agosto de 2025, a plataforma conecta produtores culturais a cerca de sessenta mentores de diferentes regiões do Brasil, com quinhentas horas de orientação gratuita, e é o algoritmo de compatibilidade que forma as duplas.',
        ],
        en: [
          'Mais Nítido launched and is now in use across public sector, private and non profit organisations.',
          'Putting the product into operation raised a challenge the design phase had not anticipated. After launch, the difficulty was no longer usability but sustaining communication and engagement over time, something a well resolved interface cannot guarantee on its own.',
          'The most visible case today is LabCultura.RS, a programme run by the Rio Grande do Sul State Department of Culture in partnership with Universidade Feevale, supporting projects funded by the Paulo Gustavo Act. Since August 2025 the platform has connected cultural producers with around sixty mentors across Brazil, offering five hundred hours of free guidance, with the matching algorithm forming every pair.',
        ],
      },
    },

    {
      type: 'simple',
      heading: { pt: 'Ferramentas', en: 'Tools' },
      items: [
        { pt: 'Google Forms', en: 'Google Forms' },
        { pt: 'Figma', en: 'Figma' },
        { pt: 'Miro', en: 'Miro' },
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
        { pt: 'Clara Celina (Research)', en: 'Clara Celina (Research)' },
        { pt: 'Daniel Caminha (Founder e Psicólogo)', en: 'Daniel Caminha (Founder and Psychologist)' },
        {
          pt: 'Gabriela Dall’Agnol (Coordenação e Product Design)',
          en: 'Gabriela Dall’Agnol (Coordination and Product Design)',
        },
        {
          pt: 'Lucas Weinmann (Vistapub. - No Code Developer & Designer)',
          en: 'Lucas Weinmann (Vistapub. - No Code Developer & Designer)',
        },
      ],
    },
  ],
};
