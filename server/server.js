const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");
const Lesson = require("./models/Lesson");
const Grammar = require("./models/n5grammar");
const Kanji = require("./models/n5kanji");
const cors = require("cors");

require("dotenv").config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(cors());
app.use(express.json());


// =====================================================
// HOME
// =====================================================

app.get("/", (req, res) => {
  res.send("Nihongo Journey backend is running!");
});


// =====================================================
// VOCABULARY
// =====================================================

// Get all lessons in a level
// Example: http://localhost:5000/api/lessons/N5
app.get("/api/lessons/:level", async (req, res) => {
  try {
    const lessons = await Lesson.find({
      level: req.params.level.toUpperCase(),
    }).sort({ lessonNumber: 1 });

    res.json(lessons);
  } catch (error) {
    res.status(500).json({
      message: "Could not get lessons",
    });
  }
});


// Get one vocabulary lesson
// Example: http://localhost:5000/api/lessons/N5/1
app.get("/api/lessons/:level/:lessonNumber", async (req, res) => {
  try {
    const lesson = await Lesson.findOne({
      level: req.params.level.toUpperCase(),
      lessonNumber: Number(req.params.lessonNumber),
    });

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    res.json(lesson);
  } catch (error) {
    res.status(500).json({
      message: "Could not get lesson",
    });
  }
});


// =====================================================
// GRAMMAR
// =====================================================

// Get all grammar lessons in a level
// Example: http://localhost:5000/api/grammar/N5
app.get("/api/grammar/:level", async (req, res) => {
  try {
    const grammar = await Grammar.find({
      level: req.params.level.toUpperCase(),
    }).sort({ lessonNumber: 1 });

    res.json(grammar);
  } catch (error) {
    res.status(500).json({
      message: "Could not get grammar lessons",
    });
  }
});


// Get one grammar lesson
// Example: http://localhost:5000/api/grammar/N5/1
app.get("/api/grammar/:level/:lessonNumber", async (req, res) => {
  try {
    const grammar = await Grammar.findOne({
      level: req.params.level.toUpperCase(),
      lessonNumber: Number(req.params.lessonNumber),
    });

    if (!grammar) {
      return res.status(404).json({
        message: "Grammar lesson not found",
      });
    }

    res.json(grammar);
  } catch (error) {
    res.status(500).json({
      message: "Could not get grammar lesson",
    });
  }
});


// =====================================================
// KANJI
// =====================================================

// Get all kanji lessons in a level
// Example: http://localhost:5000/api/kanji/N5
app.get("/api/kanji/:level", async (req, res) => {
  try {
    const kanji = await Kanji.find({
      level: req.params.level.toUpperCase(),
    }).sort({ lessonNumber: 1 });

    res.json(kanji);
  } catch (error) {
    res.status(500).json({
      message: "Could not get kanji lessons",
    });
  }
});


// Get one kanji lesson
// Example: http://localhost:5000/api/kanji/N5/1
app.get("/api/kanji/:level/:lessonNumber", async (req, res) => {
  try {
    const kanji = await Kanji.findOne({
      level: req.params.level.toUpperCase(),
      lessonNumber: Number(req.params.lessonNumber),
    });

    if (!kanji) {
      return res.status(404).json({
        message: "Kanji lesson not found",
      });
    }

    res.json(kanji);
  } catch (error) {
    res.status(500).json({
      message: "Could not get kanji lesson",
    });
  }
});


// =====================================================
// MONGODB CONNECTION
// =====================================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });