import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../../contexts/LanguageContext';

export default function ContactForm() {
  const { t } = useTranslation();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Failed to send message');
        // You could add an error state here to show to the user
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-zinc-200/50 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Info Side */}
            <div className="bg-zinc-900 p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-bold mb-8">{t('contact.title')}</h2>
              <p className="text-zinc-400 mb-12 leading-relaxed">
                {t('contact.subtitle')}
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-randa-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">{t('contact.call_us')}</div>
                    <div className="text-lg font-semibold">{CONTACT_INFO.phone}</div>
                    <div className="text-xs text-zinc-500 mt-1">{t('contact.support')}: {CONTACT_INFO.support}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-randa-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">{t('contact.email_us')}</div>
                    <div className="text-lg font-semibold">{CONTACT_INFO.email}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-randa-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">{t('contact.visit_us')}</div>
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
                          <label className="block text-sm font-bold text-zinc-700 mb-2">{t('contact.form_name')}</label>
                          <input 
                            required
                            type="text" 
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-randa-blue focus:ring-4 focus:ring-randa-blue/10 outline-none transition-all"
                            placeholder={t('contact.form_name_placeholder')}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-zinc-700 mb-2">{t('contact.form_email')}</label>
                          <input 
                            required
                            type="email" 
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-randa-blue focus:ring-4 focus:ring-randa-blue/10 outline-none transition-all"
                            placeholder={t('contact.form_email_placeholder')}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-zinc-700 mb-2">{t('contact.form_subject')}</label>
                        <input 
                          required
                          type="text" 
                          value={formData.subject}
                          onChange={e => setFormData({...formData, subject: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-randa-blue focus:ring-4 focus:ring-randa-blue/10 outline-none transition-all"
                          placeholder={t('contact.form_subject_placeholder')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-zinc-700 mb-2">{t('contact.form_message')}</label>
                        <textarea 
                          required
                          rows={4}
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-randa-blue focus:ring-4 focus:ring-randa-blue/10 outline-none transition-all resize-none"
                          placeholder={t('contact.form_message_placeholder')}
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
                            <span>{t('contact.form_send')}</span>
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
                    <h3 className="text-3xl font-bold text-zinc-900 mb-4">{t('contact.success_title')}</h3>
                    <p className="text-zinc-600 max-w-sm mb-8">
                      {t('contact.success_desc')}
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-randa-blue font-bold hover:underline"
                    >
                      {t('contact.send_another')}
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
