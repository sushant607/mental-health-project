import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from "./pages/home.tsx";
import { Login } from "./pages/login.tsx";
import { Sign } from "./pages/signup.tsx";
import { Blog } from "./pages/journaling.tsx";
import { UserBlogs } from "./pages/showblog.tsx";
import { Profile }  from "./pages/profile.tsx";
import {useSelector} from 'react-redux';
import { store } from "./redux/store";
import {PersonalityTest} from "./pages/personality.tsx";
import config from './bot/config.js';
import MessageParser from './bot/MessageParser.jsx';
import ActionProvider from './bot/ActionProvider.jsx';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { FaComment } from 'react-icons/fa'; 
type RootState = {
    isLogin: boolean; 
  };

  const MyComponent = ({ onClose }) => {
    return (
      <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: '9999' }}>
        <button onClick={onClose} style={{ marginBottom: '10px' ,background:'f00',color:'fff',width:'30px'}}>
          X
        </button>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    );
  };


function App() {

  const [chatbotOpen, setChatbotOpen] = React.useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };
  const iconStyle = {
    fontSize: '24px', // Adjust the icon size
    marginRight: '40px',
    marginLeft:'auto', // Adjust spacing between icon and text
    cursor: 'pointer',
    color:'fff'
  };
    const isLogin = useSelector((state: RootState) => state.isLogin);
    //console.log(isLogin)
    const linkStyle = {
      marginLeft: '10px',
      marginRight: '10px', 
      textDecoration: 'none', 
      color:"rgb(219, 223, 234)",
      fontFamily : "",
      width:'135px',
      // align-items:'center'
    };
  
  return (
    <div>
      <Router>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <Link to ="/" style={linkStyle}>Home</Link>
             {!isLogin && (<>
             <Link to ="/login" style={linkStyle}>Login</Link> 
             <Link to ="/signup" style={linkStyle}>Sign up</Link> 
              </>)}
             {isLogin && (<>
             <Link to ="/journaling" style={linkStyle}>Journaling</Link>
             <Link to ="/profile" style={linkStyle}>Profile</Link> 
             <Link to ="/pe" style={linkStyle}>Personality Test</Link> 
             <FaComment style={iconStyle} onClick={toggleChatbot} />
             </>)}
          </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Sign/>} />
          <Route path="/journaling" element={<Blog />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/showblog" element={<UserBlogs/>} />
          <Route path="/pe" element={<PersonalityTest/>} />
          <Route path="*" element={<h1>you are not in a page</h1>} />
        </Routes>
         {/* Render the Chatbot component conditionally */}
         //{chatbotOpen && <MyComponent onClose={toggleChatbot} />}
        {chatbotOpen && (
          <MyComponent onClose={toggleChatbot}>
            {/* Pass necessary props to Chatbot component */}
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </MyComponent>
        )}
      </Router>
    </div>
  );
}
export default App;
