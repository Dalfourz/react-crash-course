import React, { useState } from "react";
// Important to understand React Hooks

function Counter() {
const [arr, addArr] = useState([])

function addPlus() {
    addArr(prevArr => [...prevArr, "+"])
}

function addMinus() {
    addArr(prevArr => [...prevArr, "-"])
}

  return (
    <div>
      <button onClick={addMinus}>-</button>
      <button onClick={addPlus}>+</button>
      {arr.toString()}
    </div>
  );
}

export default Counter;
