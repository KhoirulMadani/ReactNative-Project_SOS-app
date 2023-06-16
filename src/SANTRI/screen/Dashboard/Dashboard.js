import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StatusBar,
  Image,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  useResponsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const Dashboard = ({navigation}) => {
  // call function waktu absen
  useEffect(() => {
    Batas_absen();
  }, []);
  // backhandler agar keluar aplikasi
  useEffect(() => {
    const handleBackButton = () => {
      Alert.alert(
        'Konfirmasi',
        'Apakah Anda yakin ingin keluar dari aplikasi?',
        [
          {text: 'Batal', style: 'cancel'},
          {text: 'Keluar', onPress: () => BackHandler.exitApp()},
        ],
      );
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);
  // Loading
  const [loading, setLoading] = useState(true);
  // batas Absen
  const [melewatiBatasAbsen, setMelewatiBatasAbsen] = useState(false);
  //  Waktu Absensi
  // Hari
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const Days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  // Bulan
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  // Tanggal
  const [date, setDate] = useState(new Date().getDate());
  // Tahun
  const [year, setYear] = useState(new Date().getFullYear());
  // Waktu buka absensi dan tutup absensi
  let Open_Absensi = new Date(
    `${Days[selectedDay]} ${Months[selectedMonth]} ${date} ${year} 22:34:00`,
  ).getTime();
  let Close_Absensi = new Date(
    `${Days[selectedDay]} ${Months[selectedMonth]} ${date} ${year} 00:00:00`,
  ).getTime();
  // Fungsi untuk batas absensi
  function Batas_absen() {
    setInterval(() => {
      const Saat_ini = new Date().getTime();
      // Waktu Absensi / open absensi
      if (Saat_ini >= Open_Absensi && Saat_ini <= Close_Absensi) {
        setMelewatiBatasAbsen(false);
        // console.log('Waktu Absensi');
      } else if (Saat_ini < Open_Absensi || Saat_ini > Close_Absensi) {
        setMelewatiBatasAbsen(true);
        // console.log('Waktu absensi telah habis');
      }
    }, 0.001);
  }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: responsiveScreenHeight(6.5),
        paddingHorizontal: useResponsiveScreenWidth(6),
      }}>
      {/* Status bar */}
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />

      {/* Header */}
      <View style={styles.Header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('dashboardpengurus')}>
          <Image
            source={require('../../assets/Icons/User.png')}
            style={{
              width: responsiveScreenWidth(9),
              resizeMode: 'contain',
              height: responsiveScreenHeight(5.1),
            }}
          />
        </TouchableOpacity>
        <Text style={[styles.NamaSantri]}>Hai, Khoirul Madani</Text>
      </View>
      {/* Absensi */}
      <View style={styles.Container_absensi}>
        <View style={styles.child_Absensi1}>
          <View>
            <Text style={styles.Title}>Sudah kah absen hari ini ?</Text>
            <Text style={styles.textAjakan}>
              Ayoo...kita bangun kedisiplinan
            </Text>
          </View>
          <Image
            source={require('../../assets/Icons/Scan1.png')}
            style={{
              width: responsiveScreenWidth(13),
              resizeMode: 'contain',
              height: responsiveScreenHeight(10),
            }}
          />
        </View>
        <View style={styles.child_Absensi2}>
          <Text style={styles.textArahan}>
            Tap tombol absensi di samping...
          </Text>

          <TouchableOpacity
            onPress={() => {
              if (melewatiBatasAbsen != true) {
                navigation.navigate('absensi');
              } else if (melewatiBatasAbsen != false) {
                Alert.alert(
                  'Peringatan',
                  'Maaf, Batas Waktu Absensi Telah Berakhir.\n\nSesi Absensi akan Dibuka lagi besok Jam 09:00 - 09:30',
                );
              }
            }}>
            <View style={styles.Tombol_absen}>
              <Image
                source={require('../../assets/Icons/Scan2.png')}
                style={{
                  width: responsiveScreenWidth(5),
                  resizeMode: 'contain',
                  height: responsiveScreenHeight(5),
                }}
              />
              <Text
                style={{
                  color: '#249ED3',
                  fontFamily: 'Poppins-Bold',
                  fontSize: responsiveScreenFontSize(1.7),
                  marginLeft: responsiveScreenWidth(2),
                }}>
                Absen
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Title */}
      <View style={styles.Container_Title}>
        <Text
          style={{
            fontSize: responsiveScreenFontSize(2.3),
            fontFamily: 'Poppins-SemiBold',
            color: '#000',
          }}>
          Dashboard Santri
        </Text>
      </View>

      {/* Bagian Fitur */}
      <View style={styles.Container_Fitur}>
        <View style={[styles.Child_Fitur]}>
          <Fitur
            onPress={() => navigation.navigate('kurikulum')}
            image={require('../../assets/Icons/kurikulum.png')}
            style={{
              backgroundColor: 'yellow',
              width: responsiveScreenWidth(17),
              height: responsiveScreenHeight(9),
              borderRadius: 19,
              color: 'black',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            Title="Kurikulum"
          />
          <Fitur
            onPress={() => navigation.navigate('kaldik')}
            image={require('../../assets/Icons/Kalender.png')}
            style={{
              backgroundColor: '#F45B2B',
              width: responsiveScreenWidth(17),
              height: responsiveScreenHeight(9),
              borderRadius: 19,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            Title="Kalender"
            Title2={'Pendidikan'}
          />
          <Fitur
            onPress={() => navigation.navigate('dataabsensi')}
            image={require('../../assets/Icons/dataAbsensi.png')}
            style={{
              backgroundColor: '#F62697',
              width: responsiveScreenWidth(17),
              height: responsiveScreenHeight(9),
              borderRadius: 19,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            Title="Data"
            Title2={'Absensi'}
          />
        </View>
        <View style={[styles.Child_Fitur, {marginTop: 25}]}>
          <Fitur
            onPress={() => navigation.navigate('persentaseabsen')}
            image={require('../../assets/Icons/persentase.png')}
            style={{
              backgroundColor: '#3AEAAB',
              width: responsiveScreenWidth(17),
              height: responsiveScreenHeight(9),
              borderRadius: 19,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            Title="Persentase"
            Title2={'Absen'}
          />
          <Fitur
            onPress={() => navigation.navigate('requestkarya')}
            image={require('../../assets/Icons/requestkarya.png')}
            style={{
              backgroundColor: '#FFCEFE',
              width: responsiveScreenWidth(17),
              height: responsiveScreenHeight(9),
              borderRadius: 19,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            Title="Request"
            Title2={'Karya'}
          />
          <Fitur
            onPress={() => navigation.navigate('profile')}
            image={require('../../assets/Icons/portofolio.png')}
            style={{
              backgroundColor: '#B6E2A1',
              width: responsiveScreenWidth(17),
              height: responsiveScreenHeight(9),
              borderRadius: 19,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            Title="Profile"
            Title2={'Saya'}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  NamaSantri: {
    marginLeft: responsiveScreenWidth(3),
    fontSize: responsiveScreenFontSize(2.2),
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  Container_absensi: {
    marginTop: responsiveScreenWidth(7),
  },
  child_Absensi1: {
    borderTopLeftRadius: responsiveScreenWidth(5),
    borderTopRightRadius: responsiveScreenWidth(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveScreenWidth(5),
    backgroundColor: '#008C74',
    height: responsiveScreenHeight(13),
    alignItems: 'center',
  },
  Title: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(2.1),
    color: 'white',
  },
  textAjakan: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(1.5),
    color: 'white',
  },
  textArahan: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(1.6),
    color: 'black',
  },
  child_Absensi2: {
    justifyContent: 'space-between',
    paddingHorizontal: responsiveScreenWidth(2),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: responsiveScreenHeight(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  Tombol_absen: {
    // backgroundColor: '#D5DADC',
    // height: responsiveScreenHeight(5),
    flexDirection: 'row',
    width: responsiveScreenWidth(25.5),
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: responsiveScreenWidth(3),
    borderWidth: 2,
    borderColor: 'grey',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
    paddingRight: responsiveScreenWidth(3),
    borderRadius: 20,
  },
  Container_Title: {
    // backgroundColor: 'red',
    marginTop: responsiveScreenHeight(4.5),
  },
  Container_Fitur: {
    marginTop: responsiveScreenHeight(2),
    // backgroundColor: 'red',
    width: '100%',
    height: responsiveScreenHeight(50),
    padding: responsiveScreenWidth(5),
    alignItems: 'flex-start',
  },
  Child_Fitur: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

const Fitur = ({image, Title, Title2, style, style2, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={style}>
          <Image
            source={image}
            style={[
              {
                width: responsiveScreenWidth(16),
                height: responsiveScreenHeight(7.5),
              },
              style2,
            ]}
          />
        </View>
        <Text
          style={{
            marginTop: 8,
            color: 'black',
            fontFamily: 'Poppins-SemiBold',
            fontSize: responsiveScreenFontSize(1.7),
          }}>
          {Title}
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-SemiBold',
            fontSize: responsiveScreenFontSize(1.7),
          }}>
          {Title2}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Dashboard;
