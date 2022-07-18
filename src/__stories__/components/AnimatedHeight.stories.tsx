import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import AnimatedHeightComponent from "../../react/components/AnimatedHeight";


export default {
  title: "Components/Animated Height",
  component: AnimatedHeightComponent,
} as ComponentMeta<typeof AnimatedHeightComponent>;


const Template: ComponentStory<typeof AnimatedHeightComponent> = (args) => (
  <AnimatedHeightComponent { ...args } >
    <img src={"https://picsum.photos/200/300"}/>
    <span>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      <br/>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.
      <br/>
      <br/>
      It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged.
      <br/>
      <br/>
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
      <br/>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      <br/>
      <br/>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book.
      <br/>
      <br/>
      It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged.
      <br/>
      <br/>
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
    </span>
  </AnimatedHeightComponent>
);

export const AnimatedHeight = Template.bind({});
AnimatedHeight.args = {
  initialHeight: "50px"
};

