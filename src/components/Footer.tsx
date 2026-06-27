import React from 'react';
import { COMPANY_CONTACT } from '../types';
import Logo from './Logo';
import { MapPin, Phone, Mail, Award, ArrowUp, Shield, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-950 text-white border-t border-emerald-900" id="global-application-footer">
      
      {/* Upper footer links and stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="p-2 bg-white rounded-xl inline-self-start self-start">
              <Logo showText={true} size="md" />
            </div>
            <p className="text-emerald-100/70 text-xs sm:text-sm leading-relaxed mt-2 max-w-sm">
              Andhra Pradesh's lead lab certification agency for practical PLC, SCADA, VFD, and HMI hands-on laboratory education courses. Registered ISO 9001:2015 training center.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-emerald-350 font-bold bg-emerald-900/40 p-3 rounded-lg border border-emerald-900 self-start">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ISO 9001:2015 Registered Institution</span>
            </div>
          </div>

          {/* Quick Nav Col (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-5 pb-1 border-b border-emerald-900">
              Quick Portals
            </h4>
            <ul className="space-y-3 text-sm text-emerald-100/80">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-emerald-300 transition duration-150 cursor-pointer text-left">
                  Home Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-emerald-300 transition duration-150 cursor-pointer text-left">
                  About Hitech Automation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('syllabus')} className="hover:text-emerald-300 transition duration-150 cursor-pointer text-left">
                  Our Course Syllabi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-emerald-300 transition duration-150 cursor-pointer text-left">
                  Commercial Panels & Retrofits
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('placements')} className="hover:text-emerald-300 transition duration-150 cursor-pointer text-left">
                  Success Records & Placements
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('more')} className="hover:text-emerald-300 transition duration-150 cursor-pointer text-left">
                  More Resources & Seminars
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-emerald-300 transition duration-150 cursor-pointer text-left">
                  Schedule Custom batches
                </button>
              </li>
            </ul>
          </div>

          {/* Core Contacts Col (5 cols) */}
          <div className="md:col-span-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-5 pb-1 border-b border-emerald-900">
              Find the Laboratory
            </h4>
            
            <ul className="space-y-4 text-xs sm:text-sm text-emerald-100/80">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {COMPANY_CONTACT.address} <br />
                  <span className="text-emerald-350 font-bold text-emerald-400">
                    📍 Landmark: {COMPANY_CONTACT.landmark}
                  </span>
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <Phone className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                <div className="flex gap-3 font-semibold flex-wrap">
                  {COMPANY_CONTACT.phoneNumbers.map((num, idx) => (
                    <a key={idx} href={`tel:${num}`} className="hover:text-emerald-300">
                      {num}
                    </a>
                  ))}
                </div>
              </li>

              <li className="flex gap-3 items-center">
                <Mail className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  {COMPANY_CONTACT.emails.map((email, idx) => (
                    <a key={idx} href={`mailto:${email}`} className="hover:text-emerald-300 truncate">
                      {email}
                    </a>
                  ))}
                </div>
              </li>

              {COMPANY_CONTACT.websites && (
                <li className="flex gap-3 items-center">
                  <Globe className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                  <div className="flex flex-col gap-1">
                    {COMPANY_CONTACT.websites.map((web, idx) => {
                      const targetUrl = web.startsWith('http') ? web : `https://${web}`;
                      return (
                        <a key={idx} href={targetUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 truncate">
                          {web}
                        </a>
                      );
                    })}
                  </div>
                </li>
              )}
            </ul>
          </div>

        </div>
      </div>

      {/* Extreme bottom copyright and quick scroll back */}
      <div className="bg-emerald-950 border-t border-emerald-900/60 text-emerald-2e0/60 py-6 text-xs text-emerald-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} HITECH AUTOMATION. All Rights Reserved. </p>
            <p className="text-[10px] text-emerald-400/40 mt-1">Reconstructed from plcvijayawada.weebly.com. ISO 9001:2015 Registered.</p>
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1 bg-emerald-900 hover:bg-emerald-800 text-emerald-300 px-3.5 py-2 rounded-lg transition border border-emerald-800/80 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Scroll to Top</span>
          </button>
        </div>
      </div>

    </footer>
  );
}
