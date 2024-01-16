import React, { useState } from 'react';
import { Form , Button , Card } from "react-bootstrap"
import {Container} from "react-bootstrap" 
import { Link } from 'react-router-dom';
import axios from "axios";
// import bgimg from '../img/sign1.jpg';

export const Login = () =>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => console.log(result))
        .catch( e => console.log(e) )
    }

    return(

        <div style={{ minHeight: "100vh", 
        //  backgroundImage: `url(${bgimg})`,le. Consider adding an import instead.
         backgroundSize: 'cover', }}>
    <>
    <Container className=" d-flex justify-content-center align-items-center " style={{minHeight: "100vh" }}>
     <div className="w-100" 
     style={{ maxWidth: "400px" }}>
        <Card className="row border rounded-5 p-3 bg-white shadow box-area">
        <Card.Body>
            <p className="text-center mb-4"><h2>Welcome back! </h2>We are happy to see you</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label></Form.Label>
                     <Form.Control type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group id="password">
                     <Form.Label></Form.Label>
                     <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Button type="submit" className="w-100 mt-3">Log in</Button>
            </Form>
        </Card.Body>
        <Card.Footer>
        <div className="w-100 text-center mt-2">
        Don't have account? <Link to ="/signup">Sign up</Link>
            </div>
        </Card.Footer>
        </Card>
     </div>
    </Container>
    </> </div>
)};