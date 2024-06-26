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
import PersonalData from '../../screen/Profile/personal data';
import CV from '../../screen/Profile/cv/cv';
import Portofolio from '../../screen/Profile/Portofolio/portofolio';
import Guest from '../../../Guest/Screen/Guest/index';
import OTP from '../../screen/OTP';

// Pengurus
import ProfilePengurus from '../../../PENGURUS/screen/Profile/Profile';
import DashboardPengurus from '../../../PENGURUS/screen/DashboardPegurus/dashboard';
import Listdatasantri from '../../../PENGURUS/screen/ListDataSantri/Listdatasantri';
import DetailDataSantri from '../../../PENGURUS/screen/ListDataSantri/detailDataSantri';
import RequestKaryaPengurus from '../../../PENGURUS/screen/requestKarya/requestKaryaPengurus';
import Buat_materi from '../../../PENGURUS/screen/Buat_materi/buatMateri';
import Daftar_materi from '../../../PENGURUS/screen/Daftar_materi/daftarMateri';
import Detail_materi from '../../../PENGURUS/screen/Detail_materi/detail_materi';
import SetNewPassword from '../../screen/Set New Password';
// State management
export const Dataglobal = createContext();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="guest"
        component={Guest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="kodeotp"
        component={OTP}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="setNewPassword"
        component={SetNewPassword}
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
      <Stack.Screen
        name="personaldata"
        component={PersonalData}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="curicullumvitae"
        component={CV}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="portofolio"
        component={Portofolio}
        options={{headerShown: false}}
      />
      {/* screen Pengurus */}
      <Stack.Screen
        name="dashboardpengurus"
        component={DashboardPengurus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="listdatasantri"
        component={Listdatasantri}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="detaildatasantri"
        component={DetailDataSantri}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="requestkaryapengurus"
        component={RequestKaryaPengurus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profilepengurus"
        component={ProfilePengurus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="buatmateri"
        component={Buat_materi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="daftarmateri"
        component={Daftar_materi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="detailmateri"
        component={Detail_materi}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
