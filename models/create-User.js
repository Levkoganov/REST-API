const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
  first_name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    min: 6,
    max: 120,
  },

  birth_day: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
