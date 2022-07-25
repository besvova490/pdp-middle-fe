import { DetailedHTMLProps, HTMLAttributes } from "react";

// helpers
import { BaseFormInterface, DeepPartial } from "../base.type";


export interface UserInterestInterface {
  id: number;
  name: string;
}

export interface EditUserProfileInterface {
  avatar: string;
  thumbnailImage: string;
  userName: string;
  interests: Array<UserInterestInterface> | null,
  fullName: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export type EditUserProfileDraftInterface = DeepPartial<EditUserProfileInterface>

export interface UserThumbnailInterface extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLElement> {
  username: string;
  thumbnailSrc?: string;
  avatarSrc?: string;
}

export default interface EditUserProfileFormInterface extends BaseFormInterface<EditUserProfileInterface> {
  onSubmit?: (data: DeepPartial<EditUserProfileInterface>) => void;
  onGoBack?: () => void;
}
