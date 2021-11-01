import React from 'react';
import Button from '../../components/Button';
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithPopup } = useAuth0();

  return (
    <div className="fit center">
      <Button onClick={() => loginWithPopup()} label="Login" />
    </div>
  );
};

export default Login;
