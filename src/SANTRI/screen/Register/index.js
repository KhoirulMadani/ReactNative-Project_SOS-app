import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Hoshi} from 'react-native-textinput-effects';
import DropDownPicker from 'react-native-dropdown-picker';

// Vector Icon
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon5 from 'react-native-vector-icons/EvilIcons';
import {TextInput} from 'react-native';

const Register = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntry2, setSecureTextEntry2] = useState(true);
  // Data Text Input
  const [namaJurusan, setNamaJurusan] = useState(null);
  const [namaFramework, setNamaFramework] = useState(null);
  const [namaLengkap, setNamaLengkap] = useState(null);
  const [nomorTelepon, setNomorTelepon] = useState(null);
  const [email, setEmail] = useState(null);
  const [kataSandi, setKataSandi] = useState(null);
  const [kodeMasuk, setKodeMasuk] = useState(null);
  // data dropdown pilih Jurusan
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {
      label: 'Mobile',
      value: 'Mobile',
      icon: () => <Icon3 name={'mobile'} color={'#999999'} size={30} />,
    },
    {
      label: 'Back End',
      value: 'BackEnd',
      icon: () => <Icon4 name={'database'} color={'#999999'} size={20} />,
    },
    {
      label: 'Front End',
      value: 'FrontEnd',
      icon: () => <Icon3 name={'code'} size={25} color="#999999" />,
    },
  ]);
  // data dropdown pilih framework
  const [open2, setOpen2] = useState(false);
  const [items2, setItems2] = useState([
    {
      label: 'React Native',
      value: 'React Native',
    },
    {
      label: 'React JS',
      value: 'React JS',
    },
    {
      label: 'Laravel',
      value: 'Laravel',
    },
    {
      label: 'Golang',
      value: 'Golang',
    },
    {
      label: 'Node JS',
      value: 'Node JS',
    },
  ]);
  return (
    <View style={styles.Container}>
      {/* HEADER */}
      <View style={styles.Header}>
        <Image
          source={require('../../assets/Icons/layer1.png')}
          style={styles.logoHeader}
        />
        <View style={styles.isiHeader}>
          <Text style={styles.textWelcome}>Welcome</Text>
          <Text style={styles.textSignUp}>Sign Up</Text>
        </View>
      </View>

      {/* Container background putih */}
      {/* FORM REGISTER */}
      <View style={styles.Container_content}>
        {/* data data */}
        <View style={styles.dataData}>
          {/* Dropdwon pilih Jurusan */}
          <View style={styles.Container_Dropdown}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon4
                name="clipboard"
                size={25}
                color="#999999"
                style={{marginRight: 10}}
              />
              <DropDownPicker
                placeholder="Pilih Jurusan"
                placeholderStyle={{color: '#999999'}}
                style={{borderColor: '#999999'}}
                textStyle={{
                  fontWeight: 'bold',
                  color: '#999999',
                }}
                labelStyle={{color: 'black'}}
                open={open}
                value={namaJurusan}
                items={items}
                setOpen={setOpen}
                setValue={setNamaJurusan}
                setItems={setItems}
              />
            </View>
          </View>
          {/* Dropdown pilih framework  */}
          <View style={styles.Container_Dropdown2}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon5
                name="gear"
                size={25}
                color="#999999"
                style={{marginRight: 10}}
              />
              <DropDownPicker
                placeholder="Pilih Framework"
                placeholderStyle={{color: '#999999'}}
                style={{borderColor: '#999999'}}
                textStyle={{
                  fontWeight: 'bold',
                  color: '#999999',
                }}
                labelStyle={{color: 'black'}}
                open={open2}
                value={namaFramework}
                items={items2}
                setOpen={setOpen2}
                setValue={setNamaFramework}
                setItems={setItems2}
              />
            </View>
          </View>

          {/* Area Text Input */}
          <View style={styles.Container_TextInput}>
            {/* Nama Lengkap */}
            <View style={{alignItems: 'center'}}>
              <View style={styles.TextInput}>
                <Icon3
                  name="user-o"
                  size={26}
                  color="#999999"
                  style={{marginTop: 15}}
                />
                <TextInput
                  placeholder="Nama Lengkap"
                  style={{
                    // backgroundColor: 'blue',
                    width: '85%',
                    left: 10,
                    top: 4,
                    borderBottomWidth: 2,
                    borderBottomColor: '#999999',
                    fontFamily: 'Poppins-SemiBold',
                  }}
                />
              </View>
            </View>
            {/* Nomor Telepon */}
            <View style={{alignItems: 'center'}}>
              <View style={styles.TextInput}>
                <Icon2
                  name="call-outline"
                  size={26}
                  color="#999999"
                  style={{marginTop: 15}}
                />
                <TextInput
                  placeholder="No Telepon"
                  style={{
                    // backgroundColor: 'blue',
                    width: '85%',
                    left: 6,
                    top: 4,
                    borderBottomWidth: 2,
                    fontFamily: 'Poppins-SemiBold',
                    borderBottomColor: '#999999',
                  }}
                />
              </View>
            </View>
            {/* Email */}
            <View style={{alignItems: 'center'}}>
              <View style={styles.TextInput}>
                <Icon
                  name="email-outline"
                  size={26}
                  color={'#999999'}
                  style={{marginTop: 15}}
                />
                <TextInput
                  placeholder="Email"
                  keyboardShouldPersistTaps="always"
                  style={{
                    // backgroundColor: 'blue',
                    width: '85%',
                    left: 6,
                    top: 4,
                    borderBottomWidth: 2,
                    borderBottomColor: '#999999',
                    fontFamily: 'Poppins-SemiBold',
                  }}
                />
              </View>
            </View>
            {/* Kata Sandi */}
            <View style={{alignItems: 'center'}}>
              <View style={styles.TextInput2}>
                <Icon
                  name="lock-outline"
                  size={29}
                  color={'#999999'}
                  style={{marginTop: 15}}
                />
                <TextInput
                  placeholder="Kata Sandi"
                  secureTextEntry={secureTextEntry}
                  style={{
                    // backgroundColor: 'blue',
                    width: '85%',
                    left: 4,
                    top: 4,
                    borderBottomWidth: 2,
                    borderBottomColor: '#999999',
                    fontFamily: 'Poppins-SemiBold',
                  }}
                />
                <View style={{right: 20, backgroundColor: 'white'}}>
                  <TouchableOpacity
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);
                    }}>
                    <Icon
                      name="eye-off-outline"
                      size={26}
                      color={'#999999'}
                      style={{marginTop: 20}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* Kode Masuk */}
          <View style={{alignItems: 'center'}}>
            <View style={styles.TextInput3}>
              <Icon
                name="lock-outline"
                size={29}
                color={'#999999'}
                style={{marginTop: 15}}
              />
              <TextInput
                keyboardAppearance="light"
                keyboardType="default"
                placeholder="Kode Masuk"
                secureTextEntry={secureTextEntry2}
                style={{
                  // backgroundColor: 'blue',
                  width: '85%',
                  left: 4,
                  top: 4,
                  borderBottomWidth: 2,
                  borderBottomColor: '#999999',
                  fontFamily: 'Poppins-SemiBold',
                }}
              />
              <View style={{right: 20, backgroundColor: 'white'}}>
                <TouchableOpacity
                  onPress={() => {
                    setSecureTextEntry2(!secureTextEntry2);
                  }}>
                  <Icon
                    name="eye-off-outline"
                    size={26}
                    color={'#999999'}
                    style={{marginTop: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Button login */}
        <View style={styles.Container_Daftar}>
          <TouchableOpacity>
            <View style={styles.button_masuk}>
              <Text style={styles.textbtn}>Sign Up</Text>
            </View>
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
    height: 250,
    backgroundColor: '#008C74',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoHeader: {
    width: 99,
    height: 108,
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
    height: 600,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 15,
    bottom: 0,
    position: 'absolute',
  },
  Container_backAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Title: {
    fontSize: 19,
    fontWeight: '900',
    color: 'black',
  },
  Container_Status: {
    height: 55,
    marginTop: 10,
    alignItems: 'center',
  },
  Container_Status2: {
    flexDirection: 'row',
    width: '87%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#DFE5DF',
    borderRadius: 10,
    padding: 5,
  },
  Container_login_status: {
    paddingVertical: 8,
    paddingHorizontal: 45,
  },
  Container_register_status: {
    backgroundColor: '#27D02A',
    paddingHorizontal: 45,
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 8,
    borderRadius: 8,
  },
  dataData: {
    justifyContent: 'center',
    top: 20,
    backgroundColor: 'white',
    height: 460,
  },
  Container_Dropdown: {
    zIndex: 3,
    paddingRight: 70,
    paddingLeft: 18,
  },
  Container_Dropdown2: {
    zIndex: 2,
    paddingRight: 70,
    paddingLeft: 18,
    marginTop: 15,
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
    width: '95%',
  },
  TextInput3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    width: '95%',
    marginTop: 10,
  },
  Container_Daftar: {
    height: '21%',
    justifyContent: 'center',
    alignItems: 'center',
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
});
export default Register;
