import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import PostComponent from "../../react/containers/Post";


export default {
  title: "Containers/Post",
  component: PostComponent,
} as ComponentMeta<typeof PostComponent>;

const Template: ComponentStory<typeof PostComponent> = (args) => <div className="storybook-gray-background">
  <PostComponent { ...args }/>
</div>;

export const Post = Template.bind({});
Post.args = {
  author: { avatar: "https://picsum.photos/200/200", userName: "Christinegz" }
};
