import React, {createContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Daftar Screen
import Splash from '../../screen/splash/index';
import Login from '../../screen/Login/index';
import Register from '../../screen/Register/index';
import Dashboard from '../../screen/Dashboard/Dashboard';
import Kaldik from '../../screen/kaldik/kaldik';
import Kurikulum from '../../screen/Kurikulum/Kurikulum';
import DataAbsensi from '../../screen/Data Absensi/dataAbsensi';
import Absensi from '../../screen/Absensi/Absensi';
import PersentaseAbsen from '../../screen/Persentase Absen/persentaseAbsen';
import Profile from '../../screen/Profile/Profile';
import RequestKarya from '../../screen/RequestKarya/requestKarya';

// State management
export const Dataglobal = createContext();

const Routers = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="kaldik"
        component={Kaldik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="kurikulum"
        component={Kurikulum}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="dataabsensi"
        component={DataAbsensi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="absensi"
        component={Absensi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="persentaseabsen"
        component={PersentaseAbsen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="requestkarya"
        component={RequestKarya}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
