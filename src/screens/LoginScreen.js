import * as React from 'react';
import {TextInput, Button, StyleSheet, View, Alert} from 'react-native';
// import {login_user} from '../redux/actions/Login';
import axios from 'axios';
import userConstants from '../redux/types';
import {app_url} from '../CONSTANTS';
import {useDispatch} from 'react-redux';
const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
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
      <TextInput
        style={styles.btn}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.btn}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign in"
        style={styles.login}
        onPress={() => login_user(username, password)}
      />
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
  btn: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#20232a',
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
});
