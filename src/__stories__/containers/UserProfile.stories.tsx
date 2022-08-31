import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { action } from "@storybook/addon-actions";

// elements
import Button from "../../react/elements/Button";

// components
import UserProfileTopBannerComponent from "../../react/containers/UserProfile/UserProfileTopBanner";
import UserProfileDetailsComponent from "../../react/containers/UserProfile/components/UserProfileDetails";
import AddPostComponent from "../../react/containers/UserProfile/components/AddPost";


export default {
  title: "Containers/User Profile",
  component: UserProfileTopBannerComponent,
  decorators: [
    story => <div className="storybook-gray-background">{story()}</div>
  ]
} as ComponentMeta<typeof UserProfileTopBannerComponent>;

const Template: ComponentStory<typeof UserProfileTopBannerComponent> = args => (
  <UserProfileTopBannerComponent { ...args }/>
);

const UserProfileTopBannerWithControlsTemplate: ComponentStory<typeof UserProfileTopBannerComponent> = args => (
  <UserProfileTopBannerComponent { ...args }>
    <UserProfileTopBannerComponent.Controls>
      <Button size="small">
          Follow
      </Button>
      <Button isDefault size="small" className="pdp-chat-user-profile-banner__controls-btn">
        <IoChatbubblesOutline className="pdp-chat-user-profile-banner__controls-icon"/>
      </Button>
    </UserProfileTopBannerComponent.Controls>
  </UserProfileTopBannerComponent>
);

const UserProfileDetailsTemplate: ComponentStory<typeof UserProfileDetailsComponent> = args => (
  <UserProfileDetailsComponent { ...args }/>
);

const AddPostComponentTemplate: ComponentStory<typeof AddPostComponent> = args => (
  <AddPostComponent
    { ...args }
    onClick={action("onClick")}
  />
);

export const UserProfileTopBanner = Template.bind({});
UserProfileTopBanner.args = {
  thumbnail: "https://picsum.photos/500",
  avatar: "https://picsum.photos/100",
  username: "flat_six_aircooled",
  fullName: "Alberto Moreno G",
};

export const UserProfileTopBannerWithControls = UserProfileTopBannerWithControlsTemplate.bind({});
UserProfileTopBannerWithControls.args = {
  thumbnail: "https://picsum.photos/500",
  avatar: "https://picsum.photos/100",
  username: "flat_six_aircooled",
  fullName: "Alberto Moreno G",
};

export const UserProfileDetails = UserProfileDetailsTemplate.bind({});
UserProfileDetails.args = {
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptas consequuntur delectus ea aut! Quo molestias velit ut aliquid deserunt sapiente consequuntur accusantium, eos totam sint officia libero, numquam nam."
};

export const AddPost = AddPostComponentTemplate.bind({});
AddPost.args = {};

