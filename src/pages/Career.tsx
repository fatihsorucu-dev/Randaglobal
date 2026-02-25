import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Mail, Send } from 'lucide-react';
import { COMPANY_NAME, CONTACT_INFO } from '../constants';
import { Link } from 'react-router-dom';

export default function Career() {
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
            Join Our <span className="text-randa-blue">Team.</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            We are always looking for talented individuals who are passionate about 
            technology and innovation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-[40px] p-12 shadow-2xl shadow-zinc-200/50 border border-zinc-100">
          <div className="w-16 h-16 bg-randa-blue/10 rounded-2xl flex items-center justify-center text-randa-blue mb-8">
            <Briefcase className="w-8 h-8" />
          </div>
          
          <div className="prose prose-zinc lg:prose-lg">
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              To become a part of the {COMPANY_NAME} team, simply fill out our contact form or send your CV to <a href={`mailto:${CONTACT_INFO.email}`} className="text-randa-blue font-bold hover:underline">{CONTACT_INFO.email}</a>.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed mb-12">
              Your application will be reviewed by our relevant department, and suitable candidates will be contacted as soon as possible.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="px-8 py-4 bg-randa-blue text-white rounded-2xl font-bold hover:bg-randa-blue/90 transition-all shadow-xl shadow-randa-blue/25 flex items-center justify-center space-x-2">
              <span>Go to Contact Form</span>
              <Send className="w-5 h-5" />
            </Link>
            <a href={`mailto:${CONTACT_INFO.email}`} className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-2xl font-bold hover:bg-stone-50 transition-all flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Send CV via Email</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
