import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const countHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button
        style={{ padding: "12px", background: "grey", color: "white" }}
        onClick={countHandler}
      >
        Increase
      </button>
    </>
  );
}

export default Counter;
