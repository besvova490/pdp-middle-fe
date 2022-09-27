import { Link } from "react-router-dom";
import { HiArrowLeft, HiDotsVertical } from "react-icons/hi";

// components
import Dropdown from "../../components/Dropdown";
import Avatar from "../../components/Avatar";
import ChatCard from "./components/ChatCard";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";

// helpers
import { ChatDirectInterface } from "../../../__types__/containers/Chat.type";


const CHAT_CONTROLS_OPTIONS = [
  { value: "MuteNotifications", label: "Mute notifications" },
  { value: "RemoveChat", label: "Remove chat" },
  { value: "GoCall", label: "Go call" },
];


function ChatDirect({ onGoBack, messages, onMessage, receiver }: ChatDirectInterface) {

  return (
    <ChatCard>
      <ChatCard.ChatCardHeader>
        <Link className="pdp-chat__header-go-back" to="/chats">
          <HiArrowLeft className="pdp-chat__header-go-back-icon" onClick={onGoBack}/>
          <Avatar
            src={receiver?.avatar}
            label={receiver?.userName}
          />
        </Link>
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
          {
            messages.map((item, index) => (
              <ChatMessage
                key={index}
                { ...item }
              />
            ))
          }
        </div>
        <ChatInput
          fullWidth
          className="pdp-chat__messages-list-input"
          onSend={e => onMessage && onMessage(e)}
        />
      </div>
    </ChatCard>
  );
}

export default ChatDirect;
