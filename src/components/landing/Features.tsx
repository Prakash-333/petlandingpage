import { motion } from 'framer-motion';
import { Check, TrendingDown } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export default function Features() {
  const { t } = useTranslation();
  return (
    <section id="problem" className="pt-10 pb-8 md:pt-16 md:pb-12 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">
        {/* Title Section */}
        <div className="flex justify-center mb-10 md:mb-16">
          <div className="max-w-5xl text-center">
            <h2 className="text-[30px] md:text-[42px] font-bold text-[#121519] leading-tight tracking-tight">
              {t('features.title')}
            </h2>
            <p className="mt-6 text-[16px] md:text-[20px] text-[#576071] font-medium leading-relaxed">
              {t('features.subtitle')}
            </p>
          </div>
        </div>

        {/* Item 1 - Fragmented Reality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-600/10 text-emerald-500 text-xs font-bold mb-4 md:mb-6 uppercase tracking-wider">
              {t('features.reality.badge')}
            </span>
            <h3 className="text-[22px] md:text-[32px] font-bold text-[#121519] mb-4 md:mb-6 leading-tight">
              {t('features.reality.title')}
            </h3>
            <p className="text-slate-900 text-[16px] md:text-[20px] leading-relaxed font-medium mb-8">
              {t('features.reality.description')}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {(t('features.reality.list') as string[]).map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 border border-emerald-300">
                    <Check size={14} strokeWidth={4} />
                  </div>
                  <span className="text-slate-900 text-[14px] md:text-[18px] font-bold leading-tight">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img
              src="/fragmented-reality.png"
              alt="Fragmented Systems"
              className="w-full aspect-video object-cover object-top rounded-2xl shadow-lg p-[2px]"
            />
          </motion.div>
        </div>

        {/* Item 2 - Resulting Inefficiency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/resulting-inefficiency.png"
              alt="Administrative Overload"
              className="w-full aspect-video object-cover object-top rounded-2xl shadow-lg p-[2px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFC814] text-emerald-950 text-xs font-bold mb-4 md:mb-6 uppercase tracking-wider shadow-sm">
              {t('features.inefficiency.badge')}
            </span>
            <h3 className="text-[22px] md:text-[32px] font-bold text-[#121519] mb-4 md:mb-6 leading-tight">
              {t('features.inefficiency.title')}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {(t('features.inefficiency.list') as string[]).map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#FFC814] flex items-center justify-center text-emerald-950 border border-[#FFC814]">
                    <TrendingDown size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-900 text-[14px] md:text-[18px] font-bold leading-tight">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Item 3 - Strategic Insight */}
        <div className="pt-6 md:pt-8 border-t border-slate-100">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <h3 className="text-[18px] md:text-[22px] font-bold text-slate-900 mb-2 md:mb-3 leading-tight tracking-tight">
              {t('features.insight.title')}
            </h3>
            <p className="text-[16px] md:text-[20px] font-medium text-slate-500 leading-relaxed max-w-4xl mx-auto">
              {t('features.insight.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
