import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CgCloseO } from "react-icons/cg";

// components
import ElementsList from "../ElementsList";
import TagComponent from "../../react/components/Tag";


export default {
  title: "Components/Tag",
  component: TagComponent,
} as ComponentMeta<typeof TagComponent>;

const Template: ComponentStory<typeof TagComponent> = (args) => <TagComponent { ...args }/>;
const ListTemplate = () => (<>
  <ElementsList isRow>
    <TagComponent label="Label" closable/>
    <TagComponent label="Label" closable primary/>
    <TagComponent label="Label" closable success/>
    <TagComponent label="Label" closable danger/>
    <TagComponent label="Label" closable secondary/>
    <TagComponent label="Label" closable disabled/>
  </ElementsList>
  <ElementsList isRow>
    <TagComponent label="Label"/>
    <TagComponent label="Label" closable closeIcon={<CgCloseO/>}/>
  </ElementsList>
</>);

export const AllTagStates = ListTemplate.bind({});

export const Default = Template.bind({});
Default.args = {
  label: "Tag",
};

export const DefaultClosable = Template.bind({});
DefaultClosable.args = {
  label: "Tag",
  closable: true,
};

export const DefaultClosableWithCustomIcon = Template.bind({});
DefaultClosableWithCustomIcon.args = {
  label: "Tag",
  closable: true,
  closeIcon: <CgCloseO/>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
  closable: true,
};

export const TagPrimary = Template.bind({});
TagPrimary.args = {
  label: "Tag Primary",
  primary: true,
  closable: true,
};

export const TagSecondary = Template.bind({});
TagSecondary.args = {
  label: "Tag Secondary",
  secondary: true,
  closable: true,
};

export const TagSuccess = Template.bind({});
TagSuccess.args = {
  label: "Tag Success",
  success: true,
  closable: true,
};

export const TagDanger = Template.bind({});
TagDanger.args = {
  label: "Tag Danger",
  danger: true,
  closable: true,
};

