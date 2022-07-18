import { DetailedHTMLProps, HTMLAttributes } from "react";

// helpers
import { Sizes } from "../base.type";


export default interface PreloaderInterface
extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: Sizes;
  danger?: boolean;
  success?: boolean;
  primary?: boolean;
  secondary?: boolean;
}
