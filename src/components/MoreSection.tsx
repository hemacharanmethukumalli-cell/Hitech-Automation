import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_CONTACT } from '../types';
import { 
  FileText, Download, GraduationCap, Award, BookOpen, 
  ExternalLink, ChevronRight, ChevronDown, Phone, MapPin, Mail, Clock, CheckCircle2,
  Layers, Settings, Users, Image as ImageIcon, Sparkles, Building2, Search,
  Video, Play, Globe, Calendar
} from 'lucide-react';
import PlcSimulator from './PlcSimulator';

interface PDFResource {
  title: string;
  url: string;
  description: string;
}

interface TrainingImage {
  url: string;
  college: string;
}

const PLC_PROJECT_IDEAS = [
  "PLC BASED MANLESS RAILWAY GATE CROSSING.",
  "PLC BASED AUTOMATIC CAR PARKING SYSTEM-MULTI LEVEL.",
  "PLC BASED AUTOMATIC FIRE FIGHTING SYSTEM(ENUNCIATOR SYSTEM, WATER SPRINKILING BASED)",
  "PLC BASED AUTOMATIC ALARAM SYSTEMS IN PLANTS( INDICATION, ENUNCIATION,MESSAGE)",
  "PLC BASED AUTOMATIC BOTTLE FILLING APPLICATION ( WATER, CHEMICAL, PAINT, OIL BASED)",
  "PLC BASED AUTOMATIC SECURITY SYSTEM (CAR, HOME, OFFICE, APPARTMENTS BASED)",
  "PLC BASED AUTOMATIC COUNTING SYSTEM(WATER PLANT, BEVARAGE INDUSTRY, PHARMACEUTICAL BASED)",
  "PLC BASED AUTOMATIC CONTROLLING OF PARAMETERS (TEMPERATURE, LEVEL, PRESSUSRE, FLOW, etc.,)",
  "PLC BASED AUTOMATIC WASHING MACHINE CONTROL(MOTOR SPINNING, TIMMING, etc.,)",
  "PLC BASED AUTOMATIC MIXING APPLICATIONS (CHOCOLATE, CHEMICAL INDUSTRIES BASED)",
  "PLC BASED AUTOMATIC DAM SHUTTER OPEN/CLOSE SYSTEM",
  "PLC BASED AUTOMATIC MULTI-MACHINE LUBRICATION SYSTEM",
  "PLC BASED IRRIGATION CONTROLLER IN AGRICULTURE",
  "PLC BASED DOOR OPEN AND CLOSING SYSTEM",
  "PLC BASED BOILER PRESSURE MONITORING AND CONTROLLING SYSTEM",
  "PLC BASED MULTI-CHANNEL TEMPERATURE MONITORING AND CONTROLLING SYSTEM",
  "PLC BASED LEVEL CONTROL SYSTEM",
  "PLC BASED AUTOMATIC DRILLING SET UP",
  "PLC BASED ELEVATOR SYSTEM",
  "PLC BASED AUTOMATIC PACKING MACHINE",
  "PLC Based Industrial Timer Controller",
  "PLC based phase sequence indication and controlling system",
  "PLC Based Automatic Industrial Drainage Timer",
  "PLC Based Industrial Monitoring system",
  "PLC Based Temperature Controller",
  "PLC Based Traffic Density Control Using Sensor",
  "PLC Based Pressure Controller",
  "PLC Based Elevator Controller",
  "PLC Based Automatic Bottle Filling System",
  "PLC based multi-channel fire alarm system",
  "PLC based automatic guided vehicle",
  "PLC Based Automatic Car Washing System",
  "PLC Based Pick And Place Robot",
  "PLC Based D.C Motor Speed Monitoring system",
  "PLC Based Filter Reactor In Sugar Factory",
  "PLC based automatic packing control machine",
  "PLC based multi-channel temperature monitoring and controlling system",
  "PLC based door open and closing system",
  "PLC based four axis welding robot",
  "PLC based traffic density controller using sensor",
  "PLC Based Energy Saving System",
  "PLC based double axis crane",
  "PLC based automatic dam shutter open/close system",
  "PLC based industrial timer controller for multiple machines",
  "PLC Based Automatic Car Parking System",
  "PLC Based Automatic Coffee Vending Machine",
  "PLC Based Online Inspection Machine",
  "Boiler Automation Using PLC",
  "PLC Based Plate Cutting Machine",
  "PLC Based Material Trolley Controller",
  "PLC Based Powder Coating Machine Controller",
  "PLC based industrial or home security system",
  "PLC based A.C motor controlling system",
  "P LC based automatic punching machine",
  "PLC based wireless energy meter",
  "PLC based automatic industrial or school or college time management system",
  "PLC based irrigation controller for garden",
  "PLC based automatic traffic and street light controller",
  "PLC based injection Moulding machine controller",
  "PLC based home appliances controlling system",
  "PLC based automatic Multi-machine Lubrication System",
  "PLC based Finger print based voting machine",
  "PLC based automatic power factor controlling system",
  "PLC Based Automatic Track Guided vehicle (ATGV)",
  "PLC Based Automatic Vehicle Accident information system",
  "PLC Based Moving Message Display",
  "PLC Based Automatic Humidification system",
  "PLC based automatic visitor guided vehicle",
  "PLC based banking system",
  "PLC Based Incubator",
  "PLC Based voice controlled Machines",
  "PLC Based Railway track crack Detecting Vehicle",
  "PLC Based Unaided Guided Vehicle (UGV)",
  "PLC based automatic paint marking machine",
  "PLC Based multiple transformer fault detection and production system",
  "PLC Based Gas leakage detection and auto dialing",
  "PLC Based Railways Accident Avoiding System",
  "PLC Based Intelligent Braking System",
  "PLC Based Automated Guided Vehicle (AGV)",
  "PLC Based Self centering Four-jaw Chuck",
  "PLC Based Automatic Water Level Indicator and Controlling System",
  "PLC Based Digital Fuel Level Indicator Sensor Based Automatic steering control system for Automobile",
  "PLC Based Automatic Electro-Plating Coating System",
  "PLC Based automatic glucose flow rate controller",
  "PLC based mini-computer dictionary",
  "PLC Based mono rail system Coin box based water filling system",
  "PLC based wireless energy transmitter with power cutoff system",
  "PLC Based Fire Fighting AGV",
  "PLC Based Automatic medicine announcement system",
  "PLC Based Power Management System",
  "Automatic Vehicle Over Speed Indication and Controlling System",
  "PLC Based Automatic Traffic and Street Light Controlling System",
  "PLC based talking key pad for blind people",
  "PLC Based Phase sequence indicator and controlling System",
  "PLC Based Two Wheeler Automation with Security System",
  "PLC Based Automatic college bell with announcement System",
  "PLC based digital gear level indicator",
  "PLC Based Sensor Operated Path Finder Vehicle",
  "PLC Based Dam water level Indicator and Controlling System",
  "PLC based boiler pressure monitoring and controlling system"
];

const PROJECT_SLIDES = [
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/2004266_orig.jpg",
    title: "PICK n PLACE INDUSTRIAL ROBOT: LBRCE,EIE branch ,Mylavaram"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/6229836_orig.jpg",
    title: "SOLAR TRACKING SYSTEM: BEC, EEE branch, Bapatla"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/2627412_orig.jpg",
    title: "CONVEYOR BOTTLE SORTING MACHINE: VRSEC, EIE branch, Vijayawada"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/643763_orig.jpg",
    title: "AUTOMATIC ELEVATOR PROTOTYPE: GEC, ECE branch, Gudlavalleru"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/8864925_orig.jpg",
    title: "INDUSTRIAL SCADA CONTROL BOARD: PVPSIT, EIE branch, Vijayawada"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/3368294_orig.jpg",
    title: "SOLAR IRRADIANCE CHARGER SYSTEM: LBRCE, EEE branch, Mylavaram"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/5285955_orig.jpg",
    title: "AUTOMATIC LIQUID MIXING TANK SETUP: GIET, EEE branch, Rajahmundry"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/26309_orig.jpg",
    title: "TRAFFIC CONTROL SYSTEM SIMULATOR: ANU College of Engg, Guntur"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/672199_orig.jpg",
    title: "MULTIPHASE SEQUENCE DETECTOR PANEL: CRR College of Engg, Eluru"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/4691213_orig.jpg",
    title: "PLC FAULT TESTING BENCH WORK: GEC, EEE branch, Gudlavalleru"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/7942880_orig.jpg",
    title: "TEMPERATURE MONITORING MODULE: SVH College, Machilipatnam"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/8412662_orig.jpg",
    title: "AC VFD MOTOR INTERFACE EXPERIMENT: KLU, EEE branch, Vadlamudi"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/3953651_orig.jpg",
    title: "AUTOMATIC MULTI-MACHINE LUBRICATION SYSTEM: VIT, EIE branch"
  },
  {
    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/8094551_orig.jpg",
    title: "BOILER AUTOMATION & CONTROLLING WORKSTATION: BEC, EIE branch"
  }
];

interface MoreSectionProps {
  initialTab?: string;
}

export default function MoreSection({ initialTab }: MoreSectionProps = {}) {
  const [activeTab, setActiveTab] = useState<string>(initialTab || 'course_description');
  const [selectedZoomImage, setSelectedZoomImage] = useState<string | null>(null);
  const [projectSearch, setProjectSearch] = useState<string>('');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isSlidePlaying, setIsSlidePlaying] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Sync state if initialTab changes
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Autoplay handler for the project images slideshow
  React.useEffect(() => {
    if (!isSlidePlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROJECT_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isSlidePlaying]);

  const pdfResources: PDFResource[] = [
    {
      title: "Interview Questions on Allen-Bradley RSLogix 500",
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/interview_questions_on_allen-bradley_rslogix_500.pdf",
      description: "A specialized guide covering core Rockwell Automation RSLogix 500 concepts, PLC architecture, instruction sets, and troubleshooting."
    },
    {
      title: "Important Interview Questions & Answers on S7-1200 & TIA Portal",
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/imortant_interview_questions___answers_on_s7_1200___tia.pdf",
      description: "Critical interview prep for Siemens S7-1200 PLC hardware configurations, TIA portal workspaces, programming blocks, and network configurations."
    },
    {
      title: "Siemens S7-1200 & TIA Portal Technical Questions",
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/s7_1200___tia_questions.pdf",
      description: "In-depth review of memory structures, analog signal handling, PID control loops, and diagnostic parameters in Siemens systems."
    },
    {
      title: "Electrical Basics for Industry",
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/electrical_basics_for_industry.pdf",
      description: "Foundational industrial electrical knowledge essential for automation engineers, covering single/three-phase logic, contactor control circuits, and safety."
    }
  ];

  const trainingImages: TrainingImage[] = [
    {
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/aanm-vvrsr-polytechnic-gudlavalleru_orig.jpg",
      college: "AANM & VVRSR Polytechnic, Gudlavalleru"
    },
    {
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/usha-rama-college-of-engineering-technology_orig.jpg",
      college: "Usha Rama College of Engineering & Technology"
    },
    {
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/akula-sree-ramulu-college-of-engineering_orig.jpg",
      college: "Akula Sree Ramulu College of Engineering"
    },
    {
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/giet-iind-shift-polytechnic-rajahmundry_orig.jpg",
      college: "GIET II-Shift Polytechnic, Rajahmundry"
    },
    {
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/government-polytechnic-for-women-guntur-1_orig.jpg",
      college: "Government Polytechnic for Women, Guntur (Session 1)"
    },
    {
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/government-polytechnic-for-women-guntur-2_orig.jpg",
      college: "Government Polytechnic for Women, Guntur (Session 2)"
    },
    {
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/col-d-s-raju-polytechnic-podur-w-g-dist_orig.jpg",
      college: "Col. D.S. Raju Polytechnic, Podur (W.G. Dist)"
    },
    {
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/sri-varalakshmi-polytechnic-machilipatnam_orig.jpg",
      college: "Sri Varalakshmi Polytechnic, Machilipatnam"
    },
    {
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/smt-b-seetha-polytechnic_orig.jpg",
      college: "Smt. B. Seetha Polytechnic"
    }
  ];

  const mouImages = [
    {
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/1_orig.jpeg",
      title: "MoU Signing Ceremony",
      subtitle: "Formalizing partnership for skill-based laboratory integration & hands-on student workshops."
    },
    {
      url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/2_orig.jpeg",
      title: "Official Collaboration Agreement",
      subtitle: "Joint initiative to develop advanced industrial automation curriculum and state-of-the-art training setups."
    }
  ];

  const MORE_TABS = [
    { id: 'course_description', label: 'COURSE DESCRIPTION' },
    { id: 'plc_simulator', label: '💻 INTERACTIVE PLC SIMULATOR' },
    { id: 'internships', label: 'SUMMER INTERNSHIPS' },
    { id: 'interview', label: 'MOST ASKED INTERVIEW QUESTIONS & ANSWERS' },
    { id: 'workshops', label: 'WORKSHOPS' },
    { id: 'gallery', label: 'PHOTO GALLERY' },
    { id: 'kits', label: 'HITECH PLC TRAINER KITS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'testimonials', label: 'TESTIMONIALS' },
    { id: 'industrial', label: 'INDUSTRIAL TRAINING' },
    { id: 'mou', label: 'MOU WITH ENGINEERING COLLEGES' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'plc_simulator':
        return <PlcSimulator />;
      case 'course_description':
        return (
          <div className="space-y-10 animate-fade-in">
            {/* Header Banner */}
            <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 bg-teal-500/20 text-teal-300 text-[10px] font-bold px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider border border-teal-500/30">
                  <BookOpen className="w-3.5 h-3.5" /> Official Curriculum
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  Course Description & Brochure
                </h3>
                <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed mt-3 max-w-4xl font-medium">
                  Take a deep dive into our job-oriented industrial automation courses. We bridge the gap between academic theory and real-world industrial systems. Access our official, comprehensive training brochure to explore detailed course structures, practical lab experiments, and career guidance modules.
                </p>
              </div>
            </div>

            {/* Premium Download Card */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-150 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-emerald-600 text-white rounded-xl shadow-md shrink-0">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Official Document
                  </span>
                  <h4 className="font-black text-slate-900 text-base sm:text-lg uppercase tracking-tight mt-1.5 leading-tight">
                    HITECH AUTOMATION TRAINING BROCHURE
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 font-medium max-w-xl">
                    Get full details on PLC Programming, SCADA Systems, Variable Frequency Drives (VFDs), Field Instrumentation, Panel Designing, and career-boosting core branch placement improvement modules.
                  </p>
                </div>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                <a
                  href="https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/hitech_automation_training_broucher_new.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-xl shadow-md transition duration-200 cursor-pointer active:scale-98"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download Brochure PDF
                </a>
              </div>
            </div>

            {/* Two-page Preview Layout */}
            <div className="space-y-6">
              <div>
                <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  Brochure Pages Preview
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Click on any page below to expand into full-screen high-resolution view.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Brochure Cover & Key Highlights",
                    subtitle: "Featuring ISO certification credentials, training domains, and core syllabus overviews.",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/o-9fd560cbeab1f6d4-001_4.jpg"
                  },
                  {
                    title: "Detailed Module Description",
                    subtitle: "Complete lists of software platforms, hands-on lab projects, and career development initiatives.",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/o-9fd560cbeab1f6d4-002_3_orig.jpg"
                  }
                ].map((page, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 flex flex-col justify-between hover:shadow-md transition duration-300 group"
                  >
                    <div 
                      className="aspect-[1/1.41] bg-slate-50 rounded-xl overflow-hidden border border-slate-150 mb-4 relative cursor-zoom-in overflow-hidden"
                      onClick={() => setSelectedZoomImage(page.url)}
                    >
                      <img
                        src={page.url}
                        alt={`Hitech Automation Brochure ${page.title}`}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <span className="bg-white/95 text-slate-900 font-extrabold text-[11px] px-3.5 py-2 rounded-xl shadow-md uppercase tracking-wider flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition duration-300">
                          🔍 Click to Enlarge Page
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded uppercase tracking-wider inline-block mb-1">
                        Brochure Page {idx + 1}
                      </span>
                      <h5 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase leading-snug">
                        {page.title}
                      </h5>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 font-medium">
                        {page.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AICRA Partnership Section */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2 text-center sm:text-left">
                  <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider text-amber-700">
                    ⭐ Certified Training Partner
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                    AICRA @ HITECH AUTOMATION
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-600 uppercase tracking-wider">
                    Vijayawada, Andhra Pradesh
                  </p>
                  <p className="text-xs text-slate-500 max-w-2xl leading-relaxed font-medium">
                    HITECH AUTOMATION is proud to be associated with the <span className="font-extrabold text-slate-800">All India Council for Robotics & Automation (AICRA)</span>, facilitating world-class industrial training, advanced robotics orientation, and preparing students for the prestigious <span className="font-extrabold text-slate-800">TechnoXian</span> global championship leagues.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-center gap-2 bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-[200px] w-full">
                  <img
                    src="https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/aicratrainingpartner-logo-2-copy-1_orig.png"
                    alt="AICRA Training Partner"
                    className="w-32 object-contain h-auto cursor-zoom-in"
                    onClick={() => setSelectedZoomImage("https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/aicratrainingpartner-logo-2-copy-1_orig.png")}
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center mt-1">Authorized Hub</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-150">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-xs sm:text-sm uppercase tracking-tight">
                      TechnoXian Official Portal
                    </h5>
                    <p className="text-[11px] text-slate-500 font-semibold font-medium">
                      Explore global robotics championships, certification records, and national tech leagues.
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.technoxian.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-2xs transition active:scale-95 cursor-pointer"
                >
                  Visit TechnoXian <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        );

      case 'internships':
        return (
          <div className="space-y-8">
            {/* Header banner */}
            <div className="border-b border-slate-150 pb-5">
              <span className="text-[10px] font-black text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                💡 Skill Development & Certification
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight mt-2.5 animate-fade-in">
                Summer Internships 2026
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed font-semibold">
                Hitech Automation offers a variety of internship programs for students from NITs, IITs, deemed universities, and autonomous colleges, with durations of <span className="text-sky-700 font-extrabold">60 days / 45 days / 30 days / 15 days</span>.
              </p>
            </div>

            {/* Program Details Card */}
            <div className="bg-sky-50/50 border border-sky-100 p-5 sm:p-6 rounded-2xl space-y-4">
              <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#0284c7]" />
                Job-Oriented Practical Training Internship
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Our programs provide real-time, practical, job-oriented industrial automation training, making students industry-ready through modules such as PLC programming, SCADA, VFD, and Instrumentation. These internships are designed for students from <span className="text-slate-800 font-bold">EEE, EIE, Mechanical, ECE, and Mechatronics</span> branches.
              </p>
            </div>

            {/* Virtual PLC Simulator Practice Area for Interns */}
            <div className="border border-slate-200 bg-white p-5 sm:p-6 rounded-2xl space-y-4 shadow-3xs">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md uppercase tracking-wider w-fit">
                  ⚡ Hands-On Lab Preview
                </span>
                <h4 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight mt-2.5">
                  Try Our Virtual PLC Lab Simulator
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">
                  At Hitech Automation, our interns get extensive individual practice on physical PLC trainer kits. Try this virtual ladder logic simulation preview to experience how a real-time electrical control circuit behaves:
                </p>
              </div>
              <PlcSimulator />
            </div>

            {/* Associated Prestigious Colleges */}
            <div className="space-y-3.5">
              <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-600" />
                Students from Several Prestigious Institutions Successfully Completed Training:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "V R Siddhartha Engineering College, Vijayawada, SAHE",
                  "Dhanekula Institute of Engineering & Technology, Vijayawada",
                  "NIT, Jamshedpur",
                  "NIT, Mizoram",
                  "IIT, Kharagpur",
                  "Sathyabama University, Chennai",
                  "Lovely Professional University, Punjab",
                  "K L University",
                  "LBRCE, Mylavaram",
                  "Vishnu College of Engineering",
                  "Bapatla College of Engineering",
                  "RVR & JC College of Engineering",
                  "Sasi Institute of Engineering",
                  "Amruta Sai Institute of Engineering & Technology",
                  "AITEM Engineering college, Tekkali, Srikakulam",
                  "ADIKAVI NANNAYA UNIVERSITY, Rajamahendravaram",
                  "Anil Neerukonda Institute of Tech & Sciences"
                ].map((col, idx) => (
                  <span 
                    key={idx}
                    className="text-[10px] sm:text-xs font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs hover:border-sky-300 hover:text-[#0284c7] transition duration-150"
                  >
                    🏫 {col}
                  </span>
                ))}
              </div>
            </div>

            {/* PDF Certification Downloads */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-4">
              <div className="flex flex-col">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-rose-500" />
                  Official Internship Approvals & Internship Letters (PDF)
                </h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">
                  Download official academic authorization documents issued to our interns
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Shri Vishnu Eng. College for Women, Bhimavaram - Internship Letter",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/shri_vishnu_engineering_college_for_women___bhimavaram.pdf",
                    desc: "Official academic letter highlighting successful completion of hands-on EEE automation internship."
                  },
                  {
                    title: "LBRCE, Mylavaram - EEE Internship Approvals List",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/lbrc_eee_internship2011.pdf",
                    desc: "University record for electrical engineering student batches assigned for specialized center-based lab training."
                  }
                ].map((pdf, i) => (
                  <div key={i} className="bg-white p-4 border border-slate-200 rounded-xl shadow-2xs flex flex-col justify-between">
                    <div>
                      <h5 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-tight leading-snug">
                        {pdf.title}
                      </h5>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        {pdf.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                      <a
                        href={pdf.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 bg-rose-50 hover:bg-rose-100 text-rose-700 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg transition border border-rose-100 shadow-2xs"
                      >
                        <Download className="w-3 h-3" />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summer Internships 2026 Poster Gallery */}
            <div className="space-y-4 pt-4 border-t border-slate-150">
              <div className="flex flex-col">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#0284c7]" />
                  Summer Internships 2026 Announcements (Click to Zoom)
                </h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">
                  Program details and curriculum modules for 2026 academic batches
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/60-days-summer-internship.png?1776495091",
                    caption: "60 Days / 45 Days Industrial Internship Plan"
                  },
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/latest.png?1776495260",
                    caption: "Latest Practical Lab Syllabus & Registration Schedule"
                  }
                ].map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedZoomImage(img.url)}
                    className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden cursor-zoom-in shadow-2xs hover:shadow-md hover:border-slate-300 transition duration-300"
                  >
                    <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center p-2">
                      <img
                        src={img.url}
                        alt="Summer Internship 2026 Hitech Automation"
                        className="max-w-full max-h-full object-contain group-hover:scale-104 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2.5 bg-white border-t border-slate-100 text-center">
                      <p className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wider">
                        {img.caption}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                      <span className="text-white text-[10px] font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-xs">
                        Zoom View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summer Internships 2025 Gallery */}
            <div className="space-y-4 pt-4 border-t border-slate-150">
              <div className="flex flex-col">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#0284c7]" />
                  Summer Internships 2025 Highlights (Click to Zoom)
                </h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">
                  Selected candidates and university batches from summer 2025
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/screenshot-2025-08-31-134346_orig.png",
                  "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/screenshot-2025-08-31-134950_orig.png",
                  "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/screenshot-2025-08-31-135032_orig.png",
                  "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/screenshot-2025-08-31-135118_orig.png"
                ].map((url, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedZoomImage(url)}
                    className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden cursor-zoom-in shadow-2xs hover:shadow-md hover:border-slate-300 transition duration-300"
                  >
                    <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center p-1">
                      <img
                        src={url}
                        alt={`Summer Internship 2025 Batch ${index + 1}`}
                        className="max-w-full max-h-full object-contain group-hover:scale-104 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                      <span className="text-white text-[9px] font-black uppercase tracking-wider bg-white/25 px-2.5 py-1 rounded-full backdrop-blur-xs">
                        Zoom View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* College-specific Internship Batches 2024 */}
            <div className="space-y-5 pt-4 border-t border-slate-150">
              <div className="flex flex-col">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600" />
                  College Internship Batches & Core Group Training Achievements
                </h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">
                  Detailed student lists and certifications from specialized engineering batches
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Dhanekula */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden p-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[9px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">
                      Dhanekula EEE Branch
                    </span>
                    <h5 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase leading-snug">
                      Dhanekula Institute of Engineering & Technology
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/screenshot-2024-08-26-111011_orig.png",
                        "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/screenshot-2024-08-26-111206_orig.png"
                      ].map((url, i) => (
                        <div
                          key={i}
                          onClick={() => setSelectedZoomImage(url)}
                          className="aspect-[4/3] bg-slate-50 border border-slate-100 rounded-lg overflow-hidden cursor-zoom-in relative group"
                        >
                          <img src={url} alt="Dhanekula batch" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                            <span className="text-white text-[8px] font-black uppercase">Zoom</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* VRSEC */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden p-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[9px] font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-wider">
                      VR Siddhartha EEE
                    </span>
                    <h5 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase leading-snug">
                      V R Siddhartha Engineering College
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/vr-1.jpg?1724653127",
                        "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/vr2_orig.jpg"
                      ].map((url, i) => (
                        <div
                          key={i}
                          onClick={() => setSelectedZoomImage(url)}
                          className="aspect-[4/3] bg-slate-50 border border-slate-100 rounded-lg overflow-hidden cursor-zoom-in relative group"
                        >
                          <img src={url} alt="VRSEC batch" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                            <span className="text-white text-[8px] font-black uppercase">Zoom</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AITEM */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden p-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[9px] font-black text-rose-700 bg-rose-50 px-2 py-0.5 rounded uppercase tracking-wider">
                      AITAM ECE Branch
                    </span>
                    <h5 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase leading-snug">
                      AITAM Engineering College, Tekkali
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/aitam-internship-1_orig.jpeg",
                        "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/y-raghu-sai-2024-internship-1_orig.jpg"
                      ].map((url, i) => (
                        <div
                          key={i}
                          onClick={() => setSelectedZoomImage(url)}
                          className="aspect-[4/3] bg-slate-50 border border-slate-100 rounded-lg overflow-hidden cursor-zoom-in relative group"
                        >
                          <img src={url} alt="AITAM batch" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                            <span className="text-white text-[8px] font-black uppercase">Zoom</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summer Internships 2023 Gallery */}
            <div className="space-y-6 pt-4 border-t border-slate-150">
              <div className="flex flex-col">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-amber-500" />
                  Summer Internships 2023 Retrospective Gallery (Click to Zoom)
                </h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">
                  Archive of prestigious campus batches and reviews from 2023
                </p>
              </div>

              {/* Grid of college-wise photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  {
                    title: "Bapatla Eng. College, EIE",
                    images: [
                      "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/bapatla-eie-internship-2023-1.jpg?1698244121",
                      "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/bapatla-eie-internship-2023-2.jpg?1698244203"
                    ]
                  },
                  {
                    title: "Sasi Institute of Tech & Eng., EEE",
                    images: [
                      "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/sasi-internship-2.jpeg?1698245725",
                      "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/editor/sasi-internship-1.jpeg?1698245679"
                    ]
                  },
                  {
                    title: "Anil Neerukonda Inst. (ANITS), ECE",
                    images: [
                      "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/1.png?1698248025",
                      "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/3.png?1698248094"
                    ]
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl p-3 space-y-2.5">
                    <h5 className="font-extrabold text-[11px] uppercase tracking-wider text-[#0284c7] border-b border-slate-100 pb-1">
                      {item.title}
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {item.images.map((url, i) => (
                        <div
                          key={i}
                          onClick={() => setSelectedZoomImage(url)}
                          className="aspect-[4/3] bg-slate-50 border border-slate-150 rounded-lg overflow-hidden cursor-zoom-in relative group"
                        >
                          <img src={url} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                            <span className="text-white text-[8px] font-black uppercase">Zoom</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Multi-college mixed achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
                {[
                  {
                    title: "Amruta Sai Mech",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/amrutsai-internship-1_orig.jpeg",
                    branch: "Mechanical Branch 2023"
                  },
                  {
                    title: "LPU Punjab EEE",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/lpu-pavan.jpeg?1698248930",
                    branch: "EEE Branch 2023"
                  },
                  {
                    title: "RVR&JC College EEE",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/editor/rvrjc-list.png?1698300653",
                    branch: "EEE Candidates List"
                  },
                  {
                    title: "VRSEC EEE 2023",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/vr-2023_orig.png",
                    branch: "EEE Candidate Register"
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedZoomImage(item.url)}
                    className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden cursor-zoom-in shadow-3xs hover:shadow-xs transition duration-200"
                  >
                    <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center p-1 border-b border-slate-100">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="max-w-full max-h-full object-cover rounded group-hover:scale-104 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2 bg-white text-center">
                      <p className="text-[9px] font-black text-slate-800 uppercase tracking-tight">
                        {item.title}
                      </p>
                      <p className="text-[8px] text-slate-400 font-extrabold uppercase mt-0.5">
                        {item.branch}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                      <span className="text-white text-[8px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-xs">
                        Zoom View
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional VR Siddhartha EIE candidate files */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  {
                    title: "VR EIE Register 1",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/vr-eie-1_orig.png"
                  },
                  {
                    title: "VR EIE Register 2",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/vr-eie-2_orig.png"
                  },
                  {
                    title: "VR EIE Register 3",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/vr-eie-3_orig.png"
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedZoomImage(item.url)}
                    className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden cursor-zoom-in shadow-3xs hover:shadow-xs transition duration-200"
                  >
                    <div className="aspect-[16/10] bg-slate-50 relative overflow-hidden flex items-center justify-center p-1 border-b border-slate-100">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain rounded group-hover:scale-102 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2 bg-white text-center">
                      <p className="text-[9px] font-black text-slate-800 uppercase tracking-tight">
                        {item.title}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                      <span className="text-white text-[8px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-xs">
                        Zoom View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Feedback Spotlights */}
            <div className="space-y-4 pt-4 border-t border-slate-150">
              <div className="flex flex-col">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#0284c7]" />
                  Student Experiences and Training Feedbacks
                </h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">
                  Real feedbacks and verification letters from previous automation interns
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    name: "Praveen Kumar",
                    college: "NIT Jamshedpur",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/editor/injam-praveen-kumar.jpg?1532828525",
                    text: "Industrial training program certificate and success record at Hitech."
                  },
                  {
                    name: "Palani Samuel Manoj",
                    college: "LPU, Punjab",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/editor/samuel-manoj.jpg?1532828511",
                    text: "Hands-on experience and training completion details."
                  },
                  {
                    name: "Hari",
                    college: "LBRCE Graduate",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/editor/hari-feedback.jpg?1588163065",
                    text: "Genuine written feedback confirming the extreme practical focus on real S7-1200 hardware rigs."
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col justify-between shadow-3xs"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div 
                          onClick={() => setSelectedZoomImage(item.url)}
                          className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 cursor-zoom-in bg-slate-50 shrink-0 relative group"
                        >
                          <img src={item.url} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <h5 className="font-extrabold text-xs uppercase text-slate-900">{item.name}</h5>
                          <span className="text-[9px] text-[#0284c7] font-black uppercase tracking-wider">{item.college}</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                        {item.text}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex justify-end">
                      <button
                        onClick={() => setSelectedZoomImage(item.url)}
                        className="text-[10px] text-[#0284c7] hover:text-sky-850 font-black uppercase tracking-wider flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>View Certificate</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'interview':
        return (
          <div className="space-y-6">
            <div className="border-b border-slate-150 pb-4">
              <h3 className="text-xl font-extrabold text-slate-900 uppercase">
                Most Asked Interview Questions & Answers
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Download PDF material specifically curated by industrial experts to clear technical interviews with ease.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pdfResources.map((res, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-300 transition duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="p-2.5 bg-red-50 text-red-600 rounded-lg shrink-0 mt-0.5">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-red-600 bg-red-50 px-2 py-0.5 rounded uppercase tracking-wider">
                          PDF Guide
                        </span>
                        <h4 className="font-extrabold text-slate-800 text-sm uppercase mt-1.5 leading-snug">
                          {res.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pl-12">
                      {res.description}
                    </p>
                  </div>
                  
                  <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end pl-12">
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-sky-50 hover:bg-sky-100 text-[#0284c7] font-extrabold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-lg transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'workshops':
        return (
          <div className="space-y-10">
            {/* Main Header Card */}
            <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider border border-emerald-500/30">
                  <GraduationCap className="w-3.5 h-3.5" /> Academic Outreach
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  Workshops & Seminars
                </h3>
                <p className="text-sm text-emerald-100/90 leading-relaxed mt-3 max-w-3xl font-medium">
                  To create awareness on industrial automation, <span className="text-emerald-300 font-bold">HITECH AUTOMATION</span> conducts 2- to 6-day workshops for 3rd- and 4th-year engineering students of <span className="text-white font-bold">ECE, EEE, EIE, Mechatronics</span>, as well as non-teaching staff. So far, nearly <span className="text-emerald-300 font-black underline decoration-emerald-400">3,000 participants</span> have attended our various technical programs.
                </p>
              </div>
            </div>

            {/* Event 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md mb-2 uppercase tracking-wider">
                    <Calendar className="w-3 h-3" /> July 29, 2025
                  </div>
                  <h4 className="font-black text-slate-900 text-base sm:text-lg uppercase tracking-tight leading-snug">
                    Workshop on SIEMENS PLC Programming and Applications
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5 font-semibold">
                    <span>Presented by:</span>
                    <span className="text-emerald-700 font-extrabold">J.Rajaram</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-700">M/s Hitech Automation, Vijayawada</span>
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl shrink-0 text-left md:text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Venue / Host Department</p>
                  <p className="text-xs font-black text-slate-800 mt-1 uppercase max-w-[280px]">
                    Velagapudi Ramakrishna Siddhartha Engineering College
                  </p>
                  <p className="text-[10px] font-bold text-emerald-600 mt-0.5">EIE Department</p>
                </div>
              </div>

              {/* Images Grid Event 1 */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Event Photo Gallery (Click to enlarge)</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/whatsapp-image-2025-07-29-at-18-49-53_orig.jpeg",
                    "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/whatsapp-image-2025-07-29-at-18-49-53-1_orig.jpeg",
                    "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/whatsapp-image-2025-07-29-at-18-49-58-1_orig.jpeg",
                    "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/whatsapp-image-2025-07-29-at-18-49-59-1_orig.jpeg"
                  ].map((url, idx) => (
                    <div 
                      key={idx}
                      className="group relative aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-300 cursor-zoom-in"
                      onClick={() => setSelectedZoomImage(url)}
                    >
                      <img
                        src={url}
                        alt={`Siemens PLC Workshop VRSEC July 2025 - Image ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-104 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <span className="bg-white/90 text-slate-900 font-extrabold text-[10px] px-2.5 py-1.5 rounded-lg shadow-sm uppercase tracking-wider flex items-center gap-1 scale-95 group-hover:scale-100 transition duration-300">
                          Enlarge
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-md mb-2 uppercase tracking-wider">
                    <Calendar className="w-3 h-3" /> January 8 & 9, 2025
                  </div>
                  <h4 className="font-black text-slate-900 text-base sm:text-lg uppercase tracking-tight leading-snug">
                    Two Days Workshop on PLC Programming and Applications
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5 font-semibold">
                    <span>Presented by:</span>
                    <span className="text-emerald-700 font-extrabold">J.Rajaram</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-700">M/s Hitech Automation, Vijayawada</span>
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl shrink-0 text-left md:text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Venue / Host Department</p>
                  <p className="text-xs font-black text-slate-800 mt-1 uppercase max-w-[280px]">
                    Velagapudi Ramakrishna Siddhartha Engineering College
                  </p>
                  <p className="text-[10px] font-bold text-emerald-600 mt-0.5">EEE Department</p>
                </div>
              </div>

              {/* Images Grid Event 2 */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Event Photo Gallery (Click to enlarge)</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {[
                    "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/whatsapp-image-2025-01-10-at-23-26-40-2_orig.jpeg",
                    "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/screenshot-2025-03-01-120233_orig.png",
                    "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/whatsapp-image-2025-01-10-at-23-23-08_orig.jpeg",
                    "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/whatsapp-image-2025-01-12-at-07-59-00-1_orig.jpeg",
                    "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/whatsapp-image-2025-01-12-at-07-59-07_orig.jpeg"
                  ].map((url, idx) => (
                    <div 
                      key={idx}
                      className="group relative aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-300 cursor-zoom-in"
                      onClick={() => setSelectedZoomImage(url)}
                    >
                      <img
                        src={url}
                        alt={`PLC Workshop VRSEC January 2025 - Image ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-104 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <span className="bg-white/90 text-slate-900 font-extrabold text-[10px] px-2 py-1 rounded shadow-sm uppercase tracking-wider scale-95 group-hover:scale-100 transition duration-300">
                          Zoom
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Workshops */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div>
                <h4 className="font-black text-slate-900 text-base uppercase tracking-tight">
                  Additional Workshop Moments & Certifications
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Snapshots of other premium hands-on lab workshops, student batches, and certification events conducted across diverse departments.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/5360494_1_orig.jpg",
                  "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/5415521_1_orig.jpg",
                  "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/6125828_1_orig.jpg",
                  "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/6548584_1_orig.jpg",
                  "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/4926235_1_orig.jpg",
                  "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/7161112_1_orig.jpg",
                  "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/3218057_1_orig.jpg",
                  "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/6556241_1_orig.jpg"
                ].map((url, idx) => (
                  <div 
                    key={idx}
                    className="group relative aspect-square sm:aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-300 cursor-zoom-in"
                    onClick={() => setSelectedZoomImage(url)}
                  >
                    <img
                      src={url}
                      alt={`Hitech Automation Additional Workshop Image ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-104 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <span className="bg-white/90 text-slate-900 font-bold text-[10px] px-2 py-1 rounded shadow-xs uppercase">
                        View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-6">
            <div className="border-b border-slate-150 pb-4">
              <h3 className="text-xl font-extrabold text-slate-900 uppercase">
                Hitech Photo Gallery
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                A visual journey through our training classes, interactive seminars, and proud students executing live hardware projects. Click to enlarge.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...trainingImages, ...mouImages].map((img, i) => (
                <div 
                  key={i}
                  className="group relative aspect-square bg-slate-100 rounded-xl overflow-hidden border border-slate-200 cursor-zoom-in shadow-xs hover:shadow-md transition duration-350"
                  onClick={() => setSelectedZoomImage(img.url)}
                >
                  <img
                    src={img.url}
                    alt="Gallery item"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                    <span className="text-white text-[10px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-xs">
                      Enlarge View
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'kits':
        return (
          <div className="space-y-8">
            <div className="border-b border-slate-150 pb-5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                Industrial Automation / PLC Lab Equipments
              </h3>
              <p className="text-xs sm:text-sm text-sky-700 font-extrabold uppercase mt-1.5 tracking-wider">
                for EEE, EIE, AEIE, MECHANICAL & MECHATRONICS ENGINEERING
              </p>
            </div>

            {/* Quick action links (Brochure and Info website) */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/plc_trainer_kits___application_modules_broucher.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition shadow-xs border border-red-100"
              >
                <FileText className="w-4 h-4 text-red-600" />
                <span>Download Trainer Kits Brochure (PDF)</span>
              </a>
            </div>

            {/* Hardware specifications list */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs">
              <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
                <Settings className="w-4 h-4 text-[#0284c7]" />
                Technical Specifications & Features
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-xs sm:text-sm text-slate-700">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Digital Inputs</span>
                  <p className="font-bold text-slate-800 leading-relaxed">
                    Each PLC Having 8 Nos. digital inputs with 6 toggle switches & 2 Pushbutton switches with 4mm shrouded connectors for convenience to make the external connections.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Digital Outputs</span>
                  <p className="font-bold text-slate-800 leading-relaxed">
                    Each PLC Having 4 Nos. digital outputs with LED Lamp Indicator with 4mm shrouded connector for convenient to make the external connections.
                  </p>
                </div>

                <div className="space-y-1 md:col-span-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Programming & Communications</span>
                  <p className="font-semibold text-slate-700 leading-relaxed">
                    Supports high-speed program upload/download through integrated USB and Ethernet ports.
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Cabinet & Architecture</span>
                  <p className="font-semibold text-slate-700">
                    340 x 380mm custom printed high-grade Aluminum front panel housed in a rugged industrial metal cabinet.
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Power Supply Unit</span>
                  <p className="font-semibold text-slate-700">
                    Built-in regulated industrial SMPS: Input - 230V AC, Output - 24V DC.
                  </p>
                </div>

                <div className="space-y-1 md:col-span-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Software & Documentation</span>
                  <p className="font-semibold text-slate-700">
                    Provided along with licensed configuration softwares, detailed manuals, and ready-to-run sample programs.
                  </p>
                </div>

                <div className="space-y-1 md:col-span-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Application Modules</span>
                  <p className="font-semibold text-slate-700">
                    Supports both static application mimicking boards and dynamic physical automation modules.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Gallery of the actual hardware kits */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-emerald-600" />
                Actual PLC Lab Equipment & Trainer Kit Models (Click to Zoom)
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/2_orig.jpg", name: "High-Fidelity PLC Trainer Cabinet" },
                  { url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/4.jpg", name: "Pneumatic & Sorting Demonstration" },
                  { url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/5.jpg", name: "Dual Water-Level Loop Station" },
                  { url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/6.jpg", name: "Automatic Elevator Control Block" },
                  { url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/8.jpg", name: "Integrated VFD & HMI Panel Board" },
                  { url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/dsc-1325-copy.jpg", name: "Precision Industrial Sensors Desk" },
                  { url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/dsc-1333-copy.jpg", name: "Compact Desktop PLC Micro Unit" }
                ].map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedZoomImage(img.url)}
                    className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden cursor-zoom-in shadow-xs hover:shadow-md hover:border-slate-300 transition duration-300"
                  >
                    <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center p-2">
                      <img
                        src={img.url}
                        alt={img.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-104 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2.5 bg-white border-t border-slate-100">
                      <p className="text-[10px] font-black text-slate-800 uppercase tracking-tight truncate">
                        {img.name}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                      <span className="text-white text-[9px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-xs">
                        Enlarge View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'projects':
        const filteredProjects = PLC_PROJECT_IDEAS.filter(idea => 
          idea.toLowerCase().includes(projectSearch.toLowerCase())
        );

        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="border-b border-slate-150 pb-5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                Projects Assistance for Engineering students
              </h3>
              <p className="text-xs sm:text-sm text-sky-700 font-extrabold uppercase mt-1.5 tracking-wider">
                Hands-on practical training and project execution platform
              </p>
            </div>

            {/* Goal and Core Philosophy */}
            <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-6 shadow-xs">
              <h4 className="font-extrabold text-xs text-[#0284c7] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Our Objective & Mission
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                Goal of Hitech Automation is to provide a platform to all engineering students of electrical, electronics, instrumentation and mechanical branches which focuses on the hands-on-team-based practical training allowing and making students capable of transforming their ideas and imaginations into a product that can prove beneficial to the society and to involve the students at a much more initiate level than the typical lecture.
              </p>
            </div>

            {/* Associated Universities & Colleges List */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                <Building2 className="w-4 h-4 text-[#0284c7]" />
                Major Institutions Assisted & Associated
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Gudlavalleru Engineering College (gudlavalleru)",
                  "Loyala college of Engineering (vijayawada)",
                  "V R Siddhartha Engineering college, Vijayawada",
                  "Lakireddy bali reddy College of engineering, Mylavaram",
                  "Bapatla Engineering college,Bapatla",
                  "K L University, Vadlamudi",
                  "Tirumala Engineering College, Narasaraopet",
                  "Nagarjuna University college of Engineering, Guntur",
                  "SIR C R Reddy College of Engineering (eluru)",
                  "PVP Siddhartha Institute of technology, Vijayawada",
                  "SVH College of Engineering, machilipatnam",
                  "and many more Engineering Colleges..."
                ].map((college, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-3 bg-slate-50 border border-slate-200/60 rounded-xl"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-750 tracking-tight leading-tight uppercase">
                      {college}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Project Demonstration Slideshow */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex flex-col gap-1">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-emerald-600" />
                  Live Student Project Exhibition & Lab Demonstration (Click to Zoom)
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">
                  Interactive real-world prototype exhibition setup with autoplay controls
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* Main Slide Viewer */}
                <div className="md:col-span-9 relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden aspect-[16/10] flex flex-col justify-between group shadow-sm">
                  {/* Top Bar Overlay */}
                  <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
                    {/* Play/Pause Button */}
                    <button
                      onClick={() => setIsSlidePlaying(!isSlidePlaying)}
                      className="pointer-events-auto bg-slate-950/85 backdrop-blur-xs border border-slate-700/60 hover:bg-slate-900 text-[10px] sm:text-xs font-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md uppercase tracking-wider transition duration-200"
                    >
                      {isSlidePlaying ? (
                        <>
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                          Pause ⏸
                        </>
                      ) : (
                        <>
                          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                          Play ▶
                        </>
                      )}
                    </button>

                    {/* Navigation Arrows */}
                    <div className="pointer-events-auto flex items-center gap-1 bg-slate-950/85 backdrop-blur-xs border border-slate-700/60 p-0.5 rounded-lg shadow-md">
                      <button
                        onClick={() => {
                          setIsSlidePlaying(false);
                          setCurrentSlide((prev) => (prev - 1 + PROJECT_SLIDES.length) % PROJECT_SLIDES.length);
                        }}
                        className="p-1 sm:p-1.5 text-white hover:bg-slate-800 rounded-md transition"
                        title="Previous Slide"
                      >
                        <span className="text-xs font-black">◀</span>
                      </button>
                      <span className="text-[10px] sm:text-xs text-slate-400 font-bold px-1 select-none">
                        {currentSlide + 1} / {PROJECT_SLIDES.length}
                      </span>
                      <button
                        onClick={() => {
                          setIsSlidePlaying(false);
                          setCurrentSlide((prev) => (prev + 1) % PROJECT_SLIDES.length);
                        }}
                        className="p-1 sm:p-1.5 text-white hover:bg-slate-800 rounded-md transition"
                        title="Next Slide"
                      >
                        <span className="text-xs font-black">▶</span>
                      </button>
                    </div>
                  </div>

                  {/* Main Display Image */}
                  <div 
                    className="w-full h-full flex items-center justify-center bg-slate-900 p-6 cursor-zoom-in relative"
                    onClick={() => setSelectedZoomImage(PROJECT_SLIDES[currentSlide].url)}
                  >
                    <img
                      src={PROJECT_SLIDES[currentSlide].url}
                      alt={PROJECT_SLIDES[currentSlide].title}
                      className="max-w-full max-h-[85%] object-contain select-none transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Bottom Caption Banner */}
                  <div className="absolute bottom-0 inset-x-0 bg-slate-950/95 border-t border-slate-800/60 px-4 py-3 sm:py-4 flex items-center justify-between gap-4">
                    <p className="text-[10px] sm:text-xs md:text-sm font-extrabold text-white uppercase tracking-wide leading-relaxed">
                      {PROJECT_SLIDES[currentSlide].title}
                    </p>
                    <button 
                      onClick={() => setSelectedZoomImage(PROJECT_SLIDES[currentSlide].url)}
                      className="shrink-0 text-[9px] sm:text-[10px] font-black text-[#0284c7] uppercase tracking-wider bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-md hover:bg-sky-500/20 transition"
                    >
                      Zoom View
                    </button>
                  </div>
                </div>

                {/* Thumbnails Sidebar */}
                <div className="md:col-span-3 flex flex-col gap-2">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider pb-1 block border-b border-slate-100">
                    Project Gallery ({PROJECT_SLIDES.length})
                  </span>
                  
                  <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-2 gap-1.5 max-h-[220px] md:max-h-[380px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
                    {PROJECT_SLIDES.map((slide, idx) => {
                      const isActive = idx === currentSlide;
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setCurrentSlide(idx);
                            setIsSlidePlaying(false);
                          }}
                          className={`group aspect-square relative rounded-lg overflow-hidden bg-slate-100 border-2 transition duration-200 ${
                            isActive 
                              ? 'border-[#0284c7] ring-2 ring-sky-100' 
                              : 'border-slate-200 hover:border-slate-350'
                          }`}
                          title={slide.title}
                        >
                          <img
                            src={slide.url}
                            alt={slide.title}
                            className={`w-full h-full object-cover transition duration-300 ${
                              isActive ? 'scale-105 opacity-100' : 'opacity-80 group-hover:opacity-100 group-hover:scale-105'
                            }`}
                            referrerPolicy="no-referrer"
                          />
                          {isActive && (
                            <div className="absolute inset-0 bg-[#0284c7]/10 flex items-center justify-center">
                              <div className="bg-[#0284c7] w-1.5 h-1.5 rounded-full ring-4 ring-white"></div>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* 100 PLC based project ideas with interactive search */}
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#0284c7]" />
                    Some PLC Based Project Ideas ({PLC_PROJECT_IDEAS.length})
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase mt-0.5">
                    Search and select from our curated syllabus of live project configurations
                  </p>
                </div>

                <div className="relative max-w-xs w-full">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={projectSearch}
                    onChange={(e) => setProjectSearch(e.target.value)}
                    placeholder="Search project ideas..."
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-sky-100 font-bold transition uppercase"
                  />
                </div>
              </div>

              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
                  {filteredProjects.map((idea, idx) => {
                    // Try to extract original index or keep sequential index
                    const match = idea.match(/^(\d+)\.\s*/);
                    const label = idea.replace(/^\d+\.\s*/, '').trim();
                    const number = match ? match[1] : (idx + 1).toString();

                    return (
                      <div 
                        key={idx}
                        className="bg-white border border-slate-200/80 p-3.5 rounded-xl flex items-start gap-3 hover:border-sky-300 transition"
                      >
                        <span className="bg-sky-50 text-[#0284c7] font-black text-[10px] w-6 h-6 rounded-lg flex items-center justify-center shrink-0">
                          {number}
                        </span>
                        <p className="text-xs font-bold text-slate-850 uppercase tracking-tight leading-relaxed pt-0.5">
                          {label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <p className="text-xs text-slate-400 font-bold uppercase">No project ideas match your search</p>
                </div>
              )}
            </div>

          </div>
        );

      case 'testimonials':
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="border-b border-slate-150 pb-4">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                Student Testimonials & Placements Feedback
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-semibold">
                Read how our extreme focus on actual practical skills transformed the careers of engineering freshers and working professionals.
              </p>
            </div>

            {/* PLC SCADA VFD Program for Working Professionals Section */}
            <div className="bg-sky-50/50 border border-sky-100 p-5 sm:p-6 rounded-2xl space-y-5">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded uppercase tracking-wider w-fit">
                  Executive Training
                </span>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 uppercase tracking-tight">
                  PLC SCADA VFD Training Program to Working Professionals
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  HITECH AUTOMATION provides world-class, hands-on, practical engineering skill upgradation modules tailored for corporate working personnel. With customized flexible schedules (including special weekend batches), we ensure professionals can master physical hardware configurations without disrupting their work shifts.
                </p>
              </div>

              {/* Working Professionals Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/editor/working-professionals-from-esteemed-organizations-trained-hitech-automation-1.jpg?1534523776",
                    caption: "Executive Batch 1"
                  },
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/editor/working-professionals-from-esteemed-organizations-trained-hitech-automation-2.jpg?1534523865",
                    caption: "Executive Batch 2"
                  },
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/working-professionals-from-esteemed-organizations-trained-hitech-automation-3.jpg?1534523889",
                    caption: "Executive Batch 3"
                  }
                ].map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedZoomImage(img.url)}
                    className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden cursor-zoom-in shadow-xs hover:shadow-md hover:border-slate-300 transition duration-300"
                  >
                    <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center p-2">
                      <img
                        src={img.url}
                        alt="Working Professionals Trained at Hitech Automation"
                        className="max-w-full max-h-full object-contain group-hover:scale-104 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2 bg-white border-t border-slate-100 text-center">
                      <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                        {img.caption}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                      <span className="text-white text-[10px] font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-xs">
                        Zoom View
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[10px] sm:text-xs text-slate-400 font-extrabold uppercase text-center tracking-wider">
                ★ Trained engineers from prestigious multinational organizations and local manufacturing plants ★
              </p>
            </div>

            {/* Featured Video Feedback from Student Suresh */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column: YouTube Embed */}
              <div className="md:col-span-6 space-y-2">
                <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded uppercase tracking-wider w-fit inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping"></span>
                  Video Testimonial
                </span>
                <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-950 shadow-sm">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/88TuRPyzQ2A"
                    title="Genuine Feedback from Our Student Suresh"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="no-referrer"
                  ></iframe>
                </div>
              </div>

              {/* Right Column: Detailed Feedback Text */}
              <div className="md:col-span-6 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight flex items-center gap-1.5">
                    📢 Genuine Feedback from Our Student Suresh
                  </h4>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Video className="w-3.5 h-3.5 text-rose-500" />
                    Video Review and Practical Course Overview
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  In this video, Mr. Suresh shares his genuine review and learning experience with <strong>HITECH AUTOMATION, Vijayawada</strong>. He successfully completed his rigorous training on professional rigs and gained high-fidelity hands-on experience in cutting-edge Industrial Automation Technologies, including:
                </p>

                {/* Bullets */}
                <div className="grid grid-cols-1 gap-2.5 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex gap-2.5 items-start">
                    <span className="bg-sky-50 text-[#0284c7] font-extrabold text-xs w-5 h-5 rounded-md flex items-center justify-center shrink-0">🔹</span>
                    <p className="text-xs font-bold text-slate-850">
                      PLCs: <span className="text-[#0284c7]">SIEMENS (TIA Portal)</span>, <span className="text-[#0284c7]">ALLEN-BRADLEY</span>, <span className="text-[#0284c7]">DELTA</span>
                    </p>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <span className="bg-sky-50 text-[#0284c7] font-extrabold text-xs w-5 h-5 rounded-md flex items-center justify-center shrink-0">🔹</span>
                    <p className="text-xs font-bold text-slate-850">
                      SCADA: <span className="text-[#0284c7]">INTOUCH</span>, <span className="text-[#0284c7]">WINCC</span>
                    </p>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <span className="bg-sky-50 text-[#0284c7] font-extrabold text-xs w-5 h-5 rounded-md flex items-center justify-center shrink-0">🔹</span>
                    <p className="text-xs font-bold text-slate-850">
                      HMI & VFD Programming & Hardware Interfacing
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://youtu.be/88TuRPyzQ2A?si=2FMRveyZZJ3eUeAx"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition border border-rose-100 shadow-2xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Direct on YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Student Placement Spotlights / Certificate Achievements */}
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex flex-col gap-1">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  Alumni Placement Highlights & Achievement Certificates (Click to Zoom)
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">
                  Recent recruitments list and student certification highlights from Hitech Automation
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/placements_5.jpg",
                    title: "Recruited Students Selection Record"
                  },
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/placements-2-jpg_4.jpg",
                    title: "Placement Drives & Core Selections"
                  },
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/chaitanya_4.jpg",
                    title: "Chaitanya - Industrial Placement Success"
                  }
                ].map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedZoomImage(img.url)}
                    className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden cursor-zoom-in shadow-2xs hover:shadow-md hover:border-slate-300 transition duration-300"
                  >
                    <div className="aspect-[16/11] bg-slate-50 relative overflow-hidden flex items-center justify-center p-2 border-b border-slate-100">
                      <img
                        src={img.url}
                        alt={img.title}
                        className="max-w-full max-h-full object-contain group-hover:scale-104 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-3 bg-white text-center">
                      <p className="text-[11px] font-black text-slate-750 uppercase tracking-tight leading-snug">
                        {img.title}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                      <span className="text-white text-[10px] font-black uppercase tracking-wider bg-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-xs">
                        Zoom View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        );

      case 'industrial':
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="border-b border-slate-150 pb-5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                Industrial Training and Placement Assistance
              </h3>
              <p className="text-xs sm:text-sm text-sky-700 font-extrabold uppercase mt-1.5 tracking-wider">
                Elite Hands-on Industrial Automation (PLC, SCADA, VFD, HMI) modules for college batches
              </p>
            </div>

            {/* Core Training Philosophy */}
            <div className="bg-sky-50/50 border border-sky-100 p-5 sm:p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-sky-850">
                <GraduationCap className="w-5 h-5 text-[#0284c7]" />
                <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                  Campus-Aligned Professional Competency Development
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                Hitech Automation bridges the massive gap between traditional academic curricula and industrial realities. We deliver specialized on-site and center-based training programs designed explicitly for B.Tech, Diploma, and Postgraduate engineering students. Our modules are fully supported with real physical boards, working controllers, and active feedback loops.
              </p>
            </div>

            {/* Curriculum Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-2xs">
                <div className="text-[#0284c7] font-black text-xs uppercase mb-1.5">✓ PLC Programming</div>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Comprehensive training on Siemens S7-1200 TIA Portal, Allen-Bradley RSLogix, Delta, and Schneider architectures.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-2xs">
                <div className="text-[#0284c7] font-black text-xs uppercase mb-1.5">✓ SCADA & HMI Systems</div>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Designing custom graphic pages, alarm logging, historic data trending, and dynamic tag mapping in InTouch & WinCC.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-2xs">
                <div className="text-[#0284c7] font-black text-xs uppercase mb-1.5">✓ Variable Frequency Drives (VFD)</div>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  AC Motor speed controls, wiring analog control terminals, modbus communication, and frequency profiling.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-2xs">
                <div className="text-[#0284c7] font-black text-xs uppercase mb-1.5">✓ Control Panel Designing</div>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Practical wiring of industrial switches, contactor interlocks, timers, relays, and safety emergency loops.
                </p>
              </div>
            </div>

            {/* Industrial Training Batches Gallery */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex flex-col gap-1">
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-emerald-600" />
                  Industrial Training & Campus Workshop Highlights (Click to Zoom)
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">
                  Glimpses of active student batches from our associated institutions receiving certifications
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/aanm-vvrsr-polytechnic-gudlavalleru_orig.jpg",
                    college: "AANM & VVRSR Polytechnic, Gudlavalleru"
                  },
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/usha-rama-college-of-engineering-technology_orig.jpg",
                    college: "Usha Rama College of Engineering & Technology"
                  },
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/akula-sree-ramulu-college-of-engineering_orig.jpg",
                    college: "Akula Sree Ramulu College of Engineering"
                  },
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/giet-iind-shift-polytechnic-rajahmundry_orig.jpg",
                    college: "GIET II-Shift Polytechnic, Rajahmundry"
                  },
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/government-polytechnic-for-women-guntur-2_orig.jpg",
                    college: "Government Polytechnic for Women, Guntur"
                  },
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/col-d-s-raju-polytechnic-podur-w-g-dist_orig.jpg",
                    college: "Col. D.S. Raju Polytechnic, Podur"
                  },
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/sri-varalakshmi-polytechnic-machilipatnam_orig.jpg",
                    college: "Sri Varalakshmi Polytechnic, Machilipatnam"
                  },
                  {
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/smt-b-seetha-polytechnic_orig.jpg",
                    college: "Smt. B. Seetha Polytechnic, Bhimavaram"
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedZoomImage(item.url)}
                    className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden cursor-zoom-in shadow-2xs hover:shadow-md hover:border-slate-300 transition duration-300"
                  >
                    <div className="aspect-[16/11] bg-slate-50 relative overflow-hidden flex items-center justify-center p-1.5 border-b border-slate-100">
                      <img
                        src={item.url}
                        alt={item.college}
                        className="max-w-full max-h-full object-cover rounded group-hover:scale-104 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-3 bg-white text-center">
                      <p className="text-[10px] sm:text-xs font-black text-slate-750 uppercase tracking-tight leading-tight">
                        {item.college}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                      <span className="text-white text-[10px] font-black uppercase tracking-wider bg-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-xs">
                        Zoom View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        );

      case 'mou':
        return (
          <div className="space-y-10">
            {/* Header banner */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider border border-indigo-500/30">
                  <Award className="w-3.5 h-3.5" /> Core Placement Improvement Program
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  MOUs with Engineering Colleges
                </h3>
                <p className="text-xs sm:text-sm text-indigo-100/95 leading-relaxed mt-3 max-w-4xl font-medium">
                  HITECH AUTOMATION has signed Memorandums of Understanding (MOUs) with several prestigious institutions to improve the placement ratio in core branches (<span className="text-white font-extrabold">EEE, EIE, ECE, & Mechatronics</span>). We deliver high-impact, real-time, job-oriented <span className="text-indigo-300 font-bold">Industrial Automation Training</span> covering PLC programming, SCADA, VFDs, and Instrumentation — essential skills for every engineering graduate aiming for a successful career in core sectors.
                </p>
              </div>
            </div>

            {/* List of Partner Institutions */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-600" />
                Key Prestigious Partner Institutions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Gudlavalleru College of Engineering",
                    location: "Gudlavalleru",
                    num: "01"
                  },
                  {
                    name: "Dhanekula College of Engineering",
                    location: "Gangur, Vijayawada",
                    num: "02"
                  },
                  {
                    name: "Vijaya Institute of Technology for Women",
                    location: "Vijayawada",
                    num: "03"
                  },
                  {
                    name: "Lakireddy Balireddy College of Engineering",
                    location: "Mylavaram",
                    num: "04"
                  }
                ].map((college, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs hover:border-indigo-400 hover:shadow-xs transition duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-black text-sm shrink-0">
                      {college.num}
                    </div>
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-tight">
                        {college.name}
                      </h5>
                      <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                        📍 {college.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloads Center for Official MoU PDFs */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-5">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-5 h-5 text-rose-500" />
                  Official Signed MoU Agreements (Downloads)
                </h4>
                <p className="text-[10px] text-slate-400 font-black uppercase mt-0.5">
                  Access authentic university credentials and partnership authorization files
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Dhanekula Institute of Engineering & Technology",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/copy_of_mou_with_dhanekula_institute_of_engineering___technology..pdf",
                    desc: "Official signed MoU to enhance professional skill sets and core industrial placement training."
                  },
                  {
                    title: "Gudlavalleru Engineering College",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/mou_with_gudlavalleru__engineering__college_1.pdf",
                    desc: "Signed corporate-academic collaboration agreement for modern industrial automation lab systems."
                  },
                  {
                    title: "Vijaya Institute of Technology for Women",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/mou_with_vijaya_inistitute_of_technology_for_women_1.pdf",
                    desc: "Official agreement for placements improvement program & practical workshop batches."
                  },
                  {
                    title: "Lakireddy Balireddy College of Engineering",
                    url: "https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/mou_lakireddy_balreddy_college_of_engineering.pdf",
                    desc: "MoU for Core branches skill building, internships, and advanced industrial automation lectures."
                  }
                ].map((pdf, idx) => (
                  <div key={idx} className="bg-white p-5 border border-slate-200 rounded-xl shadow-2xs hover:shadow-xs transition duration-200 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded uppercase tracking-wider inline-block mb-2">
                        Official MoU Document
                      </span>
                      <h5 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-tight leading-snug">
                        {pdf.title}
                      </h5>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed font-medium">
                        {pdf.desc}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
                      <a
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-900 hover:bg-slate-850 text-white font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-2xs transition active:scale-95"
                      >
                        <Download className="w-3.5 h-3.5" /> Download MoU PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Signed Ceremonies Media */}
            <div className="space-y-4">
              <div>
                <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider">
                  MoU Handover Ceremonies
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Photos from institutional signing handovers with executive college representatives and principal officers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mouImages.map((mou, i) => (
                  <div 
                    key={i}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs p-4 flex flex-col justify-between hover:shadow-md transition duration-300"
                  >
                    <div className="aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden border border-slate-150 mb-4 relative group">
                      <img
                        src={mou.url}
                        alt={mou.title}
                        className="w-full h-full object-contain cursor-zoom-in"
                        onClick={() => setSelectedZoomImage(mou.url)}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-wider inline-block mb-1">
                        Academic Handover Ceremonies
                      </span>
                      <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase leading-snug">
                        {mou.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 font-medium">
                        {mou.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            <div className="border-b border-slate-150 pb-4">
              <h3 className="text-xl font-extrabold text-slate-900 uppercase">
                Contact Hitech Automation Vijayawada
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Reach out to our executive counselors to book your free trial class, select a batch timing, or schedule on-campus seminars.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex gap-3.5 items-start">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase">Call / WhatsApp</h4>
                  <div className="flex flex-col gap-1 mt-1 text-sm text-slate-900 font-extrabold font-mono">
                    {COMPANY_CONTACT.phoneNumbers.map((num, i) => (
                      <a key={i} href={`tel:${num}`} className="hover:text-emerald-600 hover:underline">
                        📱 {num}
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5">Primary Enquiries & Admissions</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex gap-3.5 items-start">
                <div className="p-2.5 bg-sky-50 text-[#0284c7] rounded-lg shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase">Email Address</h4>
                  <div className="flex flex-col gap-1 mt-1 text-xs sm:text-sm text-slate-900 font-bold">
                    {COMPANY_CONTACT.emails.map((email, i) => (
                      <a key={i} href={`mailto:${email}`} className="hover:text-sky-600 hover:underline truncate">
                        📧 {email}
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5">Corporate & Institutional queries</p>
                </div>
              </div>

              {COMPANY_CONTACT.websites && (
                <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex gap-3.5 items-start sm:col-span-2">
                  <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase font-black">Official Websites</h4>
                    <div className="flex flex-wrap gap-x-6 gap-y-1.5 mt-2 text-xs sm:text-sm text-slate-900 font-bold">
                      {COMPANY_CONTACT.websites.map((web, i) => {
                        const targetUrl = web.startsWith('http') ? web : `https://${web}`;
                        return (
                          <a key={i} href={targetUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 hover:underline flex items-center gap-1">
                            🌐 {web}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs flex gap-3.5 items-start sm:col-span-2">
                <div className="p-2.5 bg-purple-50 text-purple-600 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm uppercase">Main Training Facility</h4>
                  <p className="text-xs sm:text-sm text-slate-700 font-bold mt-1">
                    {COMPANY_CONTACT.address}
                  </p>
                  <p className="text-xs text-purple-700 font-extrabold mt-1">
                    📍 Landmark: {COMPANY_CONTACT.landmark}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50/75 pb-24 font-sans min-h-screen" id="more-section-root">
      
      {/* Dynamic Tab Navigation Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-lg font-black text-slate-900 tracking-wider uppercase flex items-center gap-2">
            <span className="w-2.5 h-6 bg-[#0284c7] rounded-xs inline-block"></span>
            More Information Hub
          </h2>
          <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-widest">
            Explore advanced resources, institutional tie-ups, student batches, and training kits
          </p>
        </div>

        {/* MOBILE ONLY: Interactive Dropdown Selector */}
        <div className="block lg:hidden bg-white rounded-2xl border border-slate-200 p-4 shadow-xs mb-6 relative" id="mobile-tab-dropdown-container">
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
            Select Section to View:
          </label>
          <div className="relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full bg-[#0284c7] text-white font-extrabold text-xs uppercase tracking-wider px-4 py-3.5 rounded-xl shadow-xs flex items-center justify-between cursor-pointer active:scale-99 transition"
              id="mobile-tab-dropdown-trigger"
            >
              <span className="truncate pr-2">
                {MORE_TABS.find(t => t.id === activeTab)?.label}
              </span>
              <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <>
                  {/* Click outside backdrop for easy dismissal */}
                  <div 
                    className="fixed inset-0 z-20" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    id="mobile-dropdown-backdrop"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute z-30 left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg max-h-[340px] overflow-y-auto"
                    id="mobile-dropdown-options-list"
                  >
                    <div className="p-1.5 space-y-1">
                      {MORE_TABS.map((tab) => {
                        const isCurrent = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => {
                              setActiveTab(tab.id);
                              setIsMobileMenuOpen(false);
                            }}
                            className={`w-full text-left uppercase text-[10.5px] font-bold tracking-wider px-4 py-3 rounded-lg transition-all cursor-pointer ${
                              isCurrent 
                                ? 'bg-sky-50 text-[#0284c7] font-black' 
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Master Responsive Split Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Vertical Navigation Menu (DESKTOP ONLY) */}
          <div className="hidden lg:block lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm lg:sticky lg:top-24">
            <div className="mb-4 pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-xs text-slate-800 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0284c7]" />
                More... Navigation Menu
              </h3>
            </div>

            <div className="space-y-1.5 flex flex-col">
              {MORE_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left uppercase text-[11px] sm:text-xs font-bold tracking-wider px-4 py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-between group ${
                      isActive 
                        ? 'bg-[#0284c7] text-white shadow-sm' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-100'
                    }`}
                  >
                    <span className="truncate pr-2">{tab.label}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'translate-x-0.5 text-white' : 'text-slate-400 group-hover:translate-x-0.5'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Tab Dynamic Display Screen */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/95 p-6 sm:p-8 min-h-[500px] shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                {renderTabContent()}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Full-Screen Lightbox Image Zoom */}
      <AnimatePresence>
        {selectedZoomImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedZoomImage(null)}
          >
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setSelectedZoomImage(null)}
                className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full backdrop-blur-md cursor-pointer transition"
              >
                ✕
              </button>
            </div>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-4xl max-h-[85vh] p-1.5 bg-neutral-900 border border-neutral-850 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedZoomImage}
                alt="Zoomed preview"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
