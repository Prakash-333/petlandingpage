'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, PieChart, Target, ChevronRight, Settings2 } from 'lucide-react';
import { useCookieConsent } from '@/context/CookieContext';
import { useTranslation } from '@/context/LanguageContext';

export default function CookieConsent() {
  const { t } = useTranslation();
  const { 
    hasConsented, 
    showSettings, 
    preferences, 
    setPreferences, 
    acceptAll, 
    rejectAll, 
    openSettings, 
    closeSettings,
    isLoaded
  } = useCookieConsent();

  const [tempPrefs, setTempPrefs] = useState(preferences);

  // Sync temp prefs with global prefs when modal opens
  useEffect(() => {
    if (showSettings) {
      setTempPrefs(preferences);
    }
  }, [showSettings, preferences]);

  // Body scroll lock
  useEffect(() => {
    const isModalActive = (!hasConsented && isLoaded) || showSettings;
    if (isModalActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [hasConsented, isLoaded, showSettings]);

  const handleSavePreferences = () => {
    setPreferences(tempPrefs);
  };

  const togglePreference = (key: keyof typeof tempPrefs) => {
    if (key === 'essential') return; // Cannot toggle essential
    setTempPrefs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // IMPORTANT: All hooks MUST be called before this return
  if (!isLoaded) return null;

  return (
    <>
      {/* Cookie Banner & Backdrop */}
      <AnimatePresence>
        {!hasConsented && !showSettings && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/35 z-[1000] backdrop-blur-[2px]"
            />
            
            {/* Banner Container */}
            <div className="fixed inset-x-0 bottom-0 z-[1001] px-6 md:px-12 pb-6 md:pb-10 flex justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="w-full max-w-[1100px] bg-white rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.25)] border border-slate-100 overflow-hidden pointer-events-auto"
              >
                <div className="p-6 md:p-7 px-6 md:px-12">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3 leading-none">
                      <div className="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                        <ShieldCheck className="text-white" size={14} />
                      </div>
                      <h3 className="text-[18px] font-bold text-slate-900 tracking-tight m-0 p-0">{t('cookieConsent.title')}</h3>
                    </div>
                    <p className="text-[13px] text-slate-500 leading-relaxed">
                      {t('cookieConsent.description')}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                      onClick={openSettings}
                      className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-100 px-4 py-2.5 rounded-xl font-bold text-[13px] hover:border-slate-200 transition-all active:scale-[0.98] order-1 md:order-1"
                    >
                      <Settings2 size={14} className="text-slate-400" />
                      {t('cookieConsent.customize')}
                    </button>
                    <button
                      onClick={rejectAll}
                      className="bg-white text-slate-900 border border-slate-100 px-4 py-2.5 rounded-xl font-bold text-[13px] hover:border-slate-200 transition-all active:scale-[0.98] order-2 md:order-2"
                    >
                      {t('cookieConsent.rejectAll')}
                    </button>
                    <button
                      onClick={acceptAll}
                      className="bg-slate-900 text-white border border-slate-900 px-4 py-2.5 rounded-xl font-bold text-[13px] hover:bg-slate-800 transition-all active:scale-[0.98] order-3 md:order-3"
                    >
                      {t('cookieConsent.acceptAll')}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Preferences Modal */}
      <AnimatePresence>
        {showSettings && (
          <div className="fixed inset-0 z-[1010] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSettings}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              className="relative w-full max-w-[480px] bg-white rounded-[24px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden font-sans"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">{t('cookieConsent.settingsTitle')}</h2>
                    <p className="text-[13px] text-slate-400 mt-0.5">{t('cookieConsent.settingsSubtitle')}</p>
                  </div>
                  <button 
                    onClick={closeSettings}
                    className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <X size={18} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Essential */}
                  <div className="flex items-start gap-4 p-3 rounded-xl border border-slate-50">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-emerald-500" size={16} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="font-bold text-slate-900 text-[14px]">{t('cookieConsent.essentialTitle')}</h4>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{t('cookieConsent.required')}</span>
                      </div>
                      <p className="text-[12px] text-slate-500 leading-relaxed">{t('cookieConsent.essentialDesc')}</p>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div 
                    onClick={() => togglePreference('analytics')}
                    className="flex items-start gap-4 p-3 rounded-xl border border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <PieChart className="text-blue-600" size={16} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="font-bold text-slate-900 text-[14px]">{t('cookieConsent.analyticsTitle')}</h4>
                        <button
                          className={`w-9 h-5 rounded-full transition-all duration-300 relative ${tempPrefs.analytics ? 'bg-emerald-1000' : 'bg-slate-200'}`}
                        >
                          <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${tempPrefs.analytics ? 'translate-x-4' : 'translate-x-0'}`} />
                        </button>
                      </div>
                      <p className="text-[12px] text-slate-500 leading-relaxed">{t('cookieConsent.analyticsDesc')}</p>
                    </div>
                  </div>

                  {/* Marketing */}
                  <div 
                    onClick={() => togglePreference('marketing')}
                    className="flex items-start gap-4 p-3 rounded-xl border border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                      <Target className="text-purple-600" size={16} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="font-bold text-slate-900 text-[14px]">{t('cookieConsent.marketingTitle')}</h4>
                        <button
                          className={`w-9 h-5 rounded-full transition-all duration-300 relative ${tempPrefs.marketing ? 'bg-emerald-1000' : 'bg-slate-200'}`}
                        >
                          <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${tempPrefs.marketing ? 'translate-x-4' : 'translate-x-0'}`} />
                        </button>
                      </div>
                      <p className="text-[12px] text-slate-500 leading-relaxed">{t('cookieConsent.marketingDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="flex gap-4 w-full sm:w-auto order-2 sm:order-1 justify-center sm:justify-start">
                  <button
                    onClick={() => {
                      setTempPrefs({ essential: true, analytics: false, marketing: false });
                    }}
                    className="text-slate-500 hover:text-slate-900 font-bold text-[13px] transition-colors"
                  >
                    {t('cookieConsent.rejectAll')}
                  </button>
                  <button
                    onClick={() => {
                      setTempPrefs({ essential: true, analytics: true, marketing: true });
                    }}
                    className="text-emerald-600 hover:text-emerald-600 font-bold text-[13px] transition-colors"
                  >
                    {t('cookieConsent.acceptAll')}
                  </button>
                </div>
                <button
                  onClick={handleSavePreferences}
                  className="w-full sm:w-auto order-1 sm:order-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-[13px] hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {t('cookieConsent.save')}
                  <ChevronRight size={14} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
