import React from "react";
import "./App.css";
import Card from "./component/Card";
import contacts from "./component/contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

// const cardList = (contact) => {
//   return <Card id={contact.id} name={contact.name} imgUrl={contact.imgUrl} />;
// };

function App() {
  return (
    <div className="App">
      <h2>Welcome To React</h2>
      {/* {contacts.map(cardList)} */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
