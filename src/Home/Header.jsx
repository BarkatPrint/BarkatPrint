import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-[#000433] text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">AR HUB</div>

      {/* Search Box */}
      <div className="flex items-center h-10">
  <input
    type="text"
    placeholder="Search"
    className="px-4 h-full rounded-l-md text-black outline-none"
  />
  <button className="bg-white text-black h-full px-3 rounded-r-md flex items-center justify-center">
    <Search size={18} className="text-black" />
  </button>
</div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-6 text-sm font-light">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Order</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/917050266383"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 bg-white rounded-full p-2"
      >
        <img
          src="https://img.icons8.com/ios-filled/24/000000/whatsapp.png"
          alt="WhatsApp"
          className="w-6 h-6"
        />
      </a>
    </div>
  );
};

export default Header;
