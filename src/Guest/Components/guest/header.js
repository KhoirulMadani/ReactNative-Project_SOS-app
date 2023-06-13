import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  useResponsiveScreenWidth,
} from 'react-native-responsive-dimensions';
const Header = ({navigation, onPress}) => {
  return (
    <View style={styles.headerGuest}>
      <Text style={styles.title}>System of Santri</Text>
      <TouchableOpacity
        style={styles.containerLogin}
        activeOpacity={0.8}
        onPress={onPress}>
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  headerGuest: {
    backgroundColor: '#008C74',
    marginTop: '6%',
    height: responsiveScreenHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1.5,
    borderColor: 'white',
    // borderTopWidth: 2,
  },
  title: {
    color: 'white',
    fontWeight: '800',
    fontSize: responsiveScreenFontSize(3),
  },
  containerLogin: {
    position: 'absolute',
    right: 0,

    backgroundColor: '#10B89B',
    width: responsiveScreenWidth(16),
    height: responsiveScreenHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  textLogin: {
    color: 'white',
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
export default Header;
