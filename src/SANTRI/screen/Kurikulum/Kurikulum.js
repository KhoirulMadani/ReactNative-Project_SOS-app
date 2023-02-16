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
        source={require('../../assets/images/imagekurikulum.png')}
        style={{width: '100%', height: 250, paddingTop: 30}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
            <Image
              source={require('../../assets/Icons/back.png')}
              style={{width: 14.5, height: 24.5}}
            />
          </TouchableOpacity>
          <Text style={[styles.Title]}>Kurikulum</Text>
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
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  Container_daftar_Materi: {
    // backgroundColor: 'red',
    paddingLeft: 20,
    paddingTop: 20,
  },
  text_daftarMateri: {
    fontSize: 18,
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
          padding: 20,
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
          paddingHorizontal: 17,
          paddingVertical: 5,
          backgroundColor: 'white',
        }}>
        <Text>Pekan</Text>
        <Text>{number}</Text>
      </View>
      <View
        style={{
          width: '82%',
          //   backgroundColor: 'purple',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'PortLligatSans-Regular',
            fontSize: 18,
            color: 'white',
          }}>
          {namaMateri}
        </Text>
      </View>
    </View>
  );
};
export default Kurikulum;
