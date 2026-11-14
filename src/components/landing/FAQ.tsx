import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const translatedFaqs = t('faq.list') as { q: string, a: string }[];

  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
             <h2 className="text-[30px] md:text-[42px] font-semibold text-[#121519] mb-6 tracking-tight">
                {t('faq.title')}
             </h2>
             <p className="text-[16px] md:text-[20px] text-[#576071] font-medium leading-relaxed mb-8">
                {t('faq.subtitle')}
             </p>
             <button 
               onClick={() => {
                 const contactSection = document.getElementById('contact');
                 if (contactSection) {
                   contactSection.scrollIntoView({ behavior: 'smooth' });
                 }
               }}
               className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-emerald-700 hover:scale-105 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-emerald-600/20"
             >
                {t('faq.contactSupport')}
             </button>
          </div>

          <div className="lg:col-span-7">
             <div className="space-y-2.5">
                {translatedFaqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-lg border border-[#e3e9ef] overflow-hidden shadow-sm">
                     <button 
                       onClick={() => setOpenIndex(openIndex === i ? null : i)}
                       className="w-full p-4 md:p-5 flex items-center justify-between text-left group"
                     >
                        <span className={`text-[15px] md:text-[18px] font-bold transition-colors ${openIndex === i ? 'text-emerald-500' : 'text-[#121519]'}`}>
                          {faq.q}
                        </span>
                        <div className={`w-6 h-6 rounded-full border border-[#e3e9ef] flex items-center justify-center transition-all ${openIndex === i ? 'bg-emerald-600 border-emerald-500 text-white' : 'text-[#121519] group-hover:bg-[#f6f9fc]'}`}>
                           {openIndex === i ? <Minus size={12} strokeWidth={3} /> : <Plus size={12} strokeWidth={3} />}
                        </div>
                     </button>
                     <AnimatePresence>
                        {openIndex === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                             <div className="p-5 pt-0 text-[#576071] text-[15px] md:text-[18px] font-medium leading-relaxed">
                                {faq.a}
                             </div>
                          </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
