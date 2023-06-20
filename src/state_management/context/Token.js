import {createSlice} from '@reduxjs/toolkit';

const Token = createSlice({
  name: 'untuk token',
  initialState: {
    value: '',
  },
  reducers: {
    simpan_token_diRedux: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const simpan_token_diRedux = Token.actions.simpan_token_diRedux;
export default Token.reducer;
