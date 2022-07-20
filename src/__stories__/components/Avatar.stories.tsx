import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import AvatarComponent from "../../react/components/Avatar";

export default {
  title: "Components/Avatar",
  component: AvatarComponent,
} as ComponentMeta<typeof AvatarComponent>;

const Template: ComponentStory<typeof AvatarComponent> = (args) => <AvatarComponent { ...args }/>;

export const Avatar = Template.bind({});
Avatar.args = {
  label: "pleazart",
};
