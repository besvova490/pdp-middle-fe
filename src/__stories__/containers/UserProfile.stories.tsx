import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import UserProfileTopBannerComponent from "../../react/containers/UserProfile/UserProfileTopBanner";
import UserProfileDetailsComponent from "../../react/containers/UserProfile/UserProfileDetails";


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

const UserProfileDetailsTemplate: ComponentStory<typeof UserProfileDetailsComponent> = args => (
  <UserProfileDetailsComponent { ...args }/>
);

export const UserProfileTopBanner = Template.bind({});
UserProfileTopBanner.args = {
  thumbnail: "https://picsum.photos/500",
  avatar: "https://picsum.photos/100",
  username: "flat_six_aircooled",
  fullName: "Alberto Moreno G",
};

export const UserProfileDetails = UserProfileDetailsTemplate.bind({});
UserProfileDetails.args = {
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptas consequuntur delectus ea aut! Quo molestias velit ut aliquid deserunt sapiente consequuntur accusantium, eos totam sint officia libero, numquam nam."
}

