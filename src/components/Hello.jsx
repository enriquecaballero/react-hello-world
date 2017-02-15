/* @flow */

import React, { PropTypes } from 'react';

const Hello = (props: any): React$Element<any> => {
  return <span>
    Hello, { props.who }!
  </span>;
};

Hello.propTypes = {
  who: PropTypes.string.isRequired
};

export default Hello;
