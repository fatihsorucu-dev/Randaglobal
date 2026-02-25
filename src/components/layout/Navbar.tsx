import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { CATEGORIES, LOGO_PATH, COMPANY_NAME } from '../../constants';
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
  const location = useLocation();

  const companyNameParts = COMPANY_NAME.split(' ');
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
      scrolled ? "bg-randa-blue shadow-lg py-2" : "bg-randa-blue/95 py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {!logoError ? (
              <img 
                src={LOGO_PATH} 
                alt={COMPANY_NAME} 
                className="h-10 w-auto brightness-0 invert"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-randa-blue font-bold text-xl">
                  {firstName[0]}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white uppercase">{firstName}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 -mt-1 font-semibold">{secondName}</span>
                </div>
              </div>
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(cat.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-white hover:text-white/80 flex items-center space-x-1 transition-colors">
                  <span>{cat.name}</span>
                  <ChevronDown className="w-4 h-4 opacity-70" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === cat.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-0 w-64 bg-white shadow-xl border border-zinc-100 rounded-xl overflow-hidden"
                    >
                      <div className="p-2">
                        {cat.subcategories.map((sub) => (
                          <Link
                            key={sub.id}
                            to={`/category/${cat.id}/subcategory/${sub.id}`}
                            className="flex items-start p-3 rounded-lg hover:bg-stone-50 transition-colors group/item"
                          >
                            <sub.icon className="w-5 h-5 text-zinc-400 group-hover/item:text-randa-blue mr-3 mt-0.5" />
                            <div>
                              <div className="text-sm font-semibold text-zinc-900">{sub.name}</div>
                              <div className="text-xs text-zinc-500 line-clamp-1">{sub.description}</div>
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
              <button className="px-4 py-2 text-sm font-medium text-white hover:text-white/80 flex items-center space-x-1 transition-colors">
                <span>Corporate</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'corporate' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-0 w-48 bg-white shadow-xl border border-zinc-100 rounded-xl overflow-hidden"
                  >
                    <div className="p-2">
                      <Link to="/about" className="block px-4 py-2 text-sm text-zinc-600 hover:bg-stone-50 hover:text-randa-blue rounded-lg">About Us</Link>
                      <Link to="/career" className="block px-4 py-2 text-sm text-zinc-600 hover:bg-stone-50 hover:text-randa-blue rounded-lg">Career</Link>
                      <Link to="/documents" className="block px-4 py-2 text-sm text-zinc-600 hover:bg-stone-50 hover:text-randa-blue rounded-lg">Documents</Link>
                      <Link to="/references" className="block px-4 py-2 text-sm text-zinc-600 hover:bg-stone-50 hover:text-randa-blue rounded-lg">References</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className="ml-4 px-5 py-2.5 bg-white text-randa-blue rounded-full text-sm font-bold hover:bg-white/90 transition-all shadow-lg shadow-black/10 flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
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
                  <div className="text-xs font-bold text-white/50 uppercase tracking-widest px-3 mb-1">{cat.name}</div>
                  {cat.subcategories.map((sub) => (
                    <Link
                      key={sub.id}
                      to={`/category/${cat.id}/subcategory/${sub.id}`}
                      className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-lg"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="py-2">
                <div className="text-xs font-bold text-white/50 uppercase tracking-widest px-3 mb-1">Corporate</div>
                <Link to="/about" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-lg">About Us</Link>
                <Link to="/career" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-lg">Career</Link>
                <Link to="/documents" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-lg">Documents</Link>
                <Link to="/references" className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-lg">References</Link>
              </div>
              <div className="pt-4 border-t border-white/10">
                <Link to="/contact" className="block px-3 py-2 text-base font-bold text-white bg-white/10 rounded-lg text-center">Contact Us</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
