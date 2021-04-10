import React, {Component} from 'react';
import {Button} from 'react-native';
const SettingsScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
  );
};
export default SettingsScreen;
