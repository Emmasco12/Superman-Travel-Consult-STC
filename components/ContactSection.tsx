import React from 'react';
import { Phone, Mail, MapPin, Facebook, Share2, Clock } from 'lucide-react';
import { CONTACT_PHONE_1, CONTACT_PHONE_2, CONTACT_EMAIL, CONTACT_ADDRESS_1, CONTACT_ADDRESS_2, FACEBOOK_URL, TIKTOK_URL, WHATSAPP_URL, WORKING_HOURS, WORKING_HOURS_NOTE } from '../constants';

// TikTok Icon Component since it might not be available in all versions of lucide-react
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

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-stcBlue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Contact Superman Travel Consult today. Whether you need a student visa for the USA, a work permit for Canada, or planning a trip to China, Dubai, Schengen countries, or any country of interest, we are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-stcRed p-4 rounded-full mb-6 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-blue-100">Call Us</h3>
              <a href={`tel:${CONTACT_PHONE_1.replace(/\s+/g, '')}`} className="font-bold text-xl mb-1 whitespace-nowrap hover:text-blue-300 transition-colors">{CONTACT_PHONE_1}</a>
              <a href={`tel:${CONTACT_PHONE_2.replace(/\s+/g, '')}`} className="font-bold text-xl text-blue-200 whitespace-nowrap hover:text-white transition-colors">{CONTACT_PHONE_2}</a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-stcRed p-4 rounded-full mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-blue-100">Email Us</h3>
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-lg break-all text-center hover:text-blue-300 transition-colors">{CONTACT_EMAIL}</a>
              <p className="text-sm text-blue-300 mt-2">We reply within 24 hours</p>
            </div>

            {/* Address & Hours */}
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-stcRed p-4 rounded-full mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-blue-100">Visit Us</h3>
              <div className="space-y-4 text-center px-4 w-full">
                <div className="pb-3 border-b border-white/10 last:border-0 last:pb-0">
                  <h4 className="text-xs uppercase tracking-widest text-blue-300 mb-1">Headquarters</h4>
                  <p className="font-bold text-sm leading-tight">{CONTACT_ADDRESS_1}</p>
                </div>
                <div>
                   <h4 className="text-xs uppercase tracking-widest text-blue-300 mb-1">Branches</h4>
                  <p className="font-bold text-sm leading-tight">{CONTACT_ADDRESS_2}</p>
                </div>
                <div className="pt-3 border-t border-white/10 mt-2">
                   <h4 className="text-xs uppercase tracking-widest text-blue-300 mb-1 flex items-center justify-center gap-1">
                      <Clock size={12} /> Working Hours
                   </h4>
                   <p className="font-bold text-sm leading-tight">{WORKING_HOURS}</p>
                   <p className="text-xs text-blue-200/70 mt-0.5">{WORKING_HOURS_NOTE}</p>
                </div>
              </div>
            </div>

             {/* Social Media */}
             <div className="flex flex-col items-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-stcRed p-4 rounded-full mb-6 shadow-lg">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-blue-100">Follow Us</h3>
              <div className="flex flex-col w-full gap-3">
                <a 
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg transition-colors w-full font-medium"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
                <a 
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 py-2 px-4 rounded-lg transition-colors w-full font-medium border border-gray-700"
                >
                  <TikTokIcon className="w-5 h-5" />
                  <span>TikTok</span>
                </a>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors w-full font-medium"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;