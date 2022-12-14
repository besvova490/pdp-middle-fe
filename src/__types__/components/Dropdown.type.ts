import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface DropdownOptionInterface {
  label: ReactNode,
  value: unknown,
  disabled?: boolean,
  href?: string,
  onClick?: () => void;
}

export default interface DropdownInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  visible?: boolean;
  children?: ReactNode | Array<ReactNode>;
  options?: Array<DropdownOptionInterface>;
  defaultVisible?: boolean;
  arrow?: boolean;
  placement?: "bottom" | "bottomLeft" | "bottomRight" | "top" | "topLeft" | "topRight";
  renderArrow?: (isOpen: boolean) => ReactNode | Array<ReactNode>;
}
