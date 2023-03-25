import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

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
