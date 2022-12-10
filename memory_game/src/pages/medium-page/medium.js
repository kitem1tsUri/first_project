import "./medium.css";
import { useState } from "react";

export const MediumPage = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
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
    <div className="medium">
      <div>
        <div class="grid-container1">
          {array.map((number) => (
            <div class="grid-item1" onClick={() => !display && darh(number)}>
              {display && number}
            </div>
          ))}
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
