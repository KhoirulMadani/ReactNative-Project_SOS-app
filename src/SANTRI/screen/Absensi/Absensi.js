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
        <View style={{paddingLeft: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
            <Image
              source={require('../../assets/Icons/back.png')}
              style={{width: 12.5, height: 22}}
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
              style={{width: 300, height: 300}}
            />
          </View>
        )}

        {/* open Scan */}
        <View style={styles.openScan}>
          {/* Line */}
          <View style={{alignItems: 'center', marginTop: 15}}>
            <Image
              source={require('../../assets/Icons/line.png')}
              style={{width: 40, height: 8}}
            />
          </View>
          {/* Title and description */}
          <View style={{marginLeft: 20, marginTop: 25}}>
            {scanQrCode ? (
              <Text style={styles.Title}>
                Mohon untuk Arahkan Kamera pada barcode !
              </Text>
            ) : (
              <Text style={styles.Title}>Absen Dengan Scan QR Code</Text>
            )}
            <View style={{marginTop: 10}}>
              <Text style={{fontFamily: 'Poppins-Medium', fontSize: 13}}>
                Lakukan abesensi saat masuk jam pelajaran dan
              </Text>
              <Text style={{fontFamily: 'Poppins-Medium', fontSize: 13}}>
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
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Poppins-SemiBoldItalic',
                    fontSize: 15,
                  }}>
                  Stop Scan ?
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setScanQrcode(true)}>
                <Image
                  source={require('../../assets/Icons/imageScan.png')}
                  style={{width: 50, height: 50}}
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
    paddingTop: 50,
  },

  openScan: {
    backgroundColor: 'white',
    height: 320,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  Title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  iconScan: {
    // backgroundColor: 'red',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Absensi;
