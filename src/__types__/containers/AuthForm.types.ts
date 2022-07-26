import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


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

export interface AuthFormCardInterface extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, "title"> {
  className?: string;
  icon?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  footer?: ReactNode;
}
