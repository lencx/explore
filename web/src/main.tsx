import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import dva from '/@core/dva';
import Router from '/@route/Router';
import routesConfig from '/@/routes';
import models from '/@/models';
import '/@/global.css';

const dvaApp = dva.createApp({
  initialState: {},
  models,
});

const store = dvaApp.getStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router routes={routesConfig} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
