import React from "react";
import {card, col, row, button} from "react-bootstrap";
import emp1 from "../assets/img1.jpg";
import emp2 from "../assets/img2.webp"
import emp3 from "../assets/img3.jpg";



const EmployeeComponent = ({employee, deleteEmployee}) => {
const employeeList = [
  {id: 1, name: "John Doe", role: "Developer", img: emp1},
  {id: 2, name: "Jane Smith", role: "Designer", img: emp2},
  {id: 3, name: "Sam Johnson", role: "Manager", img: emp3}
];


    return (
        <div className="container">
            <div className="row">
                {employeeList.map((emp) => (
                    <div className="col-md-4" key={emp.id}>
                        <div className="card">
                            <img src={emp.img} className="card-img-top" alt={emp.name} />
                            <div className="card-body">
                                <h5 className="card-title">{emp.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{emp.role}</h6>
                                <button className="btn btn-danger" onClick={() => deleteEmployee(emp.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EmployeeComponent;