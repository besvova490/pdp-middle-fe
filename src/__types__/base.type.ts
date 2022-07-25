import { FieldErrorsImpl } from "react-hook-form";
import { DetailedHTMLProps, HTMLAttributes } from "react";


export type Sizes = "small" | "middle" | "large";

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface BaseFormInterface<T>
extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>, "onSubmit" | "onError"> {
  onSubmit?: (data: DeepPartial<T>) => void;
  onError?: (data: FieldErrorsImpl<T>) => void;
}
