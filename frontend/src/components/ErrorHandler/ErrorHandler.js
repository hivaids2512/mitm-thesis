require('babel-polyfill');
import React, { Component } from 'react';

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, info) {
    var willRedirect = process.env.NODE_ENV === 'production' ? true : false;
    if (willRedirect) {
      window.location = '#/500';
      location.reload();
    }
  }

  render() {
    return this.props.children;
  }
}

export default ErrorHandler;