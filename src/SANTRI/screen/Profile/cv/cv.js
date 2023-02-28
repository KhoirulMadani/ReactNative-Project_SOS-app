import {
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
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const CV = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar hidden />

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.title}>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Icon name="chevron-left" size={40} color={'white'} />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Curriculum Vitae</Text>
        </View>
      </View>
      {/* Body */}
      <ScrollView>
        <View style={styles.body}>
          <Cv title={'Technical Skill'} styleTextInput={styles.tenknikskill} />
          <Cv title={'Pendidikan'} styleTextInput={styles.pendidikan} />
          <Cv title={'Personal Background'} styleTextInput={styles.PB} />
          <Cv title={'Pengalaman'} styleTextInput={styles.pengalaman} />
        </View>
        {/* Button */}
        <View style={styles.body2}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Simpan Perubahan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#008C74',
    justifyContent: 'center',
    paddingLeft: responsiveScreenWidth(5),
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(8.5),
    zIndex: 1,
  },
  title: {
    // backgroundColor: 'red',
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(8),
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // padding: 5,
  },
  textTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: responsiveScreenFontSize(2),
    top: responsiveScreenHeight(0.2),
    left: responsiveScreenWidth(19),
  },
  body: {
    backgroundColor: 'white',
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(90),
    // height: responsiveScreenHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tenknikskill: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(10),
    padding: 5,
  },
  pendidikan: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(15),
    padding: 5,
  },
  PB: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(20),
    padding: 5,
  },
  pengalaman: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(25),
    padding: 5,
  },
  body2: {
    backgroundColor: 'white',
    height: responsiveScreenHeight(10),
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#008C74',
    width: responsiveScreenWidth(80),
    height: responsiveScreenHeight(6.5),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: responsiveScreenFontSize(2.1),
  },
});

const Cv = ({styleTextInput, title}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          fontSize: responsiveFontSize(1.9),
          color: 'black',
        }}>
        {title}
      </Text>
      <View style={styleTextInput}>
        <TextInput
          multiline
          style={{color: 'black', fontFamily: 'Poppins-SemiBold'}}
        />
      </View>
    </View>
  );
};

export default CV;
