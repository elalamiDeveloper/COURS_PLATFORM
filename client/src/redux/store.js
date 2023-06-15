import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/authSlice';
import formationReducer from './features/formationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    formation: formationReducer,
  },
});

export default store;
