import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Page/Header';
import Footer from './Page/Footer'; 
import Home from './Page/Home';
import Blog from './Page/Blog';
import Contact from './Page/Contact';

import DigitalServices from './Home/Digital/Services';
import PrintingServices from './Home/Printing/PrintingServices'; 
import OurServices from './Page/OurServices';  // <-- New import

function All() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-services" element={<DigitalServices />} />
        <Route path="/printing-services" element={<PrintingServices />} />
        <Route path="/our-services" element={<OurServices />} />   {/* New route */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default All;
