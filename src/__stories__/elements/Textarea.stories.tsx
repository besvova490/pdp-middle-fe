import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import ElementsList from "../ElementsList";

// elements
import { Textarea } from "../../react/elements/Input";


export default {
  title: "Form Elements/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const TemplateList: ComponentStory<typeof ElementsList> = args => <ElementsList {...args} />;
const Template: ComponentStory<typeof Textarea> = args => <Textarea { ...args }/>;


export const AllTextareaStates = TemplateList.bind({});
AllTextareaStates.args = {
  children: [
    <Textarea key="1" placeholder="Placeholder"/>,
    <Textarea key="2" placeholder="Placeholder" showCount maxLength={100}/>,
    <Textarea key="4" placeholder="Placeholder" label="Label"/>,
    <Textarea key="5" placeholder="Placeholder" error="Field is required"/>,
    <Textarea key="6" placeholder="Full Width" fullWidth/>,
  ],
};

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder"
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  disabled: true,
  placeholder: "Placeholder"
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Label",
  placeholder: "Placeholder",
  error: "Field if required"
};

export const WithCounter = Template.bind({});
WithCounter.args = {
  label: "Label",
  placeholder: "Placeholder",
  showCount: true,
  maxLength: 100,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "Label",
  placeholder: "Placeholder",
  fullWidth: true,
};

