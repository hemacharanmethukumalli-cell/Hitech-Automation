import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, Award, Users, BookOpen, Clock, Layers, 
  Milestone, ArrowRight, Phone, MessageCircle, Briefcase, 
  Cpu, Monitor, Settings, Sparkles 
} from 'lucide-react';
import { COMPANY_CONTACT } from '../types';

// Import local images so Vite can resolve and bundle them correctly
import heroImage from '../assets/images/plc_lab_hero_1782141888914.jpg';
import vfdImage from '../assets/images/vfd_and_motors_1782141927872.jpg';

// Let's import the actual path strings of generated assets so there's NO dead image in our applet
const IMAGES = {
  hero: heroImage,
  scada: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/services_orig.webp",
  vfd: vfdImage,
  variousIndustries: "https://6923375-279996968100394202.preview.editmysite.com/uploads/6/9/2/3/6923375/various-industries_2.png"
};

interface HomeSectionProps {
  onNavigate: (tab: string) => void;
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  const features = [
    "Individual PLC kit provided to each student (no group crowding)",
    "Hands-on sensor, wire-up and device interface practice",
    "ISO 9001:2015 registration certification provided instantly",
    "Tailored flexible morning to evening batches for college students",
    "Fully operational Variable Frequency Drive (VFD) speed controllers",
    "Supervised by 15+ years experienced industrial project guides"
  ];

  return (
    <div className="bg-[#f8fafc] pb-20 font-sans" id="home-section-container">
      
      {/* 1. Hero Landing Block - Left Content, Right Image */}
      <section className="relative bg-white pt-10 pb-16 border-b border-slate-100" id="hero-block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Area (6 columns) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Main Heading styled exactly as requested */}
                <span className="text-[#0284c7] text-xs font-bold uppercase tracking-widest block mb-2">
                  VIJAYAWADA'S LEADING AUTOMATION HUB
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0a1d37] tracking-tight leading-[1.12] mb-4">
                  Industrial Automation & <br />
                  <span className="text-[#0284c7] relative">
                    Training Experts
                    <span className="absolute left-0 bottom-1 w-20 h-1 bg-[#0284c7]/30 rounded"></span>
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed mb-6 mt-2">
                  Empowering Industries and Engineers Through Automation & Innovation
                </p>



                {/* Core Buttons panel */}
                <div className="flex flex-wrap gap-4 items-center">
                  
                  {/* WhatsApp Now (Vivid green WhatsApp Button) */}
                  <a
                    href={`https://wa.me/${COMPANY_CONTACT.phoneNumbers[0].replace(/[^0-9]/g, '')}?text=Hello%20Hitech%20Automation,%20I%20am%20interested%20in%20PLC%20SCADA%20training`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                    <span>WhatsApp Now</span>
                  </a>

                  {/* Contact Us (Amber/Orange Button) */}
                  <button
                    onClick={() => onNavigate('contact')}
                    className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Contact Us</span>
                  </button>

                </div>
              </motion.div>
            </div>

            {/* Right Big Hardware / Training Banner Image (6 columns) */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-50"
              >
                <img
                  src={IMAGES.hero}
                  alt="PLC, SCADA, HMI, VFD Trainer Board & Team"
                  className="w-full h-auto object-cover rounded-3xl hover:scale-101 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Promo Info Cards Row - Exactly matching reference section below hero */}
      <section className="py-12 bg-[#f8fafc]" id="promo-info-cards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* PLC Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex items-start gap-4 hover:shadow-sm transition">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 shrink-0 flex items-center justify-center text-[#0284c7]">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#0f172a] uppercase tracking-wide">
                  PLC Training
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Practical Siemens / Allen-Bradley PLC training
                </p>
              </div>
            </div>

            {/* SCADA & HMI Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex items-start gap-4 hover:shadow-sm transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 shrink-0 flex items-center justify-center text-emerald-600">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#0f172a] uppercase tracking-wide">
                  SCADA & HMI
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Real-time monitoring and control projects
                </p>
              </div>
            </div>

            {/* Internships & Projects Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex items-start gap-4 hover:shadow-sm transition">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 shrink-0 flex items-center justify-center text-purple-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#0f172a] uppercase tracking-wide">
                  Internships & Projects
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Final year projects and industrial internship support
                </p>
              </div>
            </div>

            {/* Placement Support Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex items-start gap-4 hover:shadow-sm transition">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 shrink-0 flex items-center justify-center text-amber-600">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#0f172a] uppercase tracking-wide">
                  Placement Support
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Job alerts, interview guidance, resume support
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5. Comprehensive Core Services & Industry Alignment */}
      <section className="py-20 bg-white border-y border-slate-100" id="core-services-alignment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0284c7] text-xs font-bold uppercase tracking-widest block mb-2">
              Our Industrial Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
              Comprehensive Automation & Training Ecosystem
            </h2>
            <div className="w-16 h-1 bg-[#0284c7] mx-auto mt-4 rounded"></div>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              We bridge the gap between engineering theory and plant-floor operations by offering world-class integration services, genuine supplies, and career-defining placement programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left/Main Column - Detailed Pillars (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Pillar 1 */}
              <div className="bg-slate-50/60 rounded-2xl p-6 sm:p-8 border border-slate-200/85 shadow-xs hover:shadow-sm transition">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-100/80 text-[#0284c7] flex items-center justify-center shrink-0">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 uppercase tracking-tight">
                      Complete Industrial Automation Solutions
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Robust plant floor and control systems integration</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="mt-1 text-[#0284c7] font-bold text-[10px] shrink-0 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100 font-mono">01</div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">Custom PLC/SCADA Systems</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                        Tailor-made control solutions using PLC, SCADA, HMI, VFD, Servo, and Sensors.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start border-t border-slate-200/50 pt-4">
                    <div className="mt-1 text-[#0284c7] font-bold text-[10px] shrink-0 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100 font-mono">02</div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">Plant Monitoring & Optimization</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                        Real-time monitoring, control, logging & reporting for industrial efficiency.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start border-t border-slate-200/50 pt-4">
                    <div className="mt-1 text-[#0284c7] font-bold text-[10px] shrink-0 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100 font-mono">03</div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">Turnkey Solutions</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                        From concept to commissioning – we handle complete plant automation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-slate-50/60 rounded-2xl p-6 sm:p-8 border border-slate-200/85 shadow-xs hover:shadow-sm transition">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 uppercase tracking-tight">
                      Hands-On Industrial Training with Placement
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Vijayawada's premier career launching pad</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="mt-1 text-emerald-600 font-bold text-[10px] shrink-0 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 font-mono">01</div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">Comprehensive Course Modules</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                        PLC, SCADA, VFD, HMI, Servo Systems with practical exposure.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start border-t border-slate-200/50 pt-4">
                    <div className="mt-1 text-emerald-600 font-bold text-[10px] shrink-0 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 font-mono">02</div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">Real-Time Industry Experience</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                        Gain field-level automation skills used in real-world applications.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start border-t border-slate-200/50 pt-4">
                    <div className="mt-1 text-emerald-600 font-bold text-[10px] shrink-0 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 font-mono">03</div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">100% Placement Support</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                        We provide strong job assistance and career guidance after training.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-slate-50/60 rounded-2xl p-6 sm:p-8 border border-slate-200/85 shadow-xs hover:shadow-sm transition">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 uppercase tracking-tight">
                      SUPPLY, REPAIRS & SERVICES
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Genuine high-end spare parts and technical diagnostics</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="mt-1 text-purple-600 font-bold text-[10px] shrink-0 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-100 font-mono font-bold">01</div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">SUPPLY & REPAIRS</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                        PLCs, VFDs, HMIs, and all types of pneumatic products. We deal with major brands such as SIEMENS, DELTA, MITSUBISHI, KALKI AUTOMATION, FESTO, CAMOZZI, JANATICS, and N M brand motors.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start border-t border-slate-200/50 pt-4">
                    <div className="mt-1 text-purple-600 font-bold text-[10px] shrink-0 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-100 font-mono font-bold">02</div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">AUDITS</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                        Compressor Air Audits to enhance the efficiency. Thermography Audits for Electrical systems to enhance the safety.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Various Industries Image (5 cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-4 shadow-md overflow-hidden">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-100 mb-4">
                  <img
                    src={IMAGES.variousIndustries}
                    alt="Various Industries Served by Hitech Automation"
                    className="w-full h-full object-contain hover:scale-103 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#0f172a] uppercase tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0284c7]"></span>
                    Multi-Industry Applications
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-2">
                    Our customized PLC panel boards, SCADA tracking programs, and training curricula are designed directly around concrete standards used in Cement plants, Power plants, Water treatment, processing systems, and paper manufacturing.
                  </p>
                </div>
              </div>
              
              {/* Extra micro-incentive block */}
              <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6">
                <h4 className="font-bold text-sm text-emerald-900 uppercase tracking-wide mb-1">
                  Ready to Start?
                </h4>
                <p className="text-xs text-emerald-700 leading-relaxed mb-4">
                  Get in touch for custom engineering consultation or to block your individual training hardware slot in our next batch.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-sm transition active:scale-95 cursor-pointer"
                >
                  Get A Quote / Batch Details
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Why Choose Us Ribbon - Exactly matching dark professional ribbon */}
      <section className="bg-[#0b2140] text-white py-10 relative overflow-hidden" id="why-choose-us-ribbon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Header label */}
            <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-slate-700/80 pb-6 lg:pb-0 pr-4" id="why-choose-us-anchor">
              <h2 className="text-2xl font-extrabold tracking-tight uppercase leading-none">
                Why Choose <br />
                <span className="text-sky-400">Us</span>
              </h2>
              <div className="w-8 h-0.75 bg-sky-400 mt-2.5 rounded"></div>
            </div>

            {/* Grid options columns */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              
              {/* Option 1 */}
              <div className="flex gap-3 items-start">
                <Award className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
                    27+ Years Experience
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Trusted in industrial automation training
                  </p>
                </div>
              </div>

              {/* Option 2 */}
              <div className="flex gap-3 items-start">
                <BookOpen className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
                    Practical Training
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Hands-on with real equipment & software
                  </p>
                </div>
              </div>

              {/* Option 3 */}
              <div className="flex gap-3 items-start">
                <Settings className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
                    Industrial Projects
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Work on real-time automation projects
                  </p>
                </div>
              </div>

              {/* Option 4 */}
              <div className="flex gap-3 items-start">
                <Users className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
                    Placement Support
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Dedicated support for placements & careers
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Curriculum features introduction */}
      <section className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0284c7] text-xs font-bold uppercase tracking-widest block mb-2">
            PRACTICAL CURRICULUM EXCELLENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
            HITECH AUTOMATION Laboratory Specialties
          </h2>
          <div className="w-16 h-1 bg-[#0284c7] mx-auto mt-4 rounded"></div>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed">
            Unlike other institutes that teach PLC only on computers, we force you to wire, download, and debug programs on actual physical panels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* List of hardware features */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
              Real Multi-Brand Hardware Configurations
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
              Learn how to configure communications on factory floor standards (OPC, Modbus, Profibus) with individual workstations.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-3.5 items-start bg-white p-4 rounded-xl border border-slate-200/85 hover:border-[#0284c7] transition duration-150 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-xs sm:text-sm leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side visual grids highlighting dynamic hardware segments */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-md aspect-square bg-[#0b2140]/5 border border-slate-200">
                <img
                  src={IMAGES.scada}
                  alt="Industrial SCADA interface mock-ups"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-xs">
                <Layers className="w-8 h-8 text-[#0284c7] mb-2" strokeWidth={1.5} />
                <span className="font-bold text-slate-800 text-xs uppercase tracking-wide">Delta & Schneider</span>
                <span className="text-[10px] text-slate-400 mt-1 uppercase font-bold">HMI Control Layouts</span>
              </div>
            </div>
            
            <div className="space-y-4 pt-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center shadow-xs">
                <Clock className="w-8 h-8 text-[#0284c7] mb-2" strokeWidth={1.5} />
                <span className="font-bold text-slate-800 text-xs uppercase tracking-wide">Flexible Schedules</span>
                <span className="text-[10px] text-slate-400 mt-1 uppercase font-bold">8:00 AM - 8:30 PM Slots</span>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md aspect-square bg-slate-100 border border-slate-200">
                <img
                  src={IMAGES.vfd}
                  alt="Variable frequency motor drive trainer"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Brand Slider for Multi-brand hardwares */}
      <section className="bg-white py-16 mt-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#0284c7] mb-8">
            MULTI-BRAND HARDWARE LEARNING & PROJECTS
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 items-center">
            <div className="p-4 bg-slate-50 rounded-lg text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 hover:border-[#0284c7] transition">
              ⚡ SIEMENS
            </div>
            <div className="p-4 bg-slate-50 rounded-lg text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 hover:border-[#0284c7] transition">
              🛡️ ALLEN BRADLEY
            </div>
            <div className="p-4 bg-slate-50 rounded-lg text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 hover:border-[#0284c7] transition">
              🔺 DELTA
            </div>
            <div className="p-4 bg-slate-50 rounded-lg text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 hover:border-[#0284c7] transition">
              🌌 MITSUBISHI
            </div>
            <div className="p-4 bg-slate-50 rounded-lg text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 hover:border-[#0284c7] transition">
              💠 OMRON
            </div>
            <div className="p-4 bg-slate-50 rounded-lg text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 hover:border-[#0284c7] transition">
              🌿 SCHNEIDER
            </div>
          </div>
          <p className="text-[10px] text-slate-400 mt-6 tracking-wide italic">
            *We provide independent premium core hands-on instruction. OEM brand names belong to respective manufacturers.
          </p>
        </div>
      </section>

      {/* 6. High-end Call to Action Project support block */}
      <section className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b2140] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl" id="cta-enrollment-banner">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 uppercase">
                Final Year Engineering Projects & Internships
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                We specialize in supporting EEE, ECE, EIE & Mechanical students to construct outstanding live laboratory projects. Build real batch-mixing systems, elevator panel simulators, temperature automation loops or solar tracker logics wired physically.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Inquire Project Options &rarr;
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
