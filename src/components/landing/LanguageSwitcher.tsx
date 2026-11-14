'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/context/LanguageContext';
import { Locale } from '@/translations';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages: { code: Locale; name: string; flagCode: string }[] = [
  { code: 'en', name: 'English', flagCode: 'gb' },
  { code: 'fr', name: 'French', flagCode: 'fr' },
  { code: 'nl', name: 'Dutch', flagCode: 'nl' },
  { code: 'pl', name: 'Polish', flagCode: 'pl' },
  { code: 'es', name: 'Spanish', flagCode: 'es' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((l) => l.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2.5 h-[38px] rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-all active:scale-[0.98] shadow-sm group"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <img 
          src={`https://flagcdn.com/${currentLanguage.flagCode}.svg`} 
          alt=""
          className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm" 
        />
        <span className="text-[13px] font-bold uppercase tracking-wider text-slate-600">{currentLanguage.code}</span>
        <ChevronDown 
          size={14} 
          strokeWidth={2.5}
          className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-max min-w-[150px] bg-white rounded-xl border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] overflow-hidden z-[110]"
          >
            <div className="py-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLocale(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13.5px] font-semibold transition-colors
                    ${locale === lang.code ? 'text-emerald-600 bg-emerald-100' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <img 
                    src={`https://flagcdn.com/${lang.flagCode}.svg`} 
                    alt=""
                    className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm shrink-0" 
                  />
                  <span className="flex-1 text-left">{lang.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
