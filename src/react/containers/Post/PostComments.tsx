// components
import ChatMessage from "../Chat/components/ChatMessage";
import ChatInput from "../Chat/components/ChatInput";

// assets
import "../../../assets/styles/container/post.scss";


const MOCK_COMMENTS_LIST = [
  {
    author: {
      avatar: "https://picsum.photos/100",
      userName: "pleazart"
    },
    createdAt: new Date(),
    text: "I have a situation where a date value is being returned from a web"
  },
  {
    author: {
      avatar: "https://picsum.photos/100",
      userName: "pleazart"
    },
    createdAt: new Date(),
    text: "I have a situation where a date value is being returned from a web"
  },
  {
    author: {
      avatar: "https://picsum.photos/100",
      userName: "pleazart"
    },
    createdAt: new Date(),
    text: "I have a situation where a date value is being returned from a web"
  },
  {
    author: {
      avatar: "https://picsum.photos/100",
      userName: "pleazart"
    },
    createdAt: new Date(),
    text: "I have a situation where a date value is being returned from a web"
  }
];


function PostComments() {


  return (
    <div className="pdp-chat-post__comments-section">
      <div className="pdp-chat-post__comments-list">
        {
          MOCK_COMMENTS_LIST.map((item, key) => (
            <ChatMessage
              key={key}
              { ...item }
            />
          ))
        }
      </div>
      <ChatInput/>
    </div>
  );
}

export default PostComments;
