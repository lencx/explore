import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CONFIG } from '/@/routes';

export default function SignOut() {
  const history = useHistory();
  const handleOut = () => {
    CONFIG.authenticated = false;
    history.push('/login');
  }
  return (
    <div>
      <h1>SignOut Page</h1>
      <button onClick={handleOut}>SignOut</button>
    </div>
  )
}
