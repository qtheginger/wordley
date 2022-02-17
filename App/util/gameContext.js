import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [keyVal, setKeyVal] = useState("");
  const [cardVal, setCardVal] = useState([]);

  const fillBox = () => {
    setKeyVal(keyVal);
  };

  const contextValue = {
    keyVal,
    setKeyVal,
    cardVal,
    setCardVal,
  };
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
