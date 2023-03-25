import React from 'react';
import { Route, Router, Routes } from "react-router-dom";
// import Buttons from './components/Buttons'
import './App.css';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import SignupButton from './components/Buttons/SignupButton';
import FormInput from './components/FormInput'
function App() {
  return (
    // <Router>
    //   <Routes>
    //       <Route path="/" element={<LandingPage />} />
    //       <Route path="/login" element={<LoginPage />} />
    //       <Route path="/signup" element={<SignupPage />} />
    //       <Route path="*" element={() => <div>404</div>} />
    //   </Routes>  
    // </Router> 
   <FormInput/>
  );
}

export default App;
