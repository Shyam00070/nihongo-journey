import React from "react";
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="
          flex justify-items-normal items-center
          p-4 bg-[#FFFFFF]
          border-b border-[#E5E0D9]
          sticky top-0 z-50

          max-md:px-4
          max-md:py-3
        "
      >
        <h1
          className="
            text-[#1F1F1F] text-2xl font-bold

            max-md:text-lg
            max-sm:text-base
          "
        >
          <span className="text-2xl">🌸</span> Nihongo Journey
        </h1>

        <div
          className="
            middle flex gap-4 justify-items-center items-center
            ml-100 text-lg cursor-pointer

            max-lg:ml-auto
            max-lg:mr-8

            max-md:gap-6
            max-md:mr-4
            max-md:text-sm

            max-sm:hidden
          "
        >
            <p className="text-[#1F1F1F] hover:font-semibold hover:text-[#FF6B6B]"
            onClick={() => navigate("/")}>
            Home
          </p>

          <p className="text-[#1F1F1F] hover:font-semibold hover:text-[#FF6B6B]" onClick={() => navigate("/n5")}>
            Learn
          </p>



          <p className="text-[#1F1F1F] hover:font-semibold hover:text-[#FF6B6B]" onClick={() => navigate("/resources")}>
            Resources
          </p>

          <p className="text-[#1F1F1F] hover:font-semibold hover:text-[#FF6B6B]" onClick={() => navigate("/progress")}>
            Progress
          </p>
        </div>

        <div
          className="
            right flex gap-4 justify-items-center items-center
            ml-auto cursor-pointer

            max-md:gap-4
          "
        >
          <UserRound
            size={30}
            color="#1F1F1F"
            className="max-md:w-6 max-md:h-6"
          />

          <p
            className="
              text-[#1F1F1F] text-xl hover:font-semibold

              max-md:text-sm
              max-sm:hidden
              hover:text-[#FF6B6B]
              cursor-pointer
            "
            onClick={() => navigate("./hiragana")}
          >
            Get Started
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;