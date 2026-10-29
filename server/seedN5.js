require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");
const Lesson = require("./models/Lesson");
const lessons = require("./data/lessons");

async function seedN5Lessons() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const operations = lessons.map((lesson) => ({
      updateOne: {
        filter: {
          level: lesson.level,
          lessonNumber: lesson.lessonNumber,
        },
        update: { $set: lesson },
        upsert: true,
      },
    }));

    await Lesson.bulkWrite(operations);

    console.log(`${lessons.length} N5 lessons saved successfully.`);
  } catch (error) {
    console.error("Could not seed lessons:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

seedN5Lessons();