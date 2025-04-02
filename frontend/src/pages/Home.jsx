import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] flex flex-col items-center">
        <div className="relative bg-[#f8e8d1] w-full">
          <div className="max-w-[250px] sm:max-w-[400px] h-auto mx-auto">
            <img src="/home.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white max-w-[400px] w-full h-full gap-2 p-4">
          <h1 className="text-4xl font-extrabold text-center uppercase -rotate-6">
            who's{" "}
            <span className="text-red-500">
              fake,
              <br />
            </span>{" "}
            who's <span className="text-red-500">real?</span>
          </h1>
          <h2 className=" text-[#444] font-bold text-xl mt-4">
            - How it works?
          </h2>
          <div className="flex flex-col sm:flex-row sm:gap-2 text-sm items-center justify-center py-4">
            {/* Step 1: Create Quiz */}
            <div className="flex flex-row items-center justify-start gap-4 border border-gray-200 rounded-lg p-2 w-51">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#444"
                  strokeWidth="1.5"
                  fill="white"
                />
                <path
                  d="M8 12H16M12 8V16"
                  stroke="#444"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-[#444]">Create Quiz</p>
            </div>

            {/* Step 2: Share with Friends */}
            <div className="flex flex-row items-center justify-start gap-4 border border-gray-200 rounded-lg p-2 w-51">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="12" r="3" stroke="#444" strokeWidth="1.5" />
                <circle cx="18" cy="6" r="3" stroke="#444" strokeWidth="1.5" />
                <circle cx="18" cy="18" r="3" stroke="#444" strokeWidth="1.5" />
                <path
                  d="M9 10.5L15 7.5M9 13.5L15 16.5"
                  stroke="#444"
                  strokeWidth="1.5"
                />
              </svg>
              <p className="text-[#444]">Share with Friends</p>
            </div>

            {/* Step 3: See Their Score */}
            <div className="flex flex-row items-center justify-start gap-4 border border-gray-200 rounded-lg p-2 w-51">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#444"
                  strokeWidth="1.5"
                  fill="white"
                />
                <path
                  d="M8 12L10.5 14.5L16 9"
                  stroke="#444"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[#444]">See Their Score</p>
            </div>
          </div>
          <Link to={"/user/name"} className="w-full">
            <button className="p-4 bg-red-500 hover:bg-red-600 outline-0 w-full rounded-3xl text-white font-semibold text-lg">
              Find Out Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
