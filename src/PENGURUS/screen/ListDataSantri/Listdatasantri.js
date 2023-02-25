import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  useResponsiveScreenWidth,
} from 'react-native-responsive-dimensions';
const Listdatasantri = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('dashboardPengurus')}>
            <Icon
              name="chevron-back"
              size={responsiveScreenWidth(8)}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {/* image */}
        <View style={styles.containerImage}>
          <Image
            source={require('../../assets/Images/header2.png')}
            style={{
              width: responsiveScreenWidth(60),
              resizeMode: 'contain',
              height: responsiveScreenHeight(60),
            }}
          />
        </View>
      </View>
      {/* Container Title */}
      <View style={styles.ContainerTitle}>
        <Text style={styles.Title}>List data santri</Text>
      </View>
      {/* container santri */}
      <ScrollView style={{marginTop: 10}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            // backgroundColor: 'red',
            width: '100%',
            height: '53%',
            alignItems: 'center',
          }}>
          <ContainerSantri
            onPress={() => navigation.navigate('detaildatasantri')}
            source={require('../../assets/Images/person.png')}
            namaSantri="Farhan mahendra"
          />
          <ContainerSantri
            source={require('../../assets/Images/person2.png')}
            namaSantri="Khairul"
          />
          <ContainerSantri
            source={require('../../assets/Images/person3.png')}
            namaSantri="Reza"
          />
          <ContainerSantri
            source={require('../../assets/Images/person.png')}
            namaSantri="Ilyas"
          />
          <ContainerSantri
            source={require('../../assets/Images/person2.png')}
            namaSantri="Memet"
          />
          <ContainerSantri
            source={require('../../assets/Images/person3.png')}
            namaSantri="Renda"
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    height: responsiveScreenHeight(40),
    paddingHorizontal: 20,
    paddingTop: responsiveScreenHeight(5),
  },
  containerImage: {
    // backgroundColor: 'green',
    width: '100%',
    height: '86%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContainerTitle: {
    // backgroundColor: 'red',
    marginTop: responsiveScreenHeight(3),
    paddingLeft: 30,
  },
  Title: {
    fontSize: responsiveScreenFontSize(2.5),
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
});
const ContainerSantri = ({source, namaSantri, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#008C74',
          width: '90%',
          marginTop: responsiveScreenHeight(2.5),
          height: responsiveScreenHeight(11),
          alignItems: 'center',
          paddingLeft: 10,
          borderRadius: 14,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: responsiveScreenWidth(25),
            alignItems: 'center',
            height: responsiveScreenHeight(8),
            borderRadius: 10,
            justifyContent: 'flex-end',
          }}>
          <Image
            source={source}
            style={{
              width: responsiveScreenWidth(15.5),
              height: responsiveScreenHeight(7.5),
            }}
          />
        </View>
        <View
          style={{
            // backgroundColor: 'yellow',
            width: '71%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-BoldItalic',
              letterSpacing: 0.5,
              color: 'white',
              fontSize: responsiveScreenFontSize(2),
            }}>
            {namaSantri}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Listdatasantri;
