import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Find = () => {
  const { gameId } = useParams();
  localStorage.setItem("gameId", gameId);

  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null);
  const [createdBy, setCreatedBy] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGameData = async () => {
      const response = await axios.get(
        `https://fakefriendfinder.onrender.com/api/game/${gameId}`
      );
      setCreatedBy(response.data.createdBy);
      console.log(response.data);
    };

    fetchGameData();
  }, [gameId]);

  return (
    <div className="flex flex-col items-center justify-center bg-[#f8e8d1] w-full h-[calc(100vh-80px)] p-4">
      <div className="mt-[-80px] flex flex-col items-center justify-center w-full max-w-[400px]">
        <h1 className="font-bold text-8xl mt-4">😜</h1>
        <h1 className="text-xl font-bold mt-2">- {createdBy} - </h1>
        <p className="text-center">is searching for fake friends!</p>
        <div className="bg-white/20 shadow-md mt-8 p-6 rounded-3xl w-full">
          <h2 className="text-lg font-semibold text-center">
            accept the dare if <br /> you are a real friend!
          </h2>
          <button className="flex items-center justify-center gap-1 p-4 bg-red-500 hover:bg-green-600 text-white text-base font-semibold rounded-3xl w-full max-w-[400px] mt-4 shadow-md">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Find;
