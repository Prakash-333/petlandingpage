import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export default function Benefits() {
  const { t } = useTranslation();
  const translatedBenefits = t('benefits.list') as string[];

  return (
    <section id="why-now" className="py-12 md:py-20 bg-white text-[#121519] overflow-hidden relative">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] md:text-[38px] font-semibold text-[#121519] leading-tight tracking-tight">
            {t('benefits.title')}
          </h2>
          <p className="mt-6 text-[20px] md:text-[20px] font-semibold text-slate-500 max-w-4xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {translatedBenefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 bg-[#FFC814] p-3.5 md:p-4 rounded-xl border border-[#FFC814]/40 hover:bg-[#FFF0B3] hover:shadow-lg hover:shadow-[#FFF0B3]/10 transition-all group"
            >
              <div className="flex-shrink-0 text-emerald-600 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={20} strokeWidth={2.5} />
              </div>
              <span className="text-[15px] md:text-[17px] font-semibold text-slate-800">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
