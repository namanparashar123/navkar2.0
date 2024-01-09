import React from 'react';
import Navigation from './Components/UI/Navigation';
import Footer from './Components/UI/Footer';
import Home from './Components/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Pages/Contact';
import Services from './Components/Pages/Services';
import Warehousing from './Components/Pages/Warehousing';
import Fulfillment from './Components/Pages/Fulfillment';
import Shipping from './Components/Pages/Shipping';

import './App.css';
import Locations from './Components/Pages/Locations';

function App() {

  return (
    <BrowserRouter>
    <div className="main-container">
      <Navigation />
      <Routes>
          <Route path="/" element={<><Home /> <Contact /> </>}/>
          <Route path="/Locations" element={<Locations />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/Warehousing" element={<Warehousing />}/>
          <Route path="/Shipping" element={<Shipping />}/>
          <Route path="/Fulfillment" element={<Fulfillment />}/>
       </Routes>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
