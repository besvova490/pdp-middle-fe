import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface DrawerInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  visible?: boolean;
  onClose?: () => void;
}
