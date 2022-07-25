import { ComponentStory, ComponentMeta } from "@storybook/react";

// components
import ModalComponent from "../../react/components/Modal";

export default {
  title: "Components/Modal",
  component: ModalComponent,
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args) => <ModalComponent { ...args }/>;


export const Modal = Template.bind({});
Modal.args = {
  visible: true,
  title: "Basic Modal",
  children: <>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </>,
  footer: "Modal Footer"
};
