import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      in_dashboard();
    }, 3000);
  }, []);
  const in_dashboard = async () => {
    try {
      let result = await AsyncStorage.getItem('Token');
      result = JSON.parse(result);
      if (result == null || result == '') {
        navigation.replace('guest');
      } else if (result != null || result != '') {
        navigation.replace('dashboard');
      }
    } catch (e) {
      console.log('error pada saat cek token di screen guest', e.message);
    }
  };
  return (
    <View style={styles.Container}>
      <View style={styles.Container_Image}>
        <Image
          source={require('../../assets/images/26845027-removebg-preview.png')}
          style={{width: 200, height: 200}}
        />
      </View>
      <View style={styles.Container_Lottie}>
        <AnimatedLottieView
          source={require('../../assets/lottie/splash.json')}
          autoPlay={true}
          loop={true}
          style={{width: 100, height: 100}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Container_Image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  Container_Lottie: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
  },
});

export default Splash;
