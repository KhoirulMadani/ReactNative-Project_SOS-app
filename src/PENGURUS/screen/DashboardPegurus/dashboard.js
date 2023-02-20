import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const DashboardPengurus = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* header */}
      <View style={styles.ContainerHeader}>
        <View style={styles.imageProfile}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Icons/User.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <Text style={styles.namaUser}>Hai, Farhan Mahendra</Text>
        </View>
        <Image
          source={require('../../assets/Images/header.png')}
          style={{width: 230, height: 230}}
        />
      </View>
      {/* Title */}
      <View style={styles.ContainerTitle}>
        <Text style={styles.Title}>Dashboard Pengurus</Text>
      </View>
      {/* Container fitures */}
      <View style={styles.ContainerFitures}>
        <Fitures
          onPress={() => navigation.navigate('listdatasantri')}
          source={require('../../assets/Icons/membacaDataSantri.png')}
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#2BBFEE',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          text1="Membaca"
          text2={'data Santri'}
        />
        <Fitures
          source={require('../../assets/Icons/Request.png')}
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#FFCEFE',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          text1="Request Karya"
        />
        <Fitures
          source={require('../../assets/Icons/Profile.png')}
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#B6E2A1',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          text1="Profil Saya"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ContainerHeader: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },
  imageProfile: {
    // backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 25,
    marginTop: 40,
  },
  namaUser: {
    marginLeft: 15,
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  ContainerTitle: {
    // backgroundColor: 'red',
    marginTop: 25,
    paddingLeft: 20,
  },
  Title: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  ContainerFitures: {
    // backgroundColor: 'red',
    paddingTop: 20,
    paddingHorizontal: 25,
    marginTop: 20,
    height: '50%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
const Fitures = ({source, text1, text2, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={style}>
          <Image source={source} style={{width: 60, height: 60}} />
        </View>
        <Text style={{marginTop: 10, fontSize: 13, fontFamily: 'Poppins-Bold'}}>
          {text1}
        </Text>
        <Text style={{fontSize: 13, fontFamily: 'Poppins-Bold'}}>{text2}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default DashboardPengurus;
