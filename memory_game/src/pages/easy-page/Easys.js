import { useState } from "react";
import "./Easys.css";

export const EasyPage = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [display, setDisplay] = useState(true);
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
    }, 3000);
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
