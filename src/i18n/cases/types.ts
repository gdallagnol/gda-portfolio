import type { ImageMetadata } from 'astro';

export type T = { pt: string; en: string };
export type TList = { pt: string[]; en: string[] };

/** Imagem com texto alternativo obrigatorio, para leitores de tela. */
export type CaseImage = {
  src: ImageMetadata;
  alt: T;
  /** Legenda visivel abaixo da imagem. Opcional. */
  caption?: T;
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
  /** Ferramentas usadas, exibidas na ficha do topo. */
  tools?: string[];
};

/** Tela de uma grade de telas, com titulo e legenda opcionais. */
export type CaseScreen = {
  image: CaseImage;
  title?: T;
  caption?: T;
  /** Em grupo de duas colunas, ocupa a largura toda. */
  wide?: boolean;
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
  /** link: caminho interno sem o prefixo de idioma (ex.: /product-design/apisul). */
  | { type: 'text'; heading: T; paragraphs: TList; link?: { href: string; label: T } }
  | {
      type: 'list';
      heading: T;
      intro?: T;
      groups: { subhead?: T; items: TList }[];
    }
  | {
      type: 'objectives';
      heading: T;
      /** Sem icone, o item mostra um numero (01, 02, 03). */
      items: { icon?: string; title: T; text: T }[];
    }
  | { type: 'simple'; heading: T; items: T[] }
  /** Resumo do projeto: contexto, atuacao e resultado, com fatos opcionais. */
  | {
      type: 'summary';
      heading: T;
      items: { label: T; text: T }[];
      /** Fatos e numeros reais em destaque. Use apenas o que esta documentado. */
      facts?: { value: string | T; label: T }[];
    }
  /** Frase em destaque, como uma pergunta orientadora ou um achado central. */
  | { type: 'highlight'; label?: T; text: T }
  /** Itens numerados em colunas: descobertas, objetivos, etapas. */
  | {
      type: 'steps';
      heading: T;
      intro?: T;
      /** 2 coloca os itens lado a lado na coluna de conteudo. Sem valor, ficam empilhados. */
      columns?: 2;
      /** false remove a numeracao, para itens sem ordem. */
      numbered?: boolean;
      /** 'grid': blocos em largura total, 3 colunas no desktop, 2 no tablet, 1 no celular. */
      layout?: 'grid';
      /** icon: nome de um icone Feather disponivel no componente (layers, layout, user-check, target, trending-up, users). */
      items: { title: T; text: T; tag?: T; emphasis?: boolean; icon?: string }[];
    }
  /** Abertura de capitulo. Os capitulos geram o indice no resumo. */
  | { type: 'chapter'; id: string; heading: T; text?: T }
  /** Achados principais em frases grandes, com explicacao abaixo. */
  | { type: 'insights'; heading: T; intro?: T; items: { title: T; text: T }[] }
  /** Blocos curtos lado a lado, como retornos de uma validacao. */
  | { type: 'cards'; heading: T; intro?: T; items: { label: T; text: T }[] }
  /** Resultado em fluxo: etapas em linha e desdobramentos em cards. */
  | {
      type: 'outcome';
      heading: T;
      intro?: T;
      flow: T[];
      items: { tag?: T; title: T; text: T }[];
    }
  /** Dados de mercado em destaque: valor grande, texto e fonte. */
  | {
      type: 'stats';
      heading: T;
      intro?: T;
      items: { value: string | T; text: T; source?: string | T }[];
    }
  /** Decisoes de projeto numeradas, com tabela opcional. */
  | {
      type: 'decisions';
      heading: T;
      intro?: T;
      items: {
        title: T;
        paragraphs: TList;
        table?: { columns: T[]; rows: T[][] };
      }[];
    }
  /** Telas agrupadas por fluxo, com numero, titulo e legenda. */
  | {
      type: 'screens';
      heading: T;
      intro?: T;
      groups: { label: T; text?: T; layout?: 'full' | 'two'; screens: CaseScreen[] }[];
    };

export type CaseData = {
  meta: CaseMeta;
  blocks: CaseBlock[];
};