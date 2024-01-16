import React, { useState } from 'react';
import { Form , Button , Card } from "react-bootstrap";
import axios from "axios";
import {Container} from "react-bootstrap" 


export const Profile = () => {
    const [name,setName] = useState('')
    const [Age,setAge] = useState('')
    const [gender,setGender] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/addBiodata',{name,Age,gender})
        .then(result => console.log(result))
        .catch( e => console.log(e) )
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    return (
        <>
         <Card className="row border rounded-5 p-3 bg-white shadow box-area">
                <Card.Header><h2>Edit Profile</h2></Card.Header>
                <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type="number" placeholder="Your Age" onChange={(e) => setAge(e.target.value)} required />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <select onChange={handleGenderChange} value={gender} required>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        {/* Add more personal information fields as needed */}
                        <Button type="submit">Submit</Button>
                </Form>
                </Card.Body>
                </Card>
        </>
    ) };