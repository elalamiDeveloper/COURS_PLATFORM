import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chapitres: [],
  title: 'title',
  durationValidated: 0,
  duration: 1551,
};

const formationSlice = createSlice({
  name: 'formation',
  initialState,
  reducers: {
    initFormation(state, action) {
      state.chapitres = [...action.payload.chapitres];
      state.title = action.payload.title;
      state.duration = action.payload.duration;
      state.durationValidated = action.payload.durationValidated;
    },

    playVideo(state, action) {
      state.url = action.payload.url;
    },

    // finishedVideoAndSwipToNext(state, action) {},
  },
});

const formationActions = formationSlice.actions;

export { formationActions };
export default formationSlice.reducer;
