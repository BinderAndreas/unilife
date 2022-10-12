import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCities from './pages/AllCities';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/allcities" element={<AllCities />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
