import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X, Phone, Award } from 'lucide-react';
import { COMPANY_CONTACT } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'syllabus', label: 'Training Programmes' },
    { id: 'placements', label: 'Job Alerts' },
    { id: 'more', label: 'More' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-emerald-100 sticky top-0 z-50 shadow-sm" id="main-navigation">
      {/* Top micro-contact bar */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="flex items-center gap-2">
            <Award className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider text-[10px] sm:text-[11px] text-center">ISO 9001:2015 Certified Lab Training Center</span>
          </div>
        </div>
      </div>

      {/* Main header row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('home')} 
              className="focus:outline-none cursor-pointer flex items-center"
              aria-label="Hitech Automation Home"
            >
              <Logo size="md" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 h-full ml-auto">
            {navItems.map((item) => {
               const isActive = item.id === activeTab;
               return (
                 <button
                   key={item.id}
                   onClick={() => handleNavClick(item.id)}
                   className={`px-3 py-2 text-[11px] font-black uppercase tracking-wider transition cursor-pointer self-stretch flex items-center relative ${
                     isActive
                       ? 'text-emerald-700 font-black after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.75 after:bg-emerald-600'
                       : 'text-slate-600 hover:text-emerald-600'
                   }`}
                   id={`nav-tab-${item.id}`}
                 >
                   {item.label}
                 </button>
               );
             })}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none transition"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu panel */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 max-h-screen overflow-y-auto">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition ${
                    isActive
                      ? 'bg-emerald-55 bg-emerald-50 text-emerald-700 font-extrabold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-600'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
