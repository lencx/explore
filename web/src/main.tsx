/**
 * @author: lencx
 * @create_at: Jul 04, 2020
 */

import React from 'react';
import ReactDOM from 'react-dom';

import InitApp from '/@core/init';
import routesConfig from '/@/routes';

ReactDOM.render(<InitApp routes={routesConfig} />, document.getElementById('root'));
