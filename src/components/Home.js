import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Image source={require('../../assets/blue-logo.png')} style={styles.logo} />
        <TouchableOpacity
          onPress={() => navigate('Signup', {name: 'Signup'})}
        >
        <Text style={styles.signupButton}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Login', {name: 'Login'})}
        >
        <Text style={styles.loginButton}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8cc9ff',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center'
  },
  logo: {
    width: 260,
    height: 380,
    alignItems: 'center'
  },
  signupButton: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    margin: 4,
    // backgroundColor: '#77a6f7',
    color: '#fff',
    fontFamily: 'Arimo',
    width: 140
  },
  loginButton: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    margin: 6,
    fontFamily: 'Arimo',
    lineHeight: 8
  }
});