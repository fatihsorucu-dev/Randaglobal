import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';
import { useLocation } from 'react-router-dom';

export default function ContactForm() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    if (location.state?.product) {
      setFormData(prev => ({
        ...prev,
        subject: `Quotation Request: ${location.state.product}`
      }));
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // In a real app, this would be an API call to a backend that sends the email
      console.log('Sending email to info@randa.com.tr', formData);
    }, 1500);
  };

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
            <div className="p-12 lg:p-20 relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-zinc-700 mb-2">Full Name</label>
                          <input 
                            required
                            type="text" 
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-randa-blue focus:ring-4 focus:ring-randa-blue/10 outline-none transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-zinc-700 mb-2">Email Address</label>
                          <input 
                            required
                            type="email" 
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-randa-blue focus:ring-4 focus:ring-randa-blue/10 outline-none transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-zinc-700 mb-2">Subject</label>
                        <input 
                          required
                          type="text" 
                          value={formData.subject}
                          onChange={e => setFormData({...formData, subject: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-randa-blue focus:ring-4 focus:ring-randa-blue/10 outline-none transition-all"
                          placeholder="Inquiry about Nurse Call Systems"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-zinc-700 mb-2">Message</label>
                        <textarea 
                          required
                          rows={4}
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-randa-blue focus:ring-4 focus:ring-randa-blue/10 outline-none transition-all resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>
                      <button 
                        disabled={loading}
                        className="w-full py-4 bg-randa-blue text-white rounded-2xl font-bold hover:bg-randa-blue/90 transition-all shadow-xl shadow-randa-blue/25 flex items-center justify-center space-x-2 disabled:opacity-50"
                      >
                        {loading ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-zinc-900 mb-4">Message Sent!</h3>
                    <p className="text-zinc-600 max-w-sm mb-8">
                      Thank you for contacting us. Your message has been sent to info@randa.com.tr. 
                      Our team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-randa-blue font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
