import React, { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { scrollToSection } from '../utils';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    scrollToSection(e, id);
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-stcRed p-2 rounded-full">
            <Plane className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-stcBlue leading-tight tracking-tight">
              SUPERMAN
            </h1>
            <p className="text-xs font-semibold text-stcRed tracking-widest">TRAVEL CONSULT</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-600 hover:text-stcRed font-medium transition cursor-pointer">Home</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-600 hover:text-stcRed font-medium transition cursor-pointer">Services</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-600 hover:text-stcRed font-medium transition cursor-pointer">About</a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bg-stcBlue hover:bg-blue-800 text-white px-6 py-2 rounded-full font-semibold transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-lg">
          <div className="flex flex-col space-y-4 px-6">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-700 hover:text-stcRed font-medium cursor-pointer">Home</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-700 hover:text-stcRed font-medium cursor-pointer">Services</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-700 hover:text-stcRed font-medium cursor-pointer">About</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-stcBlue font-bold cursor-pointer">Contact Us</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;