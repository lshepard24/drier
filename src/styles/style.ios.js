import { StyleSheet } from 'react-native';

export default StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8cc9ff'
  },
  inputContainer: {
    width: 150,
    backgroundColor: '#d3e3fc',
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 2,
    borderRadius: 18
  },
  smallButton: {
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: '#72b6ff',
    paddingHorizontal: 6,
    paddingVertical: 4,
    margin: 6,
    fontFamily: 'Arimo',
  },
  normalButton: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#72b6ff',
    fontFamily: 'Arimo',
    margin: 10,
    padding: 4
  },
  smallText: {
    fontFamily: 'Arimo',
    fontSize: 14,
    color: '#fff',
    margin: 2
  },
  normalText: {
    fontFamily: 'Arimo',
    color: '#fff',
    fontSize: 16,
    margin: 6
  },
  logo: {
    marginBottom: 16,
    width: 220,
    height: 260,
    alignItems: 'center'
  }
});