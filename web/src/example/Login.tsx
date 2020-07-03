import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CONFIG } from '/@/routes';

export default function Login() {
  const history = useHistory();
  const handleLogin = () => {
    CONFIG.authenticated = true;
    history.push('/protected');
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button><br />
      <Link to="/">Back To Home</Link>
    </div>
  )
}
