import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import ElementsList from "../ElementsList";

// elements
import Checkbox from "../../react/elements/Checkbox";


export default {
  title: "Form Elements/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const TemplateList: ComponentStory<typeof ElementsList> = args => <ElementsList {...args} />;
const Template: ComponentStory<typeof Checkbox> = args => <Checkbox { ...args }/>;


export const AllCheckboxesStates = TemplateList.bind({});
AllCheckboxesStates.args = {
  children: [
    <div key="1" className="storybook-list">
      <Checkbox label="Checkbox"/>
      <Checkbox label="Default checked" defaultChecked/>
      <Checkbox label="Disabled" disabled/>
      <Checkbox label="Error" error="Field is required"/>
    </div>,
  ],
};

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox",
  disabled: false,
  defaultChecked: false,
  checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "With Error",
  error: "Field if required"
};
