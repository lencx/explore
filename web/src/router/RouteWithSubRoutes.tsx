/**
 * @author: lencx
 * @create_at: Jul 04, 2020
 */

import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { CONFIG } from '../routes';
import { RouteOption } from './types';

const RouteWithSubRoutes = (route: RouteOption) => {
  /** Authenticated flag */
  const authenticated: boolean = route.store.authenticated;

  return (
    <Suspense fallback={route.fallback || <div>loading...</div>}>
      <Route
        path={route.path}
        render={(props) => {
          const comp = route.component &&
                <route.component {...props} routes={route.routes} store={route.store} />;
          return route.redirect
            ? <Redirect to={route.redirect}/>
            : route.private
              ? (authenticated ? comp : <Redirect to={CONFIG.authRedirect} />)
              : comp
        }}
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;