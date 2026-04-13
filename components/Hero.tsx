import React from 'react';
import { ChevronRight } from 'lucide-react';
import { scrollToSection } from '../utils';
import { HERO_VIDEO_URL } from '../constants';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/webm" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg animate-fade-in-up">
            Superman Travel Consult
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-yellow-400 mb-6 italic drop-shadow-lg">
            Where your dreams come into reality
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase mb-10 drop-shadow-sm">
            STC - Sei kutuu Sei Bam
          </h2>
          
          <p className="text-white text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-semibold drop-shadow-sm">
            Professional guidance for your international dreams. From visa assistance to flight reservations, we handle the details so you can focus on the journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, 'services')}
              className="bg-stcRed hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition flex items-center justify-center gap-2 group shadow-xl cursor-pointer"
            >
              Explore Services
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={onOpenModal}
              className="bg-white hover:bg-gray-100 text-stcBlue px-8 py-4 rounded-full font-bold text-lg transition flex items-center justify-center gap-2 shadow-xl"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;