import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from 'react-native-vector-icons/Icon';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const Kaldik = ({navigation}) => {
  const [selectmonth, setSelectmonth] = useState(new Date().getMonth());
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'November',
    'Desember',
  ];
  const dataAbsen = {
    bulan: {
      Januari: [
        {
          date: 1,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 2,
          day: 'senin',
          keterangan: 'libur',
          status: true,
        },
        {
          date: 3,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
      ],
      Februari: [
        {
          date: 1,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 2,
          day: 'senin',
          keterangan: 'belajar',
          status: true,
        },
        {
          date: 3,
          day: 'senin',
          keterangan: 'ngoding',
          status: true,
        },
        {
          date: 4,
          day: 'senin',
          keterangan: 'rihlah',
          status: true,
        },
        {
          date: 5,
          day: 'senin',
          keterangan: 'nobar',
          status: true,
        },
        {
          date: 6,
          day: 'senin',
          keterangan: 'web binar',
          status: true,
        },
        {
          date: 7,
          day: 'senin',
          keterangan: 'web binar',
          status: true,
        },
        {
          date: 8,
          day: 'senin',
          keterangan: 'web binar',
          status: true,
        },
        {
          date: 9,
          day: 'senin',
          keterangan: 'web binar',
          status: true,
        },
        {
          date: 10,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 11,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 12,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 13,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 14,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 15,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 16,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 17,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 18,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 19,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 20,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 21,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 22,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 23,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 24,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 25,
          day: 'senin',
          keterangan: 'belajar bahasa inggris',
          status: true,
        },
        {
          date: 26,
          day: 'senin',
          keterangan: 'zoom meeting',
          status: true,
        },
        {
          date: 27,
          day: 'senin',
          keterangan: 'zoom meeting',
          status: true,
        },
        {
          date: 28,
          day: 'senin',
          keterangan: 'zoom meeting',
          status: false,
        },
        {
          date: 29,
          day: 'senin',
          keterangan: 'zoom meeting',
          status: false,
        },
        {
          date: 30,
          day: 'senin',
          keterangan: 'zoom meeting',
          status: false,
        },
        {
          date: 31,
          day: 'senin',
          keterangan: 'zoom meeting',
          status: false,
        },
      ],
      Maret: [
        {
          date: 1,
          day: 'senin',
          keterangan: 'libur',
          status: false,
        },
        {
          date: 2,
          day: 'senin',
          keterangan: 'belajar',
          status: true,
        },
        {
          date: 3,
          day: 'senin',
          keterangan: 'ngoding',
          status: true,
        },
      ],
    },
  };
  const [years, setYears] = useState(new Date().getFullYear());

  const [hasil, setHasil] = useState([]);

  useEffect(() => {
    ket();
  }, [selectmonth]);

  function ket() {
    let hasilfilter = dataAbsen.bulan[months[selectmonth]].filter(
      (value, index) => {
        return value.status == true;
      },
    );
    setHasil(hasilfilter);
    console.log(hasilfilter);
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <StatusBar hidden />
      <View style={styles.header}>
        <ImageBackground
          source={require('../../assets/images/gambarkalender.png')}
          style={styles.headerKalender}>
          <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
            <Image
              source={require('../../assets/Icons/back.png')}
              style={styles.iconback}
            />
          </TouchableOpacity>
          <Text style={styles.textheader}>Kalender Akademik</Text>
        </ImageBackground>
      </View>

      {/* ISI */}
      <View style={styles.isi}>
        {/* Slide Tanggal */}
        <View style={styles.pembungkusSlide}>
          <View style={styles.slideTanggal}>
            {/* button previous */}
            <TouchableOpacity
              onPress={() => {
                setSelectmonth(selectmonth - 1);
                ket();
              }}
              disabled={selectmonth == 0}>
              <Image
                source={require('../../assets/Icons/buttonslidekiri.png')}
                style={styles.btn}
              />
            </TouchableOpacity>
            {/* menampilkan bulan */}
            <Text style={styles.textBulan}>
              {months[selectmonth]} {years}
            </Text>
            {/* button next */}
            <TouchableOpacity
              onPress={() => {
                setSelectmonth(selectmonth + 1);
                ket();
              }}
              disabled={selectmonth == 2}>
              <Image
                source={require('../../assets/Icons/buttonslidekanan.png')}
                style={styles.btn}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Isi Tanggal; */}
        <View style={styles.pembungkusTanggal}>
          <View style={styles.tanggal}>
            {dataAbsen.bulan[months[selectmonth]].map((value, index) => {
              let color = null;
              if (value.status == true) {
                color = '#F1C73A';
              } else if (value.status == false) {
                color = 'white';
              }
              return (
                <View
                  key={index}
                  style={[styles.tandaTanggal, {backgroundColor: color}]}>
                  <Text
                    style={{
                      fontSize: 17,
                      color: 'black',
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    {value.date}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        {/* keterangan */}
        <View style={{alignItems: 'center'}}>
          <View style={styles.kontenKeterangan}>
            <Text style={styles.textKeterangan}>Keterangan :</Text>
            <ScrollView style={styles.ScrollView}>
              {hasil.map((value, index) => {
                return (
                  <View key={index} style={styles.isiKeterangan}>
                    <View style={styles.viewTanggal}>
                      <Text style={styles.textTanggal}>{value.date}</Text>
                      <View style={styles.viewTitikDua}>
                        <Text style={styles.textTitikDua}>:</Text>
                      </View>
                    </View>
                    <Text style={styles.textIsiKeterangan}>
                      {value.keterangan}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Kaldik;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'white',
    width: '100%',
    height: 250,
  },
  headerKalender: {
    width: '100%',
    height: 250,
  },
  iconback: {
    width: 11.04,
    height: 19.28,
    left: 25,
    top: 23,
  },
  textheader: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    fontSize: responsiveFontSize(2.2),
    left: 70,
    bottom: 1,
  },
  gambarkalender: {
    width: 368.3,
    height: 220.23,
  },
  background: {
    width: 425,
    height: 265,
    left: -10,
    bottom: 98,
  },
  isi: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  pembungkusSlide: {
    // backgroundColor: 'blue',
    alignItems: 'center',
    marginTop: responsiveScreenHeight(1.5),
  },
  slideTanggal: {
    // backgroundColor: 'red',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // height: '',
  },
  btn: {
    width: 38,
    height: 33,
  },
  textBulan: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'black',
  },
  pembungkusTanggal: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red',
  },
  tanggal: {
    width: '100%',
    height: responsiveScreenHeight(30),
    padding: 2,
    alignItems: 'center',
    // paddingLeft: responsiveScreenHeight(1.5),
    // backgroundColor: 'blue',
    marginTop: responsiveScreenHeight(1),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tandaTanggal: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    marginTop: 20,
    right: 10,
    borderRadius: 10,
  },
  kontenKeterangan: {
    // paddingLeft: 25,
    // top: 10,
    height: responsiveScreenHeight(20),
    width: responsiveScreenWidth(100),
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textKeterangan: {
    color: 'black',
    fontSize: 20,
    bottom: 4,
    left: responsiveScreenWidth(-28),
    fontFamily: 'Poppins-SemiBold',
  },
  ScrollView: {
    // marginTop: responsiveScreenHeight(2),
    backgroundColor: '#008C74',
    width: responsiveScreenWidth(90),
    borderRadius: 10,
  },
  isiKeterangan: {
    width: '50%',
    marginLeft: 15,
    flexDirection: 'row',
    paddingVertical: responsiveScreenWidth(1),
  },
  viewTanggal: {
    // backgroundColor: 'blue',
    width: 25,
    height: 19,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  textTanggal: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  viewTitikDua: {
    // backgroundColor: 'red',
    width: 5,
    height: 19,
    alignItems: 'center',
    left: 5,
  },
  textTitikDua: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  textIsiKeterangan: {
    color: 'white',
    fontSize: 15,
    left: 12,
    fontFamily: 'Poppins-SemiBold',
  },
});
