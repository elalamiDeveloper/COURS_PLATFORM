import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

// SCHEMA
const commentSchema = mongoose.Schema({
  comment: {
    type: String,
    required: [true, 'What is your comment ??'],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  writeBy: {
    type: String,
    enum: ['user', 'admin'],
  },
});

// MODEL
const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
