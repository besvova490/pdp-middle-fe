import { BiJoystickButton } from "react-icons/bi";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// elements
import Button from "../../react/elements/Button";

export default {
  title: "Form Elements/Button",
  component: Button,
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  secondary: true,
  icon: <BiJoystickButton/>
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  size: "middle",
  children: "Full Width",
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  size: "middle",
  loading: true,
  children: "Loading",
};
