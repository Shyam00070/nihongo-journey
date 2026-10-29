import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LevelPage from "./pages/LevelPage";
import ScrollToTop from "./components/ScrollToTop";
import Hiragana from "./pages/Hiragana";
import Katakana from "./pages/Katakana";
import Vocabulary from "./pages/Vocabulary";
import Grammar from "./pages/Grammar";
import LessonVocabulary from "./pages/LessonVocabulary";
import GrammarLesson from "./pages/GrammarLessons";
import Kanji from "./pages/Kanji";
import KanjiLesson from "./pages/KanjiLessons";

function Home() {
  return (
    <div className="App bg-[#F8F6F2]">
      <Navbar />
      <Hero />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* JLPT Level Pages */}
        <Route path="/n5" element={<LevelPage level="N5" />} />
        <Route path="/n4" element={<LevelPage level="N4" />} />
        <Route path="/n3" element={<LevelPage level="N3" />} />

        {/* Kana */}
        <Route path="/hiragana" element={<Hiragana/>} />
        <Route path="/katakana" element={<Katakana />} />

        {/* Vocabulary */}
        <Route path="/vocabulary/:level" element={<Vocabulary />} />

        <Route
          path="/vocabulary/:level/:lessonNumber"
          element={<LessonVocabulary />}
        />

        {/* Grammar */}
        <Route path="/grammar/:level" element={<Grammar />} />

        <Route
          path="/grammar/:level/:lessonNumber"
          element={<GrammarLesson />}
        />

        {/* Kanji */}
        <Route path="/kanji/:level" element={<Kanji />} />
        <Route path="/kanji/:level/:lessonNumber" element={<KanjiLesson />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
