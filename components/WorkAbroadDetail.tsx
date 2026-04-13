import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WORK_ABROAD_COUNTRIES } from '../constants';
import { WorkCountryDetail } from '../types';
import { ArrowLeft, ArrowRight, Briefcase, CheckCircle2, ChevronDown } from 'lucide-react';

interface WorkAbroadDetailProps {
  onBack: () => void;
  onOpenModal: () => void;
}

const WorkAbroadDetail: React.FC<WorkAbroadDetailProps> = ({ onBack, onOpenModal }) => {
  const [selectedCountry, setSelectedCountry] = useState<WorkCountryDetail>(WORK_ABROAD_COUNTRIES[0]);
  const [expandedProfession, setExpandedProfession] = useState<string | null>(null);

  const handleCountryChange = (country: WorkCountryDetail) => {
    setSelectedCountry(country);
    setExpandedProfession(null);
  };

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
          {WORK_ABROAD_COUNTRIES.map((country) => (
            <button
              key={country.id}
              onClick={() => handleCountryChange(country)}
              className={`relative py-2 px-1 transition-all duration-300 ${
                selectedCountry.id === country.id ? 'text-stcRed scale-125' : 'text-gray-400 hover:text-stcBlue hover:scale-110'
              }`}
            >
              <span className="text-2xl md:text-4xl">{country.flag}</span>
              {selectedCountry.id === country.id && (
                <motion.div 
                  layoutId="activeWorkTab"
                  className="absolute -bottom-4 left-0 right-0 h-1 bg-stcRed rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <div className="w-[15%] hidden md:flex justify-end items-center gap-2">
          <div className="w-8 h-8 bg-stcRed rounded-lg flex items-center justify-center">
            <Briefcase size={16} className="text-white" />
          </div>
          <span className="font-bold text-stcBlue text-xs tracking-tight">Global Career</span>
        </div>
      </nav>

      {/* Main Vertical Layout - Same on all devices */}
      <div className="flex-grow flex flex-col overflow-y-auto custom-scrollbar">
        
        {/* Top Section: Media (16:9 Cinematic Focus) */}
        <div className="w-full aspect-video relative overflow-hidden bg-gray-900 shadow-2xl z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCountry.id}-${expandedProfession || 'default'}-work-media`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {(() => {
                const professionVideo = expandedProfession ? selectedCountry.professionVideos?.[expandedProfession] : null;
                const videoSrc = professionVideo || selectedCountry.video;
                
                if (videoSrc) {
                  return (
                    <video 
                      key={videoSrc}
                      src={videoSrc} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  );
                }
                
                return (
                  <img 
                    src={selectedCountry.image} 
                    alt={`Work in ${selectedCountry.name}`}
                    className="w-full h-full object-cover"
                  />
                );
              })()}
              {/* Subtle Overlay for depth and focus */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Badge - Bottom Left (Simplified for Mobile) */}
              <div className="absolute bottom-4 md:bottom-12 left-4 md:left-12 flex items-center gap-3 md:gap-5 bg-black/30 backdrop-blur-xl p-3 md:p-5 rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl">
                <img 
                  src={`https://flagcdn.com/w80/${selectedCountry.id === 'usa' ? 'us' : selectedCountry.id === 'canada' ? 'ca' : selectedCountry.id === 'uk' ? 'gb' : 'ae'}.png`}
                  alt={`${selectedCountry.name} Flag`}
                  className="w-8 md:w-16 h-auto rounded-md md:rounded-lg shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="hidden md:block text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Work Destination</p>
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
              key={selectedCountry.id + '-work-content'}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-6xl mx-auto p-8 md:p-16 lg:p-20 space-y-16"
            >
              {/* Typography Hierarchy */}
              <div className="space-y-6 text-center">
                <span className="inline-flex px-4 py-1.5 bg-blue-50 text-stcBlue text-xs font-black uppercase tracking-[0.3em] rounded-md">
                  Professional Placement
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-stcBlue leading-[1.1] tracking-tighter">
                  Build Your Career in <span className="text-stcRed">{selectedCountry.name}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto">
                  Unlock premium work opportunities and secure your future in {selectedCountry.name}. Join thousands of professionals achieving their career goals.
                </p>
              </div>

              {/* Organized Content Sections - Single Column for better flow */}
              <div className="max-w-4xl mx-auto space-y-20">
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-stcBlue mb-8 flex items-center gap-4">
                    <div className="w-1.5 h-10 bg-stcRed rounded-full"></div>
                    Why Work in {selectedCountry.name}?
                  </h2>
                  
                  <div className="text-gray-600 text-lg leading-relaxed space-y-8 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <p>{selectedCountry.description}</p>
                    
                    <div className="pt-8 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.4em]">In-Demand Professions</h3>
                        <span className="text-[10px] font-bold text-stcRed uppercase tracking-widest animate-pulse">Click to explore</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {selectedCountry.professions.map((prof, index) => (
                          <div key={index} className="space-y-3">
                            <button 
                              onClick={() => setExpandedProfession(expandedProfession === prof ? null : prof)}
                              className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all group text-left cursor-pointer ${
                                expandedProfession === prof 
                                  ? 'bg-stcRed/5 border-stcRed/30 ring-1 ring-stcRed/20 shadow-sm' 
                                  : 'bg-white border-gray-100 hover:border-stcRed/20 hover:shadow-md hover:-translate-y-0.5'
                              }`}
                            >
                              <div className="flex items-center gap-4">
                                <CheckCircle2 className={`transition-colors ${expandedProfession === prof ? 'text-stcRed' : 'text-gray-300 group-hover:text-stcRed/60'}`} size={20} />
                                <span className={`font-bold text-sm md:text-base transition-colors ${expandedProfession === prof ? 'text-stcBlue' : 'text-gray-700'}`}>{prof}</span>
                              </div>
                              <div className={`transition-transform duration-300 ${expandedProfession === prof ? 'rotate-180 text-stcRed' : 'text-gray-300 group-hover:text-stcRed/60'}`}>
                                <ChevronDown size={18} />
                              </div>
                            </button>
                            <AnimatePresence>
                              {expandedProfession === prof && selectedCountry.professionDescriptions?.[prof] && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0, y: -10 }}
                                  animate={{ height: 'auto', opacity: 1, y: 0 }}
                                  exit={{ height: 0, opacity: 0, y: -10 }}
                                  className="overflow-hidden"
                                >
                                  <div className="p-6 bg-white rounded-2xl border border-stcRed/10 text-gray-600 text-sm leading-relaxed shadow-inner italic relative">
                                    <div className="absolute top-0 left-6 w-4 h-4 bg-white border-t border-l border-stcRed/10 -translate-y-2 rotate-45"></div>
                                    {selectedCountry.professionDescriptions[prof]}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Call to Action */}
                <div className="flex flex-col gap-6 pt-10">
                  <div className="bg-stcBlue/5 p-8 md:p-12 rounded-3xl border border-stcBlue/10 space-y-8 text-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-stcBlue">Ready to start your journey?</h3>
                      <p className="text-gray-600 text-lg max-w-2xl mx-auto">Our experts are here to guide you through every step of the visa and placement process.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <button 
                        onClick={onOpenModal}
                        className="group flex-1 max-w-xs bg-stcRed hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-red-500/20 hover:-translate-y-1 cursor-pointer"
                      >
                        <span>Apply for Work Permit</span>
                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button 
                        onClick={onOpenModal}
                        className="flex-1 max-w-xs bg-stcBlue hover:bg-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/20 hover:-translate-y-1 cursor-pointer"
                      >
                        Free Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkAbroadDetail;
