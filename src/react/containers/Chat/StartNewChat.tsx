import { HiArrowLeft } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

// components
import ChatItem from "./components/ChatItem";
import ChatCard from "./components/ChatCard";

// elements
import Input from "../../elements/Input";


function StartNewChat({ onGoBack }: { onGoBack: () => void; }) {

  return (
    <ChatCard>
      <ChatCard.ChatCardHeader>
        <div className="pdp-chat__header-go-back">
          <HiArrowLeft className="pdp-chat__header-go-back-icon" onClick={onGoBack}/>
          <span>Chats</span>
        </div>
      </ChatCard.ChatCardHeader>
      <div>
        <div className="pdp-chat__body-search">
          <Input
            fullWidth
            icon={<RiSearchLine/>}
          />
        </div>
        <div className="pdp-chat__chats-list">
          <ChatItem
            avatar={"https://picsum.photos/seed/picsum/300/300"}
            username={"Pauline Lynch"}
            lastMessage={"Do you want to join our group?"}
            lastMessageDate={"1 hour ago"}
            isMuted
            online
          />
        </div>
      </div>
    </ChatCard>
  );
}

export default StartNewChat;
