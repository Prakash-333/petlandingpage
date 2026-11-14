'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from '../Icons'; // Assuming Linkedin icon is here
import { useModal } from '@/context/ModalContext';
import { useTranslation } from '@/context/LanguageContext';

export default function Founder() {
  const { openBookDemoModal } = useModal();
  const { t } = useTranslation();

  return (
    <section id="founder" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image & Basic Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8 rounded-full overflow-hidden border-4 border-emerald-100 shadow-xl">
              <img src="/founder.jpg" alt={t('founder.name') || 'Manivannan Babu'} className="w-full h-full object-cover" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{t('founder.name') || 'Manivannan Babu'}</h2>
            <p className="text-xl text-emerald-600 font-medium mb-6">{t('founder.role') || 'Founder & CEO, GreenLane AI'}</p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  openBookDemoModal();
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors shadow-sm"
              >
                {t('founder.meetFounder') || 'Meet the Founder'}
              </button>
              <a 
                href="https://www.linkedin.com/in/manivannan-babu/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-700 font-medium border border-slate-200 hover:bg-slate-50 hover:text-emerald-600 transition-colors shadow-sm"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                {t('founder.connectLinkedin') || 'Connect on LinkedIn'}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Quote and Bullets */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-10 relative">
              <svg className="absolute -top-6 -left-6 w-12 h-12 text-emerald-500/20 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium italic relative z-10">
                {t('founder.quote') || '"I founded GreenLane AI with a simple belief: healthcare should be easier to access, easier to operate and more connected. AI can help healthcare organizations reduce repetitive work, connect fragmented processes and give teams more time to focus on people. GreenLane starts with the interactions and workflows where AI can create immediate value. Our long-term vision is to build the intelligent infrastructure that connects the healthcare ecosystem."'}
              </blockquote>
            </div>

            <ul className="space-y-4 text-slate-600 text-lg">
              {((t('founder.bullets') as unknown as string[]) || [
                "Founder of Digi Mabble, an AI technology company.",
                "Building AI-powered solutions for healthcare and businesses across international markets.",
                "Focused on responsible, secure and scalable healthcare technology.",
                "Based in Europe with engineering and product capabilities across Europe and India.",
                "Building GreenLane as a global healthcare technology platform."
              ]).map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-1 mr-3">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
