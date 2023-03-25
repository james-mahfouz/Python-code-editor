import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Buttons from './components/Buttons'
import './App.css';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import SignupButton from './components/Buttons/SignupButton';
import FormInput from './components/FormInput'
import NavbarTwo from './components/NavbarTwo';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={() => <div>404</div>} />
      </Routes>  
    </Router> 
   
  );
}

export default App;
