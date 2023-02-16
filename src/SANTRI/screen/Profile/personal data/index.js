import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PersonalData = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.isi}></View>
    </View>
  );
};

export default PersonalData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  header: {
    width: '100%',
    height: 250,
    backgroundColor: 'green',
  },
  isi: {
    width: '100%',
    height: 490,
    backgroundColor: 'white',
  },
});
