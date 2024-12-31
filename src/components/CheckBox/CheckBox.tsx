import { Checkbox } from 'antd';
import { CheckBoxProps } from './CheckBox.props';
import styles from './Checkbox.module.scss';

const CheckBox: React.FC<CheckBoxProps> = ({ id, name, label, isChecked = false, onChange, error }) => {
  return (
    <div className={styles.checkboxContent}>
      <Checkbox id={id} name={name} checked={isChecked} onChange={onChange}>
        <span className={styles.label}>{label}</span>
      </Checkbox>
      {error && <div className={styles.errorBlock}>{error}</div>}
    </div>
  );
};

export default CheckBox;
