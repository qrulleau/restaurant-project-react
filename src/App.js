import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
