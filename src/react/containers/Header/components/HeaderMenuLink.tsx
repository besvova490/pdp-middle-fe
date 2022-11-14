import { Link } from "react-router-dom";

// types
import { HeaderLinkInterface } from "../../../../__types__/containers/Header.type";


function HeaderMenuLink({ href, icon, label, notification }: HeaderLinkInterface) {

  return (
    <Link to={href} className="pdp-chat-header__menu-item">
      { notification ? <span className="pdp-chat-header__menu-item-notification">{notification}</span> : null }
      <span className="pdp-chat-header__menu-item-icon">{ icon }</span>
      <span className="pdp-chat-header__menu-item-label">{ label }</span>
    </Link>
  );
}

export default HeaderMenuLink;
