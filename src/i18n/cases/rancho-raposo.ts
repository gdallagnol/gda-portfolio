import type { CaseData } from './types';

import img1 from '@assets/branding/rancho/01.webp';
import img2 from '@assets/branding/rancho/02.webp';
import img3 from '@assets/branding/rancho/03.webp';
import img4 from '@assets/branding/rancho/04.webp';
import img5 from '@assets/branding/rancho/05.webp';
import img6 from '@assets/branding/rancho/06.webp';
import img7 from '@assets/branding/rancho/07.webp';
import img8 from '@assets/branding/rancho/08.webp';
import img9 from '@assets/branding/rancho/09.webp';
import img10 from '@assets/branding/rancho/10.webp';

const alt = (n: number) => ({
  pt: `Aplicação da identidade visual do Rancho Raposo, imagem ${n}.`,
  en: `Rancho Raposo visual identity applied, image ${n}.`,
});

export const ranchoRaposo: CaseData = {
  meta: {
    segment: { pt: 'Turismo / Hospedagem', en: 'Travel / Hospitality' },
    client: 'Rancho Raposo',
    year: '2023',
    title: 'Rancho Raposo',
  },

  blocks: [
    {
      type: 'image',
      image: {
        src: img1,
        alt: {
          pt: 'Marca do Rancho Raposo, com tipografia suave e elementos orgânicos.',
          en: 'Rancho Raposo brand mark, with soft typography and organic elements.',
        },
      },
    },

    {
      type: 'text',
      heading: { pt: 'Conceito', en: 'Concept' },
      paragraphs: {
        pt: [
          'O Rancho Raposo é uma proposta de pousada inspirada no estilo de vida dos ranchos norte-americanos. Pensada para ser um refúgio acolhedor, a marca busca transmitir a sensação de um ambiente familiar e aconchegante, onde as pessoas podem se conectar com a natureza e entre si.',
          'O design da marca Rancho Raposo reflete essa essência acolhedora, nostálgica e familiar, utilizando uma tipografia suave e elementos orgânicos. As cores evocam a nostalgia e tranquilidade com uma profunda conexão com a natureza.',
        ],
        en: [
          'Rancho Raposo is a guesthouse concept inspired by American ranch life. Designed as a place to retreat to, the brand aims to convey a warm, familiar setting where people can reconnect with nature and with each other.',
          'The design reflects that warmth through soft typography and organic elements. The palette leans on nostalgia and calm, keeping the connection to the natural surroundings at the centre.',
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
      ],
    },
  ],
};
