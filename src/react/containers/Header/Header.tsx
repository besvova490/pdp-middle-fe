import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { GrHomeRounded, GrMapLocation, GrNotification } from "react-icons/gr";
import { BsChat } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { VscSettingsGear } from "react-icons/vsc";
import { RiLoginBoxLine } from "react-icons/ri";

// containers
import EditUserProfile from "../EditUserProfile";

// components
import Drawer from "../../components/Drawer";
import Avatar from "../../components/Avatar";
import Dropdown from "../../components/Dropdown";
import HeaderMenuLink from "./components/HeaderMenuLink";
import BaseHeader from "./components/BaseHeader";

// helpers
import { DeepPartial } from "../../../__types__/base.type";
import { EditUserProfileInterface } from "../../../__types__/containers/EditUserProfile.types";
import profile from "../../../gql/profile";
import { useUserProfile } from "../../../context/UserProfileContext";
import HeaderInterface from "../../../__types__/containers/Header.type";

// assets
import "../../../assets/styles/container/header.scss";

export const HEADER_NAVIGATION_LINKS = [
  { icon: <GrHomeRounded/>, label: "Feed", href: "/profile/my" },
  { icon: <GrNotification/>, label: "Notifications", href: "/notifications" },
  { icon: <GrMapLocation/>, label: "Map", href: "/map" },
  { icon: <BsChat/>, label: "Chat", href: "/chats" },
  { icon: <HiOutlineVideoCamera/>, label: "Call", href: "/video-meet" },
];

function Header({ className = "", ...props }:HeaderInterface) {
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const { user } = useUserProfile();

  const [updateProfile] = useMutation(profile.PROFILE_MUTATION, {
    refetchQueries: () => [{ query: profile.PROFILE_QUERY }],
    onError: e => console.log(e)
  });

  const HEADER_PROFILE_OPTIONS = [
    {
      label: <span className="pdp-chat-header__setting-item"><span className="pdp-chat-header__setting-item-icon"><CgProfile/></span>My profile</span>,
      value: "MyProfile",
      href: "/profile/my",
    },
    {
      label: <span className="pdp-chat-header__setting-item"><span className="pdp-chat-header__setting-item-icon"><VscSettingsGear/></span>Settings</span>,
      value: "Settings",
      onClick: () => setIsSettingOpen(true),
    },
    {
      label: <span className="pdp-chat-header__setting-item"><span className="pdp-chat-header__setting-item-icon"><RiLoginBoxLine/></span>Log out</span>,
      value: "LogOut"
    },
  ];

  const handleUpdateUserProfile = (data: DeepPartial<EditUserProfileInterface>) => {
    updateProfile({ variables: data })
      .then(() => toast.success("You profile data was updated"))
      .catch(() => toast.success("Something whet wrong"))
  }


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
        <Dropdown options={HEADER_PROFILE_OPTIONS} placement="bottomLeft">
          <Avatar
            label={user?.userName}
            src={user?.avatar || ""}
            online={user?.online}
          />
        </Dropdown>
      </BaseHeader.HeaderProfile>
      <Drawer
        visible={isSettingOpen}
        onClose={() => setIsSettingOpen(false)}
        closable={false}
      >
        <EditUserProfile
          onGoBack={() => setIsSettingOpen(false)}
          defaultValues={user}
          onSubmit={handleUpdateUserProfile}
        />
      </Drawer>
    </BaseHeader>
  );
}

export default Header;

