import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface BaseInputInterface {
  label?: ReactNode;
  error?: ReactNode;
  showCount?: boolean;
  maxLength?: number;
  className?: string;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  fullWidth?: boolean;
}

export interface TextareaInterface
extends BaseInputInterface, Omit<DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "defaultValue"> {}

export default interface InputInterface
extends BaseInputInterface, Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, "defaultValue"> {
  icon?: ReactNode;
  allowClear?: boolean;
  Textarea?: React.FC;
}
