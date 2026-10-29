const n3 = require("./n3.json");

const lessonDefinitions = [
  {
    lessonNumber: 1,
    title: "People & Relationships",
    keywords: [
      "person",
      "people",
      "friend",
      "family",
      "relationship",
      "husband",
      "wife",
      "child",
      "parent",
      "mother",
      "father",
      "brother",
      "sister",
      "couple",
      "member",
      "neighbor",
      "guest",
      "customer",
      "teacher",
      "student",
    ],
  },

  {
    lessonNumber: 2,
    title: "Home & Daily Life",
    keywords: [
      "home",
      "house",
      "room",
      "daily",
      "life",
      "living",
      "sleep",
      "wake",
      "bath",
      "clean",
      "wash",
      "cook",
      "household",
      "furniture",
      "clothes",
      "clothing",
    ],
  },

  {
    lessonNumber: 3,
    title: "School & Education",
    keywords: [
      "school",
      "education",
      "study",
      "learn",
      "student",
      "teacher",
      "class",
      "lesson",
      "exam",
      "test",
      "university",
      "college",
      "knowledge",
      "subject",
      "research",
      "academic",
    ],
  },

  {
    lessonNumber: 4,
    title: "Work & Business",
    keywords: [
      "work",
      "job",
      "business",
      "company",
      "office",
      "employee",
      "employer",
      "salary",
      "boss",
      "career",
      "industry",
      "management",
      "professional",
      "business",
      "employment",
    ],
  },

  {
    lessonNumber: 5,
    title: "Food & Cooking",
    keywords: [
      "food",
      "eat",
      "drink",
      "meal",
      "cook",
      "cooking",
      "rice",
      "bread",
      "meat",
      "fish",
      "vegetable",
      "fruit",
      "restaurant",
      "taste",
      "dish",
      "kitchen",
    ],
  },

  {
    lessonNumber: 6,
    title: "Shopping & Money",
    keywords: [
      "buy",
      "sell",
      "shopping",
      "shop",
      "price",
      "money",
      "cost",
      "pay",
      "purchase",
      "cheap",
      "expensive",
      "cash",
      "bank",
      "business",
      "market",
      "store",
    ],
  },

  {
    lessonNumber: 7,
    title: "Travel & Transportation",
    keywords: [
      "travel",
      "trip",
      "train",
      "bus",
      "car",
      "transport",
      "station",
      "airport",
      "flight",
      "road",
      "drive",
      "ride",
      "vehicle",
      "journey",
      "destination",
      "ticket",
    ],
  },

  {
    lessonNumber: 8,
    title: "Places & Directions",
    keywords: [
      "place",
      "location",
      "direction",
      "north",
      "south",
      "east",
      "west",
      "street",
      "building",
      "city",
      "town",
      "country",
      "area",
      "region",
      "address",
    ],
  },

  {
    lessonNumber: 9,
    title: "Nature & Environment",
    keywords: [
      "nature",
      "environment",
      "weather",
      "rain",
      "snow",
      "wind",
      "sun",
      "cloud",
      "mountain",
      "river",
      "sea",
      "ocean",
      "tree",
      "flower",
      "animal",
      "plant",
      "earth",
      "pollution",
    ],
  },

  {
    lessonNumber: 10,
    title: "Health & Body",
    keywords: [
      "health",
      "body",
      "head",
      "eye",
      "ear",
      "mouth",
      "hand",
      "foot",
      "heart",
      "blood",
      "pain",
      "sick",
      "illness",
      "disease",
      "hospital",
      "doctor",
      "medicine",
      "health",
    ],
  },

  {
    lessonNumber: 11,
    title: "Feelings & Personality",
    keywords: [
      "feeling",
      "emotion",
      "happy",
      "sad",
      "angry",
      "afraid",
      "fear",
      "love",
      "hate",
      "worry",
      "anxiety",
      "personality",
      "kind",
      "friendly",
      "serious",
      "calm",
      "excited",
    ],
  },

  {
    lessonNumber: 12,
    title: "Communication & Language",
    keywords: [
      "speak",
      "talk",
      "say",
      "tell",
      "language",
      "word",
      "meaning",
      "conversation",
      "question",
      "answer",
      "message",
      "letter",
      "write",
      "read",
      "explain",
      "communication",
      "information",
    ],
  },

  {
    lessonNumber: 13,
    title: "Common Actions & Movement",
    keywords: [
      "go",
      "come",
      "move",
      "run",
      "walk",
      "stand",
      "sit",
      "open",
      "close",
      "put",
      "take",
      "give",
      "receive",
      "carry",
      "hold",
      "throw",
      "pull",
      "push",
    ],
  },

  {
    lessonNumber: 14,
    title: "Time & Events",
    keywords: [
      "time",
      "day",
      "week",
      "month",
      "year",
      "morning",
      "afternoon",
      "evening",
      "night",
      "today",
      "tomorrow",
      "yesterday",
      "event",
      "schedule",
      "period",
      "season",
      "future",
      "past",
    ],
  },

  {
    lessonNumber: 15,
    title: "Society & Culture",
    keywords: [
      "society",
      "culture",
      "tradition",
      "custom",
      "government",
      "law",
      "politics",
      "country",
      "community",
      "religion",
      "history",
      "war",
      "peace",
      "social",
      "public",
    ],
  },

  {
    lessonNumber: 16,
    title: "Technology & Modern Life",
    keywords: [
      "computer",
      "technology",
      "machine",
      "system",
      "internet",
      "electric",
      "phone",
      "device",
      "engine",
      "data",
      "program",
      "digital",
      "information",
      "science",
    ],
  },

  {
    lessonNumber: 17,
    title: "Thoughts, Opinions & Ideas",
    keywords: [
      "idea",
      "thought",
      "opinion",
      "believe",
      "think",
      "reason",
      "meaning",
      "knowledge",
      "understand",
      "decision",
      "purpose",
      "reason",
      "possibility",
      "problem",
      "solution",
    ],
  },

  {
    lessonNumber: 18,
    title: "Appearance & Description",
    keywords: [
      "beautiful",
      "ugly",
      "large",
      "small",
      "long",
      "short",
      "high",
      "low",
      "wide",
      "narrow",
      "appearance",
      "shape",
      "color",
      "size",
      "similar",
      "different",
      "description",
    ],
  },

  {
    lessonNumber: 19,
    title: "Abstract Concepts & Society",
    keywords: [
      "cause",
      "result",
      "effect",
      "change",
      "condition",
      "situation",
      "state",
      "quality",
      "value",
      "system",
      "method",
      "purpose",
      "relationship",
      "difference",
      "reason",
      "importance",
    ],
  },

  {
    lessonNumber: 20,
    title: "N3 Review & Miscellaneous",
    keywords: [],
  },
];

const usedIds = new Set();

const lessons = lessonDefinitions.map((definition) => {
  const vocabulary = [];

  // Last lesson receives everything that wasn't categorized.
  if (definition.lessonNumber === 20) {
    for (const item of n3) {
      if (!usedIds.has(item.id)) {
        vocabulary.push(item);
        usedIds.add(item.id);
      }
    }
  } else {
    for (const item of n3) {
      if (usedIds.has(item.id)) continue;

      const meanings = (item.meanings || [])
        .join(" ")
        .toLowerCase();

      const matched = definition.keywords.some((keyword) =>
        meanings.includes(keyword.toLowerCase())
      );

      if (matched) {
        vocabulary.push(item);
        usedIds.add(item.id);
      }
    }
  }

  return {
    level: "N3",
    lessonNumber: definition.lessonNumber,
    title: definition.title,
    vocabulary,
  };
});

module.exports = lessons;