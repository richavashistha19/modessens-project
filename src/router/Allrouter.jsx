import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Women from '../pages/Women';
import Contact from '../pages/Contact';
import Men from '../pages/Men';
import Kids from '../pages/Kids';

const Allrouter = () => {
  return (
    <div>
      <Routes>
        {/* Define individual routes using the Route component */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mens" element={<Men />} />
        <Route path="/women" element={<Women/>} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </div>
  );
};

export default Allrouter;