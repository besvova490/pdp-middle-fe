import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface AvatarInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  alt?: string | null;
  src?: string;
  label?: ReactNode;
  labelPosition?: "left" | "bottom";
  size?: "small" | "middle" | "large";
  online?: boolean;
}
