import React, { useState }  from 'react';
import { Form , Button , Card } from "react-bootstrap";
import axios from "axios";
//import {Container} from "react-bootstrap" 
//import { Link } from 'react-router-dom';
//import axios from "axios";


export const Blog = () =>{
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [email,setEmail] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/createBlog',{title,description,email})
        .then(result => console.log(result))
        .catch( e => console.log(e) )
    }
    return(
        <div>
        <h1>this is blog</h1>
        <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label></Form.Label>
                     <Form.Control type="text" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group id="title">
                    <Form.Label></Form.Label>
                     <Form.Control type="text" placeholder="Title"  onChange={(e) => setTitle(e.target.value)} required/>
                </Form.Group>
                <Form.Group id="description">
                     <Form.Label></Form.Label>
                     <Form.Control type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
                </Form.Group>
                <Button type="submit" className="w-100 mt-3">Save</Button>
            </Form>
            </div>
)};