import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import ElementsList from "../ElementsList";
import SwitchComponent from "../../react/components/Switch";

export default {
  title: "Components/Switch",
  component: SwitchComponent,
} as ComponentMeta<typeof SwitchComponent>;

const Template = () => (
  <ElementsList isRow>
    <SwitchComponent/>
    <SwitchComponent defaultChecked/>
    <SwitchComponent loading/>
    <SwitchComponent disabled/>
  </ElementsList>
);
const TemplateComponent: ComponentStory<typeof SwitchComponent> = (args) => <SwitchComponent { ...args }/>;

export const Switch = Template.bind({});

export const Default = TemplateComponent.bind({});
Default.args = {};
