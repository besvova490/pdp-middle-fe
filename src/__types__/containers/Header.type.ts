import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export default interface HeaderInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string;
  profile?: ReactNode;
}


export interface HeaderLinkInterface {
  icon?: ReactNode;
  label?: ReactNode;
  href: string;
  disabled?: boolean;
}
