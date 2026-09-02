import type { CaseData } from './types';

import img1 from '@assets/branding/pousada/01.gif';
import img2 from '@assets/branding/pousada/02.webp';
import img4 from '@assets/branding/pousada/04.webp';
import img5 from '@assets/branding/pousada/05.webp';
import img6 from '@assets/branding/pousada/06.webp';
import img7 from '@assets/branding/pousada/07.webp';
import img8 from '@assets/branding/pousada/08.webp';
import img9 from '@assets/branding/pousada/09.webp';
import img10 from '@assets/branding/pousada/10.webp';

const alt = (n: number) => ({
  pt: `Aplicação da identidade visual da Pousada da Rainha, imagem ${n}.`,
  en: `Pousada da Rainha visual identity applied, image ${n}.`,
});

export const pousadaRainha: CaseData = {
  meta: {
    segment: { pt: 'Turismo / Hospedagem', en: 'Travel / Hospitality' },
    client: 'Pousada da Rainha',
    year: '2022',
    description: {
      pt: 'Identidade visual da Pousada da Rainha, em Xangri-Lá, construída a partir da geometria da concha do Nautilus e de referências marítimas.',
      en: 'Visual identity for Pousada da Rainha in Xangri-Lá, built from the geometry of a nautilus shell and maritime references.',
    },
    title: 'Pousada da Rainha',
  },

  blocks: [
    {
      type: 'image',
      image: {
        src: img1,
        alt: {
          pt: 'Animação do ícone da Pousada da Rainha, baseado na espiral da concha do Nautilus.',
          en: 'Animated Pousada da Rainha icon, based on the spiral of a nautilus shell.',
        },
      },
    },

    {
      type: 'text',
      heading: { pt: 'Conceito', en: 'Concept' },
      paragraphs: {
        pt: [
          'A Pousada da Rainha é um estabelecimento de hospedagem situado na praia de Xangri-Lá no Brasil, a proposta é a criação de um espaço para as pessoas relaxarem e aproveitarem ao máximo as comodidades oferecidas em qualquer estação do ano e em qualquer clima.',
          'A identidade visual da Pousada da Rainha é inspirada em sua localização: a praia. A geometria, fluidez e as cores da natureza são o guia para a criação dos elementos visuais da marca. Olhando para o mar, vemos o lar do molusco Nautilus, e na concha dele, encontramos a sequência matemática de Fibonacci, uma sucessão de números que aparece codificada em muitos fenômenos da natureza. Com essa referência marítima e de padrão geométrico, foi criado o ícone da Rainha, que também teve inspiração em Yemanjá.',
        ],
        en: [
          'Pousada da Rainha is a guesthouse on Xangri-Lá beach in southern Brazil, built around the idea of a place to unwind and make the most of what it offers in any season and any weather.',
          'The identity takes its cue from the setting. Geometry, fluidity and natural colour guided every visual element. Looking out to sea, you find the home of the nautilus, and in its shell, the Fibonacci sequence, a pattern encoded across the natural world. That maritime reference and its underlying geometry shaped the Rainha icon, which also draws on Yemanjá.',
        ],
      },
    },

    {
      type: 'gallery',
      images: [
        { src: img2, alt: alt(1) },
        { src: img4, alt: alt(2) },
        { src: img5, alt: alt(3) },
        { src: img6, alt: alt(4) },
        { src: img7, alt: alt(5) },
        { src: img8, alt: alt(6) },
        { src: img9, alt: alt(7) },
        { src: img10, alt: alt(8) },
      ],
    },
  ],
};
