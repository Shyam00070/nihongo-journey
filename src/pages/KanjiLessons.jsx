

import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function KanjiLessons() {
  const { level, lessonNumber } = useParams();

  const [lesson, setLesson] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
      fetch(import.meta.env.VITE_API_URL + `/api/kanji/${level}/${lessonNumber}`)
      .then((res) => res.json())
      .then((data) => setLesson(data));
  }, [level, lessonNumber]);

  if (!lesson) {
    return <div>Loading...</div>;
  }

  const handleClick = (character) => {
    setExpandedItem(
      expandedItem === character ? null : character
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2]">

      <Navbar />

      <div className="p-12">

        <h1 className="text-4xl font-bold text-[#252220]">
          Lesson {lesson.lessonNumber}
        </h1>

        <h2 className="text-2xl text-[#B83A3A] mt-2">
          {lesson.title}
        </h2>

        <p className="mt-2 text-[#756D68]">
          {lesson.kanji.length} kanji
        </p>

        <div className="mt-8">

          {lesson.kanji.map((item) => (

            <div
              key={item.character}
              className="mb-4 p-5 bg-[#FFFEFC] rounded-xl border border-[#E8E2DA]"
            >

              {/* Kanji and Stroke Count */}

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-6xl font-bold text-[#252220]">
                    {item.character}
                  </h3>

                  <p className="mt-2 text-[#756D68]">
                    {item.meanings.join(", ")}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-[#756D68]">
                    <span className="font-semibold">
                      Strokes:
                    </span>{" "}
                    {item.strokes}
                  </p>

                  <div
                    onClick={() => handleClick(item.character)}
                    className="mt-3 inline-block bg-[#F3D9D7] p-3 rounded-full text-[#B83A3A] cursor-pointer hover:bg-[#B83A3A] hover:text-[#F3D9D7] transition-colors duration-300"
                  >

                    <ChevronDown
                      size={24}
                      className={`transition-transform duration-300 ${
                        expandedItem === item.character
                          ? "rotate-180"
                          : ""
                      }`}
                    />

                  </div>

                </div>

              </div>


              {/* Expanded Kanji Details */}

              {expandedItem === item.character && (

                <div className="mt-5 pt-4 border-t border-[#E8E2DA]">

                  {/* Onyomi and Kunyomi */}

                  <div className="grid grid-cols-2 gap-6">

                    <div>

                      <h4 className="text-lg font-semibold text-[#B83A3A]">
                        Onyomi
                      </h4>

                      <p className="mt-2 text-[#252220]">
                        {item.onyomi && item.onyomi.length > 0
                          ? item.onyomi.join(" ・ ")
                          : "—"}
                      </p>

                    </div>


                    <div>

                      <h4 className="text-lg font-semibold text-[#B83A3A]">
                        Kunyomi
                      </h4>

                      <p className="mt-2 text-[#252220]">
                        {item.kunyomi && item.kunyomi.length > 0
                          ? item.kunyomi.join(" ・ ")
                          : "—"}
                      </p>

                    </div>

                  </div>


                  {/* Example Words */}

                  <div className="mt-6">

                    <h4 className="text-lg font-semibold text-[#B83A3A]">
                      Example Words
                    </h4>

                    <div className="mt-3 grid grid-cols-2 gap-3">

                      {item.words && item.words.length > 0 ? (
                        item.words.map((word, index) => (

                          <div
                            key={index}
                            className="bg-[#F1ECE5] px-4 py-3 rounded-lg"
                          >

                            <p className="text-xl text-[#252220]">
                              {word}
                            </p>

                          </div>

                        ))
                      ) : (
                        <p className="text-[#756D68]">
                          No example words available.
                        </p>
                      )}

                    </div>

                  </div>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default KanjiLessons;