// helpers
import { BaseFormInterface, DeepPartial } from "../base.type";

export type PostUser = {
  id: number;
  username: string;
};

export type PostTag = {
  id: number;
  username: string;
};

export interface PostInterface {
  thumbnail: string;
  description: string;
  users: Array<PostUser> | Array<number> | null;
  location: string;
  tags: Array<PostTag> | Array<number> | null;
}

export interface PostReachInterface extends PostInterface {
  author: {
    userName: string;
    avatar: string;
  },
  createdAt: Date;
  updatedAt: Date;
  likesCount: number;
  commentsCount: number;
}


export default interface CreateEditPostFormInterface
extends BaseFormInterface<PostInterface> {
  onSubmit?: (data: DeepPartial<PostInterface>) => void;
  onGoBack?: () => void;
}
