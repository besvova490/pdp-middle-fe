import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// components
import EditUserProfileComponent from "../../react/containers/EditUserProfile";


export default {
  title: "Containers/Edit User Profile",
  component: EditUserProfileComponent,
} as ComponentMeta<typeof EditUserProfileComponent>;

const Template: ComponentStory<typeof EditUserProfileComponent> = () => (
  <div style={{ width: "400px" }} className="storybook-gray-background">
    <EditUserProfileComponent
      onSubmit={action("onSubmit")}
      onError={action("onError")}
      onGoBack={action("onGoBack")}
    />
  </div>
);

export const EditUserProfile = Template.bind({});
EditUserProfile.args = {};
