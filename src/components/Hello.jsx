/* @flow */

import React, { Component, PropTypes } from 'react';

class Hello extends Component {
  static propTypes = {
    who: PropTypes.string.isRequired
  }
  render () {
    return <span>
      Hello, { this.props.who }!
    </span>;
  }
}

export default Hello;
