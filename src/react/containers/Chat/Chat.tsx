import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

// components
import ChatItem from "./components/ChatItem";
import ChatCard from "./components/ChatCard";
import Drawer from "../../components/Drawer";
import StartNewChat from "./StartNewChat";

// elements
import Button from "../../elements/Button";

// assets
import "../../../assets/styles/container/chat/chat.scss";


function Chat() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  return (
    <ChatCard>
      <ChatCard.ChatCardHeader>
        <div className="pdp-chat__header-go-back">
          <RiCloseFill className="pdp-chat__header-go-back-icon"/>
          <span>Chats</span>
        </div>
        <Button
          shape="round"
          type="primary"
          size="small"
          onClick={() => setIsDrawerOpen(true)}
        >
          New chat
        </Button>
      </ChatCard.ChatCardHeader>
      <div className="pdp-chat__chats-list">
        <ChatItem
          avatar={"https://picsum.photos/seed/picsum/300/300"}
          username={"Pauline Lynch"}
          lastMessage={"Do you want to join our group?"}
          lastMessageDate={"1 hour ago"}
          isMuted
          online
        />
        <ChatItem
          avatar={"https://picsum.photos/seed/picsum/300/300"}
          username={"Pauline Lynch"}
          lastMessage={"Do you want to join our group?"}
          lastMessageDate={"1 hour ago"}
          isMuted
          online
        />
        <ChatItem
          avatar={"https://picsum.photos/seed/picsum/300/300"}
          username={"Pauline Lynch"}
          lastMessage={"Do you want to join our group?"}
          lastMessageDate={"1 hour ago"}
          isMuted
          online
        />
        <ChatItem
          avatar={"https://picsum.photos/seed/picsum/300/300"}
          username={"Pauline Lynch"}
          lastMessage={"Do you want to join our group?"}
          lastMessageDate={"1 hour ago"}
          isMuted
          online
        />
      </div>
      <Drawer
        visible={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <StartNewChat onGoBack={() => setIsDrawerOpen(false)}/>
      </Drawer>
    </ChatCard>
  );
}

export default Chat;
