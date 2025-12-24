import React from 'react';
import { SERVICES } from '../constants';
import { Trophy, Plane, ArrowRight, MapPin, Calendar, Ticket } from 'lucide-react';
import { scrollToSection } from '../utils';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-stcRed font-bold uppercase tracking-wider mb-3">What We Do</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-stcBlue mb-4">Our Services</h2>
          <div className="w-24 h-1.5 bg-stcRed mx-auto rounded-full"></div>
        </div>

        {/* Professional World Cup 2026 Flyer */}
        <div className="relative w-full max-w-7xl mx-auto mb-20 rounded-3xl overflow-hidden shadow-2xl group border border-gray-200/50">
          
          {/* Background Park/Stadium Image - CLEAR VISIBILITY */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=1600&q=80" 
              alt="World Cup Stadium" 
              className="w-full h-full object-cover"
            />
            {/* Subtle dark gradient for text readability only on the left, clear on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 p-8 md:p-12 items-center">
            
            {/* Left Content (6 columns) */}
            <div className="lg:col-span-6 text-white space-y-6 md:space-y-8 relative z-20 lg:pb-32">
               {/* Badge & Company Name */}
               <div className="flex flex-col items-start gap-4">
                 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg border border-red-500/50 backdrop-blur-md">
                    <Trophy size={16} className="text-yellow-300" /> 
                    <span>Official Event Support</span>
                 </div>
                 <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl pl-1 leading-none">
                    SUPERMAN Travel <span className="block text-3xl md:text-5xl mt-2 text-yellow-400">Consult-STC</span>
                 </h1>
                 <p className="text-base md:text-xl text-stcRed font-bold pl-1 italic tracking-wide">
                   Where your dreams come into reality
                 </p>
                 <p className="text-lg md:text-2xl text-white font-bold pl-1 italic tracking-wide">
                   Do you want to watch
                 </p>
               </div>
               
               <div className="space-y-2">
                 <h2 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 drop-shadow-sm">
                   2026
                 </h2>
                 <h2 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight drop-shadow-lg opacity-90">
                   WORLD CUP
                 </h2>
               </div>
               
               <div className="flex flex-wrap items-center gap-4 text-lg md:text-xl font-medium tracking-wide text-blue-100">
                  <span className="flex items-center gap-2 drop-shadow-md"><span className="w-2 h-2 bg-red-500 rounded-full"></span> USA</span>
                  <span className="hidden md:inline text-white/50">|</span>
                  <span className="flex items-center gap-2 drop-shadow-md"><span className="w-2 h-2 bg-white rounded-full"></span> CANADA</span>
                  <span className="hidden md:inline text-white/50">|</span>
                  <span className="flex items-center gap-2 drop-shadow-md"><span className="w-2 h-2 bg-green-500 rounded-full"></span> MEXICO</span>
               </div>

               <p className="text-lg md:text-xl text-gray-100 max-w-xl leading-relaxed border-l-4 border-yellow-400 pl-6 bg-black/40 py-2 rounded-r-lg backdrop-blur-sm">
                 Experience the thrill live at the park! We provide visa assistance, flight packages, and accommodation.
               </p>

               {/* Mobile Button and Benefits (Visible only on small screens) */}
               <div className="flex flex-col gap-6 pt-2 lg:hidden">
                 <a 
                   href="#contact" 
                   onClick={(e) => scrollToSection(e, 'contact')}
                   className="inline-flex items-center justify-center gap-3 bg-white text-stcBlue hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 cursor-pointer"
                 >
                    <span>Book Consultation</span>
                    <ArrowRight size={20} />
                 </a>

                 {/* Benefits List Mobile */}
                 <div className="pt-2">
                    <h4 className="text-yellow-400 font-bold text-lg mb-3 tracking-wide">Benefits of the World Cup VISA</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-white text-base font-medium">
                        <span className="text-yellow-400 font-bold min-w-[20px]">1.</span> 
                        <span>Registration as a member</span>
                      </li>
                      <li className="flex items-start gap-3 text-white text-base font-medium">
                        <span className="text-yellow-400 font-bold min-w-[20px]">2.</span> 
                        <span>Uniforms Including Tracksuit and T-Shirts</span>
                      </li>
                      <li className="flex items-start gap-3 text-white text-base font-medium">
                        <span className="text-yellow-400 font-bold min-w-[20px]">3.</span> 
                        <span>Games tickets at least 3</span>
                      </li>
                      <li className="flex items-start gap-3 text-white text-base font-medium">
                        <span className="text-yellow-400 font-bold min-w-[20px]">4.</span> 
                        <span>Special Package</span>
                      </li>
                    </ul>
                 </div>
               </div>
            </div>

            {/* Right Visual (6 columns) - Composition of Ticket */}
            <div className="lg:col-span-6 relative h-[400px] md:h-[500px] flex items-center justify-center lg:justify-end perspective-1000">
                
                {/* The 'Ticket/Pass' Card with Aeroplane */}
                <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500 w-full max-w-md ml-auto mr-4 lg:mr-0 group hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    
                    {/* Header of Ticket */}
                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-3">
                         <div className="bg-stcRed p-2 rounded-lg">
                            <Plane size={18} className="text-white" />
                         </div>
                         <div>
                            <p className="text-white/60 text-[10px] uppercase tracking-wider">Airline</p>
                            <p className="text-white font-bold text-sm tracking-wide">STC AIRWAYS</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <p className="text-white/60 text-[10px] uppercase tracking-wider">Class</p>
                         <p className="text-yellow-400 font-bold text-sm tracking-wide">FIRST CLASS</p>
                      </div>
                    </div>

                    {/* Image Area - The Airplane */}
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-shadow">
                       <img 
                          src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80" 
                          alt="Travel Aeroplane" 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                       <div className="absolute bottom-3 left-3">
                          <p className="text-white/80 text-[10px] mb-0.5">Destination</p>
                          <p className="text-white font-bold text-base flex items-center gap-1">
                             USA <MapPin size={14} className="text-red-500" />
                          </p>
                       </div>
                    </div>

                    {/* Route Details */}
                    <div className="grid grid-cols-3 gap-2 text-center bg-black/30 rounded-xl p-3 mb-3">
                       <div>
                          <p className="text-white/50 text-[10px] uppercase font-bold mb-0.5">FROM</p>
                          <p className="text-white font-bold text-lg">ACC</p>
                       </div>
                       <div className="flex flex-col items-center justify-center">
                          <Plane size={14} className="text-white/50 rotate-90 mb-1" />
                          <div className="w-full h-px bg-white/20 border-t border-dashed border-white/40"></div>
                       </div>
                       <div>
                          <p className="text-white/50 text-[10px] uppercase font-bold mb-0.5">TO</p>
                          <p className="text-white font-bold text-lg">JFK</p>
                       </div>
                    </div>
                    
                    {/* Bottom Actions */}
                    <div className="flex justify-between items-center text-white/90 text-xs font-medium">
                       <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                          <Calendar size={12} className="text-yellow-400" /> June 2026
                       </div>
                       <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                          <Ticket size={12} className="text-yellow-400" /> Full Package
                       </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Desktop Button and Benefits (Absolute Bottom Left) */}
          <div className="hidden lg:flex flex-col gap-6 absolute bottom-8 left-12 z-30 max-w-md">
             <a 
               href="#contact" 
               onClick={(e) => scrollToSection(e, 'contact')}
               className="inline-flex items-center justify-center gap-3 bg-white text-stcBlue hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 cursor-pointer w-fit"
             >
                <span>Book Consultation</span>
                <ArrowRight size={20} />
             </a>
             
             {/* Benefits List Desktop - Removed background */}
             <div className="p-2">
                <h4 className="text-yellow-400 font-bold text-lg mb-3 tracking-wide drop-shadow-md">Benefits of the World Cup VISA</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-white text-base font-medium drop-shadow-md">
                    <span className="text-yellow-400 font-bold min-w-[15px]">1.</span> 
                    <span>Registration as a member</span>
                  </li>
                  <li className="flex items-start gap-3 text-white text-base font-medium drop-shadow-md">
                    <span className="text-yellow-400 font-bold min-w-[15px]">2.</span> 
                    <span>Uniforms Including Tracksuit and T-Shirts</span>
                  </li>
                  <li className="flex items-start gap-3 text-white text-base font-medium drop-shadow-md">
                    <span className="text-yellow-400 font-bold min-w-[15px]">3.</span> 
                    <span>Games tickets at least 3</span>
                  </li>
                  <li className="flex items-start gap-3 text-white text-base font-medium drop-shadow-md">
                    <span className="text-yellow-400 font-bold min-w-[15px]">4.</span> 
                    <span>Special Package</span>
                  </li>
                </ul>
             </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-stcRed group flex flex-col h-full"
            >
              <div className="mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-stcRed group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                <service.icon size={32} className="text-stcBlue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-stcBlue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;