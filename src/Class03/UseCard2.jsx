import React from "react";

const UseCard2 = ({ name, email }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Email {email}</p>
    </div>
  );
};

const Class2Props = () => {
  return (
    <div>
      <h2>User List</h2>
      <UseCard2 name="Alamin" email="almain@gmail" />
      <UseCard2 name="Ahmed" email="ahmed@gmail" />
    </div>
  );
};

export default Class2Props;
