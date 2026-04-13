import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import StudyAbroadDetail from './components/StudyAbroadDetail';
import WorkAbroadDetail from './components/WorkAbroadDetail';
import VisaAssistanceDetail from './components/VisaAssistanceDetail';
import AirTicketingDetail from './components/AirTicketingDetail';
import ConsultationModal from './components/ConsultationModal';
import { Plane, MapPin, Phone, Mail, Facebook, Clock } from 'lucide-react';
import { scrollToSection } from './utils';
import { CONTACT_ADDRESS_1, CONTACT_ADDRESS_2, CONTACT_PHONE_1, CONTACT_EMAIL, FACEBOOK_URL, TIKTOK_URL, WHATSAPP_URL, WORKING_HOURS, WORKING_HOURS_NOTE } from './constants';
import { AnimatePresence, motion } from 'motion/react';

// TikTok Icon Component
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// WhatsApp Icon Component
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
  </svg>
);

const App: React.FC = () => {
  const [activeFocusService, setActiveFocusService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBack = () => setActiveFocusService(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!activeFocusService ? (
          <motion.div 
            key="landing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            <Header />
            
            <main className="flex-grow">
              <Hero onOpenModal={openModal} />
              <ServicesSection onSelectService={setActiveFocusService} onOpenModal={openModal} />
              <AboutSection onOpenModal={openModal} />
              
              {/* Banner Section */}
              <section className="bg-stcRed py-16 text-white overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Dreaming of USA, UK, China, Dubai, or any country of interest?</h2>
                    <p className="text-red-100 text-lg md:text-xl">Let us handle the paperwork while you pack your bags.</p>
                  </div>
                  <button 
                    onClick={openModal}
                    className="bg-white text-stcRed px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition whitespace-nowrap text-lg cursor-pointer"
                  >
                    Get Started Now
                  </button>
                </div>
                <Plane className="absolute top-1/2 -right-12 -translate-y-1/2 w-64 h-64 text-red-700/30 rotate-45" />
              </section>

              <ContactSection />
            </main>

            <footer className="bg-stcDark text-gray-400 py-12">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-gray-800 pb-8">
                  <div>
                    <h4 className="text-stcRed font-bold text-lg mb-4">Superman Travel Consult</h4>
                    <p className="text-sm leading-relaxed mb-4">
                      Your trusted partner for international education, work permits, and seamless travel experiences. We bridge the gap between you and your global dreams.
                    </p>
                    <div className="flex items-start gap-2 text-sm mb-2">
                       <MapPin size={16} className="mt-1 flex-shrink-0 text-stcRed" />
                       <div className="flex flex-col">
                         <span className="text-xs font-bold text-stcRed uppercase mb-0.5">Headquarters</span>
                         <span>{CONTACT_ADDRESS_1}</span>
                       </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                       <MapPin size={16} className="mt-1 flex-shrink-0 text-stcRed" />
                       <div className="flex flex-col">
                         <span className="text-xs font-bold text-stcRed uppercase mb-0.5">Branches</span>
                         <span>{CONTACT_ADDRESS_2}</span>
                       </div>
                    </div>
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
                    <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
                    <ul className="space-y-3 text-sm">
                       <li className="flex items-center gap-2">
                          <Phone size={16} className="text-stcRed" />
                          <a href={`tel:${CONTACT_PHONE_1.replace(/\s+/g, '')}`} className="hover:text-white transition">{CONTACT_PHONE_1}</a>
                       </li>
                       <li className="flex items-center gap-2">
                          <Mail size={16} className="text-stcRed" />
                          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition">{CONTACT_EMAIL}</a>
                       </li>
                       <li className="flex items-start gap-2">
                          <Clock size={16} className="text-stcRed mt-1" />
                          <div className="flex flex-col">
                             <span>{WORKING_HOURS}</span>
                             <span className="text-xs opacity-70">{WORKING_HOURS_NOTE}</span>
                          </div>
                       </li>
                       <li className="flex items-center gap-2 mt-2">
                          <Facebook size={16} className="text-stcRed" />
                          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook Page</a>
                       </li>
                       <li className="flex items-center gap-2">
                          <TikTokIcon className="text-stcRed w-4 h-4" />
                          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">TikTok Page</a>
                       </li>
                       <li className="flex items-center gap-2">
                          <WhatsAppIcon className="text-stcRed w-4 h-4" />
                          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a>
                       </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center text-xs">
                  &copy; {new Date().getFullYear()} Superman Travel Consult. All rights reserved.
                </div>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div 
            key="focused-service"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[200] bg-white overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col">
              {activeFocusService === 'study-abroad' && (
                <StudyAbroadDetail onBack={handleBack} onOpenModal={openModal} />
              )}
              {activeFocusService === 'work-abroad' && (
                <WorkAbroadDetail onBack={handleBack} onOpenModal={openModal} />
              )}
              {activeFocusService === 'visa-assistance' && (
                <VisaAssistanceDetail onBack={handleBack} onOpenModal={openModal} />
              )}
              {activeFocusService === 'air-ticketing' && (
                <AirTicketingDetail onBack={handleBack} onOpenModal={openModal} />
              )}
              
              {/* Footer for Focused View */}
              <footer className="bg-gray-50 py-8 mt-auto border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                  <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Superman Travel Consult. All rights reserved.
                  </p>
                </div>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;