import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

function Grammar() {
  const { level, lessonNumber } = useParams();
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      import.meta.env.VITE_API_URL + `/api/grammar/${level}`
      .then((res) => res.json())
      .then((data) => setLessons(data));
  }, [level]);

  return (
    <>
      <div className="min-h-screen bg-[#F8F6F2]">
        <Navbar />

        <div className="py-8 px-12">
          <h1 className="text-xl font-bold mb-4 text-[#B83A3A]">
            
            日本語の旅 · {level}
          </h1>

          <h1 className="text-6xl font-bold mb-4 text-[#b3aeae] tracking-wide">
            Grammar journey
          </h1>

          <p className="text-lg mb-4 mt-8 text-[#9A918B]">
            Learn the essential grammar patterns and sentence structures for
            your {level} level.
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
                  className="bg-[#F3D9D7] p-3 rounded-full text-[#B83A3A] cursor-pointer hover:bg-[#B83A3A] hover:text-[#F3D9D7] transition-colors duration-300"
                >
                  <ArrowRight size={24} onClick={() =>
                    navigate(
                      `/grammar/${level}/${lesson.lessonNumber}`
                    )
                  }/>
                </div>
              </div>

              <p className="text-[#252220] text-lg">
                {lesson.grammar.length} grammar points
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Grammar;