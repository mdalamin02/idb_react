import React from "react";

const GuestComponent = () => {
  return (
    <div className="card text-dark bg-light mb-3 mx-auto" style={{ maxWidth: "22rem" }}>
      <div className="card-header">Guest Panel</div>
      <div className="card-body">
        <h4 className="card-title">Welcome, Guest!</h4>
        <p className="card-text">
          Please log in to access more features and personalized content.
        </p>
      </div>
    </div>
  );
};

export default GuestComponent;
