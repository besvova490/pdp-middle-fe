import { HiArrowLeft, HiDotsVertical } from "react-icons/hi";

// components
import Dropdown from "../../components/Dropdown";
import Avatar from "../../components/Avatar";
import ChatCard from "./components/ChatCard";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";


const CHAT_CONTROLS_OPTIONS = [
  { value: "MuteNotifications", label: "Mute notifications" },
  { value: "RemoveChat", label: "Remove chat" },
  { value: "GoCall", label: "Go call" },
];


function ChatDirect({ onGoBack }: { onGoBack: () => void; }) {

  return (
    <ChatCard>
      <ChatCard.ChatCardHeader>
        <div className="pdp-chat__header-go-back">
          <HiArrowLeft className="pdp-chat__header-go-back-icon" onClick={onGoBack}/>
          <Avatar
            src="https://picsum.photos/seed/picsum/200/200"
            label="pleazart"
          />
        </div>
        <Dropdown
          arrow={false}
          options={CHAT_CONTROLS_OPTIONS}
          className="pdp-chat-item__controls"
          placement="bottomRight"
        >
          <HiDotsVertical className="pdp-chat-item__controls-icon"/>
        </Dropdown>
      </ChatCard.ChatCardHeader>
      <div className="pdp-chat__direct">
        <div className="pdp-chat__messages-list">
          <ChatMessage
            author={{
              avatar: "https://picsum.photos/100",
              userName: "pleazart"
            }}
            createdAt={new Date()}
            text="I have a situation where a date value is being returned from a web"
          />
          <ChatMessage
            author={{
              avatar: "https://picsum.photos/100",
              userName: "pleazart"
            }}
            createdAt={new Date()}
            text="I have a situation where a date value is being returned from a web"
          />
          <ChatMessage
            isOvn
            createdAt={new Date()}
            text="I have a situation where a date value is being returned from a web"
          />
          <ChatMessage
            author={{
              avatar: "https://picsum.photos/100",
              userName: "pleazart"
            }}
            createdAt={new Date()}
            text="I have a situation where a date value is being returned from a web"
          />
          <ChatMessage
            author={{
              avatar: "https://picsum.photos/100",
              userName: "pleazart"
            }}
            createdAt={new Date()}
            text="I have a situation where a date value is being returned from a web"
          />
          <ChatMessage
            isOvn
            createdAt={new Date()}
            text="I have a situation where a date value is being returned from a web"
          />
          <ChatMessage
            author={{
              avatar: "https://picsum.photos/100",
              userName: "pleazart"
            }}
            createdAt={new Date()}
            text="I have a situation where a date value is being returned from a web"
          />
          <ChatMessage
            author={{
              avatar: "https://picsum.photos/100",
              userName: "pleazart"
            }}
            createdAt={new Date()}
            text="I have a situation where a date value is being returned from a web"
          />
          <ChatMessage
            isOvn
            createdAt={new Date()}
            text="I have a situation where a date value is being returned from a web"
          />
        </div>
        <ChatInput
          fullWidth
          className="pdp-chat__messages-list-input"
        />
      </div>
    </ChatCard>
  );
}

export default ChatDirect;
