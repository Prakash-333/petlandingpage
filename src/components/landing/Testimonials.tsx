'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

const testimonials = [
  {
    id: 'foster',
    name: 'Lilianna Bocouse',
    role: 'Clinic Director',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: '“GreenLane has transformed how we handle patient communication. The AI voice reception has reduced our front-desk workload by 40% while ensuring no patient call goes unanswered. It\'s the infrastructure we didn\'t know we needed.”'
  },
  {
    id: 'klinos',
    name: 'Darell Steward',
    role: 'Operations Manager',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: '“The WhatsApp integration is a game-changer for our specialty clinic. We can now coordinate complex appointments and follow-ups through a single secure channel, improving patient response times significantly and reducing operational friction.”'
  },
  {
    id: 'champion',
    name: 'Annette Black',
    role: 'Practice Manager',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: '“Switching to GreenLane\'s automated scheduling has almost eliminated missed appointments. The system is intuitive for our administrative staff and incredibly convenient for our patients who prefer digital coordination.”'
  }
];

export default function Testimonials() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const activeContent = testimonials[index];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">
        <h2 className="text-[30px] md:text-[42px] font-heading font-semibold text-[#121519] text-center mb-12 md:mb-16">
          Trusted by healthcare providers across Global
        </h2>

        <div className="relative max-w-7xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-[#f6f9fc] rounded-[2.5rem] p-6 sm:p-12 shadow-sm border border-slate-50 relative min-h-[340px] md:min-h-[280px] flex items-center overflow-hidden">
            
            {/* Navigation Arrows - Inside Card */}
            <button 
              onClick={prev}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-slate-100 shadow-md text-slate-400 hover:text-emerald-500 hover:bg-white transition-all z-20"
            >
              <ChevronLeft size={24} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center w-full px-6 sm:px-12 md:px-16"
              >
                <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-slate-200 pb-8 md:pb-0 md:pr-12">
                  <img 
                    src={activeContent.avatar} 
                    alt={activeContent.name} 
                    className="w-[72px] h-[72px] rounded-full mb-5 border-4 border-white shadow-md"
                  />
                  <div>
                    <h4 className="text-[20px] font-bold text-slate-900 mb-1">{activeContent.name}</h4>
                    <p className="text-emerald-500 text-[12px] font-bold uppercase tracking-wider">{activeContent.role}</p>
                  </div>
                </div>
                <div className="md:col-span-8 flex items-center">
                  <p className="text-slate-700 text-[15px] sm:text-[18px] md:text-[20px] font-medium leading-[1.6] italic">
                    {activeContent.quote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button 
              onClick={next}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-slate-100 shadow-md text-slate-400 hover:text-emerald-500 hover:bg-white transition-all z-20"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
