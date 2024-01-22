import React, { useState, useEffect  } from 'react';
import { Form , Button , Card } from "react-bootstrap";
import axios from "axios";
import {Container} from "react-bootstrap" 


export const Profile = () => {
    const [Name,setName] = useState('')
    const [Age,setAge] = useState('')
    const [Gender,setGender] = useState('')
    const [info, setInfo] = useState([]);
    const email = localStorage.getItem("userId");
    const handleGenderChange = (e) => {
        console.log('Selected value:', e.target.value);
        setGender(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/addBiodata',{Name,Age,Gender,email})
        .then(result => console.log(result))
        .catch( e => console.log(e) )
    }

    const getUserInfo = async () => {
        try {
          const response = await axios.get('http://localhost:3001/Infodisplay', {
            params: { email },
          });
          console.log(response.data);
    const data = response.data;
      if (data && data.success) {
        setInfo(data.userInfo.personal_info);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  console.log(info);

    return (
        <>
         <Card className="row border rounded-5 p-3 bg-white shadow box-area" style={{ maxWidth: "700px",minHeight: "90vh" }}>
                <Card.Header className="d-flex justify-content-center align-items-center "><h2>Profile</h2></Card.Header>
                <Card.Body>
                
  {info && info.map((userInfo, index) => (
    <div key={index} style={{ maxWidth: "70px", minHeight: "20vh" }}>
      Name: {userInfo.Name}<br />
      Age: {userInfo.Age}<br />
      Gender: {userInfo.Gender}<br />
    </div>
     )) 
     }{!info && <h1>You Haven't Created a Profile</h1>}

                <Form onSubmit={handleSubmit}  style={{ minHeight: "20vh" }}  className="d-flex align-items-center">
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
                        <select onChange={handleGenderChange} value={Gender} required>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                        </select>
                        </div>
                        <Button type="submit">Submit</Button>
                </Form>
                </Card.Body>
                </Card>
        </>
    ) };