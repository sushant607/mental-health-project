import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from "./pages/home.tsx";
import { Login } from "./pages/login.tsx";
import { Sign } from "./pages/signup.tsx";
import { Blog } from "./pages/journaling.tsx";
import { Profile }  from "./pages/profile.tsx";
import PersonalityTest from "./pages/person.tsx"
function App() {

    const linkStyle = {
      marginLeft: '10px',
      marginRight: '10px', 
      textDecoration: 'none', 
      color:"rgb(219, 223, 234)",
      fontFamily : "",
      width:'70px'
    };
  
  return (
    <div>
      <Router>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
             <Link to ="/" style={linkStyle}>Home</Link>
             <Link to ="/login" style={linkStyle}>Login</Link> 
             <Link to ="/signup" style={linkStyle}>Sign up</Link>
             <Link to ="/journaling" style={linkStyle}>Journaling</Link>
             <Link to ="/profile" style={linkStyle}>     profile</Link>
             <Link to="/perdom" style={linkStyle}>     persin</Link>
          </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Sign/>} />
          <Route path="/journaling" element={<Blog/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/perdom" element={<PersonalityTest/>} />
          <Route path="*" element={<h1>you are not in a page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
