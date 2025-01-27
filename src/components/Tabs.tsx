import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import pd1Apisul from '@assets/pd-1.png';
import pd2 from '@assets/pd-2.png';
import pd3 from '@assets/pd-3.png';
import pd4 from '@assets/pd-4.png';

import brandingTaller from '@assets/branding/taller/home.png';

import brandingTechsensSquare from '@assets/branding/techsens/home-square.png';
import brandingTechsensWide from '@assets/branding/techsens/home-wide.png';

import brandingNoiaSquare from '@assets/branding/noia/home-square.png';
import brandingNoiaWide from '@assets/branding/noia/home-wide.png';

import brandingPousadaSquare from '@assets/branding/pousada/home-square.png';
import brandingPousadaWide from '@assets/branding/pousada/home-wide.png';

import brandingRanchoSquare from '@assets/branding/rancho/home-square.png';
import brandingRanchoWide from '@assets/branding/rancho/home-wide.png';

import brandingSilvaSquare from '@assets/branding/silva/home-square.png';
import brandingSilvaWide from '@assets/branding/silva/home-wide.png';

import brandingAmaterasuSquare from '@assets/branding/amaterasu/home-square.png';
import brandingAmaterasuWide from '@assets/branding/amaterasu/home-wide.png';

export function Tabs() {
  return (
    <Root defaultValue="tab1">
      <List
        className="inline-flex h-9 items-center justify-center text-blue-gray gap-6"
        aria-label="Manage your account"
      >
        <Trigger
          className="px-2 pb-1 data-[state=inactive]:mb-[2px] data-[state=active]:border-b-2
          data-[state=active]:border-blue-black data-[state=active]:text-blue-black"
          value="tab1"
        >
          PRODUCT DESIGN
        </Trigger>
        <Trigger
          className=" px-2 pb-1 data-[state=inactive]:mb-[2px] data-[state=active]:border-b-2
          data-[state=active]:border-blue-black data-[state=active]:text-blue-black"
          value="tab2"
        >
          BRANDING
        </Trigger>
      </List>

      {/* animating the Content component doesnt work properly */}
      {/* try to wrap the content in a div, change opacity and then animate */}
      {/* https://www.restack.io/p/radix-ui-tabs-animation-answer-cat-ai */}

      {/* PRODUCT DESIGN */}
      <Content
        className="mt-10 space-y-20 data-[state=inactive]:animate-fadeOut data-[state=inactive]:hidden data-[state=active]:animate-fadeIn"
        value="tab1"
      >
        <a className="space-y-4 block mb-20" href="/gda-portfolio/product-design/apisul">
          <img src={pd1Apisul.src} alt="" className="w-full rounded-2xl" />
          <p className="text-blue-gray text-sm font-extralight">Estratégia | UX & UI | Plataforma | B2B</p>
          <p className="text-blue-gray font-light">Grupo Apisul</p>
          <p className="text-cold-gray text-xl font-light">
            Centralizando fluxos e dados em uma plataforma modular e intuitiva.
          </p>
        </a>

        <a className="space-y-4 block" href="/gda-portfolio/product-design/mais-nitido">
          <img src={pd2.src} alt="" className="w-full rounded-2xl" />
          <p className="text-blue-gray text-sm font-extralight">UX & UI | Plataforma | B2B</p>
          <p className="text-blue-gray font-light">Mais Nítido</p>
          <p className="text-cold-gray text-xl font-light">
            Possibilitando uma evolução profissional prática e fluída.
          </p>
        </a>

        <a className="space-y-4 block" href="/gda-portfolio/product-design/dbc">
          <img src={pd3.src} alt="" className="w-full rounded-2xl" />
          <p className="text-blue-gray text-sm font-extralight">UI | Website Desktop & Mobile</p>
          <p className="text-blue-gray font-light">DBC</p>
          <p className="text-cold-gray text-xl font-light">
            Site para apresentar o novo posicionamento e marca de uma empresa de TI.
          </p>
        </a>

        <a className="space-y-4 block" href="/gda-portfolio/product-design/apisul-web">
          <img src={pd4.src} alt="" className="w-full rounded-2xl" />
          <p className="text-blue-gray text-sm font-extralight">UI | Website Desktop & Mobile</p>
          <p className="text-blue-gray font-light">Grupo Apisul</p>
          <p className="text-cold-gray text-xl font-light">Transformando dados em decisões estratégicas.</p>
        </a>
      </Content>

      {/* BRANDING */}
      <Content
        className="mt-10 space-y-20 data-[state=inactive]:animate-fadeOut data-[state=inactive]:hidden data-[state=active]:animate-fadeIn"
        value="tab2"
      >
        <a className="block space-y-4" href="/gda-portfolio/branding/taller">
          <img src={brandingTaller.src} alt="" className="rounded-2xl" />
          <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
          <p className="text-blue-gray font-light">Taller Arquitetura</p>
          <p className="text-cold-gray text-xl font-light">
            Precisão e geometria no design de soluções arquitetônicas.
          </p>
        </a>

        <div className="flex flex-col gap-20 md:flex-row md:gap-6 md:justify-between">
          <a className="block space-y-4" href="/gda-portfolio/branding/techsens">
            <picture>
              <source srcSet={brandingTechsensSquare.src} media="(min-width: 768px)" />
              <source srcSet={brandingTechsensWide.src} media="(max-width: 767px)" />
              <img src={brandingTechsensWide.src} alt="" />
            </picture>

            <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
            <p className="text-blue-gray font-light">techsens</p>
            <p className="text-cold-gray text-xl font-light">Inovação e funcionalidade em automação.</p>
          </a>

          <a className="block space-y-4" href="/gda-portfolio/branding/noia-grafica">
            <picture>
              <source srcSet={brandingNoiaSquare.src} media="(min-width: 768px)" />
              <source srcSet={brandingNoiaWide.src} media="(max-width: 767px)" />
              <img src={brandingNoiaWide.src} alt="" />
            </picture>
            <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
            <p className="text-blue-gray font-light">Nóia Gráfica</p>
            <p className="text-cold-gray text-xl font-light">Conectando arte urbana e movimento independente.</p>
          </a>
        </div>

        <div className="flex flex-col gap-20 md:flex-row md:gap-6 md:justify-between">
          <a className="block space-y-4" href="/gda-portfolio/branding/rancho-raposo">
            <picture>
              <source srcSet={brandingRanchoSquare.src} media="(min-width: 768px)" />
              <source srcSet={brandingRanchoWide.src} media="(max-width: 767px)" />
              <img src={brandingRanchoWide.src} alt="" />
            </picture>

            <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
            <p className="text-blue-gray font-light">Rancho Raposo</p>
            <p className="text-cold-gray text-xl font-light">Conceito de aconchego e tradição dos ranchos.</p>
          </a>

          <a className="block space-y-4" href="/gda-portfolio/branding/pousada-rainha">
            <picture>
              <source srcSet={brandingPousadaSquare.src} media="(min-width: 768px)" />
              <source srcSet={brandingPousadaWide.src} media="(max-width: 767px)" />
              <img src={brandingPousadaWide.src} alt="" />
            </picture>
            <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
            <p className="text-blue-gray font-light">Pousada da Rainha</p>
            <p className="text-cold-gray text-xl font-light">Design inspirado no aconchego e símbolos marítimos.</p>
          </a>
        </div>
        <div className="flex flex-col gap-20 md:flex-row md:gap-6 md:justify-between">
          <a className="block space-y-4" href="/gda-portfolio/branding/silva-schardong">
            <picture>
              <source srcSet={brandingSilvaSquare.src} media="(min-width: 768px)" />
              <source srcSet={brandingSilvaWide.src} media="(max-width: 767px)" />
              <img src={brandingSilvaWide.src} alt="" />
            </picture>
            <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
            <p className="text-blue-gray font-light">Silva Schardong</p>
            <p className="text-cold-gray text-xl font-light">Segurança e estabilidade na construção.</p>
          </a>

          <a className="block space-y-4" href="/gda-portfolio/branding/amaterasu">
            <picture>
              <source srcSet={brandingAmaterasuSquare.src} media="(min-width: 768px)" />
              <source srcSet={brandingAmaterasuWide.src} media="(max-width: 767px)" />
              <img src={brandingAmaterasuWide.src} alt="" />
            </picture>

            <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
            <p className="text-blue-gray font-light">Amaterasu</p>
            <p className="text-cold-gray text-xl font-light">Reflexão da elegância e mitologia japonesa no design.</p>
          </a>
        </div>
      </Content>
    </Root>
  );
}
