// Import
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
// Moment Time
import localization from 'moment/locale/id';
moment.updateLocale('id', localization);
import moment from 'moment';
let tanggal = moment().locale('id');

const DataAbsensi = ({navigation}) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const Year = new Date().getFullYear();
  const Months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const dummyResponse = {
    status: 'success',
    data: {
      Januari: [
        {
          date: 1,
          day: 'senin',
          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 2,
          day: 'selasa',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 3,
          day: 'rabu',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 4,
          day: 'kamis',

          status: 'Tanpa Keterangan',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 5,
          day: 'jumat',

          status: 'Sakit',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 6,
          day: 'sabtu',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 7,
          day: 'minggu',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 8,
          day: 'senin',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 9,
          day: 'selasa',

          status: 'Tanpa Keterangan',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 10,
          day: 'rabu',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 11,
          day: 'kamis',

          status: 'Sakit',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 13,
          day: 'jumat',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 14,
          day: 'sabtu',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 15,
          day: 'minggu',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 16,
          day: 'senin',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 17,
          day: 'selasa',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 18,
          day: 'rabu',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 19,
          day: 'kamis',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 20,
          day: 'jumat',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 21,
          day: 'sabtu',

          status: 'Izin',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 22,
          day: 'minggu',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 23,
          day: 'senin',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 24,
          day: 'selasa',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 25,
          day: 'senin',

          status: 'Sakit',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 26,
          day: 'selasa',

          status: 'Sakit',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 27,
          day: 'rabu',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 28,
          day: 'kamis',

          status: 'Tanpa Keterangan',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 29,
          day: 'jumat',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 30,
          day: 'sabtu',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 31,
          day: 'minggu',

          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
      ],
      Februari: [
        {
          date: 1,
          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 2,
          status: 'Alpha',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 3,
          status: 'Sakit',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 4,
          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 5,
          status: 'Hadir',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 6,
          status: 'Sakit',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 17,
          status: 'Tanpa Keterangan',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 17,
          status: 'Tanpa Keterangan',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 10,
          status: 'Tanpa Keterangan',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 9,
          status: 'LIbur',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 7,
          status: 'Tanpa Keterangan',
          in: '08:00',
          out: '15:00',
        },
        {
          date: 10,
          status: 'Tanpa Keterangan',
          in: 'nan',
        },
      ],
    },
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Status bar */}
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      {/* Header */}
      <ImageBackground
        source={require('../../assets/images/backgroundDataAbsensi.png')}
        style={{width: '100%', height: responsiveScreenHeight(35)}}>
        <View style={styles.Container_navigasiBack}>
          <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
            <Icon
              name="chevron-back"
              size={responsiveScreenWidth(8)}
              color="black"
            />
          </TouchableOpacity>
          <Text style={styles.Title}>Data Absensi</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/imageDataAbsensi.png')}
            style={{
              resizeMode: 'contain',
              width: responsiveScreenWidth(90),
              height: responsiveScreenHeight(23),
            }}
          />
        </View>
      </ImageBackground>

      {/* Navigasi bulan */}
      <View style={{alignItems: 'center'}}>
        <View style={styles.NavigasiBulan}>
          <TouchableOpacity
            onPress={() => setSelectedMonth(selectedMonth - 1)}
            disabled={selectedMonth == 0}>
            <View>
              <Image
                source={require('../../assets/Icons/buttonslidekiri.png')}
                style={{
                  width: responsiveScreenWidth(10),
                  resizeMode: 'contain',
                  height: responsiveScreenHeight(5),
                }}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: responsiveScreenWidth(20),
            }}>
            <Text style={[styles.Bulan]}>{Months[selectedMonth]}</Text>
            <Text style={[styles.Tahun]}>{Year}</Text>
          </View>
          <TouchableOpacity
            onPress={() => setSelectedMonth(selectedMonth + 1)}
            disabled={selectedMonth == new Date().getMonth()}>
            <View>
              <Image
                source={require('../../assets/Icons/buttonslidekanan.png')}
                style={{
                  width: responsiveScreenWidth(10),
                  resizeMode: 'contain',
                  height: responsiveScreenHeight(5),
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Tanggal */}
      <View
        style={{alignItems: 'center', marginTop: responsiveScreenHeight(2)}}>
        <View style={[styles.ContainerTanggal, {}]}>
          {dummyResponse.data[Months[selectedMonth]].map((v, i) => {
            let color = null;
            if (v.status === 'Hadir') {
              color = '#23DC1F';
            } else if (v.status === 'Sakit') {
              color = 'yellow';
            } else if (v.status === 'Tanpa Keterangan') {
              color = 'red';
            } else {
              color = '#3F9EE2';
            }
            return (
              <View
                key={i}
                style={[styles.perTanggal, {backgroundColor: color}]}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: responsiveScreenFontSize(2),
                    fontWeight: '900',
                  }}>
                  {v.date}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      {/* Text Keterangan */}
      <Text style={styles.Text_Keterangan}>Keterangan</Text>
      {/* Container Keterangan */}
      <View style={styles.Container_Keterangan}>
        <Keterangan color="#23DC1F" text={'Hadir'} />
        <Keterangan color="red" text={'Tanpa Keterangan'} />
        <Keterangan color="yellow" text={'Sakit'} />
        <Keterangan color="#3F9EE2" text={'Izin'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container_navigasiBack: {
    flexDirection: 'row',
    marginTop: responsiveScreenHeight(5),
    marginLeft: responsiveScreenWidth(5),
    alignItems: 'center',
  },
  Title: {
    color: 'black',
    marginLeft: responsiveScreenWidth(3),
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: 'Poppins-Bold',
  },
  NavigasiBulan: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginTop: responsiveScreenHeight(3),
    width: '80%',
    justifyContent: 'space-around',
  },
  Bulan: {
    fontSize: responsiveScreenFontSize(2.2),
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  Tahun: {
    fontSize: responsiveScreenFontSize(2.2),
    marginLeft: responsiveScreenWidth(3),
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  ContainerTanggal: {
    // backgroundColor: 'red',
    width: '95%',
    height: responsiveScreenHeight(31),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  perTanggal: {
    width: responsiveScreenWidth(7.2),
    height: responsiveScreenHeight(4),
    borderRadius: 8,
    justifyContent: 'center',
    marginLeft: responsiveScreenWidth(5),
    marginTop: responsiveScreenHeight(2),
    alignItems: 'center',
  },
  Text_Keterangan: {
    marginLeft: responsiveScreenWidth(9),
    marginTop: responsiveScreenHeight(2),
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    fontSize: responsiveScreenFontSize(2),
  },
  Container_Keterangan: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginTop: responsiveScreenHeight(1),
    width: '85%',
    height: '10%',
    marginLeft: responsiveScreenWidth(7),
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
const Keterangan = ({color, text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: 'green',
        width: '45%',
        height: responsiveScreenHeight(3),
        marginTop: responsiveScreenHeight(1.5),
        marginLeft: responsiveScreenWidth(2),
        alignItems: 'center',
      }}>
      <View
        style={[
          {
            width: responsiveScreenWidth(5),
            height: responsiveScreenHeight(2.6),
            backgroundColor: color,
            borderRadius: 20,
          },
        ]}></View>
      <Text
        style={{
          marginLeft: responsiveScreenWidth(2),
          color: 'black',
          fontSize: responsiveScreenFontSize(1.5),
        }}>
        :
      </Text>
      <Text
        style={{
          marginLeft: responsiveScreenWidth(2),
          color: 'black',
          fontSize: responsiveScreenFontSize(1.5),
        }}>
        {text}
      </Text>
    </View>
  );
};
export default DataAbsensi;
