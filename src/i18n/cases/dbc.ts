import type { CaseData } from './types';

import img1 from '@assets/pd/dbc/01.webp';
import img2 from '@assets/pd/dbc/02.webp';
import img3 from '@assets/pd/dbc/03.webp';
import img4 from '@assets/pd/dbc/04.webp';

export const dbc: CaseData = {
  meta: {
    segment: { pt: 'Tecnologia', en: 'Technology' },
    client: 'DBC',
    year: '2022',
    role: { pt: 'UI Design', en: 'UI Design' },
    title: 'DBC',
    subtitle: { pt: 'Um ', en: 'A ' },
    subtitleLink: {
      href: 'https://www.dbccompany.com.br/',
      label: { pt: 'site', en: 'website' },
    },
    subtitleAfter: {
      pt: ' para comunicar o novo posicionamento e ',
      en: ' introducing the new brand and positioning of ',
    },
    subtitleNoWrap: {
      pt: 'marca de uma empresa de TI.',
      en: 'an IT company.',
    },
  },

  blocks: [
    {
      type: 'captioned',
      heading: { pt: 'Home', en: 'Home' },
      image: {
        src: img1,
        alt: {
          pt: 'Página inicial do site da DBC, com a chamada principal e a apresentação dos serviços.',
          en: 'DBC website home page, with the main headline and an overview of services.',
        },
      },
    },
    {
      type: 'captioned',
      heading: { pt: 'Sobre', en: 'About' },
      image: {
        src: img2,
        alt: {
          pt: 'Página sobre a empresa, com a história e os valores da DBC.',
          en: 'About page, covering the company history and values.',
        },
      },
    },
    {
      type: 'captioned',
      heading: { pt: 'Tech Update - Blog', en: 'Tech Update - Blog' },
      image: {
        src: img3,
        alt: {
          pt: 'Blog Tech Update, com a listagem dos artigos publicados.',
          en: 'Tech Update blog, showing the list of published articles.',
        },
      },
    },
    {
      type: 'captioned',
      heading: { pt: 'Contato', en: 'Contact' },
      image: {
        src: img4,
        alt: {
          pt: 'Página de contato, com o formulário e os canais de atendimento.',
          en: 'Contact page, with the form and the available contact channels.',
        },
      },
    },

    {
      type: 'simple',
      heading: { pt: 'Ferramentas', en: 'Tools' },
      items: [{ pt: 'Adobe XD', en: 'Adobe XD' }],
    },

    {
      type: 'simple',
      heading: { pt: 'A Equipe', en: 'The team' },
      items: [
        { pt: 'Bitfans (Development)', en: 'Bitfans (Development)' },
        { pt: 'Felipe Amaral (Direção Criativa)', en: 'Felipe Amaral (Creative Direction)' },
        { pt: 'Gabriela Dall’Agnol (UI Designer)', en: 'Gabriela Dall’Agnol (UI Designer)' },
        { pt: 'Ricardo Franco (Motion Designer)', en: 'Ricardo Franco (Motion Designer)' },
      ],
    },
  ],
};