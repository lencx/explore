import { lazy } from 'react';

export const CONFIG = {
  authenticated: false,
  authRedirect: '/login',
};

export default [
  {
    path: '/',
    component: lazy(() => import('./example/Layout')),
    routes: [
      {
        path: '/login',
        component: lazy(() => import('./example/Login')),
      },
      {
        path: '/signout',
        component: lazy(() => import('./example/SignOut')),
      },
      {
        path: '/protected',
        private: true,
        component: lazy(() => import('./example/Protected')),
      },
    ],
  },
];