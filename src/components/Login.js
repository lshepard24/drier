import React, { Component } from 'react';
import { 
  View, 
  Button } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <View>
        <Button
          title='Login' 
        />
      </View>
    );
  }
}