const mongoose = require("mongoose");

const vocabularySchema = new mongoose.Schema(
  {
    word: { type: String, required: true },
    reading: String,
    meanings: [String],
  },
  { _id: false }
);

const lessonSchema = new mongoose.Schema(
  {
    level: { type: String, required: true },
    lessonNumber: { type: Number, required: true },
    title: { type: String, required: true },
    keywords: [String],
    vocabulary: [vocabularySchema],
  },
  { timestamps: true }
);

lessonSchema.index({ level: 1, lessonNumber: 1 }, { unique: true });

module.exports = mongoose.model("Lesson", lessonSchema);