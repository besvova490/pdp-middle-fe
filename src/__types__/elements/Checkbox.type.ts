import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type onChange = {
  (changed: boolean, name?: string): void;
}


export default interface CheckboxInterface extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, "onChange"> {
  label?: ReactNode;
  error?: ReactNode;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  name?: string;
  onChange?: onChange;
}
