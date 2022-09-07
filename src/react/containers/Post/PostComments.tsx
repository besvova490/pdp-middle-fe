// components
import ChatMessage from "../Chat/components/ChatMessage";
import ChatInput from "../Chat/components/ChatInput";

// helpers
import { PostCommentsInterface } from "../../../__types__/containers/Post.type";

// assets
import "../../../assets/styles/container/post.scss";


function PostComments({ comments, addComment }: PostCommentsInterface) {


  return (
    <div className="pdp-chat-post__comments-section">
      <div className="pdp-chat-post__comments-list">
        {
          comments.map((item, key) => (
            <ChatMessage
              key={key}
              author={item.author}
              createdAt={item.createdAt}
              text={item.body}
            />
          ))
        }
      </div>
      <ChatInput onSend={e => addComment && addComment(e)}/>
    </div>
  );
}

export default PostComments;
