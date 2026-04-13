import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Plane, Phone, Calendar, ShieldCheck, Globe, Ticket } from 'lucide-react';

interface AirTicketingDetailProps {
  onBack: () => void;
  onOpenModal: () => void;
}

const AirTicketingDetail: React.FC<AirTicketingDetailProps> = ({ onBack, onOpenModal }) => {
  const features = [
    {
      title: "Best Flight Deals",
      description: "We help you find the most competitive prices across all major airlines.",
      icon: <Ticket className="text-blue-500" size={24} />
    },
    {
      title: "Quick & Secure Booking",
      description: "Fast, reliable, and secure ticket reservation process for your peace of mind.",
      icon: <ShieldCheck className="text-blue-500" size={24} />
    },
    {
      title: "Expert Guidance",
      description: "We guide you on the best airlines, routes, and schedules for your trip.",
      icon: <Globe className="text-blue-500" size={24} />
    },
    {
      title: "Support & Changes",
      description: "Full assistance with flight changes, cancellations, and travel support.",
      icon: <Calendar className="text-blue-500" size={24} />
    }
  ];

  const airlines = [
    { name: 'Emirates', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png' },
    { name: 'Qatar Airways', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/1200px-Qatar_Airways_Logo.svg.png' },
    { name: 'British Airways', logo: 'https://www.gotobermuda.com/sites/default/files/styles/600x400/public/profiles/images/BA-Logo-3016757e5056a34_301676ae-5056-a348-3a83925bf3e6cee8.png.webp?itok=pmlU9J3E' },
    { name: 'Turkish Airlines', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Turkish_Airlines_logo_2019_compact.svg/3840px-Turkish_Airlines_logo_2019_compact.svg.png' },
    { name: 'KLM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/1200px-KLM_logo.svg.png' }
  ];

  const gallery = [
    { url: 'https://www.shutterstock.com/shutterstock/videos/3545636599/preview/stock-footage-manchester-england-july-british-airways-airbus-a-taking-off-from-manchester-airport.mp4', alt: 'Airplane taking off', type: 'video' },
    { url: 'https://www.shutterstock.com/shutterstock/videos/3974388043/preview/stock-footage-london-england-united-kingdom-video-departure-lounge-area-in-terminal-london.mp4', alt: 'Airport scene', type: 'video' },
    { url: 'https://www.shutterstock.com/shutterstock/videos/4036979699/preview/stock-footage-black-couple-on-holiday-sitting-together-in-an-airport-lounge-area-surrounded-by-passengers.mp4', alt: 'Happy travelers', type: 'video' },
    { url: 'https://www.shutterstock.com/shutterstock/videos/3807392415/preview/stock-footage-drone-tahiti-aerial-view-of-moorea-island-lagoon-overwater-bungalows-in-clear-ocean-water-luxury.mp4', alt: 'Tropical destination', type: 'video' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-sky-50/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-[110] bg-white/80 backdrop-blur-md border-b border-sky-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-stcBlue font-bold hover:text-stcRed transition-colors group"
          >
            <div className="p-2 rounded-full bg-sky-50 group-hover:bg-stcRed/10 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span>Back to Services</span>
          </button>
          
          <div className="hidden md:flex items-center gap-3">
            <Plane className="text-stcRed animate-bounce" size={20} />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Flight Booking Desk Open</span>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Header Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80" 
            alt="Travel agent assisting client" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stcBlue/80 to-transparent flex items-center">
            <div className="container mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl text-white"
              >
                <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
                  Book Your Flights <span className="text-sky-300">Easily ✈️</span>
                </h1>
                <p className="text-xl md:text-2xl text-sky-100 font-medium opacity-90">
                  We handle everything from ticket booking to travel support.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-sky-900/5 border border-sky-50 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-stcBlue mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Airlines Section */}
        <section className="py-16 bg-white border-y border-sky-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-stcBlue mb-4">Trusted airline partners worldwide</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {airlines.map((airline) => (
                <img 
                  key={airline.name}
                  src={airline.logo} 
                  alt={airline.name} 
                  className="h-8 md:h-12 object-contain"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Visual Gallery Section */}
        <section className="py-20 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.03 }}
                className="relative h-64 rounded-3xl overflow-hidden shadow-lg group"
              >
                {item.type === 'video' ? (
                  <video 
                    src={item.url} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <img 
                    src={item.url} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold text-sm">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-stcBlue text-white text-center relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Take Off?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onOpenModal}
                className="bg-stcRed text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-red-900/40 hover:bg-red-600 transition-all active:scale-95 flex items-center gap-3"
              >
                <Plane size={24} />
                <span>Book Your Flight Now</span>
              </button>
              <button 
                onClick={onOpenModal}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all active:scale-95 flex items-center gap-3"
              >
                <Phone size={24} />
                <span>Contact an Agent</span>
              </button>
            </div>
          </div>
          <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-white/5 -rotate-12 pointer-events-none" />
        </section>
      </main>
    </div>
  );
};

export default AirTicketingDetail;
