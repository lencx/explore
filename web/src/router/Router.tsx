import React from 'react';
import { Switch } from 'react-router-dom';

import { RouteOption } from './types';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const Router: React.FC<{ route: RouteOption[] }> = ({ routes }) => {
  return (
    <Switch>
      {routes && routes.map((route: RouteOption) => <RouteWithSubRoutes key={route.path} {...route} />)}
    </Switch>
  );
};

export default Router;