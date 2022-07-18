import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface AnimatedHeightInterface
extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode | Array<ReactNode>;
  visible?: boolean;
  transitionDuration?: number;
  initialHeight?: string;
}
