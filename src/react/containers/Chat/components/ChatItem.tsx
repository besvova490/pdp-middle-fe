import { IoIosNotificationsOff } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";

// components
import Dropdown from "../../../components/Dropdown";

// helpers
import { ChatItemInterface } from "../../../../__types__/containers/Chat.type";

// assets
import "../../../../assets/styles/container/chat/chat-item.scss";


function ChatItem(props: ChatItemInterface) {
  const {
    username = "",
    avatar,
    lastMessage,
    lastMessageDate,
    online,
    isMuted,
    onMute,
    onRemoveChat,
  } = props;

  const CHAT_CONTROLS_OPTIONS = [
    { value: "MuteNotifications", label: "Mute notifications", onClick: () => onMute && onMute() },
    { value: "RemoveChat", label: "Remove chat", onClick: () => onRemoveChat && onRemoveChat() },
  ];


  return (
    <div className="pdp-chat-item">
      <div className="pdp-chat-item__avatar">
        <img className="pdp-chat-item__avatar-image" alt={`avatar for ${username}`} src={avatar}/>
      </div>
      <div className="pdp-chat-item__info">
        <span className="pdp-chat-item__info-username">
          { username }
          { online ? <span className="pdp-chat-item__info-username-online"/> : null }
        </span>
        <span className="pdp-chat-item__info-latest-message">{ lastMessage }</span>
        <span className="pdp-chat-item__info-date">
          {lastMessageDate}
          {
            isMuted
              ? <> &#8729; <IoIosNotificationsOff/></>
              : null
          }
        </span>
      </div>
      <Dropdown
        arrow={false}
        options={CHAT_CONTROLS_OPTIONS}
        className="pdp-chat-item__controls"
        placement="bottomRight"
      >
        <HiDotsVertical className="pdp-chat-item__controls-icon"/>
      </Dropdown>
    </div>
  );
}

export default ChatItem;

