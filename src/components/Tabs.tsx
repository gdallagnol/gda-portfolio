import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import { productDesign, branding, type Project } from '@i18n/projects';
import { ui, defaultLang } from '@i18n/ui';

type Lang = keyof typeof ui;

const triggerClass =
  'px-2 pb-1 data-[state=inactive]:mb-[2px] data-[state=active]:border-b-2 data-[state=active]:border-blue-black data-[state=active]:text-blue-black';

const contentClass =
  'mt-10 space-y-20 data-[state=inactive]:animate-fadeOut data-[state=inactive]:hidden data-[state=active]:animate-fadeIn';

function localize(path: string, lang: Lang) {
  return lang === defaultLang ? path : `/${lang}${path}`;
}

/**
 * Botão sobre a imagem do card. Sempre visível, para funcionar no toque.
 * Em telas com ponteiro, expande de pílula para círculo e inverte as cores.
 */
function OpenBadge({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-5 right-5 z-10 flex h-11 w-16 items-center justify-center rounded-full bg-white text-cold-gray shadow-sm transition-[width,background-color,color] duration-300 ease-out group-hover:w-11 group-hover:bg-cold-gray group-hover:text-white motion-reduce:transition-none"
      title={label}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Card({ project, lang }: { project: Project; lang: Lang }) {
  const openLabel = ui[lang]['card.open'] ?? ui[defaultLang]['card.open'];

  // Sem link, a imagem fica estática. Com link, ganha o zoom no hover.
  const imgClass = 'block w-full rounded-2xl';
  const zoomClass =
    'block w-full rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100';

  const media = (className: string) =>
    project.imageSquare ? (
      <picture>
        <source srcSet={project.imageSquare.src} media="(min-width: 768px)" />
        <source srcSet={project.image.src} media="(max-width: 767px)" />
        <img src={project.image.src} alt="" className={className} />
      </picture>
    ) : (
      <img src={project.image.src} alt="" className={className} />
    );

  const text = (
    <>
      <p className="text-blue-gray text-sm">{project.tags[lang]}</p>
      <p className="text-blue-gray text-lg font-light">{project.client}</p>
      <p className="text-cold-gray text-2xl font-light">{project.headline[lang]}</p>
    </>
  );

  if (!project.path) {
    return (
      <div className="block space-y-4">
        {media(imgClass)}
        {text}
      </div>
    );
  }

  return (
    <a className="group block space-y-4" href={localize(project.path, lang)}>
      <span className="relative block overflow-hidden rounded-2xl leading-none">
        {media(zoomClass)}
        <OpenBadge label={openLabel} />
      </span>
      {text}
    </a>
  );
}

export function Tabs({ lang = defaultLang }: { lang?: Lang }) {
  const t = (key: 'tabs.product' | 'tabs.branding') => ui[lang][key] ?? ui[defaultLang][key];

  const [first, ...rest] = branding;
  const pairs: Project[][] = [];
  for (let i = 0; i < rest.length; i += 2) {
    pairs.push(rest.slice(i, i + 2));
  }

  return (
    <Root defaultValue="tab1">
      <List className="inline-flex h-9 items-center justify-center text-blue-gray gap-6" aria-label="Projetos">
        <Trigger className={triggerClass} value="tab1">
          {t('tabs.product')}
        </Trigger>
        <Trigger className={triggerClass} value="tab2">
          {t('tabs.branding')}
        </Trigger>
      </List>

      <Content className={contentClass} value="tab1">
        {productDesign.map((project) => (
          <Card key={project.id} project={project} lang={lang} />
        ))}
      </Content>

      <Content className={contentClass} value="tab2">
        <Card project={first} lang={lang} />

        {pairs.map((pair) => (
          <div key={pair[0].id} className="flex flex-col gap-20 md:flex-row md:gap-6 md:justify-between">
            {pair.map((project) => (
              <Card key={project.id} project={project} lang={lang} />
            ))}
          </div>
        ))}
      </Content>
    </Root>
  );
}