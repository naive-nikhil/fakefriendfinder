import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";

const Find = () => {
  const { gameId } = useParams();
  localStorage.setItem("gameId", gameId);

  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null);
  const [createdBy, setCreatedBy] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [gameData, setGameData] = useState(null);
  const [fetching, setFetching] = useState(false);

  const fetchGameData = () => {
    setFetching(true);
    const storedData = localStorage.getItem(`gameData_${gameId}`);
    if (storedData) {
      setGameData(JSON.parse(storedData));
      setFetching(false);
      return;
    }

    // Fetch only if not in localStorage
    axios
      .get(`https://fakefriendfinder.onrender.com/api/game/${gameId}`)
      .then((response) => {
        if (response.data) {
          localStorage.setItem(
            `gameData_${gameId}`,
            JSON.stringify(response.data.hashedGameData)
          );
          localStorage.setItem("createdBy", response.data.createdBy);
          setGameData(response.data.hashedGameData);
          setCreatedBy(response.data.createdBy);
          setFetching(false);
          console.log("Game data fetched and stored in localStorage.");
        }
      })
      .catch((error) => console.error("Error fetching game data:", error));
  };

  useEffect(() => {
    if (gameId) fetchGameData();
    setCreatedBy(localStorage.getItem("createdBy"));
  }, [gameId]);

  return (
    <div className="flex flex-col items-center justify-center bg-[#f8e8d1] w-full h-[calc(100vh-80px)] p-4">
      {fetching ? (
        <BounceLoader
          loading={fetching}
          color="#FF0000"
          size={50}
          className="mt-[-80px]"
        />
      ) : (
        <div className="mt-[-80px] flex flex-col items-center justify-center w-full max-w-[400px]">
          <h1 className="font-bold text-8xl mt-4">😜</h1>
          <h1 className="text-xl font-bold mt-2">- {createdBy} - </h1>
          <p className="text-center">is searching for fake friends!</p>
          <div className="bg-white/20 border-4 border-white/30 shadow-md mt-8 p-6 rounded-3xl w-full">
            <h2 className="text-lg font-semibold text-center">
              accept the dare if <br /> you are a real friend!
            </h2>
            <button
              onClick={() => navigate("/player/name")}
              className="flex items-center justify-center gap-1 p-4 bg-red-500 hover:bg-red-600 text-white text-base font-semibold rounded-3xl w-full max-w-[400px] mt-4 shadow-md cursor-pointer"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Find;
