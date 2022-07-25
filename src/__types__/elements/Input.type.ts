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
  name?: string;
}

export interface TextareaInterface
extends BaseInputInterface, Omit<DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "defaultValue"> {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default interface InputInterface
extends BaseInputInterface, Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, "defaultValue"> {
  icon?: ReactNode;
  allowClear?: boolean;
  Textarea?: React.FC;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
