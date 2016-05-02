import React, { Component } from 'react';
import { render } from 'react-dom';

import Hello from './components/Hello';

class App extends Component {
  render () {
    return <Hello who="React" />;
  }
}

// This ReactDOM.render function is what actually mounts our App component onto
// the DOM.  The result of the App component's render function will appear in the
// indicated element.  Here, we mount to the element in index.html with id='app'.
render (
  <App/>,
  document.getElementById ('app')
);
