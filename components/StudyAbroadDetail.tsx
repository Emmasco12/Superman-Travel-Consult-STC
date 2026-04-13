import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDY_ABROAD_COUNTRIES } from '../constants';
import { CountryDetail } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface StudyAbroadDetailProps {
  onBack: () => void;
  onOpenModal: () => void;
}

const StudyAbroadDetail: React.FC<StudyAbroadDetailProps> = ({ onBack, onOpenModal }) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryDetail>(STUDY_ABROAD_COUNTRIES[0]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white flex flex-col"
    >
      {/* Premium Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="w-[15%]">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-stcBlue hover:text-stcRed transition-colors font-bold text-sm"
          >
            <div className="p-2 rounded-full bg-gray-50 group-hover:bg-red-50 transition-colors">
              <ArrowLeft size={18} />
            </div>
            <span className="hidden sm:inline">Back</span>
          </button>
        </div>
        
        <div className="w-[70%] flex justify-center gap-4 md:gap-8">
          {STUDY_ABROAD_COUNTRIES.map((country) => (
            <button
              key={country.id}
              onClick={() => setSelectedCountry(country)}
              className={`relative py-2 px-1 transition-all duration-300 ${
                selectedCountry.id === country.id ? 'text-stcRed scale-125' : 'text-gray-400 hover:text-stcBlue hover:scale-110'
              }`}
            >
              <span className="text-2xl md:text-4xl">{country.flag}</span>
              {selectedCountry.id === country.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-4 left-0 right-0 h-1 bg-stcRed rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <div className="w-[15%] hidden md:flex justify-end items-center gap-2">
          <div className="w-8 h-8 bg-stcRed rounded-lg flex items-center justify-center">
            <CheckCircle2 size={16} className="text-white" />
          </div>
          <span className="font-bold text-stcBlue text-xs tracking-tight">Elite Study</span>
        </div>
      </nav>

      {/* Main Vertical Layout - Same on all devices */}
      <div className="flex-grow flex flex-col overflow-y-auto custom-scrollbar">
        
        {/* Top Section: Media (16:9 Cinematic Focus) */}
        <div className="w-full aspect-video relative overflow-hidden bg-gray-900 shadow-2xl z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCountry.id + '-media'}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {selectedCountry.video ? (
                <video 
                  src={selectedCountry.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={selectedCountry.image} 
                  alt={`Study in ${selectedCountry.name}`}
                  className="w-full h-full object-cover"
                />
              )}
              {/* Subtle Overlay for depth and focus */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Badge - Bottom Left (Simplified for Mobile) */}
              <div className="absolute bottom-4 md:bottom-12 left-4 md:left-12 flex items-center gap-3 md:gap-5 bg-black/30 backdrop-blur-xl p-3 md:p-5 rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl">
                <img 
                  src={`https://flagcdn.com/w80/${selectedCountry.id === 'usa' ? 'us' : selectedCountry.id === 'canada' ? 'ca' : selectedCountry.id === 'uk' ? 'gb' : 'cn'}.png`}
                  alt={`${selectedCountry.name} Flag`}
                  className="w-8 md:w-16 h-auto rounded-md md:rounded-lg shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="hidden md:block text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Destination</p>
                  <p className="text-white font-extrabold text-lg md:text-3xl tracking-tight">{selectedCountry.name}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Section: Content - Clean & Professional */}
        <div className="w-full bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCountry.id + '-content'}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-6xl mx-auto p-8 md:p-16 lg:p-20 space-y-16"
            >
              {/* Typography Hierarchy */}
              <div className="space-y-6 text-center">
                <span className="inline-flex px-4 py-1.5 bg-stcRed/10 text-stcRed text-xs font-black uppercase tracking-[0.3em] rounded-md">
                  Elite Education Program
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-stcBlue leading-[1.1] tracking-tighter">
                  Your Future in <span className="text-stcRed">{selectedCountry.name}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
                  Experience world-class education and unlock global opportunities in {selectedCountry.name}. Join thousands of international students achieving their academic dreams.
                </p>
              </div>

              {/* Content Sections - Single Column for better flow */}
              <div className="max-w-4xl mx-auto space-y-20">
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-stcBlue mb-8 flex items-center gap-4">
                    <div className="w-1.5 h-10 bg-stcRed rounded-full"></div>
                    Why Choose {selectedCountry.name}?
                  </h2>
                  
                  {selectedCountry.longDescription ? (
                    <div className="text-gray-600 text-lg leading-relaxed space-y-6 whitespace-pre-line bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                      {selectedCountry.longDescription}
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedCountry.benefits.map((benefit, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-stcRed/20 transition-all group"
                        >
                          <CheckCircle2 className="text-stcRed mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-700 font-bold text-sm md:text-base leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                {/* Partner Institutions - Now below description */}
                {selectedCountry.universityLogos && (
                  <section className="pt-10 border-t border-gray-100">
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.4em] mb-10 text-center">Top Partner Institutions</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                      {selectedCountry.universityLogos.map((logo, index) => (
                        <motion.div 
                          key={index}
                          whileHover={{ y: -5, scale: 1.05 }}
                          className="aspect-square bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                        >
                          <img 
                            src={logo} 
                            alt="University Logo" 
                            className="max-w-full max-h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-6 pt-10">
                  <button 
                    onClick={onOpenModal}
                    className="group flex-1 bg-stcRed hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-red-500/20 hover:-translate-y-1 cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={onOpenModal}
                    className="flex-1 bg-stcBlue hover:bg-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/20 hover:-translate-y-1 cursor-pointer"
                  >
                    Free Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default StudyAbroadDetail;
