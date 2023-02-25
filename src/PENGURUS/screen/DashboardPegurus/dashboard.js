import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  useResponsiveScreenWidth,
} from 'react-native-responsive-dimensions';
const DashboardPengurus = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* header */}
      <View style={styles.ContainerHeader}>
        <View style={styles.imageProfile}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Icons/User.png')}
              style={{
                width: responsiveScreenWidth(7.5),
                resizeMode: 'contain',
                height: responsiveScreenHeight(4.2),
              }}
            />
          </TouchableOpacity>
          <Text style={styles.namaUser}>Hai, Farhan Mahendra</Text>
        </View>
        <Image
          source={require('../../assets/Images/header.png')}
          style={{
            width: responsiveScreenWidth(60),
            resizeMode: 'contain',
            height: responsiveScreenHeight(30),
          }}
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
            width: responsiveScreenWidth(20),
            height: responsiveScreenHeight(10),
            backgroundColor: '#2BBFEE',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          styleImage={{
            width: responsiveScreenWidth(15),
            resizeMode: 'contain',
            height: responsiveScreenHeight(10),
          }}
          text1="Membaca"
          text2={'data Santri'}
        />
        <Fitures
          source={require('../../assets/Icons/Request.png')}
          styleImage={{
            width: responsiveScreenWidth(15),
            resizeMode: 'contain',
            height: responsiveScreenHeight(10),
          }}
          style={{
            width: responsiveScreenWidth(20),
            height: responsiveScreenHeight(10),
            backgroundColor: '#FFCEFE',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          text1="Request Karya"
        />
        <Fitures
          source={require('../../assets/Icons/Profile.png')}
          styleImage={{
            width: responsiveScreenWidth(28),
            resizeMode: 'contain',
            height: responsiveScreenHeight(10),
          }}
          style={{
            width: responsiveScreenWidth(20),
            height: responsiveScreenHeight(10),
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
    height: responsiveScreenHeight(40),
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
    marginTop: responsiveScreenHeight(6),
  },
  namaUser: {
    marginLeft: 15,
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  ContainerTitle: {
    // backgroundColor: 'red',
    marginTop: responsiveScreenHeight(3),
    paddingLeft: 20,
  },
  Title: {
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  ContainerFitures: {
    // backgroundColor: 'red',
    paddingTop: responsiveScreenHeight(2),
    paddingHorizontal: 25,
    marginTop: responsiveScreenHeight(2),
    height: '48%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
const Fitures = ({source, text1, text2, style, onPress, styleImage}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={style}>
          <Image source={source} style={styleImage} />
        </View>
        <Text
          style={{
            marginTop: 10,
            fontSize: responsiveScreenFontSize(1.7),
            fontFamily: 'Poppins-Bold',
          }}>
          {text1}
        </Text>
        <Text
          style={{
            fontSize: responsiveScreenFontSize(1.7),
            fontFamily: 'Poppins-Bold',
          }}>
          {text2}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default DashboardPengurus;
