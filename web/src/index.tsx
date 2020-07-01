/**
 * @author: lencx
 * @create_at: Jul 01, 2020
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'dva';

import dva from './dva';
import models from './models';

const dvaApp = dva.createApp({
  initialState:{},
  models,
})

const Test = connect(state => state)((props: any) => {
  return (
    <div>
      <button onClick={() => {
        props.dispatch({
          type: 'global/setState',
          payload: {
            count: props.global.count + 1,
          },
        })
      }}>+1 {'==>'} {props.global.count}</button>
    </div>
  )
})

// TODO: router
function RootComponent() {
  const store = dvaApp.getStore();
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  )
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
