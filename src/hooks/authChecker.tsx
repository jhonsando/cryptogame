import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';

const useCheckUserStatus = (): Boolean => {
  const { route } = useAuthenticator((context) => [context.route]);  
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(route === 'authenticated');
  console.log('route ',route)
  React.useEffect(()=>{
    if (route === 'authenticated') {
        setIsAuthenticated(true);
    }else{
        setIsAuthenticated(false);
    }
  },[route, setIsAuthenticated])

  

  return isAuthenticated;
}

export default useCheckUserStatus;