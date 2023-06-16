import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

// screen
import Header from '../../Components/guest/header';
import ImageGuest from '../../Components/guest/image';
import Listdatasantri from '../../Components/guest/LIstDataSantri';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Guest = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* status bar */}
      <StatusBar style={{backgroundColor: 'tranparent'}} translucent />
      <Header onPress={() => navigation.navigate('login')} />
      <ImageGuest />
      <Listdatasantri />
    </View>
  );
};

export default Guest;
