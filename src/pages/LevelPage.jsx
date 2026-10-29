import levels from "../data/levels";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function LevelPage({ level }) {
  const data = levels[level];
  const navigate = useNavigate();

  const scrollToContent = () => {
    document.getElementById("level-content")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <div className="h-screen bg-[#F8F6F2] relative overflow-hidden">
        <div
          className="
            relative z-10
            w-[50%] px-20 py-10

            max-md:w-full
            max-md:px-6
            max-md:py-10
          "
        >
          <p className="font-bold text-lg" style={{ color: data.primary }}>
            JLPT {level}
          </p>

          <span className="text-[#9A9690] text-sm">{data.text}</span>

          <h1
            className="
              text-5xl font-bold text-[#1F1F1F] mt-3

              max-md:text-3xl
              max-md:leading-tight
            "
          >
            {data.title}
          </h1>

          <p
            className="
              text-[#6B6863] text-lg mt-5 max-w-md

              max-md:text-base
              max-md:max-w-sm
            "
          >
            {data.description}
          </p>

          <span
            className="inline-flex items-center px-4 py-2 rounded-full
                       font-semibold text-sm mt-6"
            style={{
              backgroundColor: data.light,
              color: data.primary,
            }}
          >
            Level {level}
          </span>

          <div
            className="
              flex gap-4 mt-6

              max-md:flex-col
              max-md:gap-3
              max-md:items-start
            "
          >
            <button
              onClick={scrollToContent}
              className="px-5 py-3 rounded-xl text-base font-semibold
                         cursor-pointer transition-all duration-200
                         hover:opacity-90 w-[180px] h-14"
              style={{
                backgroundColor: data.primary,
                color: "#FFFFFF",
              }}
            >
              Explore This Level
            </button>

            <button
              onClick={() => navigate("/")}
              className="px-5 py-3 rounded-xl text-base
                         border border-[#D8D2CA]
                         text-[#1F1F1F]
                         cursor-pointer
                         transition-colors duration-200
                         hover:bg-white w-[190px] h-14"
            >
              Explore Other Levels
            </button>
          </div>

          {level === "N5" && (
            <>
              <h3 className="inline-block bg-[#FCE9E7] px-5 py-3 rounded-xl text-lg font-semibold text-[#B83A3A] mt-6">
                Start learning Japanese by mastering the characters
              </h3>

              <div className="flex gap-6 mt-6">
                <button
                  onClick={() => navigate("/hiragana")}
                  className="
                    h-[150px] w-[220px]
                    rounded-xl
                    border border-[#E8E2DA]
                    bg-white/60
                    flex flex-col items-center justify-center
                    gap-2
                    cursor-pointer
                    transition-all duration-200
                    hover:bg-[#FCE9E7]
                    hover:border-[#F3D5D0]
                    hover:shadow-md
                    hover:-translate-y-1
                  "
                >
                  <span className="text-4xl font-medium text-[#B83A3A]">
                    あ
                  </span>

                  <span className="text-lg font-semibold text-[#1F1F1F]">
                    Hiragana
                  </span>

                  <span className="text-sm text-[#6B6863]">
                    Learn the basic characters
                  </span>
                </button>

                <button
                  onClick={() => navigate("/katakana")}
                  className="
                    h-[150px] w-[220px]
                    rounded-xl
                    border border-[#E8E2DA]
                    bg-white/60
                    flex flex-col items-center justify-center
                    gap-2
                    cursor-pointer
                    transition-all duration-200
                    hover:bg-[#FCE9E7]
                    hover:border-[#F3D5D0]
                    hover:shadow-md
                    hover:-translate-y-1
                  "
                >
                  <span className="text-4xl font-medium text-[#B83A3A]">
                    ア
                  </span>

                  <span className="text-lg font-semibold text-[#1F1F1F]">
                    Katakana
                  </span>

                  <span className="text-sm text-[#6B6863]">
                    Learn the basic characters
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className="
          absolute top-0 right-0 h-screen overflow-hidden

          max-md:top-auto
          max-md:bottom-0
          max-md:right-0
          max-md:w-full
          max-md:h-[40%]
        "
      >
        <img
          src={data.image}
          alt={data.title}
          className="
            w-fit max-h-fit object-cover mix-blend-multiply

            max-md:w-full
            max-md:h-full
            max-md:object-contain
            max-md:object-right
          "
        />
      </div>

      <section
        id="level-content"
        className="
          bg-[#F8F6F2]
          min-h-screen
          pt-12
          pb-6

          max-md:pt-8
        "
      >
        <h2
          className="
            text-2xl font-bold ml-170

            max-md:ml-0
            max-md:text-xl
            max-md:text-center
            max-md:px-4
          "
          style={{ color: data.primary }}
        >
          Your {level} Learning Journey
        </h2>

        <p
          className="
            text-xl font-semibold text-[#1F1F1F] ml-185 mt-2

            max-md:ml-0
            max-md:text-base
            max-md:text-center
            max-md:px-4
          "
        >
          Step up your skills
        </p>

        <div
          className="
            flex items-start mt-10 px-6

            max-md:flex-col
            max-md:px-4
            max-md:mt-6
          "
        >
          <aside
            className="
              hidden lg:block
              w-[200px]
              shrink-0
              mr-4
            "
          >
            <div
              className="bg-white rounded-xl
                         border border-[#E8E2DA]
                         p-4
                         min-h-[538px] cursor-pointer"
            >
              <h2
                className="text-lg font-bold mb-5"
                style={{ color: data.primary }}
              >
                Learn
              </h2>

              <div className="flex flex-col gap-2 cursor-pointer">
                <button
                  className="w-full text-left px-3 py-2 rounded-lg
                             text-sm font-medium
                             transition-all duration-200 cursor-pointer"
                             onClick={() => navigate(`/vocabulary/${level}`)}
                  style={{
                    backgroundColor: data.light,
                    color: data.primary,
                  }}
                >
                  📖 Vocabulary
                </button>

                <button
                  className="w-full text-left px-3 py-2 rounded-lg
                             text-sm font-medium text-[#6B6863]
                             hover:bg-[#F8F6F2]
                             transition-colors cursor-pointer"
                             onClick={() => navigate(`/grammar/${level}`)}
                >
                  文&nbsp;&nbsp; Grammar
                </button>

                <button
                  className="w-full text-left px-3 py-2 rounded-lg
                             text-sm font-medium text-[#6B6863]
                             hover:bg-[#F8F6F2]
                             transition-colors cursor-pointer"
                             onClick={() => navigate(`/kanji/${level}`)}
                >
                  漢&nbsp;&nbsp; Kanji
                </button>
              </div>

              <div className="border-t border-[#E8E2DA] my-5" />

              <div className="flex flex-col gap-2">
                <button
                  className="w-full text-left px-3 py-2 rounded-lg
                             text-sm font-medium text-[#6B6863]
                             hover:bg-[#F8F6F2]
                             transition-colors cursor-pointer"
                >
                  🎯 Practice
                </button>

                <button
                  className="w-full text-left px-3 py-2 rounded-lg
                             text-sm font-medium text-[#6B6863]
                             hover:bg-[#F8F6F2]
                             transition-colors cursor-pointer"
                >
                  📊 Progress
                </button>

                <div className="border-t border-[#E8E2DA] my-5" />

                <p
                  className="text-xs font-semibold text-[#9A9690]
                             uppercase tracking-wide mb-2 cursor-pointer"
                >
                  Levels
                </p>

                <div className="flex flex-col gap-2">
                  {level !== "N5" && (
                    <button
                      onClick={() => navigate("/n5")}
                      className="w-full text-left px-3 py-2 rounded-lg
                                 text-sm font-medium text-[#6B6863]
                                 hover:bg-[#F8F6F2]
                                 transition-colors cursor-pointer"
                    >
                      🌱 N5 Level
                    </button>
                  )}

                  {level !== "N4" && (
                    <button
                      onClick={() => navigate("/n4")}
                      className="w-full text-left px-3 py-2 rounded-lg
                                 text-sm font-medium text-[#6B6863]
                                 hover:bg-[#F8F6F2]
                                 transition-colors cursor-pointer"
                    >
                      🏔️ N4 Level
                    </button>
                  )}

                  {level !== "N3" && (
                    <button
                      onClick={() => navigate("/n3")}
                      className="w-full text-left px-3 py-2 rounded-lg
                                 text-sm font-medium text-[#6B6863]
                                 hover:bg-[#F8F6F2]
                                 transition-colors cursor-pointer"
                    >
                      ⛩️ N3 Level
                    </button>
                  )}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0 w-full">
            <div className="flex justify-center px-0">
              <div
                className="
                  w-full max-w-5xl
                  bg-white rounded-2xl
                  p-6 shadow-sm
                  border border-[#E8E2DA]

                  max-md:p-4
                "
              >
                <h2
                  className="text-lg font-semibold"
                  style={{ color: data.primary }}
                >
                  Your {level} Progress
                </h2>

                <div
                  className="
                    w-full h-3
                    bg-[#E8E5E1]
                    rounded-full
                    mt-4
                    overflow-hidden

                    max-md:h-2.5
                  "
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "50%",
                      backgroundColor: data.primary,
                    }}
                  />
                </div>

                <div
                  className="
                    flex justify-between
                    mt-2
                    text-sm text-[#6B6863]

                    max-md:text-xs
                  "
                >
                  <span>50% completed</span>
                  <span>Keep going!</span>
                </div>
              </div>
            </div>

            <h2
              className="
                text-xl font-semibold
                text-[#1F1F1F]
                text-center mt-10

                max-md:text-lg
                max-md:mt-8
              "
            >
              What do you want to learn?
            </h2>

            <div
              className="
                sections
                flex flex-col md:flex-row
                justify-center
                gap-6
                mt-6
                px-0

                max-md:gap-4
              "
            >
              <div
                className="
                  vocabulary
                  h-36
                  w-full md:w-80
                  bg-[#FFFFFF]
                  rounded-lg
                  relative
                  border border-[#E8E2DA]
                  hover:-translate-y-1
                  transition-all duration-200
                  hover:shadow-md
                "
              >
                <p className="text-2xl absolute left-3 top-2">📖</p>

                <h3
                  className="text-lg font-bold absolute left-14 top-4"
                  style={{ color: data.primary }}
                >
                  Vocabulary
                </h3>

                <span
                  className="px-3 h-6 rounded-full font-semibold text-xs
                             absolute top-4 right-3
                             flex items-center justify-center"
                  style={{
                    backgroundColor: data.light,
                    color: data.primary,
                  }}
                >
                  Level {level}
                </span>

                <p
                  className="
                    absolute left-5 top-16
                    text-sm text-[#6B6863]

                    max-md:pr-4
                  "
                >
                  Learn useful Japanese words
                </p>

                <button
                onClick={() => navigate(`/vocabulary/${level}`)}
                  className="absolute bottom-3 right-4
                             text-sm font-semibold cursor-pointer"
                  style={{ color: data.primary }}
                >
                  Start Learning →
                </button>
              </div>

              <div
                className="
                  vocabulary
                  h-36
                  w-full md:w-80
                  bg-[#FFFFFF]
                  rounded-lg
                  relative
                  border border-[#E8E2DA]
                  hover:-translate-y-1
                  transition-all duration-200
                  hover:shadow-md
                "
              >
                <p className="text-2xl absolute left-3 top-2">文</p>

                <h3
                  className="text-lg font-bold absolute left-14 top-4"
                  style={{ color: data.primary }}
                >
                  Grammar
                </h3>

                <span
                  className="px-3 h-6 rounded-full font-semibold text-xs
                             absolute top-4 right-3
                             flex items-center justify-center"
                  style={{
                    backgroundColor: data.light,
                    color: data.primary,
                  }}
                >
                  Level {level}
                </span>

                <p
                  className="
                    absolute left-5 top-16
                    text-sm text-[#6B6863]

                    max-md:pr-4
                  "
                >
                  Understand sentence structures and rules
                </p>

                <button
                  className="absolute bottom-3 right-4
                             text-sm font-semibold cursor-pointer"
                  style={{ color: data.primary }}
                  onClick={() => navigate(`/grammar/${level}`)}
                >
                  Start Learning →
                </button>
              </div>

              <div
                className="
                  vocabulary
                  h-36
                  w-full md:w-80
                  bg-[#FFFFFF]
                  rounded-lg
                  relative
                  border border-[#E8E2DA]
                  hover:-translate-y-1
                  hover:shadow-md
                  transition-all duration-200
                "
              >
                <p className="text-2xl absolute left-3 top-2">漢</p>

                <h3
                  className="text-lg font-bold absolute left-14 top-4"
                  style={{ color: data.primary }}
                >
                  Kanji
                </h3>

                <span
                  className="px-3 h-6 rounded-full font-semibold text-xs
                             absolute top-4 right-3
                             flex items-center justify-center"
                  style={{
                    backgroundColor: data.light,
                    color: data.primary,
                  }}
                >
                  Level {level}
                </span>

                <p
                  className="
                    absolute left-5 top-16
                    text-sm text-[#6B6863]

                    max-md:pr-4
                  "
                >
                  Master kanji characters and their meanings
                </p>

                <button
                  className="absolute bottom-3 right-4
                             text-sm font-semibold cursor-pointer"
                  style={{ color: data.primary }}
                  onClick={() => navigate(`/kanji/${level}`)}
                >
                  Start Learning →
                </button>
              </div>
            </div>

            <div
              className="
                cards
                flex flex-col xl:flex-row
                justify-center
                gap-6
                mt-6
                px-0

                max-md:gap-4
              "
            >
              <div
                className="
                  continue
                  w-full xl:w-[680px]
                  h-36
                  bg-white
                  px-5 py-3
                  rounded-lg
                  relative
                  border border-[#E8E2DA]
                  hover:-translate-y-1
                  transition-all duration-200
                  hover:shadow-md

                  max-md:h-auto
                  max-md:min-h-36
                "
              >
                <h1
                  className="text-xl font-bold"
                  style={{ color: data.primary }}
                >
                  Continue Learning
                </h1>

                <p className="text-sm mt-2 text-[#1F1F1F]">
                  {data.continueLearning.category} -{" "}
                  {data.continueLearning.lesson}:{" "}
                  {data.continueLearning.title}
                </p>

                <div
                  className="
                    w-[96%]
                    h-[5px]
                    bg-[#E8E5E1]
                    rounded-full
                    mt-4
                    overflow-hidden

                    max-md:w-full
                  "
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${
                        (data.continueLearning.completed /
                          data.continueLearning.total) *
                        100
                      }%`,
                      backgroundColor: data.primary,
                    }}
                  />
                </div>

                <div
                  className="
                    flex justify-between
                    mt-2
                    text-sm text-[#6B6863]
                  "
                >
                  <span>
                    {data.continueLearning.completed} /{" "}
                    {data.continueLearning.total}
                  </span>

                  <button
                    className="font-semibold cursor-pointer"
                    style={{ color: data.primary }}
                  >
                    Continue →
                  </button>
                </div>
              </div>

              <div
                className="
                  today-goal
                  w-full xl:w-76
                  h-36
                  bg-white
                  px-5 py-3
                  rounded-lg
                  relative
                  border border-[#E8E2DA]
                  hover:-translate-y-1
                  transition-all duration-200
                  hover:shadow-md

                  max-md:h-auto
                  max-md:min-h-36
                "
              >
                <h1
                  className="text-xl font-bold"
                  style={{ color: data.primary }}
                >
                  Today's Goal
                </h1>

                <p className="text-sm text-[#6B6863] mt-3">
                  {data.todayGoal.completed} /{" "}
                  {data.todayGoal.total}{" "}
                  {data.todayGoal.unit}
                </p>

                <div
                  className="
                    w-full
                    h-[5px]
                    bg-[#E8E5E1]
                    rounded-full
                    mt-3
                    overflow-hidden
                  "
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${
                        (data.todayGoal.completed /
                          data.todayGoal.total) *
                        100
                      }%`,
                      backgroundColor: data.primary,
                    }}
                  />
                </div>

                <p className="text-xs text-[#6B6863] mt-2">
                  Keep going! 🔥
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LevelPage;