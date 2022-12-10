import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EasyPage, GamePage, MediumPage } from "./pages";
import Hardmode from "./hard";
import { GameModeProvider } from "./contexts/gameModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GameModeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/easy" element={<GamePage />} />
        <Route path="/medium" element={<GamePage />} />
        <Route path="/hard" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  </GameModeProvider>
);
