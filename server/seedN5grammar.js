const mongoose = require("mongoose");
const dns = require("dns");
const Grammar = require("./models/n5grammar");
const grammarLessons = require("./data/grammar_lessons");

require("dotenv").config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    await Grammar.deleteMany({ level: "N5" });

    await Grammar.insertMany(grammarLessons);

    console.log("N5 grammar lessons inserted successfully");

    await mongoose.connection.close();
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });