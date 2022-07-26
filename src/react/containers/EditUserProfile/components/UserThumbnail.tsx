import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";

// components
import Upload from "../../../components/Upload";
import Dropdown from "../../../components/Dropdown";

// helpers
import { UserThumbnailInterface } from "../../../../__types__/containers/EditUserProfile.types";

const OPTIONS_LIST = [
  { label: <div className="pdp-chat-edit-user-profile-photos__edit-option"><MdOutlineModeEditOutline/><span>Change photo</span></div>, value: "changePhoto" },
  { label: <div className="pdp-chat-edit-user-profile-photos__edit-option"><MdDeleteOutline/><span>Remove photo</span></div>, value: "removePhoto" },
];


function UserThumbnail({ username, thumbnailSrc, avatarSrc }: UserThumbnailInterface) {


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
              <Dropdown
                options={OPTIONS_LIST}
                arrow={false}
                placement="bottomRight"
                className="pdp-chat-edit-user-profile-photos__edit pdp-chat-edit-user-profile-photos__edit_thumbnail"
              >
                <MdOutlineModeEditOutline/>
              </Dropdown>
            </>)
            : <Upload className="pdp-chat-edit-user-profile-photos__thumbnail-upload"/>
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
              <Dropdown
                options={OPTIONS_LIST}
                arrow={false}
                placement="bottom"
                className="pdp-chat-edit-user-profile-photos__edit"
              >
                <MdOutlineModeEditOutline/>
              </Dropdown>
            </>)
            : <Upload className="pdp-chat-edit-user-profile-photos__avatar-image-upload"/>
        }
      </div>
    </div>
  );
}

export default UserThumbnail;
