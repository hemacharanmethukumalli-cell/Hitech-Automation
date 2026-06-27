import React, { useState } from 'react';
import { COMPANY_CONTACT, FAQS_LIST } from '../types';
import { Phone, Mail, MapPin, Clock, Calendar, HelpCircle, ChevronDown, ChevronUp, Send, CheckCircle2, Globe } from 'lucide-react';

export default function ContactSection() {
  // FAQS Accordion selection
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Core Form tracking state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'PLC (Programmable Logic Controllers)',
    batchType: 'Regular Batch',
    message: ''
  });

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a secure, non-blocking local API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: 'PLC (Programmable Logic Controllers)',
        batchType: 'Regular Batch',
        message: ''
      });
    }, 900);
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="contact-and-help-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 text-sm font-extrabold uppercase tracking-widest block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl tracking-tight">
            Contact Us & Find Our Location
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-4 rounded"></div>
          <p className="mt-4 text-base text-gray-600">
            Have questions about fee structures, course timings, or project approvals? Fill out the brief form below or walk directly into our ISO Certified center on Gopala Reddy Road.
          </p>
        </div>

        {/* Core Layout containing Map, Form, & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* Left panel (6 cols): Contact cards list + Visual map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Cards Area */}
            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-gray-900 border-b border-gray-100 pb-2">
                Hitech Automation Laboratory
              </h3>
              
              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[10px] uppercase text-slate-400 tracking-wider">Core Office Address</h4>
                  <p className="text-sm text-slate-800 font-bold mt-1 leading-normal">
                    {COMPANY_CONTACT.address}
                  </p>
                  <p className="text-xs text-emerald-700 font-bold mt-1.5">
                    📍 Landmark: {COMPANY_CONTACT.landmark}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[10px] uppercase text-slate-400 tracking-wider">Phone Numbers (Direct Lab Line)</h4>
                  <div className="flex flex-col gap-1.5 mt-1 text-sm text-slate-800 font-semibold">
                    {COMPANY_CONTACT.phoneNumbers.map((num, i) => (
                      <a key={i} href={`tel:${num}`} className="hover:text-emerald-600 hover:underline">
                        📱 {num}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[10px] uppercase text-slate-400 tracking-wider">Official emails</h4>
                  <div className="flex flex-col gap-1.5 mt-1 text-sm text-slate-800 font-semibold">
                    {COMPANY_CONTACT.emails.map((email, i) => (
                      <a key={i} href={`mailto:${email}`} className="hover:text-emerald-600 hover:underline truncate break-all">
                        📧 {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {COMPANY_CONTACT.websites && (
                <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <Globe className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[10px] uppercase text-slate-400 tracking-wider">Official Websites</h4>
                    <div className="flex flex-col gap-1.5 mt-1 text-sm text-slate-800 font-semibold">
                      {COMPANY_CONTACT.websites.map((web, i) => {
                        const targetUrl = web.startsWith('http') ? web : `https://${web}`;
                        return (
                          <a key={i} href={targetUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 hover:underline truncate break-all">
                            🌐 {web}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Custom high-fidelity styled visual representation of a map */}
            <div className="bg-emerald-800 text-white p-6 rounded-2xl shadow-sm border border-emerald-900/50 relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:24px_24px]"></div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 bg-emerald-700 text-xs font-bold px-2.5 py-1 rounded mb-3">
                  📍 Tadigadapa, Vijayawada Route
                </div>
                <h4 className="font-black text-lg">L.V Prasad Eye Institute road</h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed mt-1 max-w-sm">
                  We are conveniently located on Brundavanam Street along L.V Prasad Eye Institute road in Tadigadapa, Vijayawada. This is an extremely accessible area for all engineering students.
                </p>
              </div>

              <div className="relative pt-6 mt-4 border-t border-emerald-700 flex justify-between items-center">
                <div>
                  <p className="text-xs text-emerald-200">Hitech Training Lab</p>
                  <p className="text-xs font-bold text-white">Vijayawada, AP 521137</p>
                </div>
                <a
                  href={COMPANY_CONTACT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-xs px-4 py-2 rounded-lg shadow-sm transition inline-block uppercase tracking-wider"
                >
                  Open in Maps &rarr;
                </a>
              </div>
            </div>

          </div>

          {/* Right panel (7 cols): Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-1">
                Academic & Project Enquiry Form
              </h3>
              <p className="text-xs text-gray-500 mb-6 font-medium">
                Complete this quick registration to lock in your free lab demo slot or request fee detail catalogs.
              </p>

              {isSubmitSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-4 my-auto h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-emerald-950">
                      Enquiry Registered Successfully!
                    </h4>
                    <p className="text-sm text-emerald-850 mt-1 max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting HITECH AUTOMATION. One of our laboratory instructors will call or WhatsApp you within 2 hours to explain fee structures, starting times, and seat allotments.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitSuccess(false)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-lg"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 pl-0.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Prasad Rao"
                        required
                        className="w-full bg-gray-50 border border-gray-200 focus:border-emerald-600 focus:bg-white rounded-lg px-4 py-3 text-sm font-semibold transition outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 pl-0.5">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98858 XXXXX"
                        required
                        className="w-full bg-gray-50 border border-gray-200 focus:border-emerald-600 focus:bg-white rounded-lg px-4 py-3 text-sm font-semibold transition outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 pl-0.5">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. prasad.engg@gmail.com"
                      required
                      className="w-full bg-gray-50 border border-gray-200 focus:border-emerald-600 focus:bg-white rounded-lg px-4 py-3 text-sm font-semibold transition outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 pl-0.5">
                        Course Preference
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-emerald-600 focus:bg-white rounded-lg px-4 py-3 text-sm font-bold text-gray-700 transition outline-hidden cursor-pointer"
                      >
                        <option>PLC (Programmable Logic Controllers)</option>
                        <option>SCADA Interface Systems</option>
                        <option>VFD drives & speed controls</option>
                        <option>HMI physical screen layouts</option>
                        <option>All-In-One Integrated Premium Course</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 pl-0.5">
                        Preferable Batch Type
                      </label>
                      <select
                        name="batchType"
                        value={formData.batchType}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-emerald-600 focus:bg-white rounded-lg px-4 py-3 text-sm font-bold text-gray-700 transition outline-hidden cursor-pointer"
                      >
                        <option>Regular Batch (Daily 2 Hours)</option>
                        <option>Fast Track Batch (Daily 4 Hours)</option>
                        <option>Weekend Express Batch Only</option>
                        <option>Final Year Academic Project Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 pl-0.5">
                      A short message or request details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="e.g. I want to secure a free slot for next Monday's practical session, please advise course fees details."
                      className="w-full bg-gray-50 border border-gray-200 focus:border-emerald-600 focus:bg-white rounded-lg px-4 py-3 text-sm font-semibold transition outline-hidden resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-extrabold px-6 py-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Registration & Inquire</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="border-t border-gray-100 pt-5 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
              <span className="font-semibold flex items-center gap-1">
                🔒 Safe & Secure SSL Encryption
              </span>
              <span className="font-medium text-emerald-700">
                ⭐ Rated 4.9/5 by 250+ Engineering Graduates
              </span>
            </div>
          </div>

        </div>

        {/* FAQs Accordion Block */}
        <div className="pt-10 border-t border-gray-100 max-w-3xl mx-auto" id="training-faqs-block">
          <h3 className="text-xl font-black text-gray-900 mb-8 text-center">
            Frequently Asked Core Questions
          </h3>

          <div className="space-y-4">
            {FAQS_LIST.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden transition"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 py-4.5 font-bold text-gray-800 text-sm sm:text-base flex justify-between items-center hover:bg-gray-100 transition cursor-pointer"
                  >
                    <span className="pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1.5 text-sm text-gray-650 leading-relaxed text-gray-600 border-t border-gray-200/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
