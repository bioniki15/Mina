<<<<<<< HEAD
import React from 'react'
import Register from './register';

function App() {
  return (
    <div>
      <Register/>
    </div>
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './register';
import Login from "./login";
import Home from "./home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
>>>>>>> 59767d7 (LoginRegister)
  );
}

export default App;
