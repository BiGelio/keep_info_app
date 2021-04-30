import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useSelector} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import {createStore} from 'redux';
import RegisterScreen from './src/screens/registerScreen';
import rootReducer from './src/redux/reducers/login';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ResetPassword from './src/screens/ResetPassword';
const store = createStore(rootReducer);
const Stack = createStackNavigator();
import HomeStack from './src/routes/stack';
const App = () => {
  // const state = useSelector(state => state.logedIn);
  const [state, setState] = useState(true);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome">
          {state ? (
            <>
              <Stack.Screen name="welcome" component={WelcomeScreen} />
              <Stack.Screen name="SignIn" component={LoginScreen} />
              <Stack.Screen name="SignUp" component={RegisterScreen} />
              <Stack.Screen name="ResetPassword" component={ResetPassword} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
