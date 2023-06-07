import { createSlice } from '@reduxjs/toolkit';

const initialState = { isAuth: false, jwt: '', path: 'login' };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      localStorage.setItem('jwt', action.payload.jwt);
      state.isAuth = true;
      state.jwt = action.payload.jwt;
      state.path = action.payload.path;
    },

    logout(state) {
      localStorage.removeItem('jwt');
      state.isAuth = false;
      state.jwt = '';
      state.path = 'login';
    },
  },
});

const authActions = authSlice.actions;

export { authActions };
export default authSlice.reducer;
