import React from 'react';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`lg:hidden fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out
    ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>


      {/* Close Button - Now always fully visible (no opacity transition) */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer opacity-100 z-10' 
        aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}>
        {menuOpen ? (
          '×' // Close icon (always visible)
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
<div className='bg-black h-full 
w-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out'>
      <a 
        href="#home" 
        onClick={() => setMenuOpen(false)} 
        className={`text-4xl p-3 font-semibold text-white my-4 transform transition-transform duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Home
      </a>
      
      <a 
        href="#about" 
        onClick={() => setMenuOpen(false)} 
        className={`text-4xl p-3 font-semibold text-white my-4 transform transition-transform duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        About
      </a>
      
      <a 
        href="#projects"
        onClick={() => setMenuOpen(false)} 
        className={`text-4xl p-3 font-semibold text-white my-4 transform transition-transform duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Projects
      </a>
      
      <a 
        href="#contact" 
        onClick={() => setMenuOpen(false)}  
        className={`text-4xl p-3 font-semibold text-white my-4 transform transition-transform duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Contact
      </a>
      </div>
    </div>
  )
}

export default MobileMenu;