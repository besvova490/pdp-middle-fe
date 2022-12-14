import React from "react";

// components
import ChatCardHeader from "./ChatCardHeader";

// helpers
import { ChatCardInterface } from "../../../../__types__/containers/Chat.type";

// assets
import "../../../../assets/styles/container/chat/chat.scss";


function ChatCard({ children, className = "" }: ChatCardInterface) {

  const headerToRender = React.Children.toArray(children)
    .find((child) => (child as React.ReactElement).type === ChatCardHeader);


  return (
    <div className={`pdp-chat ${className}`}>
      { headerToRender }
      <div className="pdp-chat__body">
        {
          React.Children.toArray(children).map((child) => {
            if ((child as React.ReactElement).type === ChatCardHeader) return null;

            return child
          })
        }
      </div>
    </div>
  );
}

ChatCard.ChatCardHeader = ChatCardHeader;

export default ChatCard;
