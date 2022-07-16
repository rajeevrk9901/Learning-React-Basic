import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseCountHandler = () => {
    setCounter(counter + 1);
  };

  const decreaseCountHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>{counter}</h1>

      <button
        style={{
          padding: "12px",
          marginRight: "2px",
          background: "grey",
          color: "white",
        }}
        onClick={increaseCountHandler}
      >
        Increase
      </button>
      <button
        style={{ padding: "12px", background: "grey", color: "white" }}
        onClick={decreaseCountHandler}
      >
        Decrease
      </button>
    </>
  );
}

export default Counter;
