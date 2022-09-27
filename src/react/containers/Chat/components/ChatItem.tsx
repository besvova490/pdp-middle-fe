/* eslint-disable @typescript-eslint/no-var-requires */
import { Link } from "react-router-dom";
import { IoIosNotificationsOff } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";

// components
import Dropdown from "../../../components/Dropdown";

// helpers
import { ChatItemComponentInterface } from "../../../../__types__/containers/Chat.type";

// assets
const defaultUserAvatar = require("../../../../assets/images/default-user-avatar.png");
import "../../../../assets/styles/container/chat/chat-item.scss";


function ChatItem(props: ChatItemComponentInterface) {
  const {
    username = "",
    avatar,
    lastMessage,
    lastMessageDate,
    online,
    isMuted,
    options,
    href = "#",
  } = props;


  return (
    <Link to={href} className="pdp-chat-item">
      <div className="pdp-chat-item__avatar">
        <img className="pdp-chat-item__avatar-image" alt={`avatar for ${username}`} src={avatar || defaultUserAvatar}/>
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
      {
        options && options.length
          ? (
            <Dropdown
              arrow={false}
              options={options}
              className="pdp-chat-item__controls"
              placement="bottomRight"
            >
              <HiDotsVertical className="pdp-chat-item__controls-icon"/>
            </Dropdown>
          )
          : null
      }
    </Link>
  );
}

export default ChatItem;

