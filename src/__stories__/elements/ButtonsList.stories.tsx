import React from "react";
import { BiJoystickButton } from "react-icons/bi";
import { ComponentStory } from "@storybook/react";

// components
import ElementsList from "../ElementsList";

// elements
import Button from "../../react/elements/Button";


export default {
  component: ElementsList,
  title: "Form Elements/All Buttons",
  decorators: [(story: () => React.ReactNode) => <div className="storybook-list">{story()}</div>],
};

const Template: ComponentStory<typeof ElementsList> = args => <ElementsList {...args} />;

export const Default = Template.bind({});


Default.args = {
  children: [
    <div key="1" className="storybook-list">
      <Button>Button</Button>
      <Button secondary>Button</Button>
      <Button danger>Button</Button>
      <Button success>Button</Button>
      <Button disabled>Button</Button>
    </div>,
    <div key="2" className="storybook-list">
      <Button type="primary">Button</Button>
      <Button secondary type="primary">Button</Button>
      <Button danger type="primary">Button</Button>
      <Button success type="primary">Button</Button>
      <Button disabled type="primary">Button</Button>
    </div>,
    <div key="5" className="storybook-list">
      <Button loading>Button</Button>
      <Button type="primary" loading>Button</Button>
    </div>,
    <div key="5" className="storybook-list">
      <Button icon={<BiJoystickButton/>}/>
      <Button type="primary" icon={<BiJoystickButton/>}/>
    </div>,
    <div key="3" className="storybook-list">
      <Button type="primary" fullWidth>Button</Button>
    </div>,
    <div key="4" className="storybook-list">
      <Button type="primary">Button</Button>
      <Button secondary type="primary" shape="round">Button</Button>
      <Button danger type="primary" shape="circle">B</Button>
    </div>,
    <div key="6" className="storybook-list">
      <Button type="primary" size="small">Button</Button>
      <Button secondary type="primary" size="middle">Button</Button>
      <Button danger type="primary" size="large">Button</Button>
    </div>,
  ]
}
