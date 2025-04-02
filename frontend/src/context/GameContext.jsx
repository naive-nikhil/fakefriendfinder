import { createContext, useState, useContext, Children } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  return (
    <GameContext.Provider value={{ userName, setUserName }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
