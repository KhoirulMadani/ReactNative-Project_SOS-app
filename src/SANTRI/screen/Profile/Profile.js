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
              <Icon name="chevron-back" size={30} color="white" />
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
              <Text style={styles.nama}>Farhan Mahendra</Text>
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
            source={require('../../assets/images/cv.png')}
            title="CV"
            icon={'chevron-forward'}
            style={{width: 50, height: 50}}
            styleContainer={{paddingHorizontal: 10}}
          />
          <ContainerChildUserProfile
            source={require('../../assets/images/portofolio.png')}
            title="Portofolio"
            icon={'chevron-forward'}
            style={{width: 50, height: 50}}
            styleContainer={{paddingHorizontal: 10}}
          />
          <ContainerChildUserProfile
            source={require('../../assets/images/problem.png')}
            title="Laporkan Masalah"
            style={{width: 50, height: 50}}
            styleContainer={{paddingHorizontal: 10}}
          />
          <ContainerChildUserProfile
            source={require('../../assets/Icons/logout.png')}
            title="Logout Account"
            style={{width: 23, height: 24}}
            styleContainer={{paddingLeft: 25}}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container_Hijau: {
    width: '100%',
    height: '33%',
    zIndex: 3,
    backgroundColor: '#008C74',
  },
  backAndTitle: {
    marginTop: 35,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    width: '20%',
    // backgroundColor: 'green',
    paddingLeft: 20,
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
    bottom: -100,
    height: 200,
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
    width: 50,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    paddingTop: 10,
  },
  nameAndImage: {
    // backgroundColor: 'white',
    height: '100%',
    width: '70%',
    alignItems: 'center',
    paddingTop: 15,
  },
  imagePerson: {
    width: 100,
    height: 100,
  },
  editPersonal: {
    width: 30,
    height: 30,
  },
  nama: {
    fontSize: 17,
    marginTop: 10,
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  divisi: {
    fontSize: 13,
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
  },
});

const ContainerChildUserProfile = ({
  source,
  title,
  icon,
  style,
  styleContainer,
}) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          styleContainer,
          {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#D9D9D9',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 20,
            height: 50,
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
              fontSize: 14,
              fontFamily: 'Poppins-SemiBold',
              color: '#2F3132',
            }}>
            {title}
          </Text>
        </View>
        {/* Icon(Optional) */}
        <View>
          <Icon name={icon} color="black" size={20} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Profile;
