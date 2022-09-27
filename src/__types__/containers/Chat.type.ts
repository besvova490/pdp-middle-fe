import { DetailedHTMLProps, HTMLAttributes, ReactNode, ForwardedRef } from "react";

// types
import { PostAuthor } from "./Post.type";

export interface ChatCardInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  header?: ReactNode;
}

export interface ChatItemComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  href?: string;
  username: string;
  avatar: string;
  lastMessage?: string;
  lastMessageDate?: string;
  online?: boolean;
  isMuted?: boolean;
  onRemoveChat?: () => void;
  onMute?: () => void;
  options?: Array<{ value: string, label: string, onClick: () => void }>
}

export interface ChatItemInterface {
  id: number;
  username: string;
  avatar: string;
  lastMessage?: string;
  lastMessageDate?: string;
  online?: boolean;
  isMuted?: boolean;
}


export interface ChatMessageInterface
extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOwn?: boolean;
  text?: string;
  createdAt?: Date;
  author?: PostAuthor;
}


export interface ChatInputInterface {
  onSend?: (message: string) => void;
  value?: string;
  fullWidth?: boolean;
  className?: string;
  forwardedRef?: ForwardedRef<HTMLElement>;
}

export interface ChatContainerInterface {
  addChat?: () => void;
  chats?: Array<ChatItemInterface>;
}

export interface ChatMessageQueryInterface {
  body: string;
  createdAt: Date;
  author: PostAuthor;
  receiver?: PostAuthor;
  chatId?: number;
}

export interface ChatItemQueryInterface<T> {
  messages: Array<T>;
  receiver: PostAuthor;
  online: boolean;
  id: number;
}

export interface ChatDirectInterface {
  onGoBack?: () => void;
  messages: Array<ChatMessageInterface>;
  onMessage?: (e: string) => void;
  receiver?: PostAuthor;
}
