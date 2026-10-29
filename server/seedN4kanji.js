const mongoose = require("mongoose");
const dns = require("dns");
const Kanji = require("./models/n5kanji");
const kanjiLessons = require("./data/n4kanji_lessons");

require("dotenv").config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    await Kanji.deleteMany({ level: "N4" });

    await Kanji.insertMany(kanjiLessons);

    console.log("N4 Kanji lessons inserted successfully ep");

    await mongoose.connection.close();
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });