import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Home/Header';
import Footer from './Home/Footer'; // ✅ Import Footer
import Home from './Home/Home';
import Blog from './Home/Blog';
import Contact from './Home/Contact';
import DigitalServices from './Home/Services';
import PrintingServices from './Home/Printing';

function All() {
  return (
    <Router>
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-services" element={<DigitalServices />} />
        <Route path="/printing-services" element={<PrintingServices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer /> {/* ✅ Footer will appear on every page */}
    </Router>
  );
}

export default All;
