import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import ElementsList from "../ElementsList";
import Dropdown from "../../react/components/Dropdown";


const OPTIONS = [
  { label: "1st menu item", value: "1st menu item" },
  { label: "2nd menu item", value: "2nd menu item" },
  { label: "3rd menu item", value: "3rd menu item" },
];

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <div className="storybook-gray-background">
    <Dropdown { ...args }/>
  </div>
);

const TemplatePositions = () => (
  <div className="storybook-gray-background">
    <ElementsList isRow>
      <Dropdown options={OPTIONS} placement="bottom">bottom</Dropdown>
      <Dropdown options={OPTIONS} placement="bottomLeft">bottomLeft</Dropdown>
      <Dropdown options={OPTIONS} placement="bottomRight">bottomRight</Dropdown>
    </ElementsList>
    <ElementsList isRow>
      <Dropdown options={OPTIONS} placement="top">top</Dropdown>
      <Dropdown options={OPTIONS} placement="topLeft">topLeft</Dropdown>
      <Dropdown options={OPTIONS} placement="topRight">topRight</Dropdown>
    </ElementsList>
  </div>
);

export const AllMenuPositions = TemplatePositions.bind({});

export const Default = Template.bind({});
Default.args = {
  children: [
    <span key="1">Dropdown</span>,
  ],
  options: OPTIONS,
};


export const DefaultOpen = Template.bind({});
DefaultOpen.args = {
  children: [
    <span key="1">Dropdown</span>,
  ],
  defaultVisible: true,
  options: OPTIONS,
};
