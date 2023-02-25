import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const Login = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.Container}>
      <StatusBar hidden />
      {/* HEADER */}
      <View style={styles.Header}>
        <Image
          source={require('../../assets/Icons/layer1.png')}
          style={styles.logoHeader}
        />
        <View style={styles.isiHeader}>
          <Text
            style={styles.textWelcome}
            onPress={() => navigation.replace('dashboard')}>
            Welcome
          </Text>
          <Text style={styles.textSignUp}>Sign In</Text>
        </View>
      </View>
      {/* BODY */}
      <View style={styles.Content}>
        {/* Form SignIn */}
        <View style={styles.formSignIn}>
          {/* Email */}
          <View
            style={{
              // backgroundColor: 'green',
              height: responsiveScreenHeight(10),
              justifyContent: 'center',
            }}>
            <Text style={styles.textTiltle}>Email</Text>
            <View style={styles.TextInput}>
              <Icon
                name="email-outline"
                size={responsiveScreenWidth(7)}
                color={'#999999'}
                style={{marginTop: 15}}
              />
              <TextInput
                style={styles.STextInput}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          {/* Password */}
          <View
            style={{
              // backgroundColor: 'green',
              height: responsiveScreenHeight(10),
              justifyContent: 'center',
            }}>
            <Text style={styles.textTiltle}>Password</Text>
            <View style={styles.TextInputPW}>
              <Icon
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                }}
                name="lock"
                size={responsiveScreenWidth(7)}
                color={'#999999'}
                style={{marginTop: 15}}
              />
              <TextInput
                secureTextEntry={secureTextEntry}
                style={styles.STextInput}
                underlineColorAndroid="transparent"
              />
              <TouchableOpacity
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                }}>
                <Icon
                  name="eye-outline"
                  size={responsiveScreenWidth(7)}
                  color={'#999999'}
                  style={{marginTop: 15}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* View Button Action */}
        <View style={styles.ViewBTN}>
          {/* Rememeber Me */}
          <View style={styles.viewRemember}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => {
                setToggleCheckBox(newValue);
              }}
              tintColors={{true: '#008C74', false: '#999999'}}
            />
            <Text
              style={{
                color: '#008C74',
                fontFamily: 'Poppins-SemiBold',
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              Remember Me !
            </Text>
          </View>
          {/* Sign IN */}
          <View style={styles.viewTombol}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('dashboard')}>
              <Text style={styles.textSignIn}>Sign In</Text>
            </TouchableOpacity>
          </View>
          {/* Forget Password */}
          <View style={styles.viewForget}>
            <TouchableOpacity>
              <Text style={styles.textForget}>Forget Password ? </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* View Buat Akun */}
        <View style={styles.viewSignUp}>
          <Text style={styles.textBuatAkun}>Belum Punya Akun ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={styles.textDaftar}>Daftar !</Text>

          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#28AFEF',
    // padding: 20,
  },
  Header: {
    width: '100%',
    height: responsiveScreenHeight(28),
    backgroundColor: '#008C74',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: responsiveScreenWidth(10),
  },
  logoHeader: {
    resizeMode: 'contain',
    width: responsiveScreenWidth(25),
    height: responsiveScreenHeight(20),
    left: -15,
    bottom: 10,
  },
  isiHeader: {
    // backgroundColor: 'blue',
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(10),
    justifyContent: 'space-evenly',
    left: 2,
    bottom: 20,
  },
  textWelcome: {
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  textSignUp: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    top: 10,
  },
  Content: {
    backgroundColor: 'white',
    height: responsiveScreenHeight(100),
    borderTopRightRadius: responsiveWidth(10),
    borderTopLeftRadius: responsiveWidth(10),
    bottom: responsiveScreenHeight(4),
  },
  formSignIn: {
    justifyContent: 'center',
    top: responsiveScreenHeight(1),
    // backgroundColor: 'yellow',
    height: responsiveScreenHeight(30),
    justifyContent: 'space-evenly',
    padding: 20,
  },
  textTiltle: {
    color: '#999999',
    fontFamily: 'Poppins-SemiBold',
    fontSize: responsiveScreenFontSize(1.5),
    top: responsiveScreenHeight(2),
  },
  TextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderBottomColor: '#999999',
    borderBottomWidth: responsiveScreenWidth(0.5),
    zIndex: -1,
    height: responsiveScreenHeight(8),
  },
  TextInputPW: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderBottomColor: '#999999',
    borderBottomWidth: responsiveScreenWidth(0.5),

    height: responsiveScreenHeight(8),
  },
  STextInput: {
    // backgroundColor: 'yellow',
    top: 10,
    left: 5,
    color: 'black',
    width: '85%',
    height: responsiveScreenHeight(10),
    fontFamily: 'Poppins-SemiBold',
  },
  ViewBTN: {
    // backgroundColor: 'blue',
    height: responsiveScreenHeight(25),
    justifyContent: 'space-between',
  },
  viewRemember: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: responsiveScreenWidth(4),
    height: responsiveScreenHeight(5),
  },
  viewTombol: {
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveScreenHeight(10),
  },
  button: {
    backgroundColor: '#008C74',
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(6.5),
    borderRadius: responsiveScreenWidth(3),
  },
  textSignIn: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(3),
  },
  viewForget: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: responsiveScreenHeight(5),
    paddingRight: responsiveScreenWidth(10),
  },
  textForget: {
    fontSize: responsiveScreenFontSize(1.7),
    color: '#999999',
    fontFamily: 'Poppins-SemiBold',
  },
  viewSignUp: {
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: responsiveScreenHeight(6),
    top: responsiveScreenHeight(8),
  },
  textBuatAkun: {
    fontSize: responsiveScreenFontSize(1.7),
    color: '#999999',
    fontFamily: 'Poppins-SemiBold',
  },
  textDaftar: {
    color: '#008C74',
    fontSize: responsiveScreenFontSize(1.7),
    fontFamily: 'Poppins-SemiBold',
    left: responsiveScreenWidth(2),
  },
});
export default Login;
