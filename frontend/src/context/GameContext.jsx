import { createContext, useState, useContext, useEffect } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  useEffect(() => {
    if (userName) {
      localStorage.setItem("userName", userName);
    }
  }, [userName]);

  return (
    <GameContext.Provider value={{ userName, setUserName }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
