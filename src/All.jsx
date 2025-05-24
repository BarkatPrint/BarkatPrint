import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './Page/ScrollToTop';

import Header from './Page/Header';
import Footer from './Page/Footer'; 
import Home from './Page/Home';
import Blog from './Page/Blog';
import Contact from './Page/Contact';

import DigitalServices from './Home/Digital/Services';
import PrintingServices from './Home/Printing/PrintingServices'; 
import OurServices from './Page/OurServices';
import About from './Page/About';

import TermsOfService from './Page/TermsOfService';
import PrivacyPolicy from './Page/PrivacyPolicy';
import CookiesPolicy from './Page/CookiesPolicy';

export default function All() {
  return (
    <Router>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-services" element={<DigitalServices />} />
        <Route path="/printing-services" element={<PrintingServices />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
      </Routes>

      <Footer />
    </Router>
  );
}
