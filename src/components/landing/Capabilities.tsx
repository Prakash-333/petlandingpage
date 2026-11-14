import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Calendar, MessageSquare, Settings, Users, BarChart3, HeartPulse, GitMerge, Bot } from 'lucide-react';
import { useTranslation } from '@/context/LanguageContext';

export default function Capabilities() {
  const { t } = useTranslation();

  const capabilityIcons = [
    <Mic strokeWidth={2.5} />,
    <MessageSquare strokeWidth={2.5} />,
    <HeartPulse strokeWidth={2.5} />,
    <Calendar strokeWidth={2.5} />,
    <Users strokeWidth={2.5} />,
    <GitMerge strokeWidth={2.5} />,
    <Settings strokeWidth={2.5} />,
    <Bot strokeWidth={2.5} />,
    <BarChart3 strokeWidth={2.5} />
  ];

  const translatedCapabilities = (t('capabilities.list') as { category?: string, title: string, desc: string }[]).map((item, i) => ({
    ...item,
    icon: capabilityIcons[i]
  }));
  return (
    <section id="features" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[30px] md:text-[42px] font-bold text-[#121519] leading-tight tracking-tight mb-4">
            {t('capabilities.title')}
          </h2>
          <h3 className="text-[18px] md:text-[22px] font-bold text-emerald-600 max-w-4xl mx-auto mb-4 leading-snug">
            {t('capabilities.subtitle')}
          </h3>
          <p className="text-[16px] md:text-[20px] text-slate-600 font-medium max-w-4xl mx-auto">
            {t('capabilities.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translatedCapabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-[1.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFC814] flex items-center justify-center group-hover:bg-[#FFC814]/90 transition-all duration-300 shadow-md shadow-[#FFC814]/10 shrink-0">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-6 h-6 text-emerald-950' })}
                </div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#121519] leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-600 text-[15px] md:text-[18px] leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
