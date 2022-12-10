import { createContext, useState } from "react";

const levels = {
  easy: {
    value: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    timer: 3000,
  },
  medium: {
    value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    timer: 3000, 
},
  hard: {
    value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    timer: 5000,
},
};

export const GameModeContext = createContext();

export const GameModeProvider = ({ children }) => {
  const [level, setLevel] = useState("easy");

  return (
    <GameModeContext.Provider
      value={{
        level,
        setLevel,
        levelValue: levels[level].value,
        timer: levels[level].timer,
      }}
    >
      {children}
    </GameModeContext.Provider>
  );
};
