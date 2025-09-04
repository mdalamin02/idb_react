import React, { useState } from "react";
import AdminComponent from "./AdminComponent";
import UserComponent from "./UserComponent";
import GuestComponent from "./GuestComponent";

const RoleBasedRender = () => {
  const [role, setRole] = useState("Admin");
  const handlerChange = (e) => {
    setRole(e.target.value);
  };

  let content;

  switch (role) {
    case "admin":
      content = <AdminComponent />;
      break;
    case "user":
      content = <UserComponent />;
      break;
    case "guest":
      content = <GuestComponent />;
      break;
    default:
      content = <h2>Unauthorize Access</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select Role</h2>
      <select value={role} onChange={handlerChange}>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="guest">Guest</option>
      </select>

      <div style={{ marginTop: "20px" }}>{content}</div>
    </div>
  );
};

export default RoleBasedRender;