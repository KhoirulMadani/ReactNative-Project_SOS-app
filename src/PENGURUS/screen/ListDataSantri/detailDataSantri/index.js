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
const FirstRoute = () => (
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
const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white'}}></View>
);
const initialCover = {width: Dimensions.get('window').width};
// Component Utama
const DetailDataSantri = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Personal data'},
    {key: 'second', title: 'CV'},
  ]);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      {/* header */}
      <View style={styles.ContainerHeader}>
        {/* back */}
        <View style={styles.containerBack}>
          <Icon name="chevron-back" size={responsiveScreenWidth(7)} />
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
    fontSize: responsiveScreenFontSize(2),
  },
  divisi: {
    fontSize: responsiveScreenFontSize(2),
  },
});

const PersonalData = ({Title, source, styleimg, name}) => {
  return (
    <View
      style={{
        marginTop: responsiveScreenHeight(3),
      }}>
      <Text
        style={{
          fontSize: responsiveScreenFontSize(2.2),
          paddingLeft: responsiveScreenWidth(5),
          color: 'black',
        }}>
        {Title}
      </Text>
      <View
        style={{
          backgroundColor: '#D9D9D9',
          borderRadius: responsiveScreenWidth(2),
          flexDirection: 'row',
          marginTop: responsiveScreenHeight(1.5),
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
export default DetailDataSantri;
