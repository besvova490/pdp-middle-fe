import { DetailedHTMLProps, HTMLAttributes } from "react";


export default interface IconInterface extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  className?: string;
}
