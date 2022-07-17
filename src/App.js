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

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
