
import Fuji from "../assets/fujisanu.png";
import Sakura from "../assets/new.png";
import Torii from "../assets/toiri.png";

const levels = {
  N5: {
    title: "Beginner Japanese",
    description: "Your Japanese journey starts here.",
    image: Sakura,
    primary: "#B83A3A",
    light: "#FCE9E7",
    text:"日本語能力試験 N5",
    level:"N5",
    bg:"#FFF5F3",
    continueLearning: {
    category: "Vocabulary",
    lesson: "Lesson 06",
    title: "Daily Activities",
    completed: 18,
    total: 25,
  },

  todayGoal: {
    completed: 15,
    total: 20,
    unit: "minutes",
  },
  },

  N4: {
    title: "Elementary Japanese",
    description: "Build your foundation and understand more.",
    image: Fuji,
    primary: "#B87532",
    light: "#F6EDE1",
    text:"日本語能力試験 N4",
    level:"N4",
    bg:"#FFF8EF",
     continueLearning: {
    category: "Vocabulary",
    lesson: "Lesson 06",
    title: "Daily Activities",
    completed: 1,
    total: 25,
  },

  todayGoal: {
    completed: 10,
    total: 20,
    unit: "minutes",
  },
  },

  N3: {
    title: "Intermediate Japanese",
    description: "Take your Japanese to the next level.",
    image: Torii,
    primary: "#35658A",
    light: "#E8F0F6",
    text:"日本語能力試験 N3",
    level:"N3",
    bg:"#F2F7FA",

    continueLearning: {
    category: "Vocabulary",
    lesson: "Lesson 06",
    title: "Daily Activities",
    completed: 10,
    total: 25,
  },

  todayGoal: {
    completed: 0,
    total: 20,
    unit: "minutes",
  },
  },
};

export default levels;