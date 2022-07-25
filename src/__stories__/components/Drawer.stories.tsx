import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import DrawerComponent from "../../react/components/Drawer";

export default {
  title: "Components/Drawer",
  component: DrawerComponent,
} as ComponentMeta<typeof DrawerComponent>;

const Template: ComponentStory<typeof DrawerComponent> = (args) => <DrawerComponent { ...args }/>;

export const Drawer = Template.bind({});
Drawer.args = {};
