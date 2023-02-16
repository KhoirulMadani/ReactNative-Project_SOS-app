import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Hoshi} from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
const Login = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View style={styles.Container}>
      {/* Status bar */}
      <StatusBar hidden />
      {/* Header */}
      <View style={styles.Container_Header}>
        <View style={styles.Child_Header}>
          <Image
            source={require('../../assets/Icons/layer1.png')}
            style={{width: 99, height: 108}}
          />
          <View
            style={{
              height: '55%',
              marginLeft: 40,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Poppins-Bold',
                color: 'white',
              }}>
              Welcome
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-SemiBold',
                color: 'white',
              }}>
              Sign In
            </Text>
          </View>
        </View>
      </View>
      {/* Container background putih */}
      <View style={styles.Container_content}>
        {/* Area Text Input */}
        <View style={styles.Container_TextInput}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.TextInput}>
              <Icon
                name="email-outline"
                size={26}
                color={'black'}
                style={{marginTop: 15}}
              />
              <Hoshi
                label={'Email'}
                borderColor={'#28AFEF'}
                borderHeight={3}
                inputPadding={18}
                style={{width: '80%'}}
                inputStyle={{color: 'black'}}
                backgroundColor={'#F9F7F6'}
              />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.TextInput2}>
              <Icon
                name="lock-outline"
                size={29}
                color={'black'}
                style={{marginTop: 15}}
              />
              <Hoshi
                secureTextEntry={secureTextEntry}
                label={'Password'}
                borderColor={'#b76c94'}
                borderHeight={3}
                inputPadding={18}
                style={{width: '70%'}}
                inputStyle={{color: 'black'}}
                backgroundColor={'#F9F7F6'}
              />
              <View style={{marginLeft: 30}}>
                <TouchableOpacity
                  onPress={() => {
                    setSecureTextEntry(!secureTextEntry);
                  }}>
                  <Icon
                    name="eye-off-outline"
                    size={26}
                    color={'#3F3E3F'}
                    style={{marginTop: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Remember Me */}
          <View style={styles.rememberMe}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => {
                  setToggleCheckBox(newValue);
                }}
              />
              <Text
                style={{marginLeft: 5, fontWeight: '900', color: '#008C74'}}>
                Remember Me !
              </Text>
            </View>
            {/* lupa akun and blm punya akun */}
            <View style={styles.Container_bantuan}>
              <TouchableOpacity>
                <Text>Lupa Email / Kata sandi ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Button login */}
        <View style={styles.Container_login}>
          <TouchableOpacity onPress={() => navigation.replace('dashboard')}>
            <View style={styles.button_masuk}>
              <Text style={{color: 'white', fontSize: 18}}>Masuk</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Belum punya akun */}
        <View style={styles.Belum_Memiliki_akun}>
          <Text>Belum Memiliki akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={{color: '#008C74', fontSize: 15, fontWeight: '800'}}>
              {' '}
              Daftar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#2F8473',
  },
  Container_Header: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Child_Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    paddingRight: 40,
  },
  Container_content: {
    backgroundColor: '#ffff',
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 60,
  },
  Container_TextInput: {
    height: '50%',
    // backgroundColor: 'red',
  },
  TextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    width: '95%',
    paddingBottom: 10,
  },
  TextInput2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 15,
    width: '95%',
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingTop: 30,
  },
  Container_bantuan: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },
  Container_login: {
    height: '26%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_masuk: {
    paddingHorizontal: 120,
    borderRadius: 6,
    paddingVertical: 7,
    backgroundColor: '#008C74',
  },
  Belum_Memiliki_akun: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '25%',
    // backgroundColor: 'red',
    paddingBottom: 20,
  },
});
export default Login;
