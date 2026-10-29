const n3Grammar = require("./n3grammar.json");

const grammarLessonDefinitions = [
  {
    lessonNumber: 1,
    title: "Reason, Explanation & Advice",
    grammarIds: [
      "wake-da",
      "wake-de-wa-nai",
      "wake-ga-nai",
      "wake-ni-wa-ikanai",
      "mono-da",
      "mono-de-wa-nai",
      "mono-mon",
      "mono-dakara-mono-de",
      "koto-da",
    ],
  },

  {
    lessonNumber: 2,
    title: "Decisions, Rules & Requests",
    grammarIds: [
      "koto-wa-nai",
      "koto-ni-shite-iru",
      "koto-ni-natte-iru",
      "koto-instruction",
      "you-ni-iu-you-ni-tanomu",
      "you-to-suru",
      "ba-ii",
      "beki-da-beki-de-wa-nai",
      "shika-nai-no-choice",
    ],
  },

  {
    lessonNumber: 3,
    title: "Possibility, Conjecture & Appearance",
    grammarIds: [
      "sou-ni-nai-sou-mo-nai",
      "rashii-typical-of",
      "ni-chigai-nai",
      "ni-kimatte-iru",
      "ki-ga-suru",
      "marude-you-da",
      "furi-o-suru",
      "ppoi",
      "teki",
      "you-na-you-ni-like",
    ],
  },

  {
    lessonNumber: 4,
    title: "Comparison, Contrast & Standpoint",
    grammarIds: [
      "ippou-de",
      "ni-taishite",
      "to-shite",
      "ni-totte",
      "ni-shite-wa",
      "ni-shite-mo",
      "ni-kurabete",
      "wari-ni-wari-ni-wa",
      "hodo-wa-nai",
    ],
  },

  {
    lessonNumber: 5,
    title: "Topic, Relation & Formal Expressions",
    grammarIds: [
      "ni-tsuite",
      "ni-yotte-ni-yoru",
      "ni-yoru-to-ni-yoreba",
      "ni-kanshite-ni-kansuru",
      "ni-kawatte",
      "kawari-ni",
      "ni-shitagatte",
      "ni-tsurete",
      "to-tomo-ni",
    ],
  },

  {
    lessonNumber: 6,
    title: "Time, Sequence & Simultaneous Actions",
    grammarIds: [
      "uchi-ni",
      "tokoro-ni-tokoro-e-tokoro-o",
      "tabi-ni",
      "goto-ni",
      "saichuu-ni",
      "tsuide-ni",
      "ta-totan-ta-totan-ni",
      "tara-ta",
      "te-hajimete",
      "kara-ni-kakete",
      "buri",
    ],
  },

  {
    lessonNumber: 7,
    title: "Conditions, Concession & Limits",
    grammarIds: [
      "ba-hodo",
      "sae-ba",
      "tatte-datte",
      "nai-koto-wa-nai",
      "baai-wa",
      "to-sureba-to-shitara",
      "to-shite-mo",
      "kuse-ni",
      "kara-to-itte",
    ],
  },

  {
    lessonNumber: 8,
    title: "Addition, Emphasis & Degree",
    grammarIds: [
      "bakari-de-naku",
      "dake-de-naku",
      "mo-ba-mo",
      "sae",
      "koso",
      "kurai-gurai-extent",
      "hodo",
      "made-even",
      "te-shou-ga-nai-te-shikata-ga-nai",
      "te-tamaranai",
      "nanka-nante",
    ],
  },

  {
    lessonNumber: 9,
    title: "Hearsay, Quotation & Explanation",
    grammarIds: [
      "toka-hearsay",
      "tte",
      "to-iu-koto-da",
      "to-iu-no-wa",
      "to-iu-yori",
    ],
  },

  {
    lessonNumber: 10,
    title: "Change, Tendency & State",
    grammarIds: [
      "ippou-da",
      "mama",
      "te-bakari-iru",
      "gachi",
      "gimi",
      "darake",
      "kiru-kirenai",
      "kakeru",
      "au",
      "naosu",
    ],
  },

  {
    lessonNumber: 11,
    title: "Manner, Purpose & Useful Patterns",
    grammarIds: [
      "zurai",
      "you-to-suru",
      "masu-you-ni",
      "muki-muke",
      "au",
      "ni-shite-mo",
      "to-shite",
      "ni-totte",
      "ni-kanshite-ni-kansuru",
    ],
  },

  {
    lessonNumber: 12,
    title: "Final N3 Review & Casual Expressions",
    grammarIds: [
      "wake-da",
      "koto-da",
      "you-to-suru",
      "tte",
      "kke",
      "furi-o-suru",
      "gachi",
      "gimi",
      "darake",
      "zurai",
      "hodo-wa-nai",
      "shika-nai-no-choice",
      "made-even",
      "tokoro-datta",
      "toori-ni-doori-ni",
      "nanka-nante",
    ],
  },
];

const grammarLessons = grammarLessonDefinitions.map((definition) => {
  const grammar = n3Grammar.filter((item) =>
    definition.grammarIds.includes(item.id)
  );

  return {
    level: "N3",
    lessonNumber: definition.lessonNumber,
    title: definition.title,
    grammar,
  };
});

module.exports = grammarLessons;