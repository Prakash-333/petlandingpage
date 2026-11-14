'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';

export function Segmentation() {
  return null; 
}

export function DarkHighlight() {
  const { t } = useTranslation();
  
  const pillarsList = t('pillars.list') as { title: string; desc: string }[];

  return (
    <section id="solution" className="bg-[#121519] border-t border-[#e3e9ef]/10 py-8 md:py-12" data-bs-theme="dark">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">
        {/* Centered Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[30px] md:text-[42px] font-semibold text-white leading-tight tracking-tight max-w-4xl mx-auto mb-6">
            {t('pillars.title')}
          </h2>
          <h3 
            className="text-[18px] md:text-[22px] font-bold text-[#FFC814] max-w-4xl mx-auto mb-4 text-left leading-snug pl-8 md:pl-12"
            style={{ textIndent: '-2rem' }}
          >
            {(() => {
              const text = (t('pillars.subtitle') || '') as string;
              if (text.includes('and operations.')) {
                return (
                  <>
                    {text.replace('and operations.', '')}
                    <span className="block text-center mt-1" style={{ textIndent: '0' }}>and operations</span>
                  </>
                );
              }
              return text;
            })()}
          </h3>
          <p 
            className="text-[16px] md:text-[20px] font-medium text-white/70 max-w-4xl mx-auto text-left leading-relaxed pl-8 md:pl-12"
            style={{ textIndent: '-2rem' }}
          >
            {(() => {
              const text = (t('pillars.description') || '') as string;
              if (text.includes('people in control.')) {
                return (
                  <>
                    {text.replace('people in control.', '')}
                    <span className="block text-center mt-1" style={{ textIndent: '0' }}>people in control</span>
                  </>
                );
              }
              return text;
            })()}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-20 items-center">
          
          {/* Points List - Left */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="space-y-1.5 md:space-y-2">
              {pillarsList.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#FFC814] flex items-center justify-center text-emerald-950">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-0.5 leading-tight">{item.title}</h3>
                    <p className="text-white/60 text-[16px] md:text-[20px] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Static Visual - Right */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[680px] lg:pl-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-center w-full"
              >
                {/* Image */}
                <img 
                  src="/platform-visual.png" 
                  alt="GreenLane Solution Visual" 
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover block ring-1 ring-white/10"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
