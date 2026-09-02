import type { ImageMetadata } from 'astro';

import pd1Apisul from '@assets/pd-1.webp';
import pd2 from '@assets/pd-2.webp';
import pd3 from '@assets/pd-3.webp';
import pd4 from '@assets/pd-4.webp';

import brandingTaller from '@assets/branding/taller/home.webp';

import brandingTechsensSquare from '@assets/branding/techsens/home-square.webp';
import brandingTechsensWide from '@assets/branding/techsens/home-wide.webp';

import brandingNoiaSquare from '@assets/branding/noia/home-square.webp';
import brandingNoiaWide from '@assets/branding/noia/home-wide.webp';

import brandingPousadaSquare from '@assets/branding/pousada/home-square.webp';
import brandingPousadaWide from '@assets/branding/pousada/home-wide.webp';

import brandingRanchoSquare from '@assets/branding/rancho/home-square.webp';
import brandingRanchoWide from '@assets/branding/rancho/home-wide.webp';

import brandingSilvaSquare from '@assets/branding/silva/home-square.webp';
import brandingSilvaWide from '@assets/branding/silva/home-wide.webp';

import brandingAmaterasuSquare from '@assets/branding/amaterasu/home-square.webp';
import brandingAmaterasuWide from '@assets/branding/amaterasu/home-wide.webp';

export type Project = {
  id: string;
  /** Caminho interno sem idioma. Se ausente, o card não vira link. */
  path?: string;
  image: ImageMetadata;
  imageSquare?: ImageMetadata;
  client: string;
  tags: { pt: string; en: string };
  headline: { pt: string; en: string };
};

export const productDesign: Project[] = [
  {
    id: 'apisul',
    path: '/product-design/apisul',
    image: pd1Apisul,
    client: 'Grupo Apisul',
    tags: {
      pt: 'Estratégia | UX & UI | Plataforma | B2B',
      en: 'Strategy | UX & UI | Platform | B2B',
    },
    headline: {
      pt: 'Centralizando fluxos e dados em uma plataforma modular e intuitiva.',
      en: 'Bringing flows and data together into one modular, intuitive platform.',
    },
  },
  {
    id: 'mais-nitido',
    path: '/product-design/mais-nitido',
    image: pd2,
    client: 'Mais Nítido',
    tags: {
      pt: 'UX & UI | Plataforma | B2B',
      en: 'UX & UI | Platform | B2B',
    },
    headline: {
      pt: 'Uma plataforma de mentoria que conecta pessoas por compatibilidade.',
      en: 'A mentoring platform that pairs people by compatibility.',
    },
  },
  {
    id: 'apisul-portal',
    path: '/product-design/apisul-portal',
    image: pd4,
    client: 'Grupo Apisul',
    tags: {
      pt: 'Pesquisa | UX & UI | Plataforma | B2B',
      en: 'Research | UX & UI | Platform | B2B',
    },
    headline: {
      pt: 'Autonomia para o cliente acessar a própria operação através de um portal.',
      en: 'A portal giving customers direct access to their own operation.',
    },
  },
  {
    id: 'dbc',
    path: '/product-design/dbc',
    image: pd3,
    client: 'DBC',
    tags: {
      pt: 'UI | Website Desktop & Mobile',
      en: 'UI | Desktop & Mobile Website',
    },
    headline: {
      pt: 'Site para apresentar o novo posicionamento e marca de uma empresa de TI.',
      en: 'A website introducing the new positioning and brand of an IT company.',
    },
  },
];

export const branding: Project[] = [
  {
    id: 'taller',
    path: '/branding/taller',
    image: brandingTaller,
    client: 'Taller Arquitetura',
    tags: { pt: 'Identidade Visual', en: 'Visual Identity' },
    headline: {
      pt: 'Precisão e geometria no design de soluções arquitetônicas.',
      en: 'Precision and geometry in the design of architectural solutions.',
    },
  },
  {
    id: 'techsens',
    path: '/branding/techsens',
    image: brandingTechsensWide,
    imageSquare: brandingTechsensSquare,
    client: 'techsens',
    tags: { pt: 'Identidade Visual', en: 'Visual Identity' },
    headline: {
      pt: 'Inovação e funcionalidade em automação.',
      en: 'Innovation and functionality in automation.',
    },
  },
  {
    id: 'noia-grafica',
    path: '/branding/noia-grafica',
    image: brandingNoiaWide,
    imageSquare: brandingNoiaSquare,
    client: 'Nóia Gráfica',
    tags: { pt: 'Identidade Visual', en: 'Visual Identity' },
    headline: {
      pt: 'Conectando arte urbana e movimento independente.',
      en: 'Connecting urban art and the independent scene.',
    },
  },
  {
    id: 'rancho-raposo',
    path: '/branding/rancho-raposo',
    image: brandingRanchoWide,
    imageSquare: brandingRanchoSquare,
    client: 'Rancho Raposo',
    tags: { pt: 'Identidade Visual', en: 'Visual Identity' },
    headline: {
      pt: 'Conceito de aconchego e tradição dos ranchos.',
      en: 'A concept built on warmth and countryside tradition.',
    },
  },
  {
    id: 'pousada-rainha',
    path: '/branding/pousada-rainha',
    image: brandingPousadaWide,
    imageSquare: brandingPousadaSquare,
    client: 'Pousada da Rainha',
    tags: { pt: 'Identidade Visual', en: 'Visual Identity' },
    headline: {
      pt: 'Design inspirado no aconchego e símbolos marítimos.',
      en: 'Design inspired by warmth and maritime symbols.',
    },
  },
  {
    id: 'silva-schardong',
    path: '/branding/silva-schardong',
    image: brandingSilvaWide,
    imageSquare: brandingSilvaSquare,
    client: 'Silva Schardong',
    tags: { pt: 'Identidade Visual', en: 'Visual Identity' },
    headline: {
      pt: 'Segurança e estabilidade na construção.',
      en: 'Safety and stability in construction.',
    },
  },
  {
    id: 'amaterasu',
    path: '/branding/amaterasu',
    image: brandingAmaterasuWide,
    imageSquare: brandingAmaterasuSquare,
    client: 'Amaterasu',
    tags: { pt: 'Identidade Visual', en: 'Visual Identity' },
    headline: {
      pt: 'Reflexão da elegância e mitologia japonesa no design.',
      en: 'Japanese elegance and mythology reflected in design.',
    },
  },
];