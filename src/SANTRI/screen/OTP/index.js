import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

const OTP = ({navigation}) => {
  const [otp, setOTP] = useState('');
  const handleOTPChange = text => {
    // Hanya menerima input angka
    const numericValue = text.replace(/[^0-9]/g, '');
    setOTP(numericValue);
  };

  const handleOTPVerification = () => {
    // Lakukan validasi OTP di sini
    if (otp === '1234') {
      Alert.alert('Verifikasi Berhasil', '', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('setNewPassword'),
        },
      ]);
    } else if (otp === '') {
      Alert.alert('Isi Kode Verifikasi terlebih dahulu !');
    } else {
      Alert.alert('Kode OTP salah');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={50}>
      <View style={styles.container}>
        <Text style={styles.title}>OTP Verifikasi</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleOTPChange}
          value={otp}
          placeholder="Masukkan OTP"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleOTPVerification}>
          <Text style={styles.buttonText}>Verifikasi</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    height: 50,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#008c74',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});

export default OTP;
