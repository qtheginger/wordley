import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [keyVal, setKeyVal] = useState("");

  const fillBox = () => {
    setKeyVal(keyVal);
  };

  const contextValue = {
    keyVal,
    setKeyVal,
  };
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
