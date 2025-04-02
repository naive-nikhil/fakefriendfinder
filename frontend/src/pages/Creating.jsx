import React from "react";
import { useGame } from "../context/GameContext";

const Creating = () => {
  const { userName } = useGame();
  return (
    <div className="bg-[#f8e8d1] w-full h-[calc(100vh-80px)] p-4">
      <h1 className="font-bold text-center text-2xl">Welcome {userName}</h1>
    </div>
  );
};

export default Creating;
