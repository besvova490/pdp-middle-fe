import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import PostComponent from "../../react/containers/Post";


export default {
  title: "Containers/Post",
  component: PostComponent,
  decorators: [
    story => <div style={{ width: "400px" }} className="storybook-gray-background">{story()}</div>
  ]
} as ComponentMeta<typeof PostComponent>;

const Template: ComponentStory<typeof PostComponent> = (args) => <PostComponent { ...args }/>;

export const Post = Template.bind({});
Post.args = {
  createdAt: new Date(),
  author: { avatar: "https://picsum.photos/100", userName: "Christinegz" },
  thumbnail: "https://picsum.photos/500",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nobis doloribus numquam obcaecati, tenetur hic temporibus animi ex corrupti, distinctio, sit atque harum voluptatum dolorem est. Vel esse culpa iste?"
};
