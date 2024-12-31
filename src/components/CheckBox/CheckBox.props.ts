import { CheckboxChangeEvent } from 'antd/es/checkbox';

export interface CheckBoxProps {
  id: string;
  name: string;
  label: string;
  isChecked?: boolean;
  onChange: (e: CheckboxChangeEvent) => void;
  error?: string;
}
