import { Outlet ,useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import useCheckUserStatus from 'hooks/authChecker';

const Layout = ():JSX.Element => {
  const { signOut } = useAuthenticator((context) => [context.signOut,]);
  const isLogged = useCheckUserStatus();
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  
  return (
    <>
      <nav>
          {isLogged && (
            <>
            <Button onClick={() => navigate('/')}>Home</Button>
            <Button onClick={() => navigate('/GameBoard')}>
              First Protected Route
            </Button>
            <Button onClick={() => navigate('/ScoreBoard')}>
              Second Protected Route
            </Button>
            <Button onClick={() => logOut()}>Logout</Button>
            </>
          )}
        </nav>
        <Outlet />
    </>
  );
}

export default Layout;