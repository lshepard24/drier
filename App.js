'use strict';

import React, { Component } from 'react';
import AppContainer from './src/components/AppContainer';

export default class App extends Component {
  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}
