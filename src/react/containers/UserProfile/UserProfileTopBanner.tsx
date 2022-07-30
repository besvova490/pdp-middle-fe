import { FC } from "react";
import { IoChatbubblesOutline } from "react-icons/io5";

// elements
import Button from "../../elements/Button";

// helpers
import { UserProfileTopBannerInterface } from "../../../__types__/containers/UserProfile.types";

// assets
import "../../../assets/styles/container/user-profile.scss";


const UserProfileTopBanner: FC<UserProfileTopBannerInterface> = (props) => {
  const { thumbnail, avatar, username, fullName, ...resp } = props;

  return (
    <section { ...resp } className="pdp-chat-user-profile-banner">
      <div className="pdp-chat-user-profile-banner__thumbnail">
        <img
          className="pdp-chat-user-profile-banner__thumbnail-image"
          src={thumbnail}
          alt={`thumbnail for ${username}`}
        />
      </div>
      <div className="pdp-chat-user-profile-banner__body">
        <div className="pdp-chat-user-profile-banner__avatar">
          <img
            className="pdp-chat-user-profile-banner__avatar-image"
            src={avatar}
            alt={`avatar for ${username}`}
          />
        </div>
        <div className="pdp-chat-user-profile-banner__info">
          <h2 className="pdp-chat-user-profile-banner__info-username">{username}</h2>
          <h3 className="pdp-chat-user-profile-banner__info-full-name">{fullName}</h3>
        </div>
      </div>
      <div className="pdp-chat-user-profile-banner__controls">
        <Button size="small">
          Follow
        </Button>
        <Button isDefault size="small" className="pdp-chat-user-profile-banner__controls-btn">
          <IoChatbubblesOutline className="pdp-chat-user-profile-banner__controls-icon"/>
        </Button>
      </div>
    </section>
  );
}

export default UserProfileTopBanner;
