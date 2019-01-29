'use strict';

import React, { Component } from 'react';
import { 
  Image,
  Text,
  TouchableOpacity,
  View } from 'react-native';
import styles from '../styles/style.ios';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    const props = this.props;
    console.log('the props', props)
    return (
      <View style={styles.container}>
      <Image source={require('../../assets/blue-logo.png')} style={styles.logo} />

        <TouchableOpacity style={styles.normalButton} onPress={() => navigate('Signup', {name: 'Signup'})}>
          <Text style={styles.normalText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallButton} onPress={() => navigate('Login', {name: 'Login'})}>
          <Text style={styles.smallText}>Log In</Text>
        </TouchableOpacity>

      </View>
    );
  }
};