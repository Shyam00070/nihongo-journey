import React from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

function Kanji() {
  const { level } = useParams();
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + `/api/kanji/${level}`)
      .then((res) => res.json())
      .then((data) => setLessons(data));
  }, [level]);

  return (
    <>
      <div className="min-h-screen bg-[#F8F6F2]">
        <Navbar />

        <div className="py-8 px-12">

          <h1 className="text-xl font-bold mb-4 text-[#B83A3A]">
            日本語の旅 · {level} · 漢字
          </h1>

          <h1 className="text-6xl font-bold mb-4 text-[#b3aeae] tracking-wide">
            Kanji journey
          </h1>

          <p className="text-lg mb-4 mt-8 text-[#9A918B]">
            Learn the kanji for your {level} level.
          </p>

          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">

              <h1 className="text-md font-bold text-[#252220] bg-[#FFFEFC] px-4 py-3 rounded-3xl border border-[#E8E2DA]">
                {lessons.length} Lessons
              </h1>

              <h1 className="text-md font-bold text-[#B83A3A] bg-[#F3D9D7] px-4 py-3 rounded-3xl border border-[#E8E2DA]">
                {level}
              </h1>

            </div>
          </div>

          {lessons.map((lesson) => (
            <div
              key={lesson.lessonNumber}
              className="mb-6 p-4 bg-[#FFFEFC] rounded-xl"
            >

              <h2 className="text-xl font-semibold mb-2 text-[#B83A3A]">
                Lesson {lesson.lessonNumber}
              </h2>

              <div className="flex items-center justify-between">

                <h1 className="text-3xl mb-2 font-bold text-[#b3aeae]">
                  {lesson.title}
                </h1>

                <div
                  onClick={() =>
                    navigate(
                      `/kanji/${level}/${lesson.lessonNumber}`
                    )
                  }
                  className="bg-[#F3D9D7] p-3 rounded-full text-[#B83A3A] cursor-pointer hover:bg-[#B83A3A] hover:text-[#F3D9D7] transition-colors duration-300"
                >
                  <ArrowRight size={24} />
                </div>

              </div>

              <p className="text-[#252220] text-lg">
                {lesson.kanji.length} kanji
              </p>

            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default Kanji;