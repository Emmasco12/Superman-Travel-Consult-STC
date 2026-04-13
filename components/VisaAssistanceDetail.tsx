import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ShieldCheck, FileText, Globe, Clock } from 'lucide-react';

interface VisaAssistanceDetailProps {
  onBack: () => void;
  onOpenModal: () => void;
}

const VisaAssistanceDetail: React.FC<VisaAssistanceDetailProps> = ({ onBack, onOpenModal }) => {
  const services = [
    {
      title: "Student Visa Support",
      description: "Comprehensive guidance for students aiming to study in top global destinations.",
      icon: <Globe className="text-stcRed" size={24} />
    },
    {
      title: "Work Permit Assistance",
      description: "Expert help in securing work visas and navigating international employment laws.",
      icon: <ShieldCheck className="text-stcRed" size={24} />
    },
    {
      title: "Tourist & Visit Visas",
      description: "Seamless application processes for leisure and business travel worldwide.",
      icon: <FileText className="text-stcRed" size={24} />
    },
    {
      title: "Document Verification",
      description: "Thorough review of all required paperwork to ensure embassy compliance.",
      icon: <Clock className="text-stcRed" size={24} />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header / Navigation */}
      <nav className="sticky top-0 z-[110] bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-stcBlue font-bold hover:text-stcRed transition-colors group"
          >
            <div className="p-2 rounded-full bg-gray-50 group-hover:bg-stcRed/10 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span>Back to Services</span>
          </button>
          
          <div className="hidden md:flex items-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Expert Consultation Active</span>
          </div>
        </div>
      </nav>

      {/* Main Content - Asymmetrical Split Layout */}
      <div className="flex-grow flex flex-col">
        
        {/* Top Section: Visual Focus (Full Width) */}
        <div className="w-full relative h-[50vh] min-h-[400px] bg-gray-900 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* Cinematic Background Video - Airport Scene */}
            <video 
              src="https://www.shutterstock.com/shutterstock/videos/3855574151/preview/stock-footage-malaysia-kualu-lumpur-international-airport-situation-arrival-and-departure-area.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover opacity-80"
            />
            
            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent lg:bg-gradient-to-l lg:from-black/20 lg:to-transparent"></div>
            
            {/* Floating Badge on Image */}
            <div className="absolute bottom-10 left-10 z-20 hidden md:block">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-stcRed rounded-lg">
                    <ShieldCheck className="text-white" size={20} />
                  </div>
                  <span className="text-white font-bold tracking-tight">Verified Success Rate</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Our consultants have a 98% success rate in securing visas for our clients across 50+ countries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Description & Services (Full Width) */}
        <div className="w-full bg-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-7xl mx-auto p-8 md:p-12 lg:p-16 space-y-12"
          >
            {/* Title Section */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-stcRed/10 text-stcRed text-[10px] font-black uppercase tracking-[0.3em] rounded-full">
                Premium Support
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-stcBlue leading-tight tracking-tighter">
                Visa Assistance <span className="text-stcRed">Services</span>
              </h1>
              <div className="w-20 h-1.5 bg-stcRed rounded-full"></div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Navigating the complexities of international visa applications can be overwhelming. At Superman Travel Consult, we simplify the entire process, ensuring your paperwork is flawless and your application is submitted with the highest chance of success.
              </p>
              <p>
                Whether you are a student chasing academic dreams, a professional seeking global career growth, or a traveler exploring new horizons, our dedicated team of experts provides personalized guidance tailored to your specific destination and visa type.
              </p>
            </div>

            {/* Key Offerings - Bullet Points */}
            <div className="space-y-8">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.4em]">Our Core Offerings</h3>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 p-3 rounded-2xl bg-gray-50 group-hover:bg-stcRed/5 transition-colors">
                      {service.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-stcBlue group-hover:text-stcRed transition-colors">{service.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 text-stcBlue font-bold text-sm">
                <CheckCircle2 className="text-green-500" size={18} />
                <span>Embassy Compliant Documentation</span>
              </div>
              <div className="flex items-center gap-3 text-stcBlue font-bold text-sm mt-3">
                <CheckCircle2 className="text-green-500" size={18} />
                <span>Personalized Interview Preparation</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button 
                onClick={onOpenModal}
                className="w-full bg-stcBlue text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-900/20 hover:bg-stcRed hover:shadow-stcRed/30 transition-all active:scale-95"
              >
                Book Start My Application
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisaAssistanceDetail;
