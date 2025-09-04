import React, { useState } from 'react';

const HandlerEvent = () =>
{
	const [form, setForm] = useState({name: '', email: ''});

	const handleChange = e => 
	{
		const {name, value} = e.target;
		setForm(prev => ({ ...prev, [name]: value}));
	};

	const handleSubmit = e =>
	{
		e.preventDefault();
		alert(`Hello ${form.name}, we received your email: ${form.email}`);
	};

 return (

 		<form onSubmit={handleSubmit}>
 			<input
 				name="name" value={form.name} onChange={handleChange} placeholder="Enter name" /><br />
 			<input
 				name="email"
 				value={form.email}
 				onChange={handleChange}
 				placeholder="Enter Email" /><br />

 			<button type="submit">Submit</button>
 		</form>

 	);
};

export default HandlerEvent;