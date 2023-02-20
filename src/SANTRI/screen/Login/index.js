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

const Login = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      {/* HEADER */}
      <View style={styles.Header}>
        <Image
          source={require('../../assets/Icons/layer1.png')}
          style={styles.logoHeader}
        />
        <View style={styles.isiHeader}>
          <Text style={styles.textWelcome}>Welcome</Text>
          <Text style={styles.textSignUp}>Sign In</Text>
        </View>
      </View>
      {/* BODY*/}
      <View style={styles.Container_content}>
        {/* Form SignIn */}
        <View style={styles.formSignIn}>
          {/* Email */}
          <View>
            <Text style={styles.textTiltle}>Email</Text>
            <View style={styles.TextInput}>
              <Icon
                name="email-outline"
                size={26}
                color={'#999999'}
                style={{marginTop: 15}}
              />
              <TextInput
                style={styles.STextInput}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          {/* Kata Sandi */}
          <View>
            <Text style={styles.textTiltle}>Kata Sandi</Text>
            <View style={styles.TextInput2}>
              <Icon
                name="lock-outline"
                size={29}
                color={'#999999'}
                style={{marginTop: 15}}
              />
              <TextInput
                style={styles.STextInput}
                secureTextEntry={secureTextEntry}
              />

              <TouchableOpacity
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    width: 50,
                    height: 40,
                    top: 10,
                  }}>
                  <Icon name="eye-off-outline" size={26} color={'#999999'} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* VIEW 2*/}
        <View style={styles.View_2}>
          {/* Remember Me */}
          <View style={styles.rememberMe}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => {
                setToggleCheckBox(newValue);
              }}
              tintColors={{true: '#008C74', false: '#999999'}}
            />
            <Text style={styles.textRememberMe}>Remember Me !</Text>
          </View>
          {/* Button */}
          <TouchableOpacity onPress={() => navigation.replace('dashboard')}>
            <View style={styles.button_masuk}>
              <Text style={styles.textbtn}>Sign in</Text>
            </View>
          </TouchableOpacity>
          {/* lupa akun and blm punya akun */}
          <View style={{left: 100}}>
            <TouchableOpacity>
              <Text style={styles.textLupaAkun}>Lupa Email / Kata sandi ?</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* View 3  */}
        <View style={styles.View_3}>
          <Text style={styles.textDaftarAkun}>Belum punya akun ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={styles.textDaftar}>Daftar</Text>
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
    height: 280,
    backgroundColor: '#008C74',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoHeader: {
    width: 102,
    height: 111,
    left: -15,
    bottom: 10,
  },
  isiHeader: {
    // backgroundColor: 'blue',
    width: 150,
    height: 100,
    justifyContent: 'space-evenly',
    left: -15,
    bottom: 32,
  },
  textWelcome: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  textSignUp: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    top: 10,
  },
  Container_content: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 15,
    padding: 5,
    bottom: 30,
  },
  formSignIn: {
    justifyContent: 'center',
    top: 50,
    // backgroundColor: 'red',
    height: 260,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textTiltle: {
    color: '#999999',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  TextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'red',
    borderBottomColor: '#999999',
    borderBottomWidth: 2,
  },
  STextInput: {
    // backgroundColor: 'yellow',
    top: 10,
    left: 5,
    color: 'black',
    width: '85%',
    height: 60,
    fontFamily: 'Poppins-SemiBold',
  },
  TextInput2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '88%',
    borderBottomColor: '#999999',
    borderBottomWidth: 2,
    // backgroundColor: 'red',
  },
  View_2: {
    height: 240,
    // backgroundColor: 'purple',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 50,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    left: -140,
    bottom: 20,
  },
  textRememberMe: {
    marginLeft: 5,
    color: '#008C74',
    fontFamily: 'Poppins-SemiBold',
  },
  button_masuk: {
    borderRadius: 10,
    backgroundColor: '#008C74',
    width: 350,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbtn: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  textLupaAkun: {
    color: '#999999',
    fontFamily: 'Poppins-SemiBold',
  },
  View_3: {
    marginTop: 180,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textDaftarAkun: {
    color: '#999999',
    fontFamily: 'Poppins-SemiBold',
  },
  textDaftar: {
    left: 10,
    color: '#008C74',
    fontFamily: 'Poppins-SemiBold',
  },
});
export default Login;
