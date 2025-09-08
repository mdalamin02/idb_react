import React, {useState} from 'react';
import {Form, Button, Table, Container, Row, Col} from 'react-bootstrap'; 

const InvoiceForm =()=>
{
    const[products, setProducts] = useState([]);
    const [form, setForm] = useState({name: '', price:'', qty:''})
    const[customer, setCustomer] = useState({name:'', phone:"", address:'', date:''})
    const [tax,setTax] =useState(0);
    const[discount, setDiscount] = useState(0);

    const handleProductChange =(e)=>
    {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const handleCustomerChange =(e)=>
    {
        setCustomer({...customer, [e.target.name]:e.target.value})
    }

    const handleAddProduct =(e)=>
    {
        e.preventDefault();
        if(!form.name || !form.price || !form.qty) return;

        const newProduct ={
            ...form,
            total: parseFloat(form.price) * parseFloat(form.qty),
        }
        setProducts([...products, ,newProduct])
        setForm({name:'', price:'', qty:''})
    }

    const subTotal = products.reduce((sum, p) => sum+ p.total, 0)
    const taxAmount = (subTotal * tax) / 100;
    const discountAmount = (subTotal * discount) / 100;
    const grandTotal = subTotal - taxAmount - discountAmount; 

    return(

        <Container className='mt-5'>
            <h3 className='text-center mb-4'> Invoice with Customer Info</h3>
            <Row>
                <Col md={6}>
                <Form.Group className='mb-2'>
                <form.Label>Customer Name</form.Label>
                <form.Control type='text' name="name" value={customer.name} onChange={handleCustomerChange} />
                </Form.Group>
                </Col>
              
                <Col md={3}>
                <Form.Group className='mb-2'>
                <form.Label>Phone</form.Label>
                <form.Control type='number' name="phone" value={customer.phone} onChange={handleCustomerChange} />
                </Form.Group>
                </Col>
              
                <Col md={3}>
                <Form.Group className='mb-2'>
                <form.Label>Date</form.Label>
                <form.Control type='date' name="date" value={customer.date} onChange={handleCustomerChange} />
                </Form.Group>
                </Col>
                        
            </Row>
                <Form.Group className='mb-2'>
                <Form.Label>Address</Form.Label>
                <Form.Control name='address' value={customer.address} onChange={handleCustomerChange} />
                </Form.Group>   


                <Form onChange={handleAddProduct}>
                     <Row>

                        <Con md={4} >
                            <Form.Group className='mb-2'>
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control name='name' value={form.name} onChange={handleProductChange} />
                            </Form.Group>
                        </Con>

                        <Con md={4} >
                            <Form.Group className='mb-2'>
                                <Form.Label>Unit Price</Form.Label>
                                <Form.Control type='number' name='price' value={form.price} onChange={handleProductChange} />
                            </Form.Group>
                        </Con>

                        <Con md={4} >
                            <Form.Group className='mb-2'>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type='number' name='qtn' value={form.qty} onChange={handleProductChange} />
                            </Form.Group>
                        </Con>
                     </Row>
                     <Button variant='primary' type='submit' block="true">Add Product </Button>
                </Form>

                {products.length > 0 && (
                    <>
                    <Row className='mt-4'>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>Tax %</Form.Label>
                            <Form.Control type='number' value={tax} onChange={(e)=>setDiscount(parseFloat(e.target.value))} />
                        </Form.Group>
                        </Col> 
                        </Row> 
                        <h5 className='mt-4'>Invoice Details</h5>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {products.map((prod, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{prod.name}</td>
                                        <td>{prod.price}</td>
                                        <td>{prod.qty}</td>
                                        <td>{prod.total.toFixed(2)}</td>
                                    </tr>
                                ))}

                                <tr>
                                    <td colSpan='4' className='text-right'>Subtotal</td>
                                    <td >{subTotal.toFixed(2)}</td>
                                </tr>

                                <tr>
                                    <td colSpan='4' className='text-right'>  
                                    Tax {tax%}
                                    </td>
                                    <td>{taxAmount.toFixed(2)}</td>
                                </tr>

                                <tr>
                                    <td colSpan='4' className='text-right'>
                                    
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        </>
                )}
        </Container>
    )
}