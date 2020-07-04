/**
 * @author: lencx
 * @create_at: Jul 04, 2020
 */

import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { CONFIG } from '../routes';
import { RouteOption } from './types';

interface RouteWithSubRoutesProps extends RouteOption {
  store?: any;
}

const RouteWithSubRoutes = (routeProps: RouteWithSubRoutesProps) => {
  /** Authenticated flag */
  const authenticated: boolean = routeProps.store.authenticated;

  return (
    <Suspense fallback={routeProps.fallback || <div>loading...</div>}>
      <Route
        path={routeProps.path}
        render={(props) => {
          const comp = routeProps.component &&
                <routeProps.component {...props} routes={routeProps.routes} store={routeProps.store} />;
          return routeProps.redirect
            ? <Redirect to={routeProps.redirect}/>
            : routeProps.private
              ? (authenticated ? comp : <Redirect to={CONFIG.authRedirect} />)
              : comp
        }}
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;