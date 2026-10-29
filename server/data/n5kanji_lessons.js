const n5Kanji = require("./n5kanji.json");

const kanjiLessonDefinitions = [
  {
    lessonNumber: 1,
    title: "Numbers & Counting I",
    characters: [
      "一",
      "二",
      "三",
      "四",
      "五",
      "六",
      "七",
    ],
  },

  {
    lessonNumber: 2,
    title: "Numbers & Counting II",
    characters: [
      "八",
      "九",
      "十",
      "百",
      "千",
      "万",
      "円",
    ],
  },

  {
    lessonNumber: 3,
    title: "Calendar & Time",
    characters: [
      "日",
      "月",
      "年",
      "時",
      "分",
      "今",
      "午",
    ],
  },

  {
    lessonNumber: 4,
    title: "Time & Position",
    characters: [
      "前",
      "後",
      "毎",
      "間",
      "上",
      "下",
      "左",
    ],
  },

  {
    lessonNumber: 5,
    title: "People & Family",
    characters: [
      "人",
      "男",
      "女",
      "子",
      "父",
      "母",
      "友",
    ],
  },

  {
    lessonNumber: 6,
    title: "School & Learning",
    characters: [
      "学",
      "校",
      "生",
      "先",
      "本",
      "書",
      "読",
    ],
  },

  {
    lessonNumber: 7,
    title: "Communication & Questions",
    characters: [
      "語",
      "聞",
      "話",
      "何",
      "誰",
      "名",
      "見",
    ],
  },

  {
    lessonNumber: 8,
    title: "Countries & Directions",
    characters: [
      "国",
      "中",
      "外",
      "東",
      "西",
      "南",
      "北",
    ],
  },

  {
    lessonNumber: 9,
    title: "Movement & Daily Actions",
    characters: [
      "出",
      "行",
      "入",
      "来",
      "休",
      "食",
      "車",
    ],
  },

  {
    lessonNumber: 10,
    title: "Nature & Elements",
    characters: [
      "山",
      "川",
      "水",
      "木",
      "火",
      "土",
      "天",
    ],
  },

  {
    lessonNumber: 11,
    title: "Weather & Descriptions",
    characters: [
      "雨",
      "気",
      "大",
      "長",
      "高",
      "小",
      "白",
    ],
  },

  {
    lessonNumber: 12,
    title: "Everyday Life & Supplementary Kanji",
    characters: [
      "半",
      "右",
      "金",
      "電",
      "無",
      "丈",
      "貼",
    ],
  },
];

const kanjiLessons = kanjiLessonDefinitions.map((definition) => {
  const kanji = n5Kanji.filter((item) =>
    definition.characters.includes(item.character)
  );

  return {
    level: "N5",
    lessonNumber: definition.lessonNumber,
    title: definition.title,
    kanji,
  };
});

module.exports = kanjiLessons;