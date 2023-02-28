import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const PersonalData = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* STATUS BAR */}
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      {/* HEADER */}

      <View style={styles.header}>
        {/* title */}
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Image
              source={require('../../../assets/Icons/back.png')}
              style={styles.iconback}
            />
          </TouchableOpacity>
          <Text style={styles.textheader}>Personal Data</Text>
        </View>
        {/* foto profil */}
        <View style={styles.PF}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/Icons/tambah.png')}
              style={styles.tambahPF}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* BODY */}
      <View style={styles.isi}>
        {/* VIEW FORM */}
        <View style={styles.conterForm}>
          {/* Nama Lengkap*/}
          <View>
            <Text style={styles.text2}>Nama Lengkap</Text>
            <View style={styles.viewTextInput}>
              <Image
                source={require('../../../assets/Icons/User.png')}
                style={{width: 25, height: 25}}
              />
              <TextInput style={styles.TextInput} />
            </View>
          </View>
          {/* Email */}
          <View>
            <Text style={styles.text2}>Email</Text>
            <View style={styles.viewTextInput}>
              <Image
                source={require('../../../assets/Icons/email.png')}
                style={{width: 26.5, height: 26.5, bottom: 3}}
              />
              <TextInput style={styles.TextInput} />
            </View>
          </View>
          {/* Jurusan */}
          <View>
            <Text style={styles.text2}>Jurusan</Text>
            <View style={styles.viewTextInput}>
              <Image
                source={require('../../../assets/Icons/jurusan.png')}
                style={{width: 26, height: 18}}
              />
              <TextInput style={styles.TextInput} />
            </View>
          </View>
          {/* Telepon */}
          <View>
            <Text style={styles.text2}>No Telepon</Text>
            <View style={styles.viewTextInput}>
              <Image
                source={require('../../../assets/Icons/telepon.png')}
                style={{width: 17, height: 20, left: 5}}
              />
              <TextInput style={styles.TextInputTelepom} />
            </View>
          </View>
        </View>
        {/* Button */}
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity>
            <View style={styles.btnKirim}>
              <Text style={styles.text3}>Simpan Perubahan</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PersonalData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(25),
    backgroundColor: '#008C74',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(5),
    left: responsiveScreenWidth(-25),
    top: responsiveScreenWidth(8),
  },
  iconback: {
    width: 11.04,
    height: 21,
    top: -2.5,
  },
  textheader: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: responsiveFontSize(2.3),
  },
  PF: {
    width: 148,
    height: 148,
    backgroundColor: '#D9D9D9',
    top: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tambahPF: {
    width: 55,
    height: 55,
  },
  isi: {
    width: '100%',
    height: 497,
    backgroundColor: 'white',
    zIndex: -1,
  },
  conterForm: {
    // backgroundColor: 'blue',
    width: '100%',
    height: 400,
    marginTop: 35,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 40,
  },
  text2: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  viewTextInput: {
    width: 350,
    height: 45,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 6,
  },
  TextInput: {
    width: '90%',
    color: 'black',
    // backgroundColor: 'green',
    left: 5,
  },
  TextInputTelepom: {
    width: '90%',
    color: 'black',
    // backgroundColor: 'green',
    left: 14,
  },
  btnKirim: {
    width: 227,
    height: 46,
    backgroundColor: '#008C74',
    borderRadius: 10,
    // marginLeft: 52,
    // bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text3: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});
