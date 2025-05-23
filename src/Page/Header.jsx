import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <header className="bg-gradient-to-r from-[#000673] to-[#C90055] text-white px-4 sm:px-[50px] py-8 flex items-center justify-between shadow-md flex-wrap relative">

      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={`${process.env.PUBLIC_URL}/arlogo.png`}
          alt="AR Print Hub Logo"
          className="w-[200px] h-auto object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-1 text-sm font-medium">
        <Link to="/" className="px-3 py-2 hover:bg-white hover:text-[#000433] rounded-md transition duration-200">
          Home
        </Link>
        <Link to="/digital-services" className="px-3 py-2 hover:bg-white hover:text-[#000433] rounded-md transition duration-200">
          Digital Services
        </Link>
        <Link to="/printing-services" className="px-3 py-2 hover:bg-white hover:text-[#000433] rounded-md transition duration-200">
          Printing Services
        </Link>
        <Link to="/our-services" className="px-3 py-2 hover:bg-white hover:text-[#000433] rounded-md transition duration-200">
          Our Services
        </Link>
        <Link to="/blog" className="px-3 py-2 hover:bg-white hover:text-[#000433] rounded-md transition duration-200">
          Blog
        </Link>
        <Link to="/contact" className="px-3 py-2 hover:bg-white hover:text-[#000433] rounded-md transition duration-200">
          Contact
        </Link>
      </nav>

      {/* Hamburger Button Mobile */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden flex flex-col space-y-1.5 ml-4 focus:outline-none z-50"
        aria-label="Open menu"
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-gray-100 text-gray-900 shadow-lg z-50 flex flex-col justify-between transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={closeSidebar}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Sidebar nav links */}
        <nav className="mt-16 flex flex-col space-y-4 px-6">
          <Link onClick={closeSidebar} to="/" className="hover:text-[#C90055] font-semibold">
            Home
          </Link>
          <Link onClick={closeSidebar} to="/digital-services" className="hover:text-[#C90055] font-semibold">
            Digital Services
          </Link>
          <Link onClick={closeSidebar} to="/printing-services" className="hover:text-[#C90055] font-semibold">
            Printing Services
          </Link>
          <Link onClick={closeSidebar} to="/our-services" className="hover:text-[#C90055] font-semibold">
            Our Services
          </Link>
          <Link onClick={closeSidebar} to="/blog" className="hover:text-[#C90055] font-semibold">
            Blog
          </Link>
          <Link onClick={closeSidebar} to="/contact" className="hover:text-[#C90055] font-semibold">
            Contact
          </Link>
        </nav>

        {/* Bottom section: Phone and Delivery info */}
        <div className="px-6 py-6 border-t border-gray-300 text-gray-700">
          <p className="font-bold">Call Us:</p>
          <a href="tel:+917050266383" className="text-[#000673] hover:underline block mb-3">
            +91 70502 66383
          </a>
          <p className="font-bold">Home Delivery Available</p>
        </div>
      </aside>
    </header>
  );
};

export default Header;
