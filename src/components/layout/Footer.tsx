import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { LOGO_PATH, COMPANY_NAME, CONTACT_INFO, SOCIAL_LINKS } from '../../constants';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  const companyNameParts = COMPANY_NAME.split(' ');
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
                  className="h-10 w-auto brightness-0 invert"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-randa-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {firstName[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-tight text-white uppercase">{firstName}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 -mt-1 font-semibold">{secondName}</span>
                  </div>
                </div>
              )}
            </Link>
            <p className="text-sm leading-relaxed">
              Established in 1998, {COMPANY_NAME} is a leading provider of digital call systems. 
              We specialize in R&D, design, and manufacturing of high-quality solutions under our registered trademark Digimat.
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
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Documents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">References</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Systems</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/category/nurse-call" className="hover:text-white transition-colors">Nurse Call Systems</Link></li>
              <li><Link to="/category/disabled-toilet" className="hover:text-white transition-colors">Disabled Toilet Alarms</Link></li>
              <li><Link to="/category/wireless-paging" className="hover:text-white transition-colors">Wireless Paging</Link></li>
              <li><Link to="/category/queue-systems" className="hover:text-white transition-colors">Queue Management</Link></li>
              <li><Link to="/category/clock-systems" className="hover:text-white transition-colors">Synchronized Clocks</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-randa-blue shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-randa-blue shrink-0" />
                <div className="flex flex-col">
                  <span>{CONTACT_INFO.phone}</span>
                  <span className="text-xs text-zinc-500">Support: {CONTACT_INFO.support}</span>
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
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved. | Digimat Digital Call Systems</p>
        </div>
      </div>
    </footer>
  );
}
