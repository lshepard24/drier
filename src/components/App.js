import { createStackNavigator, createAppContainer } from 'react-navigation';
import { 
  Home, 
  Login, 
  Signup } from './index';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
  Signup: {screen: Signup}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;