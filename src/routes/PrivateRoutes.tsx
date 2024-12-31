import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from 'antd/es/layout/layout';
import { selectCurrentToken } from '@redux/auth.slice';

const PrivateRoutes = () => {
  const token: string | null = useSelector(selectCurrentToken);

  return token ? <Layout className="container z-background-page"></Layout> : <Navigate to="/login" />;
};

export default PrivateRoutes;
