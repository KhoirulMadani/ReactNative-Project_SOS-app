import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
const Kurikulum = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* Status bar */}
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent
      />
      {/* Header */}
      <ImageBackground
        source={require('../../assets/images/backgroundImageKurikulum.png')}
        style={{
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(35),
          paddingTop: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: responsiveScreenWidth(5),
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
            <Icon
              name="chevron-back"
              color={'white'}
              size={responsiveScreenWidth(8)}
            />
          </TouchableOpacity>
          <Text style={[styles.Title]}>Kurikulum</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/imageKurikulum.png')}
            style={{
              resizeMode: 'contain',
              width: responsiveScreenWidth(90),
              height: responsiveScreenHeight(23),
            }}
          />
        </View>
      </ImageBackground>
      {/* Title Daftar materi */}
      <View style={styles.Container_daftar_Materi}>
        <Text style={styles.text_daftarMateri}>DAFTAR MATERI</Text>
      </View>
      {/* List Materi */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Container_Listmateri}>
          <DaftarMateri number={1} namaMateri="Daftar Materi Pekan 1" />
          <DaftarMateri
            number={2}
            namaMateri="Daftar Materi Pekan 1"
            style={{marginTop: 20}}
          />
          <DaftarMateri
            number={3}
            namaMateri="Daftar Materi Pekan 2"
            style={{marginTop: 20}}
          />
          <DaftarMateri
            number={4}
            namaMateri="Daftar Materi Pekan 3"
            style={{marginTop: 20}}
          />
          <DaftarMateri
            number={5}
            namaMateri="Daftar Materi Pekan 4"
            style={{marginTop: 20}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    marginLeft: responsiveScreenWidth(3),
    fontSize: responsiveScreenFontSize(2.4),
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    top: 2,
  },
  Container_daftar_Materi: {
    // backgroundColor: 'red',
    paddingLeft: responsiveScreenWidth(7),
    paddingVertical: responsiveScreenHeight(2),
  },
  text_daftarMateri: {
    fontSize: responsiveScreenFontSize(2.2),
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 0.8,
  },
  Container_Listmateri: {
    // backgroundColor: 'red',
    width: '100%',
    height: '60%',
    alignItems: 'center',
    paddingTop: 25,
  },
});

const DaftarMateri = ({number, namaMateri, style}) => {
  return (
    <View
      style={[
        style,
        {
          padding: responsiveScreenWidth(4),
          borderRadius: 15,
          flexDirection: 'row',
          backgroundColor: '#008C74',
          width: '90%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        },
      ]}>
      <View
        style={{
          alignItems: 'center',
          borderWidth: 2,
          borderRadius: 15,
          paddingHorizontal: responsiveScreenWidth(5),
          paddingVertical: responsiveScreenHeight(0.4),
          backgroundColor: 'white',
        }}>
        <Text style={{color: 'black', fontSize: responsiveScreenFontSize(1.8)}}>
          Pekan
        </Text>
        <Text style={{color: 'black'}}>{number}</Text>
      </View>
      <View
        style={{
          width: '78%',
          //   backgroundColor: 'purple',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'PortLligatSans-Regular',
            fontSize: responsiveScreenFontSize(2.3),
            color: 'white',
          }}>
          {namaMateri}
        </Text>
      </View>
    </View>
  );
};
export default Kurikulum;
