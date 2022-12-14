import { MdDeleteOutline } from "react-icons/md";

// components
import Upload from "../../../components/Upload";

// helpers
import { PostThumbnailInterface } from "../../../../__types__/containers/Post.type";
import classNames from "../../../../helpers/classNames";


function PostThumbnail({ thumbnailSrc, error, onChange }: PostThumbnailInterface) {
  

  const className = classNames(
    "pdp-chat-edit-user-profile-photos",
    {
      "pdp-chat-edit-user-profile-photos_with-error": !!error,
    }
  );


  return (
    <div className={className}>
      <div className="pdp-chat-edit-user-profile-photos__thumbnail">
        {
          thumbnailSrc
            ? (<>
              <img
                src={thumbnailSrc}
                alt="thumbnail for new post"
                className="pdp-chat-edit-user-profile-photos__thumbnail-image"
              />
              <div
                onClick={() => onChange && onChange(null)}
                className="pdp-chat-edit-user-profile-photos__edit pdp-chat-edit-user-profile-photos__edit_thumbnail"
              >
                <MdDeleteOutline/>
              </div>
            </>)
            : <Upload
              className="pdp-chat-edit-user-profile-photos__thumbnail-upload"
              onChange={onChange}
            />
        }
      </div>
      { error ? <span className="pdp-chat-edit-user-profile-photos__error">{ error }</span> : null }
    </div>
  );
}

export default PostThumbnail;
