import React from 'react';
import { motion } from 'motion/react';
import ContactForm from '../components/home/ContactForm';
import { COMPANY_NAME, CONTACT_INFO } from '../constants';
import { MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 tracking-tight text-center">
          Let's <span className="text-randa-blue">Connect.</span>
        </h1>
        <p className="text-xl text-zinc-600 max-w-2xl mx-auto text-center leading-relaxed">
          Whether you have a technical question or want to discuss a large-scale 
          implementation, our team is here to help.
        </p>
      </div>
      
      <ContactForm />

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[40px] overflow-hidden bg-stone-100 aspect-[21/9] relative group border border-zinc-100">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white max-w-md text-center">
                <div className="w-16 h-16 bg-randa-blue rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-randa-blue/40">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">{COMPANY_NAME} HQ</h3>
                <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
                <a 
                  href={CONTACT_INFO.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-zinc-900 text-white rounded-xl font-bold hover:bg-zinc-800 transition-all"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <img 
              src="https://picsum.photos/seed/map/1920/800?grayscale&blur=2" 
              alt="Map Background" 
              className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
