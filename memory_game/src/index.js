import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Easymode from "./Easys";
import Mediummode from "./medium";
import Hardmode from "./hard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/easy" element={<Easymode />} />
      <Route path="/medium" element={<Mediummode />} />
      <Route path="/hard" element={<Hardmode />} />
    </Routes>
  </BrowserRouter>
);
