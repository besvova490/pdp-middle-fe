import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface UserProfileTopBannerInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  thumbnail?: string;
  avatar?: string;
  username?: string;
  fullName?: string;
}

export interface UserProfileDetailsInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  description?: string;
}
