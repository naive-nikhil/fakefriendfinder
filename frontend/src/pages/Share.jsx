import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Share = () => {
  const { gameId } = useParams();
  const shareLink = `https://fakefriendfinder.netlify.app/find/${gameId}`;
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
      <p className="text-sm mt-2">Create new quiz and delete this one!</p>
    </div>
  );
};

export default Share;
