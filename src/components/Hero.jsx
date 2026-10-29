import React from "react";
import { ArrowDown, ArrowRight, ChevronDown } from "lucide-react";
import fuji from "../assets/fuji.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const scrollToLevels = () => {
    document.getElementById("levels")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  return (
    <>
      <div
        className="
          hero bg-[#F8F6F2] pb-4 flex gap-20 relative overflow-hidden

          max-md:flex-col
          max-md:gap-0
          max-md:min-h-screen
          max-md:pb-0
        "
      >
        <div
          className="
            left mt-10 ml-20 w-[55%]

            max-md:mt-8
            max-md:ml-0
            max-md:px-6
            max-md:w-full
            max-md:relative
            max-md:z-10
          "
        >
          <h1
            className="
              text-[#B83A3A] font-bold text-xl

              max-md:text-base
            "
          >
            YOUR JOURNEY TO JAPANESE
          </h1>

          <hr className="w-1/12 border-[#B83A3A] border-2 mt-4 mb-2 max-md:w-16" />

          <h1
            className="
              mt-6 text-5xl font-bold

              max-md:text-4xl
              max-md:mt-5
              max-md:leading-tight
            "
          >
            Master Japanese,
          </h1>

          <h1
            className="
              mt-2 text-5xl font-bold

              max-md:text-4xl
              max-md:leading-tight
            "
          >
            one level at a time.
          </h1>

          <h1
            className="
              mt-6

              max-md:text-sm
              max-md:mt-5
              max-md:max-w-sm
            "
          >
            Learn vocabulary,kanji and grammar through
          </h1>

          <h1
            className="
              mt-1

              max-md:text-sm
              max-md:max-w-sm
            "
          >
            structured JLPT practice.
          </h1>

          <div
            className="
              buttons mt-6 flex gap-4

              max-md:flex-col
              max-md:gap-3
              max-md:items-start
            "
          >
            <button
              className="
                bg-[#B83A3A] text-white p-4 rounded-lg w-40 h-12
                flex gap-2 justify-center items-center cursor-pointer
                hover:bg-[#8F2D2D]

                max-md:w-44
              "
              onClick={() => navigate("/n5")}
            >
              Start Learning
              <ArrowRight size={16} />
            </button>

            <button
              onClick={scrollToLevels}
              className="
                text-[#1F1F1F] p-4 rounded-lg w-40 h-12
                flex justify-center items-center border gap-2
                cursor-pointer border-[#D8D2CA]
                hover:bg-[#F4E2DF]

                max-md:w-44
              "
            >
              Explore Levels
              <ArrowDown size={16} />
            </button>
          </div>
        </div>

        <div
          className="
            right relative overflow-hidden

            max-md:absolute
            max-md:bottom-0
            max-md:right-0
            max-md:w-full
            max-md:h-[42%]
            max-md:z-0
          "
        >
          <img
            src={fuji}
            alt="Fuji"
            className="
              w-[1800px] h-full object-cover

              max-md:w-full
              max-md:h-full
              max-md:object-cover
              max-md:object-right
            "
          />

          <h1
            className="
              text-[#B83A3A] font-serif text-6xl font-medium
              [writing-mode:vertical-rl] tracking-[0.2em]
              absolute top-[25%] left-[30%]
              transform -translate-x-1/2 -translate-y-1/2

              max-md:text-4xl
              max-md:top-[35%]
              max-md:left-[35%]
            "
          >
            日本語
          </h1>

          <h1
            className="
              text-[#1F1F1F] font-serif text-2xl absolute
              top-[40%] left-[40%] tracking-[0.1em] font-bold
              transform -translate-x-1/2 -translate-y-1/2
              [writing-mode:vertical-rl]

              max-md:text-base
              max-md:top-[45%]
              max-md:left-[50%]
            "
          >
            学ぶ・練習・成長する
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg
            className="block w-full h-[90px] max-md:h-[55px]"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#FFFFFF"
              d="M0 45 
                 C180 75 300 15 500 45 
                 C700 75 820 20 1000 45 
                 C1180 70 1300 15 1440 40 
                 L1440 100 
                 L0 100 
                 Z"
            />
          </svg>
        </div>

        <button
          onClick={scrollToLevels}
          aria-label="Scroll to levels"
          className="
            absolute bottom-4 left-1/2 -translate-x-1/2
            text-[#B83A3A] bg-white w-12 h-12 rounded-full
            flex items-center justify-center cursor-pointer
            hover:bg-[#F4E2DF]

            max-md:w-10
            max-md:h-10
            max-md:bottom-2
          "
        >
          <ChevronDown size={30} className="max-md:w-6 max-md:h-6" />
        </button>
      </div>

      <div
        id="levels"
        className="
          cards bg-[#FFFFFF] pt-4

          max-md:pt-8
          max-md:px-4
        "
      >
        <h1
          className="
            text-lg text-[#B83A3A] text-center font-bold tracking-wide

            max-md:text-base
          "
        >
          CHOOSE YOUR LEVEL
        </h1>

        <p
          className="
            text-center text-[#1F1F1F] mt-2 text-2xl font-semibold

            max-md:text-xl
            max-md:leading-tight
          "
        >
          Start where you are. Grow step by step.
        </p>

        <p
          className="
            text-center text-[#6B6863] mt-1

            max-md:text-sm
            max-md:px-2
          "
        >
          Select your JLPT level and start your Japanese journey.
        </p>

        <div
          className="
            cards flex items-center justify-center gap-6 mt-6 mb-6

            max-md:flex-col
            max-md:gap-5
            max-md:mt-8
          "
        >
          <div
            className="
              card bg-[#FFFEFC] border border-[#E8E2DA]
              rounded-lg pt-6 w-[340px] relative cursor-pointer

              max-md:w-full
              max-md:max-w-[340px]
            "
            onClick={() => navigate("/n5")}
          >
            <div className="px-6">
              <div
                className="
                  w-14 h-14 rounded-full bg-[#FCE9E7]
                  flex items-center justify-center mb-4
                  absolute -top-[px] left-66

                  max-md:left-auto
                  max-md:right-5
                "
              >
                <p className="text-[#B83A3A] text-2xl">🌱</p>
              </div>

              <h2 className="text-xl font-bold text-[#B83A3A]">N5</h2>

              <p className="text-[#1F1F1F]">Beginner</p>

              <hr className="w-1/8 border-[#B83A3A] border-2 mt-2 mb-2" />

              <p className="text-[#6B6863] text-sm">
                Start your Japanese journey with the basics.
              </p>
            </div>

            <div
              className="
                bg-[#FCE9E7] px-6 py-2 flex
                justify-between items-center mt-4 cursor-pointer
                hover:bg-[#F4D6D2] transition-colors duration-200
              "
            >
              <button className="text-[#B83A3A] font-bold">View Level</button>

              <ArrowRight size={20} className="text-[#B83A3A]" />
            </div>
          </div>

          <div
            className="
              card cursor-pointer bg-[#FFFEFC]
              border border-[#E8E2DA] rounded-lg pt-6
              w-[340px] relative

              max-md:w-full
              max-md:max-w-[340px]
            "
            onClick={() => {
              navigate("/n4");
            }}
          >
            <div className="px-6">
              <div
                className="
                  w-14 h-14 rounded-full bg-[#F3E5D5]
                  flex items-center justify-center mb-4
                  absolute -top-[px] left-66

                  max-md:left-auto
                  max-md:right-5
                "
              >
                <p className="text-[#B87532] text-2xl">🏔️</p>
              </div>

              <h2 className="text-xl font-bold text-[#ceab80]">N4</h2>

              <p className="text-[#1F1F1F]">Elementary</p>

              <hr className="w-1/8 border-[#F3E5D5] border-2 mt-2 mb-2" />

              <p className="text-[#6B6863] text-sm">
                Build your foundation and understand more.
              </p>
            </div>

            <div
              className="
                bg-[#F6EDE1] px-6 py-2 flex
                justify-between items-center mt-4 cursor-pointer
                hover:bg-[#EEDFCB] transition-colors duration-200
              "
            >
              <button
                onClick={() => navigate("/n4")}
                className="text-[#B87532] font-bold"
              >
                View Level
              </button>

              <ArrowRight size={20} className="text-[#B87532]" />
            </div>
          </div>

          <div
            className="
              card cursor-pointer bg-[#FFFEFC]
              border border-[#E8E2DA] rounded-lg pt-6
              w-[340px] relative

              max-md:w-full
              max-md:max-w-[340px]
            "
            onClick={() => {
              navigate("/n3");
            }}
          >
            <div className="px-6">
              <div
                className="
                  w-14 h-14 rounded-full bg-[#DCE9F2]
                  flex items-center justify-center mb-4
                  absolute -top-[px] left-66

                  max-md:left-auto
                  max-md:right-5
                "
              >
                <p className="text-[#35658A] text-2xl">⛩️</p>
              </div>

              <h2 className="text-xl font-bold text-[#35658A]">N3</h2>

              <p className="text-[#1F1F1F]">Intermediate</p>

              <hr className="w-1/8 border-[#E8F0F6] border-2 mt-2 mb-2" />

              <p className="text-[#6B6863] text-sm">
                Take your Japanese to the next level.
              </p>
            </div>

            <div
              className="
                bg-[#E8F0F6] px-6 py-2 flex
                justify-between items-center mt-4 cursor-pointer
                hover:bg-[#D8E6F0] transition-colors duration-200
              "
            >
              <button className="text-[#35658A] font-bold">View Level</button>

              <ArrowRight size={20} className="text-[#35658A]" />
            </div>
          </div>
        </div>

        <div
          className="
            flex justify-center items-center gap-2 mt-4 mb-6

            max-md:mt-6
            max-md:pb-2
          "
        >
          <span className="text-lg">🌸</span>

          <p className="text-sm text-[#6B6863]">More levels coming soon</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
