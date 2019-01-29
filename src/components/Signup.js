'use strict';

import React, { Component } from 'react';
import {
  Text, 
  TextInput, 
  TouchableOpacity, 
  View } from 'react-native';
import styles from '../styles/style.ios';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputContainer}
          placeholder='Email'
          placeholderTextColor='#fff'
          />
        <TextInput
          style={styles.inputContainer}
          placeholder='Username'
          placeholderTextColor='#fff'
          />
        <TextInput
          style={styles.inputContainer}
          placeholder='Username'
          placeholderTextColor='#fff'
          />

        <TouchableOpacity>
          <Text style={styles.smallButton}>Log In</Text>
        </TouchableOpacity>

      </View>
    );
  }
}