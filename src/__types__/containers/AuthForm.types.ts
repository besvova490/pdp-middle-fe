import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { FieldErrorsImpl } from "react-hook-form";


export interface ResetFormDataInterface {
  email: string;
}

export interface LoginFormDataInterface extends ResetFormDataInterface {
  password: string;
}

export interface SignUpDataInterface extends LoginFormDataInterface {
  passwordConfirmation: string;
}

export interface RestorePasswordInterface {
  password: string;
  passwordConfirmation: string;
}

export default interface AuthFormInterface<T> extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLElement>, "onSubmit" | "onError"> {
  className?: string;
  onSubmit?: (data: T) => void;
  onError?: (data: FieldErrorsImpl<T>) => void;
}

export interface AuthFormCardInterface extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, "title"> {
  className?: string;
  icon?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  footer?: ReactNode;
}
