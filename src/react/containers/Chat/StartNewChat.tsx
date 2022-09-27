import { useState, useCallback } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { useLazyQuery, useMutation } from "@apollo/client";
import debounce from "lodash/debounce";
import { toast } from "react-toastify";

// components
import ChatItem from "./components/ChatItem";
import ChatCard from "./components/ChatCard";
import EmptyChatState from "./components/EmptyChatState";

// elements
import Input from "../../elements/Input";

// helpers
import { EditUserProfileInterface } from "../../../__types__/containers/EditUserProfile.types";
import auth from "../../../gql/auth";
import chat from "../../../gql/chat";


function StartNewChat({ onGoBack }: { onGoBack: () => void; }) {
  const [users, setUsers] = useState<Array<EditUserProfileInterface> | null>(null);

  const [fetchUsers] = useLazyQuery<{ search: Array<EditUserProfileInterface> }>(auth.SEARCH_USER);
  const [createChat] = useMutation(chat.CHAT_CREATE_MUTATE);

  const onSearch = useCallback(debounce((e: string) => {
    fetchUsers({ variables: { query: e } }).
      then(({ data }) => setUsers(data?.search || null))
      .catch(() => null);
  }, 500), []);


  const onStartChat = (receiver: number) => {
    createChat({
      variables: { receiver },
      refetchQueries: [{ query: chat.CHATS_QUERY }]
    })
      .then(() => toast.success("New chat was created"))
      .catch(() => toast.error("Something went wrong"));
  }


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
            onChange={e => onSearch(e.target.value)}
          />
        </div>
        <div className="pdp-chat__chats-list">
          {
            users && users.length
              ? users.map((item, index) => (
                <ChatItem
                  key={index}
                  avatar={item.avatar || ""}
                  username={item.userName || ""}
                  online={item.online}
                  options={[{ value: "start_chat", label: "Start Chat", onClick: () => onStartChat(item.id) }]}
                />
              ))
              : <EmptyChatState/>
          }
        </div>
      </div>
    </ChatCard>
  );
}

export default StartNewChat;
