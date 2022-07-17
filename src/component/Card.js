import React from "react";
import Avatar from "./Avatar";
import "./CardModule.css";

function Card(props) {
  return (
    <div>
      <h1>{props.id}</h1>
      <p>{props.name}</p>
      <Avatar img={props.img} />
    </div>
  );
}

export default Card;
