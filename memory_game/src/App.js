import { useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { GameModeContext } from "./contexts/gameModeContext";

function App() {
  const { setLevel } = useContext(GameModeContext);

  return (
    <div className="App">
      <Link
        to="/easy"
        onClick={() => {
          setLevel("easy");
        }}
      >
        easy
      </Link>
      <Link
        to="/medium"
        onClick={() => {
          setLevel("medium");
        }}
      >
        medium
      </Link>
      <Link
        to="/medium"
        onClick={() => {
          setLevel("hard");
        }}
      >
        hard
      </Link>
      <a id="ig" href="https://www.instagram.com/khuslen_myagmar/">visit my instagram</a>
    </div>
  );
}

export default App;
