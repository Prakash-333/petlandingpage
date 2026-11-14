'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useTranslation();
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
      source: 'Contact Section',
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
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = (t('contact.info.address.offices') as { name: string; address: string }[]) || [];
  const emails = (t('contact.info.email.items') as string[]) || [];
  const phones = (t('contact.info.phone.items') as string[]) || [];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-[-12deg] translate-x-1/3 z-0" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-5"
          >
            <div>
              <h2 className="text-[30px] md:text-[42px] font-heading font-semibold text-[#121519] leading-[1.1] tracking-tight mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-slate-500 text-[16px] md:text-[20px] font-medium leading-relaxed max-w-3xl whitespace-pre-line">
                Whether you are a clinic, healthcare group, hospital, technology partner or healthcare organization exploring AI, we'd like to understand your needs.
                <br /><br />
                Tell us about your organization, your current workflows and the challenges you want to solve. Our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Combined Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-10 md:pt-16">
              {/* Offices */}
              {offices.map((office: any, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm border border-emerald-200/50">
                    <MapPin size={22} className="text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-emerald-600 uppercase tracking-wider mb-1">
                      {office.name}
                    </h4>
                    <p className="text-[15px] font-bold text-slate-800 leading-relaxed pr-4">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}

              {/* Emails */}
              {emails.map((email: string, idx: number) => (
                <div key={`email-${idx}`} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm border border-emerald-200/50">
                    <Mail size={22} className="text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-emerald-600 uppercase tracking-wider mb-1">
                      {t('contact.info.email.title')}
                    </h4>
                    <a 
                      href={`mailto:${email}`}
                      className="text-[16px] font-bold text-slate-800 hover:text-emerald-500 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              ))}

              {/* Phones */}
              {phones.map((phone: string, idx: number) => (
                <div key={`phone-${idx}`} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm border border-emerald-200/50">
                    <Phone size={22} className="text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-emerald-600 uppercase tracking-wider mb-1">
                      {t('contact.info.phone.title')}
                    </h4>
                    <a 
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="text-[16px] font-bold text-slate-800 hover:text-emerald-500 transition-colors whitespace-nowrap"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white p-5 sm:p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                <p className="text-slate-500 font-medium max-w-xs mx-auto">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="source" value="Contact Section" />
                <input type="hidden" name="timestamp" value={new Date().toISOString()} />
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">
                    {t('contact.form.name')}
                  </label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    placeholder="John Doe"
                    className="w-full h-[56px] px-5 rounded-lg border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">
                    {t('contact.form.email')}
                  </label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="example@gmail.com"
                    className="w-full h-[56px] px-5 rounded-lg border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">
                    {t('contact.form.phone')}
                  </label>
                  <input 
                    name="phone"
                    type="tel" 
                    placeholder="(123) 456 - 7890"
                    className="w-full h-[56px] px-5 rounded-lg border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">
                    {t('contact.form.company')}
                  </label>
                  <input 
                    required
                    name="company"
                    type="text" 
                    placeholder={t('contact.form.companyPlaceholder')}
                    className="w-full h-[56px] px-5 rounded-lg border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">
                    {t('contact.form.message')}
                  </label>
                  <textarea 
                    required
                    name="message"
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full min-h-[120px] p-5 rounded-lg border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-medium resize-y"
                  ></textarea>
                </div>

                {error && (
                  <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-xl border border-red-100">
                    {error}
                  </div>
                )}

                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  className={`w-full h-[60px] bg-emerald-600 text-white font-bold rounded-lg shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 group mt-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      {t('contact.form.cta')}
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
