import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export default interface UploadInterface extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name?: string;
  children?: ReactNode;
  accept?: HTMLInputElement["accept"];
}
