import React from "react";
import './App.css';
import MainLayout from "./Layouts/MainLayout.js";
import { Routes, Route } from "react-router-dom";

import News from "./Components/News/News.js";
import Coin from "./Components/Coins/Coin.js";
import CoinPage from "./Components/Coins/CoinPage.js";
import Home from "./Components/Home/Home.jsx";

function App() {
  return (
    <Routes>
    <Route path="/coin" element={<MainLayout Component={Coin} /> } />
    <Route path="/coin/:id" element={<MainLayout Component={CoinPage} /> } />
    
    <Route path="/news" element={<MainLayout Component={News} /> } />
    <Route path="/home" element={<MainLayout Component={Home} /> } />
    <Route path="/" element={<MainLayout Component={Home} /> } />
   
    
  </Routes>
  );
}

export default App;
