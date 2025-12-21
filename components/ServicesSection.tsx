import React from 'react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-stcRed font-bold uppercase tracking-wider mb-2">What We Do</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-stcBlue">Our Services</h2>
          <div className="w-24 h-1 bg-stcRed mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-stcRed group"
            >
              <div className="mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-stcRed group-hover:text-white transition-colors duration-300">
                <service.icon size={32} className="text-stcBlue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-stcBlue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
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