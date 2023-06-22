import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/authSlice';
import formationReducer from './features/formationSlice';
import activateVideoReducer from './features/activateVideoSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    formation: formationReducer,
    activateVideo: activateVideoReducer,
  },
});

export default store;
