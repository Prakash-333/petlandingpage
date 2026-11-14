import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, Server } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export default function Security() {
  const { t } = useTranslation();
  const translatedFeatures = t('security.features') as string[];

  return (
    <section id="gdpr" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-16 md:gap-24 max-w-6xl mx-auto">
          
          {/* Text Content - Top */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h2 className="text-[30px] md:text-[42px] font-semibold text-[#121519] mb-6 md:mb-8 leading-tight tracking-tight">
              {t('security.title')}
            </h2>
            <div className="space-y-6 mb-10">
              <p className="text-[#576071] text-[16px] md:text-[20px] leading-relaxed font-semibold whitespace-pre-line">
                {t('security.desc1')}
              </p>
              <p className="text-[#576071] text-[16px] md:text-[20px] leading-relaxed font-semibold whitespace-pre-line">
                {t('security.desc2')}
              </p>
            </div>

            <h4 className="text-[18px] md:text-[22px] font-bold text-[#121519] mb-6">{t('security.featuresTitle')}</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-8">
              {translatedFeatures.map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-900 font-bold text-[15px] md:text-[18px]">
                  <div className="flex-shrink-0 text-emerald-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Commitment Cards - Bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          >
            {/* Responsible AI Card */}
            <div className="bg-[#f6f9fc] p-6 sm:p-8 md:p-10 rounded-[2.5rem] border border-slate-100 text-center flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 flex items-center justify-center bg-white rounded-full shadow-sm overflow-hidden">
                <img 
                  src="/responsible-ai.jpg" 
                  alt="Responsible AI" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '10% 50%', transform: 'scale(1.3)' }}
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>';
                  }}
                />
              </div>
              <h3 className="text-[20px] font-bold text-slate-900 mb-4">{t('security.responsibleAiTitle')}</h3>
              <p className="text-[15px] md:text-[18px] text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                {t('security.responsibleAiDesc')}
              </p>
            </div>

            {/* GDPR Commitment Card */}
            <div className="bg-[#f6f9fc] p-6 sm:p-8 md:p-10 rounded-[2.5rem] border border-slate-100 text-center flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 flex items-center justify-center">
                <img 
                  src="/gdpr-badge.jpg" 
                  alt="GDPR Compliance Seal" 
                  className="w-full h-auto mix-blend-multiply object-contain"
                />
              </div>
              
              <h3 className="text-[20px] font-bold text-slate-900 mb-4">{t('security.commitmentTitle')}</h3>
              <p className="text-[15px] md:text-[18px] text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                {t('security.commitmentDesc')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
