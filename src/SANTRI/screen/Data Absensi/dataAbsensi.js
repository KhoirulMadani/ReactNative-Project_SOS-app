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
    <View style={{flex: 1}}>
      {/* Status bar */}
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />
      {/* Header */}
      <ImageBackground
        source={require('../../assets/images/Header.png')}
        style={{width: '100%', height: 250}}>
        <View style={styles.Container_navigasiBack}>
          <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
            <Icon name="chevron-back" size={35} color="black" />
          </TouchableOpacity>
          <Text style={styles.Title}>Data Absensi</Text>
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
                style={{width: 38, height: 33}}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: 150,
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
                style={{width: 38, height: 33}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Tanggal */}
      <View style={{alignItems: 'center', marginTop: 10}}>
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
                <Text style={{color: 'black', fontSize: 15, fontWeight: '900'}}>
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
    marginTop: 35,
    marginLeft: 25,
    alignItems: 'center',
  },
  Title: {
    color: 'black',
    marginLeft: 15,
    fontSize: 17,
    fontFamily: 'Poppins-BoldItalic',
  },
  NavigasiBulan: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginTop: 30,
    width: '80%',
    justifyContent: 'space-around',
  },
  Bulan: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
  },
  Tahun: {
    fontSize: 17,
    marginLeft: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  ContainerTanggal: {
    // backgroundColor: 'red',
    width: '95%',
    height: 250,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  perTanggal: {
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  Text_Keterangan: {
    marginLeft: 30,
    marginTop: 20,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  Container_Keterangan: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginTop: 5,
    width: '85%',
    height: 80,
    marginLeft: 30,
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
        height: 30,
        marginTop: 5,
        marginLeft: 5,
        alignItems: 'center',
      }}>
      <View
        style={[
          {width: 20, height: 20, backgroundColor: color, borderRadius: 20},
        ]}></View>
      <Text style={{marginLeft: 5}}>:</Text>
      <Text style={{marginLeft: 5}}>{text}</Text>
    </View>
  );
};
export default DataAbsensi;
