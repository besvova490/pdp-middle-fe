import React from "react";

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

export type PostAuthor = {
  avatar: string;
  userName: string;
  id?: number;
};

export interface CommentInterface {
  author: PostAuthor;
  createdAt: Date;
  body: string;
}

export interface CommentComponentInterface {
  author: PostAuthor;
  createdAt: Date;
  body: string;
}

export interface PostThumbnailInterface {
  thumbnailSrc?: string | null;
  error?: string;
  onChange?: (args: { name: string, url: string } | null) => void;
}

export interface PostInterface {
  id: number;
  title: string;
  thumbnail: string | null;
  description: string;
  users: Array<PostUser> | Array<number> | null;
  location: string;
  tags: Array<PostTag> | Array<number> | null;
}

export interface PostReachInterface extends PostInterface, React.FC {
  author: PostAuthor,
  createdAt: Date;
  updatedAt: Date;
  likesCount: number;
  commentsCount: number;
  comments: Array<CommentInterface>;
}

export interface PostCommentsInterface {
  comments: Array<CommentComponentInterface>;
  addComment: (e: string) => void;
}

export default interface CreateEditPostFormInterface
extends BaseFormInterface<PostInterface> {
  onSubmit?: (data: DeepPartial<PostInterface>) => void;
  onGoBack?: () => void;
}
