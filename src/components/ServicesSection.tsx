import React from 'react';
import { 
  Building2, MapPin, Phone, Settings2, Wrench, CheckCircle, 
  Cpu, Zap, GitCommit, FileText, Heart, Sliders, ShieldCheck, Info
} from 'lucide-react';

export default function ServicesSection() {
  
  const recentClients = [
    {
      id: "satyas",
      title: "1. Satyas Composites",
      emoji: "🏭",
      location: "Vanudurru Village, Mudinepalli Mandal, Krishna District, Andhra Pradesh – 521325",
      phone: "+91 90083 06895, +91 97898 62986",
      scope: [
        "Replacement of PLC and HMI units",
        "Program download and configuration of new devices",
        "Technical coordination with OEMs from China"
      ]
    },
    {
      id: "pmg",
      title: "2. PMG Structurals",
      emoji: "🏗️",
      location: "D.No. 1-1, NH-5, Opp. Gowtham International School, Gudavalli, Vijayawada – 521104, Andhra Pradesh (Registered Office)",
      mfgUnit: "#256/20B, Bapulapadu Mandalam, Veeravalli – 521110, Krishna District, Andhra Pradesh (Manufacturing Unit)",
      scope: [
        "Replacement and commissioning of new PLC and HMI systems",
        "Program downloading, testing, and validation",
        "Remote collaboration with OEMs India for machine restoration"
      ]
    }
  ];

  const coreSolutions = [
    { title: "Increased Productivity", desc: "Optimize machine cycles and minimize downtime through high-performance logic code." },
    { title: "Process Optimization & Safety", desc: "Embed fail-safes, sound alarms, and strict sequence guardrails to protect equipment." },
    { title: "Real-time Monitoring & Control", desc: "Intuitive SCADA dashboards and touch HMI screens showing live machine vitals." },
    { title: "Retrofitting & Refurbishment", desc: "Upgrade legacy relay-based or faulty control systems with brand-new PLCs." }
  ];

  const plantExpertise = [
    "PLC / SCADA Control Logic Setup",
    "PLC + HMI based Equipment Automation",
    "AC Drive (VFD) Control Panels & Cabinet Wiring",
    "SCADA System Development & Mimic Screens",
    "Retrofitting, Refurbishment & Reconditioning of automated machine sequences",
    "Industrial Process Optimization",
    "Plant Data Monitoring, Logging & Logging Reports Setup",
    "Real-Time Field Sensor Monitoring & Pneumatic Valve Integration",
    "Batch Process Management & Multi-Motor Coordination"
  ];

  const customApplications = [
    {
      client: "Tanusha Polymers, Rajahmundry",
      desc: "Retrofitting solution for PVC casing pipe extrusion equipment"
    },
    {
      client: "Max Enterprises, Vijayawada",
      desc: "Our custom indigenous automation system for imported PVC window frame manufacturing machinery"
    },
    {
      client: "Sree Lalitha Parameswari Spinning Mills, Guntur",
      desc: "Multi-tank, multi-motor, multi-level industrial bore well water control system using custom PLC network"
    },
    {
      client: "Petroleum Innovative Technologies Company, Saudi Arabia",
      desc: "PLC-controlled solenoid valve system with high-speed sequential operation - real-time international industrial automation"
    },
    {
      client: "Project Soaking Machine Automation for Marine and Seafood Processing Industries",
      desc: "Automates the critical soaking cycle using heavy-duty PLC, HMI touchscreens, and water level/proximity sensors, ensuring absolute consistency, hygiene, and processing plant line speed."
    }
  ];

  return (
    <div className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 font-sans border-t border-slate-100" id="services-and-commercial-projects-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0284c7] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-3">
            ⚙️ Industrial Projects & system integration
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1d37] tracking-tight leading-tight uppercase font-sans">
            Recent Industrial Automation Services
          </h2>
          <div className="w-16 h-1.5 bg-[#0284c7] mx-auto mt-4 rounded"></div>
          <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
            At <strong>Hitech Automation, Vijayawada</strong>, we take pride in delivering premium, high-quality automation solutions, PLC–HMI programming, and system integration support to our valued clients. Below are some of the organizations we have recently provided services to:
          </p>
        </div>

        {/* 1. Satyas Composites & PMG Structurals Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {recentClients.map((client) => (
            <div 
              key={client.id} 
              className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              id={`recent-client-card-${client.id}`}
            >
              <div>
                {/* Header title */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl sm:text-4xl select-none">{client.emoji}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0a1d37] tracking-tight">
                    {client.title}
                  </h3>
                </div>

                {/* Company Contact Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex gap-2 text-xs sm:text-sm text-slate-600 items-start">
                    <MapPin className="w-5 h-5 text-[#0284c7] shrink-0 mt-0.5" />
                    <div>
                      {client.mfgUnit ? (
                        <>
                          <p className="font-semibold text-slate-800 mb-1">Registered Office:</p>
                          <p className="mb-2 text-slate-600">{client.location}</p>
                          <p className="font-semibold text-slate-800 mb-1">Manufacturing Unit:</p>
                          <p className="text-slate-600">{client.mfgUnit}</p>
                        </>
                      ) : (
                        <p className="text-slate-600">{client.location}</p>
                      )}
                    </div>
                  </div>

                  {client.phone && (
                    <div className="flex gap-2 text-xs sm:text-sm text-slate-600 items-center">
                      <Phone className="w-4 h-4 text-[#0284c7] shrink-0" />
                      <div>
                        <span className="font-medium text-slate-500">Contact Number: </span>
                        <span className="font-mono font-semibold text-slate-900">{client.phone}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Scope of Work */}
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-850 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#0284c7]" />
                    <span>Scope of Work Delivered</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {client.scope.map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Core Industrial Solutions Overview */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10 mb-16">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-[#0a1d37] uppercase tracking-tight flex items-center gap-2">
              <Cpu className="w-6 h-6 text-[#0284c7]" />
              <span>Industrial Automation Solutions</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              We design, develop, and implement cost-effective, reliable, and highly customized automation systems using cutting-edge: <strong>PLC, HMI, SCADA, Servo & VFD control sequences, Pneumatics, and Industrial Sensors.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSolutions.map((sol, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:bg-[#0284c7]/5 hover:border-[#0284c7]/20 transition-all duration-300">
                <div className="text-emerald-600 text-lg sm:text-xl font-bold mb-2">✅</div>
                <h4 className="font-bold text-xs sm:text-sm text-[#0a1d37] uppercase tracking-tight mb-2">
                  {sol.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {sol.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. PLC Plant Expertise section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          <div className="lg:col-span-6 bg-[#0b2140] text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#0284c7]" />
              <h4 className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Field Engineering Capabilities
              </h4>
            </div>
            
            <h3 className="text-lg sm:text-xl font-extrabold uppercase mb-4 tracking-tight text-white leading-tight">
              🔧 Our Expertise in Plant Automation
            </h3>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              We provide comprehensive turnkey automation system design, wiring, diagnostic troubleshooting, and parameter setting for industrial plants across Andhra Pradesh.
            </p>

            <ul className="grid grid-cols-1 gap-3 border-t border-slate-700/60 pt-6">
              {plantExpertise.map((item, idx) => (
                <li key={idx} className="flex gap-2.5 items-start">
                  <span className="text-[#0284c7] font-black text-xs sm:text-sm select-none">&bull;</span>
                  <span className="text-slate-200 font-medium text-xs sm:text-sm leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Customized Application Catalog */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 block shadow-md">
            <div className="flex items-center gap-2 mb-6">
              <Sliders className="w-5 h-5 text-[#0284c7]" />
              <h3 className="text-lg sm:text-xl font-black text-[#0a1d37] uppercase tracking-tight">
                🛠️ Customized Application Development
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              We have successfully designed, developed, and delivered robust indigenously-authored software and electrical panel designs for the following applications:
            </p>

            <div className="space-y-5">
              {customApplications.map((app, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-350 transition-all">
                  <h4 className="font-extrabold text-xs sm:text-sm text-[#0a1d37] tracking-tight mb-1">
                    {app.client}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed flex gap-1.5 items-start">
                    <span className="text-[#0284c7] font-semibold text-xs">&raquo;</span>
                    <span>{app.desc}</span>
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs font-semibold text-[#0284c7] mt-5 tracking-widest uppercase block italic text-center">
              And many more custom plants commissioned...
            </p>
          </div>

        </div>

        {/* 5. Banner image & Core trust summary statement */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-center">
              <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mb-2 block select-none">
                Our Corporate Services Clients
              </span>
              <div className="rounded-xl overflow-hidden shadow-md border border-slate-150 p-2 bg-white w-full max-w-sm hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://6923375-279996968100394202.preview.editmysite.com/uploads/6/9/2/3/6923375/editor/clients.jpg?1762793864" 
                  alt="Industrial Services Clients Logos" 
                  className="w-full h-auto object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1 bg-sky-50 text-[#0284c7] px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mb-2">
                <Info className="w-3.5 h-3.5" />
                <span>Our Engineering Commitment</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1d37] uppercase tracking-tight">
                Engineering Success with Trust & Excellence
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                At <strong>HITECH AUTOMATION</strong>, we are committed to delivering reliable, innovative, and sustainable automation systems that help industries scale up with absolute safety, highest quality, and optimum performance.
              </p>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#0284c7] to-sky-400 rounded-full mt-4"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
