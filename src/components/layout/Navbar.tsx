import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, Globe } from 'lucide-react';
import { CATEGORIES, LOGO_PATH, COMPANY_NAME } from '../../constants';
import { useTranslation } from '../../contexts/LanguageContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);
  const { currentLocale, locales, setLocale, meta, t } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const location = useLocation();

  const translatedCompanyName = t('common.company_name') !== 'common.company_name' ? t('common.company_name') : COMPANY_NAME;
  const companyNameParts = translatedCompanyName.split(' ');
  const firstName = companyNameParts[0];
  const secondName = companyNameParts.slice(1).join(' ');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-randa-blue shadow-lg py-1" : "bg-randa-blue/95 py-1.5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 mr-8">
            {!logoError ? (
              <img 
                src={LOGO_PATH} 
                alt={COMPANY_NAME} 
                className="h-11 w-auto brightness-0 invert object-contain transition-transform hover:scale-105"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-randa-blue font-bold text-lg">
                  {firstName[0]}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white uppercase leading-none">{firstName}</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 font-semibold">{secondName}</span>
                </div>
              </div>
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(cat.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-2 py-2 text-[11px] xl:text-[12px] font-bold tracking-tight text-white/90 hover:text-white flex items-center justify-center transition-all duration-300 leading-[1.2] min-w-[100px] xl:min-w-[120px] group/btn hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
                  <span className="block whitespace-normal max-w-[85px] xl:max-w-[100px] text-center">
                    {t(`navbar.${cat.id}`) !== `navbar.${cat.id}` ? t(`navbar.${cat.id}`) : cat.name}
                  </span>
                  <ChevronDown className="w-3 h-3 ml-1.5 opacity-60 flex-shrink-0 transition-transform group-hover/btn:translate-y-0.5" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === cat.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-0 w-64 bg-white shadow-2xl border border-zinc-100 rounded-2xl overflow-hidden"
                    >
                      <div className="p-2">
                        {cat.subcategories.map((sub) => (
                          <Link
                            key={sub.id}
                            to={`/category/${cat.id}/subcategory/${sub.id}`}
                            className="flex items-start p-3 rounded-xl hover:bg-stone-50 transition-colors group/item"
                          >
                            <sub.icon className="w-5 h-5 text-zinc-400 group-hover/item:text-zinc-900 mr-3 mt-0.5 transition-colors" />
                            <div>
                              <div className="text-sm font-bold text-zinc-900">
                                {t(`subcategories.${sub.id}`) !== `subcategories.${sub.id}` ? t(`subcategories.${sub.id}`) : sub.name}
                              </div>
                              <div className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
                                {t(`subcategories.${sub.id}-desc`) !== `subcategories.${sub.id}-desc` ? t(`subcategories.${sub.id}-desc`) : sub.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* Corporate Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('corporate')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 text-[11px] xl:text-[12px] font-bold tracking-tight text-white/90 hover:text-white flex items-center space-x-1.5 transition-all duration-300 group/btn hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
                <span>{t('navbar.corporate')}</span>
                <ChevronDown className="w-3 h-3 opacity-60 transition-transform group-hover/btn:translate-y-0.5" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'corporate' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-0 w-48 bg-white shadow-2xl border border-zinc-100 rounded-2xl overflow-hidden"
                  >
                    <div className="p-2">
                      <Link to="/about" className="block px-4 py-2.5 text-sm font-semibold text-zinc-600 hover:bg-stone-50 hover:text-zinc-900 rounded-xl transition-colors">{t('navbar.about')}</Link>
                      <Link to="/career" className="block px-4 py-2.5 text-sm font-semibold text-zinc-600 hover:bg-stone-50 hover:text-zinc-900 rounded-xl transition-colors">{t('navbar.career')}</Link>
                      <Link to="/documents" className="block px-4 py-2.5 text-sm font-semibold text-zinc-600 hover:bg-stone-50 hover:text-zinc-900 rounded-xl transition-colors">{t('navbar.documents')}</Link>
                      <Link to="/references" className="block px-4 py-2.5 text-sm font-semibold text-zinc-600 hover:bg-stone-50 hover:text-zinc-900 rounded-xl transition-colors">{t('navbar.references')}</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Switcher */}
            <div 
              className="relative ml-2"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <button className="p-2 text-white/90 hover:text-white flex items-center space-x-1.5 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{meta.short}</span>
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 mt-0 w-40 bg-white shadow-2xl border border-zinc-100 rounded-2xl overflow-hidden"
                  >
                    <div className="p-2">
                      {(Object.entries(locales) as [string, any][]).map(([key, data]) => (
                        <button
                          key={key}
                          onClick={() => setLocale(key)}
                          className={cn(
                            "w-full flex items-center space-x-3 px-3 py-2.5 text-sm rounded-xl transition-colors",
                            currentLocale === key ? "bg-stone-100 text-zinc-900 font-bold" : "text-zinc-600 hover:bg-stone-50"
                          )}
                        >
                          <img src={data.meta.icon} alt={data.meta.title} className="w-5 h-auto rounded-sm shadow-sm" referrerPolicy="no-referrer" />
                          <span>{data.meta.title}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className="ml-4 px-5 py-2.5 bg-white/10 text-white border border-white/20 rounded-full text-[11px] xl:text-[12px] font-bold tracking-tight hover:bg-white/20 transition-all shadow-xl shadow-black/10 flex items-center space-x-2 whitespace-nowrap hover:-translate-y-0.5 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
              <Phone className="w-3.5 h-3.5" />
              <span>{t('navbar.contact')}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-white/80 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-randa-blue border-t border-white/10 overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="py-2">
                  <div className="text-xs font-bold text-white/50 uppercase tracking-widest px-3 mb-1">{t(`navbar.${cat.id}`) !== `navbar.${cat.id}` ? t(`navbar.${cat.id}`) : cat.name}</div>
                  {cat.subcategories.map((sub) => (
                    <Link
                      key={sub.id}
                      to={`/category/${cat.id}/subcategory/${sub.id}`}
                      className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                    >
                      {t(`subcategories.${sub.id}`) !== `subcategories.${sub.id}` ? t(`subcategories.${sub.id}`) : sub.name}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="py-2">
                <div className="text-xs font-bold text-white/50 uppercase tracking-widest px-3 mb-1">{t('navbar.corporate')}</div>
                <Link to="/about" className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">{t('navbar.about')}</Link>
                <Link to="/career" className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">{t('navbar.career')}</Link>
                <Link to="/documents" className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">{t('navbar.documents')}</Link>
                <Link to="/references" className="block px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">{t('navbar.references')}</Link>
              </div>
              <div className="py-2 border-t border-white/10">
                <button 
                  onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 opacity-60" />
                    <span>{t('common.language')}</span>
                  </div>
                  <ChevronDown className={cn("w-4 h-4 transition-transform opacity-60", isMobileLangOpen && "rotate-180")} />
                </button>
                
                <AnimatePresence>
                  {isMobileLangOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white/5 mt-1 rounded-lg"
                    >
                      {(Object.entries(locales) as [string, any][]).map(([key, data]) => (
                        <button
                          key={key}
                          onClick={() => {
                            setLocale(key);
                            setIsMobileLangOpen(false);
                          }}
                          className={cn(
                            "w-full flex items-center space-x-3 px-4 py-3 text-sm transition-colors",
                            currentLocale === key ? "bg-white/20 text-white font-bold" : "text-white/70 hover:bg-white/10 hover:text-white"
                          )}
                        >
                          <img src={data.meta.icon} alt={data.meta.title} className="w-5 h-auto rounded-sm shadow-sm" referrerPolicy="no-referrer" />
                          <span>{data.meta.title}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="pt-4 border-t border-white/10">
                <Link to="/contact" className="block px-3 py-2 text-base font-bold text-white bg-white/10 rounded-lg text-center">{t('navbar.contact')}</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
