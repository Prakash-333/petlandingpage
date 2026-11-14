'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';

export default function ContactModal() {
  const { t } = useTranslation();
  const { isContactModalOpen, closeContactModal } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      ...data,
      source: 'Contact Modal',
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://n8nprod.digimabbleai.com/webhook/landing-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError(t('contactModal.error') || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    closeContactModal();
    // Reset state after animation
    setTimeout(() => {
      setIsSubmitted(false);
      setError(null);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-12">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('contactModal.successTitle')}</h3>
                  <p className="text-slate-500 font-medium max-w-xs mx-auto">
                    {t('contactModal.successSubtitle')}
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-8 px-8 py-3 bg-[#FFC814] text-emerald-950 font-bold rounded-xl hover:bg-[#FFC814]/90 transition-colors"
                  >
                    {t('contactModal.close')}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">{t('contactModal.title')}</h2>
                    <p className="text-slate-500 font-medium">
                      {t('contactModal.subtitle')}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">
                        {t('contact.form.name')}
                      </label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="John Doe"
                        className="w-full h-[52px] px-5 rounded-lg border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">
                        {t('contact.form.email')}
                      </label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="example@gmail.com"
                        className="w-full h-[52px] px-5 rounded-lg border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">
                        {t('contact.form.phone')}
                      </label>
                      <input 
                        name="phone"
                        type="tel" 
                        placeholder="(123) 456 - 7890"
                        className="w-full h-[52px] px-5 rounded-lg border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">
                        {t('contact.form.company')}
                      </label>
                      <input 
                        required
                        name="company"
                        type="text" 
                        placeholder={t('contact.form.companyPlaceholder')}
                        className="w-full h-[52px] px-5 rounded-lg border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium"
                      />
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-xl border border-red-100">
                        {error}
                      </div>
                    )}

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full h-[56px] bg-emerald-600 text-white font-bold rounded-lg shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group mt-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>{t('contactModal.sending')}</span>
                        </div>
                      ) : (
                        <>
                          {t('contact.form.cta')}
                          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
