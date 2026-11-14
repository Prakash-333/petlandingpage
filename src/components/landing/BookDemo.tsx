'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';
import { 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ChevronRight,
  X
} from 'lucide-react';

export default function BookDemoModal() {
  const { t } = useTranslation();
  const { isBookDemoModalOpen, closeBookDemoModal } = useModal();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Reset submission state when modal closes
  useEffect(() => {
    if (!isBookDemoModalOpen) {
      setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
        setError(null);
      }, 300);
    }
  }, [isBookDemoModalOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      ...data,
      source: 'Book Demo Modal',
      timestamp: new Date().toISOString(),
    };

    console.log('Sending to n8n:', payload);

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
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isBookDemoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBookDemoModalOpen]);

  return (
    <AnimatePresence>
      {isBookDemoModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBookDemoModal}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`relative w-full overflow-hidden flex flex-col border border-white/20 transition-all duration-500 ${
              isSubmitted ? 'max-w-[500px] bg-white rounded-[24px]' : 'max-w-[640px] max-h-[90vh] bg-white rounded-[28px]'
            }`}
          >
            {/* Close Button */}
            <button 
              onClick={closeBookDemoModal}
              className="absolute top-5 right-5 z-20 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-all active:scale-95"
            >
              <X size={20} />
            </button>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full py-16 px-8 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-8">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-emerald-300">
                      <CheckCircle2 size={28} className="text-emerald-500" />
                    </div>
                  </div>
                  
                  <h2 className="text-[28px] font-bold text-slate-900 mb-4">{t('bookDemoSection.success.title')}</h2>
                  
                  <p className="text-slate-500 text-[20px] leading-relaxed mb-10 max-w-[320px]">
                    {t('bookDemoSection.success.subtitle')}
                  </p>
                  
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3 rounded-xl bg-[#FFC814] text-emerald-950 font-bold hover:bg-[#FFC814]/90 transition-all active:scale-95 shadow-sm"
                  >
                    {t('bookDemoSection.success.cta')}
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  {/* FORM CONTENT */}
                  <div className="p-5 sm:p-10 md:p-12 overflow-y-auto max-h-[85vh]">
                    <div className="max-w-xl mx-auto">
                      <div className="mb-8">
                        <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 mb-3 leading-tight tracking-tight">
                          {t('bookDemoSection.title')}
                        </h2>
                        <p className="text-slate-600 text-[15px] md:text-[20px] leading-relaxed">
                          {t('bookDemoSection.subtitle')}
                        </p>
                      </div>

                      <form className="space-y-5" onSubmit={handleSubmit}>
                        <input type="hidden" name="source" value="Book Demo Modal" />
                        <input type="hidden" name="timestamp" value={new Date().toISOString()} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[13px] font-bold text-slate-700 ml-1">
                              {t('bookDemoSection.form.fullName')} <span className="text-red-500">*</span>
                            </label>
                            <input 
                              required
                              name="name"
                              type="text" 
                              placeholder="John Doe"
                              className="w-full h-[52px] px-4 rounded-lg border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[13px] font-bold text-slate-700 ml-1">
                              {t('bookDemoSection.form.workEmail')} <span className="text-red-500">*</span>
                            </label>
                            <input 
                              required
                              name="email"
                              type="email" 
                              placeholder="john@clinic.com"
                              className="w-full h-[52px] px-4 rounded-lg border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[13px] font-bold text-slate-700 ml-1">
                              {t('bookDemoSection.form.clinicName')} <span className="text-red-500">*</span>
                            </label>
                            <input 
                              required
                              name="clinicName"
                              type="text" 
                              placeholder="City Health Center"
                              className="w-full h-[52px] px-4 rounded-lg border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[13px] font-bold text-slate-700 ml-1">
                              {t('bookDemoSection.form.role')}
                            </label>
                            <input 
                              name="role"
                              type="text" 
                              placeholder="Clinic Manager"
                              className="w-full h-[52px] px-4 rounded-lg border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[13px] font-bold text-slate-700 ml-1">
                            {t('bookDemoSection.form.size')}
                          </label>
                          <input 
                            name="size"
                            type="text" 
                            placeholder="e.g. 5 Clinics or 10,000+ Patients"
                            className="w-full h-[52px] px-4 rounded-lg border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[13px] font-bold text-slate-700 ml-1">
                            {t('bookDemoSection.form.message')}
                          </label>
                          <textarea 
                            name="message"
                            rows={3}
                            placeholder="Tell us about your current challenges..."
                            className="w-full p-4 rounded-lg border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all resize-none"
                          ></textarea>
                        </div>


                        {error && (
                          <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                            {error}
                          </div>
                        )}

                        <motion.button 
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                          className={`w-full h-[56px] bg-[#FFC814] text-emerald-950 font-bold rounded-lg shadow-lg hover:bg-[#FFC814]/90 transition-all flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 border-2 border-emerald-950/30 border-t-emerald-950 rounded-full animate-spin" />
                              <span>{t('bookDemoSection.form.submitting')}</span>
                            </div>
                          ) : (
                            <>
                              {t('bookDemoSection.form.cta')}
                              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
