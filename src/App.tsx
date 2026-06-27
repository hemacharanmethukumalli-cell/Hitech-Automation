import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SyllabusSection from './components/SyllabusSection';
import ServicesSection from './components/ServicesSection';
import PlacementsSection from './components/PlacementsSection';
import MoreSection from './components/MoreSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_CONTACT } from './types';
import { Sparkles, Phone, Award, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'syllabus' | 'services' | 'internships' | 'course_description' | 'placements' | 'more' | 'contact'>('home');

  // Auto scroll to top on tab transition to avoid jumpy scrolling
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  // Section Selector Renderer with fade animations
  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <HomeSection onNavigate={(tab) => setActiveTab(tab as any)} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <AboutSection />
          </motion.div>
        );
      case 'syllabus':
        return (
          <motion.div
            key="syllabus"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <SyllabusSection />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <ServicesSection />
          </motion.div>
        );
      case 'placements':
        return (
          <motion.div
            key="placements"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <PlacementsSection />
          </motion.div>
        );
      case 'internships':
        return (
          <motion.div
            key="internships"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <MoreSection initialTab="internships" />
          </motion.div>
        );
      case 'course_description':
        return (
          <motion.div
            key="course_description"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <MoreSection initialTab="course_description" />
          </motion.div>
        );
      case 'more':
        return (
          <motion.div
            key="more"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <MoreSection />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <ContactSection />
          </motion.div>
        );
      default:
        return <HomeSection onNavigate={(tab) => setActiveTab(tab as any)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-emerald-600 selection:text-white" id="hitech-automation-app-root">
      
      {/* 1. Global Sticky Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={(tab) => setActiveTab(tab as any)} />

      {/* 2. Floating Quick Contact Action bar */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        <a
          href={`tel:${COMPANY_CONTACT.phoneNumbers[0]}`}
          className="bg-emerald-600 hover:bg-emerald-700 hover:scale-105 text-white p-3 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center group"
          title="Call Admission Desk"
          id="floating-call-btn"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out group-hover:pl-2 font-bold text-sm whitespace-nowrap">
            Call Us Today
          </span>
        </a>
      </div>

      {/* 3. Main Display Area with Page Transition States */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderActiveSection()}
        </AnimatePresence>
      </main>

      {/* 4. Global Footer Section */}
      <Footer onNavigate={(tab) => setActiveTab(tab as any)} />
    </div>
  );
}
