import { SiTestinglibrary } from "react-icons/si";

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
        <span className="pdp-chat-header__logo">
          <SiTestinglibrary/>
        </span>
        { otherChildren }
      </div>
      { profile }
    </header>
  );
}

BaseHeader.HeaderProfile = HeaderProfile;

export default BaseHeader;
