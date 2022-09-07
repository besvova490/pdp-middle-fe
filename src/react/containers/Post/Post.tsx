import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FcRemoveImage } from "react-icons/fc";

// helpers
import { DeepPartial } from "../../../__types__/base.type";
import { PostReachInterface } from "../../../__types__/containers/Post.type";

// assets
import "../../../assets/styles/container/post.scss";


dayjs.extend(relativeTime);

function Post(props: DeepPartial<PostReachInterface>) {
  const {
    thumbnail,
    description,
    location,
    author,
    likesCount = 0,
    commentsCount = 0,
    createdAt,
    id,
  } = props;

  const daysCount = createdAt ? dayjs((createdAt as number) - (37 * 60 * 60 * 1000)).fromNow() : null;


  return (
    <div className="pdp-chat-post">
      <div className="pdp-chat-post__header">
        <div className="pdp-chat-post__header-author">
          {
            author?.avatar
              ? (
                <img
                  alt={`avatar of ${author?.userName}`}
                  src={author.avatar}
                  className="pdp-chat-post__header-author-avatar-image"
                />
              )
              : <FcRemoveImage className="pdp-chat-post__header-author-avatar-image"/>
          }
          <div className="pdp-chat-post__header-post-info">
            <span className="pdp-chat-post__header-post-info-author">{author?.userName}</span>
            {
              createdAt
                ? <span className="pdp-chat-post__header-post-info-date">added a photo &#9679; {daysCount}</span>
                : null
            }
            {
              location
                ? (
                  <a href="#" className="pdp-chat-post__header-post-info-location">
                    <HiOutlineLocationMarker className="pdp-chat-post__header-post-info-location-icon"/>
                    {location}
                  </a>
                )
                : null
            }
          </div>
        </div>
      </div>
      <div className="pdp-chat-post__body">
        <div className="pdp-chat-post__description">{ description }</div>
        <div className="pdp-chat-post__thumbnail">
          {
            thumbnail
              ? <img className="pdp-chat-post__thumbnail-image" src={thumbnail} alt="image for post"/>
              : <FcRemoveImage className="pdp-chat-post__thumbnail-icon"/>
          }
        </div>
      </div>
      <div className="pdp-chat-post__footer">
        <div className="pdp-chat-post__footer-item">
          <AiOutlineLike className="pdp-chat-post__footer-item-icon"/>
          <span className="pdp-chat-post__footer-item-label">Like</span>
        </div>
        <Link to={`post/${id}`} className="pdp-chat-post__footer-item">
          <FaRegComment className="pdp-chat-post__footer-item-icon"/>
          <span className="pdp-chat-post__footer-item-label">Comment</span>
        </Link>
        <div className="pdp-chat-post__footer-item">
          <RiShareForwardLine className="pdp-chat-post__footer-item-icon"/>
          <span className="pdp-chat-post__footer-item-label">Share</span>
        </div>
      </div>
      <div className="pdp-chat-post__info">
        {likesCount} likes &#8729; {commentsCount} comments
      </div>
    </div>
  );
}


export default Post;
