import React from "react";

const UserComponent = () => {
  return (
    <div
      className="card text-white bg-primary mb-3 mx-auto"
      style={{ maxWidth: "22rem" }}
    >
      <div className="card-header">User Panel</div>
      <div className="card-body">
        <h4 className="card-title">Welcome, User!</h4>
        <p className="card-text">
          You are logged in. Enjoy exclusive features and personalized content.
        </p>
      </div>
    </div>
  );
};

export default UserComponent;
