import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDY_ABROAD_COUNTRIES } from '../constants';
import { CountryDetail } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { scrollToSection } from '../utils';

interface StudyAbroadDetailProps {
  onBack: () => void;
}

const StudyAbroadDetail: React.FC<StudyAbroadDetailProps> = ({ onBack }) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryDetail>(STUDY_ABROAD_COUNTRIES[0]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
    >
      {/* Header */}
      <div className="bg-stcBlue p-6 flex items-center justify-between text-white">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 hover:text-red-300 transition-colors font-bold"
        >
          <ArrowLeft size={20} />
          <span>Back to Services</span>
        </button>
        <h2 className="text-xl md:text-2xl font-bold">Study Abroad Programs</h2>
      </div>

      <div className="p-8 md:p-12">
        {/* Country Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {STUDY_ABROAD_COUNTRIES.map((country) => (
            <button
              key={country.id}
              onClick={() => setSelectedCountry(country)}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 border-2 ${
                selectedCountry.id === country.id 
                  ? 'border-stcRed bg-red-50 shadow-lg scale-105' 
                  : 'border-gray-100 bg-gray-50 hover:border-stcBlue hover:shadow-md'
              }`}
            >
              <span className="text-4xl mb-3">{country.flag}</span>
              <span className={`font-bold ${selectedCountry.id === country.id ? 'text-stcRed' : 'text-gray-700'}`}>
                {country.name}
              </span>
            </button>
          ))}
        </div>

        {/* Country Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCountry.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {/* Refined Hero Section */}
            <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6 md:p-12">
                <div className="flex items-center gap-5">
                  <img 
                    src={`https://flagcdn.com/w160/${selectedCountry.id === 'usa' ? 'us' : selectedCountry.id === 'canada' ? 'ca' : selectedCountry.id === 'uk' ? 'gb' : 'cn'}.png`}
                    alt={`${selectedCountry.name} Flag`}
                    className="w-12 md:w-20 h-auto rounded shadow-xl border border-white/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-stcRed font-bold tracking-widest uppercase text-xs md:text-sm mb-1 block">International Education</span>
                    <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                      Study in {selectedCountry.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4">
              <div className="space-y-10">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-stcBlue mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-stcRed rounded-full"></span>
                    Why Choose {selectedCountry.name}?
                  </h4>
                  
                  {selectedCountry.longDescription ? (
                    <div className="text-gray-600 text-lg leading-relaxed space-y-6 whitespace-pre-line">
                      {selectedCountry.longDescription}
                    </div>
                  ) : (
                    <ul className="grid md:grid-cols-2 gap-6">
                      {selectedCountry.benefits.map((benefit, index) => (
                        <li 
                          key={index}
                          className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100"
                        >
                          <CheckCircle2 className="text-stcRed mt-1 flex-shrink-0" size={22} />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* University Symbols - Simplified */}
                {selectedCountry.universityLogos && (
                  <div className="pt-8 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Partner Institutions</p>
                    <div className="flex flex-wrap gap-6 items-center">
                      {selectedCountry.universityLogos.map((logo, index) => (
                        <div 
                          key={index}
                          className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                        >
                          <img 
                            src={logo} 
                            alt="University Logo" 
                            className="max-w-full max-h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Section - More Professional */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a 
                    href="#contact" 
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className="bg-stcRed hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    Apply Now
                    <ArrowRight size={20} />
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className="bg-stcBlue hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    Get Consultation
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default StudyAbroadDetail;
