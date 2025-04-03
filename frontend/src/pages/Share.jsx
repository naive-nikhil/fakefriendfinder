import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "react-spinners/PulseLoader";

const Share = () => {
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();
  const { gameId } = useParams();
  const shareLink = `https://fakefriend.netlify.app/find/${gameId}`;
  const [buttonText, setButtonText] = useState("Copy");
  const message = encodeURIComponent(
    "*_Hey there_*! 👋\n\n" +
      "*Nikhil Patel*\n_is searching_\n*Fake Friends!* 🤔\n\n" +
      "Check now at Fake Friend Finder!! 👇\n" +
      `${shareLink}\n`
  );
  const whatsappURL = `whatsapp://send?text=${message}`;

  const handleClick = (e) => {
    navigator.clipboard.writeText(shareLink);
    setButtonText("Copied!");

    setTimeout(() => {
      setButtonText("Copy");
    }, 3000);
  };

  const handleNewQuiz = async () => {
    setDeleting(true);
    const existingGameId = localStorage.getItem("gameId");
    if (!existingGameId) return;

    try {
      await axios.delete(
        `https://fakefriendfinder.onrender.com/api/delete-game/${existingGameId}`
      );
      localStorage.removeItem("gameId");
      localStorage.removeItem("userName");
      navigate("/", { replace: true });
      setDeleting(false);
    } catch (error) {
      console.error("Error deleting game:", error);
      setDeleting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#f8e8d1] w-full h-screen p-4 mt-[-80px]">
      <h2 className="text-xl font-bold mb-2">Your Game is Ready! 🎉</h2>
      <p className="text-base text-gray-700">
        Share this link and find fake friends
      </p>
      <div className="flex items-center mt-4 gap-4 bg-white rounded-3xl shadow-md border border-gray-300 w-full max-w-[400px] text-center">
        <p className="text-sm font-medium text-black/50 overflow-hidden px-4">
          {shareLink}
        </p>
        <button
          onClick={handleClick}
          className="p-4 bg-red-500 text-white text-sm font-semibold rounded-3xl hover:bg-red-600"
        >
          {buttonText}
        </button>
      </div>
      <button
        onClick={() => (window.location.href = whatsappURL)}
        className="flex items-center justify-center gap-1 p-4 bg-green-500 hover:bg-green-600 text-white text-base font-semibold rounded-3xl w-full max-w-[400px] mt-4"
      >
        <img width="25" height="25" src="/whatsapp.png" alt="whatsapp--v1" />
        Share on Whatsapp
      </button>
      <p
        onClick={handleNewQuiz}
        className="text-sm mt-2 text-red-500 font-medium flex flex-col justify-center items-center gap-2 cursor-pointer"
      >
        Create new quiz and delete this one!{" "}
        <Loader loading={deleting} color="#fb2c36" size={5} />
      </p>
    </div>
  );
};

export default Share;
