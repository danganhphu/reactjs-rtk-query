import React from 'react';
import { Select } from 'antd';
import { ACTION } from '@utils/constants/Actions/index';
import { ArrowDownIcon } from '@utils/constants/Icons/index';

const { Option } = Select;

const ActionSelect: React.FC<ActionSelectProps> = ({ onChange }) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Select placeholder="Choose action" onChange={handleChange} suffixIcon={<ArrowDownIcon />}>
      {ACTION.map((action) => (
        <Option key={action.VALUE} value={action.VALUE}>
          {action.LABEL}
        </Option>
      ))}
    </Select>
  );
};

export default ActionSelect;
