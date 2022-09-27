/* eslint-disable @typescript-eslint/no-var-requires */
// helpers
import classNames from "../../../helpers/classNames";
import AvatarInterface from "../../../__types__/components/Avatar.type";

// assets
const defaultUserAvatar = require("../../../assets/images/default-user-avatar.png");
import "../../../assets/styles/components/avatar.scss";


function Avatar(props: AvatarInterface) {
  const { alt, src, label, labelPosition = "left", size = "middle", className = "", online, ...rest } = props;

  const avatarClassName = classNames(
    "pdp-chat-avatar",
    className,
    `pdp-chat-avatar__label-position-${labelPosition}`,
    `pdp-chat-avatar__size-${size}`,
    {
      "pdp-chat-avatar__empty": !src,
    }
  );

  return (
    <div
      { ...rest }
      className={avatarClassName}
    >
      <div className="pdp-chat-avatar__image-wrapper">
        <img
          alt={alt || ""}
          src={src || defaultUserAvatar}
          onError={e => e.currentTarget.src = defaultUserAvatar}
          className="pdp-chat-avatar__image-tag"
        />
        {
          online
            ? <span className="pdp-chat-avatar__online-inner"/>
            : null
        }
      </div>
      {
        label
          ? (
            <span className="pdp-chat-avatar__label">
              { label }
            </span>
          )
          : null
      }
    </div>
  );
}

export default Avatar;

