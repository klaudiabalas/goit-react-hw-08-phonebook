import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const PrivateRoute = ({ component, redirectTo }) => {
  const { isAuthenticated } = useAuth();
  console.log(`PrivateRoute: isAuthenticated=${isAuthenticated}`);
  return isAuthenticated ? component : <Navigate to={redirectTo} />;
};
