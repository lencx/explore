/**
 * @author: lencx
 * @create_at: Jul 04, 2020
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Router from '/@route/Router';
import { connect } from 'dva';

import './style.scss';

function Layout(props) {
  return (
    <div>
      <nav>
        <li>
          {props.authenticated
            ? <Link to='/signout'> Sign Out </Link>
            : <Link to='/login'> Login </Link>}
        </li>
        <li><Link to='/protected'> Protected </Link></li>
      </nav>
      <div className='main'>
        <Router
          routes={props.routes}
          store={{
            authenticated: props.authenticated,
            dispatch: props.dispatch,
          }}
        />
      </div>
    </div>
  )
}

export default connect(state => state.global)(Layout)
