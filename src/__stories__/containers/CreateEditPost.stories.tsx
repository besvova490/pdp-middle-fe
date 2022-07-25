import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// components
import CreateEditPostComponent from "../../react/containers/CreateEditPost";


export default {
  title: "Containers/Create Edit Post",
  component: CreateEditPostComponent,
} as ComponentMeta<typeof CreateEditPostComponent>;

const Template: ComponentStory<typeof CreateEditPostComponent> = () => (
  <div style={{ width: "400px" }} className="storybook-gray-background">
    <CreateEditPostComponent
      onSubmit={action("onSubmit")}
      onError={action("onError")}
      onGoBack={action("onGoBack")}
    />
  </div>
);

export const CreateEditPost = Template.bind({});
CreateEditPost.args = {};
