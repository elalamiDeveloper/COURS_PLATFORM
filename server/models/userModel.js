import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'user must have a first name'],
    trim: true,
  },

  lastName: {
    type: String,
    required: [true, 'user must have a last name'],
    trim: true,
  },

  email: {
    type: String,
    required: [true, 'user must have an email'],
    unique: [true, 'Email must be unique'],
    validate: [validator.isEmail, 'email is not valid'],
  },

  password: {
    type: String,
    required: [true, 'user must have a password'],
    trim: true,
    minLength: 8,
    select: false,
  },

  passwordConfirmation: {
    type: String,
    required: [true, 'user must have a password'],
    trim: true,
    select: false,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Password are not a same. Please try again',
    },
  },

  entreprise: {
    type: String,
    trim: true,
    default: '',
  },

  photo: {
    type: String,
    default:
      'https://res.cloudinary.com/df8jkm00a/image/upload/v1685548348/avatar_nornoj.png',
  },

  createdAt: {
    type: Date,
    default: new Date(),
    select: false,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
