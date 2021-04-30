import 'react-native-gesture-handler';
import React, {useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {Provider, useSelector} from 'react-redux';
// import HomeScreen from './src/screens/HomeScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import SettingsScreen from './src/screens/SettingsScreen';
import {createStore} from 'redux';
import rootReducer from './src/redux/reducers/login';
import WelcomeScreen from './src/screens/WelcomeScreen';
const store = createStore(rootReducer);
const Stack = createStackNavigator();
const App = () => {
  // const state = useSelector(state => state.logedIn);
  const [state, setState] = useState(true);
  return (
    <WelcomeScreen />

    // <Provider store={store}>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       {!state ? (
    //         <>
    //           <Stack.Screen
    //             name="Home"
    //             component={HomeScreen}
    //             options={{title: 'Welcome'}}
    //           />
    //           <Stack.Screen name="Profile" component={ProfileScreen} />
    //           <Stack.Screen name="Settings" component={SettingsScreen} />
    //         </>
    //       ) : (
    //         <>
    //           <Stack.Screen
    //             name="Login"
    //             component={LoginScreen}
    //             options={{
    //               title: 'Sign in',
    //             }}
    //           />
    //         </>
    //       )}
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>
  );
};

export default App;
