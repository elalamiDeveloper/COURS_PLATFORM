import { createSlice } from '@reduxjs/toolkit';

const initialState = { isAuth: false, jwt: '' };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      localStorage.setItem('jwt', JSON.stringify(action.payload));
      state.isAuth = true;
      state.jwt = action.payload;
    },

    logout(state) {
      state.isAuth = false;
      state.jwt = '';
    },
  },
});

const authActions = authSlice.actions;

export { authActions };
export default authSlice.reducer;