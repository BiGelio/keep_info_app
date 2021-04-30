import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  const [state, setstate] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: '#00008B', fontSize: 24, marginLeft: 20}}>
        Keep data
      </Text>
      <View style={styles.gallery}>
        <View style={styles.galleryContainer}>
          <Image
            style={styles.img}
            source={require('../assets/866-536x354.jpeg')}
          />
        </View>
        <Text style={styles.textContent}>Keep your data safely</Text>
      </View>
      <View style={{marginBottom: 40}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={styles.signupButtonContainer}>
          <Text style={styles.signupButtonText}>Create account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default WelcomeScreen;
const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 50, marginRight: 50},
  gallery: {
    flex: 1,
    marginTop: 30,
    paddingRight: 20,
  },
  textContent: {textAlign: 'center', marginTop: 50, fontSize: 24},

  loginBtn: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  loginBtnText: {
    fontSize: 18,
    color: '#00008B',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  signupButtonContainer: {
    marginTop: 25,
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 40,
    marginRight: 40,
  },
  signupButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  img: {width: 350},
  galleryContainer: {
    padding: 20,
    marginRight: 20,
  },
});
