import { DetailedHTMLProps, HTMLAttributes } from "react";

// helpers
import { BaseFormInterface, DeepPartial } from "../base.type";


export interface UserInterestInterface {
  id: number;
  name: string;
}

export interface EditUserProfileInterface {
  avatar: string | null;
  thumbnailImage: string | null;
  userName: string;
  interests: Array<UserInterestInterface> | null,
  fullName: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export type EditUserProfileDraftInterface = DeepPartial<EditUserProfileInterface>

export interface UserThumbnailInterface extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLElement>, "onChange"> {
  username: string;
  thumbnailSrc?: string;
  avatarSrc?: string;
  onChange?: (key: "thumbnailImage" | "avatar", value: string | null) => void;
}

export default interface EditUserProfileFormInterface extends BaseFormInterface<EditUserProfileInterface> {
  onSubmit?: (data: DeepPartial<EditUserProfileInterface>) => void;
  onGoBack?: () => void;
  defaultValues?: EditUserProfileInterface | null;
}
