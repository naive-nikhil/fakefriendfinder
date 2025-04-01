import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] flex flex-col items-center">
        <div className="relative">
          <img className="w-[400px] h-auto" src="/home.svg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 mt-4 bg-white w-full h-full">
          <h1 className="text-4xl font-extrabold text-center uppercase -rotate-6 -mt-20">
            who's{" "}
            <span className="text-red-500">
              fake,
              <br />
            </span>{" "}
            who's <span className="text-red-500">real?</span>
          </h1>
          <Link to={"/user/name"}>
            <button className="bg-red-500 font-extrabold shadow-[5px_5px_1px_#2b2b2b] hover:-translate-y-1 hover:shadow-[10px_10px_1px_#2b2b2b] text-white text-xl px-6 py-3 hover:bg-red-600 transition duration-300 ease-in-out uppercase">
              Find Out Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
