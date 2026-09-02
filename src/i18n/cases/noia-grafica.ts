import type { CaseData } from './types';

import img1 from '@assets/branding/noia/01.gif';
import img2 from '@assets/branding/noia/02.webp';
import img3 from '@assets/branding/noia/03.webp';
import img4 from '@assets/branding/noia/04.webp';
import img5 from '@assets/branding/noia/05.webp';
import img6 from '@assets/branding/noia/06.webp';
import img7 from '@assets/branding/noia/07.webp';
import img8 from '@assets/branding/noia/08.webp';

const alt = (n: number) => ({
  pt: `Aplicação da identidade visual da Nóia Gráfica, imagem ${n}.`,
  en: `Nóia Gráfica visual identity applied, image ${n}.`,
});

export const noiaGrafica: CaseData = {
  meta: {
    segment: { pt: 'Cultura', en: 'Culture' },
    client: 'Nóia Gráfica',
    year: '2024',
    description: {
      pt: 'Identidade visual da feira Nóia Gráfica 2, inspirada na arte urbana dos anos 90 e na estética da serigrafia.',
      en: 'Visual identity for the Nóia Gráfica 2 fair, drawing on nineties street art and screen printing aesthetics.',
    },
    title: 'Nóia Gráfica',
  },

  blocks: [
    {
      type: 'image',
      image: {
        src: img1,
        alt: {
          pt: 'Animação da identidade visual da Nóia Gráfica, com formas simples em alto contraste.',
          en: 'Animated Nóia Gráfica identity, using simple high contrast shapes.',
        },
      },
    },

    {
      type: 'text',
      heading: { pt: 'Conceito', en: 'Concept' },
      paragraphs: {
        pt: [
          'A identidade visual da Nóia Gráfica 2 foi desenvolvida para o evento realizado nos dias 7 e 8 de setembro de 2024, na Casa das Artes, em Novo Hamburgo. Inspirada na estética da arte urbana dos anos 90, a linguagem gráfica foi construída com formas simples e uma paleta monocromática de alto contraste, utilizando cores frequentemente associadas à serigrafia. Esses elementos reforçam a conexão com o universo independente.',
          'O design foi aplicado em diversos materiais, como cartazes, sinalização e peças digitais, garantindo uma comunicação visual coesa e impactante. A identidade refletiu o espírito criativo da feira, que reuniu artistas independentes em exposições, bate-papos e oficinas.',
        ],
        en: [
          'The identity for Nóia Gráfica 2 was created for the event held on 7 and 8 September 2024 at Casa das Artes in Novo Hamburgo, Brazil. Drawing on nineties street art, the graphic language was built from simple shapes and a high contrast monochrome palette, using colours commonly associated with screen printing. Together these elements tie the identity to the independent art scene.',
          'The design ran across posters, signage and digital pieces, holding the visual communication together across formats. It carried the creative spirit of a fair that brought independent artists together for exhibitions, talks and workshops.',
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
      ],
    },
  ],
};
