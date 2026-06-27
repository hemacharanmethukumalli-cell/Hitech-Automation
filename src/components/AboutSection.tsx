import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, Globe, Landmark, ShieldCheck, Target, 
  Eye, GraduationCap, Building2, Flame, Maximize2, X 
} from 'lucide-react';

const ACCREDITATIONS_LIST = [
  {
    title: "Accredited Robotics Skill Centre by AICRA",
    issuer: "All India Council for Robotics & Automation",
    description: "Recognized by AICRA for offering authorized elite training programs in industrial automation and robotics technologies. Certified core learning provider status.",
    image: "https://6923375-279996968100394202.preview.editmysite.com/uploads/6/9/2/3/6923375/editor/aicra.jpg?1755360183"
  },
  {
    title: "Research Recognition by IIT Madras",
    issuer: "IIT Madras - Department of Mechanical Engineering",
    description: "Honored with a Certificate of Appreciation for providing expert PLC, HMI & Servo programming support for an esteemed SERB-funded research project.",
    image: "https://6923375-279996968100394202.preview.editmysite.com/uploads/6/9/2/3/6923375/iit-madras_orig.jpg"
  },
  {
    title: "Justdial Users' Choice award 2025",
    issuer: "Justdial Local Search Engine",
    description: "Highly rated on Justdial by hundreds of engineering graduates and industrial trainees in Andhra Pradesh, receiving premium users' recognition.",
    image: "https://6923375-279996968100394202.preview.editmysite.com/uploads/6/9/2/3/6923375/star-rating-hitech-automation_orig.jpg"
  }
];

export default function AboutSection() {
  const [selectedAccredIndex, setSelectedAccredIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#f8fafc] pb-24 font-sans" id="about-section-container">
      
      {/* Header Banner */}
      <section className="bg-[#0b2140] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-sky-400 text-xs font-bold uppercase tracking-widest block mb-2">
            ESTABLISHED IN 1998 • AN ISO CERTIFIED LEARNING HUB
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            About HITECH AUTOMATION Vijayawada
          </h1>
          <div className="w-16 h-1 bg-[#0284c7] mx-auto mt-4 rounded"></div>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            With 27+ years of legacy in industrial electronics & services and 15+ years of specialized experience in training, we bridge the gap between engineering college syllabus and field requirements.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Legacy Timeline Info Box */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
              Our Journey & Technical Legacy
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Hitech Automation, Vijayawada has grown into a specialist role in Industrial Automation Solutions, Skill Development, and Industrial Services.
              </p>
              <div className="pl-4 border-l-4 border-[#0284c7] italic py-1 bg-slate-50 rounded-r-lg">
                <span className="font-bold text-slate-800">Established in 1998 as Hitech Instruments</span>, we initially provided specialized Industrial Electronics Services to heavy machinery industries such as Power Plants, Railways, Cement Factories, Petroleum Plants, High-Speed Printing lines, Defence sectors, and Sugar Plants.
              </div>
              <p>
                In <span className="font-bold text-slate-800">2010</span>, recognizing the critical rise of advanced manufacturing technologies, PLC systems, high-speed HMIs, and variable frequency speed drives, we expanded into dedicated <span className="font-bold text-slate-800">Industrial Automation Training & Services</span> under the banner <span className="font-bold text-slate-800">Hitech Automation</span>.
              </p>
              <p>
                Today, with 27+ years of practical industrial experience and 15+ years in targeted automation training, we are proudly recognized as the most trusted training partner for core engineers, premium engineering colleges, and elite research institutions.
              </p>
            </div>
          </div>

          {/* Quick Stats sidebar widget */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">
              Operational Statistics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <div className="text-2xl font-black text-[#0284c7] font-mono">1998</div>
                <div className="text-[10px] text-slate-500 uppercase font-semibold mt-1">Established</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <div className="text-2xl font-black text-[#0284c7] font-mono">27+</div>
                <div className="text-[10px] text-slate-500 uppercase font-semibold mt-1">Ind. Experience</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <div className="text-2xl font-black text-emerald-600 font-mono">12+</div>
                <div className="text-[10px] text-slate-500 uppercase font-semibold mt-1">Countries</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <div className="text-2xl font-black text-emerald-600 font-mono">15+</div>
                <div className="text-[10px] text-slate-500 uppercase font-semibold mt-1">Years Teaching</div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-100">
              <div className="flex gap-3 items-center">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-xs text-slate-800 block">ISO 9001:2015 REGISTERED</span>
                  <span className="text-[10px] text-slate-400">Verifiable corporate training credentials</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Vision, and Quality Policy Cards */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-sky-50 text-[#0284c7] rounded-xl flex items-center justify-center mb-6 border border-sky-100">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed italic">
                  “To empower industries and engineers through automation, innovation, and skill development, ensuring customer success and creating global career opportunities.”
                </p>
              </div>
              <div className="h-1 w-12 bg-[#0284c7] mt-8 rounded"></div>
            </div>

            {/* Vision */}
            <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed italic">
                  “To be a trusted leader in industrial automation training & solutions, with a global footprint and strong industry collaborations.”
                </p>
              </div>
              <div className="h-1 w-12 bg-emerald-500 mt-8 rounded"></div>
            </div>

            {/* Quality Policy */}
            <div className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-100">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-3">
                  Our Quality Policy
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-500">
                  <li className="flex gap-2 items-start">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Delivering high-quality training & solutions that meet global standards.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Building customer confidence with reliable automation projects.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Promoting continuous improvement in learning & services.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Maintaining excellence aligned with ISO-quality practices.</span>
                  </li>
                </ul>
              </div>
              <div className="h-1 w-12 bg-purple-500 mt-8 rounded"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#0284c7] text-xs font-bold uppercase tracking-widest">
            PROVEN TRACK RECORD & ADMISSIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mt-1">
            Our Core Institutional Highlights
          </h2>
          <div className="w-12 h-1 bg-[#0284c7] mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Highlight 1: Global Presence */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0284c7] transition duration-200 flex gap-4 items-start shadow-xs">
            <div className="p-3 bg-sky-50 text-[#0284c7] rounded-xl shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wide">
                🌐 Global Presence
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                Our dynamic alumni & professionals are placed globally across <span className="font-bold text-slate-700">12 countries</span> including: USA, Australia, UAE, Dubai, Saudi Arabia, Italy, South Africa, Oman, Vietnam, Switzerland, Singapore, and Nigeria.
              </p>
            </div>
          </div>

          {/* Highlight 2: Nationwide Reach */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0284c7] transition duration-200 flex gap-4 items-start shadow-xs">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wide">
                📈 Nationwide Reach
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                Qualified software and hardware engineering professionals trained by us work actively across <span className="font-bold text-slate-700">10 states of India</span> — including professionals representing virtually every single district of Andhra Pradesh.
              </p>
            </div>
          </div>

          {/* Highlight 3: Academic Collaborations */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0284c7] transition duration-200 flex gap-4 items-start shadow-xs">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wide">
                🤝 Academic Collaborations & MoUs
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                Officially signed MoUs and specialized laboratory workshops with premium technology institutes, including: VR Siddhartha, PVP Siddhartha, KL University, Vignan, Loyola, Gudlavalleru, Bapatla, Sir CR Reddy, and more.
              </p>
            </div>
          </div>

          {/* Highlight 4: Industrial Clients */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0284c7] transition duration-200 flex gap-4 items-start shadow-xs">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wide">
                ⚙️ Industrial Service Partners
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                Long-term trust with heavyweight power and manufacturing plants: VTPS, KTPS, RTPP, NSPH, Srisailam Hydro Power Project, GVK Power, Bharat Electronics Limited (BEL), South Central Railway, Coca-Cola Bottlers, KCP Sugars, and RAK Ceramics.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Accreditations and Certifications with actual loaded images */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#0284c7] text-xs font-bold uppercase tracking-widest">
              OFFICIAL CREDENTIALS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mt-1">
              Recognitions & Accreditations
            </h2>
            <div className="w-12 h-1 bg-[#0284c7] mx-auto mt-3 rounded"></div>
            <p className="text-xs text-slate-400 mt-2">
              Feel free to click any certificate to view high-resolution scan copy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACCREDITATIONS_LIST.map((accred, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-md transition duration-300"
              >
                {/* Visual Image Screen */}
                <div 
                  className="relative group cursor-pointer overflow-hidden aspect-[4/5] bg-neutral-200 flex items-center justify-center"
                  onClick={() => setSelectedAccredIndex(idx)}
                >
                  <img
                    src={accred.image}
                    alt={accred.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#0b2140]/60 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                    <div className="bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Zoom Document</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Info block */}
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#0284c7] font-bold block mb-1">
                    {accred.issuer}
                  </span>
                  <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-tight mb-2">
                    {accred.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {accred.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal overlay for certificates */}
      <AnimatePresence>
        {selectedAccredIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedAccredIndex(null)}
          >
            {/* Top Bar for close button */}
            <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
              <button 
                className="bg-white/15 hover:bg-white/25 text-white p-2.5 rounded-full backdrop-blur-md cursor-pointer transition-colors"
                onClick={() => setSelectedAccredIndex(null)}
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Main Modal container */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="max-w-3xl w-full flex flex-col max-h-[92vh] mt-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Document display screen */}
              <div className="bg-neutral-950 rounded-xl overflow-hidden shadow-2xl border border-neutral-800 p-2 flex items-center justify-center">
                <img
                  src={ACCREDITATIONS_LIST[selectedAccredIndex].image}
                  alt={ACCREDITATIONS_LIST[selectedAccredIndex].title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg mx-auto shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
