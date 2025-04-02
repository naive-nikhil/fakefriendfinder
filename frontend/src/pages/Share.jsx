import React from "react";
import { useParams } from "react-router-dom";

const Share = () => {
  const { gameId } = useParams(); // Get game ID from URL

  const shareLink = `http://yourwebsite.com/find/${gameId}`;

  return (
    <div className="flex flex-col items-center bg-[#f8e8d1] w-full h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Your Game is Ready! 🎉</h2>
      <p className="text-sm text-gray-700">
        Share this link with your friends:
      </p>
      <div className="mt-2 p-2 bg-white rounded-lg shadow-md border border-gray-300 w-full max-w-[400px] text-center">
        <p className="text-sm break-all">{shareLink}</p>
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(shareLink)}
        className="mt-4 p-3 bg-red-500 text-white rounded-3xl hover:bg-red-600"
      >
        Copy Link
      </button>
    </div>
  );
};

export default Share;
