import type { CaseData } from './types';

import img1 from '@assets/branding/silva/01.webp';
import img2 from '@assets/branding/silva/02.webp';
import img3 from '@assets/branding/silva/03.webp';
import img4 from '@assets/branding/silva/04.webp';
import img5 from '@assets/branding/silva/05.webp';
import img6 from '@assets/branding/silva/06.webp';
import img7 from '@assets/branding/silva/07.webp';
import img8 from '@assets/branding/silva/08.webp';
import img9 from '@assets/branding/silva/09.webp';

const alt = (n: number) => ({
  pt: `Aplicação da identidade visual da Silva Schardong, imagem ${n}.`,
  en: `Silva Schardong visual identity applied, image ${n}.`,
});

export const silvaSchardong: CaseData = {
  meta: {
    segment: { pt: 'Construção / Engenharia', en: 'Construction / Engineering' },
    client: 'Silva Schardong',
    year: '2024',
    description: {
      pt: 'Identidade visual da Silva Schardong, construtora, com ícone inspirado no conceito de alicerce e na simbologia de apoio estrutural.',
      en: 'Visual identity for Silva Schardong, a construction company, with an icon built from the idea of a foundation and structural support.',
    },
    title: 'Silva Schardong',
  },

  blocks: [
    {
      type: 'image',
      image: {
        src: img1,
        alt: {
          pt: 'Marca da Silva Schardong, com ícone inspirado no conceito de alicerce.',
          en: 'Silva Schardong brand mark, with an icon based on the idea of a foundation.',
        },
      },
    },

    {
      type: 'text',
      heading: { pt: 'Conceito', en: 'Concept' },
      paragraphs: {
        pt: [
          'Os elementos gráficos criados para a marca da Silva Schardong refletem os valores de segurança, confiabilidade e estrutura sólida que a construtora busca transmitir em seus projetos. A proposta de ícone foi inspirada no conceito de alicerce, um elemento fundamental em qualquer construção, que garante a estabilidade e solidez de obra. Baseado em formas geométricas e na simbologia de apoio estrutural, o ícone comunica de forma clara a essência da marca: construir com base em fundamentos sólidos e duradouros.',
        ],
        en: [
          'The graphic elements built for Silva Schardong reflect the safety, reliability and structural soundness the construction company wants its projects to convey. The icon draws on the idea of a foundation, the element every building depends on for stability. Built from geometric shapes and the language of structural support, it states the brand position plainly: build on foundations that last.',
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
      ],
    },
  ],
};
