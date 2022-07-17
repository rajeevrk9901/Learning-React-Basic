import React, { useState } from "react";
import "./App.css";

// const cardList = (contact) => {
//   return <Card id={contact.id} name={contact.name} imgUrl={contact.imgUrl} />;
// };

function App() {
  const [name, setName] = useState("");

  const onChangeHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <h2>Welcome To React</h2>
      <h1>Hello {name}</h1>
      <input onChange={onChangeHandler} type="text" />
    </div>
  );
}

export default App;
