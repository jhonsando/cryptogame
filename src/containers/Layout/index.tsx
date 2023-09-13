import { Outlet } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import useCheckUserStatus from 'hooks/authChecker';
import Footer from 'components/Footer';
import Header from 'components/Header';

const Layout = ():JSX.Element => {
  const { signOut } = useAuthenticator((context) => [context.signOut,]);
  const isLogged = useCheckUserStatus();
  
  return (
    <>
      <Header isLogged={isLogged} handleLogout={()=>signOut()} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;