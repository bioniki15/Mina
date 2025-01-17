import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './register/register';
import "react-toastify/dist/ReactToastify.css";
import Login from "./login/login";
import Home from "./home/home";
import Painel from "./painel/painel";
import Ranking from './ranking/ranking';
import Material from './material/material';
import Map from './map/map';
import Stock from './stock';
import Finance from './finance/finance';
import RankDecider from './ranking/rankDecider';
import Servicos from './servicos/servicos';
import Sobre from './sobre/sobre';
import { auth } from "./services/firebase";
import Contato from './contato/contato';
import MapComponent from './mapa/mapa';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/painel" element={<Painel />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/material" element={<Material />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/map" element={<Map />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/rankDecider" element={<RankDecider />} />
          <Route path="/mapa" element={<MapComponent />} />
        </Routes>
    </Router>
  );
}

export default App;