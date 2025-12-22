import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ABOUT_IMAGE_URL } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
           <div className="md:w-1/2 relative group">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-stcRed/10 rounded-full -z-10 group-hover:bg-stcRed/20 transition-colors duration-500"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-stcBlue/10 rounded-full -z-10 group-hover:bg-stcBlue/20 transition-colors duration-500"></div>
             <img 
              src={ABOUT_IMAGE_URL}
              alt="Traveler with yellow suitcase in airport" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.01]" 
             />
           </div>
           
           <div className="md:w-1/2">
             <h3 className="text-stcRed font-bold uppercase tracking-wider mb-2">Who We Are</h3>
             <h2 className="text-3xl md:text-4xl font-bold text-stcBlue mb-6">Your Trusted Travel Partner</h2>
             <p className="text-gray-600 mb-6 leading-relaxed text-lg">
               Superman Travel Consult is dedicated to bridging the gap between your dreams and reality. 
               We specialize in assisting students, workers, and travelers in navigating the complex procedures 
               of international travel, specifically tailored for destinations like the USA, Canada, UK, China, Dubai, and Schengen countries.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {['Expert Visa Guidance', '98% Success Rate', 'Personalized Support', 'Global Network', 'Fast Processing', 'Reliable Service'].map((item, index) => (
                 <div key={index} className="flex items-center gap-3">
                   <CheckCircle2 className="text-stcRed w-5 h-5 flex-shrink-0" />
                   <span className="font-semibold text-gray-700">{item}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;