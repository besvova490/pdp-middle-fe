import { FunctionComponent } from "react";

// components
import Controls, { ControlsInterface } from "./components/Controls";

// helpers
import getChildren from "../../../helpers/getChildren";
import { UserProfileTopBannerInterface } from "../../../__types__/containers/UserProfile.types";

// assets
import "../../../assets/styles/container/user-profile.scss";

interface ControlComponents {
  Controls: FunctionComponent<ControlsInterface>;
}

const UserProfileTopBanner: FunctionComponent<UserProfileTopBannerInterface> & ControlComponents = (props) => {
  const { thumbnail, avatar, username, fullName, children, ...resp } = props;

  const [controls] = getChildren({ children, specificChildType: Controls.name });

  return (
    <section { ...resp } className="pdp-chat-user-profile-banner">
      <div className="pdp-chat-user-profile-banner__thumbnail">
        <img
          className="pdp-chat-user-profile-banner__thumbnail-image"
          src={thumbnail || ""}
          alt={`thumbnail for ${username}`}
        />
      </div>
      <div className="pdp-chat-user-profile-banner__body">
        <div className="pdp-chat-user-profile-banner__avatar">
          <img
            className="pdp-chat-user-profile-banner__avatar-image"
            src={avatar || ""}
            alt={`avatar for ${username}`}
          />
        </div>
        <div className="pdp-chat-user-profile-banner__info">
          <h2 className="pdp-chat-user-profile-banner__info-username">{username}</h2>
          <h3 className="pdp-chat-user-profile-banner__info-full-name">{fullName}</h3>
        </div>
      </div>
      <div className="pdp-chat-user-profile-banner__controls">
        { controls }
      </div>
    </section>
  );
}

UserProfileTopBanner.Controls = Controls;

export default UserProfileTopBanner;
