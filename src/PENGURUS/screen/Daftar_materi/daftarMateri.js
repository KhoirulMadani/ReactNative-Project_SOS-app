import {View, Text, TouchableOpacity, FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

const Daftar_materi = ({navigation}) => {
  const token = useSelector(val => val.Token.value);
  const [data, setData] = useState([]);
  // lifecycle
  useEffect(() => {
    DaftarMateri();
  }, []);
  const DaftarMateri = async () => {
    try {
      const hasil = await axios.get(
        'http://103.175.218.30:3000/api/v1/learning',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(hasil.data.learnings);
      setData(hasil.data.learnings);
    } catch (e) {
      console.log('errr');
    }
  };
  return (
    <View style={{flex: 1}}>
      {/* header */}
      <View style={{flexDirection: 'row', backgroundColor: '#008C74', flex: 1}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="chevron-back" size={25} color={'white'} />
        </TouchableOpacity>
        <View
          style={{
            flex: 4,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '800'}}>
            Daftar materi pembelajaran
          </Text>
        </View>
      </View>
      {/* daftar materi */}
      <View style={{flex: 10, paddingHorizontal: 30, paddingTop: 30}}>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <Pressable
                android_ripple={{color: 'grey'}}
                onPress={() =>
                  navigation.navigate('detailmateri', {
                    id: item._id,
                  })
                }
                style={{
                  marginTop: 20,
                  height: 60,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderColor: '#008C74',
                  alignItems: 'center',
                  borderRadius: 10,
                  elevation: 3,
                }}>
                <Text style={{color: '#008C74', fontWeight: 'bold'}}>
                  {item.title}
                </Text>
              </Pressable>
            );
          }}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
};

export default Daftar_materi;
