import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import { Image } from 'astro:assets';
// import pd1Apisul from '../assets/pd-1.png';

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
      <Content className="mt-10" value="tab1">
        {/* <p className="Text">Make changes to your account here. Click save when you're done.</p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
          <button className="Button green">Save changes</button>
        </div> */}

        {/* <Image src={pd1Apisul} alt="" class="my-class" /> */}
      </Content>
      <Content className="mt-10" value="tab2">
        <p className="Text">Change your password here. After saving, you'll be logged out.</p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="currentPassword">
            Current password
          </label>
          <input className="Input" id="currentPassword" type="password" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="newPassword">
            New password
          </label>
          <input className="Input" id="newPassword" type="password" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input className="Input" id="confirmPassword" type="password" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
          <button className="Button green">Change password</button>
        </div>
      </Content>
    </Root>
  );
}
