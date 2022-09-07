import { MdDeleteOutline } from "react-icons/md";

// components
import Upload from "../../../components/Upload";

// helpers
import { UserThumbnailInterface } from "../../../../__types__/containers/EditUserProfile.types";


function UserThumbnail({ username, thumbnailSrc, avatarSrc, onChange }: UserThumbnailInterface) {


  return (
    <div className="pdp-chat-edit-user-profile-photos">
      <div className="pdp-chat-edit-user-profile-photos__thumbnail">
        {
          thumbnailSrc
            ? (<>
              <img
                src={thumbnailSrc}
                alt={`thumbnail for ${username}`}
                className="pdp-chat-edit-user-profile-photos__thumbnail-image"
              />
              <span
                className="pdp-chat-edit-user-profile-photos__edit pdp-chat-edit-user-profile-photos__edit_thumbnail"
                onClick={() => onChange && onChange("thumbnailImage", null)}
              >
                <MdDeleteOutline/>
              </span>
            </>)
            : (
              <Upload
                className="pdp-chat-edit-user-profile-photos__thumbnail-upload"
                onChange={(e) => onChange && onChange("thumbnailImage", e?.url || null)}
              />
            )
        }
      </div>
      <div className="pdp-chat-edit-user-profile-photos__avatar">
        {
          avatarSrc
            ? (<>
              <img
                src={avatarSrc}
                alt={`avatar for ${username}`}
                className="pdp-chat-edit-user-profile-photos__avatar-image"
              />
              <span
                className="pdp-chat-edit-user-profile-photos__edit"
                onClick={() => onChange && onChange("avatar", null)}
              >
                <MdDeleteOutline/>
              </span>
            </>)
            : (
              <Upload
                className="pdp-chat-edit-user-profile-photos__avatar-image-upload"
                onChange={(e) => onChange && onChange("avatar", e?.url || null)}
              />
            )
        }
      </div>
    </div>
  );
}

export default UserThumbnail;
