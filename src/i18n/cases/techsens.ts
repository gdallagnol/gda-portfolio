import type { CaseData } from './types';

import img1 from '@assets/branding/techsens/01.webp';
import img2 from '@assets/branding/techsens/02.webp';
import img3 from '@assets/branding/techsens/03.webp';
import img4 from '@assets/branding/techsens/04.webp';
import img5 from '@assets/branding/techsens/05.webp';
import img6 from '@assets/branding/techsens/06.webp';
import img7 from '@assets/branding/techsens/07.webp';
import img8 from '@assets/branding/techsens/08.webp';
import img9 from '@assets/branding/techsens/09.webp';
import img10 from '@assets/branding/techsens/10.webp';
import img12 from '@assets/branding/techsens/12.webp';
import img13 from '@assets/branding/techsens/13.webp';
import img14 from '@assets/branding/techsens/14.webp';
import img15 from '@assets/branding/techsens/15.webp';

const alt = (n: number) => ({
  pt: `Aplicação da identidade visual da Techsens, imagem ${n}.`,
  en: `Techsens visual identity applied, image ${n}.`,
});

export const techsens: CaseData = {
  meta: {
    segment: { pt: 'Tecnologia / Automação Residencial', en: 'Technology / Home Automation' },
    client: 'Techsens',
    year: '2024',
    description: {
      pt: 'Identidade visual da Techsens, empresa de automação residencial, inspirada em circuitos e sensores eletrônicos.',
      en: 'Visual identity for Techsens, a home automation company, inspired by circuits and electronic sensors.',
    },
    title: 'Techsens',
  },

  blocks: [
    {
      type: 'image',
      image: {
        src: img1,
        raw: true,
        alt: {
          pt: 'Símbolo da Techsens, inspirado em circuitos e sensores eletrônicos.',
          en: 'Techsens symbol, inspired by circuits and electronic sensors.',
        },
      },
    },

    {
      type: 'text',
      heading: { pt: 'Conceito', en: 'Concept' },
      paragraphs: {
        pt: [
          'O conceito da marca Techsens reflete a integração entre tecnologia e funcionalidade nos ambientes automatizados. O elemento gráfico foi inspirado em circuitos e sensores eletrônicos, representando a base tecnológica das soluções da empresa.',
          'As formas geométricas e as linhas contínuas reforçam a conexão com inovação e precisão, enquanto as cores destacam a confiabilidade e a modernidade. A identidade visual foi projetada para comunicar de forma clara o propósito da marca e sua atuação no mercado de automação residencial.',
        ],
        en: [
          'The Techsens brand concept reflects how technology and function come together in automated environments. The graphic element draws on circuits and electronic sensors, representing the technical foundation behind the company solutions.',
          'Geometric shapes and continuous lines reinforce a connection to innovation and precision, while the colour palette signals reliability and a contemporary outlook. The identity was designed to communicate clearly what the brand stands for within the home automation market.',
        ],
      },
    },

    {
      type: 'gallery',
      images: [
        { src: img2, alt: alt(1) },
        { src: img3, alt: alt(2) },
        { src: img4, alt: alt(3) },
        { src: img5, alt: alt(4) },
        { src: img6, alt: alt(5) },
        { src: img7, alt: alt(6) },
        { src: img8, alt: alt(7) },
        { src: img9, alt: alt(8) },
        { src: img10, alt: alt(9) },
        { src: img12, alt: alt(10) },
        { src: img13, alt: alt(11) },
        { src: img14, alt: alt(12) },
        { src: img15, alt: alt(13) },
      ],
    },
  ],
};
