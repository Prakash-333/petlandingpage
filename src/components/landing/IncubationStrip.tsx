'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';
import { Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

export default function IncubationStrip() {
  const { t } = useTranslation();

  return (
    <section className="relative z-10 py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-emerald-50/50 to-white border-y border-emerald-900/10 overflow-hidden">
      {/* Decorative ambient glow spheres */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-400/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/95 backdrop-blur-2xl rounded-3xl sm:rounded-[2.75rem] p-8 sm:p-12 md:p-16 lg:p-20 border-2 border-emerald-200/80 shadow-2xl shadow-emerald-950/8 ring-1 ring-emerald-500/15 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20"
        >
          {/* Logo Showcase - Grand Size with Official Pedestal */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <a
              href="https://www.iitrpr.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              title="Indian Institute of Technology Ropar (Opens official site in new window)"
              className="group relative flex flex-col items-center justify-center w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl sm:rounded-[2.25rem] bg-gradient-to-b from-white to-slate-50/90 border-2 border-emerald-200/90 p-6 sm:p-8 shadow-xl shadow-slate-300/40 hover:shadow-2xl hover:shadow-emerald-900/15 hover:border-emerald-400 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 rounded-3xl sm:rounded-[2.25rem] bg-radial from-emerald-50/50 to-transparent pointer-events-none" />
              
              <img 
                src="/iit-ropar-logo.png" 
                alt="Indian Institute of Technology Ropar Official Emblem" 
                className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300 relative z-10"
              />

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 border border-emerald-200 text-emerald-800 text-[11px] font-bold shadow-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Official Portal</span>
                <ExternalLink size={12} />
              </div>
            </a>

            {/* Sub-label under logo */}
            <div className="mt-3 text-center">
              <span className="inline-block text-xs sm:text-sm font-bold text-slate-800">
                IIT Ropar
              </span>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Institute of National Importance
              </p>
            </div>
          </div>

          {/* Text & Content Column */}
          <div className="flex-1 text-center lg:text-left">
            {/* Header Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs">
                <Sparkles size={14} className="text-emerald-700" />
                <span>{t('incubation.badge') || 'INCUBATION & INNOVATION'}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200/80">
                <ShieldCheck size={15} className="text-emerald-600" />
                <span>{t('incubation.ecosystem') || 'Premier Institute Ecosystem'}</span>
              </div>
            </div>
            
            {/* Main Title - Extra Bold & Large */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              {t('incubation.title') || 'Incubated with IIT Ropar'}
            </h3>
            
            {/* Description Paragraphs */}
            <p className="text-slate-700 text-base sm:text-lg md:text-xl lg:text-[21px] font-medium leading-relaxed max-w-3xl mb-4">
              {t('incubation.description') || 'GreenLane AI is developing intelligent solutions for healthcare communication and operational workflows, with the support of its incubation ecosystem.'}
            </p>
            
            <p className="text-emerald-900 text-sm sm:text-base md:text-lg font-semibold leading-relaxed mb-6">
              {t('incubation.subtext') || 'Our focus is on building practical, responsible AI that helps healthcare organizations work smarter and stay focused on people.'}
            </p>

            {/* 3 Pillar Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-7 text-left">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <div className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5">Deep-Tech Incubation</div>
                <div className="text-[11px] sm:text-xs text-slate-600 leading-snug">Backed by leading academic & engineering research ecosystem.</div>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5">Responsible AI</div>
                <div className="text-[11px] sm:text-xs text-slate-600 leading-snug">Human-centred workflows ensuring safety, privacy & control.</div>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <div className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5">Global Standards</div>
                <div className="text-[11px] sm:text-xs text-slate-600 leading-snug">Designed for diverse, compliant international healthcare clinics.</div>
              </div>
            </div>

            {/* Link & Verification CTA Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href="https://www.iitrpr.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-700/20 hover:shadow-xl hover:shadow-emerald-700/30 hover:-translate-y-0.5 transition-all group"
              >
                <span>{t('incubation.linkText') || 'Visit IIT Ropar Official Portal'}</span>
                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t('incubation.footnote') || 'Indian Institute of Technology Ropar — Technology Innovation Ecosystem'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
