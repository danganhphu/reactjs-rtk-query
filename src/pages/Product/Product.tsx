import React, { useState } from 'react';
import { useGetUsersQuery } from '@services/user.service';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckBoxCustom } from '@components/index';

const Product: React.FC = () => {
  const { data = [], error, isLoading, isSuccess } = useGetUsersQuery();
  return <h2>This is the register page</h2>;
};
export default Product;
