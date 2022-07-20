import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export default interface TagInterface extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  closable?: boolean;
  closeIcon?: ReactNode;
  onClose?: () => void;
  label?: ReactNode;
  disabled?: boolean;
  danger?: boolean;
  success?: boolean;
  primary?: boolean;
  secondary?: boolean;
}
