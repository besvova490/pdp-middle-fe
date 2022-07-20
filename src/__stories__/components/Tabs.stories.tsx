import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import TabsComponents from "../../react/components/Tabs";


export default {
  title: "Components/Tabs",
  component: TabsComponents,
} as ComponentMeta<typeof TabsComponents>;


const Template: ComponentStory<typeof TabsComponents> = (args) => <TabsComponents { ...args }/>;


export const Tabs = Template.bind({});
Tabs.args = {
  activeKey: "Following",
  tabs: [
    { key: "Following", label: "Following" },
    { key: "Discover", label: "Discover" },
    { key: "Events", label: "Events" },
  ],
};

export const TabsDisabled = Template.bind({});
TabsDisabled.args = {
  activeKey: "Following",
  tabs: [
    { key: "Following", label: "Following" },
    { key: "Discover", label: "Discover", disabled: true },
    { key: "Events", label: "Events" },
  ],
};

