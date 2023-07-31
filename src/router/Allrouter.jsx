import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Women from '../pages/Women';
import Contact from '../pages/Contact';
import Men from '../pages/Men';
import Kids from '../pages/Kids';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Search from '../pages/Search';


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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="*" element={<h2>Page not found</h2>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/thankyou" element={<h2>Thank you for shopping with us!</h2>} />
      </Routes>
    </div>
  );
};

export default Allrouter;