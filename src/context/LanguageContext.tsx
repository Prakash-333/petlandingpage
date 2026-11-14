'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale } from '../translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    // 1. Check if user is on domain or testing ?domain=pl on localhost
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (hostname.endsWith('.pl') || hostname.includes('greenlaneai.pl') || search.includes('domain=pl')) {
        setLocaleState('pl');
        return;
      }
      if (hostname.endsWith('.es') || hostname.includes('greenlaneai.es') || search.includes('domain=es')) {
        setLocaleState('es');
        return;
      }
      if (hostname.endsWith('.fr') || hostname.includes('greenlaneai.fr') || search.includes('domain=fr')) {
        setLocaleState('fr');
        return;
      }
      if (hostname.endsWith('.nl') || hostname.includes('greenlaneai.nl') || search.includes('domain=nl')) {
        setLocaleState('nl');
        return;
      }
    }

    const userSelectedLocale = localStorage.getItem('user_selected_locale') as Locale;
    if (userSelectedLocale && ['en', 'fr', 'nl', 'pl', 'es'].includes(userSelectedLocale)) {
      setLocaleState(userSelectedLocale);
      return;
    }

    try {
      // Detect language based on system timezone
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      let detectedLocale: Locale = 'en';

      if (timeZone.includes('Paris') || timeZone.includes('Brussels') || timeZone.includes('Belgium') || timeZone.includes('France')) {
        detectedLocale = 'fr';
      } else if (timeZone.includes('Amsterdam') || timeZone.includes('Netherlands')) {
        detectedLocale = 'nl';
      } else if (timeZone.includes('Warsaw') || timeZone.includes('Poland') || timeZone.includes('Sarajevo') || timeZone.includes('Skopje') || timeZone.includes('Zagreb')) {
        detectedLocale = 'pl';
      } else if (['Madrid', 'Canary', 'Ceuta', 'Mexico', 'Bogota', 'Buenos_Aires', 'Santiago', 'Lima', 'Caracas', 'Havana', 'Guatemala', 'Guayaquil', 'Santo_Domingo', 'La_Paz', 'Asuncion', 'Montevideo', 'Panama', 'Puerto_Rico', 'Costa_Rica', 'El_Salvador', 'Tegucigalpa', 'Managua'].some(zone => timeZone.includes(zone))) {
        detectedLocale = 'es';
      } else if (typeof navigator !== 'undefined') {
        const browserLang = navigator.language.split('-')[0];
        if (['en', 'fr', 'nl', 'pl', 'es'].includes(browserLang)) {
          detectedLocale = browserLang as Locale;
        }
      }
      
      setLocaleState(detectedLocale);
    } catch (e) {
      setLocaleState('en');
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('user_selected_locale', newLocale);
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[locale];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        // Fallback to English if key missing in current locale
        let fallback: any = translations['en'];
        for (const fKey of keys) {
          if (fallback[fKey] === undefined) return path;
          fallback = fallback[fKey];
        }
        return fallback;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
