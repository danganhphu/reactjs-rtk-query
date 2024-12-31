import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectCurrentToken } from '@redux/auth.slice';

const PublicRoute = () => {
  const token: string | null = useSelector(selectCurrentToken);

  return !token ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoute;
