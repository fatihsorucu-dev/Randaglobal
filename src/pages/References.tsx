import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, MapPin, FileText, Download, ChevronRight } from 'lucide-react';
import { REFERENCES, REFERENCE_PDF_URL } from '../constants';

export default function References() {
  const categories = Array.from(new Set(REFERENCES.map(ref => ref.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredRefs = REFERENCES.filter(ref => ref.category === activeCategory);

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
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Trusted by leading institutions worldwide for critical communication 
            infrastructure.
          </p>
          
          {/* PDF Download Button */}
          <a 
            href={REFERENCE_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/20 group"
          >
            <FileText className="w-5 h-5 text-randa-blue" />
            <span>Download Reference List (PDF)</span>
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-[32px] p-6 border border-zinc-100 shadow-xl shadow-zinc-200/50 sticky top-32">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6 px-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all text-left ${
                      activeCategory === category 
                        ? 'bg-randa-blue text-white shadow-lg shadow-randa-blue/20' 
                        : 'text-zinc-600 hover:bg-stone-50 hover:text-randa-blue'
                    }`}
                  >
                    <span>{category}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform shrink-0 ml-2 ${activeCategory === category ? 'rotate-90' : ''}`} />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-8">
                  <div className="w-2 h-8 bg-randa-blue rounded-full mr-4" />
                  <h2 className="text-3xl font-bold text-zinc-900">{activeCategory}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredRefs.map((ref) => (
                    <div key={ref.id} className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-xl shadow-zinc-200/50 hover:border-randa-blue/20 transition-all">
                      <div className="w-12 h-12 bg-randa-blue/5 rounded-xl flex items-center justify-center text-randa-blue mb-6">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-2 leading-tight">{ref.name}</h3>
                      <div className="flex items-center text-sm text-zinc-500">
                        <MapPin className="w-4 h-4 mr-1 opacity-50" />
                        <span>{ref.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
