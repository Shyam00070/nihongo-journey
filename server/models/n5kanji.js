const mongoose = require("mongoose");

const kanjiSchema = new mongoose.Schema({
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

  kanji: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Kanji", kanjiSchema);