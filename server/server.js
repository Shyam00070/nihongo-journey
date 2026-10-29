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




app.get("/", (req, res) => {
  res.send("Nihongo Journey backend is running!");
});




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