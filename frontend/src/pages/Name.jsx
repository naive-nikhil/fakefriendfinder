import React from "react";

const Name = () => {
  return (
    <div className="bg-[#f8e8d1] w-full h-[calc(100vh-80px)] p-4">
      <div className="flex flex-col gap-2 justify-center items-center max-w-[400px] w-full h-full mx-auto mt-[-80px]">
        <h1 className="text-5xl">😄</h1>
        <h2 className="text-xl font-bold">
          What's your <span className="text-[#f93943]">name?</span>
        </h2>
        <input
          type="text"
          placeholder="name..."
          maxLength={15}
          className="p-4 border-2 border-black/10 w-full rounded-3xl outline-0 font-semibold"
        />
        <button
          type="submit"
          className="p-4 bg-[#f93943] w-full rounded-3xl text-white font-semibold text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Name;
