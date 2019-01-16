import React, { Component } from 'react';
import AppContainer from './src/components/App';

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