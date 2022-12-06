import "./Easys.css";

const Easys = () => {
  let array = [3, 1, 2, 5, 7, 9, 8, 4, 6];
  let nextNumber = 1;
  const darh = (number) => {
    if (number !== nextNumber) alert("duus");
    nextNumber++;
  };

  return (
    <div className="easy">
      <div>
        <div class="grid-container">
          {array.map((number) => (
            <div class="grid-item" onClick={() => darh(number)}>
              {number}
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
    </div>
  );
};
export default Easys;
