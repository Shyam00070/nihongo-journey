import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function LessonVocabulary() {
  const { level, lessonNumber } = useParams();
  const navigate = useNavigate();

  const [lesson, setLesson] = useState(null);

  useEffect(() => {
      fetch(import.meta.env.VITE_API_URL + `/api/lessons/${level}/${lessonNumber}`)
      .then((res) => res.json())
      .then((data) => setLesson(data));
  }, [level, lessonNumber]);

  if (!lesson) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8F6F2] ">
      <Navbar />
      <div className="p-12">
      <h1 className="text-4xl font-bold text-[#252220]">
        Lesson {lesson.lessonNumber}
      </h1>

      <h2 className="text-2xl text-[#B83A3A] mt-2">
        {lesson.title}
      </h2>

      <p className="mt-2 text-[#756D68]">
        {lesson.vocabulary.length} vocabulary words
      </p>

      <div className="mt-8">
        {lesson.vocabulary.map((item) => (
          <div
            key={item.id}
            className="mb-4 p-5 bg-[#FFFEFC] rounded-xl border border-[#E8E2DA]"
          >
            <h3 className="text-2xl font-bold text-[#252220]">
              {item.word}
            </h3>

            <p className="text-[#756D68]">
              {item.reading}
            </p>

            <p className="mt-2 text-[#252220]">
              {item.meanings.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default LessonVocabulary;