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

  durationValidated: {
    type: Number,
    default: 10,
  },

  niveau: {
    type: String,
    trim: true,
    default: 'Debutant',
  },

  language: {
    type: String,
    default: 'Français',
  },

  description: {
    type: String,
    required: [true, 'formation must have a description'],
    trim: true,
  },

  formateur: {
    type: String,
    default: '',
  },

  createdAt: {
    type: Date,
    default: new Date(),
    select: false,
  },

  chapitres: {
    type: Array,
  },
});

// MODEL
const Formation = mongoose.model('Formation', formationSchema);

export default Formation;
