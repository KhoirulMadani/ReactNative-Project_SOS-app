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
  const widthAndHeight = 200;

  const sliceColor = ['#23DC1F', 'red', 'yellow', '#3F9EE2'];
  const DataBulanan = {
    Januari: {
      series: [10, 3, 10, 7],
    },
    Februari: {
      series: [30, 0, 0, 0],
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
        source={require('../../assets/images/headerPersentase.png')}
        style={{width: '100%', height: 280}}>
        <TouchableOpacity
          style={{marginTop: 35, marginLeft: 20}}
          onPress={() => navigation.navigate('dashboard')}>
          <Icon name="chevron-back" color={'white'} size={35} />
        </TouchableOpacity>
      </ImageBackground>
      {/* Title */}
      <View style={{marginLeft: 20, marginTop: 20}}>
        <Text style={styles.Title}>Persentase Absen Perbulan :</Text>
      </View>
      {/* navigasi bulan*/}
      <View
        style={{
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <View style={[styles.NavigasiBulan, {marginBottom: 20}]}>
          <TouchableOpacity
            onPress={() => {
              setSelectedMonth(selectedMonth - 1);
            }}
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
            onPress={() => {
              setSelectedMonth(selectedMonth + 1);
            }}
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
      {/* Persentase */}
      <View
        style={{
          // backgroundColor: 'green',
          flexDirection: 'row',
          height: '30%',
          alignItems: 'center',
          paddingLeft: 20,
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
            height: '100%',
            paddingTop: 20,
            alignItems: 'center',
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
  Title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    color: 'black',
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

const Persen = ({backgroundColor, nilai}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 20,
        // backgroundColor: 'gray',
        width: 60,
      }}>
      <View
        style={{
          backgroundColor: backgroundColor,
          width: 20,
          height: 20,
        }}></View>
      <Text style={{fontFamily: 'Poppins-Bold', marginLeft: 3}}>:</Text>
      <Text style={{fontFamily: 'Poppins-Bold', marginLeft: 5}}>{nilai} %</Text>
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
          width: 20,
          height: 20,
          backgroundColor: backgroundColor,
          borderRadius: 20,
        }}></View>
      <Text style={{marginLeft: 5}}>:</Text>
      <Text style={{marginLeft: 5}}>{text}</Text>
    </View>
  );
};
export default PersentaseAbsen;
