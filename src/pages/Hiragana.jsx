import { useState } from "react";
import { hiragana, hiraganaExtra } from "../data/kana";
import { useNavigate } from "react-router-dom";

function Hiragana() {
  const navigate = useNavigate();

  const [learned, setLearned] = useState([]);

  const [selectedKana, setSelectedKana] = useState(hiragana[0]);

  const handleMarked = (kana) => {
    if (learned.includes(kana)) {
      setLearned(learned.filter((item) => item !== kana));
    } else {
      setLearned([...learned, kana]);
    }
  };

  const playKana = (audioFile) => {
    const audio = new Audio(audioFile);

    audio.currentTime = 0;

    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
  };

  const handleKanaClick = (item) => {
    setSelectedKana(item);
  };

  const isLearned = (kana) => {
    return learned.includes(kana);
  };

  const progressPercentage =
    (learned.length / (hiragana.length + hiraganaExtra.length)) * 100;

  return (
    <div className="min-h-screen bg-[#F8F6F2]">

      <div className="bg-[#F8F6F2]">
        <div className="top flex justify-between items-center px-18 py-12">

          <div>
            <h3 className="text-xl font-bold text-[#B83A3A] tracking-wide">
              N5 · JP BASICS
            </h3>

            <h1 className="text-5xl font-bold text-[#b3aeae] mt-2">
              Learn Hiragana
            </h1>

            <p className="text-sm text-[#6B6863] mt-2">
              Start reading Japanese, one character at a time.
            </p>
          </div>

          <div className="w-64">

            <div className="flex justify-between items-center mb-2">

              <p className="text-sm font-medium text-[#1F1F1F]">
                Your Progress
              </p>

              <p className="text-sm text-[#6B6863]">
                  {learned.length} / {hiragana.length + hiraganaExtra.length}
              </p>

            </div>

            <div className="w-full bg-[#E8E5E1] rounded-full h-2">

              <div
                className="bg-[#B83A3A] h-2 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>

            </div>

          </div>

        </div>
      </div>

      <div className="sections flex gap-4 mx-18 mb-4">

        <button
          className="bg-[#B83A3A] text-white cursor-pointer border py-2 px-4 rounded-lg"
          onClick={() => navigate("/hiragana")}
        >
          Hiragana
        </button>

        <button
          className="hover:bg-[#B83A3A] text-black cursor-pointer hover:border-[#B83A3A] hover:text-white border py-2 px-4 rounded-lg"
          onClick={() => navigate("/katakana")}
        >
          Katakana
        </button>

      </div>

      <div className="px-18 pb-12">

        <div className="flex justify-between items-center mb-5">

          <div>

            <h2 className="text-xl font-bold text-[#1F1F1F]">
              Hiragana characters
            </h2>

            <p className="text-sm text-[#6B6863] mt-1">
              Click a character to explore
            </p>

          </div>

        </div>

        <div className="flex items-start gap-12">

          <div className="flex-1">

            <div className="grid grid-cols-5 gap-4 max-w-4xl">

              {hiragana.map((item) => (

                <button
                  key={item.kana}
                  onClick={() => handleKanaClick(item)}
                  className={`
                    h-24
                    bg-white
                    border
                    rounded-xl
                    flex flex-col
                    items-center
                    justify-center
                    cursor-pointer
                    transition-all duration-200
                    hover:bg-[#FCE9E7]
                    hover:border-[#F3D5D0]
                    hover:-translate-y-1
                    hover:shadow-md
                    ${
                      selectedKana.kana === item.kana
                        ? "bg-[#FCE9E7] border-[#B83A3A] shadow-md"
                        : "border-[#E8E2DA]"
                    }
                  `}
                >

                  <span className="text-3xl font-medium text-[#B83A3A]">
                    {item.kana}
                  </span>

                  <span className="text-sm text-[#6B6863] mt-1">
                    {item.romaji}
                  </span>

                </button>

              ))}

            </div>

            <h1 className="text-xl font-bold text-[#1F1F1F] mt-8">
              Extra Hiragana Characters
            </h1>

            <p className="text-sm text-[#6B6863] mt-1 mb-4">
              Dakuten and handakuten characters
            </p>

            <div className="grid grid-cols-5 gap-4 max-w-4xl">

              {hiraganaExtra.map((item) => (

                <button
                  key={item.kana}
                  onClick={() => handleKanaClick(item)}
                  className={`
                    h-24
                    bg-white
                    border
                    rounded-xl
                    flex flex-col
                    items-center
                    justify-center
                    cursor-pointer
                    transition-all duration-200
                    hover:bg-[#FCE9E7]
                    hover:border-[#F3D5D0]
                    hover:-translate-y-1
                    hover:shadow-md
                    ${
                      selectedKana.kana === item.kana
                        ? "bg-[#FCE9E7] border-[#B83A3A] shadow-md"
                        : "border-[#E8E2DA]"
                    }
                  `}
                >

                  <span className="text-3xl font-medium text-[#B83A3A]">
                    {item.kana}
                  </span>

                  <span className="text-sm text-[#6B6863] mt-1">
                    {item.romaji}
                  </span>

                </button>

              ))}

            </div>

          </div>

          <div className="w-80 shrink-0 sticky top-8">

            <div className="bg-white border border-[#E8E2DA] rounded-2xl p-8">

              <p className="text-xs font-semibold tracking-widest text-[#B83A3A] uppercase text-center">
                Hiragana
              </p>

              <div className="text-center mt-6">

                <span className="text-8xl font-medium text-[#B83A3A]">
                  {selectedKana.kana}
                </span>

              </div>

              <p className="text-xl text-[#6B6863] text-center mt-3">
                {selectedKana.romaji}
              </p>

              <button
                onClick={() => playKana(selectedKana.audio)}
                className="
                  mt-8
                  w-full
                  bg-[#B83A3A]
                  text-white
                  py-3
                  px-5
                  rounded-xl
                  cursor-pointer
                  hover:bg-[#9f3030]
                  transition
                  font-medium
                "
              >
                🔊 Listen
              </button>

              <div className="border-t border-[#E8E2DA] mt-8 pt-6">

                <div className="flex justify-between py-2">

                  <span className="text-sm text-[#6B6863]">
                    Character
                  </span>

                  <span className="text-sm font-medium text-[#1F1F1F]">
                    {selectedKana.kana}
                  </span>

                </div>

                <div className="flex justify-between py-2">

                  <span className="text-sm text-[#6B6863]">
                    Romaji
                  </span>

                  <span className="text-sm font-medium text-[#1F1F1F]">
                    {selectedKana.romaji}
                  </span>

                </div>

                <div className="flex justify-between py-2">

                  <span className="text-sm text-[#6B6863]">
                    Type
                  </span>

                  <span className="text-sm font-medium text-[#1F1F1F]">
                    {hiraganaExtra.some(
                      (item) => item.kana === selectedKana.kana
                    )
                      ? "Dakuten / Handakuten"
                      : "Basic kana"}
                  </span>

                </div>

                <span className="text-sm font-medium text-[#1F1F1F] cursor-pointer">

                  <input
                    type="checkbox"
                    className="mt-2 accent-green-500 cursor-pointer"
                    checked={isLearned(selectedKana.kana)}
                    onChange={() => handleMarked(selectedKana.kana)}
                  />

                  <span className="ml-4">
                    {isLearned(selectedKana.kana)
                      ? "Learned"
                      : "Mark as learned"}
                  </span>

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Hiragana;