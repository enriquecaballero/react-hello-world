import React, { PropTypes } from 'react';

class Hello extends React.Component {
  render () {
    return (
      <span>Hello, { this.props.who }!</span>
    );
  }
}

/** Define the type of each expected/allowed prop. **/
Hello.propTypes = {
  who: PropTypes.string.isRequired
};

/** 
  * This makes this component available via one of:
  * var Hello = require('Hello').default;
  * import Hello from 'Hello';
  * (with the correct paths, of course)
  **/
export default Hello;
