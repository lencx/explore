import React from 'react';
import { Link } from 'react-router-dom';
import Router from '/@route/Router';
import { CONFIG } from '/@/routes';

export default function Layout(props) {
  return (
    <div>
      <ul>
        <li>
          {CONFIG.authenticated
            ? <Link to='/signout'> Sign Out </Link>
            : <Link to='/login'> Login </Link>}
        </li>
        <li><Link to='/protected'> Protected </Link></li>
      </ul>
      <Router routes={props.routes} />
    </div>
  )
}
