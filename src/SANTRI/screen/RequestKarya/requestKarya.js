import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const RequestKarya = ({navigation}) => (
  <View style={styles.container}>
    <StatusBar backgroundColor={'transparent'} translucent />

    {/* HEADER */}
    <View style={styles.header}>
      {/* Title */}
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
          <Image
            source={require('../../assets/Icons/back.png')}
            style={styles.iconback}
          />
        </TouchableOpacity>
        <Text style={styles.textheader}>Request Karya</Text>
      </View>
      {/* Image */}
      <View style={styles.viewImage}>
        <Image
          source={require('../../assets/images/requestkarya.png')}
          style={styles.sizeImage}
        />
      </View>
    </View>

    {/* BODY */}
    <View style={styles.body}>
      <View style={styles.body1}>
        <Text style={styles.text1}>Masukkan Detail Portolio Anda :</Text>
      </View>

      <View style={styles.body2}>
        {/* Judul Portofolio */}
        <View>
          <Text style={styles.text2}>Judul Portofolio</Text>
          <View style={styles.viewTextInput}>
            <Image
              source={require('../../assets/Icons/edit.png')}
              style={styles.iconEdit}
            />
            <TextInput style={styles.TextInput} />
          </View>
        </View>
        {/* Link Portofolio */}
        <View>
          <Text style={styles.text2}>Link Portofolio</Text>
          <View style={styles.viewTextInput}>
            <Image
              source={require('../../assets/Icons/globe.png')}
              style={styles.iconEdit}
            />
            <TextInput style={styles.TextInput} />
          </View>
        </View>
      </View>
      {/* tombol kirim */}
      <View style={styles.body3}>
        <TouchableOpacity style={styles.btnKirim}>
          <Text style={styles.text3}>Kirim</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default RequestKarya;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // flexDirection: 'column',
  },
  header: {
    backgroundColor: '#2F8473',
    width: '100%',
    height: responsiveScreenHeight(30),
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveScreenWidth(50),
    zIndex: 1,
    top: responsiveScreenHeight(3.7),
    left: 20,
    // padding: 2,
  },
  iconback: {
    width: 11.04,
    height: 19.28,
  },
  textheader: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: responsiveFontSize(2),
    top: 2,
    left: 15,
  },
  viewImage: {
    // backgroundColor: 'red',
    top: responsiveScreenHeight(-2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeImage: {
    resizeMode: 'cover',
    width: responsiveScreenWidth(70),
    height: responsiveScreenHeight(28),
  },
  body: {
    // backgroundColor: 'yellow',
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    alignItems: 'center',
  },
  body1: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    width: '100%',
    height: responsiveScreenHeight(10),
    paddingLeft: 15,
  },
  text1: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-SemiBold',
  },
  body2: {
    // backgroundColor: 'green',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(25),
    padding: 5,
    justifyContent: 'space-around',
  },
  text2: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  viewTextInput: {
    width: '100%',
    height: 48,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 6,
  },
  iconEdit: {
    width: 25,
    height: 25,
  },
  TextInput: {
    width: '90%',
    height: 48,
    // backgroundColor: 'green',
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    left: 8,
  },
  body3: {
    width: '100%',
    height: responsiveScreenHeight(8),
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnKirim: {
    width: 227,
    height: 46,
    backgroundColor: '#008C74',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text3: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});
