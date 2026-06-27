import React, { useState } from 'react';
import { COURSES_LIST } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, BookOpen, Layers, Check, ChevronRight, HelpCircle, 
  ChevronDown, Globe, MapPin, Sparkles, Cpu, Factory, 
  GraduationCap, Calendar, Zap, Lightbulb, Users
} from 'lucide-react';

export default function SyllabusSection() {
  const [selectedCourseId, setSelectedCourseId] = useState(COURSES_LIST[0].id);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const selectedCourse = COURSES_LIST.find(c => c.id === selectedCourseId) || COURSES_LIST[0];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const applications = [
    { title: "Power Plants", bg: "bg-slate-100 text-slate-800" },
    { title: "Oil & Gas", bg: "bg-amber-100 text-amber-800" },
    { title: "Pharmaceuticals", bg: "bg-emerald-100 text-emerald-800" },
    { title: "Cement", bg: "bg-stone-100 text-stone-800" },
    { title: "Sugar", bg: "bg-orange-100 text-orange-855 text-orange-800" },
    { title: "Food & Beverages", bg: "bg-sky-100 text-sky-800" },
    { title: "Textiles", bg: "bg-purple-100 text-purple-800" },
    { title: "Automobiles", bg: "bg-rose-100 text-rose-800" }
  ];

  const trainingActivities = [
    "Complete hands-on practical training (Both Classroom & Online)",
    "Internships",
    "Final Year PLC Based mini/main projects",
    "Workshops on PLC Programming & its applications",
    "Industrial training",
    "Industrial technician course (Unskilled 10th, 12th & ITI)"
  ];

  const coursesDuration = [
    { name: "1. Programmable Logic Controllers", duration: "30 days" },
    { name: "2. Scada", duration: "20 days" },
    { name: "3. VFD", duration: "05 days" },
    { name: "4. Industrial Process", duration: "30 days" },
    { name: "5. Robotics", duration: "10 days" }
  ];

  const methodology = [
    { ratio: "30%", title: "Theoretical Lectures", desc: "Foundational conceptual framework, hardware architectures, parameters, and symbols explanation." },
    { ratio: "70%", title: "Practical Training", desc: "Rigorous laboratory exercise. Writing logic, downloading configurations, and wire testing." },
    { ratio: "App", title: "Applications Practice", desc: "Developing control configurations for real sensory conditions and real-world mimicking kits." },
    { ratio: "Custom", title: "Customized Development", desc: "Grooming students to solve industry-specific, complex control operations from scratch." }
  ];

  const audience = [
    "M.Tech Students",
    "B.Tech Students",
    "Diploma Students",
    "Working Professionals"
  ];

  const faqs = [
    {
      q: "What is the eligibility to learn PLC & Automation courses?",
      a: "Students with an Engineering or Polytechnic diploma in EEE, ECE, EIE, Mechanical, and Mechatronics branches are eligible. Working professionals who wish to upgrade their skills are also eligible."
    },
    {
      q: "What are the courses in Industrial Automation offered at Hitech Automation? Are these courses available online?",
      a: "Yes, Hitech Automation offers specialized courses in PLC, SCADA, HMI, VFD, and Robotics. All of these courses are available online as well as direct in-person classroom mode."
    },
    {
      q: "After completing my Degree/Diploma, if I worked in various other jobs for 5 to 6 years for other reasons, am I still eligible?",
      a: "Yes, there's no need to worry about the period gap. Dedication, commitment, and hard work are the only main requirements to start your learning journey with us!"
    },
    {
      q: "Where can I find job opportunities after completing the courses?",
      a: "There are plenty of job opportunities available in process industries in India and abroad. We are proud that 60% to 70% of our trained students are placed in India and globally. You can follow and monitor the Hitech Automation real-time job updates on the following links:\n\n• Website: hitechautomation.in\n• Telegram Group Channel\n• Instagram Official Page"
    },
    {
      q: "What are the fees for Automation Courses?",
      a: "The exact fee for an automation engineering course depends on the specific course module selected. Hitech Automation offers PLC, SCADA, HMI, VFD, and Robotics courses separately, and their fees are much lower compared to other institutions. The course fee typically ranges from INR 3,000 to INR 15,000 per course. Moreover, Hitech Automation has active MOUs with esteemed colleges/organizations in Andhra Pradesh, so the training fees may vary when compared to individual pricing."
    },
    {
      q: "Where can I find course details?",
      a: "All the comprehensive automation course details are available directly on the Downloads page or you can consult our admission desks."
    },
    {
      q: "Where is Hitech Automation located?",
      a: "Hitech Automation is located in Tadigadapa, Vijayawada, Andhra Pradesh. Exact contact coordinates and directions are available on the Contact Us view page."
    },
    {
      q: "Are there separate batches for working professionals?",
      a: "Yes, Hitech Automation offers various separate batches for both unemployed fresher graduates and active working professionals in online and in-person direct laboratory mode."
    },
    {
      q: "Are there internship opportunities available?",
      a: "Absolutely. Hitech Automation offers authentic lab internships for engineering students. For the latest registration schedules, visit our Internships section."
    },
    {
      q: "Are there industrial training opportunities available?",
      a: "Yes, Hitech Automation offers industrial training for engineering diploma students who wish to work, practice, and learn in a real-time production industrial environment."
    },
    {
      q: "Are there any Final year Engineering projects available?",
      a: "Hitech Automation does not sell pre-made final year academic projects for B.Tech students. The main objective of the AICTE-designed curriculum is for students to learn how to create industrial ideas and implement them practically. Hitech provides the necessary step-by-step training and lab assistance to students to successfully complete their own projects. Additionally, Hitech Automation provides physical PLC kits free of cost for executing projects on a returnable basis."
    },
    {
      q: "Are there industrial training opportunities for Polytechnic students available?",
      a: "Yes, Hitech Automation offers accredited industrial training for diploma students who wish to work in a real-time industrial environment, strictly following the rules and regulations of SBTET."
    },
    {
      q: "Can you provide a certificate after completion of the course? What is its validity for jobs?",
      a: "Yes, Hitech Automation is accredited with AICRA (All India Council for Robotics and Automation) as a training partner. AICRA is a non-profit government organization established by the Government of India. Students are awarded certificates upon course completion. This certification helps professionals stay updated on the latest trends in automation engineering and provides valuable networking opportunities. Certification holders can access exclusive job opportunities, higher salaries, or promotions within their current positions. It demonstrates dedication to one's profession and commitment to staying ahead in automation engineering practices."
    },
    {
      q: "Are there any courses for ITI?",
      a: "Yes, Hitech Automation offers special technician-focused short courses designed for ITI holders to upgrade their skills to meet the current automated industrial panel wiring and diagnostic trends."
    },
    {
      q: "What are the Robotics courses offered at Hitech Automation? Are these courses available online?",
      a: "Yes, Hitech Automation is accredited with AICRA (All India Council for Robotics and Automation) as a training partner. Students are awarded certified credentials upon course completion. This certification helps professionals stay updated on the latest trends in robotics and secure key positions. All these modules are available online as well as direct."
    },
    {
      q: "Are there any school-level Robotics courses offered at Hitech Automation? Are these courses available online?",
      a: "The Central Board of Secondary Education (CBSE) is introducing coding and artificial intelligence (AI) to promote skill education from classes 6 to 8 onwards. The New Education Policy (NEP) 2020 has introduced artificial intelligence to promote skill education, including subjects like coding. Hitech Automation has designed three school-level Robotics courses in line with the New Education Policy (NEP) 2020."
    }
  ];

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans" id="syllabus-and-courses-section">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. SECTION INTRO: About PLC based Industrial Automation */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-205 p-6 sm:p-10 mb-16" id="about-plc-industrial-automation">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Intro Text */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                  <Cpu className="w-4 h-4" />
                </span>
                <span className="text-emerald-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                  Industrial Core Technology
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">
                About PLC based Industrial Automation
              </h2>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                Industrial automation is the use of robotic devices to complete manufacturing tasks. In this day and age of computers, it is becoming increasingly important in the manufacturing process as computerized or robotic machines are capable of handling repetitive and multiple tasks quickly and efficiently with high quality of its output.
              </p>

              {/* Targets audience (Following can do these Trainings) */}
              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span>Following can do these Trainings</span>
                </h4>
                <p className="text-xs text-slate-500 mb-4 italic">
                  (EEE, EIE, ECE, Mechatronics of various Disciplines)
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {audience.map((student, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="bg-emerald-50 text-emerald-950 text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-100 shadow-xs flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      {student}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Areas of Application Grid */}
            <div className="lg:col-span-5 bg-slate-55 bg-slate-100/50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-sm font-black text-[#0a1d37] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Factory className="w-4.5 h-4.5 text-emerald-600" />
                <span>Areas of Application</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {applications.map((app, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg text-xs font-bold text-center border border-slate-200 transition-all hover:scale-[1.02] shadow-xs ${app.bg}`}
                  >
                    {app.title}
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-4 mt-6 border border-slate-200 shadow-xs">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                  Key Training Benefits
                </h4>
                <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                  <p className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-500" /> Professional Lab Faculty</p>
                  <p className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-500" /> 100% Placement Assistance</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. SUBSECTION: Training Activities, Courses List & Methodology */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Col 1: Our Training Activities */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-205 p-6 sm:p-8">
            <h3 className="text-md font-black text-[#0a1d37] uppercase tracking-tight border-b border-slate-100 pb-4 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>Our Training Activities</span>
            </h3>
            <ul className="space-y-3.5">
              {trainingActivities.map((act, index) => (
                <li key={index} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-650">
                  <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-slate-700 leading-snug">{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Industrial Automation Courses & Duration */}
          <div className="bg-[#0b2140] text-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-800">
            <h3 className="text-md font-black uppercase text-sky-400 tracking-tight border-b border-slate-700/60 pb-4 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-sky-400" />
              <span>Courses & Duration</span>
            </h3>
            <div className="space-y-4">
              {coursesDuration.map((crs, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center bg-slate-800/50 hover:bg-slate-800/80 p-3 rounded-lg border border-slate-700/40 transition"
                >
                  <span className="text-xs font-extrabold text-slate-250 text-white uppercase tracking-tight">
                    {crs.name}
                  </span>
                  <span className="bg-sky-500/10 text-sky-400 border border-sky-400/20 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shrink-0">
                    {crs.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Training Methodology */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-205 p-6 sm:p-8">
            <h3 className="text-md font-black text-[#0a1d37] uppercase tracking-tight border-b border-slate-100 pb-4 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-emerald-600" />
              <span>Training Methodology</span>
            </h3>
            <div className="space-y-4">
              {methodology.map((meth, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 hover:bg-emerald-50 text-[#0284c7] font-black text-xs flex flex-col items-center justify-center border border-slate-150 shrink-0 text-center leading-none">
                    <span className="text-[11px] text-emerald-700 font-extrabold">{meth.ratio}</span>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 uppercase tracking-tight leading-none mb-1">
                      {meth.title}
                    </h5>
                    <p className="text-[11px] text-slate-550 text-slate-500 leading-snug">
                      {meth.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* 2.5. PLC Short term Courses Subsection */}
        <div className="bg-white rounded-3xl border border-slate-205 shadow-sm p-6 sm:p-10 mb-16" id="plc-short-term-courses">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#0284c7] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
              ⚡ UPGRADE YOUR TECH SKILLS
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
              PLC Short term Courses
            </h2>
            <div className="w-16 h-1 bg-[#0284c7] mx-auto mt-3 rounded"></div>
            <p className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
              Hitech Automation conducting 100% practical oriented Industrial Automation training for Working professionals to upgrade skills in the areas of PLC programming, Trouble shooting Interfacing with I/Os SCADA, VFD, Instrumentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Allen Bradley */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <div className="aspect-[4/3] bg-white relative overflow-hidden border-b border-slate-100 p-4 flex items-center justify-center">
                  <img
                    src="https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/slc-500_2.jpg"
                    alt="Allen-Bradley SLC 500"
                    className="w-full h-full object-contain hover:scale-102 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base uppercase tracking-tight">
                      ALLEN-BRADLEY
                    </h3>
                    <span className="bg-sky-100 text-sky-850 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shrink-0">
                      Duration: 4 days
                    </span>
                  </div>
                  <div className="space-y-3.5 text-xs text-slate-650 font-medium">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Audience</span>
                      <p className="text-slate-800 font-bold">Anyone needing to maintain or program a SLC-500 PLC</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Prerequisites</span>
                      <p className="text-slate-700 font-bold">Basic knowledge on PLC & Electrical fundamentals</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Course Outline</span>
                      <p className="text-slate-500 leading-relaxed mt-1 text-[11px] font-semibold text-justify">
                        In this module, The fundamental aspects of a SLC-500 system are covered followed by an introduction to RSLogix 500 software, the programming environment for the processor, including memory organization, data table files, and addressing, basic & Advanced instructions. An overview of software and configuring communication drivers to allow the computer to communicate to the various processors will also be covered. At the end of this module students will be comfortable with I/O Configuration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. SIEMENS S7-200 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <div className="aspect-[4/3] bg-white relative overflow-hidden border-b border-slate-100 p-4 flex items-center justify-center">
                  <img
                    src="https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/s7-200_2.jpg"
                    alt="SIEMENS S7-200"
                    className="w-full h-full object-contain hover:scale-102 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base uppercase tracking-tight">
                      SIEMENS S7-200
                    </h3>
                    <span className="bg-sky-100 text-sky-850 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shrink-0">
                      Duration: 5 days
                    </span>
                  </div>
                  <div className="space-y-3.5 text-xs text-slate-650 font-medium">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Audience</span>
                      <p className="text-slate-800 font-bold">Anyone needing to maintain or program a SIEMENS S7-200</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Prerequisites</span>
                      <p className="text-slate-700 font-bold">Basic knowledge on PLC & Electrical fundamentals</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Course Outline</span>
                      <p className="text-slate-500 leading-relaxed mt-1 text-[11px] font-semibold text-justify">
                        In this module, The fundamental aspects of a S7 system are covered followed by an introduction to Microwin software, the programming environment for the processor, including memory organization, data table files, and addressing, basic & Advanced instructions. An overview of software and configuring communication drivers to allow the computer to communicate to the various processors will also be covered. At the end of this module students will be comfortable with I/O Configuration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. SIEMENS S7-300 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <div className="aspect-[4/3] bg-white relative overflow-hidden border-b border-slate-100 p-4 flex items-center justify-center">
                  <img
                    src="https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/s7-300-400-2_2.jpg"
                    alt="SIEMENS S7-300"
                    className="w-full h-full object-contain hover:scale-102 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base uppercase tracking-tight">
                      SIEMENS S7-300
                    </h3>
                    <span className="bg-sky-100 text-sky-850 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shrink-0">
                      Duration: 5 days
                    </span>
                  </div>
                  <div className="space-y-3.5 text-xs text-slate-650 font-medium">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Audience</span>
                      <p className="text-slate-800 font-bold">Anyone needing to maintain or program a SIEMENS S7-300 / 400 PLC</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Prerequisites</span>
                      <p className="text-slate-700 font-bold">Basic knowledge on PLC & Electrical fundamentals</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Course Outline</span>
                      <p className="text-slate-500 leading-relaxed mt-1 text-[11px] font-semibold text-justify">
                        In this module, The fundamental aspects of a S7 system are covered followed by an introduction to SIMATIC MANAGER software, the programming environment for the processor, including memory organization, data table files, and addressing, basic & Advanced instructions. An overview of software and configuring communication drivers to allow the computer to communicate to the various processors will also be covered. At the end of this module students will be comfortable with I/O Configuration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. SIEMENS S7-1200 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <div className="aspect-[4/3] bg-white relative overflow-hidden border-b border-slate-100 p-4 flex items-center justify-center">
                  <img
                    src="https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/cpu-1215_2.jpg"
                    alt="SIEMENS S7-1200"
                    className="w-full h-full object-contain hover:scale-102 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base uppercase tracking-tight">
                      SIEMENS S7-1200
                    </h3>
                    <span className="bg-sky-100 text-sky-850 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shrink-0">
                      Duration: 6 days
                    </span>
                  </div>
                  <div className="space-y-3.5 text-xs text-slate-650 font-medium">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Audience</span>
                      <p className="text-slate-800 font-bold">Anyone needing to maintain or program a SIEMENS S7-1200 PLC</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Prerequisites</span>
                      <p className="text-slate-700 font-bold">Basic knowledge on SIEMENS PLC & Electrical fundamentals</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Course Outline</span>
                      <p className="text-slate-500 leading-relaxed mt-1 text-[11px] font-semibold text-justify">
                        In this module, The fundamental aspects of a S7 system are covered followed by an introduction to TIA Portal software, the programming environment for the processor, including memory organization, data table files, and addressing, basic & Advanced instructions. An overview of software and configuring communication drivers to allow the computer to communicate to the various processors will also be covered. At the end of this module students will be comfortable with I/O Configuration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. DELTA PLC */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between hover:shadow-md transition duration-300 md:col-span-2 lg:col-span-1">
              <div>
                <div className="aspect-[4/3] bg-white relative overflow-hidden border-b border-slate-100 p-4 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center gap-3 w-full h-[85%]">
                    <img
                      src="https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/delta_2.png"
                      alt="Delta Electronics Logo"
                      className="w-[45%] h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      src="https://plcvijayawada.weebly.com/uploads/6/9/2/3/6923375/published/delta-plc_2.jpg"
                      alt="Delta PLC Hardware"
                      className="w-[50%] h-full object-contain rounded-lg border border-slate-100 shadow-xs"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base uppercase tracking-tight">
                      DELTA PLC
                    </h3>
                    <span className="bg-sky-100 text-sky-850 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shrink-0">
                      Duration: 2 days
                    </span>
                  </div>
                  <div className="space-y-3.5 text-xs text-slate-650 font-medium">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Audience</span>
                      <p className="text-slate-800 font-bold">Anyone needing to maintain or program a DELTA PLC</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Prerequisites</span>
                      <p className="text-slate-700 font-bold">Basic knowledge on PLC & Electrical fundamentals</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Course Outline</span>
                      <p className="text-slate-500 leading-relaxed mt-1 text-[11px] font-semibold text-justify">
                        In this module, The fundamental aspects of a DVP system are covered followed by an introduction to WPL software, the programming environment for the processor, including memory organization, data table files, and addressing, basic & Advanced instructions. An overview of DCI software and configuring communication drivers to allow the computer to communicate to the various processors will also be covered. At the end of this module students will be comfortable with I/O Configuration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* 3. ORIGINAL COMPREHENSIVE COURSE SYLLABUS TABS (EXISTING TAB SWITCHER) */}
        <div className="bg-white rounded-3xl border border-slate-205 shadow-sm p-6 sm:p-10 mb-16">
          {/* Header Title */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-emerald-700 text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2">
              📋 COURSEWISE DETAILED TOPICS
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
              Explore Interactive Course Syllabi
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Select a module block from the list below to review exact curriculum sequences we practice in our labs:
            </p>
          </div>

          {/* Tab Switcher Grid */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 pb-2 border-b border-slate-100">
            {COURSES_LIST.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourseId(course.id)}
                className={`px-4 py-2.5 rounded-t-xl text-xs font-bold uppercase tracking-wider transition-all relative cursor-pointer ${
                  selectedCourseId === course.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50 bg-white border border-slate-200 border-b-0'
                }`}
              >
                {course.shortName}
              </button>
            ))}
          </div>

          {/* Active Tab Content displaying syllabus */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left panel: Course metadata overview */}
            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <span className="text-[9px] bg-slate-200 text-slate-800 font-extrabold px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">
                Course Details
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-tight">
                {selectedCourse.name}
              </h3>
              
              <div className="space-y-4 border-t border-slate-200/65 pt-4 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-650">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-450 text-[10px] uppercase tracking-wider text-slate-400">Est. Duration</p>
                    <p className="font-bold text-slate-800 text-xs sm:text-sm">{selectedCourse.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-650">
                  <BookOpen className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-450 text-[10px] uppercase tracking-wider text-slate-400">Format</p>
                    <p className="font-bold text-slate-800 text-xs sm:text-sm">100% Practical Laboratory Exercises</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-650">
                  <Layers className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-450 text-[10px] uppercase tracking-wider text-slate-400">Level</p>
                    <p className="font-bold text-slate-800 text-xs sm:text-sm">Beginner to Industry Standard</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-slate-200">
                <h4 className="text-[10px] font-extrabold text-slate-900 uppercase tracking-widest mb-2">
                  Included Study Materials:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Authorized Course Certificate
                  </li>
                  <li className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Lifetime Lab Assistance Support
                  </li>
                  <li className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Mock Interview Grooming
                  </li>
                  <li className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Custom Printed Learning Material
                  </li>
                </ul>
              </div>
            </div>

            {/* Right panel: Multi-brand week-by-week topic map */}
            <div className="lg:col-span-8 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCourse.id}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-6"
                >
                  {selectedCourse.syllabus.map((mod, index) => (
                    <div
                      key={index}
                      className="bg-slate-50/50 rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-emerald-500 hover:bg-white transition duration-200 relative group"
                    >
                      {/* Floating duration badge */}
                      <span className="absolute top-5 right-5 bg-emerald-50 border border-emerald-250 text-emerald-800 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full select-none">
                        {mod.duration}
                      </span>

                      <h5 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight pr-16">
                        Module {index + 1}: {mod.name}
                      </h5>
                      
                      <p className="text-xs text-slate-500 italic mt-1 leading-relaxed">
                        {mod.description}
                      </p>

                      <div className="border-t border-slate-200/50 my-4"></div>

                      {/* Sub-topics list */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {mod.topics.map((topic, tIdx) => (
                          <div key={tIdx} className="flex gap-2.5 items-start">
                            <div className="w-4 h-4 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 select-none">
                              <ChevronRight className="w-3" />
                            </div>
                            <span className="text-xs text-slate-700 leading-snug">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>


        {/* 4. HIGHLIGHTS SECTION (12 countries, nearly 10 states) */}
        <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 mb-16 border border-emerald-900" id="highlights-global-presence">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="space-y-6">
              <span className="bg-emerald-600/20 text-emerald-350 border border-emerald-550/30 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full text-emerald-400 inline-block">
                🏆 Placements & Global Reach highlights
              </span>
              
              {/* Highlight 1: 12 countries */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-2 decoration-amber-400 decoration-wavy">
                  "Hitech Automation Students are working in 12 countries globally."
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                  We are proud that Hitech Automation has trained professionals in PLC, SCADA, HMI, and Automation working globally in nearly 12 countries including the USA, Australia, UAE, Dubai, Saudi Arabia, Italy, South Africa, Oman, Vietnam, Switzerland, Singapore, and Nigeria.
                </p>
              </div>

              {/* Accent divider */}
              <div className="w-20 h-px bg-emerald-800"></div>

              {/* Highlight 2: 10 states */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-2">
                  "We are proud that Hitech Automation has trained professionals working in nearly 10 states"
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                  We are proud that Hitech Automation has trained professionals working in nearly 10 states <strong>UTTARANCHAL, HIMACHAL PRADESH, MAHARASTRA, KARNATAKA, TELANGANA, GUJARAT, DELHI, TAMILNADU, ANDHRAPRADESH</strong> across India, including all the districts in Andhra Pradesh.
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* 5. DETAILED 16 FAQ ACCORDION SECTION */}
        <div className="bg-white rounded-3xl border border-slate-205 p-6 sm:p-10 mb-16" id="training-faq-section-accordion">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#0284c7] text-xs sm:text-sm font-extrabold uppercase tracking-wider block mb-2">
              💡 Questions & clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#0284c7] mx-auto mt-3 rounded"></div>
            <p className="text-xs sm:text-sm text-slate-500 mt-3">
              Clear your questions regarding our PLC & SCADA courses eligibility, lab timing schedules, fees structure, and certificate validation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50 hover:bg-white hover:border-[#0284c7]/40 transition duration-150 shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 sm:px-6 py-4 flex justify-between items-center gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                    id={`faq-btn-${index}`}
                  >
                    <span className="font-bold text-xs sm:text-sm text-[#0a1d37] leading-tight flex items-start gap-2.5">
                      <span className="text-[#0284c7] select-none shrink-0 font-extrabold">Q.</span>
                      <span>{faq.q}</span>
                    </span>
                    <span className="shrink-0 p-1 bg-slate-100 text-slate-500 rounded-lg">
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-350 ${
                          isOpen ? 'rotate-180 text-[#0284c7]' : ''
                        }`} 
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-slate-200/40 text-xs sm:text-sm text-slate-650 leading-relaxed font-medium text-slate-600">
                          <p className="whitespace-pre-line text-slate-600 bg-white p-3 rounded-xl border border-slate-150/40">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>


        {/* 6. INTERNATIONAL ONLINE TRAINING HERO (15 countries global reach with photo) */}
        <div className="bg-white rounded-3xl border border-slate-205 shadow-sm p-6 sm:p-10" id="international-training-block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: description and stats */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-[#0284c7]/10 text-[#0284c7] px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Student Network</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                ON - LINE PLC, SCADA HMI VFD training to International Students
              </h3>

              <div className="bg-sky-50 border-l-4 border-[#0284c7] p-4 rounded-r-xl">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0a1d37] uppercase tracking-normal mb-1">
                  "Hitech Automation Students are working in 15 countries globally."
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We are proud that Hitech Automation has trained professionals in PLC, SCADA, HMI, and automation working globally in nearly 15 countries, including the USA, Australia, UAE, Dubai, Saudi Arabia, Italy, South Africa, Oman, Vietnam, Switzerland, Singapore, and Nigeria.
                </p>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Our high-speed virtual classroom feeds, live hardware emulator feeds, and interactive digital assignments allow active electrical engineers from any time zone of the globe to connect, design, debug, and learn with absolute core excellence.
              </p>

            </div>

            {/* Right Column: global-11 picture */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest select-none">
                Our Global Alumni Placement Distribution
              </span>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50 p-2.5 w-full max-w-lg hover:scale-[1.015] transition-transform duration-300">
                <img 
                  src="https://6923375-279996968100394202.preview.editmysite.com/uploads/6/9/2/3/6923375/global-11_orig.jpg" 
                  alt="Globally working Hitech Automation Alumni" 
                  className="w-full h-auto object-cover rounded-xl shadow"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
