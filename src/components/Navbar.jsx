import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">BigSolo/
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold'>.tech</span></div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="lg:hidden text-white focus:outline-none"
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {menuOpen ? (
            <span className="text-3xl"></span>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <hr className='border-y-1 border-gray-800 pt-4' />
    </nav>
    
  );
};

export default Navbar;