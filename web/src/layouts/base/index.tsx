import React from 'react';
import Router from '../../router/Router';

export default function BaseLayout(props) {
  return (
    <div>
      <h1>base layout</h1>
      <Router routes={props.routes} />
    </div>
  )
}