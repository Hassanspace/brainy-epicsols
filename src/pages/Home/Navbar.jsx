import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons
import logo from "../../assets/BRAINY.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 mx-4 bg-white shadow-md rounded-[22px] z-50 h-24">
      {/* 👇 this div now takes full height and centers content */}
      <div className="h-full flex items-center justify-between px-6">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <img src={logo} alt="" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/features" className="hover:text-black">Features</Link>
          <Link to="/pricing" className="hover:text-black">Pricing</Link>
          <Link to="/testimonials" className="hover:text-black">Testimonials</Link>
          <Link to="/app" className="hover:text-black">App Download</Link>
          <Link to="/contact" className="hover:text-black">Contact Us</Link>

          {/* Buttons */}
          <Link 
            to="/login" 
            className=" h-14 w-28 flex justify-center items-center border border-green-500 text-green-600 px-4 py-2 rounded-[12px] hover:bg-green-50 transition"
          >
            Log In
          </Link>
          <Link 
            to="/Signup" 
            className="h-14 w-28 flex justify-center items-center bg-gradient-to-r from-green-400 to-purple-500 text-white px-5 py-2 rounded-[12px] hover:opacity-90 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
{isOpen && (
  <div className="md:hidden flex flex-col items-center space-y-4 pt-4 pb-6 font-medium text-gray-700 bg-white rounded-[22px] shadow-md">
    <Link to="/" className="hover:text-black">Home</Link>
    <Link to="/features" className="hover:text-black">Features</Link>
    <Link to="/pricing" className="hover:text-black">Pricing</Link>
    <Link to="/testimonials" className="hover:text-black">Testimonials</Link>
    <Link to="/app" className="hover:text-black">App Download</Link>
    <Link to="/contact" className="hover:text-black">Contact Us</Link>

    <Link 
      to="/login" 
      className="border border-green-500 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition"
    >
      Log In
    </Link>
    <Link 
      to="/signup" 
      className="bg-gradient-to-r from-green-400 to-purple-500 text-white px-5 py-2 rounded-full hover:opacity-90 transition"
    >
      Sign Up
    </Link>
  </div>
)}

    </nav>
  );
};

export default Navbar;
