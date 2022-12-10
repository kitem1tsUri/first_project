import { createContext, useState } from "react";

const levels = {
  easy: {
    value: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  medium: {
    value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  hard: {
    value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],
  },
};

export const GameModeContext = createContext();

export const GameModeProvider = ({ children }) => {
  const [level, setLevel] = useState("easy");

  return (
    <GameModeContext.Provider
      value={{ level, setLevel, levelValue: levels[level].value }}
    >
      {children}
    </GameModeContext.Provider>
  );
};
