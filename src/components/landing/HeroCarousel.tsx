'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

const slides = [
  {
    image: '/dashboard-slide-1.png',
    title: {
      en: 'System Dashboard Overview',
      fr: 'Aperçu du Tableau de Bord Système',
      nl: 'Systeem Dashboard Overzicht',
      pl: 'Ogólny Panel Systemowy',
      es: 'Resumen del Panel de Control'
    }
  },
  {
    image: '/dashboard-slide-2.png',
    title: {
      en: 'Appointments & Booking List',
      fr: 'Liste des Rendez-vous & Réservations',
      nl: 'Afspraken & Boekingslijst',
      pl: 'Lista Spotkań i Rezerwacji',
      es: 'Lista de Citas y Reservas'
    }
  },
  {
    image: '/dashboard-slide-3.png',
    title: {
      en: 'Smart Calendar Scheduler',
      fr: 'Planificateur de Calendrier Intelligent',
      nl: 'Slimme Agenda Planner',
      pl: 'Inteligentny Terminarz',
      es: 'Planificador de Calendario Inteligente'
    }
  },
  {
    image: '/dashboard-slide-4.png',
    title: {
      en: 'Therapists & Staff Directory',
      fr: 'Annuaire des Thérapeutes & du Personnel',
      nl: 'Therapeuten & Personeelsgids',
      pl: 'Katalog Terapeutów i Personelu',
      es: 'Directorio de Terapeutas y Personal'
    }
  },
  {
    image: '/dashboard-slide-5.png',
    title: {
      en: 'Support Tickets & Helpdesk',
      fr: "Tickets d'Assistance & Service Client",
      nl: 'Support Tickets & Helpdesk',
      pl: 'Zgłoszenia Wsparcia i Pomoc Techniczna',
      es: 'Tickets de Soporte y Centro de Ayuda'
    }
  }
];

const AUTO_PLAY_TIME = 5000; // 5 seconds

export default function HeroCarousel() {
  const { locale } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Get locale-specific title with fallback to English
  const getSlideTitle = (slide: typeof slides[0]) => {
    const currentLocale = (locale || 'en') as 'en' | 'fr' | 'nl' | 'pl' | 'es';
    return slide.title[currentLocale] || slide.title['en'];
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
    setSliderPosition(50); // Reset slider split to center on slide change
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    setSliderPosition(50); // Reset slider split to center on slide change
  };

  // Drag and reposition the split theme slider
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  // Buttery-smooth timer and progress bar logic with pause on hover
  useEffect(() => {
    if (slides.length <= 1) return;
    if (isHovered) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      return;
    }

    const intervalTime = 30; // 30ms updates for flawless progress visual fluidity
    const step = (intervalTime / AUTO_PLAY_TIME) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          handleNext();
          return 0;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isHovered, currentIndex]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[1900/920] overflow-hidden select-none group shadow-2xl rounded-[1.75rem] bg-[#090b0d] cursor-ew-resize"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => {
        // Prevent manual arrow button clicks from changing slider coordinates
        const target = e.target as HTMLElement;
        if (target.closest('button')) return;
        handleMove(e.clientX);
      }}
    >
      {/* Active Slide Wrapper with cross-fade transition */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Light Mode Layer (Bottom Layer) */}
            <img
              src={slides[currentIndex].image}
              alt={getSlideTitle(slides[currentIndex])}
              className="absolute inset-0 w-full h-full object-cover rounded-[1.75rem]"
            />

            {/* Dark Mode Layer (Top Layer with Clip & Filter styling) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none rounded-[1.75rem]"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={slides[currentIndex].image}
                alt={`${getSlideTitle(slides[currentIndex])} Dark`}
                className="absolute inset-0 w-full h-full object-cover rounded-[1.75rem] brightness-[0.9] invert-[0.9] hue-rotate-[180deg] contrast-[1.1]"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dynamic Vertical Theme Slider Divider Line & Draggable Handle */}
      <div 
        className="absolute top-0 bottom-0 w-[1.5px] bg-white/40 cursor-ew-resize z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-600 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/20 transition-transform group-hover:scale-105 pointer-events-auto active:scale-110">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h18" />
            <path d="M7 8l-4 4 4 4" />
            <path d="M17 8l4 4-4 4" />
          </svg>
        </div>
      </div>

      {/* Glossy overlay for visual screen glass depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none rounded-[1.75rem] z-10" />

      {/* Carousel Navigation Buttons - Hover visible on desktop, always visible on mobile */}
      {slides.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/45 hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-emerald-400 shadow-xl opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 transition-transform duration-200" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/45 hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-emerald-400 shadow-xl opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 transition-transform duration-200" />
          </button>
        </>
      )}

      {/* Premium Thin Progress Timer Bar */}
      {slides.length > 1 && (
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/10 z-30 overflow-hidden rounded-b-[1.75rem]">
          <div 
            className="h-full bg-gradient-to-r from-violet-600 via-purple-500 to-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all duration-[30ms]"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
