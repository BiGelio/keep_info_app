import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
const screens = {
  Home: {screen: HomeScreen},
  Welcome: {
    screen: WelcomeScreen,
  },
  Login: {
    screen: LoginScreen,
  },
};
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
