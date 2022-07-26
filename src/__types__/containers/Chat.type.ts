import { DetailedHTMLProps, HTMLAttributes, ReactNode, ForwardedRef } from "react";

export interface ChatCardInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  header?: ReactNode;
}

export interface ChatItemInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  username: string;
  avatar: string;
  lastMessage?: string;
  lastMessageDate?: string;
  online?: boolean;
  isMuted?: boolean;
  onRemoveChat?: () => void;
  onMute?: () => void;
}

export interface ChatMessageInterface
extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOvn?: boolean;
  text?: string;
  createdAt?: Date;
  author?: {
    userName: string;
    avatar: string;
  };
}


export interface ChatInputInterface {
  onSend?: (message: string) => void;
  value?: string;
  fullWidth?: boolean;
  className?: string;
  forwardedRef?: ForwardedRef<HTMLElement>;
}
