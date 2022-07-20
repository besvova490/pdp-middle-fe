import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TabInterface {
  key: string;
  label?: ReactNode;
  disabled?: boolean;
}

export default interface TabsInterface extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "onChange"> {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  tabs?: Array<TabInterface>;
}
