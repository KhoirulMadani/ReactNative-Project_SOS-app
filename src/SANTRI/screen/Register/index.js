import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

// Vector Icon
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon5 from 'react-native-vector-icons/EvilIcons';

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
  // const [items2, setItems2] = useState([
  //   {
  //     label: 'React Native',
  //     value: 'React Native',
  //   },
  //   {
  //     label: 'React JS',
  //     value: 'React JS',
  //   },
  //   {
  //     label: 'Laravel',
  //     value: 'Laravel',
  //   },
  //   {
  //     label: 'Golang',
  //     value: 'Golang',
  //   },
  //   {
  //     label: 'Node JS',
  //     value: 'Node JS',
  //   },
  // ]);
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
          <Text style={styles.textSignUp}>Sign Up</Text>
        </View>
      </View>
      {/* FORM REGISTER */}
      <View style={styles.Container_content}>
        {/* Dropdwon pilih Jurusan */}
        {/* <ScrollView> */}
        <View style={styles.container_input}>
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
                placeholderTextColor={'#999999'}
                style={styles.STextInput}
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
                placeholderTextColor={'#999999'}
                style={styles.STextInput}
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
                placeholderTextColor={'#999999'}
                style={styles.STextInput}
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
                placeholderTextColor={'#999999'}
                style={styles.STextInput}
                secureTextEntry={secureTextEntry}
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
                placeholder="Kode Masuk"
                placeholderTextColor={'#999999'}
                style={styles.STextInput}
                secureTextEntry={secureTextEntry2}
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
        {/* </ScrollView> */}
        {/* Button login */}
        <View style={styles.Container_Daftar}>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
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
    backgroundColor: '#008C74',
  },
  Header: {
    flex: 1,
    backgroundColor: '#008C74',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoHeader: {
    resizeMode: 'contain',
    width: responsiveScreenWidth(25),
    height: responsiveScreenHeight(25),
  },
  isiHeader: {
    width: responsiveScreenWidth(35),
    height: responsiveScreenHeight(15),
    justifyContent: 'space-evenly',
  },
  textWelcome: {
    fontSize: responsiveScreenFontSize(3),
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  textSignUp: {
    fontSize: responsiveScreenFontSize(2.5),
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
  Container_content: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
  STextInput: {
    color: 'black',
    width: '85%',
    left: 10,
    top: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#999999',
    fontFamily: 'Poppins-SemiBold',
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
  container_input: {
    flex: 5,
    justifyContent: 'center',
    paddingTop: 15,
  },
  Container_Daftar: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
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
