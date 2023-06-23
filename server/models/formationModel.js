import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

// SCHEMA
const formationSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'formation must have a title'],
    trim: true,
  },

  image: {
    type: String,
    trim: true,
    default:
      'https://res.cloudinary.com/df8jkm00a/image/upload/v1686746599/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl_ihpzrn.jpg',
  },

  duration: {
    type: Number,
    required: [true, 'formation must have a duration'],
  },

  createdAt: {
    type: Date,
    default: new Date(),
    select: false,
  },

  chapters: {
    type: Array,
  },

  documents: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Document',
    },
  ],

  videos: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Video',
    },
  ],
});

formationSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'documents',
    select: '-__v',
  });

  this.populate({
    path: 'videos',
    select: '-__v',
  });

  next();
});

// MODEL
const Formation = mongoose.model('Formation', formationSchema);

export default Formation;
