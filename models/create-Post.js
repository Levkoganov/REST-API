const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = Schema({
  title: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },

  create_date: {
    type: Date,
    default: Date.now(),
  },

  author_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
});

module.exports = mongoose.model('Post', postSchema);
