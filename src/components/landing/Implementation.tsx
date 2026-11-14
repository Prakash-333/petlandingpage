import { motion } from 'framer-motion';
import { useTranslation } from '@/context/LanguageContext';

export default function Implementation() {
  const { t } = useTranslation();
  const translatedSteps = t('implementation.steps') as { number: string, title: string, desc: string }[];

  return (
    <section id="implementation" className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[44px] font-heading font-bold text-[#121519] leading-tight tracking-tight mb-4">
            {t('implementation.title')}
          </h2>
          <p className="text-slate-500 text-[16px] md:text-[20px] font-medium max-w-5xl mx-auto">
            {t('implementation.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[52px] left-0 w-full h-[2px] bg-slate-200 hidden lg:block z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {translatedSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center lg:items-start"
              >
                {/* Mobile Connecting Line */}
                {i < translatedSteps.length - 1 && (
                  <div className="absolute top-14 left-1/2 lg:hidden w-0.5 h-16 bg-slate-200 -translate-x-1/2 z-0"></div>
                )}

                <div className="bg-white py-6 px-6 sm:px-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col w-full h-full relative z-10">
                  {/* Step Number Box */}
                  <div className="w-14 h-14 rounded-2xl bg-[#FFC814] flex items-center justify-center mb-6 shadow-lg shadow-[#FFC814]/20 group-hover:bg-[#FFC814]/90 transition-all duration-300 transform group-hover:scale-110 relative z-10 border-4 border-white self-center lg:self-start">
                    <span className="text-emerald-950 font-bold text-xl font-heading">
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-[#121519] mb-3 leading-tight tracking-tight text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-[15px] md:text-[18px] leading-relaxed font-medium text-center lg:text-left">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
