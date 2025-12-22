import React, { useState } from 'react';
import { Menu, X, MapPin, Globe, Plane } from 'lucide-react';
import { scrollToSection } from '../utils';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    scrollToSection(e, id);
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* w-full and minimized padding to push logo to the far left */}
      <div className="w-full px-2 md:px-6 py-2 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {!logoError ? (
            <img 
              src="/logo.png" 
              alt="Superman Travel Consult - STC" 
              className="h-20 md:h-28 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            /* Fallback Logo Construction matching the image provided */
            <div className="flex items-center gap-2">
              {/* Icon Graphic */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                {/* Red Pin */}
                <MapPin className="w-full h-full text-stcRed fill-current" strokeWidth={1} />
                
                {/* Globe inside Pin */}
                <div className="absolute top-[12%] left-[12%] w-[76%] h-[76%] bg-white rounded-full flex items-center justify-center overflow-hidden z-10 border border-stcBlue/20">
                   <Globe className="w-full h-full text-stcBlue" strokeWidth={1.5} />
                </div>

                {/* Plane crossing over */}
                <div className="absolute top-[35%] -right-[15%] z-20 drop-shadow-md transform -rotate-12">
                  <Plane className="w-8 h-8 md:w-10 md:h-10 text-gray-400 fill-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Text Graphic */}
              <div className="flex flex-col justify-center -space-y-1 pt-1">
                <span className="text-stcBlue font-bold text-lg md:text-xl leading-none tracking-tight">SupermanTravel</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-stcDark font-bold text-sm md:text-base tracking-wide">Consult</span>
                  <span className="text-stcDark font-extrabold text-2xl md:text-3xl leading-none">STC</span>
                </div>
              </div>
            </div>
          )}
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
          className="md:hidden text-gray-700 pr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-lg z-50">
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