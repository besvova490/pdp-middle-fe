import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { GrImage } from "react-icons/gr";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";

// helpers
import { PostReachInterface } from "../../../__types__/containers/Post.type";

// assets
import "../../../assets/styles/container/post.scss";


dayjs.extend(relativeTime)

function Post(props: PostReachInterface) {
  const {
    thumbnail,
    description,
    tags,
    location,
    author,
    likesCount = 0,
    commentsCount = 0,
    createdAt,
  } = props;

  const daysCount = dayjs(createdAt).fromNow();


  return (
    <div className="pdp-chat-post">
      <div className="pdp-chat-post__header">
        <div className="pdp-chat-post__header-author">
          <img
            alt={`avatar of ${author.userName}`}
            src={author.avatar}
            className="pdp-chat-post__header-author-avatar-image"
          />
          <div className="pdp-chat-post__header-post-info">
            <span className="pdp-chat-post__header-post-info-author">{author.userName}</span>
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
              : <GrImage className="pdp-chat-post__thumbnail-icon"/>
          }
        </div>
      </div>
      <div className="pdp-chat-post__footer">
        <div className="pdp-chat-post__footer-item">
          <AiOutlineLike className="pdp-chat-post__footer-item-icon"/>
          <span className="pdp-chat-post__footer-item-label">Like</span>
        </div>
        <div className="pdp-chat-post__footer-item">
          <FaRegComment className="pdp-chat-post__footer-item-icon"/>
          <span className="pdp-chat-post__footer-item-label">Comment</span>
        </div>
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
