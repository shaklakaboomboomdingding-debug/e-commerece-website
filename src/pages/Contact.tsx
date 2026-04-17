import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      
      {/* Header */}
      <div className="bg-black text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">Get in Touch</h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Have a question about our products, an order, or just want to say hi? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-4xl font-bold mb-10">Contact Information</h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Our Store</h3>
                  <p className="text-gray-600 leading-relaxed">
                    123 Fashion Street,<br />
                    Cyber City, Phase 1,<br />
                    New Delhi 110001,<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Call Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    +91 98765 43210<br />
                    Mon-Fri, 9am to 6pm IST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Email Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    support@shoesbazar.in<br />
                    info@shoesbazar.in
                  </p>
                </div>
              </div>
            </div>
            
            {/* Minimal Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-gray-200 border border-black relative overflow-hidden flex items-center justify-center filter grayscale">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Map Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 bg-white p-4 border border-black text-center shadow-xl">
                <MapPin className="w-8 h-8 text-black mx-auto mb-2" />
                <p className="font-bold uppercase tracking-widest text-xs">Shoes Bazar HQ</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="font-serif text-3xl font-bold mb-8">Send a Message</h2>
            
            {isSubmitted ? (
               <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="bg-green-50 border border-green-200 text-green-800 p-6 flex flex-col items-center text-center space-y-4"
             >
               <Send className="w-8 h-8 mx-auto" />
               <p className="font-bold">Thank you for your message!</p>
               <p className="text-sm">We will get back to you within 24-48 hours.</p>
             </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Your Name</label>
                  <input 
                    id="name"
                    type="text" 
                    required
                    className="w-full border border-gray-200 p-4 focus:outline-none focus:border-black transition-colors" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    className="w-full border border-gray-200 p-4 focus:outline-none focus:border-black transition-colors" 
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                  <input 
                    id="subject"
                    type="text" 
                    required
                    className="w-full border border-gray-200 p-4 focus:outline-none focus:border-black transition-colors" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={6}
                    className="w-full border border-gray-200 p-4 focus:outline-none focus:border-black transition-colors resize-none" 
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors"
                >
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
