import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { LOGO_PATH, COMPANY_NAME, CONTACT_INFO, SOCIAL_LINKS } from '../../constants';
import { useTranslation } from '../../contexts/LanguageContext';

export default function Footer() {
  const { t } = useTranslation();
  const [logoError, setLogoError] = useState(false);

  const translatedCompanyName = t('common.company_name') !== 'common.company_name' ? t('common.company_name') : COMPANY_NAME;
  const companyNameParts = translatedCompanyName.split(' ');
  const firstName = companyNameParts[0];
  const secondName = companyNameParts.slice(1).join(' ');

  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              {!logoError ? (
                <img 
                  src={LOGO_PATH} 
                  alt={COMPANY_NAME} 
                  className="h-12 w-auto brightness-0 invert"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-randa-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {firstName[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold tracking-tight text-white uppercase leading-none">{firstName}</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">{secondName}</span>
                  </div>
                </div>
              )}
            </Link>
            <p className="text-sm leading-relaxed">
              {t('footer.brand_desc')}
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-randa-blue transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-randa-blue transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-randa-blue transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-randa-blue transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.quick_links')}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('navbar.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('navbar.contact')}</Link></li>
              <li><Link to="/documents" className="hover:text-white transition-colors">{t('navbar.documents')}</Link></li>
              <li><Link to="/references" className="hover:text-white transition-colors">{t('navbar.references')}</Link></li>
              <li><Link to="/career" className="hover:text-white transition-colors">{t('navbar.career')}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.our_systems')}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/category/nurse-call" className="hover:text-white transition-colors">{t('navbar.nurse-call')}</Link></li>
              <li><Link to="/category/disabled-toilet" className="hover:text-white transition-colors">{t('navbar.disabled-toilet')}</Link></li>
              <li><Link to="/category/wireless-paging" className="hover:text-white transition-colors">{t('navbar.wireless-paging')}</Link></li>
              <li><Link to="/category/queue-systems" className="hover:text-white transition-colors">{t('navbar.queue-systems')}</Link></li>
              <li><Link to="/category/clock-systems" className="hover:text-white transition-colors">{t('navbar.clock-systems')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.contact_info')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-randa-blue shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-randa-blue shrink-0" />
                <div className="flex flex-col">
                  <span>{CONTACT_INFO.phone}</span>
                  <span className="text-xs text-zinc-500">{t('contact.support')}: {CONTACT_INFO.support}</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-randa-blue shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. {t('footer.rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
}
