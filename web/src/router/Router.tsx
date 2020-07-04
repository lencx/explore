/**
 * @author: lencx
 * @create_at: Jul 04, 2020
 */

import React from 'react';
import { Switch } from 'react-router-dom';

import { RouteOption } from './types';
import RouteWithSubRoutes from './RouteWithSubRoutes';

interface RouterProps {
  routes: RouteOption[];
  store: {
    [key: string]: any;
  };
}

const Router: React.FC<RouterProps> = ({ routes, store = {} }) => {
  return (
    <Switch>
      {routes && routes.map((route: RouteOption) => <RouteWithSubRoutes key={route.path} {...route} store={store} />)}
    </Switch>
  );
};

export default Router;