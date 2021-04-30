import * as React from 'react';
import {
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';
// import {login_user} from '../redux/actions/Login';
import axios from 'axios';
import userConstants from '../redux/types';
import {app_url} from '../CONSTANTS';
// import {useDispatch} from 'react-redux';
const LoginScreen = () => {
  // const dispatch = useDispatch();
  const [state, setState] = React.useState({username: '', password: ''});

  const login_user = (uname, pass) => {
    // dispatch({type: userConstants.LOGIN_REQUEST});
    const config = {
      method: 'post',
      url: app_url + '/login',
      data: {
        username: uname,
        password: pass,
      },
    };
    axios(config)
      .then(res => Alert.alert(res))
      .catch(err => Alert.alert(err.response));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.screenLabel}>
        Sign in or <Text style={{color: 'darkblue'}}>create account</Text>
      </Text>
      <View>
        <TextInput
          style={styles.field}
          placeholder="email or username"
          value={state.username}
          placeholderTextColor="#003f5c"
          onChangeText={text => setState({username: text})}
        />
      </View>
      <View>
        <TextInput
          style={styles.field}
          placeholder="Password"
          value={state.password}
          onChangeText={text => setState({password: text})}
          placeholderTextColor="#003f5c"
          secureTextEntry
        />
      </View>
      <View style={styles.resetContainer}>
        <Text style={styles.resetPassword}> Forgot password?</Text>
      </View>
      <TouchableOpacity
        onPress={console.log('hello there')}
        style={styles.loginBtn}>
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
  },
  field: {
    marginTop: 12,
    paddingVertical: 8,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  login: {
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 6,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
  },

  loginBtn: {
    marginTop: 25,
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  loginBtnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  resetPassword: {
    color: 'darkblue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resetContainer: {
    marginTop: 20,
  },
  screenLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
