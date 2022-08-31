import { Link } from "react-router-dom";

// types
import { HeaderLinkInterface } from "../../../../__types__/containers/Header.type";


function HeaderMenuLink({ href, icon, label }: HeaderLinkInterface) {

  return (
    <Link to={href} className="pdp-chat-header__menu-item">
      <span className="pdp-chat-header__menu-item-icon">{ icon }</span>
      <span className="pdp-chat-header__menu-item-label">{ label }</span>
    </Link>
  );
}

export default HeaderMenuLink;
