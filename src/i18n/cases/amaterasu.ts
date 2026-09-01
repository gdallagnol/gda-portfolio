import type { CaseData } from './types';

import img1 from '@assets/branding/amaterasu/01.webp';
import img2 from '@assets/branding/amaterasu/02.webp';
import img3 from '@assets/branding/amaterasu/03.webp';
import img4 from '@assets/branding/amaterasu/04.webp';
import img5 from '@assets/branding/amaterasu/05.webp';
import img6 from '@assets/branding/amaterasu/06.webp';
import img7 from '@assets/branding/amaterasu/07.webp';
import img8 from '@assets/branding/amaterasu/08.gif';
import img9 from '@assets/branding/amaterasu/09.webp';
import img10 from '@assets/branding/amaterasu/10.webp';
import img11 from '@assets/branding/amaterasu/11.webp';
import img12 from '@assets/branding/amaterasu/12.webp';

const alt = (n: number) => ({
  pt: `Aplicação da identidade visual do Amaterasu, imagem ${n}.`,
  en: `Amaterasu visual identity applied, image ${n}.`,
});

export const amaterasu: CaseData = {
  meta: {
    segment: { pt: 'Gastronomia', en: 'Food and Drink' },
    client: { pt: 'Amaterasu (fictício)', en: 'Amaterasu (fictional)' },
    year: '2019',
    title: 'Amaterasu',
  },

  blocks: [
    {
      type: 'image',
      image: {
        src: img1,
        alt: {
          pt: 'Marca do Amaterasu, com o símbolo da garça em traço inspirado na arte japonesa.',
          en: 'Amaterasu brand mark, with a heron symbol drawn in a style inspired by Japanese art.',
        },
      },
    },

    {
      type: 'text',
      heading: { pt: 'Conceito', en: 'Concept' },
      paragraphs: {
        pt: [
          'Este é um projeto autoral desenvolvido como parte da minha exploração pessoal em design de marcas.',
          'Amaterasu é um restaurante japonês contemporâneo inspirado na deusa do Sol da mitologia japonesa. A identidade da marca tem como símbolo principal a garça, uma ave elegante frequentemente retratada na arte japonesa tradicional. A identidade visual combina estética moderna com simbolismo cultural, refletindo a essência refinada e sofisticada do restaurante.',
        ],
        en: [
          'A self initiated project, developed as part of my own exploration of brand design.',
          'Amaterasu is a contemporary Japanese restaurant named after the sun goddess of Japanese mythology. The identity centres on the heron, an elegant bird that appears throughout traditional Japanese art. The result combines a modern aesthetic with cultural symbolism, reflecting the refined character of the restaurant.',
        ],
      },
    },

    { type: 'gallery', images: [{ src: img2, alt: alt(1) }, { src: img3, alt: alt(2) }] },
    { type: 'pair', images: [{ src: img4, alt: alt(3) }, { src: img5, alt: alt(4) }] },
    { type: 'gallery', images: [{ src: img6, alt: alt(5) }] },
    { type: 'pair', images: [{ src: img7, alt: alt(6) }, { src: img8, alt: alt(7) }] },
    {
      type: 'gallery',
      images: [
        { src: img9, alt: alt(8) },
        { src: img10, alt: alt(9) },
        { src: img11, alt: alt(10) },
        { src: img12, alt: alt(11) },
      ],
    },
  ],
};
