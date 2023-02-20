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

const RequestKarya = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent />

      {/* HEADER */}
      <View style={styles.header}>
        <ImageBackground
          source={require('../../assets/images/requestkarya.png')}
          style={styles.image}>
          <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
            <Image
              source={require('../../assets/Icons/back.png')}
              style={styles.iconback}
            />
          </TouchableOpacity>
          <Text style={styles.textheader}>RequestKarya</Text>
        </ImageBackground>
      </View>
      {/* FORM PORTOFOLIO */}
      <View style={styles.formPortopolio}>
        <Text style={styles.text1}>Masukkan Detail Portolio Anda :</Text>
        {/* View Form Portofolio */}
        <View style={styles.conterForm}>
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

        {/* BUTTON */}
        <View style={styles.viewbtnKirim}>
          <TouchableOpacity style={styles.btnKirim}>
            <Text style={styles.text3}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RequestKarya;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // flexDirection: 'column',
  },
  header: {
    backgroundColor: 'blue',
    width: '100%',
    // height: 270,
  },
  image: {
    width: '100%',
    height: 285,
  },
  iconback: {
    width: 11.04,
    height: 19.28,
    left: 25,
    top: 38,
  },
  textheader: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    left: 70,
    top: 16,
  },
  formPortopolio: {
    // backgroundColor: 'red',
    width: '100%',
    height: 462,
    padding: 25,
  },
  text1: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  conterForm: {
    // backgroundColor: 'blue',
    width: '100%',
    height: 200,
    marginTop: 17,
    justifyContent: 'space-evenly',
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
  viewbtnKirim: {
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
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
