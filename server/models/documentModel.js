import mongoose from 'mongoose';

const documentSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Document must have a title'],
  },

  url: {
    type: String,
    required: [true, 'Document must have an url'],
  },

  type: {
    type: String,
    enum: ['info', 'facture', 'exercices'],
  },
});

const Document = mongoose.model('Document', documentSchema);

export default Document;
