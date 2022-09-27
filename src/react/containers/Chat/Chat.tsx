import { useState } from "react";

// components
import ChatItem from "./components/ChatItem";
import ChatCard from "./components/ChatCard";
import Drawer from "../../components/Drawer";
import StartNewChat from "./StartNewChat";

// elements
import Button from "../../elements/Button";

// components
import EmptyChatState from "./components/EmptyChatState";

// helpers
import { ChatContainerInterface } from "../../../__types__/containers/Chat.type";

// assets
import "../../../assets/styles/container/chat/chat.scss";


function Chat({ chats }: ChatContainerInterface) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  return (
    <ChatCard>
      <ChatCard.ChatCardHeader>
        <Button
          className="pdp-chat__add-chat-btn"
          shape="round"
          type="primary"
          size="small"
          onClick={() => setIsDrawerOpen(true)}
        >
          New chat
        </Button>
      </ChatCard.ChatCardHeader>
      <div className="pdp-chat__chats-list">
        {
          chats && chats.length
            ? chats.map((item, index) => (
              <ChatItem
                key={index}
                href={`/chats/${item.id}`}
                avatar={item.avatar}
                username={item.username}
                online={item.online}
                lastMessage={item.lastMessage}
                lastMessageDate={item.lastMessageDate}
              />
            ))
            : <EmptyChatState/>
        }
      </div>
      <Drawer
        closable={false}
        visible={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <StartNewChat onGoBack={() => setIsDrawerOpen(false)}/>
      </Drawer>
    </ChatCard>
  );
}

export default Chat;
