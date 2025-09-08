import React, { useState } from "react";
import {Form, Button, Alert, Container} from 'react-bootstrap';

const RegistrationComponent =()=>
{
    const [formData, setFormData] = useState({

        name: '',
        email:'',
        password:'',
        confirmPassword:'',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // Missing useState()
    
    const handleChange = (e) => {
        const {name, value} = e.target; // Remove .value from e.target.value
        setFormData(prev => ({...prev, [name]: value}))
    };

        const handleSubmit =(e)=>
        {
            e.preventDefault();
            setError('');
            setSuccess('');

            const {name, email, password, confirmPassword} = formData;

            if(!name || !email || !password  || !confirmPassword )
            {
                setError("All fields are required!")
                return;
            }

            if(!/\S+@\S+\.\S+/.test(email)) // Fixed: \S instead of S
            {
                setError("Not a valid email address")
                return;
            }

            if(password.length < 8)
            {
                setError("Password should be at least 8 characters");
                return;
            }
            if(password !== confirmPassword)
            {
                setError("Password does not match");
                return;
            }

            setSuccess("Your Registration has successfully done ");
            setFormData({
                name:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }

        return(

            <Container className="mt-5 " style={{maxWidth:'500px'}}>
                <h3 className="text-center mb-4">Register</h3>

                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email address" name="email" value={formData.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="confirmPassword" className="mb-3" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />


                    </Form.Group>
            <Button variant="primary" type="submit"  >Submit</Button>
                </Form>
            </Container>
        )
}


export default RegistrationComponent;