import React, { useState, useEffect } from "react";
import questions from "../data/gameData";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";

const Creating = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const [curQueIndex, setCurQueIndex] = useState(0);
  const [selQue, setSelQue] = useState([]);
  const [submitting, setSubmitting] = useState(false); // Loader state
  const totalQuestions = 10;
  const progressPercentage = ((selQue.length + 1) / totalQuestions) * 100;

  if (curQueIndex >= questions.length) {
    setCurQueIndex(0);
  }

  const curQue = questions[curQueIndex];

  const handleSubmitQuiz = async () => {
    setSubmitting(true);
    try {
      const response = await axios.post(
        "https://fakefriendfinder.onrender.com/api/create-game",
        {
          createdBy: userName,
          gameData: selQue,
        }
      );

      if (response.data && response.data.gameId) {
        console.log(response.data.gameId);
        localStorage.setItem("gameId", response.data.gameId);
        navigate(`/user/share/${response.data.gameId}`, { replace: true });
      }
    } catch (error) {
      console.error("Error creating game:", error);
      setSubmitting(false); // Hide loader if error occurs
    }
  };

  const handleSelectAnswer = (correctAnswer) => {
    if (selQue.length >= totalQuestions) return;

    // Get wrong options (excluding correct one)
    const wrongOptions = questions
      .flatMap((q) => q.options)
      .filter((opt) => opt !== correctAnswer);

    // Pick a random wrong answer
    const randomWrongAnswer =
      wrongOptions[Math.floor(Math.random() * wrongOptions.length)];

    setSelQue((prevSelQue) => [
      ...prevSelQue,
      {
        question: curQue.question,
        correctAnswer,
        options: [correctAnswer, randomWrongAnswer].sort(
          () => Math.random() - 0.5
        ), // Shuffle options
      },
    ]);

    setCurQueIndex((prev) => (prev + 1) % questions.length);
  };

  const handleSkip = () => {
    if (selQue.length >= totalQuestions) return;
    setCurQueIndex((prev) => (prev + 1) % questions.length);
  };

  useEffect(() => {
    if (selQue.length === totalQuestions) {
      handleSubmitQuiz();
    }
  }, [selQue]);

  return (
    <div className="flex flex-col items-center bg-[#f8e8d1] w-full h-[calc(100vh-80px)] p-4">
      {/* Show loader if submitting */}
      {submitting ? (
        <div className="flex flex-col items-center justify-center h-full">
          <BounceLoader color="#fb2c36" size={40} />
          <p className="text-sm mt-4">Submitting your quiz...</p>
        </div>
      ) : (
        <>
          <p className="text-sm italic mb-4">Hii {userName} 👋</p>
          <div className="max-w-[400px] w-full mx-auto bg-black/10 h-2 border-0 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-[#2b2b2b] mt-2">
            Question{" "}
            {selQue.length < totalQuestions
              ? selQue.length + 1
              : totalQuestions}{" "}
            of {totalQuestions}
          </p>
          <h2 className="text-lg font-semibold mt-4 text-center">
            {curQue.question}
          </h2>

          {/* Options */}
          <div className="flex flex-col gap-2 mt-4 max-w-[400px] w-full">
            {curQue.options.map((option, index) => (
              <button
                key={index}
                className={`flex items-center gap-4 p-3 bg-white border border-gray-300 rounded-3xl hover:bg-gray-100 w-full shadow-sm active:bg-gray-100 ${
                  selQue.length >= totalQuestions
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100 active:bg-gray-100"
                }`}
                onClick={() => handleSelectAnswer(option.value)}
                disabled={selQue.length >= totalQuestions}
              >
                <div className="w-25 h-25 overflow-hidden rounded-3xl shadow-sm border-4 border-black/10">
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
            className="p-4 bg-red-500 hover:bg-red-600 outline-0 rounded-3xl text-white font-semibold text-sm mt-4 disabled:bg-red-300 disabled:cursor-not-allowed"
            disabled={selQue.length >= totalQuestions}
          >
            Skip Question
          </button>
        </>
      )}
    </div>
  );
};

export default Creating;
