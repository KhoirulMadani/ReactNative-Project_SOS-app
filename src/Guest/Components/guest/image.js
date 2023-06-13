import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  useResponsiveScreenWidth,
} from 'react-native-responsive-dimensions';
const ImageGuest = () => {
  return (
    <View style={styles.containerImage}>
      <Image
        source={require('../../assets/Images/Logo.png')}
        style={styles.imageGuest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    backgroundColor: '#008c74',
    height: responsiveScreenHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageGuest: {
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(25),
    zIndex: 5,
  },
});

export default ImageGuest;
