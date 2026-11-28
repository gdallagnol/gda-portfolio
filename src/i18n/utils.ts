import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

/**
 * Descobre o idioma a partir da URL.
 * /en/product-design/apisul  -> 'en'
 * /product-design/apisul     -> 'pt'
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in ui) return segment as Lang;
  return defaultLang;
}

/**
 * Devolve a função de tradução para o idioma informado.
 * Se a chave não existir no idioma, cai no padrão.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Monta um caminho interno respeitando o idioma.
 * localizePath('/product-design/apisul', 'en') -> '/en/product-design/apisul'
 * localizePath('/product-design/apisul', 'pt') -> '/product-design/apisul'
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean}`;
}

/**
 * Devolve o caminho equivalente no outro idioma, para o seletor.
 */
export function getAlternatePath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  let path = url.pathname;

  if (current !== defaultLang) {
    path = path.replace(`/${current}`, '') || '/';
  }

  return localizePath(path, target);
}