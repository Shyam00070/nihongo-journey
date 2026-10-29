const n5Grammar = require("./n5-grammar.json");

const grammarLessonDefinitions = [
  {
    lessonNumber: 1,
    title: "Basic Sentences & Particles",
    grammarIds: [
      "wa",
      "ga-subject",
      "desu",
      "de-wa-arimasen-ja-nai",
      "deshita",
      "ka-question",
      "ne",
      "yo",
      "no",
      "mo",
    ],
  },

  {
    lessonNumber: 2,
    title: "Demonstratives & Existence",
    grammarIds: [
      "kore-sore-are-dore",
      "kono-sono-ano-dono",
      "koko-soko-asoko-doko",
      "ga-aru-ga-iru",
      "ni-location",
      "nani-ka-dare-ka-doko-ka",
      "nani-mo-nai-dare-mo-nai",
    ],
  },

  {
    lessonNumber: 3,
    title: "Core Particles & Movement",
    grammarIds: [
      "o",
      "ni-time",
      "ni-destination",
      "ni-indirect-object",
      "ni-frequency",
      "e",
      "de-place",
      "de-means",
      "to-and",
      "to-with",
      "ya",
      "ka-or",
      "kara-from",
      "made",
    ],
  },

  {
    lessonNumber: 4,
    title: "Polite Verbs & Time",
    grammarIds: [
      "masu",
      "masen",
      "mashita",
      "masen-deshita",
      "goro",
      "kurai-gurai",
      "mou-ta",
      "mada-te-inai",
    ],
  },

  {
    lessonNumber: 5,
    title: "Adjectives & Preferences",
    grammarIds: [
      "ku-nai-katta-ku-nakatta",
      "na-na-adjective",
      "kute-de",
      "ga-suki-ga-kirai",
      "ga-jouzu-ga-heta",
      "amari-nai",
      "zenzen-nai",
    ],
  },

  {
    lessonNumber: 6,
    title: "て-Form, Requests & Permission",
    grammarIds: [
      "te",
      "te-kudasai",
      "naide-kudasai",
      "te-mo-ii",
      "te-wa-ikenai",
      "te-iru",
      "o-kudasai",
    ],
  },

  {
    lessonNumber: 7,
    title: "Actions, Purpose & Time",
    grammarIds: [
      "ni-iku",
      "mae-ni",
      "ato-de",
      "nagara",
    ],
  },

  {
    lessonNumber: 8,
    title: "Casual & Plain Forms",
    grammarIds: [
      "da",
      "nai",
      "ta",
    ],
  },

  {
    lessonNumber: 9,
    title: "Connecting Ideas & Naming",
    grammarIds: [
      "te-kara",
      "tari-tari-suru",
      "ga-but",
      "to-iu-named",
    ],
  },

  {
    lessonNumber: 10,
    title: "Comparisons & Change",
    grammarIds: [
      "yori",
      "no-hou-ga-yori",
      "to-to-dochira-ga",
      "no-naka-de-ga-ichiban",
      "ku-naru-ni-naru",
      "ni-suru",
    ],
  },

  {
    lessonNumber: 11,
    title: "Wants, Invitations & Experience",
    grammarIds: [
      "mashou",
      "mashou-ka",
      "masen-ka",
      "tai",
      "ga-hoshii",
      "ta-koto-ga-aru",
      "dake",
    ],
  },

  {
    lessonNumber: 12,
    title: "Reasons, Obligation & Conjecture",
    grammarIds: [
      "kara-reason",
      "nakereba-naranai-nakute-wa-ikenai",
      "nakute-mo-ii",
      "deshou",
    ],
  },
];

const grammarLessons = grammarLessonDefinitions.map((definition) => {
  const grammar = n5Grammar.filter((item) =>
    definition.grammarIds.includes(item.id)
  );

  return {
    level: "N5",
    lessonNumber: definition.lessonNumber,
    title: definition.title,
    grammar,
  };
});

module.exports = grammarLessons;