import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/authSlice';
import videoActivateReducer from './features/videoActivateSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    videoActivate: videoActivateReducer,
  },
});

export default store;
