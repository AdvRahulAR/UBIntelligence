import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { UB_INTELLIGENCE_LOGO } from '../constants';

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Trigger earlier
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); 
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#0F0F0F]/80 shadow-xl backdrop-blur-lg border-b border-gray-700/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 sm:py-4 flex justify-between items-center">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }} className="cursor-pointer">
          {React.cloneElement(UB_INTELLIGENCE_LOGO, { className: "text-xl sm:text-2xl font-extrabold tracking-tight"})}
        </a>
        
        <div className="hidden md:flex space-x-1 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </a>
          ))}
           <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
            className="ml-3 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Contact Us
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-2"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#141414]/95 backdrop-blur-md border-t border-gray-700/50">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="text-gray-200 hover:bg-gray-700/50 hover:text-white block px-3 py-2.5 rounded-md text-base font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
             <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="bg-blue-600 hover:bg-blue-500 text-white block w-full px-3 py-3 rounded-lg text-base font-semibold text-center transition-all duration-200 ease-in-out transform hover:scale-105 mt-3"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;