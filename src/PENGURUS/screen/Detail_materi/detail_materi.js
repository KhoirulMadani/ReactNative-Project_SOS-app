import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import axios from 'axios';

const Detail_materi = ({route, navigation}) => {
  // state
  const [data, setData] = useState({});
  // state management (Redux)
  const Token = useSelector(val => val.Token.value);
  // get materi
  const get_materi_pembelajaran = async () => {
    try {
      let hasil = await axios.get(
        `http://103.175.218.30:3000/api/v1/learning/${route.params.id}`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        },
      );
      setData(hasil.data.learning);
      console.log(hasil.data.learning);
    } catch (e) {
      console.log(
        'error pada saat get materi pembelajaran pada screen detail materi',
        e.message,
      );
    }
  };
  useEffect;
  useEffect(() => {
    get_materi_pembelajaran();
  }, []);
  return (
    <View style={{flex: 1}}>
      {/* back dan title */}
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
            Materi pembelajaran
          </Text>
        </View>
      </View>
      {/* content */}
      <View style={{flex: 10}}>
        {/* judul */}
        <View>
          <Text style={{fontSize: 20, fontWeight: '900'}}>Judul</Text>
          <Text>{data.title}</Text>
        </View>
        {/* goal */}
        <View>
          <Text style={{fontSize: 20, fontWeight: '900'}}>Goal</Text>
          <Text>{data.goal}</Text>
        </View>
        {/* content */}
        <Text style={{fontSize: 20, fontWeight: '900'}}>content</Text>
        <Text>{data.content}</Text>
      </View>
    </View>
  );
};

export default Detail_materi;
