import { SiTestinglibrary } from "react-icons/si";
import { Link } from "react-router-dom";

// components
import HeaderProfile from "./HeaderProfile";

// helpers
import getChildren from "../../../../helpers/getChildren";
import HeaderInterface from "../../../../__types__/containers/Header.type";

// assets
import "../../../../assets/styles/container/header.scss";


function BaseHeader({ className, children, ...props }: HeaderInterface) {

  const [profile, otherChildren] = getChildren({ children, specificChildType: HeaderProfile.name });

  return (
    <header className={`pdp-chat-header ${className}`} { ...props }>
      <div className="pdp-chat-header__navigation">
        <Link className="pdp-chat-header__logo" to="/">
          <SiTestinglibrary/>
        </Link>
        { otherChildren }
      </div>
      { profile }
    </header>
  );
}

BaseHeader.HeaderProfile = HeaderProfile;

export default BaseHeader;
