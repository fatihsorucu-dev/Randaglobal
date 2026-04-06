import React from 'react';
import { motion } from 'motion/react';
import { History, Target, Eye, Award } from 'lucide-react';
import { COMPANY_NAME } from '../constants';
import { useTranslation } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useTranslation();

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
            {t('about.hero_title_1')} <br />
            <span className="text-randa-blue">{t('about.hero_title_2')}</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.hero_subtitle')}
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
              <span>{t('about.story_badge')}</span>
            </div>
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">{t('about.story_title')}</h2>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              {t('about.story_p1')}
            </p>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              {t('about.story_p2')}
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              {t('about.story_p3')}
            </p>
          </div>
        </div>

        {/* Mission/Vision */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <div className="p-10 rounded-[40px] bg-white border border-zinc-100 shadow-xl shadow-zinc-200/50">
            <div className="w-14 h-14 bg-randa-blue/10 rounded-2xl flex items-center justify-center text-randa-blue mb-8">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">{t('about.mission_title')}</h3>
            <p className="text-zinc-600 leading-relaxed">
              {t('about.mission_desc')}
            </p>
          </div>
          <div className="p-10 rounded-[40px] bg-zinc-900 text-white shadow-xl shadow-zinc-900/20">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-randa-blue mb-8">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('about.vision_title')}</h3>
            <p className="text-zinc-400 leading-relaxed">
              {t('about.vision_desc')}
            </p>
          </div>
          <div className="p-10 rounded-[40px] bg-white border border-zinc-100 shadow-xl shadow-zinc-200/50">
            <div className="w-14 h-14 bg-randa-blue/10 rounded-2xl flex items-center justify-center text-randa-blue mb-8">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">{t('about.values_title')}</h3>
            <p className="text-zinc-600 leading-relaxed">
              {t('about.values_desc')}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
