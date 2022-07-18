import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import Dropdown from "../../react/components/Dropdown";


const OPTIONS = [
  { label: "Option 1", value: "Option 1" },
  { label: "Option 2", value: "Option 2" },
  { label: "Option 3", value: "Option 3" },
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
