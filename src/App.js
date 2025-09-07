import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeComponent from "./Class04/EmployeeComponent";
import NavbarComponent from "./Class04/NavbarComponent";
import EmployeeSalary from "./Class02/EmployeeSalary";
import LoginComponent from './Class04/LoginComponent'

function App() {
  return (
 <Router>

<NavbarComponent />

<div className="container mt-4" >

  <Routes>
    <Route path="/" element={<EmployeeSalary />} />
    <Route path="employees" element={<EmployeeComponent />} />
    <Route path="/login" element={<LoginComponent />} />
    
  </Routes>

</div>
 </Router>
  );
}

export default App;
