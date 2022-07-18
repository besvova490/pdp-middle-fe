import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FaUserCircle } from "react-icons/fa";

// components
import ElementsList from "../ElementsList";

// element
import Input from "../../react/elements/Input";
import PasswordInputComponent from "../../react/elements/Input/PasswordInput";


export default {
  title: "Form Elements/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const TemplateList: ComponentStory<typeof ElementsList> = args => <ElementsList {...args} />;
const Template: ComponentStory<typeof Input> = args => <Input { ...args }/>;
const TemplatePassword: ComponentStory<typeof PasswordInputComponent> = args => <PasswordInputComponent { ...args }/>;


export const AllInputStates = TemplateList.bind({});
AllInputStates.args = {
  children: [
    <Input key="1" placeholder="Placeholder"/>,
    <Input key="1" placeholder="Placeholder" showCount maxLength={100}/>,
    <Input key="1" placeholder="Placeholder" icon={<FaUserCircle/>}/>,
    <Input key="2" placeholder="Placeholder" label="Input label"/>,
    <Input key="3" placeholder="Placeholder" error="Field is required"/>,
    <Input key="4" placeholder="Full Width" fullWidth/>,
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

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Label",
  placeholder: "Placeholder",
  icon: <FaUserCircle/>,
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

export const PasswordInput = TemplatePassword.bind({});
PasswordInput.args = {
  label: "Password",
  placeholder: "Password",
};
