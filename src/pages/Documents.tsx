import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, FileCode, Image as ImageIcon } from 'lucide-react';
import { DOCUMENTS } from '../constants';

export default function Documents() {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCUMENTS.map((doc) => (
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
      </div>
    </motion.div>
  );
}
