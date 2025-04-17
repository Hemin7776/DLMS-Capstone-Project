import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[var(--primary-color)] text-white">
      <div className="flex items-center justify-between px-6 py-4">
        
        <div className="w-24 md:hidden"></div>

        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <Link to="/" className="font-medium">Home</Link>
          <Link to="/about" className="font-medium">About</Link>
          <Link to="/features" className="font-medium">Features</Link>
          <Link to="/contact" className="font-medium">Contact</Link>
        </div>

        <div className="hidden md:flex w-24 justify-end">
          <Link to="/login" className="px-4 py-2 bg-white text-gray-800 rounded-full font-medium">Login/Signup</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-900 text-white py-4 space-y-4">
          <Link to="/" className="font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="font-medium" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/features" className="font-medium" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/contact" className="font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/login" className="px-4 py-2 bg-white text-gray-800 rounded-full font-medium" onClick={() => setIsOpen(false)}>Login/Signup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
