import React from "react";

const Class1 = () => {
  const name = "araman";
  const isLoggedIn = true;
  const items = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <h2>Welcome, {name}</h2>
      <p>{isLoggedIn ? "Logged In" : "Please Log In"}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Class1;
