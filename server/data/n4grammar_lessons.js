const n4Grammar = require("./n4-grammar.json");

const grammarLessonDefinitions = [
  {
    lessonNumber: 1,
    title: "Giving, Receiving & Helpful Actions",
    grammarIds: [
      "ageru-kureru-morau",
      "te-ageru",
      "te-kureru",
      "te-morau",
      "te-kudasaru-te-itadaku",
      "te-hoshii",
      "tagaru",
    ],
  },

  {
    lessonNumber: 2,
    title: "て-Form Expressions",
    grammarIds: [
      "te-iku",
      "te-kuru",
      "te-shimau-chau",
      "te-oku",
      "te-miru",
      "te-aru",
      "koto-ga-aru",
    ],
  },

  {
    lessonNumber: 3,
    title: "Time & Sequence",
    grammarIds: [
      "toki",
      "aida-aida-ni",
      "chuu-juu",
      "ta-bakari",
      "tokoro-da",
      "hajimeru-owaru-tsuzukeru",
      "dasu",
    ],
  },

  {
    lessonNumber: 4,
    title: "Appearance & Conjecture",
    grammarIds: [
      "sou-da-appearance",
      "sou-da-hearsay",
      "rashii",
      "you-da",
      "mitai",
      "kamo-shirenai",
      "darou",
    ],
  },

  {
    lessonNumber: 5,
    title: "Plans, Intentions & Decisions",
    grammarIds: [
      "tsumori",
      "yotei",
      "koto-ni-suru",
      "koto-ni-naru",
      "ou-you",
      "you-to-omou",
      "you-ni-naru",
    ],
  },

  {
    lessonNumber: 6,
    title: "Ability, Potential & Voice",
    grammarIds: [
      "koto-ga-dekiru",
      "eru-rareru-potential",
      "reru-rareru-passive",
      "seru-saseru",
      "serareru-saserareru",
      "you-ni-suru",
      "kata",
    ],
  },

  {
    lessonNumber: 7,
    title: "Conditions",
    grammarIds: [
      "ba",
      "tara",
      "nara",
      "to",
      "te-mo-de-mo",
      "noni-although",
      "nai-to-ikenai-nakucha",
    ],
  },

  {
    lessonNumber: 8,
    title: "Reasons, Purpose & Contrast",
    grammarIds: [
      "noni-purpose",
      "node",
      "te-reason",
      "shi",
      "kedo-keredomo",
      "tame-ni",
      "you-ni",
    ],
  },

  {
    lessonNumber: 9,
    title: "Commands & Requests",
    grammarIds: [
      "e-ro",
      "na-prohibition",
      "nasai",
      "sasete-kudasai",
      "te-mo-kamawanai",
      "te-kuremasen-ka-te-itadakemasen-ka",
      "naide",
    ],
  },

  {
    lessonNumber: 10,
    title: "Questions & Quotations",
    grammarIds: [
      "n-desu-no-desu",
      "ka-dou-ka",
      "ka-embedded-question",
      "to-omou",
      "to-iu-say",
      "kana-kashira",
      "hazu-da",
    ],
  },

  {
    lessonNumber: 11,
    title: "Degree & Limitation",
    grammarIds: [
      "sugiru",
      "shika-nai",
      "bakari",
      "yasui-nikui",
      "hodo-nai",
      "nakanaka-nai",
      "mo-emphasis",
    ],
  },

  {
    lessonNumber: 12,
    title: "Quantity, Examples & Time",
    grammarIds: [
      "made-ni",
      "zutsu",
      "toka-toka",
      "nado",
      "de-mo-suggestion",
      "me",
      "oki-ni",
    ],
  },

  {
    lessonNumber: 13,
    title: "Honorific & Humble Language",
    grammarIds: [
      "sonkeigo",
      "kenjougo",
      "o-ni-naru",
      "o-suru",
      "de-gozaimasu",
      "no-koto-nominalizer",
      "ku-suru-ni-suru",
    ],
  },

  {
    lessonNumber: 14,
    title: "Advice, Feelings & Review",
    grammarIds: [
      "garu",
      "hazu-ga-nai",
      "ba-yokatta",
      "tara-dou",
      "hou-ga-ii",
      "sa",
      "ga-suru",
    ],
  },
];

const grammarLessons = grammarLessonDefinitions.map((definition) => {
  const grammar = definition.grammarIds.map((id) => {
    const item = n4Grammar.find(
      (grammarPoint) => grammarPoint.id === id
    );

    if (!item) {
      throw new Error(`N4 grammar ID not found: ${id}`);
    }

    return item;
  });

  return {
    level: "N4",
    lessonNumber: definition.lessonNumber,
    title: definition.title,
    grammar,
  };
});

// Validation
const assignedIds = grammarLessons.flatMap((lesson) =>
  lesson.grammar.map((item) => item.id)
);

const sourceIds = n4Grammar.map((item) => item.id);

const duplicateIds = assignedIds.filter(
  (id, index) => assignedIds.indexOf(id) !== index
);

const missingIds = sourceIds.filter(
  (id) => !assignedIds.includes(id)
);

if (duplicateIds.length > 0 || missingIds.length > 0) {
  throw new Error(
    `N4 grammar validation failed.
Duplicates: ${[...new Set(duplicateIds)].join(", ")}
Missing: ${missingIds.join(", ")}`
  );
}

module.exports = grammarLessons;