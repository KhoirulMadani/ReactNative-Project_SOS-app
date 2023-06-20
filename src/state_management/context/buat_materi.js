import {createSlice} from '@reduxjs/toolkit';

const state_Buat_materi = createSlice({
  name: 'buat materi',
  initialState: {
    judul: '',
    deskripsi: '',
    thumbnail: {},
  },
  reducers: {
    ubah_judul: (state, action) => {
      state.judul = action.payload;
    },
    ubah_deskripsi: (state, action) => {
      state.deskripsi = action.payload;
    },
  },
});

export const ubah_judul = state_Buat_materi.actions.ubah_judul;
export const ubah_deskripsi = state_Buat_materi.actions.ubah_deskripsi;
export default state_Buat_materi.reducer;
