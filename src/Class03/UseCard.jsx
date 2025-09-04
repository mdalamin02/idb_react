import React from "react";

const UseCard = (props) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h4>Name: {props.name}</h4>
      <h3>Email: {props.email}</h3>
    </div>
  );
};

export default UseCard;
