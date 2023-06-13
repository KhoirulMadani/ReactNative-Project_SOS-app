import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PieChart from 'react-native-pie-chart';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
const PersentaseAbsen = ({navigation}) => {
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
  const widthAndHeight = responsiveScreenHeight(23);

  const sliceColor = ['#23DC1F', 'red', 'yellow', '#3F9EE2'];
  const DataBulanan = {
    Januari: {
      series: [10, 3, 10, 7],
    },
    Februari: {
      series: [30, 0, 0, 0],
    },
    Maret: {
      series: [40, 10, 30, 20],
    },
    April: {
      series: [40, 10, 30, 20],
    },
    Mei: {
      series: [40, 10, 30, 20],
    },
  };

  // Function menghitung persentase
  let [nilaiKeseluruhan, setNilaiKeseluruhan] = useState(0);
  let [PenampungNilai, setPenampungNilai] = useState([]);
  let [mengambil2nilaidaridepan, setMengambil2nilaidaridepan] = useState([]);
  let [hasilpersentase, setHasilpersentase] = useState([]);

  // Mencari nilai keseluruhan
  const MenghitungNilaiKeseluruhan = () => {
    DataBulanan[Months[selectedMonth]].series.map((value, index) => {
      nilaiKeseluruhan = nilaiKeseluruhan + value;
      return setNilaiKeseluruhan(nilaiKeseluruhan);
    });

    console.log('nilai keseluruhan', nilaiKeseluruhan);
    return setNilaiKeseluruhan(0);
  };
  // mencari nilai persentase
  const fungsiPenampungnilai = () => {
    DataBulanan[Months[selectedMonth]].series.map((value, index) => {
      PenampungNilai.push(Math.round((100 / nilaiKeseluruhan) * value));
      setPenampungNilai(PenampungNilai);
    });
    console.log('penampung nilai', PenampungNilai);
    return setPenampungNilai([]);
  };
  // Mencari 2 kata dari depan
  const mencari2NilaiDariDepan = () => {
    PenampungNilai.map((value, index) => {
      let mengubahKeString = `${value}`;
      var hasil = '';
      if (mengubahKeString === '100') {
        hasil = mengubahKeString;
      } else {
        let duaKarakterNilai = mengubahKeString.substring(0, 2);
        let split = duaKarakterNilai.split('');
        if (split[1] === '.') {
          split.pop();
          hasil = split;
        } else if (split[1] != '.') {
          hasil = split;
        }
      }
      mengambil2nilaidaridepan.push(hasil);
      setMengambil2nilaidaridepan(mengambil2nilaidaridepan);
    });
    setHasilpersentase(mengambil2nilaidaridepan);
    console.log(mengambil2nilaidaridepan);
    return setMengambil2nilaidaridepan([]);
  };
  console.log('hasil persentase', hasilpersentase);

  useEffect(() => {
    MenghitungNilaiKeseluruhan();
    fungsiPenampungnilai();
    mencari2NilaiDariDepan();
  }, [selectedMonth]);

  return (
    <View style={{flex: 1}}>
      {/* Status bar */}
      <StatusBar backgroundColor={'transparent'} translucent />
      {/* Header */}
      <ImageBackground
        source={require('../../assets/images/backgroundPersentase.png')}
        style={{width: '100%', height: responsiveScreenHeight(39)}}>
        <View style={styles.viewTitle}>
          <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
            <Icon
              name="chevron-back"
              color={'white'}
              size={responsiveScreenWidth(8)}
            />
          </TouchableOpacity>
          <Text style={styles.judul}>Persentase Absen</Text>
        </View>
        {/* Image persentase */}
        <View
          style={{
            alignItems: 'center',
            // backgroundColor: 'red',
            marginTop: responsiveScreenHeight(1),
          }}>
          <Image
            source={require('../../assets/images/imagePersentase.png')}
            style={{
              resizeMode: 'cover',
              width: responsiveScreenWidth(48),
              height: responsiveScreenHeight(35),
            }}
          />
        </View>
      </ImageBackground>
      {/* Title */}
      <View
        style={{
          marginLeft: responsiveScreenWidth(5),
          marginTop: responsiveScreenHeight(4),
        }}>
        <Text style={styles.Title}>Persentase Absen Perbulan :</Text>
      </View>
      {/* navigasi bulan*/}
      <View
        style={{
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <View
          style={[
            styles.NavigasiBulan,
            {marginBottom: responsiveScreenHeight(1)},
          ]}>
          <TouchableOpacity
            onPress={() => {
              setSelectedMonth(selectedMonth - 1);
            }}
            disabled={selectedMonth == 0}>
            <View>
              <Image
                source={require('../../assets/Icons/buttonslidekiri.png')}
                style={{
                  width: responsiveScreenWidth(9.5),
                  height: responsiveScreenHeight(4.5),
                  resizeMode: 'contain',
                }}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: responsiveScreenWidth(35),
              // backgroundColor: 'red',
            }}>
            <Text style={[styles.Bulan]}>{Months[selectedMonth]}</Text>
            <Text style={[styles.Tahun]}>{Year}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setSelectedMonth(selectedMonth + 1);
            }}
            disabled={selectedMonth == new Date().getMonth()}>
            <View>
              <Image
                source={require('../../assets/Icons/buttonslidekanan.png')}
                style={{
                  width: responsiveScreenWidth(9.5),
                  height: responsiveScreenHeight(4.5),
                  resizeMode: 'contain',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Persentase */}
      <View
        style={{
          // backgroundColor: 'green',
          flexDirection: 'row',
          height: '30%',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingLeft: 10,
        }}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={DataBulanan[Months[selectedMonth]].series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.45}
          coverFill={'#FFF'}
        />
        {/* Jumlah persen */}
        <View
          style={{
            // backgroundColor: 'purple',
            width: '47%',
            height: '80%',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: responsiveScreenHeight(1),
          }}>
          <Persen nilai={hasilpersentase[0]} backgroundColor={'#23DC1F'} />
          <Persen nilai={hasilpersentase[1]} backgroundColor={'red'} />
          <Persen nilai={hasilpersentase[2]} backgroundColor={'yellow'} />
          <Persen nilai={hasilpersentase[3]} backgroundColor={'#3F9EE2'} />
        </View>
      </View>
      {/* Keterangan */}
      <View style={styles.Container_Keterangan}>
        <Keterangan text={'Hadir'} backgroundColor="#23DC1F" />
        <Keterangan text={'Tanpa Keterangan'} backgroundColor="red" />
        <Keterangan text={'Sakit'} backgroundColor="yellow" />
        <Keterangan text={'Izin'} backgroundColor="#3F9EE2" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    top: responsiveScreenHeight(5),
    left: 20,
    zIndex: 2,
  },
  judul: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: responsiveScreenFontSize(2),
    left: 10,
  },
  Title: {
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(2),
    color: 'black',
  },
  NavigasiBulan: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginTop: responsiveScreenHeight(1.5),
    width: '80%',
    justifyContent: 'space-around',
  },
  Bulan: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  Tahun: {
    fontSize: responsiveScreenFontSize(2),
    marginLeft: 15,
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  Container_Keterangan: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginTop: responsiveScreenHeight(1),
    width: '85%',
    paddingVertical: responsiveScreenHeight(0.2),
    marginLeft: responsiveScreenWidth(8),
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const Persen = ({backgroundColor, nilai}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveScreenHeight(1.2),
        // backgroundColor: 'gray',
        width: responsiveScreenWidth(17),
      }}>
      <View
        style={{
          backgroundColor: backgroundColor,
          width: responsiveScreenWidth(4),
          height: responsiveScreenHeight(2.2),
        }}></View>
      <Text
        style={{
          fontFamily: 'Poppins-Bold',
          fontSize: responsiveScreenFontSize(1.7),
          marginLeft: 3,
          color: 'black',
        }}>
        :
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Bold',
          marginLeft: 5,
          color: 'black',
          fontSize: responsiveScreenFontSize(1.7),
        }}>
        {nilai} %
      </Text>
    </View>
  );
};
// KETERANGAN
const Keterangan = ({backgroundColor, text}) => {
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
        style={{
          width: responsiveScreenWidth(5),
          height: responsiveScreenHeight(2.5),
          backgroundColor: backgroundColor,
          borderRadius: 20,
        }}></View>
      <Text style={{marginLeft: 5, fontFamily: 'Poppins-Bold', color: 'black'}}>
        :
      </Text>
      <Text
        style={{
          marginLeft: 5,
          fontFamily: 'Poppins-Bold',
          color: 'black',
          fontSize: responsiveScreenFontSize(1.2),
        }}>
        {text}
      </Text>
    </View>
  );
};
export default PersentaseAbsen;
