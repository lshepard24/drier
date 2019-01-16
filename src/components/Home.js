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
        <Text style={styles.text}> Stay Dry </Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigate('Signup', {name: 'Signup'})}
        >
        <Text> Get Started </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigate('Login', {name: 'Login'})}
        >
        <Text> Log In </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center'
  },
  logo: {
    width: 250,
    height: 250,
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center'
  },
  signupButton: {
    fontSize: 20,
    borderRadius: 4,
    textAlign: 'center',
    padding: 10,
    margin: 2,
    backgroundColor: '#8aaae5'
  },
  loginButton: {
    fontSize: 20,
    borderRadius: 4,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#fff',
    margin: 2
  }
});