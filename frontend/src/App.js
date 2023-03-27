import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Buttons from './components/Buttons'
import './App.css';
import MainPage from './Pages/MainPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import ChatPage from './Pages/ChatPage';
import LandingPage from './Pages/LandingPage';
import AdminPage from './Pages/AdminPage';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/chat" element={<ChatPage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path="*" element={() => <div>404</div>} />
      </Routes>  
    </Router> 
  
  );
}

export default App;
