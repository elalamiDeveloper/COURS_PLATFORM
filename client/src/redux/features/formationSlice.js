import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activateVideoUrl: '',
};

const formationSlice = createSlice({
  name: 'formation',
  initialState,
  reducers: {
    playVideo(state, action) {
      state.activateVideoUrl = action.payload;
    },
  },
});

const formationActions = formationSlice.actions;

export { formationActions };
export default formationSlice.reducer;
