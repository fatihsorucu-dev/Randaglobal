import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

export default function ContactForm() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-zinc-200/50 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Info Side */}
            <div className="bg-zinc-900 p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <p className="text-zinc-400 mb-12 leading-relaxed">
                Have a project in mind or need technical support? Our team of 
                experts is ready to assist you with your digital call system needs.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-randa-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Call Us</div>
                    <div className="text-lg font-semibold">{CONTACT_INFO.phone}</div>
                    <div className="text-xs text-zinc-500 mt-1">Support: {CONTACT_INFO.support}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-randa-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Email Us</div>
                    <div className="text-lg font-semibold">{CONTACT_INFO.email}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-randa-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Visit Us</div>
                    <div className="text-lg font-semibold leading-tight">{CONTACT_INFO.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-randa-blue focus:ring-4 focus:ring-randa-blue/10 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-randa-blue focus:ring-4 focus:ring-randa-blue/10 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-randa-blue focus:ring-4 focus:ring-randa-blue/10 outline-none transition-all"
                    placeholder="Inquiry about Nurse Call Systems"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-randa-blue focus:ring-4 focus:ring-randa-blue/10 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button className="w-full py-4 bg-randa-blue text-white rounded-2xl font-bold hover:bg-randa-blue/90 transition-all shadow-xl shadow-randa-blue/25 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
