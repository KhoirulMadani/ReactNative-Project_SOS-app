import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
const Absensi = ({navigation}) => {
  const [scanQrCode, setScanQrcode] = useState(false);
  const onSuccess = e => {
    if (e.data === '#*PondokProgrammer$*$ukses.."') {
      Alert.alert('Absensi Sukses');
    } else {
      Alert.alert('Absensi Gagal');
    }

    // if (e.data.substring(0, 4) === 'http') {
    //   Linking.openURL(e.data).catch(err =>
    //     console.error('An error occured', err),
    //   );
    // }

    setScanQrcode(false);
  };
  return (
    <View style={styles.container}>
      {/* Status bar */}
      <StatusBar backgroundColor={'transparent'} translucent />
      {/* Back */}
      {scanQrCode ? (
        <></>
      ) : (
        <View style={{paddingLeft: responsiveScreenWidth(6)}}>
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
        {scanQrCode ? (
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
              height: scanQrCode ? '50%' : '40%',
              justifyContent: 'center',
            }}>
            {scanQrCode ? (
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
                Dapatkan Barcode Absensi pada mentor
              </Text>
            </View>
          </View>
          {/* Icon Scan */}
          <View style={styles.iconScan}>
            {scanQrCode ? (
              <TouchableOpacity
                onPress={() => setScanQrcode(false)}
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
              <TouchableOpacity onPress={() => setScanQrcode(true)}>
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
