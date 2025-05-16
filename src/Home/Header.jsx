import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-[#000433] text-white px-4 py-3 flex items-center justify-between shadow-md flex-wrap">
      {/* Logo */}
      <div className="text-xl font-bold">AR PRINT HUB</div>

      {/* Search Box */}
      <div className="flex items-center h-10 my-2 md:my-0">
        <input
          type="text"
          placeholder="Search"
          className="px-4 h-full rounded-l-md text-black outline-none text-sm w-40 sm:w-48 md:w-56"
        />
        <button className="bg-white text-black h-full px-3 rounded-r-md flex items-center justify-center">
          <Search size={18} className="text-black" />
        </button>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-4 text-xs font-light">
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
        className="ml-2 bg-[#25D366] rounded-full p-2"
      >
        <img
          src="https://img.icons8.com/ios-filled/24/ffffff/whatsapp--v1.png"
          alt="WhatsApp"
          className="w-5 h-5"
        />
      </a>
    </div>
  );
};

export default Header;
