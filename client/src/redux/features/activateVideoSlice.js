import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: '',
};

const activateVideoSlice = createSlice({
  name: 'formation',
  initialState,
  reducers: {
    initFormation(state, action) {
      state = action.payload;
    },

    playVideo(state, action) {
      state.url = action.payload.url;
    },

    finishedVideoAndSwipToNext(state, action) {},
  },
});

const activateVideoActions = activateVideoSlice.actions;

export { activateVideoActions };
export default activateVideoSlice.reducer;
