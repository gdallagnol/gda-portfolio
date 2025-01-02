import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import pd1Apisul from '@assets/pd-1.png';
import pd2 from '@assets/pd-2.png';
import pd3 from '@assets/pd-3.png';
import pd4 from '@assets/pd-4.png';
import brandingTaller from '@assets/branding/01-branding-taller.png';
import brandingTechsens from '@assets/branding/02-branding-techsens.png';
import brandingNoia from '@assets/branding/03-branding-noia.png';
import brandingRancho from '@assets/branding/04-branding-rancho.png';
import brandingPousada from '@assets/branding/05-branding-pousada.png';
import brandingSilva from '@assets/branding/06-branding-silva.png';
import brandingAmaterasu from '@assets/branding/07-branding-amaterasu.png';

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

      <Content
        className="mt-10 space-y-16 data-[state=inactive]:animate-fadeOut data-[state=inactive]:hidden data-[state=active]:animate-fadeIn"
        value="tab1"
      >
        <div className="space-y-4">
          <img src={pd1Apisul.src} alt="" className="w-full" />
          <p className="text-blue-gray text-sm font-extralight">Estratégia | UX & UI | Plataforma | B2B</p>
          <p className="text-blue-gray font-light">Grupo Apisul</p>
          <p className="text-cold-gray text-xl font-light">
            Centralizando fluxos e dados em uma plataforma modular e intuitiva.
          </p>
        </div>

        <div className="space-y-4">
          <img src={pd2.src} alt="" className="w-full" />
          <p className="text-blue-gray text-sm font-extralight">UX & UI | Plataforma | B2B</p>
          <p className="text-blue-gray font-light">Mais Nítido</p>
          <p className="text-cold-gray text-xl font-light">
            Possibilitando uma evolução profissional prática e fluída.
          </p>
        </div>

        <div className="space-y-4">
          <img src={pd3.src} alt="" className="w-full" />
          <p className="text-blue-gray text-sm font-extralight">UI | Website Desktop & Mobile</p>
          <p className="text-blue-gray font-light">DBC</p>
          <p className="text-cold-gray text-xl font-light">
            Site para apresentar o novo posicionamento e marca de uma empresa de TI.
          </p>
        </div>

        <div className="space-y-4">
          <img src={pd4.src} alt="" className="w-full" />
          <p className="text-blue-gray text-sm font-extralight">UI | Website Desktop & Mobile</p>
          <p className="text-blue-gray font-light">Grupo Apisul</p>
          <p className="text-cold-gray text-xl font-light">Transformando dados em decisões estratégicas.</p>
        </div>
      </Content>
      <Content
        className="mt-10 space-y-10 data-[state=inactive]:animate-fadeOut data-[state=inactive]:hidden data-[state=active]:animate-fadeIn"
        value="tab2"
      >
        <div className="space-y-4">
          <img src={brandingTaller.src} alt="" className="" />
          <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
          <p className="text-blue-gray font-light">Taller Arquitetura</p>
          <p className="text-cold-gray text-xl font-light">
            Precisão e geometria no design de soluções arquitetônicas.
          </p>
        </div>
        <div className="space-y-4">
          <img src={brandingTechsens.src} alt="" className="" />
          <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
          <p className="text-blue-gray font-light">techsens</p>
          <p className="text-cold-gray text-xl font-light">Inovação e funcionalidade em automação.</p>
        </div>
        <div className="space-y-4">
          <img src={brandingNoia.src} alt="" className="" />
          <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
          <p className="text-blue-gray font-light">Nóia Gráfica</p>
          <p className="text-cold-gray text-xl font-light">Conectando arte urbana e movimento independente.</p>
        </div>
        <div className="space-y-4">
          <img src={brandingRancho.src} alt="" className="" />
          <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
          <p className="text-blue-gray font-light">Rancho Raposo</p>
          <p className="text-cold-gray text-xl font-light">Conceito de aconchego e tradição dos ranchos.</p>
        </div>
        <div className="space-y-4">
          <img src={brandingPousada.src} alt="" className="" />
          <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
          <p className="text-blue-gray font-light">Pousada da Rainha</p>
          <p className="text-cold-gray text-xl font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="space-y-4">
          <img src={brandingSilva.src} alt="" className="" />
          <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
          <p className="text-blue-gray font-light">Silva Schardong</p>
          <p className="text-cold-gray text-xl font-light">Segurança e estabilidade na construção.</p>
        </div>
        <div className="space-y-4">
          <img src={brandingAmaterasu.src} alt="" className="" />
          <p className="text-blue-gray text-sm font-extralight">Identidade Visual</p>
          <p className="text-blue-gray font-light">Amaterasu</p>
          <p className="text-cold-gray text-xl font-light">Reflexão da elegância e mitologia japonesa no design.</p>
        </div>
      </Content>
    </Root>
  );
}
