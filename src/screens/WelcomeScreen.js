import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';
s;
const WelcomeScreen = () => {
  const [state, setstate] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{backgroundColor: 'blue'}}>Keep your data safely</Text>
      <View></View>
      <Button
        title="Create account"
        onPress={() => console.log('Account creation')}
        color="#606070"
      />
      <Button
        title="Login"
        onPress={() => console.log('Login request')}
        color="#606070"
      />
    </SafeAreaView>
  );
};
export default WelcomeScreen;
