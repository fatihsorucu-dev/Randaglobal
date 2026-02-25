import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-randa-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-randa-blue/10 border border-randa-blue/20 text-randa-blue text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3" />
              <span>Innovating Since 1998</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6">
              Digital Call Systems for <span className="text-randa-blue">Critical</span> Environments.
            </h1>
            <p className="text-lg text-zinc-600 mb-10 max-w-lg leading-relaxed">
              From IP Nurse Call systems to synchronized master clocks, we provide 
              the infrastructure that keeps healthcare and service sectors running smoothly.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/category/nurse-call" className="px-8 py-4 bg-randa-blue text-white rounded-2xl font-bold hover:bg-randa-blue/90 transition-all shadow-xl shadow-randa-blue/25 flex items-center justify-center space-x-2 group">
                <span>Explore Systems</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-2xl font-bold hover:bg-stone-50 transition-all flex items-center justify-center">
                Learn More
              </Link>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-zinc-900">750+</span>
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Projects</span>
              </div>
              <div className="w-px h-8 bg-zinc-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-zinc-900">25+</span>
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Years</span>
              </div>
              <div className="w-px h-8 bg-zinc-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-zinc-900">Global</span>
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Reach</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/images/hero-healthcare.jpg" 
                alt="Healthcare Technology"
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-bold uppercase tracking-wider">Certified Reliability</span>
                </div>
                <p className="text-sm opacity-90">Digimat systems are trusted by leading hospitals worldwide.</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-randa-blue rounded-3xl -z-10 rotate-12" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-zinc-200 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
