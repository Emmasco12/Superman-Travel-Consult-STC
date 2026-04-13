import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MapPin, Phone, User, PlaneTakeoff, Mail } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GHANA_REGIONS = [
  "Ashanti", "Greater Accra", "Northern", "Upper East", "Upper West", 
  "Volta", "Eastern", "Western", "Western North", "Central", 
  "Bono", "Bono East", "Ahafo", "Savannah", "North East", "Oti"
];

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    region: '',
    destination: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.region) newErrors.region = 'Please select a region';
    if (!formData.destination.trim()) newErrors.destination = 'Please describe your destination';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        let errorMsg = data.error || 'Failed to send email';
        if (data.details) {
          errorMsg += `\n\nDetails: ${data.details}`;
        }
        throw new Error(errorMsg);
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', region: '', destination: '' });
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert(error instanceof Error ? error.message : 'An error occurred while sending your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stcBlue/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header - Sticky */}
            <div className="bg-stcBlue p-6 text-white relative flex-shrink-0 z-10">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-stcRed rounded-lg">
                  <PlaneTakeoff className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-black tracking-tight">Start Your Journey</h2>
              </div>
              <p className="text-blue-100 text-sm opacity-80">Fill out the form below and an expert will contact you shortly.</p>
            </div>

            {/* Form - Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-stcBlue">Application Sent!</h3>
                  <p className="text-gray-500">Thank you for choosing STC. We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* First Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <User size={12} className="text-stcRed" />
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.firstName ? 'border-red-500' : 'border-gray-100'} focus:border-stcRed focus:ring-4 focus:ring-stcRed/5 outline-none transition-all text-stcBlue font-medium`}
                      />
                      {errors.firstName && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.firstName}</p>}
                    </div>

                    {/* Last Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <User size={12} className="text-stcRed" />
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.lastName ? 'border-red-500' : 'border-gray-100'} focus:border-stcRed focus:ring-4 focus:ring-stcRed/5 outline-none transition-all text-stcBlue font-medium`}
                      />
                      {errors.lastName && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <Mail size={12} className="text-stcRed" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-100'} focus:border-stcRed focus:ring-4 focus:ring-stcRed/5 outline-none transition-all text-stcBlue font-medium`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.email}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <Phone size={12} className="text-stcRed" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+233 XX XXX XXXX"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-100'} focus:border-stcRed focus:ring-4 focus:ring-stcRed/5 outline-none transition-all text-stcBlue font-medium`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.phone}</p>}
                  </div>

                  {/* Region */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <MapPin size={12} className="text-stcRed" />
                      Region in Ghana
                    </label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.region ? 'border-red-500' : 'border-gray-100'} focus:border-stcRed focus:ring-4 focus:ring-stcRed/5 outline-none transition-all text-stcBlue font-medium appearance-none`}
                    >
                      <option value="">Select your region</option>
                      {GHANA_REGIONS.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                    {errors.region && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.region}</p>}
                  </div>

                  {/* Destination Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <Send size={12} className="text-stcRed" />
                      Describe Your Destination
                    </label>
                    <textarea
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Tell us where you want to travel, work, or study..."
                      rows={3}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${errors.destination ? 'border-red-500' : 'border-gray-100'} focus:border-stcRed focus:ring-4 focus:ring-stcRed/5 outline-none transition-all text-stcBlue font-medium resize-none`}
                    />
                    {errors.destination && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.destination}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-2xl font-black text-lg shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 ${
                      isSubmitting 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-stcRed text-white shadow-red-900/20 hover:bg-red-600 hover:shadow-red-900/30'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
