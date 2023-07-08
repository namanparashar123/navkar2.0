import React from 'react';
import Navigation from './Components/UI/Navigation';
import Footer from './Components/UI/Footer';
import Home from './Components/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Pages/Contact';
import Services from './Components/Pages/Services';
import About from './Components/Pages/About';
import Careers from './Components/Pages/Careers';

import './App.css';
import Locations from './Components/Pages/Locations';

function App() {
  return (
    <BrowserRouter>
    <div className="main-container">
      <Navigation />
      <div className='title-bg'><h1 className='title'>Shipping Made Simple.</h1></div>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Careers" element={<Careers />}/>
          <Route path="/Locations" element={<Locations />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
       </Routes>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
