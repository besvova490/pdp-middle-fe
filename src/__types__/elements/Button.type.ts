import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export default interface ButtonInterface
extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode | Array<ReactNode>;
  href?: string;
  disabled?: boolean;
  danger?: boolean;
  success?: boolean;
  primary?: boolean;
  secondary?: boolean;
  isDefault?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  type?: "primary" | "default";
  shape?: "default" | "circle" | "round";
  htmlType?: "submit" | "reset" | "button";
  size?: "large" | "middle" | "small";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
