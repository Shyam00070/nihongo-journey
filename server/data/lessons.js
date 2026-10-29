const n5 = require("./n5.json");

const lessonDefinitions = [
  {
    lessonNumber: 1,
    title: "Greetings & Introductions",
    keywords: [
      "name", "myself", "you", "person", "student",
      "teacher", "friend", "country", "foreigner",
      "university"
    ]
  },
  {
    lessonNumber: 2,
    title: "People & Classroom",
    keywords: [
      "school", "class", "classroom", "teacher",
      "student", "book", "notebook", "desk", "pen",
      "question", "answer", "lesson"
    ]
  },
  {
    lessonNumber: 3,
    title: "Numbers & Counting",
    keywords: [
      "one", "two", "three", "four", "five", "six",
      "seven", "eight", "nine", "ten", "number",
      "counter", "people"
    ]
  },
  {
    lessonNumber: 4,
    title: "Time & Dates",
    keywords: [
      "time", "hour", "minute", "day", "date",
      "today", "tomorrow", "yesterday", "morning",
      "afternoon", "evening", "night", "week",
      "month", "year"
    ]
  },
  {
    lessonNumber: 5,
    title: "Family",
    keywords: [
      "family", "father", "mother", "brother",
      "sister", "parent", "child", "son", "daughter"
    ]
  },
  {
    lessonNumber: 6,
    title: "Home & Daily Life",
    keywords: [
      "house", "home", "room", "door", "window",
      "bed", "table", "chair", "kitchen", "bathroom"
    ]
  },
  {
    lessonNumber: 7,
    title: "Food & Drinks",
    keywords: [
      "food", "eat", "drink", "rice", "water",
      "tea", "coffee", "meat", "fish", "vegetable",
      "fruit", "restaurant", "meal", "breakfast",
      "lunch", "dinner"
    ]
  },
  {
    lessonNumber: 8,
    title: "Shopping",
    keywords: [
      "buy", "sell", "shop", "store", "price",
      "money", "yen", "expensive", "cheap",
      "clothes", "bag", "color"
    ]
  },
  {
    lessonNumber: 9,
    title: "Places & Directions",
    keywords: [
      "place", "where", "here", "there", "bank",
      "station", "school", "hospital", "library",
      "right", "left", "front", "behind", "inside",
      "outside", "near"
    ]
  },
  {
    lessonNumber: 10,
    title: "Transportation",
    keywords: [
      "car", "train", "bus", "bicycle", "taxi",
      "station", "airport", "ride", "travel",
      "walk"
    ]
  },
  {
    lessonNumber: 11,
    title: "Daily Routine",
    keywords: [
      "wake", "sleep", "get up", "go", "come",
      "return", "work", "study", "read", "write",
      "watch", "listen", "wash"
    ]
  },
  {
    lessonNumber: 12,
    title: "Hobbies & Free Time",
    keywords: [
      "hobby", "music", "movie", "game", "sport",
      "play", "read", "watch", "sing", "dance",
      "weekend"
    ]
  },
  {
    lessonNumber: 13,
    title: "Weather & Seasons",
    keywords: [
      "weather", "rain", "snow", "sun", "wind",
      "hot", "cold", "spring", "summer", "autumn",
      "fall", "winter", "season"
    ]
  },
  {
    lessonNumber: 14,
    title: "Adjectives & Descriptions",
    keywords: [
      "big", "small", "new", "old", "good", "bad",
      "beautiful", "pretty", "long", "short",
      "fast", "slow", "easy", "difficult",
      "interesting", "busy", "quiet"
    ]
  },
  {
    lessonNumber: 15,
    title: "Common Verbs",
    keywords: [
      "do", "make", "see", "know", "think",
      "say", "speak", "give", "receive", "take",
      "use", "have", "want", "like"
    ]
  },
  {
    lessonNumber: 16,
    title: "Body & Health",
    keywords: [
      "body", "head", "eye", "ear", "mouth",
      "hand", "foot", "stomach", "health",
      "sick", "doctor", "medicine", "hospital"
    ]
  },
  {
    lessonNumber: 17,
    title: "School & Work",
    keywords: [
      "work", "job", "company", "office",
      "employee", "teacher", "school", "study",
      "university", "class"
    ]
  },
  {
    lessonNumber: 18,
    title: "Common Expressions",
    keywords: [
      "please", "sorry", "thank", "welcome",
      "goodbye", "hello", "yes", "no",
      "okay", "excuse"
    ]
  },
  {
    lessonNumber: 19,
    title: "N5 Review",
    keywords: []
  },
  {
    lessonNumber: 20,
    title: "N5 Final Review",
    keywords: []
  }
];

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesLesson(item, keywords) {
  const text = (item.meanings || [])
    .join(" ")
    .toLowerCase();

  return keywords.some((keyword) => {
    const pattern = new RegExp(
      `\\b${escapeRegExp(keyword.toLowerCase())}\\b`,
      "i"
    );

    return pattern.test(text);
  });
}

const lessons = lessonDefinitions.map(definition => {
  const vocabulary = n5.filter(item =>
    matchesLesson(item, definition.keywords)
  );

return {
  level: "N5",
  lessonNumber: definition.lessonNumber,
  title: definition.title,
  keywords: definition.keywords,
  vocabulary,
};
});

module.exports = lessons;