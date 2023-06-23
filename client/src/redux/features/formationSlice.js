import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chapters: [],
  title: '',
  image: '',
  duration: 1551,
  documents: [],
  videos: [],
};

const formationSlice = createSlice({
  name: 'formation',
  initialState,
  reducers: {
    initFormation(state, action) {
      state.chapters = [...action.payload.chapters];
      state.title = action.payload.title;
      state.duration = action.payload.duration;
      state.documents = action.payload.documents;
      state.videos = action.payload.videos;
      state.image = action.payload.image;
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
