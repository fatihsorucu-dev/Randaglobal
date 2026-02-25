import React from 'react';
import { motion } from 'motion/react';
import { History, Target, Eye, Award } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 tracking-tight">
            Crafting Excellence in <br />
            <span className="text-randa-blue">Digital Communication.</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Since 1998, {COMPANY_NAME} has been at the forefront of designing and 
            manufacturing advanced call systems that empower healthcare professionals 
            and service providers.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/images/about-office.jpg" 
                alt="Our Office"
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-randa-blue/10 rounded-full blur-3xl -z-10" />
          </div>
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-randa-blue/10 border border-randa-blue/20 text-randa-blue text-xs font-bold uppercase tracking-wider mb-6">
              <History className="w-3 h-3" />
              <span>Our Journey</span>
            </div>
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">A Legacy of Innovation</h2>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              {COMPANY_NAME} was founded with a clear vision: to bridge the gap 
              between technology and human needs in critical environments. Over the 
              past two decades, we have evolved from a small R&D boutique to a 
              globally recognized manufacturer.
            </p>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              Our expertise lies in the development of sophisticated communication 
              infrastructures that ensure safety and efficiency in healthcare, 
              hospitality, and industrial sectors. We take pride in our in-house 
              R&D capabilities, allowing us to stay ahead of industry trends and 
              deliver bespoke solutions to our clients.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Our registered trademark, <strong>Digimat</strong>, has become 
              synonymous with reliability in hospitals, nursing homes, and 
              public facilities across multiple continents. We are committed to 
              continuous improvement and excellence in everything we do.
            </p>
          </div>
        </div>

        {/* Mission/Vision */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <div className="p-10 rounded-[40px] bg-white border border-zinc-100 shadow-xl shadow-zinc-200/50">
            <div className="w-14 h-14 bg-randa-blue/10 rounded-2xl flex items-center justify-center text-randa-blue mb-8">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our Mission</h3>
            <p className="text-zinc-600 leading-relaxed">
              To provide state-of-the-art digital communication solutions that 
              enhance safety, efficiency, and comfort in professional environments.
            </p>
          </div>
          <div className="p-10 rounded-[40px] bg-zinc-900 text-white shadow-xl shadow-zinc-900/20">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-randa-blue mb-8">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-zinc-400 leading-relaxed">
              To be the global leader in digital call systems, setting new 
              benchmarks for quality, innovation, and user-centric design.
            </p>
          </div>
          <div className="p-10 rounded-[40px] bg-white border border-zinc-100 shadow-xl shadow-zinc-200/50">
            <div className="w-14 h-14 bg-randa-blue/10 rounded-2xl flex items-center justify-center text-randa-blue mb-8">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our Values</h3>
            <p className="text-zinc-600 leading-relaxed">
              Integrity, innovation, and unwavering commitment to customer 
              satisfaction are the pillars of everything we build.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
