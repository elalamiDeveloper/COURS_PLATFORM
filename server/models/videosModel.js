import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Video need title'],
  },

  url: {
    type: String,
    required: [true, 'Video need url'],
  },

  formation: {
    type: String,
    required: [true, 'video must have a formation'],
  },

  chapter: {
    type: String,
    required: [true, 'video must have a chapter'],
  },
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
