import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, FileCode, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { DOCUMENTS } from '../constants';

export default function Documents() {
  const categories = Array.from(new Set(DOCUMENTS.map(doc => doc.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredDocs = DOCUMENTS.filter(doc => doc.category === activeCategory);

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
            Technical <span className="text-randa-blue">Documents.</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Access our latest product catalogs, installation guides, and 
            certifications.
          </p>
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
                
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredDocs.map((doc) => (
                    <div key={doc.id} className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-randa-blue/10 transition-all group">
                      <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-zinc-400 mb-6 group-hover:bg-randa-blue/10 group-hover:text-randa-blue transition-colors">
                        {doc.type === 'pdf' && <FileText className="w-7 h-7" />}
                        {doc.type === 'doc' && <FileCode className="w-7 h-7" />}
                        {doc.type === 'image' && <ImageIcon className="w-7 h-7" />}
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-4 leading-tight">{doc.title}</h3>
                      <a 
                        href={doc.url} 
                        className="inline-flex items-center space-x-2 text-sm font-bold text-randa-blue hover:text-randa-blue/80 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download {doc.type.toUpperCase()}</span>
                      </a>
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
