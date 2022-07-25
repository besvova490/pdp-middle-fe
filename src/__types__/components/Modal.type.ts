import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export default interface ModalInterface extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "title" | "footer"> {
  visible?: boolean;
  onClose?: () => void;
  footer?: ReactNode;
  title?: ReactNode;
}
