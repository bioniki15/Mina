import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './register';
import Login from "./login";
import Home from "./home";
import Painel from "./painel";
import Ranking from './ranking';
import Material from './material';
import Map from './map';
import Stock from './stock';
import Finance from './finance';
import RankDecider from './rankDecider';
import LoginDecider from './loginDecider';
import RegisterDecider from './registerDecider';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/material" element={<Material />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/map" element={<Map />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/rankDecider" element={<RankDecider />} />
        <Route path="/loginDecider" element={<LoginDecider />} />
        <Route path="/registerDecider" element={<RegisterDecider />} />
      </Routes>
    </Router>
  );
}

export default App;
