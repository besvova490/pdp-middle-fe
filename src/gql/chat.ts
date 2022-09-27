import { gql } from "@apollo/client";

export default {
  CHATS_QUERY: gql `
    query Chats {
      chats {
        id
        online
        messages {
          body
          createdAt
        }
        receiver {
          id
          avatar
          userName
          fullName
        }
      }
    }  
  `,
  CHAT_SINGLE_QUERY: gql `
    query Chat($chatId: Int!) {
      chat(id: $chatId) {
        id
        messages {
          body
          createdAt
          author {
            id
            avatar
            fullName
            userName
          }
          receiver {
            id
            avatar
            fullName
            userName
          }
        }
        initiator {
          id
          avatar
          fullName
          userName
        }
        receiver {
          id
          avatar
          userName
          fullName
        }
      }
    }
  `,
  CHAT_CREATE_MUTATE: gql `
    mutation Mutation($receiver: Int, $message: String) {
      createChat(data: { receiver: $receiver, message: $message }) {
        messages {
          body
        }
        initiator {
          id
          email
          avatar
        }
        receiver {
          id
          email
          avatar
        }
      }
    }
  `,
};
