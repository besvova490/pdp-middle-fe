export default interface SwitchInterface {
  loading?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (checked?: boolean) => void;
}
