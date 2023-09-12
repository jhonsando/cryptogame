import { useLocation, Navigate } from 'react-router-dom';
import useCheckUserStatus from 'hooks/authChecker';

const AuthLayer = ({ children }: { children: JSX.Element}):JSX.Element => {
  const location = useLocation();
  const isLogged = useCheckUserStatus();
  if (!isLogged) {
    console.log('No logged',isLogged)
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default AuthLayer