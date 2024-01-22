import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button} from "react-bootstrap";

export const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  // get user blogs
  const getUserBlogs = async () => {
    try {
      const email = localStorage.getItem("userId");
      const { data } = await axios.get('http://localhost:3001/Blogdisplay', {
        params: { email },
      });      

      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {getUserBlogs();}, []);
  
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete('http://localhost:3001/Blogdelete');
      if (data?.success) {
        alert("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(blogs);
  
  return (
    <div>
    {blogs && blogs.length > 0 ? (
      blogs.map((blog) => (
        <Card key={blog._id} style={{ marginBottom: '20px' }}>
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Date: {new Date(blog.createdAt).toLocaleDateString()}
            </Card.Subtitle>
            <Card.Text>{blog.description}</Card.Text>
            <Button variant="primary" style={{ marginRight: '10px' }}>
              Update
            </Button>
            <Button variant="danger" onSubmit={handleDelete}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))
    ) : (
      <h1>You Haven't Created a Blog</h1>
    )}
  </div>
  );
};
