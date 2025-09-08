import React from "react";
import {Form, Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const LoginComponent =()=>

{
    return (
        <Card className=" p-4 mx-auto" style={{maxWidth:'400px'}}>

            <h3 className="text-center mb-3" > Login </h3>
            <Form >
                <Form.Group controlId="loginEmail" className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email Address" />
                </Form.Group>
                
                <Form.Group controlId="loginPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">Login</Button>
                
                <div className="text-center">
                    <span>Don't have an account? </span>
                    <Link to="/register">Register here</Link>
                </div>
            </Form>
        </Card>
    )
}

export default LoginComponent;