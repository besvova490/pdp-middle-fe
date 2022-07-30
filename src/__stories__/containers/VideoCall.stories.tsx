import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import VideoCallComponent from "../../react/containers/VideoCall";


export default {
  title: "Containers/Video Call",
  component: VideoCallComponent,
} as ComponentMeta<typeof VideoCallComponent>;

const Template: ComponentStory<typeof VideoCallComponent> = () => <VideoCallComponent/>;

export const VideoCall = Template.bind({});
VideoCall.args = {};
