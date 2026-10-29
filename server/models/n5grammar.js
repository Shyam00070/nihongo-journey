const mongoose = require("mongoose");

const grammarSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true,
  },

  lessonNumber: {
    type: Number,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  grammar: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Grammar", grammarSchema);