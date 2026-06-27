import React from 'react';
import { PLACEMENTS_GALLERY } from '../types';
import { motion } from 'motion/react';
import { Users, Building2, Briefcase, Award, CheckCircle, GraduationCap } from 'lucide-react';

export default function PlacementsSection() {
  const processes = [
    {
      title: "1. Core Logic Grooming",
      desc: "Prepare for hard technical interviewer questions covering latching, timers, counters, scaling, and Modbus serial channels."
    },
    {
      title: "2. Resume Drafting support",
      desc: "Review your electrical layout designs and map actual laboratory hardware hours on Siemens and AB processors to show experience."
    },
    {
      title: "3. Direct Employer Referral",
      desc: "Refer candidates to field projects, manufacturing facilities, panel boards work companies, and automation agencies in Vijayawada."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" id="placements-assistance-records">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 text-sm font-extrabold uppercase tracking-widest block mb-2">
            Student Success Center
          </span>
          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl tracking-tight">
            Our Placements & Career Gateway
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-4 rounded"></div>
          <p className="mt-4 text-base text-gray-600">
            We guide and support our students in achieving solid career roles in maintenance, research, engineering design, and systems integrations across the country.
          </p>
        </div>

        {/* How Hitech Helps & Job Updates Portal Section */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-md p-6 sm:p-10 mb-16 overflow-hidden" id="hitech-placement-how">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left/Content details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full inline-block">
                Exclusive Career Guidance
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug uppercase">
                How can Hitech help students with job placements?
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  As you are aware, <strong>HITECH AUTOMATION, Vijayawada</strong>, is engaged in the field of Industrial Automation Training Programmes since 2011, both in offline and online formats. To date, we have successfully trained over 1000 students, with an impressive <strong>80% of them securing placements</strong> in India and across the globe, as indicated by our records.
                </p>
                <p>
                  We take pride in the fact that our alumni are now employed in <strong>15 different countries</strong> worldwide, as well as in all the major states of India. Furthermore, since 1998, we have been providing essential technical support to numerous major industries, including government and private power plants.
                </p>
                <p>
                  Building on the strong relationships and with the support of our dedicated students across India and globally, we have embarked on a new initiative called: <a href="https://jobupdates4engineers.blogspot.com/" target="_blank" rel="noreferrer" className="text-emerald-600 font-extrabold hover:underline">jobupdates4engineers.blogspot.com</a>. Our primary objective with this blog is to create awareness about job opportunities and offer the necessary support to help individuals grab these opportunities.
                </p>
                <p>
                  Through this, you can access job updates for <strong>Electrical, Instrumentation, Electronics & Mechanical</strong> and other valuable resources available on the blog. Especially for those seeking core-related job opportunities, we understand that gathering information for such jobs can be challenging.
                </p>
              </div>

              {/* Bullet list of expectation items */}
              <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 sm:p-6 space-y-3">
                <h4 className="font-extrabold text-xs sm:text-sm text-slate-800 uppercase tracking-wider">
                  On jobupdates4engineers.blogspot.com, you can expect to find:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Local, National, and Global job listings for engineers & diploma holders.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Internship opportunities.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Job-related technical data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Interview question and answer resources.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Information on final year projects.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Software downloads.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:col-span-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>The opportunity to contribute articles, job listings, internships, and projects.</span>
                  </li>
                </ul>
              </div>

              {/* CTA button */}
              <div className="pt-2">
                <a
                  href="https://jobupdates4engineers.blogspot.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Visit Job Updates For Engineers Portal</span>
                </a>
              </div>

            </div>

            {/* Right/Image Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg bg-slate-50">
                <img
                  src="https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/placement-assistance_orig.webp"
                  alt="Hitech Automation Placement Assistance Team & Portal Support"
                  className="w-full h-auto object-cover rounded-2xl hover:scale-101 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>

        {/* 3-Step placement guidance boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {processes.map((p, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-gray-100 flex flex-col gap-3">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 self-start px-2 py-1 rounded">
                Job Ready Support
              </span>
              <h3 className="text-lg font-extrabold text-gray-900 mt-1">
                {p.title}
              </h3>
              <p className="text-sm text-gray-650 leading-relaxed text-gray-600">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Hiring companies tag cloud */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-150 shadow-xs mb-16 text-center">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-6 flex items-center justify-center gap-1.5">
            <Building2 className="w-4 h-4 text-emerald-600" />
            Top Organizations Recruiting Our Candidates
          </h3>
          <div className="flex flex-wrap justify-center gap-3.5 sm:gap-6">
            {["L&T Automation", "Siemens India", "Efftronics Systems", "Wipro Engineering", "Schneider Electric", "Sudarshan Chemicals", "Apex Solutions", "Vasco Control Panel Workshops"].map((comp, idx) => (
              <span
                key={idx}
                className="bg-gray-50 border border-gray-100 hover:border-emerald-200 text-gray-700 font-semibold px-4.5 py-2 rounded-lg text-xs sm:text-sm shadow-xs transition duration-300"
              >
                🏢 {comp}
              </span>
            ))}
          </div>
        </div>



      </div>
    </div>
  );
}
