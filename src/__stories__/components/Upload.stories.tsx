import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import UploadComponents from "../../react/components/Upload";

export default {
  title: "Components/Upload",
  component: UploadComponents,
} as ComponentMeta<typeof UploadComponents>;

const Template: ComponentStory<typeof UploadComponents> = (args) => <UploadComponents { ...args }/>;

export const Upload = Template.bind({});
Upload.args = {
};
