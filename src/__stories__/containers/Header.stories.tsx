import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import HeaderComponent from "../../react/containers/Header";


export default {
  title: "Containers/Header",
  component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = () => <HeaderComponent/>;

export const Header = Template.bind({});
Header.args = {};
