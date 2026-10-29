import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";

function GrammarLesson() {
  const { level, lessonNumber } = useParams();

  const [lesson, setLesson] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
      import.meta.env.VITE_API_URL + `/api/grammar/${level}/${lessonNumber}`
      .then((res) => res.json())
      .then((data) => setLesson(data));
  }, [level, lessonNumber]);

  if (!lesson) {
    return <div>Loading...</div>;
  }

  const handleClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

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
        {lesson.grammar.length} grammar points
      </p>

      <div className="mt-8">

        {lesson.grammar.map((item) => (

          <div
            key={item.id}
            className="mb-4 p-5 bg-[#F1ECE5] rounded-xl border border-[#E2D8CC]"
          >

            <h3 className="text-2xl font-bold text-[#252220]">
              {item.pattern}
            </h3>

            <p className="mt-2 text-[#756D68]">
              {item.meaning}
            </p>

            <div className="flex items-center justify-between">

              <p className="mt-3 text-[#252220]">
                <span className="font-semibold">
                  Formation:
                </span>{" "}
                {item.formation}
              </p>

              <div
                onClick={() => handleClick(item.id)}
                className="bg-[#F3D9D7] p-3 rounded-full text-[#B83A3A] cursor-pointer hover:bg-[#B83A3A] hover:text-[#F3D9D7] transition-colors duration-300"
              >

                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${
                    expandedItem === item.id
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </div>

            </div>

            {expandedItem === item.id && (

              <div className="mt-5 pt-4 border-t border-[#E8E2DA]">

                <h4 className="text-lg font-semibold text-[#B83A3A]">
                  Examples
                </h4>

                <div className="mt-3 space-y-4">

                  {item.examples.map((example, index) => (

                    <div key={index}>

                      <p className="text-xl text-[#252220]">
                        {example.ja}
                      </p>

                      <p className="text-[#756D68] mt-1">
                        {example.en}
                      </p>

                    </div>

                  ))}

                </div>

                {item.notes && (

                  <div className="mt-5">

                    <h4 className="text-lg font-semibold text-[#B83A3A]">
                      Notes
                    </h4>

                    <p className="mt-2 text-[#756D68]">
                      {item.notes}
                    </p>

                  </div>

                )}

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
    </div>
  );
}

export default GrammarLesson;