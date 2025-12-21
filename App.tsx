import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import AiAssistant from './components/AiAssistant';
import { Plane } from 'lucide-react';
import { scrollToSection } from './utils';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <AboutSection />
        
        {/* Banner Section */}
        <section className="bg-stcRed py-16 text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Dreaming of the UK or USA?</h2>
              <p className="text-red-100 text-lg md:text-xl">Let us handle the paperwork while you pack your bags.</p>
            </div>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-white text-stcRed px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition whitespace-nowrap text-lg cursor-pointer"
            >
              Get Started Now
            </a>
          </div>
          <Plane className="absolute top-1/2 -right-12 -translate-y-1/2 w-64 h-64 text-red-700/30 rotate-45" />
        </section>

        <ContactSection />
      </main>

      <footer className="bg-stcDark text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-gray-800 pb-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Superman Travel Consult</h4>
              <p className="text-sm leading-relaxed">
                Your trusted partner for international education, work permits, and seamless travel experiences. We bridge the gap between you and your global dreams.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white transition cursor-pointer">Home</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition cursor-pointer">Services</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition cursor-pointer">About</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition cursor-pointer">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="cursor-pointer hover:text-white transition">Privacy Policy</span></li>
                <li><span className="cursor-pointer hover:text-white transition">Terms of Service</span></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs">
            &copy; {new Date().getFullYear()} Superman Travel Consult. All rights reserved.
          </div>
        </div>
      </footer>

      <AiAssistant />
    </div>
  );
};

export default App;