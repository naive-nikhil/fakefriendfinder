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
    };
  });

  return (
    <div className="flex flex-col items-center bg-[#f8e8d1] w-full h-[calc(100vh-80px)] p-4"></div>
  );
};

export default Find;
