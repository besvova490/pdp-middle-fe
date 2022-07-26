import { FunctionComponent } from "react";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

// components
import Avatar from "../../../components/Avatar";

// helpers
import classNames from "../../../../helpers/classNames";
import { ChatMessageInterface } from "../../../../__types__/containers/Chat.type";

// assets
import "../../../../assets/styles/container/chat/chat-message.scss";

dayjs.extend(LocalizedFormat)


const ChatMessage: FunctionComponent<ChatMessageInterface> = ({ text = "", author, createdAt, isOvn }) => {

  const chatClassName = classNames(
    "pdp-chat-message",
    {
      "pdp-chat-message_ovn": !!isOvn,
    }
  );

  return (
    <div className={chatClassName}>
      {
        !isOvn && author
          ? (
            <Avatar
              src={author.avatar}
              alt={author.userName}
              className="pdp-chat-message__avatar"
            />
          )
          : null
      }
      <div className="pdp-chat-message__body">
        <div className="pdp-chat-message__body-main">
          { !isOvn && author?.userName ? <p className="pdp-chat-message__body-author">{ author.userName }</p> : null }
          <p className="pdp-chat-message__body-text">{text}</p>
        </div>
        {
          createdAt
            ? (
              <div className="pdp-chat-message__body-date">
                { dayjs(createdAt).format("hh:mm a") }
              </div>
            )
            : null
        }
      </div>
    </div>
  );
}

export default ChatMessage;
