import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

// SCHEMA
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

  role: {
    type: String,
    required: [true, 'user must have a role'],
    trim: true,
    enum: ['admin', 'user'],
    default: 'user',
  },

  imageURL: {
    type: String,
    default:
      'https://res.cloudinary.com/df8jkm00a/image/upload/v1685548348/avatar_nornoj.png',
  },

  society: {
    type: String,
    trim: true,
    default: '',
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
    minLength: 8,
    select: false,
  },

  passwordConfirmation: {
    type: String,
    required: [true, 'user must have a password'],
    select: false,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Password are not a same. Please try again',
    },
  },

  createdAt: {
    type: Date,
    default: new Date(),
    select: false,
  },

  questions: Array,
  answers: Array,

  formations: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Formation',
    },
  ],

  documents: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Document',
    },
  ],

  videoValidate: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Video',
    },
  ],
});

// MIDDLEWARES
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();

  // HASH the password with cost of 12
  bcrypt.hash(this.password, 12, (err, hash) => {
    this.password = hash;
    this.passwordConfirmation = undefined;
    this.passwordChangedAt = new Date() - 100;
    next();
  });
});

// METHODS
userSchema.methods.correctPassword = async (psw, userPsw) =>
  await bcrypt.compare(psw, userPsw);

// MODEL
const User = mongoose.model('User', userSchema);

export default User;
