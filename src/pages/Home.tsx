import React from 'react';
import Hero from '../components/home/Hero';
import ProductGrid from '../components/home/ProductGrid';
import ContactForm from '../components/home/ContactForm';
import { motion } from 'motion/react';
import { Shield, Award, Users, HeartPulse } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      {/* Trust Section */}
      <section className="py-16 border-y border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-randa-blue">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-zinc-900">Certified</div>
                <div className="text-xs text-zinc-500">ISO 9001:2015</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-randa-blue">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-zinc-900">Award Winning</div>
                <div className="text-xs text-zinc-500">R&D Excellence</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-randa-blue">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-zinc-900">Expert Team</div>
                <div className="text-xs text-zinc-500">In-house R&D</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-randa-blue">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-zinc-900">Healthcare</div>
                <div className="text-xs text-zinc-500">Specialized Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />
      <ContactForm />
    </motion.div>
  );
}
