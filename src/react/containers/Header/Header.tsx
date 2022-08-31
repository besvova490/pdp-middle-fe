import { GrHomeRounded, GrMapLocation, GrNotification } from "react-icons/gr";
import { BsChat } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { VscSettingsGear } from "react-icons/vsc";
import { RiLoginBoxLine } from "react-icons/ri";

import Avatar from "../../components/Avatar";
import Dropdown from "../../components/Dropdown";
import HeaderMenuLink from "./components/HeaderMenuLink";
import BaseHeader from "./components/BaseHeader";

// helpers
import HeaderInterface from "../../../__types__/containers/Header.type";

// assets
import "../../../assets/styles/container/header.scss";

export const HEADER_NAVIGATION_LINKS = [
  { icon: <GrHomeRounded/>, label: "Feed", href: "/" },
  { icon: <GrNotification/>, label: "Notifications", href: "/notifications" },
  { icon: <GrMapLocation/>, label: "Map", href: "/map" },
  { icon: <BsChat/>, label: "Chat", href: "/chats" },
];

const HEADER_PROFILE_OPTIONS = [
  {
    label: <span className="pdp-chat-header__setting-item"><span className="pdp-chat-header__setting-item-icon"><CgProfile/></span>My profile</span>,
    value: "MyProfile"
  },
  {
    label: <span className="pdp-chat-header__setting-item"><span className="pdp-chat-header__setting-item-icon"><VscSettingsGear/></span>Settings</span>,
    value: "Settings"
  },
  {
    label: <span className="pdp-chat-header__setting-item"><span className="pdp-chat-header__setting-item-icon"><RiLoginBoxLine/></span>Log out</span>,
    value: "LogOut"
  },
];

function Header({ className = "", ...props }:HeaderInterface) {


  return (
    <BaseHeader
      className={className}
      { ...props }
    >
      {
        HEADER_NAVIGATION_LINKS.map((item, index) => (
          <HeaderMenuLink { ...item } key={`${index}-${item.label}`}/>
        ))
      }
      <BaseHeader.HeaderProfile>
        <Dropdown options={HEADER_PROFILE_OPTIONS}>
          <Avatar label="christinegz" src="https://picsum.photos/200/200"/>
        </Dropdown>
      </BaseHeader.HeaderProfile>
    </BaseHeader>
  );
}

export default Header;

