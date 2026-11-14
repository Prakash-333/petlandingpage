import { motion } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';

export default function WhoItsFor() {
  const { t } = useTranslation();
  const providers = t('whoItsFor.providers') as string[];
  const stats = t('whoItsFor.stats') as { value: string, label: string }[];

  return (
    <section id="audience" className="py-12 md:py-20 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[30px] md:text-[42px] font-semibold text-[#121519] leading-tight tracking-tight mb-4">
            {t('whoItsFor.title')}
          </h2>
          <p className="text-[16px] md:text-[20px] font-semibold text-slate-500 max-w-4xl mx-auto">
            {t('whoItsFor.subtitle')}
          </p>
        </div>

        {/* Provider Tags */}
        {/* Provider Tags */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {providers.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-[#FFC814] text-emerald-950 font-bold text-[14px] sm:text-[18px] rounded-full border border-[#FFC814]/40 hover:bg-[#FFF0B3] hover:border-[#FFF0B3] transition-all cursor-default shadow-sm text-center"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {t('whoItsFor.footerText') && (
          <div className="text-center mb-24 md:mb-32">
            <p className="text-[16px] md:text-[20px] font-medium text-slate-500 max-w-4xl mx-auto italic">
              {t('whoItsFor.footerText')}
            </p>
          </div>
        )}

        {/* ROI Stats */}
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-1000/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-1000/5 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-[30px] md:text-[42px] font-bold text-white leading-tight tracking-tight mb-6">
                {t('whoItsFor.roiTitle')}
              </h2>
              <p className="text-emerald-100/60 text-[16px] md:text-[20px] font-medium max-w-3xl mx-auto">
                {t('whoItsFor.roiSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 sm:p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="text-[30px] md:text-[40px] font-semibold text-emerald-400 mb-4 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-white/80 text-[15px] md:text-[18px] font-medium leading-snug px-4">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {t('whoItsFor.roiDisclaimer') && (
              <div className="mt-12 text-center px-4">
                <p className="text-emerald-100/50 text-[13px] md:text-[15px] font-medium max-w-4xl mx-auto leading-relaxed">
                  {t('whoItsFor.roiDisclaimer')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
