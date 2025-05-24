import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#C90055] via-[#000536] to-[#000536] text-white pt-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/20">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl font-extrabold">AR PRINT HUB</h2>
          <p className="mt-4 text-sm text-white/90">
            We offer complete printing and digital media solutions including banners, cards, social media designs, and brand promotions – all under one creative roof!
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="https://wa.me/917050266383" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="pl-14">
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <div className="flex items-start space-x-3 mb-3">
            <FaMapMarkerAlt className="mt-1" />
            <p className="text-sm text-white/90">Gaya Patna Road Near Ramshila Pahasarwar More, Gaya</p>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <FaPhoneAlt />
            <p className="text-sm text-white/90">+91 7050266383</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope />
            <p className="text-sm text-white/90">arprinthub25@gmail.com</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="pl-14">
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><Link to="/" className="hover:underline">&gt; Home</Link></li>
            <li><Link to="/digital-services" className="hover:underline">&gt; Digital Services</Link></li>
            <li><Link to="/printing-services" className="hover:underline">&gt; Printing Services</Link></li>
            <li><Link to="/our-services" className="hover:underline">&gt; Our Services</Link></li>
            <li><Link to="/contact" className="hover:underline">&gt; Contact</Link></li>
            <li><Link to="/blog" className="hover:underline">&gt; Blog</Link></li>
            <li><Link to="/about" className="hover:underline">&gt; About</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-16 flex flex-col md:flex-row justify-between text-xs text-white/70">
        <p>Copyright © 2025 AR Print Hub, All rights reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
          <span>|</span>
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <span>|</span>
          <Link to="/cookies" className="hover:underline">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
