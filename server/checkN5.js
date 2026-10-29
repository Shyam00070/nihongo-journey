const n5 = require("./n5.json");

const lessons = [
  {
    level: "N5",
    lessonNumber: 1,
    title: "Greetings & Introductions",
    vocabulary: [
  "名前",
  "私",
  "あなた",
  "人",
  "学生",
  "先生",
  "友達",
  "大学生",
  "大学",
  "国",
  "外国",
  "外国人"
].map(word =>
  n5.find(item => item.word === word)
)
  }
];


const missing = lessons[0].vocabulary.filter(item => !item);

console.log("Missing words:", missing.length);

module.exports = lessons;