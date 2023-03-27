import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* Status bar */}
      <StatusBar backgroundColor={'transparent'} translucent />
      {/* Background hijau */}
      <View style={styles.Container_Hijau}>
        {/* back dan Title*/}
        <View style={styles.backAndTitle}>
          <View style={styles.back}>
            <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
              <Icon
                name="chevron-back"
                size={responsiveScreenWidth(8)}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.Title}>
            <Text style={styles.textTitle}>PROFILE</Text>
          </View>
        </View>
        {/* Bagian personal data */}
        <View style={styles.ContainerPersonalData}>
          <View style={styles.personalData}>
            <View style={styles.nameAndImage}>
              <Image
                source={require('../../assets/images/person.png')}
                style={styles.imagePerson}
              />
              <Text style={styles.nama}>Khoirul Madani</Text>
              <Text style={styles.divisi}>Mobile dev</Text>
            </View>
            <View style={styles.editPersonalData}>
              <TouchableOpacity
                onPress={() => navigation.navigate('personaldata')}>
                <Image
                  source={require('../../assets/Icons/editPersonal.png')}
                  style={styles.editPersonal}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* Background putih */}
      <View style={styles.ContainerPutih}>
        <View style={styles.ContainerChild}>
          <ContainerChildUserProfile
            onPress={() => navigation.navigate('curicullumvitae')}
            source={require('../../assets/images/cv.png')}
            title="CV"
            icon={'chevron-forward'}
            style={{
              width: responsiveScreenWidth(11),
              height: responsiveScreenHeight(8),
            }}
            styleContainer={{paddingHorizontal: 12}}
          />
          <ContainerChildUserProfile
            onPress={() => navigation.navigate('portofolio')}
            source={require('../../assets/images/portofolio.png')}
            title="Portofolio"
            icon={'chevron-forward'}
            style={{
              width: responsiveScreenWidth(11),
              height: responsiveScreenHeight(8),
            }}
            styleContainer={{paddingHorizontal: 12}}
          />
          <ContainerChildUserProfile
            source={require('../../assets/images/problem.png')}
            title="Laporkan Masalah"
            style={{
              width: responsiveScreenWidth(12),
              height: responsiveScreenHeight(6.8),
            }}
            styleContainer={{paddingHorizontal: 12}}
          />
          <ContainerChildUserProfile
            source={require('../../assets/Icons/logout.png')}
            title="Logout Account"
            style={{
              width: responsiveScreenWidth(7),
              height: responsiveScreenHeight(5),
              resizeMode: 'contain',
            }}
            styleContainer={{paddingLeft: responsiveScreenWidth(4)}}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container_Hijau: {
    width: '100%',
    height: '30%',
    zIndex: 3,
    backgroundColor: '#008C74',
  },
  backAndTitle: {
    marginTop: responsiveScreenHeight(6),
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    width: '20%',
    // backgroundColor: 'green',
    paddingLeft: responsiveScreenWidth(6),
  },
  Title: {
    alignItems: 'center',
    width: '60%',
    // backgroundColor: 'purple',
  },
  textTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
  ContainerPersonalData: {
    // backgroundColor: 'red',
    width: '100%',
    height: '72%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  personalData: {
    width: '85%',
    position: 'absolute',
    bottom: responsiveScreenHeight(-13),
    height: responsiveScreenHeight(25),
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  editPersonalData: {
    height: '100%',
    width: responsiveScreenWidth(15),
    // backgroundColor: 'yellow',
    alignItems: 'center',
    paddingLeft: responsiveScreenWidth(2),
    paddingTop: responsiveScreenHeight(2),
  },
  nameAndImage: {
    // backgroundColor: 'white',
    height: '100%',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePerson: {
    width: responsiveScreenWidth(20),
    height: responsiveScreenHeight(13.2),
  },
  editPersonal: {
    width: responsiveScreenWidth(8.2),
    height: responsiveScreenHeight(4),
  },
  nama: {
    fontSize: responsiveScreenFontSize(2),
    marginTop: 10,
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  divisi: {
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  ContainerPutih: {
    // backgroundColor: 'red',
    width: '100%',
    height: '67%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ContainerChild: {
    // backgroundColor: 'green',
    width: '80%',
    height: '76%',
    paddingTop: responsiveScreenHeight(2),
    justifyContent: 'space-around',
  },
});

const ContainerChildUserProfile = ({
  source,
  title,
  icon,
  style,
  styleContainer,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styleContainer,
          {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#D9D9D9',
            width: '100%',
            justifyContent: 'space-between',
            // marginTop: responsiveScreenHeight(3),
            height: responsiveScreenHeight(9),
            borderRadius: 7,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          },
        ]}>
        {/* Image */}
        <View>
          <Image source={source} style={style} />
        </View>
        {/* Title */}
        <View>
          <Text
            style={{
              fontSize: responsiveScreenFontSize(1.6),
              fontFamily: 'Poppins-SemiBold',
              color: '#2F3132',
            }}>
            {title}
          </Text>
        </View>
        {/* Icon(Optional) */}
        <View>
          <Icon name={icon} color="black" size={responsiveScreenWidth(5)} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Profile;
