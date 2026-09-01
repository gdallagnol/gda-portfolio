import type { CaseData } from './types';

import img1 from '@assets/branding/taller/01.gif';
import img2 from '@assets/branding/taller/02.webp';
import img3 from '@assets/branding/taller/03.webp';
import img4 from '@assets/branding/taller/04.webp';
import img5 from '@assets/branding/taller/05.webp';
import img6 from '@assets/branding/taller/06.webp';
import img7 from '@assets/branding/taller/07.webp';
import img8 from '@assets/branding/taller/08.webp';
import img9 from '@assets/branding/taller/09.webp';
import img10 from '@assets/branding/taller/10.webp';
import img11 from '@assets/branding/taller/11.webp';
import img12 from '@assets/branding/taller/12.webp';
import img13 from '@assets/branding/taller/13.webp';
import img14 from '@assets/branding/taller/14.webp';

const alt = (n: number) => ({
  pt: `Aplicação da identidade visual da Taller Arq., imagem ${n}.`,
  en: `Taller Arq. visual identity applied, image ${n}.`,
});

export const taller: CaseData = {
  meta: {
    segment: { pt: 'Arquitetura', en: 'Architecture' },
    client: 'Taller Arq.',
    year: '2021',
    title: 'Taller Arq.',
  },

  blocks: [
    {
      type: 'image',
      image: {
        src: img1,
        raw: true,
        alt: {
          pt: 'Animação do símbolo da Taller Arq., construído a partir de formas geométricas.',
          en: 'Animated Taller Arq. symbol, built from geometric shapes.',
        },
      },
    },

    {
      type: 'text',
      heading: { pt: 'Conceito', en: 'Concept' },
      paragraphs: {
        pt: [
          'Taller Arq. é um ateliê de arquitetura situado no Brasil, com dois jovens arquitetos na equipe que constroem soluções arquitetônicas modernas e contemporâneas.',
          'Para o desenvolvimento dessa identidade, a inspiração veio da geometria e minimalismo. O ícone foi criado com dinamismo a partir de formas geométricas básicas que representam a precisão e estrutura necessária na criação de projetos de arquitetura.',
        ],
        en: [
          'Taller Arq. is a Brazilian architecture studio run by two young architects working on modern, contemporary projects.',
          'The identity draws on geometry and minimalism. The icon was built from basic geometric shapes arranged with a sense of movement, representing the precision and structure that architectural work demands.',
        ],
      },
    },

    { type: 'gallery', images: [{ src: img2, alt: alt(1) }, { src: img3, alt: alt(2) }, { src: img4, alt: alt(3) }] },
    { type: 'pair', images: [{ src: img5, alt: alt(4) }, { src: img6, alt: alt(5) }] },
    {
      type: 'gallery',
      images: [
        { src: img7, alt: alt(6) },
        { src: img8, alt: alt(7) },
        { src: img9, alt: alt(8) },
        { src: img10, alt: alt(9) },
        { src: img11, alt: alt(10) },
        { src: img12, alt: alt(11) },
        { src: img13, alt: alt(12) },
        { src: img14, alt: alt(13) },
      ],
    },
  ],
};
