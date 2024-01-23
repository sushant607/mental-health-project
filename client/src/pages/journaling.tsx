import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//import axios from "axios";

export const Blog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const email = localStorage.getItem("userId");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createBlog", { title, description, email })
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div
        style={{
          //  backgroundImage: `url(${bgimg})`,le. Consider adding an import instead.
          backgroundSize: "cover",
        }}
      >
        <Container
          className=" d-flex justify-content-center align-items-center "
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "700px" }}>
            <Card className="row border rounded-5 p-3 bg-white shadow box-area">
              <Card.Body>
                <p className="text-center mb-4">
                  <h2>Create your own journal</h2>
                </p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="title">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="description">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      style={{ height: "100px" }}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button type="submit" className="w-100 mt-3">
                    Save
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer>
                <div className="w-100 text-center mt-2">
                   <Link to="/showblog">journal entries here</Link>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

