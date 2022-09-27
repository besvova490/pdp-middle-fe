import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// components
import ChatItemComponent from "../../react/containers/Chat/components/ChatItem";
import ChatComponent from "../../react/containers/Chat";
import StartNewChatComponent from "../../react/containers/Chat/StartNewChat";
import ChatDirectComponent from "../../react/containers/Chat/ChatDirect";
import ChatMessageComponent from "../../react/containers/Chat/components/ChatMessage";
import ChatInputComponent from "../../react/containers/Chat/components/ChatInput";


export default {
  title: "Containers/Chat",
  component: ChatComponent,
  decorators: [
    story => <div style={{ width: "400px" }} className="storybook-gray-background">{story()}</div>
  ]
} as ComponentMeta<typeof ChatComponent>;

const Template: ComponentStory<typeof ChatComponent> = () => <ChatComponent/>;
const ChatItemTemplate: ComponentStory<typeof ChatItemComponent> = args => <ChatItemComponent { ...args }/>;
const StartNewChatTemplate: ComponentStory<typeof StartNewChatComponent> = () => <StartNewChatComponent onGoBack={action("onGoBack")}/>;
const ChatDirectTemplate: ComponentStory<typeof ChatDirectComponent> = args => <ChatDirectComponent {...args} onGoBack={action("onGoBack")}/>;
const ChatMessageTemplate: ComponentStory<typeof ChatMessageComponent> = args => <ChatMessageComponent { ...args }/>;
const ChatInputTemplate: ComponentStory<typeof ChatInputComponent> = args => <ChatInputComponent { ...args } onSend={action("onSend")}/>;

export const Chat = Template.bind({});
Chat.args = {};

export const StartNewChat = StartNewChatTemplate.bind({});
StartNewChat.args = {};

export const ChatDirect = ChatDirectTemplate.bind({});
ChatDirect.args = {};

export const ChatInput = ChatInputTemplate.bind({});
ChatInput.args = {
  fullWidth: true,
}

export const ChatMessage = ChatMessageTemplate.bind({});
ChatMessage.args = {
  author: {
    avatar: "https://picsum.photos/100",
    userName: "pleazart"
  },
  createdAt: new Date(),
  text: "I have a situation where a date value is being returned from a web",
  isOwn: false,
}

export const ChatItem = ChatItemTemplate.bind({});
ChatItem.args = {
  avatar: "https://picsum.photos/seed/picsum/300/300",
  username: "Pauline Lynch",
  lastMessage: "Do you want to join our group?",
  lastMessageDate: "1 hour ago",
  isMuted: true,
  online: true,
};
