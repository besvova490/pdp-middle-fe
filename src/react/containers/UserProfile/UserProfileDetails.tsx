import { FC } from "react";

// helpers
import { UserProfileDetailsInterface } from "../../../__types__/containers/UserProfile.types";


const UserProfileDetails: FC<UserProfileDetailsInterface> = ({ description, ...rest }) => {

  return (
    <section { ...rest } className="pdp-chat-user-profile-block">
      <h3 className="pdp-chat-user-profile-block__label">Profile details</h3>
      <div className="pdp-chat-user-profile-details">
        <div className="pdp-chat-user-profile-details__row">
          <h4 className="pdp-chat-user-profile-details__row-label">General info</h4>
          <p className="pdp-chat-user-profile-details__row-text">{ description }</p>
        </div>
      </div>
    </section>
  );
}

export default UserProfileDetails;
