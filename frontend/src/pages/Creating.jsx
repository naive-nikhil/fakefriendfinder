import React, { useState } from "react";
import { useGame } from "../context/GameContext";
import questions from "../data/gameData";
import { useNavigate } from "react-router-dom";

const Creating = () => {
  const navigate = useNavigate();
  const { userName } = useGame();
  const [curQueIndex, setCurQueIndex] = useState(0);
  const [selQue, setSelQue] = useState([]);
  const totalQuestions = 10;
  const progressPercentage = ((selQue.length + 1) / totalQuestions) * 100;
  const curQue = questions[curQueIndex];

  const handleSelectAnswer = (answer) => {
    console.log(answer);
    setSelQue([...selQue, { question: curQue.question, answer }]);

    if (selQue.length + 1 === totalQuestions) {
      navigate("/user/share");
    }

    setCurQueIndex((prev) => prev + 1);
  };

  const handleSkip = () => {
    setCurQueIndex((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center bg-[#f8e8d1] w-full h-[calc(100vh-80px)] p-4">
      <p className="text-sm italic mb-4">Hii {userName} 👋</p>
      <div className="max-w-[400px] w-full mx-auto bg-black/10 h-2 border-0 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-500 transition-all duration-300 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-[#2b2b2b] mt-2">
        Question {selQue.length + 1} of {totalQuestions}
      </p>
      <h2 className="text-lg font-semibold mt-4 text-center">
        {curQue.question}
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-2 mt-4 max-w-[400px] w-full">
        {curQue.options.map((option, index) => (
          <button
            key={index}
            className="flex items-center gap-4 p-3 bg-white border border-gray-300 rounded-3xl hover:bg-gray-200 w-full shadow-sm"
            onClick={() => handleSelectAnswer(option.value)}
          >
            <div className="w-25 h-25 overflow-hidden rounded-3xl shadow-lg border-4 border-black/10">
              <img
                className="object-cover w-full h-full"
                src={option.image}
                alt=""
              />
            </div>
            <p className="font-semibold">{option.value}</p>
          </button>
        ))}
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="p-4 bg-red-500 hover:bg-red-600 outline-0 rounded-3xl text-white font-semibold text-sm mt-4"
      >
        Skip Question
      </button>
    </div>
  );
};

export default Creating;
