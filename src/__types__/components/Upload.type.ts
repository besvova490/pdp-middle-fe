import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export default interface UploadInterface extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange"> {
  name?: string;
  children?: ReactNode;
  accept?: HTMLInputElement["accept"];
  onChange?: (args: { name: string, url: string } | null) => void;
}
