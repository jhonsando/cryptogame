import React from 'react';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  View,
  Authenticator,
} from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router';

import useCheckUserStatus from 'hooks/authChecker'

const Login = ({ signOut }: any):JSX.Element => {
  const navigate = useNavigate();
  const isLogged = useCheckUserStatus()
  let from = '/';
  React.useEffect(() => {
    if (isLogged) {
      navigate(from,  { replace: true });
    }
  }, [isLogged, navigate, from]);
  return (
    <View className="auth-wrapper">
      <Authenticator></Authenticator>
    </View>
  );
}

export default withAuthenticator(Login);