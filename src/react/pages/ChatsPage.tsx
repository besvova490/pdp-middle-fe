import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import get from "lodash/get";

// components
import Chat from "../containers/Chat";
import ChatDirect from "../containers/Chat/ChatDirect";
import EmptyChatState from "../containers/Chat/components/EmptyChatState";

// helpers
import { useUserProfile } from "../../context/UserProfileContext";
import socketClient from "../../socket";
import { SOCKET_PRIVATE_MESSAGE } from "../../socket/socketEvents";
import chat from "../../gql/chat";
import { ChatItemQueryInterface, ChatItemInterface, ChatMessageInterface, ChatMessageQueryInterface } from "../../__types__/containers/Chat.type";

// assets
import "../../assets/styles/pages/chat.scss";

type FetchChatsType = { chats: Array<ChatItemQueryInterface<ChatMessageQueryInterface>> };
type FetchSingleChatType = { chat: ChatItemQueryInterface<ChatMessageQueryInterface> };

function ChatsPage() {
  const [chats, setChats] = useState<Array<ChatItemInterface> | null>(null);
  const [chatData, setChatData] = useState<ChatItemQueryInterface<ChatMessageInterface> | null>(null);

  const { id } = useParams();
  const { user } = useUserProfile();
  const [fetchChats] = useLazyQuery<FetchChatsType>(chat.CHATS_QUERY);
  const [fetchSingleChat] = useLazyQuery<FetchSingleChatType>(chat.CHAT_SINGLE_QUERY);


  useEffect(() => {
    fetchChats().then(({ data }) => {
      const chatsToSet = (data?.chats || []).map(item => ({
        id: item.id,
        username: item.receiver.userName,
        avatar: item.receiver.avatar,
        online: item.online,
        lastMessage: get(item, "messages[0].body", null),
        lastMessageDate: get(item, "messages[0].createdAt", null),
      }));

      setChats(chatsToSet as Array<ChatItemInterface>);
    });
  }, []);

  useEffect(() => {
    if (!id) return;

    fetchSingleChat({ variables: { chatId: +id } })
      .then(({ data }) => {
        const messagesToSet = (data?.chat.messages || []).map(item => {
          const isOwn = item.author.id !== data?.chat.receiver.id;

          return {
            isOwn,
            text: item.body,
            createdAt: item.createdAt,
            author: item.author,
          };
        });

        setChatData({ ...data?.chat, messages: messagesToSet } as ChatItemQueryInterface<ChatMessageInterface>);
      })
      .catch(() => null)
  }, [id]);

  useEffect(() => {
    socketClient.on(SOCKET_PRIVATE_MESSAGE, (data) => {
      const isOwn = +data.author.id === user?.id;

      const message = {
        isOwn,
        text: data.body,
        createdAt: data.createdAt,
        author: data.author,
      };

      setChatData(state => {
        const newState = ({
          ...state,
          messages: [...state?.messages || [], message]
        });

        return newState as ChatItemQueryInterface<ChatMessageInterface>
      })
    })

    return () => {
      socketClient.off(SOCKET_PRIVATE_MESSAGE);
    };
  }, [user]);

  const handleMessage = (message: string) => {
    socketClient.emit(SOCKET_PRIVATE_MESSAGE, {
      receiver: chatData?.receiver,
      chatId: id,
      author: {
        id: user?.id,
        avatar: user?.avatar,
        userName: user?.userName,
        fullName: user?.fullName,
      },
      body: message,
      createdAt: new Date(),
    });
  }

  return (
    <div className="pdp-chat-page-chat">
      <div className="pdp-chat-page-chat__main">
        {
          id
            ? (
              <ChatDirect
                receiver={chatData?.receiver}
                messages={chatData?.messages || []}
                onMessage={handleMessage}
              />
            )
            : <EmptyChatState label="Select a chat to start messaging"/>
        }
      </div>
      <div className="pdp-chat-page-chat__side-bar">
        <Chat chats={chats || []}/>
      </div>
    </div>
  );
}

export default ChatsPage;
