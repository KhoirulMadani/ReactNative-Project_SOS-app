import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Portofolio = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar hidden />
      {/* HEADER */}
      <View style={styles.header}>
        {/* Title */}
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Icon name="chevron-left" size={40} color={'white'} />
          </TouchableOpacity>
          <Text style={styles.textheader}>Portofolio</Text>
        </View>
        {/* Image */}
        <View style={styles.viewImage}>
          <Image
            source={require('../../../assets/images/portofolioheader.png')}
            style={styles.sizeImage}
          />
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.daftar}>Daftar Portofolio :</Text>
      </View>
      <ScrollView>
        <View style={styles.body2}>
          <Karyaku judul={'My Quran App'} />
          <Karyaku judul={'ToDo List App'} />
          <Karyaku judul={'E-Commerce'} />
          <Karyaku judul={'Calculator'} />
          <Karyaku judul={'My Web'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Portofolio;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#008C74',
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(30),
  },
  title: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveScreenWidth(50),
    zIndex: 1,
    top: responsiveScreenHeight(1),
    left: 20,
    alignItems: 'center',
    // padding: 2,
  },
  textheader: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: responsiveFontSize(2.3),
    top: 2,
    left: 15,
  },
  viewImage: {
    // backgroundColor: 'red',
    top: responsiveScreenHeight(-1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeImage: {
    resizeMode: 'cover',
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(25),
  },
  body: {
    backgroundColor: 'white',
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(8),
    justifyContent: 'center',
    paddingLeft: responsiveScreenWidth(5),
  },
  daftar: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    fontSize: responsiveScreenFontSize(2.1),
  },
  body2: {
    backgroundColor: 'white',
    width: responsiveScreenWidth(100),
    // height: responsiveScreenHeight(70),
    alignItems: 'center',
  },
});

const Karyaku = ({judul}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#008C74',
        width: responsiveScreenWidth(88),
        height: responsiveScreenHeight(6.5),
        marginTop: responsiveScreenHeight(2),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontFamily: 'Poppins-SemiBold',
          fontSize: responsiveFontSize(2.1),
        }}>
        {judul}
      </Text>
    </TouchableOpacity>
  );
};
