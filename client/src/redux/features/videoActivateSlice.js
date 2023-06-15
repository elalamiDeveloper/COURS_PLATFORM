import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: '',
  finished: false,
};

const videoActivateSlice = createSlice({
  name: 'video-activate',
  initialState,
  reducers: {
    initVideoToPlay(state, action) {
      state.url = action.payload.url;
      state.finished = action.payload.finished;
    },

    playVideo(state, action) {
      state.url = action.payload.url;
    },

    finishedVideoAndSwipToNext(state, action) {},
  },
});

const videoActivateActions = videoActivateSlice.actions;

export { videoActivateActions };
export default videoActivateSlice.reducer;
