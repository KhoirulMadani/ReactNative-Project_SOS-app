import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  ubah_judul,
  ubah_deskripsi,
} from '../../../state_management/context/buat_materi';
import axios from 'axios';
const Buat_materi = ({navigation}) => {
  // redux
  const Judul = useSelector(res => res.state_Buat_materi.judul);
  const Deskripsi = useSelector(res => res.state_Buat_materi.deskripsi);
  const Token = useSelector(res => res.Token.value);
  const dispatch = useDispatch();

  // dropdown
  const [open, setOpen] = useState(false);
  const [namaJurusan, setNamaJurusan] = useState(null);

  const [items, setItems] = useState([
    {
      label: 'Mobile',
      value: 'Mobile',
      icon: () => <Icon3 name={'mobile'} color={'#999999'} size={30} />,
    },

    {
      label: 'Front End',
      value: 'FrontEnd',
      icon: () => <Icon3 name={'code'} size={25} color="#999999" />,
    },
    {
      label: 'Back End',
      value: 'BackEnd',
      icon: () => <Icon4 name={'database'} color={'#999999'} size={20} />,
    },
  ]);
  // function buat materi
  let data = {
    title: Judul,
    division: namaJurusan,
    content: Deskripsi,
  };
  const buat_materi_pembelajaran = async () => {
    try {
      let hasil = await axios.post(
        'http://103.175.218.30:3000/api/v1/learning',
        data,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        },
      );
      console.log(hasil);
    } catch (e) {
      console.log('error pada saat buat materi', e.message);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} translucent={false} />
      {/* header */}
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#008C74'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="chevron-back" size={25} color={'white'} />
        </TouchableOpacity>
        <View
          style={{
            flex: 4,
            justifyContent: 'center',
            paddingLeft: '15%',
          }}>
          <Text style={{color: 'white'}}>Buat materi pembelajaran</Text>
        </View>
      </View>
      {/* input */}
      <View
        style={{
          // backgroundColor: 'green',
          flex: 10,
          paddingHorizontal: 30,
        }}>
        <View style={{zIndex: 6}}>
          <DropDownPicker
            placeholder="Pilih Jurusan"
            placeholderStyle={{color: '#999999'}}
            style={{
              borderColor: '#999999',
              marginTop: 30,
              borderWidth: 2.5,
              borderTopColor: '#008C74',
              borderBottomColor: '#008C74',
              borderStartColor: '#008C74',
              borderEndColor: '#008C74',
            }}
            textStyle={{
              fontWeight: 'bold',
              color: '#999999',
            }}
            labelStyle={{color: 'black'}}
            open={open}
            value={namaJurusan}
            items={items}
            setOpen={setOpen}
            setValue={setNamaJurusan}
            setItems={setItems}
          />
        </View>
        {/* judul */}

        <TextInput
          placeholder="Judul"
          style={{
            borderWidth: 2.5,
            marginTop: 30,
            borderColor: '#008C74',
            borderRadius: 10,
            paddingLeft: 20,
          }}
          onChangeText={val => dispatch(ubah_judul(val))}
        />
        {/* deskripsi */}
        <TextInput
          placeholder="Deskripsi"
          multiline={true}
          style={{
            borderWidth: 2.5,
            marginTop: 30,
            borderColor: '#008C74',
            borderRadius: 10,
            paddingLeft: 20,
            height: 200,
            textAlignVertical: 'top',
            paddingTop: 20,
          }}
          onChangeText={val => dispatch(ubah_deskripsi(val))}
        />
        {/* input thumbnail */}
        <View
          style={{
            borderWidth: 2.5,
            marginTop: 30,
            borderColor: '#008C74',
            borderRadius: 10,
            paddingLeft: 20,
            height: 100,
            textAlignVertical: 'top',
            paddingTop: 20,
          }}>
          <Text>thumbnail berupa image picker</Text>
        </View>
        {/* button simpan */}
        <Pressable
          onPress={() => buat_materi_pembelajaran()}
          android_ripple={{color: 'gray'}}
          style={{
            backgroundColor: '#008C74',
            marginTop: 50,
            height: 50,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Simpan</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Buat_materi;
