import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Countdown from 'react-native-countdown-component';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import Geolocation from 'react-native-geolocation-service';
import haversine from 'haversine-distance';

const Absensi = ({navigation}) => {
  // useEffect
  React.useEffect(() => {
    requestGelocation();
  }, []);
  // useState
  const [syaratOpenCamera1, setSyaratOpenCamera1] = useState(false);
  const [syaratOpenCamera2, setSyaratOpenCamera2] = useState(false);
  const [waktuAbsensiDiBuka, setWaktuAbsensiDiBuka] = useState(false);
  let waktuPadaScreenAbsensi = 15;
  const [waktuYangDiTampilkan, setWaktuYangDiTampilkan] = useState(15);
  const [lokasiUser, setLokasiUser] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [lokasiAbsen, setLokasiAbsen] = useState({
    latitude: -7.996333,
    longitude: 110.295339,
  });

  // Permission Geolocation
  const requestGelocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Izinkan Access Lokasi',
          message: 'Izinkan Access lokasi untuk Proses Absensi!',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Access lokasi Di izinkan oleh user...');
        Geolocation.getCurrentPosition(
          lokasiSaatIni => {
            lokasiUser.latitude = lokasiSaatIni.coords.latitude;
            lokasiUser.longitude = lokasiSaatIni.coords.longitude;
            setLokasiUser(lokasiUser);
            console.log('Lokasi User Saat ini', lokasiUser);
            ukurJarak();
          },
          error =>
            Alert.alert(
              'Peringatan',
              'Harap Aktifkan Fitur Lokasi pada Hp anda untuk Proses absensi, Lalu refresh kembali.',
            ),
          {enableHighAccuracy: true, timeout: 30000, maximumAge: 1000},
        );
      } else {
        console.log('User tidak mengizinkan access lokasi !!!');
        Alert.alert(
          'Peringatan',
          'Karena anda tidak mengizinkan Akses lokasi, Proses Absensi tidak akan berlanjut.',
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };
  // Ukur Jarak
  const ukurJarak = () => {
    const jarakUserdenganAbsen = haversine(lokasiUser, lokasiAbsen);
    const jarakYangDitentukan = 200;
    if (jarakUserdenganAbsen > jarakYangDitentukan) {
      Alert.alert(
        'Peringatan',
        'Proses absensi tidak dapat dilanjutkan,\nPastikan Jarak anda dengan lokasi absensi kurang dari 20 meter.',
      );
    } else {
      setSyaratOpenCamera2(true);
      setWaktuAbsensiDiBuka(true);
      batasWaktu();
    }
  };
  // batas waktu ketika pada screen absensi
  const batasWaktu = () => {
    const hitungMundur = setInterval(function () {
      let nilaiSementara = waktuPadaScreenAbsensi;
      nilaiSementara -= 1;
      waktuPadaScreenAbsensi = nilaiSementara;
      setWaktuYangDiTampilkan(waktuPadaScreenAbsensi);
      console.log('waktu tersisa', nilaiSementara);
      if (waktuPadaScreenAbsensi === 0) {
        clearInterval(hitungMundur);
        navigation.navigate('dashboard');
      }
    }, 1000);
  };

  // Ketika Scan
  const onSuccess = e => {
    if (e.data === '#*PondokProgrammer$*$ukses..') {
      Alert.alert('Absensi Sukses');
    } else {
      Alert.alert('Absensi Gagal');
    }

    // if (e.data.substring(0, 4) === 'http') {
    //   Linking.openURL(e.data).catch(err =>
    //     console.error('An error occured', err),
    //   );
    // }

    setSyaratOpenCamera1(false);
    setSyaratOpenCamera2(false);
  };

  return (
    <View style={styles.container}>
      {/* Status bar */}
      <StatusBar backgroundColor={'transparent'} translucent />
      {/* Back */}
      {syaratOpenCamera1 === true && syaratOpenCamera2 === true ? (
        <></>
      ) : (
        <View
          style={{
            paddingLeft: responsiveScreenWidth(6),
            justifyContent: 'space-between',
            paddingRight: 30,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
            <Icon
              name="chevron-back"
              color={'white'}
              size={responsiveScreenWidth(8)}
            />
          </TouchableOpacity>
        </View>
      )}
      {/* Container scan */}
      <View style={{justifyContent: 'flex-end', height: '100%'}}>
        {/* aktif scan */}
        {syaratOpenCamera1 === true && syaratOpenCamera2 === true ? (
          <View style={{height: '60%'}}>
            <QRCodeScanner
              showMarker={true}
              markerStyle={{borderColor: 'blue'}}
              onRead={onSuccess}
              containerStyle
            />
          </View>
        ) : (
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/Scanning.png')}
              style={{
                width: responsiveScreenWidth(80),
                resizeMode: 'contain',
                height: responsiveScreenHeight(40),
              }}
            />
          </View>
        )}

        {/* open Scan */}
        <View style={styles.openScan}>
          {/* Line */}
          <View
            style={{
              alignItems: 'center',
              paddingTop: responsiveScreenHeight(2),
              height: '10%',
              // backgroundColor: 'yellow',
            }}>
            <Image
              source={require('../../assets/Icons/line.png')}
              style={{
                width: responsiveScreenWidth(12),
                height: responsiveScreenHeight(1.1),
                borderRadius: 20,
              }}
            />
          </View>
          {/* Title and description */}
          <View
            style={{
              marginLeft: 20,
              height:
                syaratOpenCamera1 === true && syaratOpenCamera2 === true
                  ? '50%'
                  : '40%',
              justifyContent: 'center',
            }}>
            {syaratOpenCamera1 === true && syaratOpenCamera2 === true ? (
              <Text style={styles.Title}>
                Mohon untuk Arahkan Kamera pada barcode !
              </Text>
            ) : (
              <Text style={styles.Title}>Absen Dengan Scan QR Code</Text>
            )}
            <View style={{marginTop: responsiveScreenHeight(1)}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: responsiveScreenFontSize(1.7),
                }}>
                Lakukan abesensi saat masuk jam pelajaran dan
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: responsiveScreenFontSize(1.7),
                }}>
                Dapatkan Barcode Absensi pada mentor.
              </Text>

              {waktuAbsensiDiBuka ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // backgroundColor: 'yellow',
                    marginTop: responsiveScreenHeight(1),
                  }}>
                  <Text
                    style={{
                      fontSize: responsiveScreenFontSize(1.8),
                      marginRight: responsiveScreenWidth(1),
                      fontWeight: '800',
                      color: 'black',
                      letterSpacing: responsiveScreenWidth(0.2),
                    }}>
                    Waktu absensi :
                  </Text>
                  <View
                    style={{
                      width: responsiveScreenWidth(9),
                      height: responsiveScreenHeight(4),
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'red',
                      marginLeft: responsiveScreenWidth(1),
                      borderRadius: 4,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '900',
                        fontSize: responsiveScreenFontSize(2),
                      }}>
                      {waktuYangDiTampilkan}
                    </Text>
                  </View>
                </View>
              ) : (
                <></>
              )}
            </View>
          </View>
          {/* Icon Scan */}
          <View style={styles.iconScan}>
            {syaratOpenCamera1 === true && syaratOpenCamera2 === true ? (
              <TouchableOpacity
                disabled={syaratOpenCamera2 == false}
                onPress={() => {
                  setSyaratOpenCamera1(false);
                }}
                style={{
                  borderRadius: 7,
                  backgroundColor: 'red',
                  paddingHorizontal: 18,
                  paddingVertical: 6,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Poppins-SemiBoldItalic',
                    fontSize: responsiveScreenFontSize(2),
                  }}>
                  Stop Scan ?
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setSyaratOpenCamera1(true);
                }}>
                <Image
                  source={require('../../assets/Icons/imageScan.png')}
                  style={{
                    width: responsiveScreenWidth(13),
                    resizeMode: 'contain',
                    height: responsiveScreenHeight(7),
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008C74',
    paddingTop: responsiveScreenHeight(7),
  },

  openScan: {
    backgroundColor: 'white',
    height: responsiveScreenHeight(43),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  Title: {
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  iconScan: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
  },
});
export default Absensi;
