import React, { useState } from 'react'
import {Form, FormControl, Button} from 'react-bootstrap';

const SearchComponent =()=>
{
    const [query, setQuery] = useState('');
    const handleSearch =(e)=>
    {
        e.preventDefault();
        alert(`You seached for: ${query}`);
    }

    return(
        <Form inline onSubmit={handleSearch} className='d-flex'>
            <FormControl type='text' placeholder='Search'
            className='mr-2' value={query} onChange={(e)=>setQuery(e.target.value)} />
            <Button type='submit' variant='outline-light' > Search</Button>
        </Form>
    )
}

export default SearchComponent;