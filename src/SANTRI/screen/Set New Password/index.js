import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const SetNewPassword = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={styles.container}>
      <View
        style={{
          // backgroundColor: 'green',
          height: responsiveScreenHeight(10),
          justifyContent: 'center',
        }}>
        <Text style={styles.textTiltle}>Set New Password</Text>
        <View style={styles.TextInputPW}>
          <Icon
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
            }}
            name="lock"
            size={responsiveScreenWidth(7)}
            color={'#999999'}
            style={{marginTop: 15}}
          />
          <TextInput
            secureTextEntry={secureTextEntry}
            style={styles.STextInput}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
            }}>
            <Icon
              name="eye-outline"
              size={responsiveScreenWidth(7)}
              color={'#999999'}
              style={{marginTop: 15}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          // backgroundColor: 'green',
          height: responsiveScreenHeight(10),
          justifyContent: 'center',
        }}>
        <Text style={styles.textTiltle}>Confirm New Password</Text>
        <View style={styles.TextInputPW}>
          <Icon
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
            }}
            name="lock"
            size={responsiveScreenWidth(7)}
            color={'#999999'}
            style={{marginTop: 15}}
          />
          <TextInput
            secureTextEntry={secureTextEntry}
            style={styles.STextInput}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
            }}>
            <Icon
              name="eye-outline"
              size={responsiveScreenWidth(7)}
              color={'#999999'}
              style={{marginTop: 15}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.viewTombol}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('login')}>
          <Text style={styles.textSignIn}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetNewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textTiltle: {
    color: '#999999',
    fontFamily: 'Poppins-SemiBold',
    fontSize: responsiveScreenFontSize(1.5),
    top: responsiveScreenHeight(2),
  },
  TextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderBottomColor: '#999999',
    borderBottomWidth: responsiveScreenWidth(0.5),
    zIndex: -1,
    height: responsiveScreenHeight(8),
  },
  TextInputPW: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderBottomColor: '#999999',
    borderBottomWidth: responsiveScreenWidth(0.5),

    height: responsiveScreenHeight(8),
  },
  STextInput: {
    // backgroundColor: 'yellow',
    top: 10,
    left: 5,
    color: 'black',
    width: '85%',
    height: responsiveScreenHeight(10),
    fontFamily: 'Poppins-SemiBold',
  },

  viewTombol: {
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveScreenHeight(10),
  },
  button: {
    backgroundColor: '#008C74',
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(6.5),
    borderRadius: responsiveScreenWidth(3),
  },
  textSignIn: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: responsiveScreenFontSize(3),
  },
});
