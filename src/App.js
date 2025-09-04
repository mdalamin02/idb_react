import React from "react";
import "./App.css";
import Class1 from "./class01/Class1";
import Class1State from "./class01/Class1State";
import EmployeeSalary from "./Class02/EmployeeSalary";
import FunctionalLifeCycle from "./Class02/FunctionalLifeCycle";
import HandlerEvent from "./Class02/HandlerEvent";
import ListRendering from "./Class02/ListRendering";
import UserList from "./Class03/UserList";
import UseCard from "./Class03/UseCard";
import Class2Props from "./Class03/UseCard2";
import RoleBasedRender from "./Class03/RoleBasedRender";

function App() {
  const myname = "Welcome to React";
  return (
    <div className="App">
      <h1>{myname}</h1>
      <Class1 />
      <Class1State />
      <RoleBasedRender />
      <EmployeeSalary />
      <FunctionalLifeCycle />
      <HandlerEvent />
      <ListRendering />
      <UserList />
      <UseCard name="Alamin" email="alamin@gmail" />
      <Class2Props />
    </div>
  );
}

export default App;
