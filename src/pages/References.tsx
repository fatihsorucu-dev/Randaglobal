import React from 'react';
import { motion } from 'motion/react';
import { Building2, MapPin, Star } from 'lucide-react';
import { REFERENCES } from '../constants';

export default function References() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 tracking-tight">
            Our <span className="text-randa-blue">References.</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by leading institutions worldwide for critical communication 
            infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REFERENCES.map((ref) => (
            <div key={ref.id} className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-xl shadow-zinc-200/50 hover:border-randa-blue/20 transition-all">
              <div className="w-12 h-12 bg-randa-blue/5 rounded-xl flex items-center justify-center text-randa-blue mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-stone-100 text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-4">
                <Star className="w-3 h-3 text-amber-500" />
                <span>{ref.category}</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2 leading-tight">{ref.name}</h3>
              <div className="flex items-center text-sm text-zinc-500">
                <MapPin className="w-4 h-4 mr-1 opacity-50" />
                <span>{ref.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
