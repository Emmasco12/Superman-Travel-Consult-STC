import React from 'react';
import { ChevronRight } from 'lucide-react';
import { scrollToSection } from '../utils';
import { HERO_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE_URL}
          alt="Traveler at airport" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stcBlue/90 to-stcDark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight drop-shadow-lg animate-fade-in-up">
            Superman Travel Consult
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-white mb-4 italic drop-shadow-md">
            Where your dreams come into reality
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-[#FF0000] tracking-widest uppercase mb-8 drop-shadow-sm">
            STC - Sei kutuu Sei Bam
          </h2>
          
          <p className="text-gray-200 text-lg mb-8 max-w-xl leading-relaxed">
            Professional guidance for your international dreams. From visa assistance to flight reservations, we handle the details so you can focus on the journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, 'services')}
              className="bg-stcRed hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition flex items-center justify-center gap-2 group shadow-xl cursor-pointer"
            >
              Explore Services
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;