/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './components/';

const App = () => <Hello who="React" />;

ReactDOM.render (
  <App />,
  document.getElementById ('app')
);
