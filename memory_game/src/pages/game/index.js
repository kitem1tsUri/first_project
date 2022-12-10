import React, { useContext, useState } from "react";
import { GameModeContext } from "../../contexts/gameModeContext";

export const GamePage = () => {
  const { levelValue, timer} = useContext(GameModeContext);
  const [array, setArray] = useState(levelValue);
  const [display, setDisplay] = useState(true);
  const [gameTime, setGametime] = useState(timer);
  let nextNumber = 1;
  const darh = (number) => {
    if (number !== nextNumber) alert("duus");
    nextNumber++;
    console.log(nextNumber);
    if (nextNumber === 10) alert("wuoa lagyomaa /tom nudtei emoji/)");
  };

  function shuffle() {
    let arr = [...array];
    let currentIndex = arr.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }
    console.log(arr);
    setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
    }, gameTime);
    setArray(arr);
  }

  return (
    <div className="easy">
      <div>
        <div class="grid-container">
          {array.map((number) => (
            <div class="grid-item" onClick={() => !display && darh(number)}>
              {display && number}
            </div>
          ))}
          {/* <div class="grid-item" ></div>
          <div class="grid-item" ></div>
          <div class="grid-item" ></div>
          <div class="grid-item" ></div>
          <div class="grid-item" ></div>
          <div class="grid-item" ></div>
          <div class="grid-item" ></div>
          <div class="grid-item" ></div> */}
        </div>
      </div>
      <div className="mid">
        <div className="restart" onClick={() => shuffle()}>
          restart this fucking game
        </div>
      </div>
    </div>
  );
};
