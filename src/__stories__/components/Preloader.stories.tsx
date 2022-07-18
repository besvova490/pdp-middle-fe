import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import PreloaderComponent from "../../react/components/Preloader";

export default {
  title: "Components/Preloader",
  component: PreloaderComponent,
} as ComponentMeta<typeof PreloaderComponent>;

const Template: ComponentStory<typeof PreloaderComponent> = (args) => <PreloaderComponent { ...args }/>;

export const Preloader = Template.bind({});
Preloader.args = {
  primary: true,
  children: "Primary",
};
