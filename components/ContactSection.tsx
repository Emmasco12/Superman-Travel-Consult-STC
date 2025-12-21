import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_PHONE_1, CONTACT_PHONE_2, CONTACT_EMAIL, CONTACT_ADDRESS } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-stcBlue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Contact Superman Travel Consult today. Whether you need a student visa for the USA or a work permit for Canada, we are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-stcRed p-4 rounded-full mb-6 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-blue-100">Call Us</h3>
              <p className="font-bold text-xl mb-1">{CONTACT_PHONE_1}</p>
              <p className="font-bold text-xl text-blue-200">{CONTACT_PHONE_2}</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-stcRed p-4 rounded-full mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-blue-100">Email Us</h3>
              <p className="font-bold text-lg break-all text-center">{CONTACT_EMAIL}</p>
              <p className="text-sm text-blue-300 mt-2">We reply within 24 hours</p>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-stcRed p-4 rounded-full mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-blue-100">Visit Us</h3>
              <p className="font-bold text-lg text-center px-4">{CONTACT_ADDRESS}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;