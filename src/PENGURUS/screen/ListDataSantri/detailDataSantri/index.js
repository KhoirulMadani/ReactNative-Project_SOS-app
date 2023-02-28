import {
  View,
  Text,
  useWindowDimensions,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  useResponsiveScreenWidth,
} from 'react-native-responsive-dimensions';
// component tab view
const ContainerPersonaldata = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: responsiveScreenWidth(3),
        paddingBottom: responsiveScreenHeight(3),
      }}>
      <PersonalData
        Title={'Nama Lengkap'}
        source={require('../../../assets/Icons/user.png')}
        styleimg={{
          width: responsiveScreenWidth(9),
          resizeMode: 'contain',
          height: responsiveScreenHeight(5),
        }}
        name="Farhan"
      />
      <PersonalData
        Title={'Email'}
        source={require('../../../assets/Icons/email.png')}
        styleimg={{
          width: responsiveScreenWidth(6),
          resizeMode: 'contain',

          height: responsiveScreenHeight(5),
        }}
        name="Farhan@gmail.com"
      />
      <PersonalData
        Title={'Divisi'}
        source={require('../../../assets/Icons/jurusann.png')}
        styleimg={{
          width: responsiveScreenWidth(7),
          resizeMode: 'contain',
          height: responsiveScreenHeight(5),
        }}
        name="Mobile Developer"
      />
      <PersonalData
        Title={'Telepon'}
        source={require('../../../assets/Icons/telepon.png')}
        styleimg={{
          width: responsiveScreenWidth(5),
          resizeMode: 'contain',
          height: responsiveScreenHeight(5),
        }}
        name="0857 2800 2800"
      />
    </View>
  </ScrollView>
);
// CV
const ContainerCV = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: responsiveScreenWidth(3),
        paddingBottom: responsiveScreenHeight(1.5),
      }}>
      <CV
        Title={'Technical Skill'}
        isi="dghjsaghdfaghjadfsghjafdsghjdfssasssssssssssssssssss234w4ft34frwy35breerktuhrtiluyqr3iu7234578erhuif2478yf24byt24y78g34biuyfg24g78"
      />
      <CV
        Title={'Pendidikan'}
        isi="dghjsaghdfaghjadfsghjafdsghjdfssasssssssssssssssssss234w4ft34frwy35breerktuhrtiluyqr3iu7234578erhuif2478yf24byt24y78g34biuyfg24g78"
      />
      <CV
        Title={'Personal background'}
        isi="dghjsaghdfaghjadfsghjafdsghjdfssasssssssssssssssssss234w4ft34frwy35breerktuhrtiluyqr3iu7234578erhuif2478yf24byt24y78g34biuyfg24g78"
      />
    </View>
  </ScrollView>
);
const initialCover = {width: Dimensions.get('window').width};
// Component Utama
const DetailDataSantri = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Personal data'},
    {key: 'second', title: 'CV'},
  ]);
  const renderScene = SceneMap({
    first: ContainerPersonaldata,
    second: ContainerCV,
  });
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      {/* header */}
      <View style={styles.ContainerHeader}>
        {/* back */}
        <View style={styles.containerBack}>
          <TouchableOpacity
            onPress={() => navigation.navigate('listdatasantri')}>
            <Icon name="chevron-back" size={responsiveScreenWidth(7)} />
          </TouchableOpacity>
        </View>
        {/* name and image */}
        <View style={styles.ContainerNameImage}>
          <Image
            source={require('../../../assets/Images/person.png')}
            style={styles.image}
          />
          <Text style={styles.name}>Farhan mahendra</Text>
          <Text style={styles.divisi}>Mobile dev</Text>
        </View>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialCover}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerHeader: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    height: responsiveScreenHeight(33),
  },
  containerBack: {
    // backgroundColor: '#D9D9D9',
    height: '20%',
    justifyContent: 'flex-end',
    paddingLeft: responsiveScreenWidth(7),
  },
  image: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(16),
  },
  ContainerNameImage: {
    alignItems: 'center',
    // backgroundColor: 'green',
    height: '70%',
    // justifyContent: 'flex-end',
  },
  name: {
    fontSize: responsiveScreenFontSize(2.5),
    fontFamily: 'Poppins-Bold',
  },
  divisi: {
    fontSize: responsiveScreenFontSize(2),
    fontFamily: 'Poppins-Medium',
  },
});

const PersonalData = ({Title, source, styleimg, name}) => {
  return (
    <View
      style={{
        marginTop: responsiveScreenHeight(2.5),
      }}>
      <Text
        style={{
          fontSize: responsiveScreenFontSize(2),
          paddingLeft: responsiveScreenWidth(2),
          color: 'black',
          fontFamily: 'Poppins-SemiBoldItalic',
        }}>
        {Title}
      </Text>
      <View
        style={{
          backgroundColor: '#D9D9D9',
          borderRadius: responsiveScreenWidth(2),
          flexDirection: 'row',
          marginTop: responsiveScreenHeight(1),
          paddingVertical: responsiveScreenHeight(1),
        }}>
        <View
          style={{
            width: '20%',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}>
          <Image source={source} style={styleimg} />
        </View>
        <View
          style={{
            width: '75%',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingHorizontal: responsiveScreenWidth(4),
            // backgroundColor: 'red',
          }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(2.2),
                  color: 'black',
                }}>
                {name}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
// component CV
const CV = ({Title, isi}) => {
  return (
    <View
      style={{
        // backgroundColor: 'red',
        marginTop: responsiveScreenHeight(3),
      }}>
      <Text
        style={{
          fontSize: responsiveScreenFontSize(2),
          color: 'black',
          fontFamily: 'Poppins-SemiBoldItalic',
        }}>
        {Title}
      </Text>
      <View
        style={{
          borderWidth: 1.7,
          alignContent: 'stretch',
          paddingHorizontal: responsiveScreenWidth(2),
          paddingVertical: responsiveScreenHeight(0.5),
          marginTop: responsiveScreenHeight(0.1),
          borderRadius: responsiveScreenWidth(1.5),
        }}>
        <Text
          style={{
            fontSize: responsiveScreenFontSize(2),
            color: 'black',
            // lineHeight: 20,
          }}>
          {isi}
        </Text>
      </View>
    </View>
  );
};
export default DetailDataSantri;
