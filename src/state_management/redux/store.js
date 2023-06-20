import {configureStore} from '@reduxjs/toolkit';
import Token from '../context/Token';
import state_Buat_materi from '../context/buat_materi';
export const store = configureStore({
  reducer: {
    Token,
    state_Buat_materi,
  },
});
