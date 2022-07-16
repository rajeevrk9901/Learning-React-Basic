import React from "react";
import Counter from "./component/Counter";
import Greet from "./component/Greet";

function App() {
  return (
    <div>
      <h2>Welcome To React</h2>
      <Greet name="Mohit" />
      <Greet name="Rajeev" />
      <Greet name="Satrudhan" />
      <Greet name="Rajeev" />
      <Counter />
    </div>
  );
}

export default App;
