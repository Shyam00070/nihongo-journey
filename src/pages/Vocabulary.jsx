import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Vocabulary() {
  const [lessons, setLessons] = useState([]);
  const { level } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
     fetch(import.meta.env.VITE_API_URL + `/api/lessons/${level}`)
      .then((res) => res.json())
      .then((data) => setLessons(data));
  }, [level]);

  return (
    <div className="min-h-screen bg-[#F8F6F2]">
      <Navbar />
      <div className=" py-8 px-12">
        <h1 className="text-xl font-bold mb-4 text-[#B83A3A]">
          日本語の旅 · {level}
        </h1>
        <h1 className="text-6xl font-bold mb-4 text-[#b3aeae] tracking-wide">
          Vocabulary journey
        </h1>
        <p className="text-lg mb-4 mt-8 text-[#9A918B]">
          Learn new words and phrases for your {level} level.
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
            <div className="flex items-center justify-between ">
              <h1 className="text-3xl mb-2 font-bold text-[#b3aeae]">
                {lesson.title}
              </h1>
              <div className="bg-[#F3D9D7] p-3 rounded-full text-[#B83A3A] cursor-pointer hover:bg-[#B83A3A] hover:text-[#F3D9D7] transition-colors duration-300">
                <ArrowRight size={24} onClick={() => navigate(`/vocabulary/${level}/${lesson.lessonNumber}`)} />
              </div>
            </div>
            <p className="text-[#252220] text-lg">
              {lesson.vocabulary.length} vocabulary words
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vocabulary;
