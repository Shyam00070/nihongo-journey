const mongoose = require("mongoose");
const dns = require("dns");
const Lesson = require("./models/Lesson");
const lessons = require("./data/n3lessons");

require("dotenv").config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

  
    await Lesson.deleteMany({ level: "N3" });

  
    await Lesson.insertMany(lessons);

    console.log("N3 vocabulary lessons inserted successfully");

    await mongoose.connection.close();
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });