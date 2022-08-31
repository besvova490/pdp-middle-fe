import React from "react";
import { RiAddCircleLine } from "react-icons/ri";


const AddPost: React.FC<Record<string, unknown>> = (props) => {

  return (
    <div { ...props } className="pdp-chat-user-profile__add-post">
      <RiAddCircleLine className="pdp-chat-user-profile__add-post-icon"/>
      <span className="pdp-chat-user-profile__add-post-label">
        Create Post
      </span>
    </div>
  );
}

export default AddPost;
