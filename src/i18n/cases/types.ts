import type { ImageMetadata } from 'astro';

export type T = { pt: string; en: string };
export type TList = { pt: string[]; en: string[] };

/** Imagem com texto alternativo obrigatorio, para leitores de tela. */
export type CaseImage = {
  src: ImageMetadata;
  alt: T;
  /** Renderiza com <img> simples em vez do componente Image (util para GIF animado). */
  raw?: boolean;
};

/** Ficha do topo do case. */
export type CaseMeta = {
  segment: T;
  client: string | T;
  year: string;
  /** Opcional: nem todo case declara o papel. */
  role?: T;
  title: string;
  /** Descricao para buscadores e compartilhamento. Entre 120 e 160 caracteres. */
  description?: T;
  /** Primeira parte do subtitulo. Opcional: alguns cases so tem titulo. */
  subtitle?: T;
  /** Link opcional no meio do subtitulo. */
  subtitleLink?: { href: string; label: T };
  /** Texto que vem depois do link. */
  subtitleAfter?: T;
  /** Parte final que nao deve quebrar linha. */
  subtitleNoWrap?: T;
};

/** Blocos que compoem o corpo do case, na ordem em que aparecem. */
export type CaseBlock =
  | { type: 'image'; image: CaseImage }
  | { type: 'captioned'; heading: T; image: CaseImage }
  | { type: 'gallery'; images: CaseImage[] }
  | { type: 'carousel'; images: CaseImage[] }
  /** Video curto em laco, no lugar de GIF. O caminho e relativo a pasta public. */
  | { type: 'video'; src: string; alt: T }
  | { type: 'pair'; images: [CaseImage, CaseImage] }
  | { type: 'text'; heading: T; paragraphs: TList }
  | {
      type: 'list';
      heading: T;
      intro?: T;
      groups: { subhead?: T; items: TList }[];
    }
  | {
      type: 'objectives';
      heading: T;
      items: { icon: string; title: T; text: T }[];
    }
  | { type: 'simple'; heading: T; items: T[] };

export type CaseData = {
  meta: CaseMeta;
  blocks: CaseBlock[];
};