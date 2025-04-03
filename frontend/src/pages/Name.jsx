import React from "react";
import InputWithCharacterCount from "../components/InputWithCharacterCount";
import { useNavigate } from "react-router-dom";

const Name = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f8e8d1] w-full h-[calc(100vh-80px)] p-4">
      <div className="flex flex-col gap-2 justify-center items-center max-w-[400px] w-full h-full mx-auto mt-[-80px]">
        <h1 className="text-5xl">😄</h1>
        <h2 className="text-xl font-bold">
          What's your <span className="text-red-500">name?</span>
        </h2>
        <InputWithCharacterCount maxLength={15} placeholder="name..." />
        <button
          type="submit"
          onClick={() => navigate("/user/creating")}
          className="p-4 bg-red-500 hover:bg-red-600 outline-0 w-full rounded-3xl text-white font-semibold text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Name;
