'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[1000] p-2.5 sm:p-3 rounded-full bg-[#FFC814] text-emerald-950 shadow-lg shadow-[#FFC814]/30 hover:bg-[#FFC814]/90 transition-all group flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <div className="bg-emerald-950/10 p-1 sm:p-1.5 rounded-full group-hover:bg-emerald-950/20 transition-colors">
            <ChevronUp size={18} className="sm:w-[22px] sm:h-[22px]" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
