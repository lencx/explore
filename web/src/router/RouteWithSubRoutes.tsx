import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { CONFIG } from '../routes';
import { RouteOption } from './types';

const RouteWithSubRoutes = (route: RouteOption) => {
  /** Authenticated flag */
  const authenticated: boolean = CONFIG.authenticated;

  return (
    <Suspense fallback={route.fallback || <div>loading...</div>}>
      <Route
        path={route.path}
        render={(props) =>
          route.redirect ? <Redirect to={route.redirect}/> :
            route.private ? (
              authenticated ? route.component &&
                <route.component {...props} routes={route.routes}/> : <Redirect to={CONFIG.authRedirect} />
            ) : route.component && <route.component {...props} routes={route.routes}/>
        }
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;